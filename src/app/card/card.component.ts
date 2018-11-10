import { Component, OnInit, Input, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() linkUrl = '';

  animationState = '';
  constructor() { }

  ngOnInit() {
    this.animationState = 'in';
  }

  ngOnDestroy() {
   this.animationState = 'out';
   this.sleep(200);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
