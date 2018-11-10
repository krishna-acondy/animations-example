import { Component } from '@angular/core';
import { onRoute } from '../animations';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.scss'],
  animations: [onRoute]
})
export class CuisinesComponent{

  constructor() { }

  cuisines = [
    'Indian',
    'Mediterranean',
    'French',
    'Middle Eastern'
  ]

  getLink(cuisine: string): string {
    return `${cuisine.replace(/ /g, '').toLocaleLowerCase()}/dishes`;
  }

  onRouteChange(outlet) {
    return outlet.activatedRouteData.depth || 0;
  }

}
