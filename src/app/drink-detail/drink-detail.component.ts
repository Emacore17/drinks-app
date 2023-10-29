import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../services/api/drinks/drinks.service';
import { Drink } from '../services/api/drinks/drinks.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
})
export class DrinkDetailComponent implements OnInit {
  drinkDetail: Drink[] = [];
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private drinksService: DrinksService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isLoading = true;
      this.drinksService.getDrinkById(id).subscribe({
        next: (data) => {
          this.drinkDetail = data.drinks;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching drinks:', err);
          this.drinkDetail = [];
          this.isLoading = false;
        },
      });
    }
  }

  getIngredients(drink: any): any[] {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredientName = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];

      if (ingredientName) {
        // Aggiungi solo se l'ingrediente esiste
        let ingredient = {
          name: `${measure ? measure : ''} ${ingredientName}`.trim(),
          imageUrl: `https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`,
        };
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  }
}
