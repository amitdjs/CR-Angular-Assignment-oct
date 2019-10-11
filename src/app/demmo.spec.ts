// import { TestBed, ComponentFixture, fakeAsync, tick } from "@angular/core/testing";

// describe('valueservice', () => {
//     let service: ValueService;
//     beforeEach(() => {
//         service = new ValueService();
//     });


// });




// describe('should fetch data if not async', () => {
//     let fixure = TestBed
//     let app = fixure.debugEle
//     dataService = fixure.debugElement.injector.get(Dataservice)
//     let spy = spyOn(dataserive, 'getData')
//         .and.returnValue(Promise.resolve(data));
//         fixure.detectChanges();
//         ComponentFixture.whenStable().then(() => {
//             expect(app.data).toBe(data);
//         })
// })

// describe('should fetch data if async', () => {
//     let fixure = TestBed
//     let app = fixure.debugEle
//     dataService = fixure.debugElement.injector.get(Dataservice)
//     let spy = spyOn(dataserive, 'getData')
//         .and.returnValue(Promise.resolve(data));
//         fixure.detectChanges();
//         ComponentFixture.whenStable().then(() => {
//             expect(app.data).toBe(data);
//         })
// })


// describe('should fetch data if not async', fakeAsync() => {
//     let fixure = TestBed
//     let app = fixure.debugEle
//     dataService = fixure.debugElement.injector.get(Dataservice)
//     let spy = spyOn(dataserive, 'getData')
//         .and.returnValue(Promise.resolve(data));
//         fixure.detectChanges();
//         tick();
//         expect(app.data).toBe(data);
//         });



// /** Pipe Testing */

// describe('Pip',()=> {
//     it('...',() => {
//         let reversePipe = new reversePipe();
//         expect(reversePipe.transfor('hello')).toEqual('olleh');
//     })
// })