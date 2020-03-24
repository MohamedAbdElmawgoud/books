import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  policies;
  constructor(private apiService : ApiService) { }

  async ngOnInit() {
    this.policies = await this.apiService.getPolicy();
   
   }

}
