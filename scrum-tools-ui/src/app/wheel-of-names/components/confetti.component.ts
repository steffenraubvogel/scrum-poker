import { Component } from "@angular/core";

@Component({
  selector: "app-confetti",
  standalone: true,
  templateUrl: "./confetti.component.html",
  styleUrl: "./confetti.component.scss",
})
export class ConfettigComponent {
  public snippets = new Array(10).fill(0).map((_, i) => {
    return {
      width: 8,
      height: 5,
      count: 10,
      startX: 0,
      startY: 100,
      color: "red",
    };
  });
}
