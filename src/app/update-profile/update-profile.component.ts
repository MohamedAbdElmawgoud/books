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
  updateValue;
  updateForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
    
   });
  constructor(private apiService:ApiService ) { }

  ngOnInit(): void {
  }
  async update(){
await this.apiService.editUser({name:this.updateForm.value.name, email:this.updateForm.value.email});
this.updateValue = await this.apiService.getUser();
console.log(this.updateValue);

  }
}
