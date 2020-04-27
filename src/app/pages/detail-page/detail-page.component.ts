import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { GetStudentService } from 'src/app/services/get-student.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public student: Student;

  constructor(private routerParams: ActivatedRoute, private getStudentService: GetStudentService) {}

  ngOnInit() {
    const studentId = `/${this.routerParams.snapshot.queryParams.id}`;

    this.getStudentService.getStudentList(studentId).subscribe((data: Student) => {
      this.student = data;
    });
  }

  public goBack() {
    window.history.back();
  }
}
