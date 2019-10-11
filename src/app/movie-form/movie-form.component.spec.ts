import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MovieFormComponent } from './movie-form.component';
import { FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe("MovieFormComponent", () => {
  let component: MovieFormComponent;
  let fixture: ComponentFixture<MovieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, FormGroup],
      declarations: [MovieFormComponent],
      providers: [
        FormBuilder
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
  }));
});
