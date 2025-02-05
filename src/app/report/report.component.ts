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
  currentLanguage;
dir;
  constructor(private apiService : ApiService) 
  {
    this.currentLanguage  =  localStorage.getItem('lng') || 'en'
    this.dir = this.currentLanguage == 'ar' ?  "rtl" : "ltr"

   }

  async ngOnInit() {
    this.orders = await this.apiService.getOrders();
    this.pendingOrders = this.orders.filter(ele=>!ele.report).length
    this.completedOrders = this.orders.filter(ele=>ele.report).length
    this.AllOrders =  this.pendingOrders + this.completedOrders;
    
  }
  view(item){
    this.selectedItem = item;
    
  }

}
