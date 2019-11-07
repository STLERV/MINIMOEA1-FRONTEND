import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Student} from '../models/students'
import {Subjects} from '../models/subjects';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import {ServiceService} from '../service.service';
import { PathLocationStrategy } from '@angular/common';

declare var M: any;
@Component({
  selector: 'app-subjectgeneral',
  templateUrl: './subjectgeneral.component.html',
  styleUrls: ['./subjectgeneral.component.css']
})
export class SubjectgeneralComponent implements OnInit {


listasubjects: Subjects[];
crearAsiForm: FormGroup;
submited = false;
subjectnew: Subjects;
alumnonew: Student;
submited2 = false;
crearAlForm: FormGroup;

  constructor(private frombuilder: FormBuilder, private escuelaservice: ServiceService, private router: Router) { }

  ngOnInit() {

    this.crearAsiForm  = this.frombuilder.group({

      name: ['', Validators.required],

    })

    this.crearAlForm  = this.frombuilder.group({

      name: ['', Validators.required],
      adress: ['', Validators.required],
      phones: ['', Validators.required],

    })

   
this.getSubjects();


  }

  entrarAsignatura(name: String){


    this.router.navigateByUrl("/api/subjectdetalle/" + `${name}`);
    
  }

  onSubmit(crearasi: NgForm){

    this.submited = true;
    if (this.crearAsiForm.invalid){
     return;
    }
    else
    this.postSubject(crearasi);

  }

  onSubmit2( crearAl: NgForm){

    this.submited2 = true;
    if (this.crearAlForm.invalid){
     return;
    }
    else
    this.postStudent(crearAl);

  }

  postStudent(crearAl: NgForm){
    this.alumnonew = new Student();
    this.alumnonew.name = crearAl.value.name;
    this.alumnonew.adress = crearAl.value.adress;
    this.alumnonew.phones = crearAl.value.phones;

    this.escuelaservice.postStudent(this.alumnonew)
    .subscribe(res => {
             
      M.toast({html: 'Añadid0'})
 
    
  
  }) 
  }


  postSubject(crearasi: NgForm){

    this.subjectnew = new Subjects();
    this.subjectnew.name = crearasi.value.name;

    this.escuelaservice.postSubject(this.subjectnew)
    .subscribe(res => {
      this.getSubjects();           
      M.toast({html: 'Añadida'})
      this.getSubjects();
    
  
  }) 

this.getSubjects();


  }

  getSubjects(){

    this.escuelaservice.getSubjects()

    .subscribe(res => 
      {
        this.listasubjects = res as Subjects[];
      })


  }




}
