import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(list, keyWord: string = '') {
    if (!keyWord.trim()) {
      return list;
    } else {
      return list.filter(element => {
        return (
          element.firstName.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1 ||
          element.lastName.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
        );
      });
    }
  }
}
