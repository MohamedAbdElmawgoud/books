import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

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
