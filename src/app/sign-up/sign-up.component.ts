import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public translate:  TranslateService) { 
    const  currentLanguage  =  translate.getBrowserLang();
    translate.setDefaultLang(currentLanguage);
    translate.use('currentLanguage'); }

  ngOnInit(): void {
  }
  Translate(type: string){
    
    
      this.translate.use(type);// ar or en
      
    
    }
}