import { Component, OnInit, AfterViewInit, HostBinding } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query,
} from "@angular/animations";

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
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements AfterViewInit {
  @HostBinding("@slideIn")
  public animatePage = true;

  ngAfterViewInit() {}
}
