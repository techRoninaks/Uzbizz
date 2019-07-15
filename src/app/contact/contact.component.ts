import { Component, OnInit, Renderer2, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {trigger, state, style, transition, animate, keyframes, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations:[
    trigger('contactAnimationSlideIn',[
      state('slideIn', style({
        transform:'translateY(0%)', opacity:1,
      })),
      state('slideOut', style({
        transform:'translateY(-100%)',opacity:0,
      })),
      transition('slideOut => slideIn', [animate('800ms ease-out', keyframes([
        style({opacity:1, transform: 'translateY(-100%)', offset:0}),
        style({opacity:1, transform: 'translateY(0%)', offset:1}),
      ])),
      query('@aboutAnimationFadeUp3', [
        animateChild()
      ]),
    ]),
    ]),
    trigger('aboutAnimationFadeUp1',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('500ms 500ms ease-out', keyframes([
        style({opacity:0,  offset:0}),
        style({opacity:1,  offset:1}),
      ]))),
    ]),
    trigger('aboutAnimationFadeUp2',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('500ms 600ms ease-out', keyframes([
        style({opacity:0,  offset:0}),
        style({opacity:1,  offset:1}),
      ]))),
    ]),
    trigger('aboutAnimationFadeUp3',[
      state('fadeIn', style({
        opacity:1,
      })),
      state('fadeOut', style({
        opacity:0,
      })),
      transition('fadeOut => fadeIn', animate('500ms 50ms ease-out', keyframes([
        style({opacity:0,  offset:0}),
        style({opacity:1,  offset:1}),
      ]))),
    ]),
  ],
})
@Pipe({ name: 'safe' })
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  dynamic:  any="";
  dropitems:  any="";
  iframeURL: String;
  state: string = "fadeOut";
  slide:string = "slideOut";
  map:any = "";

  constructor(private formBuilder: FormBuilder,private sanitizer: DomSanitizer, private data: DataService, private renderer: Renderer2) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      mail: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
      Purpose: ['', Validators.required],
      Translator: [false, Validators.required],
      Education: [false, Validators.required],
      Sell: [false, Validators.required],
      Guide: [false, Validators.required],
      Buy: [false, Validators.required],
    })
   }

  ngOnInit() {
    this.data.getUser().subscribe(data => {
      this.dynamic = data;
      this.map = this.sanitizer.bypassSecurityTrustHtml(data["place_id"]);
    })

    this.data.getDropItems().subscribe(data => {
      this.dropitems = data;
      // dropItems(this.dropitems);
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

  replaceValue(value: any){
    document.getElementById('dropdownMenuButton').innerText = value;
    this.messageForm.controls['Purpose'].setValue(value);
    console.log(this.messageForm.value);
  }
  dropItems(){
    var html : string = "";
    for( var i = 0; i<this.dropitems.length; i++ ){
      html = html +"<a class= 'dropdown-item'  onclick= 'replaceValue(&apos;"+this.dropitems[i]["dropitem"].replace(' ', '_')+"&apos;)'  >"+this.dropitems[i]["dropitem"]+"</a>";
 
    }
    return html;
 }

 getword(data){
  return data.replace(' ', '_');
 }


  onSubmit(){
    this.submitted =true;

    
    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
    this.data.enrollEmail(this.messageForm.value).subscribe(
      data => console.log('susscess', data),
      error => console.error(error)
    );
    // console.log(this.messageForm.value);
  }

}


