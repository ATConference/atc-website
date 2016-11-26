import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ParticipantData } from './participant-data.model';
import { Participant } from './participant.model';

import { PARTICIPANT_CATEGORIES } from './participant-categories';

import { PARTICIPANTS_URL } from '../../api-config';

@Injectable()
export class ParticipantService {
  private participantsUrl = PARTICIPANTS_URL;
  private data: ParticipantData;

  constructor(private http: Http) { }

  getParticipants(): Observable<ParticipantData> {
    if (this.data) {
      return Observable.of(this.data);
    }

    return this.http.get(this.participantsUrl)
      .map(this.extractData)
      .map(this.attachCategories)
      .map(data => this.cacheData(data))
      .catch(this.handleError);
  }

  getParticipant(id: number): Observable<Participant> {
    return this.http.get(`${this.participantsUrl}/${id}`)
      .map(this.extractParticipant)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body._embedded || { };
  }

  private attachCategories(data: ParticipantData) {
    data['categories'] = PARTICIPANT_CATEGORIES;
    return data;
  }

  private extractParticipant(res: Response) {
    let body = res.json();
    body.programs = body._embedded.programs || [ ];
    return body || { };
  }

  private cacheData(data: ParticipantData) {
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
