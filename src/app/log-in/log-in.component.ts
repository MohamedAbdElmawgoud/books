import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(public translate: TranslateService, private apiService: ApiService) {
    const currentLanguage = translate.getBrowserLang();
    translate.setDefaultLang(currentLanguage);
    translate.use('currentLanguage');
  }

  ngOnInit(): void {
  }
  Translate(type: string) {


    this.translate.use(type);// ar or en


  }

  async login() {
    if (this.loginForm.valid) {
      await this.apiService.login(this.loginForm.value)
    }
  }
}
