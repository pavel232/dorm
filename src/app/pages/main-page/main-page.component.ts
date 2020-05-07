import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public goToStudents(): void {
    this.router.navigateByUrl('/students');
  }

  public goToWorkers(): void {
    this.router.navigateByUrl('/workers');
  }

  public goToRooms(): void {
    this.router.navigateByUrl('/rooms');
  }
}
