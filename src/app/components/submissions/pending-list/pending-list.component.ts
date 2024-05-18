import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Cus_special_request_sub } from '../../../models/cus_special_request_sub';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrl: './pending-list.component.css'
})
export class PendingListComponent implements OnChanges {

  constructor() {}

  @ViewChild(MatAccordion) accordion?: MatAccordion;
  @Output() rejected = new EventEmitter<boolean>(false)
  @Input() students?: Cus_special_request_sub[]
  panelOpenState: boolean[] = [];
  list: Cus_special_request_sub[] = []
  open: boolean = false
  search: string = ''
  searchList: number[] = []

  ngOnChanges(changes: SimpleChanges): void {
    if (this.students)
      this.list = this.students.filter(item => item.submission_Status.startsWith('Pending'))
  }

  onSearch() {
    this.searchList = []
    if (this.search && this.students) {
      let searchList: Cus_special_request_sub[] = []
      this.list = this.students
      for (let item of this.list) {
        if (item.stud_id.toString().startsWith(this.search))
          searchList.push(item)
      }
      if (searchList.length) {
        this.list = searchList
        this.list.forEach(item =>!this.searchList.includes(item.stud_id)? this.searchList.push(item.stud_id): null)
      }
    }
    else if (this.students)
      this.list = this.students
  }

  openAll() {
    this.open = !this.open
    this.accordion?.openAll()
  }

  closeAll() {
    this.open = !this.open
    this.accordion?.closeAll()
  }
}
