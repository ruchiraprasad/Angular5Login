import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [UserService]
})
export class SignInComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.userService.selectedUser = {
      username: '',
      password: ''
    }
  }

  onSubmit(form : NgForm){
    this.userService.userAuthentication(form.value).subscribe((data : any) => {
      localStorage.setItem('userToken', data.token);
      this.router.navigate(['/home'])
    });
  }

}
