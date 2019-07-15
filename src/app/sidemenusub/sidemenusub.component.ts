import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidemenusub',
  templateUrl: './sidemenusub.component.html',
  styleUrls: ['./sidemenusub.component.scss']
})
export class SidemenusubComponent implements OnInit {

  dataDynamic:  any="";

  constructor( private data: DataService ) { }

  ngOnInit() {
    this.data.getUser().subscribe(data => {
      this.dataDynamic = data;
    })
  }

}
