import { Component, Input } from '@angular/core';

import { Archive } from '../shared/archive.model';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.scss']
})
export class ArchiveListComponent {
  @Input() archives: Archive[];
}
