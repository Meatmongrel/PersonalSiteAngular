import {
  Component,
  OnInit,
  HostBinding,
  AfterViewInit,
  Host,
} from "@angular/core";
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
  selector: "app-about",
  animations: [
    trigger("slideIn", [
      transition(":enter", [
        query("#span1, #span3", [
          style({ opacity: 0, transform: "translateX(-50vw)" }),
          animate("1.2s ease", style({ opacity: 1, transform: "none" })),
        ]),
      ]),
    ]),
    trigger("slideOn", [
      transition(":enter", [
        query("#span2", [
          style({ opacity: 0, transform: "translateX(50vw)" }),
          animate("1.2s ease", style({ opacity: 1, transform: "none" })),
        ]),
      ]),
    ]),
  ],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements AfterViewInit {
  constructor(public sidenav: SidenavService) {}
  @HostBinding("@slideIn")
  @HostBinding("@slideOn")
  toggle() {
    this.sidenav.toggle();
  }

  ngAfterViewInit() {}
}
