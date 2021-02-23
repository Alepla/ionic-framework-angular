import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../film.model';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  film: Film;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      // redirect
      const recipeId = paramMap.get('filmId');
      this.film = this.filmsService.getFilm(recipeId);
      console.log(this.film);
    });
  }
}
