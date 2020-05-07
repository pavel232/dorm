import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueryService } from 'src/app/services/query/query.service';
import { NotifierService } from 'angular-notifier';
import { User } from 'src/app/models/user.model';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
  public rights: boolean;
  private token = '';

  public room: Room = {
    ID: null,
    Room: null,
    Chairs: null,
    Tables: null,
    Shelves: null
  };

  constructor(
    private routerParams: ActivatedRoute,
    private queryService: QueryService,
    private notifierService: NotifierService
  ) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.rights = user.rights;
    this.token = user.token;

    const roomId = `/${this.routerParams.snapshot.queryParams.id}`;

    this.queryService.getList('room', roomId).subscribe(
      (data: Room) => {
        this.room = data;
      },
      err => {
        this.notifierService.notify('error', err.error.Message);
        console.error('Error: ', err.error);
      }
    );
  }

  public onDelete() {
    this.queryService.deleteSubject('room', this.room.ID, this.token);
    this.goBack();
  }

  public onUpdate() {
    this.queryService.updateSubject('room', this.room.ID, this.room, this.token);
  }

  public goBack() {
    window.history.back();
  }
}
