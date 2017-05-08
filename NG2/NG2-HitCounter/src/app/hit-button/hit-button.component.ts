import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-hit-button',
  templateUrl: './hit-button.component.html',
  styleUrls: ['./hit-button.component.css']
})
export class HitButtonComponent implements OnInit {

  @Output()
  hit = new EventEmitter();

  @Input()
  incBy: number;

  @Input()
  count: number;

  constructor() {
  }

  ngOnInit() {
  }

  handleClick(event) {
    this.hit.emit({ incBy: this.incBy });
  }

}
