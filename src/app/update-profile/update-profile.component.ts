import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user;
  updateForm ;
  constructor(private apiService:ApiService ) { }

 async  ngOnInit() {
this.user = (await this.apiService.getUser()).user;
this.updateForm = new FormGroup({
  name: new FormControl(this.user.name, [
    Validators.required,
  ]),
  email: new FormControl(this.user.email, [
    Validators.required,
    Validators.email
  ])
  
 })

  }
  async update(){
await this.apiService.editUser({name:this.updateForm.value.name, email:this.updateForm.value.email , id : this.user.id});

  }
}
