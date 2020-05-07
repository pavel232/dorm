import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/worker.model';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { QueryService } from 'src/app/services/query/query.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.scss']
})
export class WorkerDetailComponent implements OnInit {
  public rights: boolean;
  private token = '';
  public worker: Worker = {
    ID: 0,
    FirstName: '',
    LastName: '',
    WorkDays: '',
    WorkFloor: {
      Floor: {
        Floor: 1,
        Code: 1
      }
    }
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

    const workerId = `/${this.routerParams.snapshot.queryParams.id}`;

    this.queryService.getList('worker', workerId).subscribe(
      (data: Worker) => {
        this.worker = data;
      },
      err => {
        this.notifierService.notify('error', err.error.message);
        console.error('Error: ', err.error);
      }
    );
  }

  public onDelete() {
    this.queryService.deleteSubject('worker', this.worker.ID, this.token);
    this.goBack();
  }

  public onUpdate() {
    this.queryService.updateSubject('worker', this.worker.ID, this.worker, this.token);
  }

  public goBack() {
    window.history.back();
  }
}
