import {Component, Input} from '@angular/core';
import {Movie} from "../../models/Movie";
import {NgIf, SlicePipe} from "@angular/common";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    SlicePipe,
    NgIf
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  @Input({ required: true }) movie: Movie;

}
