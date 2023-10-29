import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from './drinks.interface';

interface DrinksResponse {
  drinks: Drink[];
}

@Injectable({
  providedIn: 'root',
})
export class DrinksService {
  private apiUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient) {}

  getAllDrinksByInitialLetter(letter: string): Observable<DrinksResponse> {
    const fetchUrl: string = `${this.apiUrl}search.php?f=${letter}`;
    return this.http.get<DrinksResponse>(fetchUrl);
  }

  getDrinkById(id: string): Observable<DrinksResponse> {
    const fetchUrl: string = `${this.apiUrl}lookup.php?i=${id}`;
    return this.http.get<DrinksResponse>(fetchUrl);
  }
}
