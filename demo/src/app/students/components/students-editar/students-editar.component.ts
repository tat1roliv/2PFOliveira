import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-students-editar',
  templateUrl: './students-editar.component.html',
  styleUrls: ['./students-editar.component.css']
})
export class StudentsEditarComponent implements OnInit{

  formStudents!: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);

      this.formStudents = new FormGroup({
        id_: new FormControl(parametros.get('id_')),
        name: new FormControl(parametros.get('name')),
        lastName: new FormControl(parametros.get('lastName')),
        email: new FormControl(parametros.get('email')),
        course: new FormControl(parametros.get('course')),
      })
    })

  }

  studentsEdit(){

  }

}
