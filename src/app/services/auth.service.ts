import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Login } from '../interfaces/login.interfaces';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/login_response';
import { ValidateOtp } from '../interfaces/validate_otp.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL_BASE:string = environment.api_base
  private _totp:string | undefined;
  constructor(
    private _http: HttpClient
  ) { }

  login(data: Login): Observable<LoginResponse>{
    return this._http.post<LoginResponse>(`${this.URL_BASE}/auth/login`, data)
  }

  validate(otp: ValidateOtp){
    return this._http.post(`${this.URL_BASE}/auth/validate`, otp)
  }

  set totp(key: string){
    this._totp = key;
  }

  get totp(): string | undefined{
    return this._totp;
  }


}
