import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  terms;
  constructor(private apiService : ApiService) { }

  async ngOnInit() {
   this.terms = await this.apiService.getTerms();
  
  }

}
