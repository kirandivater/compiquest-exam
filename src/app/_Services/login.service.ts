import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../_Model/login';
import { Methods } from '../_Model/methods';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  CheckLogin(LoginModel: Login) {
    return this.http.post(environment.GlobalUrl + Methods.CheckLogin, LoginModel);
  }
}
