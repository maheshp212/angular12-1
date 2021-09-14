import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  fname:string = 'mahesh';
  fruits: string[] = ['kiwi', 'melon', 'berry'];
  counter:number = 0;

  constructor() { }

  ngOnInit(): void {

    this.fruits.forEach((fruit:string)=>{
      if(fruit =='melon'){
        return false;
      } else {
        console.log(fruit);
      }
      console.log('hello');
      return true;
    })
  }

  callMe(){
    console.log(this.counter);
    this.counter++;
  }

  evnetCheck(event:any){
    if(event.ctrlKey && event.keyCode == 67){
      return false;
    } else {
      return true;
    }
  }

  checkFname(val:any){
    alert(val);
    this.fruits.push(this.fname);
    this.fname = '';
  }

}
