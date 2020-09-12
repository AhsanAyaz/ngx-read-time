import { Component } from '@angular/core';
import { ReadTimeConfig, TimeUnit } from 'projects/ngx-read-time/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  readTime: string;
  rtConfig: ReadTimeConfig = {
    wordsPerMinute: 250,
    timeUnit: TimeUnit.MINUTES
  }
}
