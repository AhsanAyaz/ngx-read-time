import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxReadTimeModule } from 'ngx-read-time';

import { AppComponent } from './app.component';

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
