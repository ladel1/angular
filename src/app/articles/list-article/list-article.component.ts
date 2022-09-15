import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  public articles:any[]=[];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost/php/api-server/articles").subscribe((data)=>{
        this.articles = data;
    });
  }

}
