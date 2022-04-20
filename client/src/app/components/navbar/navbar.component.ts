import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }
  isUserLoggedIn = false;
  ngOnInit(): void {
    this.isUserLoggedIn = this.userService.getLoggedIn();
    console.log("Navbar Running");
  }
  


}
