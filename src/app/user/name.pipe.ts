import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, ...args: any[]){
    const searchTerm=args;
    if(!searchTerm){
      return value;
    }
    return value.filter((item:any)=>item.name.includes(searchTerm))
  }

}
