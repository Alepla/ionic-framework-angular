import { Injectable } from '@angular/core';
import { Film } from './film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private films: Film[] = [
    {
      Title: 'Aa Naluguru',
      Year: '2004',
      Runtime: '141 min',
      Genre: 'Drama',
      Director: 'Chandra Siddhartha',
      Actors: 'Rajendra Prasad, Aamani, Raja, Raghu Babu',
      Plot:
        'A man fights for his philosophy: that human relations are more important than money.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGZjNDBhNGQtM2M4Ny00ZTVhLTk4ZWMtNDMyNzQ2Mjk0ZGJhXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_SX300.jpg',
    },
  ];

  constructor() {}

  getFilms(): Film[] {
    return [...this.films];
  }

  getFilm(Title: string) {
    return {
      ...this.films.find((film) => {
        return film.Title === Title;
      }),
    };
  }
}
