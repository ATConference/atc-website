import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Program } from '../shared/program.model';
import { ProgramService } from '../shared/program.service';

@Injectable()

export class ProgramDetailResolve implements Resolve<Program> {
  constructor(
    private service: ProgramService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Program> {
    let id = +route.params['id'];

    return this.service.getProgram(id)
      .map(program => this.getProgram(program));
  }

  private getProgram(program: Program) {
    if (!program) {
      this.router.navigate(['/programs']);
      return;
    }

    return program;
  }
}
