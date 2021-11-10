import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      // if (e instanceof ActivationStart && e.snapshot.outlet === "user")
      //   this.outlet.deactivate();
    });
  }

}
