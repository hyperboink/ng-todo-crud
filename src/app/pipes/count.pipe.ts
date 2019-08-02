import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    return value > 0 ? '(' + value + ')' : value;

  }

}
