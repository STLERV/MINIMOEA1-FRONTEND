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
listastudents: Student[];
crearAsiForm: FormGroup;
submited = false;
subjectnew: Subjects;
alumnonew: Student;
submited2 = false;
crearAlForm: FormGroup;

protected  listaaeros: Student[] = [];
protected listatelecos: Student [] = [];
protected listatel: Student [] = [];

  constructor(private frombuilder: FormBuilder, private escuelaservice: ServiceService, private router: Router) { }

  ngOnInit() {

    this.crearAsiForm  = this.frombuilder.group({

      name: ['', Validators.required],

    })

    this.getStudents();
    

    this.crearAlForm  = this.frombuilder.group({

      id: ['',Validators.required],
      name: ['', Validators.required],
      adress: ['', Validators.required],
      phones: ['', Validators.required],
      carrera: ['', Validators.required],

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
    this.alumnonew.id = crearAl.value.id;
    this.alumnonew.name = crearAl.value.name;
    this.alumnonew.adress = crearAl.value.adress;
    this.alumnonew.phones = crearAl.value.phones;
    this.alumnonew.carrera = crearAl.value.carrera;

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



getStudents(){

    this.escuelaservice.getStudents()

    .subscribe(res => 
      {
        this.listastudents = res as Student[];

        this.getAeros(this.listastudents);
        this.getTelematicos(this.listastudents);        
        this.geTelecos(this.listastudents);        

      })


  }

   getAeros(listastudents : Student[]){
 
    
    listastudents.forEach(element =>{
 
   if (element.carrera == 'aeros')
    {
      this.listaaeros.push(element);
 
 
    }
   }
     )};


   getTelematicos(listastudents : Student[]){
 
   this.listastudents.forEach(element =>{
 
    if (element.carrera == 'telematica')
    {
   this.listatel.push(element)
 
 
    }});

    
   
   
  



  }
  
  geTelecos(listastudents : Student[]){
 
    this.listastudents.forEach(element =>{
  
     if (element.carrera == 'telecos')
     {
    this.listatelecos.push(element)
  
  
     }});
    }

  }
