import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdottiService {
  constructor(private http: HttpClient) {}
  wsProdotti =
    'http://l4com.labforweb.it/backend/web/index.php?r=ristoranti/ristoranti-prodotti';
  getProdotti(request: string): Observable<any> {
    let params = new HttpParams().set('IdRistorante', request);
    return this.http.get(this.wsProdotti, { params });
  }
  getDetailOne() {
    return this.http.get(
      'http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordine&IdOrdine=26'
    );
  }
}
