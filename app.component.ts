import { Component, OnInit } from '@angular/core';
import { Book,BookserviceService} from './bookservice.service';
//import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BookList';
  book:Book[]=[];
  ser:BookserviceService;
  constructor(ser:BookserviceService){
   this.ser=ser;
  }
  ngOnInit(){
    this.ser.fetchEmp();
    this.book=this.ser.getEmp();
  }
}
