import { Component } from '@angular/core';
import {Facility} from '@eqrs/org';
import {NavigationItem} from '@eqrs/top-nav-comp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  // facility: Facility;
  // displayFacility: boolean = false;
  // readonly facilityURL: string = window['FACILITY_UI_URL'];
  // readonly dashboardURL: string = window['DASHBOARD_URL'];
  // readonly featureVersion: string = window['FEATURE_VERSION'];
  // readonly clinicalDepressionURL: string = window['REPORTING_MEASURE_AND_ATTESTATION_UI_URL'];
  // readonly activeNavItem = NavigationItem.FACILITIES;
}
