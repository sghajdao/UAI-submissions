import { Component } from '@angular/core';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent {

  constructor() {}

  accepted: boolean = true
  rejected: boolean = false
  acceptedList: boolean = true
  rejectedList: boolean = false

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
}
