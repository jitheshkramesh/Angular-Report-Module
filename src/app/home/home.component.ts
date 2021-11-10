import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Localdata: string;
  title: string = 'Task Tracker';
  test: string;

  constructor() {

  }

  ngOnInit(): void {
    const _localStorage = (localStorage.getItem('userToken')); 
    if (_localStorage != null)
    {
      this.Localdata = _localStorage.toString();
      this.title = _localStorage.toString();
      this.test = _localStorage.toString();
    }
  }


}
