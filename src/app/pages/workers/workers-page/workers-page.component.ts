import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Worker } from 'src/app/models/worker.model';
import { NotifierService } from 'angular-notifier';
import { QueryService } from 'src/app/services/query/query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workers-page',
  templateUrl: './workers-page.component.html',
  styleUrls: ['./workers-page.component.scss']
})
export class WorkersPageComponent implements OnInit {
  public searchString = '';
  public rights = false;
  public workersList: Worker[] = [];

  constructor(
    private router: Router,
    private queryService: QueryService,
    private notifierService: NotifierService
  ) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('User'));
    this.rights = user.rights;

    this.queryService.getList('worker').subscribe(
      (resp: Worker[]) => {
        this.workersList = resp;
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
    this.router.navigateByUrl('/worker-create');
  }

  public goDetailPage(worker: Worker) {
    this.router.navigate(['/worker-detail', worker.ID], {
      queryParams: {
        id: worker.ID
      }
    });
  }
}
