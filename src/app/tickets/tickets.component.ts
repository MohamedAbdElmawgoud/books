import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets;
  allTickets
  constructor(private api: ApiService, private router: Router) { }
  ticketForm = new FormGroup({
    message: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    orderId: new FormControl('', Validators.required),
  })
  async ngOnInit() {
    this.tickets = (await this.api.tickets()).map(ele => {
      ele['lastStatus'] = ele.tickets[ele.tickets.length - 1]?.status || 'Open'

      return ele
    })

    this.allTickets = [...this.tickets]
  }

  async addTicket() {
    // console.log(this.ticketForm.value);
    if (this.ticketForm.valid) {
      try {
        let data = await this.api.addTicket(this.ticketForm.value);
        await this.ngOnInit();
        document.getElementById('close').click()
        Swal.fire({
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
      catch (e) {
        Swal.fire({
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  }

  viewTicket(item) {
    this.router.navigate(['/ticket', item.id])
  }
  onChange(e) {
    this.tickets = this.allTickets.filter(ele => {
      if (e.target.value != 'all') {
        return ele.lastStatus == e.target.value
      }
      return ele
    })
  }

}
