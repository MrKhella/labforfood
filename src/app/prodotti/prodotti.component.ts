import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdottiService } from '../services/prodotti.service';

export class Prodotto {
  DataOrdine: string = '';
  Descrizione: string = '';
  IdOrdine: number = 0;
  IdRistorante: number = 0;
  P_utente: number = 26;
  Prezzo: number = 0;
  Prodotto: string = '';
  Ristorante: string = '';
  Unita: number = 0;
  clicked: boolean = false;
  totale: number = 0;
}

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css'],
})
export class ProdottiComponent implements OnInit {
  isLoaderVisible: boolean;
  nomeRistorante: string;
  prodotti: Prodotto[] = [];
  prodottiInCart: Prodotto[] = [];

  id: string;
  totale: number;
  isCartEmpty: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prodottiService: ProdottiService
  ) {
    this.isCartEmpty = true;
    this.isLoaderVisible = true;
    this.nomeRistorante = '';

    this.id = '';
    this.totale = 0;
  }

  ngOnInit(): void {
    console.log(this.route);
    this.id = this.route.snapshot.params['nome'];

    this.getProdotti(this.id);
  }

  getProdotti(id: string) {
    this.isLoaderVisible = false;
    return this.prodottiService.getProdotti(id).subscribe(
      (data) => {
        console.log(data);
        this.prodotti = data as Prodotto[];
        this.nomeRistorante = data[0].Ristorante;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  addToCart(p: Prodotto) {
    this.isCartEmpty = false;
    // p['P_utente'] = 26;
    this.prodottiInCart.push(p);
    p.Unita++;
    p.clicked = true;
    this.totale += +p.Prezzo;
    // console.log(this.prodottiInCart);
  }

  //metodi cart

  btnTot(): any {
    if (this.prodottiInCart.length == 0) {
      return true;
    }
  }
  addOne(p: any) {
    p.Unita++;
    this.totale += +p.Prezzo;
  }
  minOne(indice: number, p: any) {
    if (p.Unita > 1) {
      p.Unita--;
    } else {
      p.Unita = 0;
      p.clicked = false;
      this.prodottiInCart.splice(indice, 1);
    }
    if (this.prodottiInCart.length == 0) {
      this.isCartEmpty = true;
    }
    this.totale -= +p.Prezzo;
  }
  procedi(tot: any) {
    this.prodottiInCart.push({ ...tot, totale: this.totale });

    localStorage.setItem('ordineCliente', JSON.stringify(this.prodottiInCart));
    console.log(this.prodottiInCart);
    console.log(this.prodotti);

    this.router.navigate(['/profilo']);
  }
}
