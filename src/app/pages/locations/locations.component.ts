import { Component } from '@angular/core';

import { LOCATIONS_DATA } from './locations-data';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  data = LOCATIONS_DATA;
}
