import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  user: any;
  isLoggedIn;
  dir = 'ltr';
  offer ;
  constructor(private apiService : ApiService) { 
    this.dir = localStorage.getItem('lng') == 'ar' ? 'rtl' : "ltr"
  }

 async ngOnInit() {
  this.isLoggedIn = localStorage.getItem('token');
  this.user = (await this.apiService.getUser()).user;
  this.offer = JSON.parse(localStorage.getItem('offer'))
  }

  get willPay(){
    return this.offer.amount
  }

  get willGet(){
    return this.offer.amount  + (this.offer.amount * this.offer.bounce * 0.01)
  }

}
