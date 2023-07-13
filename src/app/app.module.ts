import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { MatMenuModule } from '@angular/material/menu';

import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddressComponent } from './address/address.component';
import { CounterComponent } from './counter/counter.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './search/search.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    ProductsComponent,
    ProductDetailsComponent,
    RegistrationComponent,
    LoginComponent,
    FeedbackComponent,
    AddressComponent,
    CounterComponent,
    SearchComponent,
    ShoppingCartComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Add ReactiveFormsModule
    MatInputModule, // Add MatInputModule
    MatFormFieldModule, // Add MatFormFieldModule
    MatButtonModule, // Add MatButtonModule
    MatCardModule, // Add MatCardModule
    MatToolbarModule,
    FormsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
