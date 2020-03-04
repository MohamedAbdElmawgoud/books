import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

   get(){
     let slider: [{descrption:'We Are Back Links Company',pathImage:'/assets/images/industrial_hero_1.jpg'}];
     let temp =new  BehaviorSubject(slider).toPromise();
     console.log(temp);
    return temp;
  } 
}
