import { Component, Input } from '@angular/core';

import { Archive } from '../shared/archive.model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  @Input() archive: Archive;
}
