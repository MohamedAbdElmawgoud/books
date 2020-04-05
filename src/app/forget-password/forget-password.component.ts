import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forget: any;
  forGetPassword = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
   
    
   });
  constructor(private apiService: ApiService) { }

   ngOnInit() {
    
  }
  async submit(){
    this.forget = await this.apiService.resetPassword(this.forGetPassword.value.email);
    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      title: "check your mail"
    }) 

  }
}
