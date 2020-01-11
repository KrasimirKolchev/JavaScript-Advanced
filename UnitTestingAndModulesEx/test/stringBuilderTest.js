let expect = require('chai').expect;
let StringBuilder = require("../stringBuilder.js").StringBuilder;

describe("StringBuilder() class tests", function () {
    const EXPECTED_ERROR = new TypeError('Argument must be string');
    const EXPECTED_THROW_MESSAGE = EXPECTED_ERROR.message;
    const EXPECTED_ERROR_NAME = EXPECTED_ERROR.name;
    const TEST_STRING_1 = 'Tests';
    const TEST_STRING_2 = 'Hello';
    const TEST_STRING_INVALID = 123;

    let stringBuilder;
    beforeEach(function () {
        stringBuilder = new StringBuilder(TEST_STRING_1);
    });

    describe("constructor tests", function () {
        it('should throw Type Error with msg "Argument must be string" if param not string', function () {
            let throwMsg;
            let errorType;

            try {
                let sBuilder = new StringBuilder(TEST_STRING_INVALID);
            } catch (e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(throwMsg).to.be.equal(EXPECTED_THROW_MESSAGE);
            expect(errorType).to.be.equal(EXPECTED_ERROR_NAME);
        });
        it('should be instantiated without parameter', function () {
            let testSB = new StringBuilder();
            let actual = testSB.toString();
            expect(actual).to.be.equal("");
        });
        it('should be instantiated with string parameter', function () {
            expect(stringBuilder.toString()).to.be.equal(TEST_STRING_1);
        });
        it('should work proper with initial empty constructor', function () {
            let sb = new StringBuilder();
            sb.append(TEST_STRING_2);
            sb.prepend(TEST_STRING_1);
            sb.insertAt(TEST_STRING_1, 5);
            sb.remove(5, 10);
            let res = sb.toString();
            expect(res).to.be.equal(TEST_STRING_1);
        });
    });
    describe('append() function tests', function () {
        it('should check if exist', function () {
            expect(typeof StringBuilder.prototype.append).to.be.equal('function');
        });
        it('should throw TypeError if invalid argument passed', function () {
            let throwMsg;
            let errorType;

            try {
                let sBuilder = stringBuilder.append(TEST_STRING_INVALID);
            } catch (e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(throwMsg).to.be.equal(EXPECTED_THROW_MESSAGE);
            expect(errorType).to.be.equal(EXPECTED_ERROR_NAME);
        });
        it('should append text to the end', function () {
            let result = TEST_STRING_1 + TEST_STRING_2;
            stringBuilder.append(TEST_STRING_2);
            expect(stringBuilder.toString()).to.be.equal(result);
        });
    });
    describe('prepend() function tests', function () {
        it('should check if exist', function () {
            expect(typeof StringBuilder.prototype.prepend).to.be.equal('function');
        });
        it('should throw TypeError if invalid argument passed', function () {
            let throwMsg;
            let errorType;

            try {
                let sBuilder = stringBuilder.prepend(TEST_STRING_INVALID);
            } catch (e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(throwMsg).to.be.equal(EXPECTED_THROW_MESSAGE);
            expect(errorType).to.be.equal(EXPECTED_ERROR_NAME);
        });
        it('should append text at the beginning', function () {
            let result = TEST_STRING_2 + TEST_STRING_1;
            stringBuilder.prepend(TEST_STRING_2);
            expect(stringBuilder.toString()).to.be.equal(result);
        });
    });
    describe('insertAt() function tests', function () {
        it('should check if exist', function () {
            expect(typeof StringBuilder.prototype.insertAt).to.be.equal('function');
        });
        it('should throw TypeError if invalid argument passed', function () {
            let throwMsg;
            let errorType;

            try {
                let sBuilder = stringBuilder.insertAt(TEST_STRING_INVALID, 1);
            } catch (e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(throwMsg).to.be.equal(EXPECTED_THROW_MESSAGE);
            expect(errorType).to.be.equal(EXPECTED_ERROR_NAME);
        });
        it('should insert text at the given index', function () {
            let result = 'T' + TEST_STRING_2 + 'ests';
            stringBuilder.insertAt(TEST_STRING_2, 1);
            expect(stringBuilder.toString()).to.be.equal(result);
        });
    });
    describe('remove() function tests', function () {
        it('should check if exist', function () {
            expect(typeof StringBuilder.prototype.remove).to.be.equal('function');
        });
        it('should insert text at the given index', function () {
            let result = TEST_STRING_2;
            stringBuilder.append(TEST_STRING_2);
            stringBuilder.remove(0, 5);
            expect(stringBuilder.toString()).to.be.equal(result);
        });
    });
    describe('toString() function tests', function () {
        it('should return appended string', function () {
            let result = TEST_STRING_1 + TEST_STRING_2;
            stringBuilder.append(TEST_STRING_2);
            expect(stringBuilder.toString()).to.be.equal(result);
        });
    });
});
