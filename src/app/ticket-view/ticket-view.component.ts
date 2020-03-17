import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {
  tickets;
  ticketId ;
  lastStatus ;
  ticketForm = new FormGroup({
    message : new FormControl('' , Validators.required),
    status : new FormControl('Open')
  })
  constructor(private apiService : ApiService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params)=>{
      this.ticketId = params.get('id');
      await this.getTicket()
      
    })
  }

  async getTicket(){
    let ticket = (await this.apiService.getTicket(this.ticketId)).data;
      
    this.tickets = [ticket , ...(ticket.tickets || [])]
    this.lastStatus = this.tickets[this.tickets.length - 1].status;
    
  }
  async replay(){
    if(this.ticketForm.valid){
      await this.apiService.addTicket({
        ...this.ticketForm.value,
        parentId : this.ticketId
      })
      await this.getTicket();
      this.ticketForm.reset()

    }
  }
}
