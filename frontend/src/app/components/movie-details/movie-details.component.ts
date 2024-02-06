import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {Movie} from "../../models/Movie";
import {Observable} from "rxjs";
import {MoviesService} from "../../services/movies.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    NgIf,
    AsyncPipe,
    MatFormField
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  movie$: Observable<Movie>;

  constructor(private readonly dialog: MatDialogRef<MovieDetailsComponent,
                { data: {id: number} }>,
              @Inject(MAT_DIALOG_DATA)
              private data: {id: number},
              private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.movie$ = this.moviesService.getMovieById(this.data.id);
  }

  close() {
    this.dialog.close();
  }

}
