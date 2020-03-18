import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  dir = 'ltr';  
  contactForm = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'phone': new FormControl('', [Validators.required]),
    "mail": new FormControl('', [Validators.required , Validators.email]),
    "message": new FormControl('', [Validators.required]),


  });
  constructor(public translate:  TranslateService, private apiService: ApiService) { 
    const  currentLanguage  =  localStorage.getItem('lng') || 'en'
    this.Translate(currentLanguage)
    this.dir = localStorage.getItem('lng') == 'ar' ? 'rtl' : "ltr"
    
  }
    

  ngOnInit(): void {
  }
  Translate(type: string){
    
    
      this.translate.use(type);// ar or en
      
    
    }

    async  submit(){
      if(this.contactForm.valid){
      try{  await this.apiService.contact(this.contactForm.value);
        this.contactForm.patchValue({})
  
        Swal.fire({
          icon: 'success',
    showConfirmButton: false,
    timer: 1500
        })
        }
        
        catch (e) {
          Swal.fire({
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
            title: "please enter valid data"
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

}
