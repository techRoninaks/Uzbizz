import { Component, OnInit, HostListener, Renderer2  } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {trigger, state, style, transition, animate, keyframes, query, animateChild } from '@angular/animations';

import { InViewportModule } from 'ng-in-viewport';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss'],
  animations:[
    trigger('leadAnimation',[
      state('slideIn', style({
        transform:'translateY(0%)', opacity:1,
      })),
      state('slideOut', style({
        transform:'translateY(-100%)',opacity:0,
      })),
      transition('slideOut => slideIn', [animate('500ms  ease-in', keyframes([
        style({opacity:1, transform: 'translateY(-100%)', offset:0}),
        style({opacity:1, transform: 'translateY(0%)', offset:1}),
      ])),
      query('@aboutAnimationFadeUp', [
        animateChild()
      ]),
      ]),
      // transition('slideIn => slideOut', animate('1200ms ease-in-out', keyframes([
      //   style({opacity:1, transform: 'translateX(0%) ', offset:0}),
      //   style({opacity:0, transform: 'translateX(-100%) ', offset:1}),
      // ]))),
    ]),
    trigger('aboutAnimationFadeUp',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('500ms  ease-in', keyframes([
        style({opacity:0,offset:0}),
        style({opacity:1, transform: 'translateY(0%)', offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('1200ms  ease-in', keyframes([
      //   style({opacity:1,transform: 'translateY(0%)', offset:0}),
      //   style({opacity:0, transform: 'translateY(10%)', offset:1}),
      // ]))),
    ]),
  ],
})
export class LeadershipComponent implements OnInit {

  dataDynamic:  any="";
  state: string = "fadeOut";
  slide:string = "slideOut";
  st:any = 0;
  lastScroll:any = -1;
  flag: any = 0;
  flag1: any = 0;
  

  constructor( private data: DataService, private router: Router, private renderer: Renderer2 ) { }

  ngOnInit() {
    this.data.getUser().subscribe(data => {
      this.dataDynamic = data;
    })

    if(window.innerWidth < 992 ){
      this.state = 'fadeIn';
      this.slide =  'slideIn';
    }
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if(window.innerWidth > 992 ){
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
    this.state = visible ? 'fadeIn' : 'fadeOut';
    this.slide = visible ? 'slideIn' : 'slideOut';
    // console.log(this.state);
    }
  }

}


