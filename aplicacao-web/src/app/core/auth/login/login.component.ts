import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const credentials = this.formLogin.value;
    this.authService.loginUser(credentials)
      .subscribe(
        (userSession) => {
          this.showSnackBar(
            'Logged in successfuly. Welcome ' + userSession.firstname + '!'
            );
          this.router.navigateByUrl('/');
        },
        (error) => {
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
}
