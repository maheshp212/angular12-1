import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }

  fname:string =  'YaTeNdAr ToMar';
  num:number = 32.23423452345234;
  today:any = new Date(); 
  user : any = {fname:'angular', exp: 5};
  ngOnInit(): void {
  }

}
