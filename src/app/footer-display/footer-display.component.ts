import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-display',
  templateUrl: './footer-display.component.html',
  styleUrls: ['./footer-display.component.css']
})
export class FooterDisplayComponent {
  
    consultorios: any = [
      { nome: "Consultório 1", ocupado: false },
      { nome: "Consultório 2", ocupado: true },
      { nome: "Consultório 3", ocupado: false },
      { nome: "Consultório 4", ocupado: false },
      { nome: "Consultório 5", ocupado: true },
    ];
  }
  

