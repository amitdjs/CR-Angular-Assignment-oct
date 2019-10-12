# Code Realm Angular Assignment


The existing app is a simple list app for which you can perform the following operations -

1.  View the list of movies
2.  Clicking on an item will take you to the details screen.
3.  Add a new item to the list.

You have to perform the following tasks -

1.  Make the app responsive - The app isn't responsive and doesn't display correctly on mobile devices. Fix/add styles for it as per the designs and wireframe available under the "src/assets/wireframes" folder.
2.  On the details screen -
    - Display the release date in readable format - 4th July, 2019
    - Remove the setTimeout present in hero-information component, and ensure the app still behaves the same way.
3.  On the Add new movie screen -
    - Add validations so that the "rating" field should exactly be minimum 1 and maximum 10 and shouldn't accept alphanumeric characters.
    - Show the error messages (which field is empty, rating accepts number only etc).
    - Disable the "Create Movie" button if the form is invalid.
4.  Add unit testcases for sufficient code coverage.
5.  Refactor and optimise the code.

Please note -

- SCSS integration is already present so you don't have to add any custom packages or modify any configuration changes for it. The components are using css files, feel free to port the to scss.
- The ability to execute unit tests is already baked in so you don't have to make any configuration changes to enable it.

## Development server

Run `npm run start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `npm run test` or `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
