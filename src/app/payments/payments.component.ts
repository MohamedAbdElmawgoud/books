import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  transAction;
  constructor(private apiService : ApiService) { }

  async ngOnInit() {
    this.transAction = await this.apiService.transactions();
    
    console.log(this.transAction);
    }

}
