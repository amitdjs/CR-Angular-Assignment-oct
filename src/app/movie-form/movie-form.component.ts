import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Movie } from "../movie";


@Component({
  selector: "app-movie-form",
  templateUrl: "./movie-form.component.html",
  styleUrls: ["./movie-form.component.css"]
})
export class MovieFormComponent implements OnInit {
  movieName = '';
  movieType = '';
  releasedOn = '';
  ratings = 0;
  public movieFom: FormGroup = new FormGroup({
    movieName: new FormControl(this.movieName, Validators.required),
    movieType: new FormControl(this.movieType, Validators.required),
    releasedOn: new FormControl(this.releasedOn, Validators.required),
    ratings: new FormControl(this.ratings, Validators.required)
  });

  constructor(private _router: Router) {}

  ngOnInit() {}

  public createMovie() {
    const moviesData = JSON.parse(localStorage.getItem("movies-data"));
    if (moviesData && moviesData.length) {
      let movie: Movie = this.movieFom.value;
      movie["id"] = (moviesData.length + 1).toString();
      movie["image"] = "placeholder.png";
      moviesData.push(this.movieFom.value);
      localStorage.setItem("movies-data", JSON.stringify(moviesData));
    }
    console.log(this.movieFom.value);
    this._router.navigate(["/"]);
  }
}
