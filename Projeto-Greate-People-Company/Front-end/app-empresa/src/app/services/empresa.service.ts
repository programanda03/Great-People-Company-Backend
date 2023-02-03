import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../interface/EmpresaApi/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:5062/api/empresas"

  public getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.baseUrl);
  }

  public getEmpresaPorCnpj(cnpj: string): Observable<Empresa> {
    const url = `${this.baseUrl}?cnpj=${cnpj}`;
    return this.http.get<Empresa>(url);
  }

  public getEmpresaPorId(id: string): Observable<Empresa> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Empresa>(url);
  }

  public postEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.baseUrl, empresa);
  }


  public putEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(this.baseUrl, empresa);
  }

  public deleteEmpresa(id: string): Observable<boolean> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<boolean>(url);
  }
}
