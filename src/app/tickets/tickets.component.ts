import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets
  constructor(private api : ApiService , private router : Router) { }
  ticketForm = new FormGroup({
    message : new FormControl('' , Validators.required),
    category : new FormControl('' , Validators.required),
    subject : new FormControl('' , Validators.required),
    orderId : new FormControl('' , Validators.required),
  })
  async ngOnInit() {
    this.tickets = (await this.api.tickets()).map(ele=>{
      ele['lastStatus'] = ele.tickets[ele.tickets.length - 1]?.status 
      
      return ele 
    })
  }

  async addTicket(){
    // console.log(this.ticketForm.value);
    if(this.ticketForm.valid){
      let data = await this.api.addTicket(this.ticketForm.value);
      await this.ngOnInit();
      document.getElementById('close').click()
    }
  }

  viewTicket(item){
    this.router.navigate(['/ticket' , item.id])
  }

}
