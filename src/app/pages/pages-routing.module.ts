import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LocationsComponent } from './locations/locations.component';
import { MainComponent } from './main/main.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'schedule', component: ScheduleComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PageRoutingModule { }
