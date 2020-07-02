import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  Output,
  Input,
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
export class HomeComponent implements AfterViewInit {
  @HostBinding("@slideIn")
  @HostBinding("@slideUp")
  @Input()
  toAbout: string;
  @Output() aboutShown: EventEmitter<string> = new EventEmitter();

  ngAfterViewInit() {}

  goToAbout() {
    this.toAbout = "about";
    this.aboutShown.emit(this.toAbout);
  }
}
