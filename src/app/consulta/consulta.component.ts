import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  cpfForm: FormGroup;
  

  constructor(private fb: FormBuilder) {
    this.cpfForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]]
    });
  }

  consultar() {
    if (this.cpfForm.valid) {
      const cpf = this.cpfForm.get('cpf')?.value;
      console.log('CPF para consulta:', cpf);
      
    }
  }
}
