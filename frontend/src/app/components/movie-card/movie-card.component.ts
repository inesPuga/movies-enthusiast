import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Output() clickEventEmitter: EventEmitter<number> = new EventEmitter();

  onClick(id: number): void {
    this.clickEventEmitter.emit(id);
  }

}
