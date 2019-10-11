import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../movie";
import { MovieListService } from '../movie-list/movie-list.service';

@Component({
  selector: "app-movie-information",
  templateUrl: "./movie-information.component.html",
  styleUrls: ["./movie-information.component.css"],
  providers: [MovieListService]
})
export class MovieInformationComponent implements OnInit {
  private movie: Movie;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieListService: MovieListService
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
        this._movieListService.getMovieById(params["id"]).subscribe(data => {
          this.movie = data[0];
        });
    });
  }
}
