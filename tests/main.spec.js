const expect = require('chai').expect;
const calc = require('../src/main');

describe('Calc', function() {

    describe('Smoke tests', function() {

        it('should exist the `calc` lib', function() {
            expect(calc).to.exist;
        });

        it('should exist method `sum`.', function() {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });

        it('should exist method `sub`.', function() {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });

        it('should exist method `mult`.', function() {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });

        it('should exist method `div`.', function() {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });
    });

    describe('Sum', function() {
        it('should return 4 when sum(2, 2)', function() {
            expect(calc.sum(2, 2)).to.equal(4);
        });
    });
    
    describe('Sub', function() {
        it('should return 4 when sum(8, 4)', function() {
            expect(calc.sub(8, 4)).to.equal(4);
        });
    
        it('should return -4 when sum(6, 10)', function() {
            expect(calc.sub(6, 10)).to.equal(-4);
        });
    });
    
    describe('Mult', function() {
        it('should return 10 when sum(5, 2)', function() {
            expect(calc.mult(5, 2)).to.equal(10);
        });

        it('should return 0 when one of the values is 0.', function() {
            expect(calc.mult(5, 0)).to.equal(0);
            expect(calc.mult(0, 8)).to.equal(0);
        });
    });
    
    describe('Div', function() {
        it('should return 5 when sum(20, 4)', function() {
            expect(calc.div(20, 4)).to.equal(5);
        });

        it('should return string `Não é possível divisão por zero.` when division by 0.', function() {
            expect(calc.div(20, 0)).to.equal("Não é possível divisão por zero.");
        });
    });
});
