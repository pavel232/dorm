import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Login } from 'src/app/models/login.model';
import { QueryService } from 'src/app/services/query/query.service';
import { LoginService } from 'src/app/services/login/login.service';
import { NotifierService } from 'angular-notifier';
import { Student } from 'src/app/models/student.model';
import { Provision } from 'src/app/models/provision.model';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {
  private token: string;

  public user: Login = {
    username: '',
    password: ''
  };

  public student: Student = {
    FirstName: '',
    LastName: '',
    UUID: null,
    StudFloor: {
      Floor: null
    },
    StudRoom: {
      Room: null
    }
  };

  public provision: Provision = {
    ID: null,
    Bedsheet: 0,
    Blanket: 0,
    Curtain: 0,
    Pillow: 0,
    Towel: 0
  };

  constructor(
    private queryService: QueryService,
    private loginService: LoginService,
    private notifierService: NotifierService
  ) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.token = user.token;
  }

  public createStudent() {
    this.loginService.signUp(this.user).subscribe(
      (answer: any) => {
        this.student.UUID = answer.UUID;
        this.queryService.createSubject('student', this.student, this.token, this.provision);
      },
      err => {
        this.notifierService.notify('error', err.error.message);
        console.error('Error: ', err.error);
      }
    );
  }

  public goBack(): void {
    window.history.back();
  }
}
