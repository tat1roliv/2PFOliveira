import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormStudentComponent } from './components/form-student/form-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { StudentNamePipe } from './pipes/student-name.pipe';
import { TitleSizeDirective } from './directives/title-size.directive';
import { StudentsTempComponent } from './components/students-temp/students-temp.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        NavbarComponent,
        FooterComponent,
        FormStudentComponent,
        StudentNamePipe,
        TitleSizeDirective,
        StudentsTempComponent,
        NotFoundComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
    ]
})
export class AppModule { }
