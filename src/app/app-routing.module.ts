import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { SenhasDisplayComponent } from './senhas-display/senhas-display.component';
import { FooterDisplayComponent } from './footer-display/footer-display.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'consultar', component: ConsultaComponent },
  { path: 'painel-senhas' , component: SenhasDisplayComponent},
  { path: 'consultorios', component: FooterDisplayComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
