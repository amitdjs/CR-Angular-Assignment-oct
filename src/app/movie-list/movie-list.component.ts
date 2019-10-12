import { Component, OnInit } from "@angular/core";
import { MovieListService } from "./movie-list.service";
import { Movie } from "../movie";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
  providers: [MovieListService]
})
export class MovieListComponent implements OnInit {
  public moviesList: Array<Movie> = [];
  todaydate = new Date(); 
  
  constructor(private _movieListService: MovieListService) {
    this.getList();
  }
  getList() {
    const moviesData = JSON.parse(localStorage.getItem("movies-data"));
    if (moviesData && moviesData.length) {
      this.moviesList = moviesData;
    } else {
      this.callMovieList();
    }
  }

  callMovieList() {
    this._movieListService.getJSON().subscribe(data => {
      this.moviesList = data;
      localStorage.setItem("movies-data", JSON.stringify(data));
    });
  }

  ngOnInit() {}
}
