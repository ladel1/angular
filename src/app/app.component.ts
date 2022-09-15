import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  public title:any = '';

  public constructor(private http : HttpClient){
  }


  ngOnInit(): void {
    this.http.get("http://localhost/php/api-server/").subscribe((data)=>{
        this.title=data;
    });
  }



}
