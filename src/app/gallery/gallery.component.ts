import { Component, OnInit, Renderer2 } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, query, animateChild } from '@angular/animations';
import { DataService } from '../data.service';
import { allResolved } from 'q';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations:[
    trigger('galleryAnimationSlideIn',[
      state('slideIn', style({
        transform:'translateY(0%)', opacity:1,
      })),
      state('slideOut', style({
        transform:'translateY(-100%)',opacity:0,
      })),
      transition('slideOut => slideIn', 
        [animate('800ms ease-in', keyframes([
          style({opacity:1, transform: 'translateY(-100%)', offset:0}),
          style({opacity:1, transform: 'translateY(0%)', offset:1}),
        ])),
        query('@aboutAnimationFadeUp5', [
          animateChild()
        ])
      ]),
    ]),
    trigger('aboutAnimationFadeUp1',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('800ms 1000ms ease-in', keyframes([
        style({opacity:0,  offset:0}),
        style({opacity:1,  offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('500ms 1000ms  ease-in', keyframes([
      //   style({opacity:1, offset:0}),
      //   style({opacity:0, offset:1}),
      // ]))),
    ]),
    trigger('aboutAnimationFadeUp5',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('800ms  ease-in', keyframes([
        style({opacity:0,  offset:0}),
        style({opacity:1,  offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('500ms 1000ms  ease-in', keyframes([
      //   style({opacity:1, offset:0}),
      //   style({opacity:0, offset:1}),
      // ]))),
    ]),
    trigger('aboutAnimationFadeUp2',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('800ms 1100ms ease-in', keyframes([
        style({opacity:0,  offset:0}),
        style({opacity:1,  offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('500ms 1000ms  ease-in', keyframes([
      //   style({opacity:1, offset:0}),
      //   style({opacity:0, offset:1}),
      // ]))),
    ]),
    trigger('aboutAnimationFadeUp3',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('800ms 1200ms ease-in', keyframes([
        style({opacity:0,  offset:0}),
        style({opacity:1,  offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('500ms 1000ms  ease-in', keyframes([
      //   style({opacity:1, offset:0}),
      //   style({opacity:0, offset:1}),
      // ]))),
    ]),
    trigger('aboutAnimationFadeUp4',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('800ms 1300ms ease-in', keyframes([
        style({opacity:0,  offset:0}),
        style({opacity:1,  offset:1}),
      ]))),
      // transition('fadeIn => fadeOut', animate('500ms 1000ms  ease-in', keyframes([
      //   style({opacity:1, offset:0}),
      //   style({opacity:0, offset:1}),
      // ]))),
    ]),
  ],
})
export class GalleryComponent implements OnInit {

  constructor(  private renderer: Renderer2,private data: DataService ) { }

  state: string = "fadeOut";
  slide:string = "slideOut";
  dynamic: any= "";
  image1:string = "";
  image2:string = "";
  image3:string = "";
  image4:string = "";
  image5:string = "";
  image6:string = "";
  pageNo:number = 1;

  ngOnInit() {
    if(window.innerWidth < 992 ){
      this.state = 'fadeIn';
      this.slide =  'slideIn';
    }

    this.data.getImage(this.pageNo).subscribe(data => {
      this.dynamic = data;
      this.galleryHandler(this.pageNo, 'init');
    })
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if(window.innerWidth > 992 ){
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
    this.state = visible ? 'fadeIn' : 'fadeOut';
    this.slide = visible ? 'slideIn' : 'slideOut';
    // console.log(this.state);
    if(!visible){
      for(let i = 1 ; i <= 6; i++){
        document.getElementById("image"+i).classList.remove("zoomer");
      }
     }
    }
  }
  galleryHandler(page:any, caller:any){
    // console.log(this.dynamic[0].image);
    this.image1 = this.dynamic[1].image;
    this.image2 = this.dynamic[2].image;
    this.image3 = this.dynamic[3].image;
    this.image4 = this.dynamic[4].image;
    this.image5 = this.dynamic[5].image;
    this.image6 = this.dynamic[6].image;
    this.pagenationHandler();
  }

  loadPre(){
    this.data.getImage(this.pageNo-1).subscribe(data => {
      this.dynamic = data;
      this.pageNo -= 1;
      this.galleryHandler(this.pageNo, 'init');
    })
  }
  getPage( page: any){
    this.data.getImage(page).subscribe(data => {
      this.dynamic = data;
      this.pageNo = page;
      this.galleryHandler(this.pageNo, 'init');
    })
  }
  loadNext(){
    this.data.getImage(this.pageNo+1).subscribe(data => {
      this.dynamic = data;
      this.pageNo += 1;
      this.galleryHandler(this.pageNo, 'init');
    })
  }

  pagenationHandler(){
    for(let i = 1 ; i <= 10; i++){
      document.getElementById(i.toString()).classList.remove("active");
    }
    for(let i = 1 ; i <= 10; i++){
      if(this.dynamic[0].currentPage == i){
        document.getElementById(i.toString()).classList.add("active");
      }
      else if(this.dynamic[0].totalPage < i){
        document.getElementById(i.toString()).style.display= "none";
      }
    }
  }

  imageZoomer(id: any){
    // alert(document.getElementById(id.toString()).classList.contains('zoomer'));
    for(let i = 1 ; i <= 6; i++){
      if(document.getElementById(id.toString()).classList.contains('zoomer')){

      }
      else{
        document.getElementById("image"+i).classList.remove("zoomer");
        document.getElementById("image"+i).classList.remove("zoomerUp");
      }
    }
    if(document.getElementById(id.toString()).classList.contains('zoomer')){
      // alert(id);
      document.getElementById(id.toString()).classList.remove("zoomer");
    }

    else{
      if( id > 2){
        alert('else')
        document.getElementById(id.toString()).classList.add("zoomerUp");
      }
      document.getElementById(id.toString()).classList.add("zoomer");
    }
  }

}

