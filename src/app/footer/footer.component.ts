import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  social: any;

  constructor(public translate:  TranslateService,private apiService: ApiService) {
    const  currentLanguage  =  localStorage.getItem('lng') || 'en'
    this.Translate(currentLanguage)
  }
  
 async ngOnInit(){
    this.social = await this.apiService.getSocial();
    console.log(this.social);
  }
  Translate(type: string){
  
  
    this.translate.use(type);// ar or en
    
  
  }}