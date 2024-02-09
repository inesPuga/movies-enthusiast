import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {debounceTime, distinctUntilChanged, Observable} from "rxjs";
import {Movie} from "./models/Movie";
import {MoviesService} from "./services/movies.service";
import {HttpClientModule} from "@angular/common/http";
import {MovieCardComponent} from "./components/movie-card/movie-card.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, MovieCardComponent, NgForOf, AsyncPipe, NgIf, InfiniteScrollModule, MatSelect, MatOption, MatFormField, MatInput, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  movies: Observable<Movie[]> = new Observable<Movie[]>();

  items: Movie[] = [];

  page: number = 1;
  isLoading: boolean = false;

  filtersForm = new FormGroup({
    search: new FormControl(''),
    view: new FormControl('none'),
    year: new FormControl('none'),
    orderBy: new FormControl('id')
  });

  constructor(private readonly moviesService: MoviesService,
              private readonly dialog: MatDialog) {}

  ngOnInit() {
    this.fetch();
  }

  fetch(): void {
    this.isLoading = true;
    this.moviesService.getMovies(this.page,
      this.getFormControlValue('orderBy').split('-')[0],
      this.getFormControlValue('orderBy').split('-')[1],
      parseInt(this.getFormControlValue('year')),
      parseInt(this.getFormControlValue('view')?.split('-')[1]),
      this.getFormControlValue('search')
      )
      .pipe(
        debounceTime(500)
      )
      .subscribe((items) => {
        this.items.push(...items);
        this.page++;
        this.isLoading = false;
      });
  }

  onCardClick(id: number): void {
    this.openDialog(id);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(MovieDetailsComponent, {
      width: '50%',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed: ${result}`);
    });
  }

  onChange(): void {
    this.page = 0;
    this.items = [];
    this.fetch();
  }

  getFormControlValue(formControlName: string) {
    if(this.filtersForm.get(formControlName)?.value == 'none') {
      return null;
    }
    return this.filtersForm.get(formControlName)?.value;
  }

  getYearRange(start: number, end: number): number[] {
    const years = [];
    for (let i = end; i >= start; i--) {
      years.push(i);
    }
    return years;
  }

  isViewDifferentOfAll(): boolean {
    return this.getFormControlValue('view') != null;
  }

}
