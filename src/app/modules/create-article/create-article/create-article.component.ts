import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ArticleMockApiService } from 'src/app/services/mock-api/article-mock-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private toastr: ToastrService,
    private credentialService: AuthenticationService, private router: Router, private mockApi: ArticleMockApiService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      publishedDate: new FormControl('', Validators.required)
    })
  }

  save() {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      this.toastr.warning("Please fill required fields!", "Warning!");
      return;
    }
    let postData: Article = this.formGroup.value;
    console.log("efe", postData);
    postData.username = this.credentialService.credentials.username;
    this.mockApi.addArticle(postData);
    this.formGroup.reset();
    this.toastr.success('Article is posted successfully!', 'Success!');
    this.router.navigate(['/home']);
  }

  cancel() {
    this.router.navigate(['/home']);
  }

}
