import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../movie";

@Injectable()
export class MovieInformationService {
  private movieList: Array<Movie> = [];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.movieList = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("../../assets/data/movies-list.json");
  }

  public getMovieById(id) {
    if (id < 3) {
      return this.movieList.filter(movie => movie["id"] === id);
    } else {
      const movieData = JSON.parse(localStorage.getItem("movies-data"));
      return movieData.filter(movie => movie["id"] === id);
    }
    return [];
  }
}
