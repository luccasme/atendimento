import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/models.paciente';

@Injectable({
    providedIn: 'root'
})

export class PacienteService {
    
    private apiUrl= '';

    constructor(private http: HttpClient) {}

    cadastrarPaciente(paciente: Paciente): Observable<Paciente> {
        return this.http.post<Paciente>(this.apiUrl, paciente);

    }

    consultarPaciente_id(cpf: string): Observable<Paciente> {
        return this.http.get<Paciente>(`${this.apiUrl}/${cpf}`);
    }


}