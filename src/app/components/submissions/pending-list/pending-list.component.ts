import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Submissions } from '../../../models/submissions';
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
  @Input() students?: Submissions[]
  panelOpenState: boolean[] = [];
  list: Submissions[] = []
  open: boolean = false
  search: string = ''
  searchList: number[] = []

  ngOnChanges(changes: SimpleChanges): void {
    if (this.students)
      this.list = this.students
  }

  onSearch() {
    this.searchList = []
    if (this.search && this.students) {
      let searchList: Submissions[] = []
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
