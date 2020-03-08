import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

    get(Type:string){
      if(Type== 'slider'){
     let slider = [{descrption:'We Are Back Links Company',
     pathImage:'/assets/images/industrial_hero_1.jpg',
     paragraph: 'nader medhat and mohamed Abd Elmawgoud'}
    ,
    {descrption:'The Best Level of Excellence in Steel Fabrication',
    pathImage:'/assets/images/industrial_hero_2.jpg',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Avoidance of discomfort, this is troublesome to leave open?'}
    ,
    {descrption:`Let's Build Together`,
    pathImage:'/assets/images/industrial_featured_img_1.jpg',
    paragraph: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'}
  ,
  {descrption:`We'll handle any intercate custom design`,
  pathImage:'/assets/images/industrial_featured_img_2.jpg',
  paragraph: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'}  
  
  ];

    return new  BehaviorSubject(slider)
}

if(Type=='about'){
  let about = [{descrption:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'
  ,pathImage:''},


  {descrption:'Mellisa Howard',
  pathImage:'assets/images/person_1.jpg'},
  


  {descrption:'Mike Richardson',
  pathImage:'assets/images/person_2.jpg'},


  {descrption:'Laura Smith',
  pathImage:'assets/images/person_4.jpg'},



  {descrption:'Kevin Gold',
  pathImage:'assets/images/person_3.jpg'},


 
]
return new  BehaviorSubject(about)
}
  } 
}
