'use strict';

const reader = require('../../lib/reader');
const file1 = `${__dirname}/../../data/data-1.txt`;
const file2 = `${__dirname}/../../data/data-.txt`;
describe('reader', () => {
  it('blows up given a bad file', done => {
    reader('./this/does/not/exist', (err, data) => {
      expect(err).not.toBe(null);
      done();
    });
  });
  it('can read one file', done => {
    reader([file1], (err, data) => {
      expect(err).toBe(null);
      expect(data[0]).toBe('Hello');
      done();
    });
  });
  it('can read two files', done => {
    reader([file1, file2], (err, data) => {
      expect(err).toBe(null);
      expect(data[0]).toBe('Hello');
      done();
    });
  });
});