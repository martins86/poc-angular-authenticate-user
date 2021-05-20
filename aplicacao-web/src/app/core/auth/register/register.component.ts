import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { DataUserSession } from '../shared/models/data-user-session.model';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hideLoading: boolean = true;

  formRegister = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    passwordone: ['', [Validators.required, Validators.minLength(6)]],
    passwordtwo: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required]],
    mobilephone: ['', [Validators.required]],
    address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
  }, { Validator: this.matchingPassword });

  states: string[] = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
  'DF'
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.formRegister.value);
    let newUser: DataUserSession = {
      ...this.formRegister.value,
      password: this.formRegister.value.passwordone
    };
    this.hideLoading = false;

    this.authService.registerUser(newUser)
      .subscribe(
        (userNew) => {
          this.hideLoading = true;
          this.showSnackBar(
            'Successfuly registered. use your credentials to sing in'
            );
          this.router.navigateByUrl('login');
        },
        (error) => {
          this.hideLoading = true;
          console.error(error);
          this.showSnackBar(error.error.message);
        }
      );
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(
      message,
      'OK',
      { duration: 2000 }
      );
  }

  private matchingPassword(group: FormGroup): any {
    if (group) {
      const passwordone = group.controls['passwordone'].value;
      const passwordtwo = group.controls['passwordtwo'].value;
      if (passwordone === passwordtwo) {
        return null;
      }
    }
    return { matching: false };
  }

}
