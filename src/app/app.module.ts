import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { initializeApp ,provideFirebaseApp} from '@angular/fire/app';
import { environment } from '../environments/environment';
import{provideFirestore,getFirestore} from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BlogComponent } from './pages/blog/blog.component';
import { ListingComponent } from './pages/listing/listing.component';
import { HypertophyComponent } from './pages/blog/blogPages/hypertophy/hypertophy.component';
import { FoodComponent } from './pages/blog/blogPages/food/food.component';
import { MachinesComponent } from './pages/blog/blogPages/machines/machines.component';
import { WarmingComponent } from './pages/blog/blogPages/warming/warming.component';
import { SuplementationComponent } from './pages/blog/blogPages/suplementation/suplementation.component';
import { RestComponent } from './pages/blog/blogPages/rest/rest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    Error404Component,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    BlogComponent,
    ListingComponent,
    HypertophyComponent,
    FoodComponent,
    MachinesComponent,
    WarmingComponent,
    SuplementationComponent,
    RestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
