import { Component, OnInit } from '@angular/core';
import { RistorantiService } from '../services/ristoranti.service';

@Component({
  selector: 'app-ristoranti',
  templateUrl: './ristoranti.component.html',
  styleUrls: ['./ristoranti.component.css'],
})
export class RistorantiComponent implements OnInit {
  ristoranti: Array<any>;
  ristorantiCercati: any;
  isLoaderVisible: boolean;
  filter: any;
  selectRistorante: any;
  constructor(private listaRistoranti: RistorantiService) {
    this.ristoranti = [];
    this.ristorantiCercati = [];
    this.isLoaderVisible = true;
  }

  ngOnInit(): void {
    this.getRistoranti();
  }

  getRistoranti() {
    this.listaRistoranti.getRistoranti().subscribe(
      (data) => {
        this.ristoranti = data;
        this.ristorantiCercati = this.ristoranti;
        this.isLoaderVisible = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filtro(e: any) {
    this.ristoranti.forEach(() => {
      this.ristorantiCercati = this.ristoranti.filter((r) => {
        return r.tipologia.Tipologia.includes(this.filter);
      });
    });
    this.ristorantiCercati;
  }
}
