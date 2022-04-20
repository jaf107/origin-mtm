import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  
  constructor(private userService:UserService, private router:Router) { }

  givenUser = this.userService.getUserToBeUpdated();

  ngOnInit(): void {
  }
  saveUser(){
    this.userService.updateUser(this.givenUser);
    this.router.navigate(['userlist']);
  }
}
