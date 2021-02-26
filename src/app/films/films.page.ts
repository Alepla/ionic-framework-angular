import { Component, OnInit } from '@angular/core';
import { FilmsService } from './films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  public searchTerm: string = '';
  public films = [];

  constructor(private filmsService: FilmsService) {}

  ngOnInit() {}

  setFilteredItems() {
    console.log(this.searchTerm);
    this.searchTerm !== ''
      ? this.filmsService.getFilms(this.searchTerm).subscribe((data) => {
          this.films = data.d;
        })
      : (this.films = []);
  }
}
