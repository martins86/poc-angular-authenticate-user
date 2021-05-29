import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { DataUserSession } from './core/auth/shared/models/data-user-session.model';

import { AuthService } from './core/auth/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  authenticate$: Observable<boolean>;
  user$: Observable<DataUserSession>;

  constructor(private router: Router, private authService: AuthService) {
    this.authenticate$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUserSession();
  }

  logout(): void {
    this.authService.logoutUser();
    this.router.navigateByUrl('login');
  }
}
