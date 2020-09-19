import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from 'src/app/_Model/login';
import { environment } from 'src/environments/environment';
import { Methods } from 'src/app/_Model/methods';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Login>;
    public currentUser: Observable<Login>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Login {
        return this.currentUserSubject.value;
    }

    login(users: Login) {
        //let username = users.UserId;
        //let password = users.Password;

        // return this.http.post<User>(ApiUrl.WebApiUrl + Methods.LoginStatusDetails, { username, password })
        return this.http.post<Login>(environment.GlobalUrl + Methods.CheckLogin, users)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
