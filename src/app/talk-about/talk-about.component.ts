import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-talk-about',
  templateUrl: './talk-about.component.html',
  styleUrls: ['./talk-about.component.css']
})
export class TalkAboutComponent implements OnInit {
  reqs;
  form = new FormGroup({
    'comment': new FormControl('', Validators.required)
    , 'url': new FormControl('', Validators.required)
    , 'count': new FormControl('', Validators.required),
    'status': new FormControl('Pending'),
    "userId": new FormControl(JSON.parse(localStorage.getItem('user')).id)
  })
  constructor(private apiService: ApiService) { }

  async ngOnInit() {
  this.reqs = await this.apiService.getTalkRetests();
  }
  async  submit() {
    if (this.form.valid) {
      try {
        await this.apiService.sendTalkRequest(this.form.value);
        this.form.patchValue({})

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
          timer: 1500,
          title: "please enter valid data"
        })
      }
    }
    else {
      Swal.fire({
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
        title: "please enter valid data"
      })
    }
  }
}
