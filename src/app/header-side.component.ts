import { Component } from "@angular/core";
import { MorrisJsModule } from "angular-morris-js";
import { RouterModule, Routes, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./header-side.component.html",
  styleUrls: ["./app.component.css"]
})
export class HeaderSideComponent {
  public edited = true;
  // constructor(private router: Router) {
  //   this.edited = true;
  //   this.router = router.url;
  //   console.log(this.router);
  //   if (this.router === "/login") {
  //     this.edited = false;
  //   }
  // }
}
