import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText?:string): any[] {
    if(!searchText)
      return value;
    var res=[];
    value.forEach(element => {
     if(element!=null){
        if(element.name.indexOf(searchText)>-1)
          {
           res.push(element);
          }
        }
   });
   return res;
  }
 

  }


