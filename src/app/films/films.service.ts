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

  getFilms(searchTerm: string) {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/search/movie?api_key=' +
        APIKEY +
        '&query=' +
        searchTerm
    );
  }

  getFilm(filmId: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' + filmId + '?api_key=' + APIKEY
    );
  }
}
