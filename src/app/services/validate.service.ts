import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  wsCheckUser: string;
  wsAddUser: string;
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };
  regExpEmail: any;
  regExpPass: any;

  constructor(private http: HttpClient) {
    this.wsCheckUser =
      'http://l4com.labforweb.it/backend/web/test/ws/users/checkUser.php';
    this.wsAddUser =
      'http://l4com.labforweb.it/backend/web/test/ws/users/addUser.php';
    this.regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.regExpPass = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
  }
  //metodi

  //x utenti gia registrati
  validateForm(user: any): boolean {
    if (
      user.username.length == 0 ||
      user.username == undefined ||
      user.password.length == 0 ||
      user.password == undefined ||
      !this.regExpPass.test(user.password)
    ) {
      return false;
    } else {
      return true;
    }
  }

  checkUser(user: any): Observable<any> {
    return this.http.post(this.wsCheckUser, user, this.httpOptions);
  }
  wsLogIn =
    'http://l4com.labforweb.it/backend/web/index.php?r=utenti/profile&id_usr=26';
  logIn(user: any): Observable<any> {
    return this.http.get(this.wsLogIn, user);
  }

  //x registratre un utente
  validateRegister(user: any): boolean {
    // console.log(user);
    if (
      user.nominativo == '' ||
      user.nominativo == undefined ||
      user.username == '' ||
      user.username == undefined ||
      user.password == '' ||
      user.password == undefined ||
      !this.regExpPass.test(user.password) ||
      !user.checkPrivacy ||
      user.email == '' ||
      user.email == undefined ||
      !this.regExpEmail.test(user.email.toLowerCase())
    ) {
      return false;
    } else {
      return true;
    }
  }
  addUser(user: any): Observable<any> {
    return this.http.post(this.wsAddUser, user, this.httpOptions);
  }
}
