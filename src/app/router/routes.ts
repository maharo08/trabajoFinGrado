import { WarmingComponent } from './../pages/blog/blogPages/warming/warming.component';
import { FoodComponent } from './../pages/blog/blogPages/food/food.component';
import { ListingComponent } from './../pages/listing/listing.component';
import { Routes } from "@angular/router"
import { ContactComponent } from "../pages/contact/contact.component"
import { Error404Component } from "../pages/error404/error404.component"
import { LandingComponent } from "../pages/landing/landing.component"
import { LoginComponent } from "../pages/login/login.component"
import { RegisterComponent } from "../pages/register/register.component"
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard"
import { BlogComponent } from "../pages/blog/blog.component"
import { HypertophyComponent } from '../pages/blog/blogPages/hypertophy/hypertophy.component';
import { MachinesComponent } from '../pages/blog/blogPages/machines/machines.component';
import { SuplementationComponent } from '../pages/blog/blogPages/suplementation/suplementation.component';
import { RestComponent } from '../pages/blog/blogPages/rest/rest.component';


export const routes: Routes = [

  {path: '', pathMatch:'full', redirectTo: 'landing'},
  {path: 'landing', component: LandingComponent, ...canActivate(() => redirectUnauthorizedTo(['/register']))},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'listing', component: ListingComponent},
  {path: 'hypertophy', component: HypertophyComponent},
  {path: 'food', component: FoodComponent},
  {path: 'machines', component: MachinesComponent},
  {path: 'warming', component: WarmingComponent},
  {path: 'suplementation', component: SuplementationComponent},
  {path: 'rest', component: RestComponent},
  {path: 'error404', component: Error404Component},
  {path: '**', redirectTo: 'error404'}

]
