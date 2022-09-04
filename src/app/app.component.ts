import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinoymadrid.es';
  borderWidth = (window.innerWidth/2).toString() + "px";
  borderTop  = window.innerHeight.toString() + "px";
  leftColor = "red linear-gradient(red, #ff0066)";
  leftTriangle = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 50%)";
  rightTriangle = "polygon(0% 50%,100% 0%, 100% 100%, 0% 100%)";
  rightColor = "blue linear-gradient(blue, #cc99ff)";

  topPhpFlagTriangle() {
    return {
      'width': (window.innerWidth).toString() + "px",
      'height': this.borderTop,
      'background': "#ffffe6 linear-gradient(#ffffe6, #b3b300)",
      'clip-path':  "polygon(0% 0%,49% 50%, 100% 0%)",
      'position': 'absolute',
      'left': 0,
    }
  }


  phpFlagTriangle(left:boolean) {
    return {
      'width': this.borderWidth,
      'height': this.borderTop,
      'background': left ? this.leftColor : this.rightColor,
      'clip-path': left ? this.leftTriangle : this.rightTriangle,
      'position': 'absolute',
      'left': left ? 0 : this.borderWidth,
    }
  }
}
