import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  homeShown: boolean = true;
  aboutShown: boolean = false;
  projectsShown: boolean = false;
  contactShown: boolean = false;

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
