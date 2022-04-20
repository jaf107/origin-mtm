import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  constructor(private authService: AuthService, private router:Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    })
   }
  
  ngOnInit(): void {
  }
  registerUser(){
    console.log(this.registerForm.value);
    this.authService.signUp(this.registerForm.value).subscribe((res)=>{
      if(res.result){
        this.registerForm.reset();
        this.router.navigate(['login'])
      }
    })
  }

  login(){
    this.router.navigate(['login']);
  }

}
