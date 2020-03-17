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
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
    
   });
  constructor(private apiService:ApiService ) { }

  ngOnInit(): void {
  }
  async update(){
this.updateValue = await this.apiService.getUser();
console.log(this.updateValue);
  }
}
