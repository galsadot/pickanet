import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DndModule } from "ng2-dnd";
import { DragComponent} from "./drag/drag.component";
import { HomeComponent } from "./home/home.component";
import { Ng2PageScrollModule } from "ng2-page-scroll";
import { AboutComponent } from './about/about.component';
import { StandartBtnComponent } from "./shared/standart-button/standart-button.component";
import { AppCartComponent } from "./shared/cart/cart.component";
import { CartPageComponent } from "./cart-page/cart-page.component";
import {CoimngComponent} from "./coming/coming";

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    HomeComponent,
    AboutComponent,
    StandartBtnComponent,
    AppCartComponent,
    CartPageComponent,
    CoimngComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DndModule.forRoot(),
    Ng2PageScrollModule.forRoot(),
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
