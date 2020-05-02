import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  public token = '';
  public role: string;
  public isConfirm = false;
  public isWorker = false;
  public cautionLabel = 'caution';
  private username: string;
  private password: string;

  private student = {
    firstname: '',
    lastname: '',
    uuid: 1,
    studroom: { id: 1, room: 0 },
    studfloor: { id: 1, floor: 0 }
  };

  constructor(private studentService: StudentService, private loginService: LoginService) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.token = user.token;
    this.role = user.role;
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
    } else if (type === 'username') {
      this.username = data;
    } else if (type === 'password') {
      this.password = data;
    }
  }

  createStudent() {
    const data: Login = {
      username: this.username,
      password: this.password
    };

    this.loginService.signUp(data).subscribe((r: any) => {
      if (!this.isWorker) {
        this.student.uuid = r.uuid;
        this.studentService
          .createStudent(this.student, this.token)
          .subscribe(resp => console.log(resp));
      }
    });
  }

  public goBack(): void {
    window.history.back();
  }
}
