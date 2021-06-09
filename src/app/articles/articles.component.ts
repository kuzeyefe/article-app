import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleMockApiService } from '../services/mock-api/article-mock-api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles:Observable<any>;
  isAuthenticated:boolean = false;

  constructor(private mockApi:ArticleMockApiService, private authenticationService:AuthenticationService) { }


  ngOnInit(): void {
    this.articles = this.mockApi.articles;
    this.isAuthenticated = this.authenticationService.isAuthenticated;
  }

}
