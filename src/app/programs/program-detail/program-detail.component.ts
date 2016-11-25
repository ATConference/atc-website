import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Program } from '../shared/program.model';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent implements OnInit {
  program: Program;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.program = this.route.snapshot.data['program'];
  }

  gotoList() {
    this.router.navigate(['/programs']);
  }

}
