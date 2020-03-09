import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentLanguage;
  constructor(public translate:  TranslateService) { 
    this.currentLanguage  =  localStorage.getItem('lng') || 'en'
    this.changeLng(this.currentLanguage)
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
}
