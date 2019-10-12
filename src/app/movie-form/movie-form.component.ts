import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Movie } from "../movie";
import {DatePattern} from '../date-pattern';

@Component({
  selector: "app-movie-form",
  templateUrl: "./movie-form.component.html",
  styleUrls: ["./movie-form.component.css"]
})
export class MovieFormComponent implements OnInit {
  public movieFom: FormGroup = new FormGroup({
    movieName: new FormControl("", Validators.required),
    movieType: new FormControl("", Validators.required),
    releasedOn: new FormControl("", Validators.required),
    ratings: new FormControl("", [
      Validators.required,
      Validators.pattern("[0-9]{1}")
    ])
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

  get movieName() {
    return this.movieFom.get("movieName");
  }

  get movieType() {
    return this.movieFom.get("movieType");
  }

  get releasedOn() {
    return this.movieFom.get("releasedOn");
  }

  get ratings() {
    return this.movieFom.get("ratings");
  }
}
