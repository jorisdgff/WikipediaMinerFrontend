import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ItemIndexingProgress, IndexingProgress } from '../objects/itemindexingprogress';
import { Message } from '../objects/message';

@Injectable()
export class AdminService {

  private adminUrl = 'http://localhost:8080/indexfunctions';

  constructor(private httpClient: HttpClient) { }

  startIndexing(): Observable<Message> {

    return this.httpClient.get<Message>(this.adminUrl + "/startIndexing");
  }

  getProgress(): Observable<IndexingProgress> {

    return this.httpClient.get<IndexingProgress>(this.adminUrl + "/getProgress");
  }
}
