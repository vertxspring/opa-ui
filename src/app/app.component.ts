import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from './analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'opa-ui';


  constructor(private analytics: AnalyticsService) {
  analytics.init();
 }
}
