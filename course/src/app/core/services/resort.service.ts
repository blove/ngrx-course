import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { Resort } from '@app/models/resort.model';

@Injectable({
  providedIn: 'root'
})
export class ResortService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getResorts(): Observable<Resort[]> {
    return this.httpClient.get<Resort[]>(`${this.BASE_URL}/resorts`);
  }
}
