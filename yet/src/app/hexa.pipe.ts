import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaaaaaaaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(value: number): unknown {
    return value.toString(16);
  }

}
