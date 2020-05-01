import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';
import { User } from 'src/app/models/user.model';
import { ServerMessage } from 'src/app/models/server-message.model';

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
  public rights = false;
  public token = '';
  public uuid: number;

  constructor(private routerParams: ActivatedRoute, private studentService: StudentService) {}

  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.rights = user.rights;
    this.token = user.token;
    this.uuid = user.uuid;

    const studentId = `/${this.routerParams.snapshot.queryParams.id}`;
    this.studentService.getStudent(studentId).subscribe(data => {
      this.student = data;
    });
  }

  public onDelete() {
    this.studentService.deleteStudent(this.student.id, this.token).subscribe((r: ServerMessage) => {
      if (r.status === 200) {
        this.goBack();
      }
    });
  }

  public onUpdate() {
    this.studentService
      .updateStudent(this.student.id, this.student, this.token)
      .subscribe(r => console.log(r));
  }

  public goBack() {
    window.history.back();
  }
}
