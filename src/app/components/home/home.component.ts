import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  Output,
  Input,
  ViewChild,
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query,
} from "@angular/animations";
import { EventEmitter } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { SidenavService } from "src/services/sidenavService";

@Component({
  selector: "app-home",
  animations: [
    trigger("slideIn", [
      transition(":enter", [
        query("#content, #title, #header-links", [
          style({ opacity: 0, transform: "translateY(-50vh)" }),
          stagger(200, [
            animate("1.2s ease", style({ opacity: 1, transform: "none" })),
          ]),
        ]),
      ]),
    ]),
    trigger("slideUp", [
      transition(":enter", [
        query(".down", [
          style({ opacity: 0, transform: "translateY(50vh)" }),
          animate("1.5s ease", style({ opacity: 1, transform: "none" })),
        ]),
      ]),
    ]),
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  @HostBinding("@slideIn")
  @HostBinding("@slideUp")
  @Input()
  @Output()
  event: EventEmitter<any> = new EventEmitter();
  toAbout: string;

  constructor(public sidenav: SidenavService) {}
  toggle() {
    this.sidenav.toggle();
  }

  goToAbout() {
    this.toAbout = "about";
    this.event.emit(this.toAbout);
  }
}
