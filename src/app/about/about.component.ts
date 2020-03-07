import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/admin/service.service";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: {};

  constructor(public Service: ServiceService) {
    
  }


  ngOnInit(): void {
    this.Service.get('about').subscribe(data=>{
      console.log(data);
      this.data= data;
    })
  }

}
