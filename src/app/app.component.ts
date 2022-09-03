import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinoymadrid.es';
  windowsWitdh = (window.innerWidth/2.3).toString() + "px solid transparent";
  windowesHeight  = (window.innerHeight/2.5).toString() + "px solid #336BFF";
}
