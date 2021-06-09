import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './create-article/create-article.component';
import { CreateArticleRoutingModule } from './create-article-routing.module';
import { SharedModule } from 'src/app/shared-modules/shared.module';



@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    CreateArticleRoutingModule,
    SharedModule
  ]
})
export class CreateArticleModule { }
