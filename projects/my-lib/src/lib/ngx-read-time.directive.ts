import { Directive, Input, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { ReadTimeOptions } from './ngx-read-time-options';
import { NgxReadTimeService } from './ngx-read-time.service';

@Directive({
  selector: '[nrtReadTime]'
})
export class ReadTimeDirective implements OnInit {
  @Input() targetContainer = null;
  @Input() options: ReadTimeOptions = {
    wordsPerMinute: 200
  };
  @Output() timeCalculated = new EventEmitter();
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
