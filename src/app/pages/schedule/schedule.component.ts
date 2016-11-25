import { Component } from '@angular/core';

import { SCHEDULE_DATA } from './schedule-data';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent {
  data = SCHEDULE_DATA;
}
