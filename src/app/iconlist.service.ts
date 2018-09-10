import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconlistService {

  constructor() { }
  getIcons(){
    return [
    {"id": 1, "icon": "fa fa-calendar", "name":"Never", "state": "off"},
    {"id": 2, "icon": "fa fa-calendar-plus-o", "name":"Occasionality","state": "off"},
    {"id": 3, "icon": "fa fa-clock-o",  "name":"4 hours","state": "off"},
    {"id": 4, "icon": "fa fa-whatsapp","name":"Yearly", "state": "off"},
    {"id": 5, "icon": "fa fa-calendar", "name":"Never", "state": "off"}
    ];
    }
}
