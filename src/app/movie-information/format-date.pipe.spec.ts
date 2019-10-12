import { FormatDatePipe } from './format-date.pipe';

describe('FormatDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('return a correct date', () => {
    const pipe = new FormatDatePipe();
    expect(pipe.transform('2019-10-12')).toEqual("12th October 2019");
  });
});
