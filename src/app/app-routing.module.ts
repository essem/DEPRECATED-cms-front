import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonListComponent } from './common-list/common-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/npcs', pathMatch: 'full' },
  { path: 'npcs', component: CommonListComponent },
  { path: 'items', component: CommonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
