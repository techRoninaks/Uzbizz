import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  dynamic:  any="";
  state:any;

  constructor( private data: DataService ) { }

  ngOnInit() {
    this.data.getUser().subscribe(data => {
      this.dynamic = data;
    })
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}


