import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataService } from '../data.service';
import {trigger, state, style, transition, animate, keyframes, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations:[
    trigger('serviceAnimationFadeUp',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('900ms 200ms ease-out', keyframes([
        style({opacity:0, offset:0}),
        style({opacity:1, offset:1}),
      ]))),
    ]),
    trigger('serviceAnimationFadeUp2',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('900ms 300ms ease-out', keyframes([
        style({opacity:0, offset:0}),
        style({opacity:1, offset:1}),
      ]))),
    ]),
    trigger('serviceAnimationFadeUp3',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('800ms 500ms ease-out', keyframes([
        style({opacity:0, offset:0}),
        style({opacity:1, offset:1}),
      ]))),
    ]),
    trigger('serviceAnimationSildeIn',[
      state('slideOut', style({
        transform: 'translateY(100%)',opacity:0
      })),
      state('slideIn', style({
        transform: 'translateY(0%)',opacity:1
      })),
      transition('slideOut => slideIn', [animate('800ms  ease-out', keyframes([
        style({opacity:1,transform: 'translateY(100%)', offset:0}),
        style({opacity:1, transform: 'translateY(0%)', offset:1}),
      ])),
        query('@serviceAnimationFadeUp', [
          animateChild()
        ]),
      ]),
    ]),
    trigger('serviceAnimationSildeIn2',[
      state('slideOut', style({
        transform: 'translateY(100%)',opacity:0
      })),
      state('slideIn', style({
        transform: 'translateY(0%)',opacity:1
      })),
      transition('slideOut => slideIn', [animate('800ms  ease-out', keyframes([
        style({opacity:1,transform: 'translateY(100%)', offset:0}),
        style({opacity:1, transform: 'translateY(0%)', offset:1}),
      ])),
        query('@serviceAnimationFadeUp2', [
          animateChild()
        ]),
      ]),
    ]),
    
  ],
})
export class ServicesComponent implements OnInit {

  dynamic:  any="";
  list: String;
  listArray:String[];
  serviceContent1: String;
  serviceContent2: String;
  serviceContent3: String;
  serviceContent4: String;
  state:string = 'fadeOut';
  slide:string = 'slideOut';

  constructor( private data: DataService, private renderer: Renderer2 ) { }

  ngOnInit() {
    this.data.getUser().subscribe(data => {
      this.dynamic = data;
      this.list = data['services'];
      this.listArray = this.list.split("!~!@");
      this.serviceContent1 = this.listArray[1];
      this.serviceContent2 = this.listArray[2];
      this.serviceContent3 = this.listArray[3];
      this.serviceContent4 = this.listArray[4];
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
