import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/Usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(environment.apiURL + "/usuarios");
  }


  getUsuario(id: String): Observable<Usuario>{
    return this.http.get<Usuario>(environment.apiURL + "/usuarios/" + id);
  }


  addUsuario(nuevousuario: Usuario): Observable<any>{
    return this.http.post(environment.apiURL + '/usuarios/new', nuevousuario);
  }


  modificarUsuario(usuariomodificado: Usuario, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/usuarios/update/" + id, usuariomodificado);
  }


  eliminarUsuario(id: String): Observable<any>{
    return this.http.delete<Usuario>(environment.apiURL + "/usuarios/"+ id);
  }
}
