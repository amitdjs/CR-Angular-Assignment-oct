import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable, of } from 'rxjs';
import { MovieListService } from '../movie-list/movie-list.service';
import { MovieFormComponent } from './movie-form.component';
import { CustomMaterialModule } from '../material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

describe("MovieFormComponent", () => {
  let fixture: ComponentFixture<MovieFormComponent>;
  let component: MovieFormComponent;
  let service: MovieListService;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule, CustomMaterialModule, NoopAnimationsModule],
      declarations: [MovieFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(MovieFormComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    service = debugElement.injector.get(MovieListService);
  }));

//   it("it should check if the create button is disabled if the form is Invalid", () => {
//     fixture.detectChanges();
//   });

//   it("it should check if rating is invalidated when pattern mismatches", () => {
    
//   });
});
