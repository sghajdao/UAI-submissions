import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Submissions } from '../../../models/submissions';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-accepted-list',
  templateUrl: './accepted-list.component.html',
  styleUrl: './accepted-list.component.css'
})
export class AcceptedListComponent implements OnInit {

  constructor() {}

  @ViewChild(MatAccordion) accordion?: MatAccordion;
  @Output() rejected = new EventEmitter<boolean>(false)
  panelOpenState: boolean[] = [];
  list: Submissions[] = []
  open: boolean = false
  search: string = ''
  searchList: number[] = []

  ngOnInit(): void {
    this.setList()
  }

  setList() {
    this.list = []
    this.panelOpenState.push(false)
    this.list.push({
      stud_id: 98550,
      crscode: '@3q',
      submission_ID: '@@SubmissionID',
      year_cde: '@14q',
      term_cde: '@13q',
      submission_status: 'Pending',
      submission_dte: new Date('2024-03-13 13:06:18.000')
    })
    this.panelOpenState.push(false)
    this.list.push({
      stud_id: 90305,
      crscode: 'INT4001',
      submission_ID: '000327d4-3949-44a0-b009-310ac2c19c6b',
      year_cde: '2324',
      term_cde: 'SP',
      submission_status: 'Pending',
      submission_dte: new Date('2024-04-02 04:15:41.000')
    })
    this.panelOpenState.push(false)
    this.list.push({
      stud_id: 98550,
      crscode: 'ACC2301',
      submission_ID: '7a236e9b-4836-4eaf-ac76-40e0db363014',
      year_cde: '2324',
      term_cde: 'SP',
      submission_status: 'Pending',
      submission_dte: new Date('2024-04-05 00:30:40.000')
    })
  }

  onSearch() {
    this.searchList = []
    if (this.search) {
      let searchList: Submissions[] = []
      this.setList()
      for (let item of this.list) {
        if (item.stud_id.toString().includes(this.search))
          searchList.push(item)
      }
      if (searchList.length) {
        this.list = searchList
        this.list.forEach(item =>!this.searchList.includes(item.stud_id)? this.searchList.push(item.stud_id): null)
      }
    }
    else
      this.setList()
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
