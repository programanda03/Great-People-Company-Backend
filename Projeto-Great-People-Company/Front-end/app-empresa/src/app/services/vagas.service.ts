import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../interface/VagasApi/vagas';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/apivagas";

  public getVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.baseUrl);
  }
  public getVagasPorEmpresa(idEmpresa: number): Observable<Vaga[]> {
    const url = `${this.baseUrl}?idempresa=${idEmpresa}`;
    return this.http.get<Vaga[]>(url);
  }
}
