import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custEmpId',
  pure:false
})
export class CustEmpIdPipe implements PipeTransform {

  transform(value: any, name:string='TMP' ,year:number = 0): any {
    if(!year){
      year = new Date().getFullYear(); 
    }
    console.log('sadf')
    return name.slice(0,3)+"-"+value+"-"+year;
  }
}
