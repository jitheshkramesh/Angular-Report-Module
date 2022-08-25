import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pre-auth-list',
  templateUrl: './pre-auth-list.component.html',
  styleUrls: ['./pre-auth-list.component.css']
})
export class PreAuthListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  posts: any;
  public errorMessage: string | undefined;
  dtTrigger: Subject<any> = new Subject<any>();
  interval: any;

  constructor(private http: HttpClient, private userService: UserService) {

  }

  ngOnInit(): void {

    this.getPosts();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      paging: true
    };

    this.interval = setInterval(() => {
      //this.dtTrigger.unsubscribe();
      this.getPostsRefresh();
      //location.reload();
      //this.dtTrigger.next();
    }, 15000);


  }

  public async getPostsRefresh(): Promise<void> {
    await this.userService.GetData2Sec(" Exec ENTSP024_DH1_PBM_view_New_01 @ENT181_02 = '%',@ENT180_12 = '%',@ENT127_02 = '%',@Sdate = '2021-Nov-01',@Edate = '2021-Nov-11',@ENT180_29 = '%',@ENT111_01 = '%',@ENT181_17 = '%',@ENT180_05 = '%',@ENT180_36 = '%',@type='' ")
      .subscribe((resultArray: any) => {
        this.posts = resultArray;
        this.dtTrigger.unsubscribe();
        this.dtTrigger.next();
      },
        error => this.errorMessage = error);

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      paging: true
    };
    // this.dtTrigger.next(); 
    // this.dtTrigger.complete();
  }

  public async getPosts(): Promise<void> {
    await this.userService.GetData2Sec(" Exec ENTSP024_DH1_PBM_view_New_01 @ENT181_02 = '%',@ENT180_12 = '%',@ENT127_02 = '%',@Sdate = '2021-Nov-01',@Edate = '2021-Nov-11',@ENT180_29 = '%',@ENT111_01 = '%',@ENT181_17 = '%',@ENT180_05 = '%',@ENT180_36 = '%',@type='' ")
      .subscribe((resultArray: any) => {
        this.posts = resultArray;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      },
        error => this.errorMessage = error);
    // this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
