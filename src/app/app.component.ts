import { Component } from '@angular/core';
import { ReadTimeOptions } from '../../projects/ngx-read-time/src/public_api';

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
