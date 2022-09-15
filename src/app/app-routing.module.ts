import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListArticleComponent} from "./articles/list-article/list-article.component";


const routes: Routes = [
  { path: 'articles',component:ListArticleComponent  }
  //{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
