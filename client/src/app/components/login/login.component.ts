import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
      this.signinForm = this.formBuilder.group({
        email: [''],
        password: [''],
      });
     }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['register']);
  }

  loginUser(){
    // console.log(this.signinForm.value);
    this.authService.signIn(this.signinForm.value);
  }

}
