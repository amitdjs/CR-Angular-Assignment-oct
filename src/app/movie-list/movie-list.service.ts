import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Movie } from "../movie";

@Injectable()
export class MovieListService {
  private movieList: Array<Movie> = [];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.movieList = data;
    });
  }

  getJSON(): Observable<any> {
    return this.http.get("../../assets/data/movies-list.json");
  }

  public getMovieById(id) : Observable<any> {
    if(!this.movieList.length) {
      return this.getJSON().pipe(map(data => data.filter(movie => movie['id'] === id)))
    }
    if (id < 3) {
      const obs = of(this.movieList.filter(movie => movie["id"] === id));
      return obs;
    } else {
      const movieData = JSON.parse(localStorage.getItem("movies-data"));
      const obs = of(movieData.filter(movie => movie["id"] === id));
      return obs;
    }
  }
}
