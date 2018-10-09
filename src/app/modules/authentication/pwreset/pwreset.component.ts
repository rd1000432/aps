import { Component } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-pwreset',
  templateUrl: './pwreset.component.html',
  providers: [AuthService],
  styleUrls: ['./pwreset.component.css']
})
export class PWResetComponent implements OnInit {

  private user = {};
  constructor(private authService: AuthService, private router: Router) { }

  onClick() {
    this.authService.reset(this.user).subscribe();
    this.router.navigate(['/auth/checkmail']);
  }

}
