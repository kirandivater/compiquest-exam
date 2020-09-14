import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIUrls } from '../_Model/apiurls';
import { Login } from '../_Model/login';
import { Methods } from '../_Model/methods';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  CheckLogin(LoginModel: Login) {
    return this.http.post(APIUrls.GlobalUrl + Methods.CheckLogin, LoginModel);
  }
}
