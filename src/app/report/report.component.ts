import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'profile',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  orders;
  pendingOrders ;
  completedOrders;
  AllOrders;
  selectedItem : any = {};
  constructor(private apiService : ApiService) { }

  async ngOnInit() {
    this.orders = await this.apiService.getOrders();
    this.pendingOrders = this.orders.filter(ele=>ele.status== 'pending').length
    this.completedOrders = this.orders.filter(ele=>ele.response[0]).length
    this.AllOrders =  this.pendingOrders + this.completedOrders;
    
  }
  view(item){
    this.selectedItem = item;
    
  }

}
