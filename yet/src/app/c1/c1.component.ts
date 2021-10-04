import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component implements OnInit {
  @Input() fullName:string='';
  @Input() age:number = 0;
  
  @Output() sendData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  callme(){
    let res = this.age+100;
    this.sendData.emit(res);
  }

}
