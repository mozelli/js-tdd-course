import { expect } from 'chai';

import fizzBuzz from '../src/fizzbuzz';

describe('FizzBuzz', function() {
    it('should show `Fizz` if the number is divisible for 3.', function() {
        expect(fizzBuzz(3)).to.be.equal('Fizz');
        expect(fizzBuzz(6)).to.be.equal('Fizz');
    });

    it('should show `Buzz` if the number is divisible for 5.', function() {
        expect(fizzBuzz(5)).to.be.equal('Buzz');
        expect(fizzBuzz(20)).to.be.equal('Buzz');
    });

    it('should show `FiozzBuzz` if the number is divisible for 5 and 3.', function() {
        expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
        expect(fizzBuzz(30)).to.be.equal('FizzBuzz');
    });

    it('should show the number if is not divisible for 5 or 3.', function() {
        expect(fizzBuzz(13)).to.be.equal(13);
        expect(fizzBuzz(19)).to.be.equal(19);
    });
});