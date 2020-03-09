import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public translate:  TranslateService) { 
    const  currentLanguage  =  localStorage.getItem('lng') || 'en'
    this.Translate(currentLanguage)
  }
  
  ngOnInit(): void {
  }
  Translate(type: string){
  
  
    this.translate.use(type);// ar or en
    
  
  }}