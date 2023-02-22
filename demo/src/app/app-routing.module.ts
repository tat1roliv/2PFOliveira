import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsTempComponent } from './components/students-temp/students-temp.component';
import { FormStudentComponent } from './components/form-student/form-student.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'students' , children: [
    {path: 'list', component: StudentsTempComponent}
  ]},
  {path: 'login' , component: FormStudentComponent},
  {path: 'home' , component: HomeComponent},
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
