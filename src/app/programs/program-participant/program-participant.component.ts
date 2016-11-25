import { Component, Input } from '@angular/core';

import { Participant } from '../../participants/shared/participant.model';

@Component({
  selector: 'app-program-participant',
  templateUrl: './program-participant.component.html',
  styleUrls: ['./program-participant.component.scss']
})
export class ProgramParticipantComponent {
  @Input() participant: Participant;
}
