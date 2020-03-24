import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchase;
  purchaseForm = new FormGroup({
    Amount: new FormControl('', [
      Validators.required,
      
    ]),
   
    
   });
   user 
offer;
isAgree;
  constructor(private apiService :ApiService) { }


  async ngOnInit() {
    this.user = (await this.apiService.getUser()).user;
    this.offer = JSON.parse(localStorage.getItem('offer'))
    }
  
    get willPay(){
      return this.offer.amount
    }
  
    get willGet(){
      return this.offer.amount  + (this.offer.amount * this.offer.bounce * 0.01)
    }
  async submit(){
    if(this.isAgree){
    try {
      await this.apiService.Purchase({amount : 
      this.offer.amount + (this.offer.amount * 0.001 * this.offer.bounce)
      })
      Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      })  
      }catch(e){
        Swal.fire({
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        })  
    }
    }else{
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
        text : "you must agree for terms and polices"
      })  
    }

  }
}
