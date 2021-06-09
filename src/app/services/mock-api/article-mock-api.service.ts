import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/app/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleMockApiService {
  private articleIdentifierIndex = 1;
  private _articles: BehaviorSubject<Article[]> = new BehaviorSubject(([]));
  public readonly articles = this._articles.asObservable();

  constructor() {
  }

 
  addArticle(article: Article) {
    article["id"] = this.articleIdentifierIndex++;
    this._articles.getValue().push(article);
    setTimeout(() => this._articles.next(this._articles.getValue()),2000);
  }
  
  removeArticle(article) {
    let tempIndex = this._articles.getValue().findIndex(item => item.id == article.id);
    this._articles.getValue().splice(tempIndex, 1);
    setTimeout(() => this._articles.next(this._articles.getValue()),2000);
    
  }
}
