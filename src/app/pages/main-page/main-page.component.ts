import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public searchString = '';
  public studentsList: Student;

  constructor(private router: Router, private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudent().subscribe(resp => {
      this.studentsList = resp;
    });
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
    this.router.navigateByUrl('add');
  }
}
