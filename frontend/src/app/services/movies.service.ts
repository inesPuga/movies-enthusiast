import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/Movie";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private readonly http: HttpClient) {}

  getMovies(page: number, sort: string = 'id', direction: string = 'asc',
            year?: number, top?: number, title?: string): Observable<Movie[]> {
    let params = new HttpParams();
    if(year) { params = params.set('year', year) }
    if(top) { params = params.set('top', top) }
    if(title) { params = params.set('title', title) }
    return this.http.get<Movie[]>(`http://localhost:8080/public/movies?page=${page}&sort=${sort},${direction}` , { params });
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`http://localhost:8080/public/movies/${id}`);
  }

}
