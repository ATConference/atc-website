import { Component, Input } from '@angular/core';

import { Program } from '../../programs/shared/program.model';

@Component({
  selector: 'app-participant-programs',
  templateUrl: './participant-programs.component.html',
  styleUrls: ['./participant-programs.component.scss']
})
export class ParticipantProgramsComponent {
  @Input() programs: Program[];
}
