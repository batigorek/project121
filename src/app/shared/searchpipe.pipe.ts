import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(workers: any[], searchStr: string, searchStr1: string): any[] {
    if (searchStr === '') {
      if (searchStr1 === '') {
        return workers;
      } else {
        let filteredItems = workers.filter(item => item.surname.toLowerCase().indexOf(searchStr1.toLowerCase()) !== -1);
        return filteredItems;
      }
    } else {
      let filteredItems = workers.filter(item => item.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
      if (searchStr1 === '') {
        return filteredItems;
      } else {
        filteredItems = filteredItems.filter(item => item.surname.toLowerCase().indexOf(searchStr1.toLowerCase()) !== -1);
        return filteredItems;
      }
    }
  }
}
