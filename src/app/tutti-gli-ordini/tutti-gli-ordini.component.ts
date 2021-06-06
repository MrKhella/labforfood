import { Component, OnInit } from '@angular/core';
import { OrdiniService } from '../services/ordini.service';

@Component({
  selector: 'app-tutti-gli-ordini',
  templateUrl: './tutti-gli-ordini.component.html',
  styleUrls: ['./tutti-gli-ordini.component.css'],
})
export class TuttiGliOrdiniComponent implements OnInit {
  constructor(private ordiniService: OrdiniService) {}
  tuttiGliOrdini: Tutti[] = [];
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.ordiniService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.tuttiGliOrdini = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
interface Tutti {
  CodOrdine: number;
  CostiConsegna: number;
  DataOrdine: string;
  IdOrdine: number;
  IdRistorante: number;
  IndirizzoConsegna: string;
  Logo: string;
  OrdineMinimo: number;
  P_ristorante: number;
  P_utente: number;
  Ristorante: string;
  Sconto: number;
  TempiConsegna: number;
  Tipologia: number;
}
