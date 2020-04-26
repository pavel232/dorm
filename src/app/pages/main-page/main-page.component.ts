import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public searchString = '';
  public students: Student[];

  constructor() {}

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

  setSearchString(str) {
    this.searchString = str;
  }
}
