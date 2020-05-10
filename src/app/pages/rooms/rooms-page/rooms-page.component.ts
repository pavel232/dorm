import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room.model';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { QueryService } from 'src/app/services/query/query.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrls: ['./rooms-page.component.scss']
})
export class RoomsPageComponent implements OnInit {
  public searchString = '';
  public rights = false;
  public roomsList: Room[] = [];

  constructor(
    private router: Router,
    private queryService: QueryService,
    private notifierService: NotifierService
  ) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.rights = user.rights;

    this.queryService.getList('room').subscribe(
      (resp: Room[]) => {
        this.roomsList = resp;
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

  public goAddPage() {
    this.router.navigateByUrl('/room-create');
  }

  public goDetailPage(room: Room) {
    this.router.navigate(['/room-detail', room.ID], {
      queryParams: {
        id: room.ID
      }
    });
  }
}
