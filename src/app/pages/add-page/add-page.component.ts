import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query/query.service';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login/login.service';
import { Login } from 'src/app/models/login.model';
import { NotifierService } from 'angular-notifier';
import { Provision } from 'src/app/models/provision.model';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  public token = '';
  public role: string;
  public isConfirm = false;
  public cautionLabel = 'caution';
  public username: string;
  private password: string;

  private student = {
    firstname: '',
    lastname: '',
    uuid: 1,
    studroom: { id: 1, room: 0 },
    studfloor: { id: 1, floor: 0 }
  };

  private provision: Provision = {
    ID: 0,
    Bedsheet: 1,
    Blanket: 1,
    Curtain: 1,
    Pillow: 1,
    Towel: 1
  };

  constructor(
    private queryService: QueryService,
    private loginService: LoginService,
    private notifierService: NotifierService
  ) {}

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
    if (this.checkFields()) {
      const data: Login = {
        username: this.username,
        password: this.password
      };

      this.loginService.signUp(data).subscribe(
        (r: any) => {
          this.student.uuid = r.uuid;
          this.queryService.createSubject('student', this.student, this.token, this.provision);
        },
        err => {
          this.notifierService.notify('error', err.error.message);
          console.error('Error: ', err.error);
        }
      );
    } else {
      this.notifierService.notify('warning', 'Fields cannot be empty!');
    }
  }

  public goBack(): void {
    window.history.back();
  }

  private checkFields(): boolean {
    if (
      !this.student.firstname ||
      !this.student.lastname ||
      !this.student.studfloor.floor ||
      !this.student.studroom.room ||
      !this.username ||
      !this.password
    ) {
      return false;
    } else {
      return true;
    }
  }
}
