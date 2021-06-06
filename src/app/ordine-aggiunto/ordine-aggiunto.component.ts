import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordine-aggiunto',
  templateUrl: './ordine-aggiunto.component.html',
  styleUrls: ['./ordine-aggiunto.component.css'],
})
export class OrdineAggiuntoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logOut(e: any) {
    e.preventDefault();
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
