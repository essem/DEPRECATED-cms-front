import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatTableModule,
  ],
})
export class MaterialModule {}
