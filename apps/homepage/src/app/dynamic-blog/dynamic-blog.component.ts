import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferStateService } from '@scullyio/ng-lib';

const url = 'http://localhost:3333/api/posts';

interface IPostDetail {
  content: string;
}

@Component({
  selector: 'scully-sample-dynamic-blog',
  templateUrl: './dynamic-blog.component.html',
  styleUrls: ['./dynamic-blog.component.scss'],
})
export class DynamicBlogComponent implements OnInit {
  post$ = this.transferState.useScullyTransferState(
    'post-detail',
    this.http.get<IPostDetail>(`${url}/${this.actRoute.snapshot.params.id}`)
  );

  constructor(
    private actRoute: ActivatedRoute,
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}

  ngOnInit(): void {}
}
