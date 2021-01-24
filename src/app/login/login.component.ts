import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    console.log(event);
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.Auth.getUserDetails(username, password).subscribe(data => {
      if (data != 'invalid') {
        console.log(data);
        //redirect to admin
        this.router.navigate(['admin']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert('invalid');
      }
    });
    console.log(username, password);
  }
}
