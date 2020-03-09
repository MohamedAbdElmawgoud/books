import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
shop;
  constructor(private apiService : ApiService ) { }

  async ngOnInit() {
    this.shop = await this.apiService.getShop();

  };
}
