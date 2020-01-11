let expect = require('chai').expect;
let mathEnforcer = require("../mathEnforcer.js").mathEnforcer;

describe("mathEnforcer() should work correctly", function () {
    describe("addFive()", function () {
        it('should return "undefined" addFive() param is not number', function () {
            expect(mathEnforcer.addFive('1')).to.be.equal(undefined);
        });
        it('should return "6" if 1 passed to addFive()', function () {
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
        });
        it('should return "6.5" if 1.5 passed to addFive()', function () {
            expect(mathEnforcer.addFive(1.5)).to.be.equal(6.5);
        });
        it('should return "0" if -5 passed to addFive()', function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it('should return "3.5" if -1.5 passed to addFive()', function () {
            expect(mathEnforcer.addFive(-1.5)).to.be.equal(3.5);
        });
    });

    describe("subtractTen()", function () {
        it('should return "undefined" subtractTen() param is not number', function () {
            expect(mathEnforcer.subtractTen('1')).to.be.equal(undefined);
        });
        it('should return "-11.1" if -1.1 passed to subtractTen()', function () {
            expect(mathEnforcer.subtractTen(-1.1)).to.be.equal(-11.1);
        });
        it('should return "0" if 10 passed to subtractTen()', function () {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        it('should return "-20" if -10 passed to subtractTen()', function () {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
        it('should return "-8.5" if 1.5 passed to subtractTen()', function () {
            expect(mathEnforcer.subtractTen(1.5)).to.be.equal(-8.5);
        });
    });

    describe("sum()", function () {
        it('should return "undefined" sum() first param is not number', function () {
            expect(mathEnforcer.sum('1', 1)).to.be.equal(undefined);
        });
        it('should return "undefined" sum() second param is not number', function () {
            expect(mathEnforcer.sum(1, '1')).to.be.equal(undefined);
        });
        it('should return "undefined" sum() both params are not number', function () {
            expect(mathEnforcer.sum('1', '1')).to.be.equal(undefined);
        });
        it('should return "3" if sum() first param 1, second param 2', function () {
            expect(mathEnforcer.sum(1, 2)).to.be.equal(3);
        });
        it('should return "3.3" if sum() first param 1.1, second param 2.2', function () {
            expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.1);
        });
        it('should return "-3.3" if sum() first param -1.1, second param -2.2', function () {
            expect(mathEnforcer.sum(-1.1, -2.2)).to.be.closeTo(-3.3, 0.1);
        });
        it('should return "-2" if sum() first param -1, second param -1', function () {
            expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2);
        });
        it("should return 3.11 when input is 1.5 + 1.61", function () {
            expect(mathEnforcer.sum(1.5, 1.61)).to.be.closeTo(3.11, 0.01);
        });
    });
});