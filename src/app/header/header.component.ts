import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public translate:  TranslateService) { 
    const  currentLanguage  =  translate.getBrowserLang();
    translate.setDefaultLang(currentLanguage);
    translate.use('en');
  }
  
  ngOnInit(): void {
  }
  Translate(type: string){
  
  
    this.translate.use(type);// ar or en
    
  
  }}
