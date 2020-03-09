import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  service;

  constructor(private apiService : ApiService  ) { }

  async ngOnInit() {
    this.service = await this.apiService.getServices();

  };
  
}
