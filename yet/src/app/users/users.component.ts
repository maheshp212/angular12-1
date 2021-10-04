import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() usersList:any = [];
  @Output() selectedIndex = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  select(i:number){
    this.selectedIndex.emit(i);
  }
}
