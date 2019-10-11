// import { TestBed } from "@angular/core/testing";

// xdescribe('Component: Login', () => {

//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [ReactiveFormsModule, FormsModule], (1)
//       declarations: [LoginComponent]
//     });

//     // create component and test fixture
//     fixture = TestBedBed.createComponent(LoginComponent);

//     // get test component from the fixture
//     component = fixture.componentInstance;
//     component.ngOnInit(); (2)
//   });

//   it('form invalid when empty', () => {
//     expect(component.form.valid).toBeFalsy();
//   });

//   it('email field validity', () => {
//     let email = component.form.controls['email']; (1)
//     expect(email.valid).toBeFalsy(); (2)
//   });

//   it('email field validity', () => {
//     let errors = {};
//     let email = component.form.controls['email'];
//     errors = email.errors || {};
//     expect(errors['required']).toBeTruthy(); (1)
//   });

//   it('email pattern validity', () => {
//     email.setValue("test");
//     errors = email.errors || {};
//     expect(errors['pattern']).toBeTruthy();
//   });

//   it('submitting a form emits a user', () => {
//     expect(component.form.valid).toBeFalsy();
//     component.form.controls['email'].setValue("test@test.com");
//     component.form.controls['password'].setValue("123456789");
//     expect(component.form.valid).toBeTruthy();

//     let user: User;
//     // Subscribe to the Observable and store the user in a local variable.
//     component.loggedIn.subscribe((value) => user = value);

//     // Trigger the login function
//     component.login();

//     // Now we can check to make sure the emitted value is correct
//     expect(user.email).toBe("test@test.com");
//     expect(user.password).toBe("123456789");
//   });
  
// });