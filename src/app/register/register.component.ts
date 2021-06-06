import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // implements OnInit // ngOnInit(): void {}

  nominativo: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  checkPrivacy: boolean = false;
  errorMes: string = '';

  isValidateForm: boolean = false;

  constructor(
    private validateService: ValidateService,
    private router: Router
  ) {}

  onRegisterSubmit(e: any): void {
    e.preventDefault();
    //per controllo campi
    const user = {
      nominativo: this.nominativo,
      email: this.email,
      username: this.username,
      password: this.password,
      checkPrivacy: this.checkPrivacy,
    };
    console.log(user);
    if (this.validateService.validateRegister(user)) {
      this.isValidateForm = false;

      this.validateService.addUser(user).subscribe(
        (data) => {
          console.log(data);

          this.router.navigate(['/login']);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.isValidateForm = true;
      this.errorMes = 'DATI NON VALIDI, Ricontrolla i campi!';
    }
  }
  getErrorCSS(): any {
    if (this.isValidateForm) {
      return 'error';
    }
  }
}
