import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Student } from '../../../models/student';
//import { StudentService } from '../../../services/student.service';
import { Input, Output , EventEmitter } from '@angular/core';

import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students-temp',
  templateUrl: './students-temp.component.html',
  styleUrls: ['./students-temp.component.css']
})

export class StudentsTempComponent implements OnInit, OnDestroy {

 @Input() studentsTemp: Student[] = [];

 studentsTemp$!: Observable<Student[]>;
 suscripcion!: Subscription;

  constructor(
    public studentsService: StudentsService
    ) {
  }


  ngOnInit() {
    this.studentsTemp$ = this.studentsService. getStudentsObservable();
  }

  removeStudent(student: Student): void {
    this.studentsService.removeStudent(student);
  }

  ngOnDestroy() {

  }


}
