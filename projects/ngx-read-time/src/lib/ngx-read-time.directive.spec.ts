import { ReadTimeDirective } from './ngx-read-time.directive';
import { NgxReadTimeService } from 'ngx-read-time';

describe('ReadTimeDirective', () => {
  it('should create an instance', () => {
    const directive = new ReadTimeDirective(
      {nativeElement: null},
      new NgxReadTimeService()
    );
    expect(directive).toBeTruthy();
  });
});
