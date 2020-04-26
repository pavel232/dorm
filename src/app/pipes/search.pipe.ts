import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(studentsList: Student[], keyWord: string = ''): Student[] {
    if (!keyWord.trim()) {
      return studentsList;
    } else {
      return studentsList.filter(student => {
        return (
          student.firstname.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1 ||
          student.lastname.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
        );
      });
    }
  }
}
