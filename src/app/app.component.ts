import { Component } from '@angular/core';
import { ReadTimeOptions } from 'ngx-read-time';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rtConfig: ReadTimeOptions = {
    wordsPerMinute: 250
  };
  readTime: string;
}
