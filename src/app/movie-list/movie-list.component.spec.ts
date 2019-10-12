import { DebugElement } from "@angular/core";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MovieListComponent } from "./movie-list.component";
import { MovieListService } from "./movie-list.service";
import { Observable, of } from 'rxjs';

describe("MovieListComponent", () => {
  let fixture: ComponentFixture<MovieListComponent>;
  let component: MovieListComponent;
  let service: MovieListService;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [MovieListComponent],
      providers: [MovieListService]
    }).compileComponents();
    fixture = TestBed.createComponent(MovieListComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    service = debugElement.injector.get(MovieListService);
  }));

  afterEach(() => {
    service = null;
    localStorage.removeItem("movies-data");
  });

  it("If movies-data exist in localstorage then get movies data", () => {
    //@todo write a test case for above condition. Please set the movies-data in localStorage and then verify if it exist.
    spyOn(service,'getJSON').and.returnValue(of([]));
    localStorage.setItem('movies-data', JSON.stringify([
      {
        "id": "1",
        "movieName": "Captain America",
        "movieType": "Action",
        "releasedOn": "1920-07-04",
        "ratings": "8",
        "image": "captain_america.jpeg"
      }]))
      component.getList();
      expect(component.moviesList.length).toEqual(1);
      expect(service.getJSON).toHaveBeenCalledTimes(0);
  });

  it("If movies-data does not exist in localsotrage then get movies data", () => {
    const response = [];
    //@todo write spy for service.getJSON method and return response
    spyOn(service,'getJSON').and.returnValue(of([]));
    expect(localStorage.getItem("movies-data")).toBeFalsy();
    component.callMovieList();
    expect(service.getJSON).toHaveBeenCalled();
  });
});
