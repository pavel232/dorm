import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { Router } from '@angular/router';
import { QueryService } from 'src/app/services/query/query.service';
import { NotifierService } from 'angular-notifier';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {
  public searchString = '';
  public studentsList: Student[] = [];
  public rights = false;
  public uuid: number;

  constructor(
    private router: Router,
    private queryService: QueryService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.rights = user.rights;
    this.uuid = user.uuid;

    this.queryService.getList('student').subscribe(
      (resp: Student[]) => {
        this.studentsList = resp;
      },
      err => {
        this.notifierService.notify('error', err.error.Message);
        console.error('Error: ', err.error);
      }
    );
  }

  setSearchString(str): void {
    this.searchString = str;
  }

  public goDetailPage(student: Student): void {
    this.router.navigate(['/student-detail', student.ID], {
      queryParams: {
        id: student.ID
      }
    });
  }

  public goAddPage() {
    this.router.navigateByUrl('/student-create');
  }
}
