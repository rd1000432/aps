import { Component } from "@angular/core";
import { MorrisJsModule } from "angular-morris-js";
import { RouterModule, Routes, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public edited = true;
}
