import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
  constructor(public translate: TranslateService, private apiService: ApiService, private router: Router) {
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
      try {
        await this.apiService.register(this.signForm.value);
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['profile'])
      } catch (e) {
        Swal.fire({
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
          title: "please enter valid data"
        })
      }

    }
  }
}