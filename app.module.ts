import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {BookserviceService} from './bookservice.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient,BookserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
