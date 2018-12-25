import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {
 
   abc = "I am ABC";
  getString(){
    console.log("I am in getString()");
    return "I am from service";
  }


  getString2(){
    console.log("I am in getString2()");
    return "I am from service2";
  }


  getData(num : number){
   return this.http.get("https://jsonplaceholder.typicode.com/posts/" + num + "/comments");
   
  }
  constructor( private http: HttpClient) {

    console.log("I am in constructor");

   }
}
