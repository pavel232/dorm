import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  fetch('http://localhost:8080/student')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
  }



}
