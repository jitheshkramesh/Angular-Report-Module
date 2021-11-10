import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
import { ToastrService } from 'ngx-toastr';
import { ResponseMessage } from '../../shared/ResponseMessage.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  res: ResponseMessage;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.statusVal == "Success") {
          console.log(data);
          this.resetForm(form);
          console.log('User registration successful');
          this.toastr.success(data.message);
        }
        else {
          console.log(data);
          console.log('User registration error');
          this.toastr.error(data.message);
        }
        //this.toastr.error(data.Errors[0]);
      });
  }


}
