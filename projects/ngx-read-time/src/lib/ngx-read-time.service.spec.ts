import { TestBed, inject } from '@angular/core/testing';
import { TimeUnit } from './constants';

import { NgxReadTimeService } from './ngx-read-time.service';
import { demoTextWithMarkup, generateText } from './sample-texts';

describe('NgxReadTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxReadTimeService]
    });
  });

  it('should return 3 mins for the demo', inject([NgxReadTimeService], (service: NgxReadTimeService) => {
    expect(service.calculateReadTime(demoTextWithMarkup, {
      wordsPerMinute: 250,
      timeUnit: TimeUnit.MINUTES
    })).toEqual({
      minutes: service.timeToString(3, TimeUnit.MINUTES)
    });
  }));

  it('should handle 0 words', inject([NgxReadTimeService], (service: NgxReadTimeService) => {
    expect(service.calculateReadTime(generateText(0), {
      wordsPerMinute: 250,
      timeUnit: TimeUnit.MINUTES
    })).toEqual({
      minutes: service.timeToString(0, TimeUnit.MINUTES)
    });
  }));

  it('should handle 1 word', inject([NgxReadTimeService], (service: NgxReadTimeService) => {
    expect(service.calculateReadTime(generateText(1), {
      wordsPerMinute: 250,
      timeUnit: TimeUnit.MINUTES
    })).toEqual({
      minutes: service.timeToString(1 / 250, TimeUnit.MINUTES)
    });
  }));

  it('should show less than 1 minute', inject([NgxReadTimeService], (service: NgxReadTimeService) => {
    expect(service.calculateReadTime(generateText(2), {
      wordsPerMinute: 250,
      timeUnit: TimeUnit.MINUTES
    })).toEqual({
      minutes: service.timeToString(2 / 250, TimeUnit.MINUTES)
    });
  }));

  it('should show less than 1 minute', inject([NgxReadTimeService], (service: NgxReadTimeService) => {
    expect(service.calculateReadTime(generateText(50), {
      wordsPerMinute: 250,
      timeUnit: TimeUnit.MINUTES
    })).toEqual({
      minutes: service.timeToString(50 / 250, TimeUnit.MINUTES)
    });
  }));

  it('should show 1 minute', inject([NgxReadTimeService], (service: NgxReadTimeService) => {
    expect(service.calculateReadTime(generateText(300), {
      wordsPerMinute: 250,
      timeUnit: TimeUnit.MINUTES
    })).toEqual({
      minutes: service.timeToString(1, TimeUnit.MINUTES)
    });
  }));

  it('should show 30 minutes', inject([NgxReadTimeService], (service: NgxReadTimeService) => {
    expect(service.calculateReadTime(generateText(250 * 30), {
      wordsPerMinute: 250,
      timeUnit: TimeUnit.MINUTES
    })).toEqual({
      minutes: service.timeToString(30, TimeUnit.MINUTES)
    });
  }));

});
