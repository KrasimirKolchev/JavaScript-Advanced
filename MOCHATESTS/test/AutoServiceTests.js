let expect = require('chai').expect;
let AutoService = require("../AutoService.js").AutoService;

describe('AutoService() Tests', function () {
    const DEFAULT_CLIENT = 'Peter';
    const DEFAULT_PLATE = 'CA1234CA';
    const DEFAULT_CAR = "{'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}";
    const DEFAULT_CARINFO_MSG = 'There is no car with platenumber CA1234CA and owner Peter.';
    const DEFAULT_CAR_OBJECT = {
            plateNumber: `${DEFAULT_PLATE}`,
            clientName: `${DEFAULT_CLIENT}`,
            carInfo: `${DEFAULT_CAR}`
        };

    let service;
    beforeEach(function () {
        service = new AutoService(2);
    });

    describe('constructor tests', function () {
        it('should be instantiated with value capacity and properties must be correctly set', function () {
            expect(service.hasOwnProperty('garageCapacity'));
            expect(service.garageCapacity).to.be.equal(2);
            expect(service.hasOwnProperty('workInProgress'));
            expect(service.workInProgress).to.have.deep.equal([]);
            expect(service.hasOwnProperty('backlogWork'));
            expect(service.backlogWork).to.have.deep.equal([]);
        });
        it('should have correctly working accessor', function () {
            service.signUpForReview(DEFAULT_CLIENT, DEFAULT_PLATE, DEFAULT_CAR);
            expect(service.availableSpace).to.be.equal(1);
        });
    });
    describe('signUpForReview(clientName, plateNumber, carInfo) tests', function () {
        it("should add the car to backlogWork if there isn't enough space", function () {
            let garage = new AutoService(0);
            garage.signUpForReview(DEFAULT_CLIENT, DEFAULT_PLATE, DEFAULT_CAR);
            expect(garage.backlogWork.length).to.be.equal(1);
            let actual = garage.backlogWork[0];
            expect(actual).to.have.deep.equal(DEFAULT_CAR_OBJECT);

        });
        it("should add the car to workInProgress if there is enough space", function () {
            service.signUpForReview(DEFAULT_CLIENT, DEFAULT_PLATE, DEFAULT_CAR);
            expect(service.workInProgress.length).to.be.equal(1);
        });
        it("should add the car to workInProgress if there is enough space and the car be equal", function () {
            service.signUpForReview(DEFAULT_CLIENT, DEFAULT_PLATE, DEFAULT_CAR);
            let actual = service.workInProgress[0];
            expect(actual).to.have.deep.equal(DEFAULT_CAR_OBJECT);
        });
    });
    describe('carInfo(clientName, plateNumber) tests', function () {
        it('should return msg if the client is not found', function () {
            let actual = service.carInfo('CA1234CA', 'Peter');
            expect(actual).to.be.equal(DEFAULT_CARINFO_MSG);
        });
        it('should return object if the client is found', function () {
            service.signUpForReview(DEFAULT_CLIENT, DEFAULT_PLATE, DEFAULT_CAR);
            let actual = service.carInfo(DEFAULT_PLATE, DEFAULT_CLIENT);
            expect(typeof actual).to.be.equal('object');
            expect(actual).to.have.deep.equal(DEFAULT_CAR_OBJECT);
        });
    });
    describe('repairCar() tests', function () {
        it('should return msg if there are no clients', function () {
            let msg = service.repairCar();
            expect(msg).to.be.equal('No clients, we are just chilling...');
        });
        it('should return msg for repaired car', function () {
            let autoService = new AutoService(2);
            autoService.signUpForReview('Peter', 'CA1234CA',
                {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            autoService.signUpForReview('Philip', 'PB4321PB',
                {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
            let msg = autoService.repairCar();
            expect(msg).to.be.equal('Your doors were repaired.');
        });
        it('should return msg for if the car doesnt need of repair', function () {
            let autoService = new AutoService(2);
            autoService.signUpForReview('Peter', 'CA1234CA',
                {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            autoService.signUpForReview('Philip', 'PB4321PB',
                {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
            autoService.repairCar();
            let msg = autoService.repairCar();
            expect(msg).to.be.equal('Your car was fine, nothing was repaired.');
        });
    });
});

