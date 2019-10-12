import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Movie } from "../movie";
import { MovieInformationService } from "./movie-information.service";
import { AUTOCOMPLETE_OPTION_HEIGHT } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-movie-information",
  templateUrl: "./movie-information.component.html",
  styleUrls: ["./movie-information.component.css"],
  providers: [MovieInformationService]
})
export class MovieInformationComponent implements OnInit {
  private movieId;
  private movie: Movie;
  private movieListObservable: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieInformationService: MovieInformationService
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.subscribeToMovieList(params['id']);
    });
  }

  subscribeToMovieList(movieId) {
    this.movieListObservable = this._movieInformationService.getMovieListUpdateObs().subscribe({
      next: (value: boolean) => {
          if (value) {
            this.getMovieDetails(movieId);
            this.movieListObservable.unsubscribe();
          }
      }
  });
  }

  getMovieDetails(id) {
    this.movie = this._movieInformationService.getMovieById(id)[0];
    console.log(this.movie);
  }
}
