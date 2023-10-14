import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://localhost:4200/auth',
  redirectUri: window.location.origin + '/callback',
  clientId: '168605499636639',
  responseType: 'code',
  scope: 'openid profile email',
};