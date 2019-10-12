import { DebugElement } from "@angular/core";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MovieListComponent } from "./movie-list.component";
import { MovieListService } from "./movie-list.service";
import { Movie } from '../movie';

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
    localStorage.setItem("movies-data", "movies Data")
    const response = spyOn(service, 'getJSON').and.callThrough();
    expect(localStorage.getItem("movies-data")).toBeTruthy();
    component.callMovieList();
    expect(service.getJSON).toHaveBeenCalled();
  });

  it("If movies-data does not exist in localsotrage then get movies data", () => {
    //@todo write spy for service.getJSON method and return response
    const response = spyOn(service, 'getJSON').and.callThrough();
    expect(localStorage.getItem("movies-data")).toBeFalsy();
    component.callMovieList();
    expect(service.getJSON).toHaveBeenCalled();
  });

  it("movie name should not be undefined", () => {
    expect(debugElement.nativeElement.querySelector('h2')).not.toBeUndefined();
  })

});
