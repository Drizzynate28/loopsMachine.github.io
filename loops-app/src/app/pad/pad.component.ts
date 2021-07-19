import { Component, Input } from '@angular/core';

@Component({
  selector: 'pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css'],
})
export class PadComponent {
  constructor() {}

  @Input() loop?: any;

  // this will change the pad state to active
  play(loopName) {
    var loopNameP = document.getElementById(loopName);
    if (loopNameP) {
      loopNameP.style.color = 'green';
      loopNameP.style.backgroundColor = 'white';
    }
    this.loop.isActive = true;
  }

  // this will change the pad state to not active
  stop(loopName) {
    var loopNameP = document.getElementById(loopName);
    if (loopNameP) {
      loopNameP.style.color = 'black';
      loopNameP.style.backgroundColor = '#c1b6db';
    }
    this.loop.isActive = false;
  }
}
