import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss']
})
export class CounterComponentComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

  @Input()   myFriend: string = '?'
  @Input()   count: number = 0
  @Output()   binder1 = new EventEmitter();
  @Output()   binder2 = new EventEmitter();
  @Output()   binder3 = new EventEmitter();

  increment() {
    this.count++;
    this.binder2.emit(this.count);
  }

  decrement() {
    this.count--;
    this.binder2.emit(this.count);
  }

  passBackMyFriend() {
    this.myFriend = 'Bernie' + this.count;
    this.binder1.emit(this.myFriend);
  }
  passBackgdArr() {
    this.myFriend = 'Bernie' + this.count;
    this.binder3.emit(  ['cars','bars','guitars'] );
  }
}
