import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Cus_special_request_sub } from '../../../models/cus_special_request_sub';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-accepted-list',
  templateUrl: './accepted-list.component.html',
  styleUrl: './accepted-list.component.css'
})
export class AcceptedListComponent implements OnChanges {

  constructor() {}

  @ViewChild(MatAccordion) accordion?: MatAccordion;
  @Output() rejected = new EventEmitter<boolean>(false)
  @Input() students?: Cus_special_request_sub[]
  panelOpenState: boolean[] = [];
  list: Cus_special_request_sub[] = []
  open: boolean = false
  searchById: string = ''
  searchBySection: string = ''
  searchList: number[] = []
  sectionsList: string[] = []

  ngOnChanges(changes: SimpleChanges): void {
    if (this.students)
      this.list = this.students.filter(item => item.submission_Status.startsWith('Approved'))
  }

  onSearch() {
    this.searchList = []
    this.sectionsList = []
    if (this.searchById.length && this.searchBySection.length && this.students) {
      let test: Cus_special_request_sub[] = []
      this.list = this.students
      for (let item of this.list) {
        if (item.stud_id.toString().startsWith(this.searchById) && item.section && item.section.toString().startsWith(this.searchBySection)) {
          test.push(item)
        }
      }
      this.list = test
      this.list.forEach(item =>!this.searchList.includes(item.stud_id)? this.searchList.push(item.stud_id): null)
      this.list.forEach(item =>!this.sectionsList.includes(item.section)? this.sectionsList.push(item.section.trim()): null)
    }
    else if (this.searchById.length && !this.searchBySection.length && this.students) {
      this.list = this.students
      this.onSearchById()
    }
    else if (!this.searchById.length && this.searchBySection.length && this.students) {
      this.list = this.students
      this.onSearchBySection()
    }
    else if (this.students && !this.searchBySection.length)
      this.list = this.students
  }

  onSearchById() {
    this.searchList = []
    if (this.searchById.length && this.students) {
      let searchList: Cus_special_request_sub[] = []
      this.list = this.list.length? this.list: this.students
      for (let item of this.list) {
        if (item.stud_id.toString().startsWith(this.searchById))
          searchList.push(item)
      }
      this.list = searchList
      this.list.forEach(item =>!this.searchList.includes(item.stud_id)? this.searchList.push(item.stud_id): null)
    }
  }

  onSearchBySection() {
    this.sectionsList = []
    if (this.searchBySection.length && this.students) {
      let sectionsList: Cus_special_request_sub[] = []
      this.list = this.list.length? this.list: this.students
      for (let item of this.list) {
        if (item.section && item.section.toString().startsWith(this.searchBySection))
          sectionsList.push(item)
      }
      this.list = sectionsList
      this.list.forEach(item =>!this.sectionsList.includes(item.section)? this.sectionsList.push(item.section.trim()): null)
    }
  }

  openAll() {
    this.open = !this.open
    this.accordion?.openAll()
  }

  closeAll() {
    this.open = !this.open
    this.accordion?.closeAll()
  }

  toRejected() {
    this.rejected.emit(true)
  }
}
