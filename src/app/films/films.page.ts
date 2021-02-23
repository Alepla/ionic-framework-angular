import { Component, OnInit } from '@angular/core';
import { FilmsService } from './films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  films = [];

  constructor(private filmsService: FilmsService) {}

  ngOnInit() {
    this.filmsService.getFilms().subscribe((data) => {
      this.films = data.d;
    });
  }
}
