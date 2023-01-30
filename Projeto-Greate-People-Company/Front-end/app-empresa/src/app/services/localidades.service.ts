import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municipio } from '../interface/LocalidadesApi/Cidades/municipio';
import { Uf } from '../interface/LocalidadesApi/Estados/uf';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  constructor(private http: HttpClient) { }

  baseUrl!: string;

  public getEstados(): Observable<Uf[]> {
    this.baseUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    return this.http.get<Uf[]>(this.baseUrl);
  }

  public getMunicipiosPorUf(uf: string): Observable<Municipio[]> {
    this.baseUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + uf + "/municipios";
    return this.http.get<Municipio[]>(this.baseUrl);
  }
}
