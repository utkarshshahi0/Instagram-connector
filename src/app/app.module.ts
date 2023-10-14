import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
// import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
// import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // LoginComponent,
    
  ],
  imports: [
    BrowserModule,HttpClientModule,OAuthModule.forRoot(), AppRoutingModule,
    // AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
