import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-user-claims-list',
  templateUrl: './user-claims-list.component.html',
  styleUrls: ['./user-claims-list.component.css']
})
export class UserClaimsListComponent implements OnInit {

  public stringifiedData: any = [];
  userClaims: Array<any>;
  public errorMessage: string | undefined;
  name: string;
  totalRecords: number; 

  columnDefs = [
    { headerName: 'ReqAmt', field: 'ReqAmt', sortable: true },
    { headerName: 'AppAmt', field: 'AppAmt', sortable: true },
    { headerName: 'RejAmt', field: 'RejAmt', sortable: true}
  ]; 
  //public rowData = [];

  constructor(private userService: UserService) { }

  getPosts(): void {
    this.userService.getUserClaims(" Exec Sp_vW_ENTFC_FullClaims_T1 @Tpa = 'FC' ,@DateType='Trans.Date' ,@SDate='01-Oct-2018' ,@EDate='06-Nov-2021' ,@Payer='%' ,@Client='%' ,@Provider='%' ,@CLAIM_STATUS='Pending',@PAYMENT_STATUS='%'")
      .subscribe((resultArray: any) => { this.userClaims = resultArray },
        error => this.errorMessage = error); 
  }

  ngOnInit(): void {

    // fetch('http://localhost:34359/api/Reports/GetData')
    //   .then(result => result.json())
    //   .then(rowData => this.rowData = rowData);

    this.getPosts();  
    console.log(this.userClaims + ' - user claims'); 
  }

  exportExcel() {
    const workSheet = XLSX.utils.json_to_sheet(this.userClaims, {header:['ent128_01', 'ent128_02', 'ent128_03']});
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet Name');
    XLSX.writeFile(workBook, 'file name.xlsx');
}



}
