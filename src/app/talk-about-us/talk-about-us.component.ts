import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talk-about-us',
  templateUrl: './talk-about-us.component.html',
  styleUrls: ['./talk-about-us.component.css']
})
export class TalkAboutUsComponent implements OnInit {
  rules ;
  rulesDec;
  constructor(private apiService : ApiService , private router : Router) { }

  async ngOnInit() {
    this.rules = await this.apiService.talkRules();
    this.rulesDec = await this.apiService.rules();

    
  }
  view(){
    this.router.navigate(['talk-about'])
  }
}
