import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textDir: string;
  title = 'books';
  constructor(public translate:  TranslateService) { 
    const  currentLanguage  =  localStorage.getItem('lng') || 'en'
    this.Translate(currentLanguage)
    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
    {
      if(event.lang == 'ar')
      {
        this.textDir = 'rtl';
      }
      else
      {
        this.textDir = 'ltr';
      }
    });
  
  }

  
  Translate(type: string){
    
    
      this.translate.use(type);// ar or en
      
    
    }
      
 
}
