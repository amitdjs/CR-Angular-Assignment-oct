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
  let spy: any;
  let movies = {};

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
    spyOn(localStorage, 'getItem').and.callFake( (key:string):String => {
      return movies[key] || null;
     });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return movies[key] = value + '';
    });
  }));

  afterEach(() => {
    service = null;
    localStorage.removeItem("movies-data");
  });

  it('If movies-data does not exist in localsotrage then get movies data', () => {
    const response = [];
    
    expect(localStorage.getItem('movies-data')).toBeFalsy();
    component.callMovieList();
    spy = spyOn(service, 'getJSON')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
   service.getJSON()
    expect(spy).toHaveBeenCalled();
  });

  it('If movies-data exist in localstorage then get movies data', () => {
    let moviesData = [{'id': 1}];
    localStorage.setItem('movies-data', JSON.stringify(moviesData));
    component.getList();
    expect(localStorage.getItem('movies-data')).toBeTruthy();
});

});
