import {
  Component,
  ViewChild,
  HostListener,
  AfterViewInit,
} from "@angular/core";
import { MatSidenav } from "@angular/material";
import { HomeComponent } from "../home/home.component";
import { SidenavService } from "src/services/sidenavService";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent implements AfterViewInit {
  homeShown: boolean = true;
  aboutShown: boolean = false;
  projectsShown: boolean = false;
  contactShown: boolean = false;
  @ViewChild(HomeComponent, { static: false }) home: HomeComponent;
  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;
  constructor(public sidenavService: SidenavService) {}

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

  arrowToAbout() {
    if (this.home && this.home.toAbout != undefined)
      this.showGivenPage(this.home.toAbout);
  }

  toggle() {
    this.sidenav.toggle();
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
