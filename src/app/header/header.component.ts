import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentLanguage;
  isLoggedIn
  constructor(public translate:  TranslateService , private route : Router) { 
    this.currentLanguage  =  localStorage.getItem('lng') || 'en'
    this.changeLng(this.currentLanguage)
    this.route.events.subscribe(e=>{
      this.isLoggedIn = localStorage.getItem('token');
    })
  }
  
  ngOnInit(): void {
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
