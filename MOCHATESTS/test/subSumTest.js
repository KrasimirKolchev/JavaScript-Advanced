let expect = require("chai").expect;
const subSum = require("../subSum.js").subSum;

describe("Sub sum task", () => {
    it('should return NaN if first param is not an array', function () {
        let result = subSum("test", 0, 1);
        expect(isNaN(subSum(result))).to.equal(true);
    });
    it('should consider its value to be a zero, if the start index is less than zero', function () {
        let expected = 3.3;
        let result = subSum([1.1, 2.2], -1, 1);
        expect(result).to.be.closeTo(expected, 0.01);
    });
    it('should assume it points to the last index of the array if index is outside the bounds', function () {
        let expected = 2;
        let result = subSum([1, 1], 0, 2);
        expect(result).to.be.equal(expected);
    });
});