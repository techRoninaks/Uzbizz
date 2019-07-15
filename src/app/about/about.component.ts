import { Component, OnInit, HostListener , Renderer2 } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {trigger, state, style, transition, animate, keyframes, query, animateChild } from '@angular/animations';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InViewportModule } from 'ng-in-viewport';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations:[
    trigger('aboutAnimationFade1',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('500ms 500ms ease-out', keyframes([
        style({opacity:0, offset:0}),
        style({opacity:1, offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('500ms  ease-out', keyframes([
      //   style({opacity:1, offset:0}),
      //   style({opacity:0, offset:1}),
      // ]))),
    ]),
    trigger('aboutAnimationFade2',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('500ms 900ms ease-out', keyframes([
        style({opacity:0, offset:0}),
        style({opacity:1, offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('500ms  ease-out', keyframes([
      //   style({opacity:1, offset:0}),
      //   style({opacity:0, offset:1}),
      // ]))),
    ]),
    trigger('aboutAnimationFade3',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('500ms ease-out', keyframes([
        style({opacity:0, offset:0}),
        style({opacity:1, offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('500ms  ease-out', keyframes([
      //   style({opacity:1, offset:0}),
      //   style({opacity:0, offset:1}),
      // ]))),
    ]),
    trigger('aboutAnimationFade4',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('500ms  ease-out', keyframes([
        style({opacity:0, offset:0}),
        style({opacity:1, offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('500ms  ease-out', keyframes([
      //   style({opacity:1, offset:0}),
      //   style({opacity:0, offset:1}),
      // ]))),
    ]),
    trigger('aboutAnimationMoveIn',[
      state('slideIn', style({
        transform: 'translateY(0%)',opacity:1,
      })),
      state('slideOut', style({
        transform: 'translateY(100%)',opacity:0,
      })),
      transition('slideOut => slideIn', 
      [
        animate('700ms  ease-out', keyframes([
          style({opacity:1,transform: 'translateY(100%)', offset:0}),
          style({opacity:1,transform: 'translateY(0%)', offset:1}),
        ])),
        query('@aboutAnimationFade3', [
          animateChild()
        ]),
        query('@aboutAnimationFade4', [
          animateChild()
        ]),
      ]),
      // transition('slideIn => slideOut', animate('500ms  ease-out', keyframes([
      //   style({opacity:1,transform: 'translateX(0%)', offset:0}),
      //   style({opacity:0, transform: 'translateX(100%)', offset:1}),
      // ]))),
    ]),
  ],
})
export class AboutComponent implements OnInit {

  dynamic: any="";

  stat: string = "fadeOut";
  slide:string = "slideOut";
  st:any = 0;
  lastScroll:any = -1;
  flag: any = 0;
  flag1: any = 0;

  constructor( private data: DataService, 
    private router: Router, 
    private ngxService: NgxUiLoaderService, 
    private renderer: Renderer2 
    ) { }

  ngOnInit() {
    this.data.getUser().subscribe(data => {
      this.dynamic = data;
    })

    if(window.innerWidth < 992 ){
      this.stat = 'fadeIn';
      this.slide =  'slideIn';
    }
   
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if(window.innerWidth > 992 ){
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
    this.stat = visible ? 'fadeIn' : 'fadeOut';
    this.slide = visible ? 'slideIn' : 'slideOut';
    // let listArray: string[] = ['home','about','leadership','services','gallery','contact','insights']
    // for (let entry of listArray) {
    //   document.getElementById(entry).classList.remove("active");
    // }
    // document.getElementById("about").classList.add("active");
    }
}

//   @HostListener('window:scroll', ['$event']) // for window scroll events
//   onScroll(event) {
//   if(window.innerWidth>991){
//     this.st =window.pageYOffset || document.documentElement.scrollTop;
//     if(this.st > 25){
//       if(this.flag == 0){
//         this.router.navigate(['/leadership']); 
//         this.flag = 1;
//       }
//     } else if(this.st < 9){
//       if(this.flag1 == 0){
//       this.router.navigate(['/']); 
//       this.flag1 = 1;
//       }
//     }
//     this.lastScroll= this.st <= 0 ? 0 : this.st;  
//   }
// }
}

