import { Component } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [AuthService],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private user = {};
  constructor(private authService: AuthService, private router: Router) { }

  onClick() {
    this.authService.register(this.user).subscribe();
    this.router.navigate(['/auth/checkmail']);
  }

}
