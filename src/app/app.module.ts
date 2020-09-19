import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './_Services/auth/authentication.service';
import { UserService } from './_Services/auth/user.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { LoginService } from './_Services/login.service';
import { ErrorInterceptor } from './_helper/error.interceptor';
import { JwtInterceptor } from './_helper/jwt.interceptor';
import { Login } from './_Model/login';
import { Methods } from './_Model/methods';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticationService,
    UserService,
    ErrorInterceptor,
    JwtInterceptor,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    //Services
    LoginService, 
    
    //Classes
    Login,
    Methods
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
