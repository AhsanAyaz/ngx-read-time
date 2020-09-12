import { Directive, Input, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { ReadTimeConfig } from './interfaces';
import { NgxReadTimeService } from './ngx-read-time.service';
import { TimeUnit } from './constants';

@Directive({
  selector: '[nrtReadTime]'
})
export class ReadTimeDirective implements OnInit {
  @Input() targetContainer = null;
  @Input() options: ReadTimeConfig = {
    wordsPerMinute: 200,
    timeUnit: TimeUnit.MINUTES
  };
  @Output() timeCalculated = new EventEmitter<{minutes: string}>();
  containerEl;
  constructor(
    private el: ElementRef,
    private rtService: NgxReadTimeService
  ) { }

  ngOnInit() {
    this.containerEl = this.targetContainer !== null ?
      this.targetContainer : this.el.nativeElement;
    if (this.containerEl) {
      const readTime = this.rtService.calculateReadTime(this.containerEl.textContent, this.options);
      this.timeCalculated.emit(readTime);
    } else {
      throw new Error('Container element not found');
    }
  }
}
