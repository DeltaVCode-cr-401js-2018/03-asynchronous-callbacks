'use strict';

const reader = require('../../lib/reader');
const file1 = `${__dirname}/../../data/file1.txt`;

describe('reader', ()=> {
  it('blows up given a bad file', done => {
    reader(
      ['./this/does/not/exist'],
      (err, data) => {
        console.log(data);
        expect(err).not.toBe(null);
        done();
      });
    console.log('test done');
  });

  it('can read one file', done => {
    var paths = [file1];
    reader(
      paths,
      (err, dataStrings) => {
        expect(err).toBe(null);
        expect(dataStrings.length).toBe(paths.length);
        expect(dataStrings[0]).toBe('uno');
        done();
      });
  });
  
});
