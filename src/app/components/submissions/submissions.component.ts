import { Component, OnInit } from '@angular/core';
import { Cus_special_request_sub } from '../../models/cus_special_request_sub';
import { SubmissionsService } from '../../services/submissions.service';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent implements OnInit {

  constructor(
    private service: SubmissionsService
  ) {}

  accepted: boolean = true
  rejected: boolean = false
  acceptedList: boolean = true
  rejectedList: boolean = false
  list: Cus_special_request_sub[] = []

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
    this.service.getData().subscribe({
      next: data => this.list = data
    })
  }

  onSearch(event: {id: string, section: string}) {
    if (event.id && event.section)
      this.list = this.list.filter(item => item.stud_id.toString().startsWith(event.id) && item.section.startsWith(event.section))
    else if (!event.id)
      this.list = this.list.filter(item => item.section.startsWith(event.section))
    else if (!event.section)
      this.list = this.list.filter(item => item.stud_id.toString().startsWith(event.id))
    if (!this.list.length)
      this.setList()
  }
}
