import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataService } from '../data.service';
import {trigger, state, style, transition, animate, keyframes, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
  animations:[
    trigger('insightAnimationFadeUp1',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('800ms ease-out', keyframes([
        style({opacity:0,transform: 'translateY(20%)', offset:0}),
        style({opacity:1, transform: 'translateY(0%)', offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('1500ms  ease-in', keyframes([
      //   style({opacity:1,transform: 'translateY(0%)', offset:0}),
      //   style({opacity:0, transform: 'translateY(20%)', offset:1}),
      // ]))),
    ]),
    trigger('insightAnimationFadeUp2',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('800ms 100ms ease-out', keyframes([
        style({opacity:0,transform: 'translateY(20%)', offset:0}),
        style({opacity:1, transform: 'translateY(0%)', offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('1500ms  ease-in', keyframes([
      //   style({opacity:1,transform: 'translateY(0%)', offset:0}),
      //   style({opacity:0, transform: 'translateY(20%)', offset:1}),
      // ]))),
    ]),
    trigger('insightAnimationFadeUp3',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('800ms 1000ms ease-out', keyframes([
        style({opacity:0,transform: 'translateY(20%)', offset:0}),
        style({opacity:1, transform: 'translateY(0%)', offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('1500ms  ease-in', keyframes([
      //   style({opacity:1,transform: 'translateY(0%)', offset:0}),
      //   style({opacity:0, transform: 'translateY(20%)', offset:1}),
      // ]))),
    ]),
    trigger('insightAnimationSildeIn1',[
      state('slideOut', style({
        transform: 'translateY(100%)',opacity:0,
      })),
      state('slideIn', style({
        transform: 'translateY(0%)',opacity:1,
      })),
      transition('slideOut => slideIn', [animate('800ms  ease-out', keyframes([
        style({opacity:1,transform: 'translateY(100%)', offset:0}),
        style({opacity:1, transform: 'translateY(0%)', offset:1}),
      ])),
        query('@insightAnimationFadeUp1', [
          animateChild()
        ]),
      ]),
    ]),
    trigger('insightAnimationSildeIn2',[
      state('slideOut', style({
        transform: 'translateY(100%)',opacity:0,
      })),
      state('slideIn', style({
        transform: 'translateY(0%)',opacity:1,
      })),
      transition('slideOut => slideIn', [animate('800ms  ease-out', keyframes([
        style({opacity:1,transform: 'translateY(100%)', offset:0}),
        style({opacity:1, transform: 'translateY(0%)', offset:1}),
      ])),
        query('@insightAnimationFadeUp2', [
          animateChild()
        ],{ optional: true }),
      ]),
    ]),
  ],
})
export class InsightsComponent implements OnInit {

  dynamic:  any="";
  desc:string[];
  heading1:string;
  heading2:string;
  heading3:string;
  insightContent3:string;
  insightContent2:string;
  insightContent1:string;
  quotetext:string;
  state:string = 'fadeIn';
  slide:string = 'slideOut';

  constructor( private data: DataService, private renderer: Renderer2 ) { }

  ngOnInit() {
    this.data.getUser().subscribe(data => {
      this.dynamic = data;
      this.quotetext = data['insight_quote'];
      this.desc = data['insight_desc'].split('!~');
      this.heading1 = this.desc[0].split('!@')[0];
      this.heading2 = this.desc[1].split('!@')[0];
      this.heading3 = this.desc[2].split('!@')[0];
      this.insightContent1 = this.desc[0].split('!@')[1];
      this.insightContent2 = this.desc[1].split('!@')[1];
      this.insightContent3 = this.desc[2].split('!@')[1];
    })
    if(window.innerWidth < 992 ){
      this.state = 'fadeIn';
      this.slide = 'slideIn';
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
