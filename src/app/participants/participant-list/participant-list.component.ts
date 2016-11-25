import { Component, Input } from '@angular/core';

import { Participant } from '../shared/participant.model';
import { Category } from './../../shared/category.model';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent {
  @Input() category: Category[];
  @Input() participants: Participant[];
}
