<<<<<<< HEAD:src/app/slide-carousel/slide-carousel.component.ts
import { Component, Input, OnInit } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { Slide } from "./slide-carousel.interface";


import {
  AnimationType,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut
} from "./slide-carousel.animations";

@Component({
  selector: 'app-slide-carousel',
  templateUrl: './slide-carousel.component.html',
  styleUrls: ['./slide-carousel.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
=======
import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDocuments } from '../app.component';
import {RxjsIntervalService} from "../services/rxjs-interval.service"

export const fadeIn=animation([
  style({opacity:0}),
  animate('2s',style({opacity:1}))
])

export const scaleIn=animation([
  style({opacity:0,transform:"scale(0.5)"}),
  animate('2s',style({opacity:1,transform:"scale(1)"}))
])


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations:[
    trigger('carouselAnimation',[
      transition('void=>*',[
       useAnimation(fadeIn)
>>>>>>> upstream/master:src/app/carousel/carousel.component.ts
      ])
    ])

  ]
})
<<<<<<< HEAD:src/app/slide-carousel/slide-carousel.component.ts
export class SlideCarouselComponent implements OnInit {
  @Input() slides: Slide[];
  @Input() animationType = AnimationType.Scale;
=======
export class CarouselComponent implements OnInit {
  @Input() slides:IDocuments[];
  currentIndex:number=0;
  counterValue:string;
  time=5;
  interval:Subscription;
>>>>>>> upstream/master:src/app/carousel/carousel.component.ts

  constructor(private rxjsIntervalService:RxjsIntervalService) { }

<<<<<<< HEAD:src/app/slide-carousel/slide-carousel.component.ts
  constructor() {}

  source = ["https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
, "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"];

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.source.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.source.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit() {
    //this.preloadImages(); // for the demo
  }

  preloadImages() {
    for (var index = 0; index < this.source.length; index++) {
      //new Image().src = slide.src;
      this.slides[index].src = this.source[index];
=======
  ngOnInit(): void {
    this.initInterval()
  }

  initInterval(){
    if(this.interval){this.interval.unsubscribe()}
    this.interval=this.rxjsIntervalService.initInterval(this.time*10).subscribe((d)=>{
      this.counterValue=d.counterValue + "%";
      if(d.counterValue===100){
        this.next()
      }
    })
  }


  next(){
    if(this.currentIndex<this.slides.length-1){
      this.currentIndex++
    }else{
      this.currentIndex=0;
    }
    this.initInterval()

  }

  pre(){
    if(this.currentIndex>0){
      this.currentIndex--;
    }else{
      this.currentIndex=this.slides.length-1;
>>>>>>> upstream/master:src/app/carousel/carousel.component.ts
    }
    this.initInterval()
  }


  @HostListener("mouseenter")
  onMouseEnter(){
    this.rxjsIntervalService.pauseCounter();
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.rxjsIntervalService.resumeCounter();
  }


}