import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
shop;
  constructor(private apiService : ApiService ,private router: Router) { }

  async ngOnInit() {
    this.shop = await this.apiService.getShop();

  };
  getOrder(){
    
    this.router.navigate(['order']);
  }
}
