import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../_Model/login';
import { LoginService } from '../_Services/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private loginModel: Login, private route: Router) { }

  ngOnInit() {}

  CheckLogin(Username, Password) {
    $('#btnlogin').css('display', 'none');

    this.loginModel.Username = Username;
    this.loginModel.Password = Password;

    //this.loginModel.Username = "CQGargoti";
    //this.loginModel.Password = "Mashal@2324";

    this.loginService.CheckLogin(this.loginModel).subscribe(Response => {
      let data = JSON.parse(JSON.stringify(Response));

      if(data.recordset.length > 0) {
        this.route.navigate(['/', 'home']);
      } else {
        alert('User name or password incorrect');
      }

      $('#btnlogin').css('display', 'block');
    }, error => {
      alert(JSON.stringify(error));
    }, () => {
      
    });
  }
}
