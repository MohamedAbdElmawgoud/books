import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
offers ;
  constructor(private apiService : ApiService) { }

  async ngOnInit() {
  this.offers = (await this.apiService.offers())
  
  }
  async pay(offer){
    console.log(offer);
    
    try {
      await this.apiService.Purchase({amount : 
      offer.amount + (offer.amount * 0.001 * offer.bounce)
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
  }

}
