import { Component, OnInit } from '@angular/core';
import { Cus_special_request_sub } from '../../models/cus_special_request_sub';
import { SubmissionsService } from '../../services/submissions.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent implements OnInit {

  constructor(
    private service: SubmissionsService,
    private sanitizer: DomSanitizer
  ) {}

  accepted: boolean = true
  rejected: boolean = false
  acceptedList: boolean = true
  rejectedList: boolean = false
  list: Cus_special_request_sub[] = []
  fileUrl?: any

  ngOnInit(): void {
    this.setList()
  }

  convertToCsv(data: any[]): string {
    if (!data || !data.length) {
      return '';
    }

    const keys = Object.keys(data[0]);
    const csvContent = data.map(row => {
      return keys.map(key => row[key]).join(',');
    });

    return [keys.join(','), ...csvContent].join('\n');
  }

  downloadCsv(): void {
    const csvData = this.convertToCsv(this.list);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'table-data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
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
      next: data => {this.list = data}
    })
  }

  onSearch(event: {id: string, course: string, school: string}) {
    // if (event.id && event.course && event.school)
    //   this.list = this.list.filter(item => item.stud_id.toString().startsWith(event.id) && item.crscode.startsWith(event.course) && item.school.startsWith(event.school))
    if (event.id.length)
      this.list = this.list.filter(item => item.stud_id.toString().startsWith(event.id))
    if (event.course.length)
      this.list = this.list.filter(item => item.crscode.startsWith(event.course))
    if (event.school.length)
      this.list = this.list.filter(item => item.school.startsWith(event.school))
    if (!this.list.length || (event.id === '-1' && event.course === '-1' && event.school === '-1'))
      this.setList()
  }
}
