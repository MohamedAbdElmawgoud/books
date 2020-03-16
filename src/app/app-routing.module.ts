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
 {path:'offer',component:OfferComponent}
 
 
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
