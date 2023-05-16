import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'company'
})
export class CompanyPipe implements PipeTransform {

  transform(value: any, ...args: any){
    const searchTerm=args;
    if(!searchTerm){
      return value;
    }
    return value.filter((item:any)=>item.company.name.includes(searchTerm))
  }

}
