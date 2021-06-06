import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfiloService {
  accountUser: string;
  constructor() {
    this.accountUser =
      'http://l4com.labforweb.it/backend/web/index.php?r=utenti/profile&id_usr=26';
  }
}
