import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../_Model/login';
import { LoginService } from '../_Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private loginModel: Login, private route: Router) { }

  ngOnInit() {}

  CheckLogin(Username, Password) {
    this.loginModel.Username = Username; //"CQGargotiv";
    this.loginModel.Password = Password; //"Mashal@2324";

    console.log(this.loginModel);

    this.loginService.CheckLogin(this.loginModel).subscribe(Response => {
      console.log(Response);
    }, error => {
      alert(JSON.stringify(error));
    }, () => {
      this.route.navigate(['/', 'home']);
    });
  }
}
