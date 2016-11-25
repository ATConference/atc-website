import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ArchiveData } from './archive-data.model';
import { Archive } from './archive.model';

@Injectable()
export class ArchiveService {
  private archivesUrl = 'api/conferences';
  private data: ArchiveData;

  constructor(private http: Http) { }

  getArchives(): Observable<ArchiveData> {
    if (this.data) {
      return Observable.of(this.data);
    }

    return this.http.get(this.archivesUrl)
      .map(this.extractData)
      .map(data => this.cacheData(data))
      .catch(this.handleError);
  }

  getArchive(id: number): Observable<Archive> {
    return this.http.get(`${this.archivesUrl}/${id}`)
      .map(this.extractArchive)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body._embedded || { };
  }

  private extractArchive(res: Response) {
    let body = res.json();
    return body || { };
  }

  private cacheData(data: ArchiveData) {
    this.data = data;
    return data;
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }
}
