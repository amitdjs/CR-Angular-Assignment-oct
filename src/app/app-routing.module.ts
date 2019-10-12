import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieFormComponent } from "./movie-form/movie-form.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieInformationComponent } from "./movie-information/movie-information.component";

const routes: Routes = [
  { path: "", component: MovieListComponent },
  { path: "add-movie", component: MovieFormComponent },
  { path: "movie-information/:id", component: MovieInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
