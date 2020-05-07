import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { QueryService } from 'src/app/services/query/query.service';
import { User } from 'src/app/models/user.model';
import { NotifierService } from 'angular-notifier';
import { Provision } from 'src/app/models/provision.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public student: Student = {
    ID: 0,
    Date: '',
    FirstName: '',
    LastName: '',
    UUID: 0,
    StudFloor: { ID: 0, Floor: 0 },
    StudRoom: { ID: 0, Room: 0 }
  };
  public provision: Provision = {
    ID: 0,
    Bedsheet: 0,
    Blanket: 0,
    Curtain: 0,
    Pillow: 0,
    Towel: 0
  };

  public rights = false;
  private token = '';
  public uuid: number;

  constructor(
    private routerParams: ActivatedRoute,
    private queryService: QueryService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.rights = user.rights;
    this.token = user.token;
    this.uuid = user.uuid;

    const studentId = `/${this.routerParams.snapshot.queryParams.id}`;

    this.queryService.getList('student', studentId).subscribe(
      (data: Student) => {
        this.student = data;
      },
      err => {
        this.notifierService.notify('error', err.error.message);
        console.error('Error: ', err.error);
      }
    );

    this.queryService.getProvision(studentId).subscribe(
      (data: Provision) => {
        this.provision = data;
      },
      err => {
        this.notifierService.notify('error', err.error.message);
        console.error('Error: ', err.error);
      }
    );
  }

  public onDelete() {
    this.queryService.deleteSubject('student', this.student.ID, this.token);
    this.queryService.deleteSubject('provisions', this.student.ID, this.token);
    this.goBack();
  }

  public onUpdate() {
    this.queryService.updateSubject('student', this.student.ID, this.student, this.token);
    this.queryService.updateSubject('provisions', this.student.ID, this.provision, this.token);
  }

  public goBack() {
    window.history.back();
  }
}
