import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filmDB } from '../film.model';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  public film: filmDB;
  public searching: any = false;
  isDataAvailable: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService
  ) {}

  async ngOnInit() {
    this.searching = true;
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('id');
      this.filmsService.getFilm(recipeId).subscribe((data) => {
        this.film = data;
        this.searching = false;
        this.isDataAvailable = true;
      });
    });
  }
}
