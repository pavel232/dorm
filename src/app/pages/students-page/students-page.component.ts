import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { NotifierService } from 'angular-notifier';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {
  public searchString = '';
  public studentsList: Student;
  public rights = false;
  public uuid: number;

  constructor(
    private router: Router,
    private studentService: StudentService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.rights = user.rights;
    this.uuid = user.uuid;

    this.studentService.getStudent().subscribe(
      resp => {
        this.studentsList = resp;
      },
      err => {
        this.notifierService.notify('error', err.error.message);
        console.error('Error: ', err.error);
      }
    );
  }

  setSearchString(str): void {
    this.searchString = str;
  }

  public goDetailPage(student: Student): void {
    this.router.navigate(['./detail', student.id], {
      queryParams: {
        id: student.id
      }
    });
  }

  public goAddPage() {
    this.router.navigateByUrl('/add');
  }
}
