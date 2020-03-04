import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  async get(): any{
     let yourObserver :any = [];
    let dataObserval= new Observable  (data=>
    
    {
      yourObserver.push(data);
    })
return yourObserver.toPromise()
  } 
}
