import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cus_special_request_sub } from '../../../models/cus_special_request_sub';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor() {}

  @Input() students?: Cus_special_request_sub[]
  @Output() filter = new EventEmitter<{id: string, course: string, school: string}>()
  panelOpenState = false;
  searchById: string = ''
  searchByCourse: string = ''
  searchBySchool: string = ''
  idsList: string[] = []
  coursesList: string[] = []
  schoolsList: string[] = []

  getIdOptions() {
    this.idsList = []
    if (this.searchById && this.students) {
      for (let item of this.students) {
        if (item.stud_id.toString().startsWith(this.searchById) && !this.idsList.includes(item.stud_id.toString()))
          this.idsList.push(item.stud_id.toString())
      }
    }
  }

  getCourseOptions() {
    this.coursesList = []
    if (this.searchByCourse && this.students) {
      for (let item of this.students) {
        if (item.crscode && item.crscode.startsWith(this.searchByCourse.toUpperCase()) && !this.coursesList.includes(item.crscode.trim()))
          this.coursesList.push(item.crscode.trim())
      }
    }
  }

  getSchoolOptions() {
    this.schoolsList = []
    if (this.searchBySchool && this.students) {
      for (let item of this.students) {
        if (item.school && item.school.startsWith(this.searchBySchool.toUpperCase()) && !this.schoolsList.includes(item.school.trim()))
          this.schoolsList.push(item.school.trim())
      }
    }
  }

  onSearch() {
    this.idsList = []
    this.coursesList = []
    this.schoolsList = []
    if ((this.searchById.length && !Number.isNaN(+this.searchById)) || this.searchByCourse.length || this.searchBySchool.length) {
      this.filter.emit({id: this.searchById, course: this.searchByCourse.toUpperCase(), school: this.searchBySchool.toUpperCase()})
      this.searchById = ''
      this.searchByCourse = ''
      this.searchBySchool = ''
    }
    else {
      this.filter.emit({id: '-1', course: '-1', school: '-1'})
      this.searchById = ''
      this.searchByCourse = ''
      this.searchBySchool = ''
    }
  }
}
