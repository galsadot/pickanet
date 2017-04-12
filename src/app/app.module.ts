import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DndModule } from "ng2-dnd";
import { HomeComponent } from "./home/home.component";
import { Ng2PageScrollModule } from "ng2-page-scroll";
import { AboutComponent } from './about/about.component';
import { StandartBtnComponent } from "./shared/standart-button/standart-button.component";
import { AppCartComponent } from "./shared/cart/cart.component";
import { CartPageComponent } from "./cart-page/cart-page.component";
import { PaymentComponent } from "./payment/payment.component";
import { FormComponent } from './form/form.component';
import {NetService} from "./shared/cart/nets/net.service";
import {SpinnerModule} from "primeng/components/spinner/spinner";
import {ComingComponent} from "./coming/coming.component";
import {ExtraService} from "./shared/cart/extras/extras.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StandartBtnComponent,
    AppCartComponent,
    CartPageComponent,
    PaymentComponent,
    FormComponent,
    ComingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DndModule.forRoot(),
    Ng2PageScrollModule.forRoot(),
    HttpModule,
    SpinnerModule
  ],
  providers: [NetService, ExtraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
