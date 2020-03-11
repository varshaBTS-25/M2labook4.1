import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  http:HttpClient;  
  booklist:Book[]=[];
  constructor(http:HttpClient){
    this.http=http;
  }
  fetched:boolean=false;
   fetchEmp()
   {
     this.http.get('./assets/booklist.json').subscribe(
       /*data=>{
         console.log(data);
       }*/
       data=>{
         if(!this.fetched){
           console.log(data);
           this.convert(data);
           this.fetched=true;
         }
       }
     );
   }
   getEmp():Book[]
   {
     return this.booklist;
   }
   convert(data:any){
     for(let o of data){
       console.log(data);
       let e=new Book(o.id,o.title,o.author,o.year);
       this.booklist.push(e);
     }
   }
}
export class Book{
  id:number;
  title:string;
  author:string;
  year:number;
  constructor(id:number,title:string,author:string,year:number)
  {
    this.id=id;
    this.title=title;
    this.author=author;
    this.year=year;
  }
}
