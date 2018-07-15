import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resort } from '@app/models/resort.model';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ResortService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  search(q: string): Observable<Resort[]> {
    return this.httpClient.get<Resort[]>(`${this.BASE_URL}/resorts`, {
      params: new HttpParams().set('name_like', `^${q}`)
    });
  }
}
