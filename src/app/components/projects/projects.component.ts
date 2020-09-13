import { Component, OnInit, HostBinding } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query,
  group,
} from "@angular/animations";
import { SidenavService } from "src/services/sidenavService";

@Component({
  selector: "app-projects",
  animations: [
    trigger("slideIn", [
      transition(":enter", [
        query(".project-card", [
          style({ opacity: 0, transform: "translateY(-50vh)" }),
          stagger(200, [
            animate("1.2s ease", style({ opacity: 1, transform: "none" })),
          ]),
        ]),
      ]),
    ]),
  ],
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  constructor(public sidenav: SidenavService) {}
  @HostBinding("@slideIn")
  toggle() {
    this.sidenav.toggle();
  }
}
