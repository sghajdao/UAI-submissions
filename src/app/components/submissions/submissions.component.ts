import { Component, OnInit } from '@angular/core';
import { Submissions } from '../../models/submissions';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent implements OnInit {

  constructor() {}

  accepted: boolean = true
  rejected: boolean = false
  acceptedList: boolean = true
  rejectedList: boolean = false
  list: Submissions[] = []

  ngOnInit(): void {
    this.setList()
  }

  toAccepted(event: boolean) {
    this.accepted = event
    let card = document.getElementById("myFlipCard");
    card?.classList.toggle("flipped");
    this.rejected = false
  }

  toRjected(evet: boolean) {
    this.rejected = evet
    let card = document.getElementById("myFlipCard");
    card?.classList.toggle("flipped");
    this.accepted = false
  }

  toRejectedList(event: boolean) {
    this.rejectedList = event
    let card = document.getElementById("myFlipList");
    card?.classList.toggle("flipped");
    this.acceptedList =false
  }

  toAcceptedList(event: boolean) {
    this.acceptedList = event
    let card = document.getElementById("myFlipList");
    card?.classList.toggle("flipped");
    this.rejectedList =false
  }

  setList() {
    this.list = []
    this.list.push({
      stud_id: 98550,
      crscode: '@3q',
      submission_ID: '@@SubmissionID',
      year_cde: '@14q',
      term_cde: '@13q',
      submission_status: 'Pending',
      submission_dte: new Date('2024-03-13 13:06:18.000')
    })
    this.list.push({
      stud_id: 90305,
      crscode: 'INT4001',
      submission_ID: '000327d4-3949-44a0-b009-310ac2c19c6b',
      year_cde: '2324',
      term_cde: 'SP',
      submission_status: 'Pending',
      submission_dte: new Date('2024-04-02 04:15:41.000')
    })
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
}
