import { Component } from '@angular/core';

import { FLOORPLAN_DATA } from './floor-plan-data';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss']
})
export class FloorPlanComponent {
  data = FLOORPLAN_DATA;
}
