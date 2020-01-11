let expect = require('chai').expect;
let isOddOrEven = require("../isOddOrEven.js").isOddOrEven;

describe("isOddOrEven tests", function () {
    it('should return undefined if not string param passed: 123', function () {
        let actual = isOddOrEven(123);
        let expected = undefined;
        expect(actual).to.be.equal(expected);
    });
    it('should return undefined if not string param passed: ["1", "1"]', function () {
        let actual = isOddOrEven(["1", "1"]);
        let expected = undefined;
        expect(actual).to.be.equal(expected);
    });
    it('should return even for string "asdf"', function () {
        let actual = isOddOrEven('asdf');
        let expected = 'even';
        expect(actual).to.be.equal(expected);
    });
    it('should return odd for string "table"', function () {
        let actual = isOddOrEven('asd');
        let expected = 'odd';
        expect(actual).to.be.equal(expected);
    });
});