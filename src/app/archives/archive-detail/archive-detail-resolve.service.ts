import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Archive } from '../shared/archive.model';
import { ArchiveService } from '../shared/archive.service';

@Injectable()

export class ArchiveDetailResolve implements Resolve<Archive> {
  constructor(
    private service: ArchiveService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Archive> {
    let id = +route.params['id'];

    return this.service.getArchive(id)
      .map(archive => this.getArchive(archive));
  }

  private getArchive(archive: Archive) {
    if (!archive) {
      this.router.navigate(['/archives']);
      return;
    }

    return archive;
  }
}
