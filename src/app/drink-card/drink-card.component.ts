import { Component, Input } from '@angular/core';
import { Drink } from '../services/api/drinks/drinks.interface';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
})
export class DrinkCardComponent {
  @Input()
  drink: Drink | null = null;
}
