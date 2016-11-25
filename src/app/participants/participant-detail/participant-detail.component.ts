import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Participant } from '../shared/participant.model';

@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styleUrls: ['./participant-detail.component.scss']
})
export class ParticipantDetailComponent implements OnInit {
  participant: Participant;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.participant = this.route.snapshot.data['participant'];
  }

  gotoList() {
    this.router.navigate(['/participants']);
  }

}
