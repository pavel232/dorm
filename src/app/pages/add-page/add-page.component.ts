import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  public token = '';
  public isConfirm = false;
  public cautionLabel = 'caution';

  private student = {
    firstname: '',
    lastname: '',
    uuid: 1,
    studroom: { id: 1, room: 0 },
    studfloor: { id: 1, floor: 0 }
  };

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.token = user.token;
  }

  setData(type: string, data) {
    this.isConfirm = false;

    if (type === 'fname') {
      this.student.firstname = data;
    } else if (type === 'lname') {
      this.student.lastname = data;
    } else if (type === 'floor') {
      this.student.studfloor.floor = +data;
    } else if (type === 'room') {
      this.student.studroom.room = +data;
    }
  }

  addStudent() {
    if (
      this.student.firstname ||
      this.student.lastname ||
      this.student.studfloor.floor ||
      this.student.studroom.room
    ) {
      this.studentService.addStudent(this.student, this.token).subscribe(resp => console.log(resp));
    } else {
      this.isConfirm = true;
      this.cautionLabel = 'registration_page.error.fields_cannot_be_empty';
    }
  }

  public goBack() {
    window.history.back();
  }
}
