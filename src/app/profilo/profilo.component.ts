import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/login.component';
import { Prodotto } from '../prodotti/prodotti.component';
import { OrdiniService } from '../services/ordini.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css'],
})

//
export class ProfiloComponent implements OnInit {
  ordineCliente: Prodotto[] = [];

  user: User[] = [];

  nomeRistorante: string = '';
  username: string = '';
  totale: any;

  constructor(private ordiniService: OrdiniService, private router: Router) {}

  ngOnInit(): void {
    this.getOrdine();
    this.getUser();
  }

  getOrdine() {
    this.ordineCliente = JSON.parse(
      localStorage.getItem('ordineCliente') || '{}'
    );
    this.nomeRistorante = this.ordineCliente[0].Ristorante;
    let lunghezzaArray = this.ordineCliente.length - 1;
    this.totale = this.ordineCliente[lunghezzaArray].totale;
    console.log(this.ordineCliente);
    console.log('P_utente:  ' + this.ordineCliente[0].P_utente); //UNDEFINED perche?!
  }
  getUser() {
    this.user = JSON.parse(localStorage.getItem('userOnline') || '{}');

    console.log(this.user);
  }

  ordina() {
    this.ordiniService.postOrdini(this.ordineCliente).subscribe(
      (data) => {
        console.log(data);
        if (data.message == 'ordine Aggiunto') {
          this.router.navigate(['/ordineAggiunto']);
        } else {
          this.router.navigate(['/ordineAggiunto']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
