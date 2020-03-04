import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

    get(){
     let slider = [{descrption:'We Are Back Links Company',pathImage:'/assets/images/industrial_hero_1.jpg'}];

    return new  BehaviorSubject(slider)
  } 
}
