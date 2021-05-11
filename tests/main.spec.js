const expect = require('chai').expect;

describe('Main', function() {
    let arr = [];

    before(function() {
        
    });

    after(function() {
        
    });

    beforeEach(function() {
        arr = [1, 2, 3];
    });

    afterEach(function() {
        
    });

    it('should be true when pop 3 from array.', function() {
        expect(arr.pop() === 3).to.be.true;
    });

    it('should have a size of 4 when push another value to the array.', function() {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('should have a size of 2 when pop a value from the array.', function() {
        arr.pop();
        expect(arr).to.have.lengthOf(2);
    });

    it('should remove the value 3 when use pop in the array.', function() {
        arr.pop() === 3;
        expect(arr).to.not.include(3);
    });
});
