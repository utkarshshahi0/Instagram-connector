import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { UserService } from 'src/app/user.service';
import { UtilityService } from 'src/app/utility.service';
declare var Instafeed:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private utility: UtilityService,
     private http: HttpClient,
      route: ActivatedRoute,
      private el: ElementRef) {}

  ngOnInit(): void {
    // this.route.fragment.subscribe((fragment:any) => {
    //   const accessToken = new URLSearchParams(fragment).get('');
    //   if (accessToken) {
    //     // You have the access token; you can now make API requests to Instagram.
    //     console.log('Access token:', accessToken);
    //   } else {
    //     console.error('No access token found.');
    //   }
    // });     

    // const grid = this.el.nativeElement.querySelector('.masonry-grid');
    // new Masonry(grid, {
    //   itemSelector: '.masonry-item',
    //   // Other Masonry options as needed
    // });
  }

  async connectToInstagram(){
    let script:any = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js';
    if (script && script['readyState']) {  //IE
        script.onreadystatechange = () => {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
               
            }
        };
    } 
 
   await document.getElementsByTagName('head')[0].appendChild(script);
    script.onload = () => {
      var userFeed = new Instafeed({
        get: 'user',
        target: "instafeed-container",
          resolution: 'low_resolution',
        accessToken: 'Removed Access Token for Security resons'
      });
      userFeed.run();                    
    };
  }
  }