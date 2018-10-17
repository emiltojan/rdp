// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component'
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {RdpConnectionComponent} from './components/rdp_connection/rdp_connection.component';


// @NgModule decorator with its metadata
@NgModule({
  imports: [BrowserModule,HttpModule,AppRoutingModule,FormsModule],
  declarations:[AppComponent, RdpConnectionComponent],
  bootstrap:[AppComponent]
})
export class AppModule { }