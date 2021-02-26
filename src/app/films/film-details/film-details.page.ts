import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Film } from '../film.model';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  //film: Film;
  film: {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('id');
      this.filmsService.getFilm(recipeId).subscribe((data) => {
        //console.log(data);
        this.film = data;
      });
    });
  }
}
