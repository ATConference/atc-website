import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Participant } from '../shared/participant.model';
import { ParticipantService } from '../shared/participant.service';

@Injectable()

export class ParticipantDetailResolve implements Resolve<Participant> {
  constructor(
    private service: ParticipantService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Participant> {
    let id = +route.params['id'];

    return this.service.getParticipant(id)
      .map(participant => this.getParticipant(participant));
  }

  private getParticipant(participant: Participant) {
    if (!participant) {
      this.router.navigate(['/participants']);
      return;
    }

    return participant;
  }
}
