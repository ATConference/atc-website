import { Component, Input } from '@angular/core';

import { Program } from '../shared/program.model';
import { Category } from './../../shared/category.model';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent {
  @Input() category: Category[];
  @Input() programs: Program[];
}
