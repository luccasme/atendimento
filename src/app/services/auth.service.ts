import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {  



  private validUser = 'admin';
  private validPassword = '123';

  private loggedInStatus = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInStatus.asObservable();



  authenticate(user: string, senha: string): boolean {
    const isValid = user === this.validUser && senha === this.validPassword;
    this.loggedInStatus.next(isValid);
    return isValid;
  }

  isLoggedIn(): boolean {
    return this.loggedInStatus.value;
  }
  
}
