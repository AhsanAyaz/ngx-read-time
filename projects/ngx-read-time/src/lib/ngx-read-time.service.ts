import { Injectable } from '@angular/core';
import { ReadTimeConfig } from './interfaces';
import { TimeUnit } from './constants';

@Injectable({
  providedIn: 'root'
})
export class NgxReadTimeService {

  constructor() { }

  calculateReadTime(text: string, options: ReadTimeConfig) {
    const wordsCount = text.split(/\s+/g).length;
    const minutes = wordsCount / options.wordsPerMinute;
    return {
      minutes: this.timeToString(minutes, TimeUnit.MINUTES)
    };
  }

  timeToString(amount, unit) {
    if (unit === TimeUnit.MINUTES) {
      if (amount < 1) {
        return '< 1 minute';
      } else if (amount === 1) {
        return '1 minute';
      }
    }
    return `${Math.round(amount)} ${unit}`;
  }

}
