import { Component, OnInit } from "@angular/core";
import { MovieListService } from "./movie-list.service";
import { Movie } from "../movie";
import { MovieInformationService } from "src/app/movie-information/movie-information.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
  providers: [MovieListService]
})
export class MovieListComponent implements OnInit {
  public moviesList: Array<Movie> = [];

  constructor(private _movieListService: MovieListService,private _movieInformationService: MovieInformationService ) {
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
