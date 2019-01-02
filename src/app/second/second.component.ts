import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private analyticsService : AnalyticsService) { }

  ngOnInit() {
  }

   sendEvent(action:String, label:String) {

this.analyticsService.sendEvent("sec-comp",action,label);
    
  }
}
