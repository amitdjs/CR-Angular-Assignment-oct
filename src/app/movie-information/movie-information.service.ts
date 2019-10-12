import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Movie } from "../movie";

@Injectable()
export class MovieInformationService {
  public movieList: Array<Movie> = [];
  public movieListUpdateObs: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.movieListUpdateObs = new BehaviorSubject<boolean>(false);

    this.getJSON().subscribe(data => {
      this.movieList = data;
      this.movieListUpdateObs.next(true);
    });
  }
 
  public getMovieListUpdateObs(): Observable<boolean> {
    return this.movieListUpdateObs.asObservable();
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
