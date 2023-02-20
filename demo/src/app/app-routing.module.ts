import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStudentComponent } from './components/form-student/form-student.component';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
