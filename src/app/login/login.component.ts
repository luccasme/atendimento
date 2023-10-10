import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string ='';
  senha: string ='';
  loginFailed = false;


  constructor (private authService: AuthService) {}

  login(): void {

    if (this.authService.authenticate(this.user, this.senha)) {
        console.log('Login bem sucedido!');
        
    } else {
        console.log('Falha no login');
        this.loginFailed = true;
    }    
  }
} 



