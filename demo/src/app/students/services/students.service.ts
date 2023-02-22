import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  public students: Student[] = [
  {
    id_: '1',
    name: 'Ada',
    lastName: 'Lovelace',
    email: 'ada@test.com',
    course: 'Angular',
  },
  {
    id_: '2',
    name: 'Alan',
    lastName: 'Turing',
    email: 'a.turing@test.com',
    course: 'C',
  },
  {
    id_: '3',
    name: 'Robert',
    lastName: 'Martin',
    email: 'unclebob@test.com',
    course: 'Java',
  },
  {
    id_: '4',
    name: 'Tim',
    lastName: 'Berners-Lee ',
    email: 'tim@test.com',
    course: 'React',
  },
  {
    id_: '5',
    name: 'Grace',
    lastName: 'Hopper',
    email: 'hopper@test.com',
    course: 'Cobol',
  },
];

  public students$!: BehaviorSubject<Student[]>;

  constructor() {
    //observable/subject
    this.students$ = new BehaviorSubject<Student[]>(this.students);
  }


  getSudentsObservable(): Observable<Student[]>{
    return this.students$.asObservable();
  }

  addStudent(student: Student){
    this.students.push(student);
    this.students$.next(this.students);
    console.log('added from service', this.students);
  }

  getSudentsPromise(): Promise<Student[]>{
    return new Promise((resolve, reject) => {
      if(this.students.length > 0){
        resolve(this.students);
      }else{
        reject([]);
      }
    });
  }

}


