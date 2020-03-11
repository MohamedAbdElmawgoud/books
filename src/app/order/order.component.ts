import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit , OnDestroy {

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
    article : new FormControl('', [Validators.required]),
    comment : new FormControl('', [Validators.required]),


  });
  constructor(private apiService: ApiService, private router: Router) {
    let item = JSON.parse(localStorage.getItem('order'));
    if(!item){
      this.router.navigate(['store'])
    }
      this.selectedItem = item;
    this.total = item.price;
   }

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
  ngOnDestroy(): void {
    localStorage.removeItem('order')
  }
  async submit(){
    let params = {
  "itemId": this.selectedItem.id,
  "totalAmount": this.total,
  "extras": this.selectedExtras.map(ele=>ele.id),
      ...this.orderForm.value,
    }
  await this.apiService.order(params);
  document.getElementById('close').click()

  Swal.fire({
    icon: 'success',
    showConfirmButton: false,
    timer: 1500
  })
  }
}

  



