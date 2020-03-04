import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/admin/service.service";
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   data;
  
  constructor(public Service: ServiceService) { 
  }

  async ngOnInit() {
    this.Service.get().subscribe(data=>{
      console.log(data);
      
    })
  }



}
