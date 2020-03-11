import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm=new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    
    confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
        ]) ,
       
      }, 
      // {validator: this.checkPasswords }
    );

      
  submitted = false;
  constructor(public translate: TranslateService, 
    private apiService: ApiService, 
    private router: Router
    ,private formBuilder: FormBuilder) {
    const currentLanguage = translate.getBrowserLang();
    translate.setDefaultLang(currentLanguage);
    translate.use('currentLanguage');
  }

  ngOnInit() {

   
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPass').value;

  return pass === confirmPass ? null : { notSame: true }     
}


  Translate(type: string) {

    this.translate.use(type);// ar or en

  }
  async signUp() {
    if (this.registerForm.valid) {
      try {
        await this.apiService.register(this.registerForm.value);
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