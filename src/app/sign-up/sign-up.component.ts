import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),

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
  async signUp() {
    if (this.signForm.valid) {
      await this.apiService.register(this.signForm.value)
    }
  }
}