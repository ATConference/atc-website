import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProgramRoutingModule } from './programs-routing.module';

import { ProgramDetailResolve } from './program-detail/program-detail-resolve.service';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramParticipantNamesComponent } from './program-participant-names/program-participant-names.component';
import { ProgramParticipantComponent } from './program-participant/program-participant.component';
import { ProgramComponent } from './program/program.component';
import { ProgramsComponent } from './programs.component';
import { ProgramService } from './shared/program.service';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';

@NgModule({
  imports: [
    SharedModule,
    ProgramRoutingModule,
  ],
  declarations: [
    ProgramsComponent,
    ProgramComponent,
    ProgramDetailComponent,
    ProgramListComponent,
    ProgramParticipantComponent,
    ProgramParticipantNamesComponent,
    FloorPlanComponent
  ],
  providers: [
    ProgramService,
    ProgramDetailResolve
  ]
})
export class ProgramsModule { }
