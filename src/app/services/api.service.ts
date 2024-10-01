import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Permiso } from '../interfaces/permisos.interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

//const URL_BASE = 'http://101.46.55.37:3050'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_BASE = environment.api_base;
  constructor(private _http: HttpClient) { }

  permisos():Observable<Permiso[]>{
    return this._http.get<Permiso[]>(`${this.URL_BASE}/access-control/permission`)
  }

  createPermiso(permiso: Permiso){
    return this._http.post(`${this.URL_BASE}/access-control/permission`,permiso)
  }
}
