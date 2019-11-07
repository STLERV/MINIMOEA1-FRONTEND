import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subjects } from './models/subjects';
import { Student } from './models/students';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  //router.get('/todos', UsuCtrl.getStudents);
  //router.get('/:name', UsuCtrl.getSubject);
  //router.post('/subject', UsuCtrl.postSubject);
  //router.post('/student', UsuCtrl.postStudent);
  //router.put('/subject/:name', UsuCtrl.AñadirStudent);
 


readonly URL_API = 'http://localhost:3000/api/escuela';
  constructor(private http: HttpClient) { }

 getSubjects():Observable<Subjects[]>{
    return this.http.get<Subjects []>(this.URL_API);
}
 

getStudents():Observable<Student[]>{

  return this.http.get<Student[]>(this.URL_API + '/todos');
}


getSubject(name: string):Observable<Subjects>{

  return this.http.get<Subjects>(this.URL_API + `/${name}`); 

}
postSubject(subject: Subjects){
  return this.http.post(this.URL_API + '/subject', subject);
}
postStudent(student: Student){

  return this.http.post(this.URL_API + '/student', student);

}

AñadirStudent(name: String, student: Student){

return this.http.put(this.URL_API + '/subject' + `/${name}`, student);

}

getStudent(name: string):Observable<Student>{

  return this.http.get<Student>(this.URL_API + '/student' + `/${name}`); 

}
}
