import { Component, Input } from '@angular/core';

import { Program } from '../../programs/shared/program.model';

@Component({
  selector: 'app-participant-program',
  templateUrl: './participant-program.component.html',
  styleUrls: ['./participant-program.component.scss']
})
export class ParticipantProgramComponent {
  @Input() id: number;
  @Input() program: Program;
}
