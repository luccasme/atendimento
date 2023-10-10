import { Component } from '@angular/core';
import { Paciente } from '../models/models.paciente';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  paciente: Paciente = new Paciente();

  constructor(private pacienteService: PacienteService) {}

    registrar(): void {
      this.pacienteService.cadastrarPaciente(this.paciente).subscribe(data => {
        console.log('Paciente registrado com sucesso')
        
      })
    }

}
