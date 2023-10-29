import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../services/api/drinks/drinks.service';
import { Drink } from '../services/api/drinks/drinks.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks: Drink[] = [];

  constructor(private drinksService: DrinksService) {}

  ngOnInit(): void {
    this.drinksService.getAllDrinksByInitialLetter().subscribe({
      next: (data) => {
        this.drinks = data.drinks;
        console.log(data);
      },
    });
  }
}
