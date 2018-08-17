import { Pipe, Component } from "@angular/core";
import { MorrisJsModule } from "angular-morris-js";
import { RouterModule, Routes, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  templateUrl: "./commenter.component.html",
  styleUrls: ["./commenter.component.css"]
})
export class CommenterComponent {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
