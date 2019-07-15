import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION  } from  'ngx-ui-loader';
import { InViewportModule } from 'ng-in-viewport';
// import { JqueryScrollify } from '../jquery.scrollify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AboutComponent } from './about/about.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SidemenusubComponent } from './sidemenusub/sidemenusub.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { InsightsComponent } from './insights/insights.component';
import { ServicesComponent } from './services/services.component';
import { NavbarliteComponent } from './navbarlite/navbarlite.component';
import { DataService } from './data.service';
import { from } from 'rxjs';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#CFBC81",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 7,
  "delay": 0,
  "fgsColor": "#CFBC81",
  "fgsPosition": "center-center",
  "fgsSize": 70,
  "fgsType": "three-strings",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgb(4, 15, 21)",
  "pbColor": "#CFBC81",
  "pbDirection": "ltr",
  "pbThickness": 1,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 500
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SidemenuComponent,
    AboutComponent,
    LeadershipComponent,
    NavbarComponent,
    SidemenusubComponent,
    GalleryComponent,
    ContactComponent,
    InsightsComponent,
    ServicesComponent,
    NavbarliteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    InViewportModule,
    // JqueryScrollify
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
