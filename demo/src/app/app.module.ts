import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { StudentNamePipe } from './pipes/student-name.pipe';
import { TitleSizeDirective } from './directives/title-size.directive';

import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';



@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        NavbarComponent,
        FooterComponent,
        StudentNamePipe,
        TitleSizeDirective,
        NotFoundComponent,
        HomeComponent,
        LoginComponent,

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
