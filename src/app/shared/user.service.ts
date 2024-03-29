import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { ResponseMessage } from './ResponseMessage.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:34359';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post<ResponseMessage>(this.rootUrl + '/api/Authentication/Register', body, { headers: reqHeader });
  }

  userAuthentication(userName: string, password: string) { 
    var data = "?userName=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' }); 
    return this.http.post(this.rootUrl + '/api/Authentication/Token?userName=' + userName + '&password=' + password,
      data, { headers: reqHeader });
  }

  getUserClaims(str: string) { 
    return this.http.get(this.rootUrl + '/api/Reports/GetData?squery=' + str)
      .catch(this.errorHandler);
  }

  GetDataHeader() { 
    return this.http.get(this.rootUrl + '/api/Reports/GetDataHeader')
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server error");
  }

  GetData2Sec(str: string) { 
    return this.http.get(this.rootUrl + '/api/Reports/GetData2Sec?squery=' + str)
      .catch(this.errorHandler);
  }

  GetClaimDetails(Id: string) { 
    return this.http.get(this.rootUrl + '/api/Reports/GetClaimDetails?Id=' + Id)
      .catch(this.errorHandler);
  }

}