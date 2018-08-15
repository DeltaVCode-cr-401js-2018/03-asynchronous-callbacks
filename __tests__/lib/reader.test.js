'use strict';

const reader = require('../../lib/reader');
const file1 = `${__dirname}/../../data/file1.txt`;
const file2 = `${__dirname}/../../data/file2.txt`;

describe('reader', () => {
  it('blows up given a bad file', done => {
    reader(
      ['./this/does/not/exist'],
      (err, data) => {
        expect(err).not.toBe(null);
        done();
      });
    console.log('reader call is done');
  });

  it('can read one file', done => {
    var paths = [file1];
    reader(
      paths,
      (err, dataStrings) => {
        expect(err).toBe(null);

        // Data should be an array
        // With a string per file
        expect(dataStrings.length)
          .toBe(paths.length);

        // First file data as string
        expect(dataStrings[0]).toBe('uno');
        done();
      });
    console.log('reader call is done');
  });

  it('can read two file', done => {
    var paths = [file1,file2];
    reader(
      paths,
      (err, dataStrings) => {
        expect(err).toBe(null);

        // Data should be an array
        // With a string per file
        expect(dataStrings.length)
          .toBe(paths.length);

        // First file data as string
        expect(dataStrings[0]).toBe('uno');
        expect(dataStrings[1]).toBe('dos');
        done();
      });
    console.log('reader call is done');
  });
});
