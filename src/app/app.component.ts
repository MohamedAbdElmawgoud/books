import { Component } from '@angular/core';
import { TranslateService } from  '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';
  constructor(translate:  TranslateService) { 
    
    const  currentLanguage  =  translate.getBrowserLang();
   translate.setDefaultLang(currentLanguage);
    translate.use(currentLanguage);// ar or en
      }
}
