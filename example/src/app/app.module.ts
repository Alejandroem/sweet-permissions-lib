import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import{ SweetPermissionsLibModule } from 'sweet-permissions-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SweetPermissionsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
