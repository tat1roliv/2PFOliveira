import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsAddComponent } from './components/students-add/students-add.component';
import { StudentsTempComponent } from './components/students-temp/students-temp.component';
import { StudentsEditarComponent } from './students-editar/students-editar.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    StudentsAddComponent,
    StudentsTempComponent,
    StudentsEditarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class StudentsModule { }
