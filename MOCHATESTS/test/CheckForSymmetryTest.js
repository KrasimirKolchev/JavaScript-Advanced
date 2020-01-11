let expect = require('chai').expect;
let isSymmetric = require("../CheckForSymmetry.js").isSymmetric;

describe("isSymmetric(arr) - should check if the array is symmetric", function () {
    it('should return false for "smth', function () {
        let actual = isSymmetric("smth");
        let expected = false;
        expect(actual).to.be.equal(expected);
    });
    it('should return false for {a: 1, b: 2, c: 1}', function () {
        let actual = isSymmetric({a: 1, b: 2, c: 1});
        let expected = false;
        expect(actual).to.be.equal(expected);
    });
    it('should return false for [1, 2, 3]', function () {
        let actual = isSymmetric([1, 2, 3]);
        let expected = false;
        expect(actual).to.be.equal(expected);
    });
    it('should return true for ["a", "b", "a"]', function () {
        let actual = isSymmetric(["a", "b", "a"]);
        let expected = true;
        expect(actual).to.be.equal(expected);
    });
    it('should return true for [1]', function () {
        let actual = isSymmetric([1]);
        let expected = true;
        expect(actual).to.be.equal(expected);
    });
    it('should return false for [1, 2, 2, "1"]', function () {
        let actual = isSymmetric([1, 2, 2, "1"]);
        let expected = false;
        expect(actual).to.be.equal(expected);
    });
});