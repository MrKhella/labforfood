import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RistorantiService {
  constructor(private http: HttpClient) {}
  wsRistoranti =
    'http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/list';
  getRistoranti(): Observable<any> {
    return this.http.get(this.wsRistoranti);
  }
}
