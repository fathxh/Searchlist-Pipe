import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'designation'
})
export class DesignationPipe implements PipeTransform {

  transform(value: any, ...args: any[]){
    const searchTerm=args;
    if(!searchTerm){
      return value;
    }
    return value.filter((item:any)=>item.company.designation.includes(searchTerm))
  }

}
