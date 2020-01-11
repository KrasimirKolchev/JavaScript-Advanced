let expect = require('chai').expect;
let lookupChar = require("../lookupChar.js").lookupChar;

describe("lookupChar() checks if function that retrieves a char at a given index from a passed in string", function () {
    it('should return undefined if not string as param 1 passed: [1, 1], 1', function () {
        let actual = lookupChar([1, 1], 1);
        let expected = undefined;
        expect(actual).to.be.equal(expected);
    });
    it('should return undefined if integer is passed as param 1: 123, 1', function () {
        let actual = lookupChar(123, 1);
        let expected = undefined;
        expect(actual).to.be.equal(expected);
    });
    it('should return undefined if second param is not integer: "test", "1"', function () {
        let actual = lookupChar("test", "1");
        let expected = undefined;
        expect(actual).to.be.equal(expected);
    });
    it('should return undefined if second param is float number: "test", 1.1', function () {
        let actual = lookupChar("test", 1.1);
        let expected = undefined;
        expect(actual).to.be.equal(expected);
    });
    it('should return "Incorrect index" if given index is less than 0 : "test", -1', function () {
        let actual = lookupChar("test", -1);
        let expected = "Incorrect index";
        expect(actual).to.be.equal(expected);
    });
    it('should return "Incorrect index" if given index is more than string length : "test", 5', function () {
        let actual = lookupChar("test", 5);
        let expected = "Incorrect index";
        expect(actual).to.be.equal(expected);
    });
    it('should return "s" at the given index : "test", 2', function () {
        let actual = lookupChar("test", 2);
        let expected = "s";
        expect(actual).to.be.equal(expected);
    });
});
