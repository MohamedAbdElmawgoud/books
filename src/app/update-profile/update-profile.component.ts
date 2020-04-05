import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user;
  updateForm;
  currentLanguage
  dir
  constructor(private apiService: ApiService , private router : Router) {
    this.currentLanguage  =  localStorage.getItem('lng') || 'en'
    this.dir = this.currentLanguage == 'ar' ?  "rtl" : "ltr"
  }

  async  ngOnInit() {
    this.user = (await this.apiService.getUser()).user;
    this.updateForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(8)
      ])

    })

  }
  async update() {
    await this.apiService.editUser({ name: this.updateForm.value.name, password: this.updateForm.value.password, id: this.user.id });
    // localStorage.clear();
    // this.router.navigate(['/login']);
    // window.location.reload()
  }
}
