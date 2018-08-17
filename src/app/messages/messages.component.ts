import { Component } from "@angular/core";
import { MorrisJsModule } from "angular-morris-js";
import { RouterModule, Routes, Router } from "@angular/router";

@Component({
  templateUrl: "./messages.component.html",
  styleUrls: ["../app.component.css"]
})
export class MessagesComponent {
  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = "doughnut";

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
