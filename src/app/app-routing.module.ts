import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from "src/app/about/about.component";
import { ContactComponent } from "src/app/contact/contact.component";
import { ServicesComponent } from "src/app/services/services.component";
import { LogInComponent } from "src/app/log-in/log-in.component";
import { SignUpComponent } from "src/app/sign-up/sign-up.component";
import { StoreComponent } from "src/app/store/store.component";
import { FaqComponent } from "src/app/faq/faq.component";
import { OrderComponent } from "src/app/order/order.component";
import { ReportComponent } from "src/app/report/report.component";
import { OrderDetailsComponent } from './order-details/order-details.component';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { PaymentComponent } from "src/app/payment/payment.component";
import { OfferComponent } from "src/app/offer/offer.component";
import { TicketsComponent } from './tickets/tickets.component';
import { UpdateProfileComponent } from "src/app/update-profile/update-profile.component";
import { PurchaseComponent } from "src/app/purchase/purchase.component";
import { PaymentsComponent } from "src/app/payments/payments.component";
import { ForgetPasswordComponent } from "src/app/forget-password/forget-password.component";
import { PolicyComponent } from './policy/policy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [

  {path : '' , component: HomeComponent},
 { path : 'contact' , component: ContactComponent},
 { path : 'about' , component: AboutComponent},
 { path : 'services' , component: ServicesComponent},
 { path : 'log-in' , component: LogInComponent},
 { path : 'sign-up' , component: SignUpComponent}, 
 { path : 'store' , component: StoreComponent},
 { path : 'faq' , component: FaqComponent},
 { path : 'order' , component: OrderComponent},
 { path : 'details' , component: OrderDetailsComponent},
 { path : 'profile' , component: ReportComponent},
 { path : 'tickets' , component: TicketsComponent},
 { path : 'ticket/:id' , component: TicketViewComponent},
 {path:'payment',component:PaymentComponent},
 {path:'offer',component:OfferComponent},
 {path:'update-profile',component:UpdateProfileComponent},
 {path:'purchase',component:PurchaseComponent},
 {path:'payments',component:PaymentsComponent},
 {path:'forget-password',component:ForgetPasswordComponent},
 {path:'policy',component:PolicyComponent},
 {path:'terms',component:TermsComponent},

 
 
 
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
