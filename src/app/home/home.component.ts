import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../services/api/drinks/drinks.service';
import { Drink } from '../services/api/drinks/drinks.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks: Drink[] = [];
  selectedLetter: string = 'a';
  isLoading: boolean = false;
  alphabet: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  constructor(private drinksService: DrinksService) {}

  ngOnInit(): void {
    this.onLetterClick('a');
  }

  onLetterClick(letter: string): void {
    this.isLoading = true;
    this.selectedLetter = letter;
    this.drinksService.getAllDrinksByInitialLetter(letter).subscribe({
      next: (data) => {
        this.drinks = data.drinks;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching drinks:', err);
        this.drinks = [];
        this.isLoading = false;
      },
    });
  }
}
