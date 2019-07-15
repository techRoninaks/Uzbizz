import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { InsightsComponent } from './insights/insights.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'leadership', component: LeadershipComponent, data: { animation: 'isRight' } },
  { path: 'gallery', component: GalleryComponent ,data: { animation: 'isLeft' } },
  { path: 'contact', component: ContactComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
