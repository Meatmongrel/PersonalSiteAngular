import { Component, OnInit, HostBinding } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query,
} from "@angular/animations";
import { SidenavService } from "src/services/sidenavService";

@Component({
  selector: "app-contact",
  animations: [
    trigger("grow", [
      transition(":enter", [
        query("#email, #phone, #resume", [
          style({ transform: "scale(0)" }),
          stagger(400, [
            animate("1.5s ease", style({ transform: "scale(1)" })),
          ]),
        ]),
      ]),
    ]),
  ],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  constructor(public sidenav: SidenavService) {}
  @HostBinding("@grow")
  toggle() {
    this.sidenav.toggle();
  }
}
