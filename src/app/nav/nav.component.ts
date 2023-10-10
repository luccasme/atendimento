import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnDestroy {
  loggedIn = false;
  private authSubscription: Subscription;
  

  constructor(private authService: AuthService, router: Router) { 
    this.authSubscription = this.authService.loggedIn$.subscribe(status => {
      this.loggedIn = status;
      if(this.loggedIn) {
        this.loggedIn = true;
        router.navigate(['/painel-senhas']);
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  logOut() {
    this.loggedIn = false;
  }
} 




  

