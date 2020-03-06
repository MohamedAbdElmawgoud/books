import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/admin/service.service";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   data;
  
  constructor(public Service: ServiceService,public translate:  TranslateService) { 
    const  currentLanguage  =  translate.getBrowserLang();
    translate.setDefaultLang(currentLanguage);
    translate.use('currentLanguage');
  }

  async ngOnInit() {
    this.Service.get().subscribe(data=>{
      this.data= data;
      
    })
    console.log(this.data.descrption);
  }

  Translate(type: string){
    
    
      this.translate.use(type);// ar or en
      
    
    }



}
