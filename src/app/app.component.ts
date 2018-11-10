import { Component } from '@angular/core';
import { onRoute } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onRoute]
})
export class AppComponent {
  constructor() {
  }

  onRouteChange(outlet) {
    console.log(outlet.activatedRouteData.depth || 0);
    return outlet.activatedRouteData.depth || 0;
  }
}
