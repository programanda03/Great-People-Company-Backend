import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:5062/api/users";

  public getUsuarioCnpj(cnpj: string): Observable<Usuario> {
    const url = `${this.baseUrl}?cnpj=${cnpj}`;
    return this.http.get<Usuario>(url);
  }

  public postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  public postUsuarioNovo(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}?novo=true`;
    return this.http.post<Usuario>(url, usuario);
  }

  public putUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.baseUrl, usuario);
  }
}
