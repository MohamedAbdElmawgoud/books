import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  orders;
  constructor(private apiService : ApiService) { }

  async ngOnInit() {
    this.orders = await this.apiService.getOrders();
    console.log(this.orders);
    
  }

}
