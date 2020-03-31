import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  services;
  faqs;
  selectedItem;
  currentLanguage;
  dir;
  constructor(private apiService: ApiService , private router : Router) { 
    let item = JSON.parse(localStorage.getItem('order'));
    if(!item){
      this.router.navigate(['store'])
    }
      this.selectedItem = item;
      this.currentLanguage  =  localStorage.getItem('lng') || 'en'
      this.dir = this.currentLanguage == 'ar' ?  "rtl" : "ltr"
  }

  async ngOnInit() {
  this.services = await this.apiService.getShop();
  this.faqs = (<[]>await this.apiService.getFaqs()).splice(0 , 8);
  
  }

  getOrder(item) {
    localStorage.setItem('order' , JSON.stringify(item))
    this.router.navigate(['order'])
  }
  viewFaq(item){
    this.router.navigate(['faq'])
  }
  viewDetails(item){
    localStorage.setItem('order' , JSON.stringify(item))
    this.selectedItem = item;
  }
}
