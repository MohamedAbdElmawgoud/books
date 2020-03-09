import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/admin/service.service";
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: {};

  constructor(private apiService : ApiService) {
    
  }


  async ngOnInit() {
    this.about = await this.apiService.getAboutUs();

  };
  
}
