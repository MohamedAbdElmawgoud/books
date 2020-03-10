import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  shop;
  Categories;
  extras;
  selectedItem;
  selectedExtras = [];
  total ;
  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'displayName',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  }

  orderForm  = new FormGroup({
    quantity: new FormControl('', [Validators.required]),
    links: new FormControl('', [Validators.required]),
    keywords: new FormControl('', [Validators.required]),

  });
  constructor(private apiService: ApiService, private router: Router) { }

  async ngOnInit() {
    this.shop = await this.apiService.getShop();
    this.extras = (await this.apiService.getExtras()).map(ele=>{
      return { 
        ...ele,
        displayName : ele.name + ' ' + ele?.price + '$',
        price : ele.price
      }
    });
    
    this.Categories = await this.apiService.getCategories();
    

  };
  getOrder(item) {
    this.selectedItem = item;
    this.total = item.price;
  }

  onItemSelect(item: any) {
    let selectedItem=  this.extras.filter(ele=>ele.id == item.id)[0]
    this.selectedExtras.push(selectedItem)
    this.total = this.total + selectedItem.price;
  }
  onDeSelect(item: any) {
    let selectedItem;
    this.selectedExtras =  this.selectedExtras.filter(ele=>{
      selectedItem = ele;
      return ele.id != item.id
    });
    this.total = this.total - selectedItem.price;


  }
}
