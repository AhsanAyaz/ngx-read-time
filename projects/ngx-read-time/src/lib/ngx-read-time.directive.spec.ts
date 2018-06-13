import { ReadTimeDirective } from './ngx-read-time.directive';
import { ReadTimeOptions } from './ngx-read-time-options';

describe('ReadTimeDirective', () => {
  it('should create an instance', () => {
    const directive = new ReadTimeDirective(
      {nativeElement: null},
      {
        calculateReadTime: (str: string, options: ReadTimeOptions) => ({minutes: ''}),
        timeToString: (time: string) => ''
      }
    );
    expect(directive).toBeTruthy();
  });
});
