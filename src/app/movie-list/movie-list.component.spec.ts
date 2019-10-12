import { DebugElement } from "@angular/core";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MovieListComponent } from "./movie-list.component";
import { MovieListService } from "./movie-list.service";

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
    let localstorageData = [
      {"id":"1","movieName":"Captain America","movieType":"Action","releasedOn":"1920-07-04","ratings":"8","image":"captain_america.jpeg"},
      {"id":"2","movieName":"Iron Man","movieType":"Action","releasedOn":"1965-04-04","ratings":"7","image":"iron_man.jpeg"}
    ];
    localStorage.setItem("movies-data",JSON.stringify(localstorageData));
    expect(localStorage.getItem("movies-data")).toBeTruthy();
    spyOn(service, 'getJSON').and.callThrough();
    });
    component.callMovieList();
    expect(service.getJSON).toHaveBeenCalled();
  });

  it("If movies-data does not exist in localsotrage then get movies data", () => {
    const response = [];
    //@todo write spy for service.getJSON method and return response
    expect(localStorage.getItem("movies-data")).toBeFalsy();
    component.callMovieList();
    expect(service.getJSON).toHaveBeenCalled();
  });
});
