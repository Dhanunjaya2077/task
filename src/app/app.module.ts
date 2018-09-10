import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {IconlistService} from './iconlist.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,BrowserAnimationsModule
  ],
  providers: [IconlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
