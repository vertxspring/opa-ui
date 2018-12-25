import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  data:String;
  inp : number;
  constructor (private xyz : FakeService) {

   
   }

  ngOnInit() {
  
  }

  fetch(num : number){
   this.xyz.getData(num).subscribe(info => { this.data = JSON.stringify(info)});


  }
  
}
