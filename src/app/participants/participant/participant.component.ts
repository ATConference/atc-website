import { Component, Input } from '@angular/core';

import { Participant } from '../shared/participant.model';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent {
  @Input() participant: Participant;
}
