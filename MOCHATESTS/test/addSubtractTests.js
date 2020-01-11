let expect = require('chai').expect;
let createCalculator = require("../addSubtract.js").createCalculator;

describe("createCalculator() should calculate values properly", function () {
    it('should add 5 as num and with get() to return the result 5', function () {
        let expected = 5;
        let actual = createCalculator();
        expect(actual.get(actual.add(5))).to.be.equal(expected);
    });
    it('should add 5 as string and with get() to return the result 5', function () {
        let expected = 5;
        let actual = createCalculator();
        expect(actual.get(actual.add('5'))).to.be.equal(expected);
    });
    it('should subtract 5 as num and with get() to return the result -5', function () {
        let expected = -5;
        let actual = createCalculator();
        expect(actual.get(actual.subtract(5))).to.be.equal(expected);
    });
    it('should subtract 5 as string and with get() to return the result -5', function () {
        let expected = -5;
        let actual = createCalculator();
        expect(actual.get(actual.subtract('5'))).to.be.equal(expected);
    });
});