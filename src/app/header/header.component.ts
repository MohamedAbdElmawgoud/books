import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentLanguage;
  isLoggedIn;
  user;
  constructor(public translate:  TranslateService , private route : Router , private apiService : ApiService) { 
    this.currentLanguage  =  localStorage.getItem('lng') || 'en'
    this.changeLng(this.currentLanguage)
    this.route.events.subscribe(e=>{
      this.isLoggedIn = localStorage.getItem('token');
    })
  }
  
  async ngOnInit() {
    this.user = (await this.apiService.getUser()).user
  }
  Translate(type: string){
    window.location.reload()
    this.changeLng(type)
   
  
  }
  changeLng(type){
    this.translate.use(type);// ar or en
    localStorage.setItem('lng' ,type)
  }
  logout(){
    localStorage.clear()
    window.location.reload()
  }
}
