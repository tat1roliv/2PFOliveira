import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { StudentService } from '../../services/student.service';
//import { Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})


export class StudentsListComponent implements OnInit, OnDestroy{

  dataSource!: MatTableDataSource<Student> ;
  suscripcion!: Subscription;

  //table cols header data
  tableColumns: string[] = [ 'id_', 'name' ,  'email' , 'course', 'actions'];

  constructor(public studentService: StudentService) {

  }

  handleEditStudent(){
    console.log('edit student')
  }

  handleRemove(){
    console.log('remove student')
  }
  //testing
  //(click)="onRowClicked(row)"
  onRowClicked(row: any) {
    console.log('Row clicked: ', row);
  }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Student>();
    this.suscripcion = this.studentService.getSudentsObservable().subscribe((students: Student[])=> {
      this.dataSource.data = students;
    });
  };

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

}
