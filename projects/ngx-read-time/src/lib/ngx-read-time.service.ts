import { Injectable } from '@angular/core';
import { ReadTimeOptions } from './ngx-read-time-options';

@Injectable({
  providedIn: 'root'
})
export class NgxReadTimeService {

  constructor() { }

  calculateReadTime(text: string, options: ReadTimeOptions) {
    const wordsCount = text.split(/\s+/g).length;
    const minutes = wordsCount / options.wordsPerMinute;
    return {
      minutes: this.timeToString(minutes, 'minutes')
    };
  }

  timeToString(amount, unit) {
    if (unit === 'minutes') {
      if (amount < 1) {
        return '< 1 minute';
      }
      return `${Math.round(amount)} minutes`;
    }
  }

}
