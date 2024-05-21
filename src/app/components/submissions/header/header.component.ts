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
  @Output() filter = new EventEmitter<{id: string, section: string}>()
  panelOpenState = false;
  searchById: string = ''
  searchBySection: string = ''
  idsList: string[] = []
  sectionsList: string[] = []

  getIdOptions() {
    this.idsList = []
    if (this.searchById && this.students) {
      for (let item of this.students) {
        if (item.stud_id.toString().startsWith(this.searchById) && !this.idsList.includes(item.stud_id.toString()))
          this.idsList.push(item.stud_id.toString())
      }
    }
  }

  getSectionOptions() {
    this.sectionsList = []
    if (this.searchBySection && this.students) {
      for (let item of this.students) {
        if (item.stud_id.toString().startsWith(this.searchBySection) && !this.sectionsList.includes(item.stud_id.toString()))
          this.sectionsList.push(item.stud_id.toString())
      }
    }
  }

  onSearch() {
    this.idsList = []
    this.sectionsList = []
    if (this.searchById.length && !Number.isNaN(+this.searchById) || this.searchBySection.length) {
      this.filter.emit({id: this.searchById, section: this.searchBySection})
      this.searchById = ''
      this.searchBySection = ''
    }
    else {
      this.filter.emit({id: '-1', section: '-1'})
      this.searchById = ''
      this.searchBySection = ''
    }
  }
}
