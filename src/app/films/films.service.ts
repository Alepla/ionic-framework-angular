import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'x-rapidapi-key': 'CvOoC3EqJHmshInI0IhO2fJ5iARvp1BlJaCjsnbTT4uD0IYHXI',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  });

  getFilms() {
    return this.http.get<any>(
      'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr',
      { headers: this.headers }
    );
  }

  getFilm(filmId: string) {
    return this.http.get<any>(
      'https://imdb8.p.rapidapi.com/auto-complete?id=' + filmId,
      { headers: this.headers }
    );
  }
}
