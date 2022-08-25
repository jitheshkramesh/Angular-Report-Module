import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import * as XLSX from 'xlsx';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {


  selectedDistrict: any = [];
  selectedQuantity = 10;
  selectedStatus = 10;
  userClaims: Array<any>;
  public errorMessage: string | undefined;

  BranchId = "";
  dateType = "";
  data: any;
  branchv = "";
  theCheckbox: boolean = true;
  marked: boolean = true;
  ReportHeaderId = "";

  DateFrom: any;
  DateTo: any;
  Payer = "";
  Client = "";
  ProviderGroup = "";

  ReportHeader: any = [{
    "key": "Claims Service",
    "value": "Sp_vw_ClaimDetailsService_New"
  },
  {
    "key": "Claims Report",
    "value": "Sp_vW_ENTFC_FullClaims"
  }];

  // columnDefs: any;
  columnDefs = [
    { headerName: 'TPA', field: 'TPA', sortable: true },
    { headerName: 'Network', field: 'Network', sortable: true },
    { headerName: 'Provider', field: 'Provider', sortable: true }
  ];

  public districtChange() {

    console.log("successs");

  }

  constructor(private userService: UserService, private spinner: NgxSpinnerService) {
    console.log('constructor : = ' + this.columnDefs);
  }
  tpa: any;
  ngOnInit(): void {

    this.tpa = [{
      "key": "ENET",
      "value": "ENET"
    },
    {
      "key": "FC",
      "value": "FC"
    },
    {
      "key": "VD",
      "value": "VD"
    }

    ];

    //this.getPosts();
    // console.log('ngOnInit end : = ' + this.columnDefs);
  }

  getPosts(): void {
    this.errorMessage = "";
    this.spinner.show();
    //this.userService.getUserClaims("Exec " + this.ReportHeaderId + " " + " @Tpa = '" + this.BranchId + "' ,@DateType='" + this.dateType + "' ,@SDate='" + this.DateFrom + "' ,@EDate='" + this.DateTo + "' ,@Payer='" + this.Payer + "' ,@Client='" + this.Client + "' ,@Provider_Group='" + this.ProviderGroup + "' ,@Provider='%'")
    this.userService.getUserClaims("Exec Sp_vW_ENTFC_FullClaims_T1 " + " @Tpa = '" + this.BranchId + "' ,@DateType='" + this.dateType + "' ,@SDate='" + this.DateFrom + "' ,@EDate='" + this.DateTo + "' ,@Payer='" + this.Payer + "' ,@Client='" + this.Client + "' ,@Provider='%' ,@CLAIM_STATUS='%' ,@PAYMENT_STATUS='%' ")
      .subscribe((resultArray: any) => {
        this.userClaims = resultArray,
          this.spinner.hide();
      },
        error => {
          this.errorMessage = error, this.spinner.hide();
        });
    console.log('user Claims : = ' + this.userClaims);
    console.log('column Defs : = ' + this.columnDefs.length);
  }


  RegisterStudent(studentForm: NgForm): void {
    this.userClaims = [];
    this.getPosts();
    console.log(studentForm.value);
  }

  exportExcel() {
    this.spinner.show();
    const workSheet = XLSX.utils.json_to_sheet(this.userClaims, { cellDates: true, dateNF: 'dd-MMM-YYYY' });
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet Name');
    XLSX.writeFile(workBook, 'file name.xlsx');
    this.spinner.hide();
  }

}
