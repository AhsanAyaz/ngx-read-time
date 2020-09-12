import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxReadTimeModule } from 'ngx-read-time';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxReadTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
