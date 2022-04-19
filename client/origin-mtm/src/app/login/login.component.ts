import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }
  loggingInUser = new User();
  ngOnInit(): void {
  }

  loginUser(){
    let message = this.userService.verifyUser(this.loggingInUser);
    // console.log(message);
    this.router.navigate(['dashboard']);
  }
}
