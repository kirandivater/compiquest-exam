import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIUrls } from '../_Model/apiurls';
import { Login } from '../_Model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  CheckLogin(LoginModel: Login) {
    return this.http.post(APIUrls._apiUrl, LoginModel);
  }
}
