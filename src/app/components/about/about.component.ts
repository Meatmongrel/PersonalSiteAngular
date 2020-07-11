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
    // trigger("fadeIn", [
    //   state("inactive", style({ opacity: 0 })),
    //   state("active", style({ opacity: 1 })),
    //   transition("* => *", [query("#title", [animate("1.2s ease")])]),
    // ]),
  ],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements AfterViewInit {
  @HostBinding("@slideIn")
  @HostBinding("@slideOn")
  // @HostBinding("@fadeIn")
  animationState: string = "inactive";
  ngAfterViewInit() {
    this.triggerAnimation();
  }

  triggerAnimation = () => {
    console.log("fired", this.animationState);
    setTimeout(function () {
      this.animationState = "active";
      console.log(this.animationState);
    }, 1200);
  };
}
