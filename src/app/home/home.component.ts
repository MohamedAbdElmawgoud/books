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
   data;
  
  constructor(public Service: ServiceService,public translate:  TranslateService ,private apiService : ApiService ) { 
    const  currentLanguage  =  translate.getBrowserLang();
    translate.setDefaultLang(currentLanguage);
    translate.use('currentLanguage');
  }

  async ngOnInit() {
    this.Service.get('slider').subscribe(data=>{
      this.data= data;
      
    })
    console.log( await this.apiService.getExtras());
    
  }

  Translate(type: string){
    
    
      this.translate.use(type);// ar or en
      
    
    }



}
