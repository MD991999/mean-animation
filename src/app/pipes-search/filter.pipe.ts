import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(myarray: any[], searchitem: string, animename: string): any[] {
    const result: any[] = [];
    if (!myarray || searchitem == '' || animename == '') {
      return myarray;
    }
    else {
      
      myarray.forEach((item: any) => {
        if (item.animename.trim().toLowerCase().includes(searchitem.trim().toLowerCase())) {
          result.push(item)
        }

      })
      return result;
    }
  }
 
}
