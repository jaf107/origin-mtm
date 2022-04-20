import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }
  newUser = new User();
  ngOnInit(): void {
  }
  registerUser(){
    console.log(this.newUser);
    this.userService.addUser(this.newUser);
    this.router.navigate(['userlist'])
  }

  login(){
    this.router.navigate(['login']);
  }

}
