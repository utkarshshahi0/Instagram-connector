import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  // private accessToken:any= 'IGQWROUTZAHeVNxZAGVxczdvNXFhTUdVLVRpV2M3WUstNXVOV293Q1o0VFdvUHFLQllubEFTMzlJakpHQmJsT3k5andCcGN2RjlIeVNVQVNZAVWFCSVFiZAUhVLS1lZA2Fxbk11Mmx0akxCVGJ3cXNrZAUVDeTFWRWw2U0UZD'

  constructor(private oauthService: OAuthService) {
    this.configureAuth();
  }

  private configureAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    // this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  getAccessToken() {
    return this.oauthService.getAccessToken();
    // this.accessToken = data

  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

}
