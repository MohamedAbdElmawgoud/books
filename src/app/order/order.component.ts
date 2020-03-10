import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  extras;
  Categories;
  Keywords;
  quantity;
  links;
  check;

  constructor(private apiService : ApiService ) { }

  async ngOnInit() {

   
  }
  getForm(){
        console.log('the quantity is  '+this.quantity+ '   links: '+this.links + '  the comment is '+this.Keywords);

  }
}


  



