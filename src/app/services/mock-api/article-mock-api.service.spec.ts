import { TestBed } from '@angular/core/testing';

import { ArticleMockApiService } from './article-mock-api.service';

describe('ArticleMockApiService', () => {
  let service: ArticleMockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleMockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
