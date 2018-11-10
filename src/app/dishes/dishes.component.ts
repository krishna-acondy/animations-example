import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  dishes = {
    indian: [
      'Sambhar',
      'Bisibele Bhath',
      'Samosa',
      'Vada'
    ],
    mediterranean: [
      'Spanakopita',
      'Greek Salad',
      'Saganaki',
      'Dolmades'
    ],
    french: [
      'Croissant',
      'Madeleine',
      'Coq au vin',
      'Escargot'
    ],
    middleeastern: [
      'Couscous',
      'Falafel',
      'Tabbouleh',
      'Pitta'
    ]
  };

  get cuisine() {
    return this.activatedRoute.paramMap
      .pipe(map(
        (paramMap) => paramMap.get('name').replace(/ /g, '').toLocaleLowerCase()));
  }

  getLink(dish: string): string {
    return `${dish}/recipe`;
  }

}
