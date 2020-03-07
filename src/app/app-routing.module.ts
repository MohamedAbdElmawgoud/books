import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from "src/app/about/about.component";
import { ContactComponent } from "src/app/contact/contact.component";
import { ServicesComponent } from "src/app/services/services.component";
import { LogInComponent } from "src/app/log-in/log-in.component";
import { SignUpComponent } from "src/app/sign-up/sign-up.component";
import { StoreComponent } from "src/app/store/store.component";


const routes: Routes = [

  {path : '' , component: HomeComponent},
 { path : 'contact' , component: ContactComponent},
 { path : 'about' , component: AboutComponent},
 { path : 'services' , component: ServicesComponent},
 { path : 'log-in' , component: LogInComponent},
 { path : 'sign-up' , component: SignUpComponent}, 
 { path : 'store' , component: StoreComponent},
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
