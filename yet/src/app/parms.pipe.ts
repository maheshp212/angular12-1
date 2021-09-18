import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parms'
})
export class ParmsPipe implements PipeTransform {

  transform(inppp: any,p5:any,p2:any,p3:any=5,p4:any=5): unknown {
    return (inppp*(p5+p2+p3+p4));
  }

}
