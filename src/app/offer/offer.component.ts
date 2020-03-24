import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
offers ;
  constructor(private apiService : ApiService , private router : Router) { }

  async ngOnInit() {
  this.offers = (await this.apiService.offers())
  
  }
  async pay(offer){
    localStorage.setItem( 'offer',JSON.stringify(offer));
    this.router.navigate(['/payment'])
    // try {
    //   await this.apiService.Purchase({amount : 
    //   offer.amount + (offer.amount * 0.001 * offer.bounce)
    //   })
    //   Swal.fire({
    //     icon: 'success',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })  
    //   }catch(e){
    //     Swal.fire({
    //       icon: 'error',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })  
    // }
  }

}
