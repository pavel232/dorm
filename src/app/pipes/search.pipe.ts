import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(list: any, keyWord: string = '') {
    if (!keyWord.trim()) {
      return list;
    } else {
      return list.filter(element => {
        if (element.FirstName) {
          return element.FirstName.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
        } else if (element.LastName) {
          return element.LastName.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
        } else if (element.Room) {
          return (
            element.Room.toString()
              .toLowerCase()
              .indexOf(keyWord.toLowerCase()) !== -1
          );
        }
      });
    }
  }
}
