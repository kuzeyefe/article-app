import { Injectable } from '@angular/core';
import { UserCredentials } from '../models/user-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _credentials:UserCredentials;

  constructor() { 
    this._credentials = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  }

  get isAuthenticated() {
    return this.credentials ? true : false;
  }

  get credentials() {
    return this._credentials;
  }

  login(credentials:UserCredentials) {
    localStorage.setItem("user", JSON.stringify(credentials));
    this._credentials = credentials;
  }
}
