let expect = require('chai').expect;
let PaymentPackage = require("../PaymentPackage.js").PaymentPackage;

describe('PaymentPackage class tests', function () {
    const INITIAL_NAME = "Krasi";
    const INITIAL_NAME_ = "Test";
    const INITIAL_VALUE = 100;
    const INITIAL_VALUE_ = 10;
    const INVALID_NAME_1 = "";
    const INVALID_NAME_2 = 123;
    const INVALID_VALUE_1 = '1';
    const INVALID_VALUE_2 = -100;
    const ERROR_FOR_NAME = Error('Name must be a non-empty string');
    const ERROR_FOR_VALUE = Error('Value must be a non-negative number');
    const ERROR_FOR_VAT = Error('VAT must be a non-negative number');
    const ERROR_FOR_ACTIVE = Error('Active status must be a boolean');
    let EXPECTED_ERROR_NAME;
    let EXPECTED_ERROR_MSG;
    let INITIAL_OUTPUT = 'Package: Krasi\n' + '- Value (excl. VAT): 100\n' + '- Value (VAT 20%): 120';
    let INITIAL_OUTPUT_ = 'Package: Test (inactive)\n' + '- Value (excl. VAT): 10\n' + '- Value (VAT 10%): 11';


    let paymentPackage;
    beforeEach(function () {
        paymentPackage = new PaymentPackage(INITIAL_NAME, INITIAL_VALUE);
    });
    
    describe('constructor tests', function () {
        it('should throw Error if wrong first param passed', function () {
            let throwMsg;
            let errorType;
            EXPECTED_ERROR_NAME = ERROR_FOR_NAME.name;
            EXPECTED_ERROR_MSG = ERROR_FOR_NAME.message;

            try {
                let testPack = new PaymentPackage(INVALID_NAME_1, INITIAL_VALUE);
            } catch (e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(throwMsg).to.be.equal(EXPECTED_ERROR_MSG);
            expect(errorType).to.be.equal(EXPECTED_ERROR_NAME);
        });
        it('should throw Error if wrong first param passed_', function () {
            let throwMsg;
            let errorType;
             EXPECTED_ERROR_NAME = ERROR_FOR_NAME.name;
            EXPECTED_ERROR_MSG = ERROR_FOR_NAME.message;

            try {
                let testPack = new PaymentPackage(INVALID_NAME_2, INITIAL_VALUE);
            } catch (e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(throwMsg).to.be.equal(EXPECTED_ERROR_MSG);
            expect(errorType).to.be.equal(EXPECTED_ERROR_NAME);
        });
        it('should throw Error if wrong second param passed', function () {
            let throwMsg;
            let errorType;
            EXPECTED_ERROR_NAME = ERROR_FOR_VALUE.name;
            EXPECTED_ERROR_MSG = ERROR_FOR_VALUE.message;

            try {
                let testPack = new PaymentPackage(INITIAL_NAME, INVALID_VALUE_1);
            } catch (e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(throwMsg).to.be.equal(EXPECTED_ERROR_MSG);
            expect(errorType).to.be.equal(EXPECTED_ERROR_NAME);
        });
        it('should throw Error if wrong second param passed_', function () {
            let throwMsg;
            let errorType;
            EXPECTED_ERROR_NAME = ERROR_FOR_VALUE.name;
            EXPECTED_ERROR_MSG = ERROR_FOR_VALUE.message;

            try {
                let testPack = new PaymentPackage(INITIAL_NAME, INVALID_VALUE_2);
            } catch (e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(throwMsg).to.be.equal(EXPECTED_ERROR_MSG);
            expect(errorType).to.be.equal(EXPECTED_ERROR_NAME);
        });
        it('should work properly with correct parameters', function () {
            expect(paymentPackage.toString()).to.be.equal(INITIAL_OUTPUT);
        });
    });
    describe('get/set name tests', function () {
        it('should check if initial name is correct', function () {
            let test = new PaymentPackage(INITIAL_NAME, INITIAL_VALUE);
            let actual = test.name;
            expect(actual).to.be.equal(INITIAL_NAME);
        });
        it('should change the name', function () {
            paymentPackage.name = INITIAL_NAME_;
            let actual = paymentPackage.name;
            expect(actual).to.be.equal(INITIAL_NAME_);
        });
        it('should throw if wrong param passed', function () {
            let throwMsg;
            let errorType;
            EXPECTED_ERROR_NAME = ERROR_FOR_NAME.name;
            EXPECTED_ERROR_MSG = ERROR_FOR_NAME.message;

            try {
                let test = new PaymentPackage(INITIAL_NAME, INITIAL_VALUE);
                test.name = INVALID_NAME_1;
            } catch (e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(EXPECTED_ERROR_MSG).to.be.equal(throwMsg);
            expect(EXPECTED_ERROR_NAME).to.be.equal(errorType);
        });
    });
    describe('get/set value tests', function () {
        it('should check if initial value is correct', function () {
            let test = new PaymentPackage(INITIAL_NAME, INITIAL_VALUE);
            let actual = test.value;
            expect(actual).to.be.equal(INITIAL_VALUE);
        });
        it('should change the value', function () {
            paymentPackage.value = INITIAL_VALUE_;
            let actual = paymentPackage.value;
            expect(actual).to.be.equal(INITIAL_VALUE_);
        });
        it('should throw if wrong param passed', function () {
            let throwMsg;
            let errorType;
            EXPECTED_ERROR_NAME = ERROR_FOR_VALUE.name;
            EXPECTED_ERROR_MSG = ERROR_FOR_VALUE.message;

            try {
                let test = new PaymentPackage(INITIAL_NAME, INITIAL_VALUE);
                test.value = INVALID_VALUE_2;
            } catch (e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(EXPECTED_ERROR_MSG).to.be.equal(throwMsg);
            expect(EXPECTED_ERROR_NAME).to.be.equal(errorType);
        });
        it("Value get/set test", function() {
            let actual = new PaymentPackage(INITIAL_NAME, 1);
            actual.value = 0;
            assert.equal(actual.value, 0);
        });
    });
    describe('get/set VAT tests', function () {
        it('should check if initial VAT is correct', function () {
            const INITIAL_VAT = 20;
            let actual = paymentPackage.VAT;
            expect(actual).to.be.equal(INITIAL_VAT);
        });
        it('should change the VAT', function () {
            paymentPackage.VAT = INITIAL_VALUE_;
            let actual = paymentPackage.VAT;
            expect(actual).to.be.equal(INITIAL_VALUE_);
        });
        it('should throw if wrong param passed', function () {
            try {
                let throwMsg;
                let errorType;
                EXPECTED_ERROR_NAME = ERROR_FOR_VAT.name;
                EXPECTED_ERROR_MSG = ERROR_FOR_VAT.message;

                try {
                    let test = new PaymentPackage(INITIAL_NAME, INITIAL_VALUE);
                    test.VAT = INVALID_VALUE_2;
                } catch(e) {
                    throwMsg = e.message;
                    errorType = e.name;
                }

                expect(EXPECTED_ERROR_MSG).to.be.equal(throwMsg);
                expect(EXPECTED_ERROR_NAME).to.be.equal(errorType);
            } catch (e) {

            }
        });
        it('should throw if wrong param passed_', function () {
            let throwMsg;
            let errorType;
            EXPECTED_ERROR_NAME = ERROR_FOR_VAT.name;
            EXPECTED_ERROR_MSG = ERROR_FOR_VAT.message;

            try {
                let test = new PaymentPackage(INITIAL_NAME, INITIAL_VALUE);
                test.VAT = INVALID_VALUE_1;
            } catch(e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(EXPECTED_ERROR_MSG).to.be.equal(throwMsg);
            expect(EXPECTED_ERROR_NAME).to.be.equal(errorType);
        });
    });
    describe('get/set active tests ', function () {
        it('should check if initial active is correct', function () {
            const INITIAL_ACTIVE = true;
            let actual = paymentPackage.active;
            expect(actual).to.be.equal(INITIAL_ACTIVE);
        });
        it('should change default status to false', function () {
            paymentPackage.active = false;
            let actual = paymentPackage.active;
            expect(actual).to.be.equal(false);
        });
        it('should throw if wrong param passed', function () {
            let throwMsg;
            let errorType;
            EXPECTED_ERROR_NAME = ERROR_FOR_ACTIVE.name;
            EXPECTED_ERROR_MSG = ERROR_FOR_ACTIVE.message;

            try {
                let test = new PaymentPackage(INITIAL_NAME, INITIAL_VALUE);
                test.active = null;
            } catch(e) {
                throwMsg = e.message;
                errorType = e.name;
            }

            expect(EXPECTED_ERROR_MSG).to.be.equal(throwMsg);
            expect(EXPECTED_ERROR_NAME).to.be.equal(errorType);
        });
    });
    describe('toString test', function () {
        it('should change the initial string', function () {
            let test = paymentPackage;
            test.name = INITIAL_NAME_;
            test.value = INITIAL_VALUE_;
            test.VAT = INITIAL_VALUE_;
            test.active = false;
            let actual = test.toString();
            expect(actual).to.be.equal(INITIAL_OUTPUT_);
        });
    });
});