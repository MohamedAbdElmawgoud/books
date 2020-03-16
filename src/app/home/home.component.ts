import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/admin/service.service";
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../apiServices/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare const $;
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slider;
  services;

  contactForm = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'phone': new FormControl('', [Validators.required]),
    "mail": new FormControl('', [Validators.required , Validators.email]),
    "message": new FormControl('', [Validators.required]),


  });

  constructor(public Service: ServiceService, public translate: TranslateService, private apiService: ApiService) {
    const currentLanguage = translate.getBrowserLang();
    translate.setDefaultLang(currentLanguage);
    translate.use('currentLanguage');
  }

  async ngOnInit() {
    this.slider = await this.apiService.getSlider();
    this.services = (await this.apiService.getServices()).splice(0 , 3);
    setTimeout(()=>{
    this.startSlider()

    } , 2000)
    // this.contact = await this.apiService.contact();
  };

  Translate(type: string) {


    this.translate.use(type);// ar or en


  }

 async  submit(){
    if(this.contactForm.valid){
      await this.apiService.contact(this.contactForm.value);
      this.contactForm.patchValue({})

      Swal.fire({
        icon: 'success',
  showConfirmButton: false,
  timer: 1500
      })

    }
  }
  startSlider() {
    
    $('.home-slider').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: true,
      autoplayHoverPause: true,
      items: 1,
      dragTouch: false,
      navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: true
        }
      }
    });
  }


}
