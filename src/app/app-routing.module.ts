import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonListComponent } from './common-list/common-list.component';
import { CommonDetailComponent } from './common-detail/common-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/common/npcs', pathMatch: 'full' },
  { path: 'common/:table', component: CommonListComponent },
  { path: 'common/:table/:id', component: CommonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
