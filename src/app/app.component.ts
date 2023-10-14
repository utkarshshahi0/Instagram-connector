import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insta-connector';
  // redirectUri:string =  'https://localhost:4200/auth';
  // redirectUri: window.location.origin + '/callback',
  // clientId:string= '168605499636639';


  // connectWithInstagram() {
    // Construct the Instagram authorization URL
    // const instagramAuthUrl = `https://api.instagram.com/oauth/authorize/?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=token`;

    // Redirect the user to Instagram for authentication
  //   window.location.href = instagramAuthUrl;
  // }
}
