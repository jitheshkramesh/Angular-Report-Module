import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-pre-auth-details',
  templateUrl: './pre-auth-details.component.html',
  styleUrls: ['./pre-auth-details.component.css']
})
export class PreAuthDetailsComponent implements OnInit {
  public Id: string;
  ClaimDetails: any;
  public errorMessage: string | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.queryParams.forEach((params: Params) => {
      this.Id = params['id'];

      this.userService.GetClaimDetails(this.Id)
        .subscribe((resultArray: any) => { this.ClaimDetails = resultArray; },
          error => this.errorMessage = error);
    });

    console.log('claim details = ' + this.ClaimDetails)
  }

}
