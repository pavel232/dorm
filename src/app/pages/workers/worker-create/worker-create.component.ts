import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query/query.service';
import { User } from 'src/app/models/user.model';
import { Worker } from 'src/app/models/worker.model';

@Component({
  selector: 'app-worker-create',
  templateUrl: './worker-create.component.html',
  styleUrls: ['./worker-create.component.scss']
})
export class WorkerCreateComponent implements OnInit {
  private token: string;

  public worker: Worker = {
    FirstName: '',
    LastName: '',
    WorkDays: '',
    WorkFloor: {
      Floor: {
        Floor: null,
        Code: null
      }
    }
  };

  constructor(private queryService: QueryService) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.token = user.token;
  }

  public createWorker() {
    this.worker.WorkFloor.Floor.Code = this.worker.WorkFloor.Floor.Floor;
    this.queryService.createSubject('worker', this.worker, this.token);
  }

  public goBack() {
    window.history.back();
  }
}
