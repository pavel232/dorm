import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Room } from 'src/app/models/room.model';
import { QueryService } from 'src/app/services/query/query.service';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss']
})
export class RoomCreateComponent implements OnInit {
  private token: string;

  public room: Room = {
    Room: null,
    Chairs: null,
    Tables: null,
    Shelves: null
  };

  constructor(private queryService: QueryService) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.token = user.token;
  }

  public createRoom() {
    this.queryService.createSubject('room', this.room, this.token);
  }

  public goBack() {
    window.history.back();
  }
}
