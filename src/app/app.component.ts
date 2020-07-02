import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HomeComponent, { static: false }) home: HomeComponent;

  ngAfterViewInit() {}

  homeShown: boolean = true;
  aboutShown: boolean = false;
  projectsShown: boolean = false;
  contactShown: boolean = false;

  arrowToAbout() {
    if (this.home && this.home.toAbout != undefined)
      this.showGivenPage(this.home.toAbout);
  }

  showGivenPage = (page) => {
    this.homeShown = false;
    this.aboutShown = false;
    this.projectsShown = false;
    this.contactShown = false;
    switch (page) {
      case "home":
        this.homeShown = true;
        break;
      case "about":
        this.aboutShown = true;
        break;
      case "projects":
        this.projectsShown = true;
        break;
      case "contact":
        this.contactShown = true;
        break;
      default:
        break;
    }
  };
}
