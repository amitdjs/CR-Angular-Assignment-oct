import { MovieInformationService } from "./movie-information.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { TestBed } from '@angular/core/testing';
describe('MovieInformationService', () => {
    beforeEach(() => { beforeEach(() => TestBed.configureTestingModule({})); });
  
    it('#should be created', () => {
        const service: MovieInformationService = TestBed.get(MovieInformationService);
        expect(service).toBeTruthy();
    });

    it('#should get captain america for id 1', () => {
        const service: MovieInformationService = TestBed.get(MovieInformationService);
        const moviesData = [
            {
              "id": "1",
              "movieName": "Captain America",
              "movieType": "Action",
              "releasedOn": "1920-07-04",
              "ratings": "8",
              "image": "captain_america.jpeg"
            },
            {
              "id": "2",
              "movieName": "Iron Man",
              "movieType": "Action",
              "releasedOn": "1965-04-04",
              "ratings": "7",
              "image": "iron_man.jpeg"
            }
          ]  
    });
  
});