import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ParticipantRoutingModule } from './participants-routing.module';

import { ParticipantDetailResolve } from './participant-detail/participant-detail-resolve.service';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantProgramComponent } from './participant-program/participant-program.component';
import { ParticipantProgramsComponent } from './participant-programs/participant-programs.component';
import { ParticipantComponent } from './participant/participant.component';
import { ParticipantsComponent } from './participants.component';
import { ParticipantService } from './shared/participant.service';

@NgModule({
  imports: [
    SharedModule,
    ParticipantRoutingModule,
  ],
  declarations: [
    ParticipantsComponent,
    ParticipantComponent,
    ParticipantDetailComponent,
    ParticipantListComponent,
    ParticipantProgramComponent,
    ParticipantProgramsComponent
  ],
  providers: [
    ParticipantService,
    ParticipantDetailResolve
  ]
})
export class ParticipantsModule { }
