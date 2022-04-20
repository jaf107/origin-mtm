import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn = false;
  private users: User[] = [{
    id: 1,
    name: "Abu Jafar",
    email: "jafarmahin107@gmail.com",
    password: "111",
    agreed: false,
  }, {
    id: 2,
    name: "Tasmia Zerin",
    email: "bsse1128@iit.du.ac.bd",
    password: "111",
    agreed: true,
  }, {
    id: 3,
    name: "Mustahid Hasan",
    email: "mustahidhasan@gmail.com",
    password: "123",
    agreed: false,
  },
  ]
  constructor() { }
  userToBeUpdated = new User();
  userToBeUpdatedIndex: any = 0;

  getUsers(): User[] {
    return this.users;
  }

  addUser(newUser: User) {
    newUser.agreed = true;
    newUser.id = this.users.length;
    this.users.push(newUser);
  }

  deleteUser(index: number) {
    // console.log(index);
    this.users.splice(index, 1);
  }

  setUserToBeUpdated(user: User, index: number) {
    this.userToBeUpdated = user;
    this.userToBeUpdatedIndex = index;
    console.log(this.userToBeUpdated);
  }

  updateUser(user: User) {
    this.users.splice(this.userToBeUpdatedIndex, 1, user);
  }

  getUserToBeUpdated(): User {
    return JSON.parse(JSON.stringify(this.userToBeUpdated));
  }

  getLoggedIn(){
    return this.loggedIn;
  }

  verifyUser(loggingInUser: User) {
    let message = {
      validUser: false,
      message: "Email or password doesn't match"
    }
    for (let index = 0; index < this.users.length; index++) {
      const iuser = this.users[index];
      if (iuser.email === loggingInUser.email && iuser.password === loggingInUser.password) {
        message.validUser = true;
        message.message = "Loggin in"
        this.loggedIn = true;
        
      }
    }
    return message;
  }
}
