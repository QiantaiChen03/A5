import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HandtrackerComponent } from './handtracker/handtracker.component';
<<<<<<< HEAD
import { SlideCarouselComponent } from './slide-carousel/slide-carousel.component';
import { RightOpenComponent } from './right-open/right-open.component';
import { LeftOpenComponent } from './left-open/left-open.component';
import { LeftFistComponent } from './left-fist/left-fist.component';
import { RightFistComponent } from './right-fist/right-fist.component';
import { PointComponent } from './point/point.component';
import { PinchComponent } from './pinch/pinch.component';
=======
import { CarouselComponent } from './carousel/carousel.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
>>>>>>> upstream/master

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HandtrackerComponent,
    SlideCarouselComponent,
    RightOpenComponent,
    LeftOpenComponent,
    LeftFistComponent,
    RightFistComponent,
    PointComponent,
    PinchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
