import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
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

}
