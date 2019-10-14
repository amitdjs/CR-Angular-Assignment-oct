import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {BrowserModule, By} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DebugElement} from '@angular/core';

import {MovieFormComponent} from './movie-form.component';
describe('MovieFormComponent', () => {
    let comp:MovieFormComponent;
    let fixture:ComponentFixture<MovieFormComponent;
    let de:DebugElement;
    let el:HTMLElement;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[
                MovieFormComponent
            ],
            imports:[
                BrowserModule,
                FormsModule,
                ReactiveFormsModule
            ]
        }).compileComponents().then(()=>{
            fixture = TestBed.createComponent(MovieFormComponent);
            comp=fixture.componentInstance;
            de=fixture.debugElement.query(By.css('form'));
            el=de.nativeElement;
        });
    }));
    it('form should be invalid',async(()=>{
        comp.movieFom.controls['movieName'].setValue('');
        comp.movieFom.controls['movieType'].setValue('');
        comp.movieFom.controls['releasedOn'].setValue('');
        comp.movieFom.controls['ratings'].setValue('45');
        expect(comp.movieFom.valid).toBeFalsy();
    }));
    it('form should be invalid',async(()=>{
        comp.movieFom.controls['movieName'].setValue('Tarzan');
        comp.movieFom.controls['movieType'].setValue('Children');
        comp.movieFom.controls['releasedOn'].setValue('2000-10-10');
        comp.movieFom.controls['ratings'].setValue('9');
        expect(comp.movieFom.valid).toBeTruthy();
    }));
})