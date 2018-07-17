import { from, Observable } from 'rxjs';
import { Resort } from '../store/models';

export class ResortService {
  static BASE_URL = 'http://localhost:3000';

  static loadAll(): Observable<Array<Resort>> {
    return from(
      fetch(`${ResortService.BASE_URL}/resorts`).then(response =>
        response.json()
      )
    );
  }
}
