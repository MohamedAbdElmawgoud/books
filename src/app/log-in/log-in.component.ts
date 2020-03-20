import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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



  async login() 
{
     
     if (this.logInForm.valid) {
        
    try{      await this.apiService.login({email:this.logInForm.value.email,password :this.logInForm.value.password});
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      }) 
      this.router.navigate(['profile'])
    }
     
 
      catch(e){
        Swal.fire({
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        })  
      }
    }
    else{
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
        title: "please enter valid data"
      })
    }
  }
  forgetPassword(){
    this.router.navigate(['forget-password'])
    
  }
}
