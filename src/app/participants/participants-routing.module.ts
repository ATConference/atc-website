import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParticipantDetailResolve } from './participant-detail/participant-detail-resolve.service';
import { ParticipantDetailComponent } from './participant-detail/participant-detail.component';
import { ParticipantsComponent } from './participants.component';

const routes: Routes = [
  {
    path: 'participants',
    component: ParticipantsComponent
  },
  {
    path: 'participants/:id',
    component: ParticipantDetailComponent,
    resolve: {
      participant: ParticipantDetailResolve
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ParticipantRoutingModule { }
