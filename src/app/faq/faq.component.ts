import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../apiServices/api.service';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  Faqs ;
  constructor(private apiService : ApiService  ) { }

  async ngOnInit() {
    this.Faqs = await this.apiService.getFaqs();

  };
  

}
