import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { PROGRAM_CATEGORIES } from './program-categories';
import { ProgramData } from './program-data.model';
import { Program } from './program.model';

import { PROGRAMS_URL } from '../../api-config';

@Injectable()
export class ProgramService {
  private programsUrl = PROGRAMS_URL;
  private data: ProgramData;

  constructor(private http: Http) { }

  getPrograms(): Observable<ProgramData> {
    if (this.data) {
      return Observable.of(this.data);
    }

    return this.http.get(this.programsUrl)
      .map(this.extractData)
      .map(this.attachCategories)
      .map(data => this.cacheData(data))
      .catch(this.handleError);
  }

  getProgram(id: number): Observable<Program> {
    return this.http.get(`${this.programsUrl}/${id}`)
      .map(this.extractProgram)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body._embedded || { };
  }

  private attachCategories(data: ProgramData) {
    data['categories'] = PROGRAM_CATEGORIES;
    return data;
  }

  private extractProgram(res: Response) {
    let body = res.json();
    body.participants = body._embedded.participants || [ ];
    return body || { };
  }

  private cacheData(data: ProgramData) {
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
