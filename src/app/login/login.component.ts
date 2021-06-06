import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService } from '../services/validate.service';
export class User {
  CodUtente: number = 0;
  DataReg: string = '';
  IdUtente: number = 0;
  attivo: boolean = false;
  email: string = '';
  nominativo: string = '';
  password: string = '';
  username: string = '';
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // implements OnInit // ngOnInit(): void {}
  user: User[] = [];
  //controllo campi
  username: string;
  password: string;
  checkRemember: boolean;
  errorMes: string;

  constructor(
    private validateService: ValidateService,
    private router: Router
  ) {
    this.username = '';
    this.password = '';
    this.checkRemember = false;
    this.errorMes = '';
  }

  onLoginSubmit(e: any): void {
    e.preventDefault();
    const user = {
      username: this.username,
      password: this.password,
    };

    if (
      this.validateService.validateForm(user) &&
      this.validateService.checkUser(user)
    ) {
      this.errorMes = '';

      this.validateService.logIn(this.user).subscribe(
        (data) => {
          this.user = data;
          console.log(this.user);
          localStorage.setItem('userOnline', JSON.stringify(this.user));
          this.router.navigate(['/ristoranti']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.username = '';
      this.password = '';
      this.checkRemember = false;
      this.errorMes = 'UTENTE NON REGISTRATO';
    }
  }
}
