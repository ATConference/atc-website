import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArchiveDetailResolve } from './archive-detail/archive-detail-resolve.service';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';
import { ArchivesComponent } from './archives.component';

const routes: Routes = [
  {
    path: 'archives',
    component: ArchivesComponent
  },
  {
    path: 'archives/:id',
    component: ArchiveDetailComponent,
    resolve: {
      archive: ArchiveDetailResolve
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ArchivesRoutingModule { }
