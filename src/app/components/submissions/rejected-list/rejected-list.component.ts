import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Cus_special_request_sub } from '../../../models/cus_special_request_sub';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-rejected-list',
  templateUrl: './rejected-list.component.html',
  styleUrl: './rejected-list.component.css'
})
export class RejectedListComponent implements OnChanges {

  constructor() {}

  @ViewChild(MatAccordion) accordion?: MatAccordion;
  @Output() accepted = new EventEmitter<boolean>(false)
  @Input() students?: Cus_special_request_sub[]
  panelOpenState: boolean[] = [];
  list: Cus_special_request_sub[] = []
  actualColumns?: Cus_special_request_sub[]
  open: boolean = false
  search: string = ''
  searchList: number[] = []

  ngOnChanges(changes: SimpleChanges): void {
    if (this.students) {
      this.list = this.students.filter(item => item.submission_Status.startsWith('Rejected'))
      this.actualColumns = this.list.slice(0, 20)
    }
  }

  onSearch() {
    this.searchList = []
    if (this.search && this.students) {
      let searchList: Cus_special_request_sub[] = []
      this.actualColumns = this.list
      for (let item of this.actualColumns) {
        if (item.stud_id.toString().startsWith(this.search))
          searchList.push(item)
      }
      // if (searchList.length) {
        this.actualColumns = searchList
        this.actualColumns.forEach(item =>!this.searchList.includes(item.stud_id)? this.searchList.push(item.stud_id): null)
      // }
    }
    else if (this.students)
      this.actualColumns = this.list
  }

  openAll() {
    this.open = !this.open
    this.accordion?.openAll()
  }

  closeAll() {
    this.open = !this.open
    this.accordion?.closeAll()
  }

  toAccepted() {
    this.accepted.emit(true)
  }

  start: number = 20
  onScroll(event: any) {
    const bottomPosition = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottomPosition && this.list) {
      this.actualColumns = this.actualColumns?.concat(this.list.slice(this.start, this.start + 20))
      this.start += 20
    }
  }
}
