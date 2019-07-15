import { Component, OnInit, Renderer2 } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, query } from '@angular/animations';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('homeAnimation1',[
      state('slideOut', style({
        opacity:0,transform: 'translateY(30%)',
      })),
      state('slideIn', style({
        opacity:1,transform: 'translateY(0%)',
      })),
      transition('* <=> slideIn', animate('2500ms 4500ms ease-out', keyframes([
        style({ opacity: 1, transform: 'translateY(30%)', offset:0}),
        style({ opacity: 1, transform: 'translateY(0%)', offset:1}),
      ]))),
    ]),
    trigger('homeAnimation2',[
      state('slideOut', style({
        opacity:0,transform: 'translateY(30%)',
      })),
      state('slideIn', style({
        opacity:1,transform: 'translateY(0%)',
      })),
      transition('* <=> slideIn', animate('2700ms 4600ms ease-out', keyframes([
        style({opacity: 1, transform: 'translateY(30%)', offset:0}),
        style({opacity: 1, transform: 'translateY(0%)', offset:1}),
      ]))),
    ]),
    trigger('homeAnimation3',[
      state('slideOut', style({
        opacity:0,transform: 'translateY(30%)',
      })),
      state('slideIn', style({
        opacity:1,transform: 'translateY(0%)',
      })),
      transition('* <=> slideIn', animate('2900ms 4700ms ease-out', keyframes([
        style({opacity: 1, transform: 'translateY(30%)', offset:0}),
        style({opacity: 1, transform: 'translateY(0%)', offset:1}),
      ]))),
    ]),
    trigger('homeAnimation4',[
      state('slideOut', style({
        opacity:0,transform: 'translateY(30%)',
      })),
      state('slideIn', style({
        opacity:1,transform: 'translateY(0%)',
      })),
      transition('* <=> slideIn', animate('3100ms 4800ms ease-out', keyframes([
        style({opacity: 1, transform: 'translateY(30%)', offset:0}),
        style({opacity: 1, transform: 'translateY(0%)', offset:1}),
      ]))),
    ]),
    trigger('homeAnimation6',[
      state('slideOut', style({
        opacity:1, transform: 'translateY(-5%)',
      })),
      state('slideIn', style({
        opacity:1, transform: 'translateY(0%)',
      })),
      transition('* <=> slideIn', animate('4000ms 4500ms ease-out', keyframes([
        style({opacity: 1, transform: 'translateY(-5%)', offset:0}),
        style({opacity: 1, transform: 'translateY(0%)', offset:1}),
      ]))),
    ]),
    trigger('homeAnimation5',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('* <=> fadeIn', animate('1600ms 5s ease-out', keyframes([
        style({ opacity:0, offset:0}),
        style({ opacity:1, offset:1}),
      ]))),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  state: string = "slideOut";
  state1: string = "fadeOut";
  dynamic: any = 'loading';
  welcomeText1:string ;
  welcomeText2:string ;

  constructor( private ngxService: NgxUiLoaderService ,private data: DataService,  private renderer: Renderer2 ) { }

  ngOnInit() {

    this.data.getUser().subscribe(data => {
      this.dynamic = data;
      this.welcomeText1 = data['home_title'].split('<br>')[0];
      this.welcomeText2 = data['home_title'].split('<br>')[1];
    })  

    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);

    // OR
    this.ngxService.startBackground('do-background-things');
    // Do something here...
    this.ngxService.stopBackground('do-background-things');
    if(window.innerWidth < 991 ){
      this.state1 = 'fadeIn';
      this.state =  'slideIn';
    }
  }

      
      
  ngAfterViewInit() {
    // console.log("this is hell");
    delay(10);
    if(window.innerWidth > 992 ){
    this.state = "slideIn";
    this.state1 = "fadeIn";
    }
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if(window.innerWidth > 992 ){
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
    this.state1 = visible ? 'fadeIn' : 'fadeIn';
    this.state = visible ? 'slideIn' : 'slideIn';
    // this.state = visible ? 'slideIn' : 'slideOut';
    // console.log(this.stat);
    }
}
// public croll(element: any, caller: string) {

//   alert("End Is Here");
//   // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   // let listArray: string[] = ['home','about','leadership','services','gallery','contact','insights']
//   // for (let entry of listArray) {
//   //   document.getElementById(entry).classList.remove("active");
//   // }
//   // document.getElementById(caller).className += " active";
// }
      

}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}


