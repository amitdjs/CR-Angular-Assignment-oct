import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Movie } from "../movie";

@Injectable()
export class MovieInformationService {
  private movieList: Array<Movie> = [];
  
  constructor(private http: HttpClient) {
    
  }

  public getJSON(): Observable<any> {
    return this.http.get("../../assets/data/movies-list.json");
  }

  public getMovieById(id) {
    return this.getJSON().pipe(
      map(movies=>{
        if (id < 3) {
          return movies.find(movie => movie["id"] === id);
        } else {
          const movieData = JSON.parse(localStorage.getItem("movies-data"));
          return movieData.find(movie => movie["id"] === id);
        }
      })
    );
    
  }
}
