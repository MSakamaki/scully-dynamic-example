import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  isScullyRunning,
  ScullyRoute,
  ScullyRoutesService,
} from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { TransferStateService } from '@scullyio/ng-lib';

const url = 'http://localhost:3333/api/posts';

interface IPostData {
  id: string;
  data: string;
}

@Component({
  selector: 'scully-sample-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;

  dblog$ = this.transferState.useScullyTransferState(
    'post',
    this.http.get<IPostData[]>(url)
  );

  constructor(
    private scully: ScullyRoutesService,
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}

  ngOnInit() {}
}
