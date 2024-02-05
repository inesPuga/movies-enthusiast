import {Component, HostListener, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Observable} from "rxjs";
import {Movie} from "./models/Movie";
import {MoviesService} from "./services/movies.service";
import {HttpClientModule} from "@angular/common/http";
import {MovieCardComponent} from "./components/movie-card/movie-card.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, MovieCardComponent, NgForOf, AsyncPipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  movies: Observable<Movie[]> = new Observable<Movie[]>();

  items: Movie[] = [];

  page: number = 0; // todo : dynamic
  size: number = 10; // todo : dynamic
  isLoading: boolean = false;

  constructor(private readonly moviesService: MoviesService,
              private readonly dialog: MatDialog) {}

  ngOnInit() {
    this.fetch();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(){
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight&&!this.isLoading){
      this.fetch();
    }
  }

  fetch(): void {
    this.isLoading = true;
    this.moviesService.getMovies(this.page).subscribe((items) => {
      this.items.push(...items);
      this.page++;
      this.isLoading = false;
    })
  }

  onCardClick(movie: Movie): void {
    this.openDialog(movie);
  }

  openDialog(movie: Movie): void {
    const dialogRef = this.dialog.open(MovieDetailsComponent, {
      width: '250px',
      data: {movie: movie}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed: ${result}`);
    });
  }

}
