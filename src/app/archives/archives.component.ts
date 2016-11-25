import { Component, OnInit } from '@angular/core';

import { ArchiveData } from './shared/archive-data.model';
import { ArchiveService } from './shared/archive.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html'
})
export class ArchivesComponent implements OnInit {
  data: ArchiveData;

  constructor(
    private service: ArchiveService
  ) {}

  ngOnInit() {
    this.service.getArchives().subscribe(data => this.data = data);
  }
}
