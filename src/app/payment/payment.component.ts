import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private apiService : ApiService) { }

 async ngOnInit() {
  
  }

}
