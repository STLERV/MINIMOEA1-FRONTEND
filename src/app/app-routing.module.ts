import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubjectdetalleComponent} from './subjectdetalle/subjectdetalle.component';
import {SubjectgeneralComponent} from './subjectgeneral/subjectgeneral.component';

const routes: Routes = [

  {path: 'api/subjectgeneral', component: SubjectgeneralComponent },
  {path: 'api/subjectdetalle/:name', component: SubjectdetalleComponent},
  {path: '', redirectTo: '/api/subjectgeneral', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
