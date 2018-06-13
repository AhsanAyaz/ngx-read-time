import { TestBed, inject } from '@angular/core/testing';

import { NgxReadTimeService } from './ngx-read-time.service';

describe('NgxReadTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxReadTimeService]
    });
  });

  it('should be created', inject([NgxReadTimeService], (service: NgxReadTimeService) => {
    expect(service).toBeTruthy();
  }));
});
