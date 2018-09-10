import { Component } from '@angular/core';
import {IconlistService} from './iconlist.service';
import { ON_OFF_ANIMATION } from './on-off.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ON_OFF_ANIMATION ]
})
export class AppComponent {
  selectedRange:number=25;
  Icons=[];
  constructor(private _Iconlist:IconlistService) {
  }
  ngOnInit() {
     this.Icons = this._Iconlist.getIcons();
  }
  toggle(icon) {
     icon.state =  (icon.state === 'on') ? 'off' : 'on'; 
  }
  toggle1(icon) {
    icon.state =  (icon.state === 'off') ? 'on' : 'off'; 
  }
  lessRelevant(){
    this.selectedRange=25;
  }
  Relevant(){
    this.selectedRange=50;
  }
  veryRelevant(){
    this.selectedRange=75;
  }
  tryAgain(){
    this.selectedRange=25;
  }
}
