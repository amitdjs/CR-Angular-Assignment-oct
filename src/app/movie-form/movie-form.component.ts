import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators, ValidatorFn } from "@angular/forms";
import { Movie } from "../movie";
import { CustomValidators } from "../validator/custom-validators";

@Component({
  selector: "app-movie-form",
  templateUrl: "./movie-form.component.html",
  styleUrls: ["./movie-form.component.scss"]
})
export class MovieFormComponent implements OnInit {
  public movieFom: FormGroup = new FormGroup({
    movieName: new FormControl("", Validators.required),
    movieType: new FormControl("", Validators.required),
    releasedOn: new FormControl("", Validators.required),
    ratings: new FormControl("", [Validators.required, CustomValidators.validateNumeric])
  });

  constructor(private _router: Router) {}

  ngOnInit() {}

  public createMovie() {
    if(this.movieFom.valid){
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
}
