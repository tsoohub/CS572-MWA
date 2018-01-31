import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import {IStudents} from './students.model';

@Component({
  selector: 'students',
  template: `
    <div>
      <h2>Student list</h2>
      <ul class="list-group">
        <li *ngFor="let st of students" class="list-group-item">
          <a [routerLink]="['profile', st.stuId]" >{{st.name}}</a>
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class StudentsComponent implements OnInit {

  students:Array<IStudents> = [];

  constructor(private studentService: DbService) {

  }

  ngOnInit() {
    this.students = this.studentService.getData();
  }

}
