import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  public isConfirm = false;
  public cautionLabel = 'caution';

  private student: Student = {
    id: 0,
    firstname: '',
    lastname: '',
    uuid: 0,
    studfloor: { id: 0, Floor: 0 },
    studroom: { id: 0, Room: 0 }
  };

  constructor(private studentService: StudentService) {}

  ngOnInit() {}

  setData(type: string, data) {}

  addStudent() {
    this.studentService.addStudent(this.student, 'asd').subscribe(resp => console.log(resp));
  }

  public goBack() {
    window.history.back();
  }
}
