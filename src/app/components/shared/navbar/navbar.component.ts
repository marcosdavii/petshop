import { Router } from '@angular/router';
import { Security } from './../../../utils/security.util';
import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: User;

  constructor(private router: Router) {

  }

    ngOnInit() {
      this.user = Security.getUser();

    }

    logout() {
      Security.clear();
      this.router.navigate(['/login']);
    }

}
