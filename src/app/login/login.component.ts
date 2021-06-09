import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserCredentials } from '../models/user-credentials.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup:FormGroup;
  constructor(private authService:AuthenticationService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    if(!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      this.toastr.warning('Please fill required fields!', "Warning!");
      return;
    }
      let userCredentials:UserCredentials = {
        username: this.formGroup.value.username,
        password: this.formGroup.value.password
      }
      this.authService.login(userCredentials);
      this.router.navigate(['/home']);
  }
}
