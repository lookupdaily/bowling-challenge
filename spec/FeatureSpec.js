'use strict';

describe('Feature Test', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(0, 0);
  });

  it('a frame has two rolls', function() {
    expect(frame._roll1).toEqual(0);
    expect(frame._roll2).toEqual(0);
  });
  
})