import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIKEY } from '../../environments/environment';
import { filmDB } from './film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  public films: any = [];
  constructor(private http: HttpClient) {}

  getFilms(searchTerm: string) {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/search/movie?api_key=' +
        APIKEY +
        '&query=' +
        searchTerm
    );
  }

  getFilm(filmId: string) {
    return this.http.get<filmDB>(
      'https://api.themoviedb.org/3/movie/' + filmId + '?api_key=' + APIKEY
    );
  }
}
