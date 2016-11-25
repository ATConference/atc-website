import { NgModule } from '@angular/core';

import { MnFullpageDirective, MnFullpageService } from 'ng2-fullpage';

import { SharedModule } from '../shared/shared.module';
import { PageRoutingModule } from './pages-routing.module';

import { AboutComponent } from './about/about.component';
import { LocationsComponent } from './locations/locations.component';
import { MainComponent } from './main/main.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  imports: [
    SharedModule,
    PageRoutingModule
  ],
  declarations: [
    MnFullpageDirective,
    AboutComponent,
    ScheduleComponent,
    LocationsComponent,
    MainComponent
  ],
  providers: [
    MnFullpageService
  ]
})
export class PagesModule { }
