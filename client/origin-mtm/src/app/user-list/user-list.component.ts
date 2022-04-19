import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }
  users = this.userService.getUsers();
  ngOnInit(): void {
  }

  deleteUser(user: User){
    // console.log(user);
    this.userService.deleteUser(user.id-1);
  }

  editUser(user: User, index:number){
    this.userService.setUserToBeUpdated(user,index);
    this.router.navigate(['updateUser']);
  }

}
