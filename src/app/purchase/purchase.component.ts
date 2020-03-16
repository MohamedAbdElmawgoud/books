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
  constructor(private apiService :ApiService) { }

   ngOnInit() {
    
  }
  async submit(){
    this.purchase = await this.apiService.Purchase({amount:this.purchaseForm.value.Amount});
    console.log(this.purchase);
  }
}
