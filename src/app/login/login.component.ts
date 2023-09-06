import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {UserDataService} from "../services/user-data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = "";

  constructor(public userService: UserService,
              private userDataService: UserDataService,
              private router: Router) {
  }

  async login() {
    if (this.name != "") {
      this.userService.getUserByName(this.name).subscribe(async u => {
        if (u == null) {
          this.userService.addUser(this.name).subscribe(
            user => {
              console.log(user.id)
              this.router.navigate(['/event'], {queryParams: {userId: user.id as number}});
            });
        } else {
          this.userService.getUserByName(this.name).subscribe(
            user => {
              this.router.navigate(['/event'], {queryParams: {userId: user.id as number}});
            })
        }
      })
    }
  }
}
