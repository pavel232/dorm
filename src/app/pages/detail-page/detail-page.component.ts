import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public student: Student = {
    id: 0,
    date: '',
    firstname: '',
    lastname: '',
    uuid: 0,
    studfloor: { id: 0, Floor: 0 },
    studroom: { id: 0, Room: 0 }
  };

  constructor(private routerParams: ActivatedRoute, private studentService: StudentService) {}

  ngOnInit(): void {
    const studentId = `/${this.routerParams.snapshot.queryParams.id}`;

    this.studentService.getStudent(studentId).subscribe(data => {
      this.student = data;
    });
  }

  public goBack() {
    window.history.back();
  }
}
