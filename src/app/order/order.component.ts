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
  form: FormGroup;
  check;
  quantity

  constructor(private apiService : ApiService ) { }

  async ngOnInit() {
    this.extras = await this.apiService.getExtras();
   
  }
  calculate(check,quantity){
        console.log(check*quantity);

  }
}


  



