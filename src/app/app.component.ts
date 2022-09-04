import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinoymadrid.es';
  borderWidth = (window.innerWidth/2).toString() + "px";
  borderTop  = (window.innerHeight/2).toString() + "px";
  leftColor = "#ff0000";
  rightColor = "#0000ff";

  topPhpFlagTriangle() {
    return {
      'width': '0', 
      'height':'0', 
      'border-left': this.borderWidth + " solid transparent", 
      'border-right': this.borderWidth + " solid transparent", 
      'border-top': this.borderTop + " solid #336BFF", 
      'position': 'absolute',
    }
  }

  phpFlagTriangle(left:boolean) {
    return {
      'width': '0', 
      'height':'0',
      'border-left': left ? 0 : this.borderWidth + " solid transparent", 
      'border-right': left ? this.borderWidth + " solid transparent" : 0,
      'border-bottom': this.borderTop + " solid " + (left ? this.leftColor : this.rightColor),
      'position': 'absolute',
      'top':'0',
      'left': left ? 0 :  this.borderWidth,
    }
  }

  bottomPhpFlagSquare(left:boolean) {
    return {
      'width': '0', 
      'height':'0',
      'border': this.borderWidth + " solid " + (left ? this.leftColor : this.rightColor) ,
      'position': 'absolute',
      'top':this.borderTop,
      'left': left ? 0 :  this.borderWidth,
    }
  }
}
