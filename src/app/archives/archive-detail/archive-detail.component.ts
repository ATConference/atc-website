import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Archive } from '../shared/archive.model';

@Component({
  selector: 'app-archive-detail',
  templateUrl: './archive-detail.component.html',
  styleUrls: ['./archive-detail.component.scss']
})
export class ArchiveDetailComponent implements OnInit {
  archive: Archive;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.archive = this.route.snapshot.data['archive'];
  }
}
