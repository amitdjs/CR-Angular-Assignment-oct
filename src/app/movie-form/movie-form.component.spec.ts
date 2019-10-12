import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MovieFormComponent } from './movie-form.component';
import { FormsModule, FormControl } from '@angular/forms';

describe("MovieForm", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [MovieFormComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(MovieFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});