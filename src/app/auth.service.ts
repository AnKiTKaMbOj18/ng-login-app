import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  loggedInStatus = false;

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username, password) {
    // post user details and return if already exist
    return this.http.post(
      '/api/login',
      {
        username,
        password
      },
      { responseType: 'text' }
    );
    // .subscribe(data => {
    //   console.log(data, ' is what we got from the server');
    // });
  }
}
