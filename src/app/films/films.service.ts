import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIKEY } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  public films: any = [];
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'x-rapidapi-key': APIKEY,
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  });

  getFilms(searchTerm) {
    console.log();
    return this.http.get<any>(
      'https://imdb8.p.rapidapi.com/auto-complete?q=' + searchTerm,
      { headers: this.headers }
    );
  }

  getFilm(filmId: string) {
    return this.http.get(
      'https://imdb8.p.rapidapi.com/title/get-top-cast?tconst=' + filmId,
      {
        headers: this.headers,
      }
    );
  }
}
