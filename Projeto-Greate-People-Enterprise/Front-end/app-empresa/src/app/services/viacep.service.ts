import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViaCep } from '../interface/ViaCepApi/viacep';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private http: HttpClient) { }

  cep!: string;

  baseUrl!: string;

  public getEnderecoPorCep(cep: string): Observable<ViaCep> {
    this.baseUrl = "http://viacep.com.br/ws/" + cep + "/json/";
    return this.http.get<ViaCep>(this.baseUrl);
  }
}
