import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/Movie";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private readonly http: HttpClient) {}

  getMovies(page: number, size?: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`http://localhost:8080/public/movies?page=${page}`);
  }

}
