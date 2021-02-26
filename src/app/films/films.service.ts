import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  public films: any = [];
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'x-rapidapi-key': 'CvOoC3EqJHmshInI0IhO2fJ5iARvp1BlJaCjsnbTT4uD0IYHXI',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  });

  getFilms(searchTerm) {
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
