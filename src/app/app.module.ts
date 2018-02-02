import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { CommonListComponent } from './common-list/common-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { CommonDetailComponent } from './common-detail/common-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonListComponent,
    CommonDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
