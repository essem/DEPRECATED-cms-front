import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonListComponent } from './common-list/common-list.component';
import { CommonDetailComponent } from './common-detail/common-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/npcs', pathMatch: 'full' },
  { path: 'npcs', component: CommonListComponent },
  { path: 'npcs/:id', component: CommonDetailComponent },
  { path: 'items', component: CommonListComponent },
  { path: 'items/:id', component: CommonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
