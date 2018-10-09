import { Component } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  providers: [AuthService],
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  private user = {};
  constructor(private authService: AuthService, private router: Router) { }


  onClick() {
    this.authService.login(this.user).subscribe();
    this.router.navigate(['/dashboard']);
  }

}
