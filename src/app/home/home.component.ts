import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/admin/service.service";
import {TranslateService} from '@ngx-translate/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   slider;
   contact;
  
  constructor(public Service: ServiceService,public translate:  TranslateService ,private apiService : ApiService ) { 
    const  currentLanguage  =  translate.getBrowserLang();
    translate.setDefaultLang(currentLanguage);
    translate.use('currentLanguage');
  }

  async ngOnInit() {
    this.slider = await this.apiService.getFaqs();
  // this.contact = await this.apiService.contact();
  };
  
  Translate(type: string){
    
    
      this.translate.use(type);// ar or en
      
    
    }



}
