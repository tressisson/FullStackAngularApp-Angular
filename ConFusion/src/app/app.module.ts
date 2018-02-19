import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PromotionService } from './services/promotion.service';
import { LeadersService } from './services/leaders.service';
import { LeaderdetailComponent } from './leaderdetail/leaderdetail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { baseURL } from './shared/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LeaderdetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  entryComponents: [LoginComponent ],
  providers: [DishService, PromotionService, LeadersService, { provide: 'BaseURL', useValue: baseURL }, ProcessHttpmsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
