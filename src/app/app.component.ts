import { Component } from "@angular/core";
import { MorrisJsModule } from "angular-morris-js";
import {
  RouterModule,
  Routes,
  Router,
  NavigationStart,
  Event as NavigationEvent
} from "@angular/router";

@Component({
  selector: "app-root",
  template: `
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = "app";
  constructor () {
  }
}