import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectgeneralComponent } from './subjectgeneral/subjectgeneral.component';
import { SubjectdetalleComponent } from './subjectdetalle/subjectdetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectgeneralComponent,
    SubjectdetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
