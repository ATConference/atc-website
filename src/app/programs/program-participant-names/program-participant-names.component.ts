import { Component, Input } from '@angular/core';

import { Participant } from '../../participants/shared/participant.model';

@Component({
  selector: 'app-program-participant-names',
  templateUrl: './program-participant-names.component.html'
})
export class ProgramParticipantNamesComponent {
  @Input() participants: Participant[];
}
