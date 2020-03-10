import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  logInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
    
   });
  constructor(public translate: TranslateService, private apiService: ApiService , private router : Router) {
    const currentLanguage = translate.getBrowserLang();
    translate.setDefaultLang(currentLanguage);
    translate.use('currentLanguage');
    
    
  }

  ngOnInit(): void {
  }
  

  revert() {
    this.logInForm.reset();
  }



  Translate(type: string) {


    this.translate.use(type);// ar or en


  }

  onSubmit(){
    console.log(this.logInForm.value);
  }

  // async login() {
  //   if (this.logInForm.valid) {
  //     await this.apiService.login(this.logInForm.value);
  //     Swal.fire({
  //             icon: 'success',
  //       showConfirmButton: false,
  //       timer: 1500
  //           })
  //     this.router.navigate(['profile'])
  //   }
  // }
}
