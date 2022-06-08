import { Routes } from "@angular/router"
import { ContactComponent } from "../pages/contact/contact.component"
import { Error404Component } from "../pages/error404/error404.component"
import { LandingComponent } from "../pages/landing/landing.component"
import { LoginComponent } from "../pages/login/login.component"
import { RegisterComponent } from "../pages/register/register.component"

export const routes: Routes = [

  {path: '', pathMatch:'full', redirectTo: 'landing'},
  {path: 'landing', component: LandingComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'error404', component: Error404Component},
  {path: '**', redirectTo: 'error404'}

]



