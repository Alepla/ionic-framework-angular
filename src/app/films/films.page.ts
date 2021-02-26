import { Component, OnInit } from '@angular/core';
import { FilmsService } from './films.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  public searchControl: FormControl;
  public films = [];
  public searching: any = false;

  constructor(private filmsService: FilmsService) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.setFilteredItems('');

    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe((search) => {
        this.setFilteredItems(search);
      });
  }

  setFilteredItems(searchTerm) {
    this.searching = true;

    if (searchTerm !== '') {
      this.filmsService.getFilms(searchTerm).subscribe((data) => {
        this.searching = false;
        this.films = data.results;
      });
    } else {
      this.searching = false;
      this.films = [];
    }
  }
}
