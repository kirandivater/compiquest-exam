import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../_Model/login';
import * as $ from 'jquery';
import { AuthenticationService } from '../_Services/auth/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private loginModel: Login, 
    private router: Router) { }

  ngOnInit() { }

  CheckLogin(Username, Password) {
    $('#btnlogin').css('display', 'none');

    this.loginModel.Username = Username;
    this.loginModel.Password = Password;

    this.authenticationService.login(this.loginModel)
      .pipe(first())
      .subscribe(
        data => {
          let count = [];
          count = JSON.parse(JSON.stringify(data));

          if (count.length > 0) {
            this.router.navigate(['/', 'home']);
          } else {
            alert('User name or password is incorrect...');
          }
        },
        error => {
          alert(JSON.stringify(error));
        });

        $('#btnlogin').css('display', 'inline-block');
  }
  //this.loginModel.Username = "CQGargoti";
  //this.loginModel.Password = "Mashal@2324";

  //   this.loginService.CheckLogin(this.loginModel).subscribe(Response => {
  //     let data = JSON.parse(JSON.stringify(Response));

  //     if(data.recordset.length > 0) {
  //       this.route.navigate(['/', 'home']);
  //     } else {
  //       alert('User name or password incorrect');
  //     }

  //     $('#btnlogin').css('display', 'inline-block');
  //   }, error => {
  //     alert(JSON.stringify(error));
  //   }, () => {

  //   });
  // }
}
