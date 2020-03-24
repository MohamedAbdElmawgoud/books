import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,  } from '@angular/core';
import { ReactiveFormsModule, FormsModule ,  } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LogInComponent } from './log-in/log-in.component';
import { TranslateModule, TranslateLoader, TranslateService } from  '@ngx-translate/core';
import { TranslateHttpLoader } from  '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from  '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StoreComponent } from './store/store.component';
import { FaqComponent } from './faq/faq.component';
import { OrderComponent } from './order/order.component';
import { ReportComponent } from './report/report.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { PaymentComponent } from './payment/payment.component';
import { OfferComponent } from './offer/offer.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PaymentsComponent } from './payments/payments.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';
export  function  HttpLoaderFactory(http:  HttpClient) {
  return  new  TranslateHttpLoader(http, './assets/translate/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    LogInComponent,
    SignUpComponent,
    StoreComponent,
    FaqComponent,
    OrderComponent,
    ReportComponent,
    OrderDetailsComponent,
    HowItWorksComponent,
    TicketsComponent,
    TicketViewComponent,
    PaymentComponent,
    OfferComponent,
    UpdateProfileComponent,
    PurchaseComponent,
    PaymentsComponent,
    ForgetPasswordComponent,
    TermsComponent,
    PolicyComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,   
    TranslateModule.forRoot({
      loader: {
        provide:  TranslateLoader,
        useFactory:  HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],  
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
