import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public searchString = '';
  public students: Student[];

  constructor(private router: Router) {}

  ngOnInit() {
    fetch('http://localhost:8080/student')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.students = data;
        console.log(this.students);
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
