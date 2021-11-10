import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  isLoginError: boolean = false;
  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  OnSubmit(userName: string, password: string) {
    console.log(userName + '-1-1-' + password);
    localStorage.setItem('userName', userName);
    this.userService.userAuthentication(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', (data.token));
      this.router.navigate(['/home']);
    },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }

}
