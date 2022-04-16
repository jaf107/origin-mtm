import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private users: User[] = [{
    id: 1,
    name: "Abu Jafar",
    email: "jafarmahin107@gmail.com",
    password: "111",
    registered: true,
  },{
    id: 2,
    name: "Tasnim Fariha",
    email: "tasnimfariha@gmail.com",
    password: "111",
    registered: true,
  },{
    id: 3,
    name: "Jitesh Sureka",
    email: "jiteshsureka@gmail.com",
    password: "123",
    registered: false,
  },
  ]
  constructor() { }
  userToBeUpdated = new User();
  userToBeUpdatedIndex:any = 0;

  getUsers(): User[]{
    return this.users;
  }

  addUser(newUser: User){
    newUser.registered = true;
    newUser.id = this.users.length;
    this.users.push(newUser);
  }

  deleteUser(index: number){
    // console.log(index);
    this.users.splice(index, 1);
  }

  setUserToBeUpdated(user: User,index: number){
    this.userToBeUpdated = user;
    this.userToBeUpdatedIndex = index;
    console.log(this.userToBeUpdated);
  }

  updateUser(user: User){
    this.users.splice(this.userToBeUpdatedIndex, 1, user);
  }

  getUserToBeUpdated():User{
    return JSON.parse(JSON.stringify(this.userToBeUpdated));
  }
}
