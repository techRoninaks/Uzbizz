import { Component, HostListener, Renderer2 } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from  '@angular/router';
import { filter } from 'rxjs/operators';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { InsightsComponent } from './insights/insights.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';




var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  messageForm1: FormGroup;
  serviceForm: FormGroup;
  submit = false;

  constructor( private router: Router,private formBuilder: FormBuilder,private data: DataService,  private renderer: Renderer2 ) {
    this.messageForm1 = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      terms: ['', Validators.required],
      news: [false, Validators.required],
      Translator: [false, Validators.required],
      Education: [false, Validators.required],
      Sell: [false, Validators.required],
      Guide: [false, Validators.required],
      Buy: [false, Validators.required],
    })

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: NavigationEnd) => {
      // console.log(event.url);
      if(this.router.url == '/'){
        // document.getElementById('home').className += " active";
      }
      else{
        this.current = this.router.url.replace("/#",'');
        // console.log(this.current);
        // // document.getElementById(this.current).className += " active";
        // this.croll(this.current, "");
      }
    });
   }
  title = 'uzbizz';

  mobile:boolean = false;
  web:boolean = true;
  current:string = '';
  flag:number = 0;
  flag2:number = 0;
  scro: any;
  location:any = 0;
  flag3:number = 0;

  ngOnInit(){
    this.mobile = window.innerWidth <= 991 ? true : false;
    this.web = window.innerWidth >= 991 ? true : false;
    var $ = require('jquery');
    var scrollify = require('node_modules/jquery-scrollify/jquery.scrollify.js');
    this.scro = scrollify;

    // document.getElementById('myModal').style.display = "block";

    // setTimeout(function(){
    //   // console.log(document.cookie);
    //   if(document.cookie == ""){
    //     document.cookie = "stage=1 visit=1";
    //     document.getElementById('myModal').style.display = "block";
    //   }
    //   else if(document.cookie.split(' ')[1].split('=')[1] == '3'){
    //     var cookie = document.cookie.split(' ')[0];
    //     document.cookie = cookie + " visit=0"; 
    //     if(document.cookie.split(' ')[0].split('=')[1] =='1'){
    //       document.getElementById('myModal').style.display = "block";
    //     }
    //     else if(document.cookie.split(' ')[0].split('=')[1] =='2'){
    //       document.getElementById('myModalThank').style.display = "block";
    //     }
    //   }
    //   else if(document.cookie.split(' ')[0].split('=')[1] == '3'){

    //   }
    //   else{
    //     var cookie = document.cookie.split(' ')[0];
    //     var cout = Number(document.cookie.split(' ')[1].split('=')[1]);
    //     cout+=1;
    //     document.cookie = cookie + " visit="+ cout ; 
    //   }
    // },15000);

    if(this.mobile){
      this.scro.disable();
    }
    else{
      this.scro.enable();
    }
    
    $(function() {
    //   scrollify({
    //     section:".panel"
    //   });
    // });
    scrollify({
      section : ".panel",
      sectionName : "section-name",
      interstitialSection : "",
      easing: "easeOutExpo",
      scrollSpeed: 1000,
      offset : -60,
      scrollbars: true,
      standardScrollElements: "",
      setHeights: true,
      overflowScroll: false,
      updateHash: true,
      touchScroll:true,
      before:function() {
        if(window.pageYOffset > 0){
          document.getElementById('navBar').className += " navbar2";
          document.getElementById('logoId').className += " logoImage2";
          this.flag =1;
        }
      },
      after:function() {
        // var cur = scrollify.currentIndex();
        let listArray: string[] = ['home','about','leadership','services','gallery','contact','insights']
        for (let entry of listArray) {
          document.getElementById(entry).classList.remove("active");
        }
        this.location = window.location.href.split('#')[1];
        switch(this.location){
          case '1': document.getElementById('home').className += " active";
                  break;
          case '2': document.getElementById('about').className += " active";
                  break;
          case '3': document.getElementById('leadership').className += " active";
                  break;
          case '4': document.getElementById('services').className += " active";
                  break;
          case '5': document.getElementById('gallery').className += " active";
                  break;
          case '6': document.getElementById('insights').className += " active";
                  break;
          case '7': document.getElementById('contact').className += " active";
                  break;
          default:break;
        }
      },
      afterResize:function() {},
      afterRender:function() {}
    });
  });

  
}
  
  @HostListener('window:resize', ['$event']) 
  onResize(event) {
    this.mobile = window.innerWidth <= 991 ? true : false;
    this.web = window.innerWidth > 991 ? true : false;
    if(this.mobile){
      this.scro.disable();
    }
    else{
      this.scro.enable();
    }
  }

  @HostListener('window:load', ['$event']) 
  onLoad(event) {
    // console.log("Url: "+this.router.url)
    if(this.router.url == '/'){
      // document.getElementById('home').className += " active";
    }
    else{
      this.current = this.router.url.replace("/",'');
      // document.getElementById(this.current).className += " active";
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if(this.flag ==0){
      if(window.pageYOffset > 0){
        document.getElementById('navBar').className += " navbar2";
        document.getElementById('logoId').className += " logoImage2";
        document.getElementById('floatEnquiyButton').className += " floatActive";
        this.flag =1;
      }
    }
    if(window.pageYOffset < h){
        document.getElementById('navBar').classList.remove("navbar2");
        document.getElementById('logoId').classList.remove("logoImage2");
        document.getElementById('floatEnquiyButton').classList.remove("floatActive");
        this.flag =0;
      }
      // this.current = this.router.url.replace("/#",'');
      // console.log(this.current);
      // this.croll(this.current, "");
  }
  
  modelSubscribe(){
    document.cookie ="stage=2 visit=1";
    document.getElementById('myModal').style.display = "none";
    document.getElementById('myModalThank').style.display = "block";
  }
  modelDetails(){
    document.cookie ="stage=3 visit=1";
    document.getElementById('myModalThank').style.display = "none";
    // console.log(this.messageForm1.value);
    if (this.messageForm1.invalid) {
      alert('please fill out the data.')
      document.cookie ="stage=1 visit=1";
      document.getElementById('myModal').style.display = "Block";
      return;
    }
    this.data.enrollSub(this.messageForm1.value).subscribe(
      data => console.log('susscess', data),
      error => console.error(error)
    );
  }

  modelSubscribeClose(){
    var cookie = document.cookie.split(' ')[0];
    var cout = Number(document.cookie.split(' ')[1].split('=')[1]);
    cout+=1;
    document.cookie = cookie + " visit="+ cout ; 
    document.getElementById('myModal').style.display = "none";
  }
  modelThankClose(){
    var cookie = document.cookie.split(' ')[0];
    var cout = Number(document.cookie.split(' ')[1].split('=')[1]);
    cout+=1;
    document.cookie = cookie + " visit="+ cout ;
    document.getElementById('myModalThank').style.display = "none";
  }

  replaceValue(value: any){
    document.getElementById('dropdownMenuButton').innerText = value;
  }

  checker(){
    // alert(this.messageForm.value.terms);
    this.submit = true;
    this.flag3+=1;
    if(this.flag3 > 1){
      this.flag3 = 0;
      this.submit = false;
    }
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  public croll(element: any, caller: string) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    let listArray: string[] = ['home','about','leadership','services','gallery','contact','insights']
    for (let entry of listArray) {
      document.getElementById(entry).classList.remove("active");
    }
    document.getElementById(caller).className += " active";
  }

}




