import { ReadTimeDirective } from './ngx-read-time.directive';
import { ReadTimeConfig } from './interfaces';

describe('ReadTimeDirective', () => {
  it('should create an instance', () => {
    const directive = new ReadTimeDirective(
      {nativeElement: null},
      {
        calculateReadTime: (str: string, options: ReadTimeConfig) => ({minutes: ''}),
        timeToString: (time: string) => ''
      }
    );
    expect(directive).toBeTruthy();
  });
});
