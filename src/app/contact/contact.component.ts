import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
