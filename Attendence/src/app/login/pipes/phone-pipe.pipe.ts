import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
  return value.substr(0,3)+"-"+value.substr(3,7);
  }

}
