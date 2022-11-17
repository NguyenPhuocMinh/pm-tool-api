'use strict';

import { describe, it } from 'mocha';
import { expect } from 'chai';
import sum from '../src/mappings/services/sum';

describe('It will test the sum service', () => {
  it('should test the sum of 2 numbers', (done) => {
    const num1 = 10;
    const num2 = 20;
    const data = sum(num1, num2);
    expect(data).to.eq(num1 + num2);
    done();
  });
});
