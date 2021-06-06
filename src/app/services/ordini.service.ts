import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Prodotto } from '../prodotti/prodotti.component';

@Injectable({
  providedIn: 'root',
})
export class OrdiniService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application / json',
    }),
  };
  postOrdini(ordineCliente: Prodotto[]): Observable<any> {
    return this.http.post(
      'http://l4com.labforweb.it/backend/web/test/ws/users/insertOrdine.php',
      ordineCliente,
      this.httpOptions
    );
  }
  getOrdini(): Observable<any> {
    return this.http.get(
      'http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordini&id_usr=26'
    );
  }

  //get di Tutti Gli Ordini
  getAll(): Observable<any> {
    return this.http.get(
      'http://l4com.labforweb.it/backend/web/index.php?r=utenti/ordini&id_usr=26'
    );
  }
}
