import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgramDetailResolve } from './program-detail/program-detail-resolve.service';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { ProgramsComponent } from './programs.component';

const routes: Routes = [
  {
    path: 'programs',
    component: ProgramsComponent
  },
  {
    path: 'programs/:id',
    component: ProgramDetailComponent,
    resolve: {
      program: ProgramDetailResolve
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProgramRoutingModule { }
