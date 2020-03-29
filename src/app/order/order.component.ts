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
export class OrderComponent implements OnInit, OnDestroy {

  shop;
  Categories;
  extras;
  selectedItem;
  selectedExtras = [];
  total;
  faqs;
  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'displayName',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  }

  orderForm;
  constructor(private apiService: ApiService, private router: Router) {
    let item = JSON.parse(localStorage.getItem('order'));
    if (!item) {
      this.router.navigate(['store'])
    }
    this.selectedItem = item;
    this.total = item.price;

    this.orderForm = new FormGroup({
      quantity: new FormControl(0, [Validators.required, Validators.min(item.minimum)]),
      links: new FormControl('', [Validators.required]),
      keywords: new FormControl('', [Validators.required]),
      article: new FormControl('')
    })
  }


  async ngOnInit() {
    this.shop = await this.apiService.getShop();
    this.faqs = (<[]>await this.apiService.getFaqs()).splice(0, 8);

    this.extras = (await this.apiService.getExtras()).map(ele => {
      return {
        ...ele,
        displayName: ele.name + ' ' + ele?.price + '$',
        price: this.selectedItem.selectedPrice[this.selectedItem.selectedExtras.indexOf(ele.id)]
      }
    }).filter(ele=>this.selectedItem.selectedExtras.indexOf(ele.id) > -1)

    this.Categories = await this.apiService.getCategories();
  };

  get quantity(){
    return this.orderForm?.controls['quantity'].value || 0
  }
  getTotal(){
    return +Number(this.total * this.quantity).toFixed(2)
  }
  getOrder(item) {
    this.selectedItem = item;
    this.total = item.price;
  }
  viewDetails(){
    localStorage.setItem('order' , JSON.stringify(this.selectedItem))
    this.router.navigate(['details'])
  }

  onItemSelect(item: any, e) {
  

    if (!e.target.checked) {
      this.onDeSelect(item);
      return
    }
    let selectedItem = this.extras.filter(ele => ele.id == item.id)[0]
    this.selectedExtras.push(selectedItem)
    this.total = this.total + +selectedItem.price;
  }
  onDeSelect(item: any) {

    let selectedItem;
    this.selectedExtras = this.selectedExtras.filter(ele => {
      selectedItem = ele;
      return ele.id != item.id
    });
    this.total = this.total - selectedItem.price;


  }
  ngOnDestroy(): void {
    // localStorage.removeItem('order')
  }
  async submit() {
    let user = await this.apiService.getUser();
    
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }
    if(user.user.user_balance.totalBalance < this.getTotal()){
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        text : "your balance is not enough",
        timer: 1500
      })
    }
    let params = {
      "itemId": this.selectedItem.id,
      "totalAmount": this.total * this.quantity,
      "extras": this.selectedExtras.map(ele => ele.id),
      ...this.orderForm.value,
    }
    // console.log(params);

    await this.apiService.order(params);
    // document.getElementById('close').click()
    this.router.navigate(['store'])

    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })
  }
  viewFaq(item) {
    this.router.navigate(['faq'])
  }
}





