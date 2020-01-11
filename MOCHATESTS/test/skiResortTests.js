let expect = require('chai').expect;
let SkiResort = require("../skiResort.js").SkiResort;

describe('SkiResort', function () {
    it('should constr', function () {
        let resort = new SkiResort('asd');
        expect(resort.name).to.be.equal('asd');
        expect(resort.voters).to.be.equal(0);
        expect(resort.hotels.length).to.be.equal(0);
        expect(resort.hotels).to.have.deep.equal([]);
    });
    it('should return for voters 0', function () {
        let resort = new SkiResort('asd');
        expect(resort.bestHotel).to.be.equal('No votes yet');
    });
    it('should build tests', function () {
        let resort = new SkiResort('asd');
        let msg = resort.build('asd2', 10);
        expect(msg).to.be.equal('Successfully built new hotel - asd2');
        expect(resort.hotels.length).to.be.equal(1);
        expect(resort.hotels[0]).to.have.deep.equal({name: 'asd2', beds: 10, points: 0});
    });
    it('should book tests', function () {
        let resort = new SkiResort('asd');
        let msg = "";

        try {
            resort.book('', 2);
        } catch (e) {
            msg = e.message;
        }
        expect(msg).to.be.equal('Invalid input');
    });
    it('should throw', function () {
        let resort = new SkiResort('asd');
        let msg = "";

        try {
            resort.book('asd2', 2);
        } catch (e) {
            msg = e.message;
        }
        expect(msg).to.be.equal('There is no such hotel');
    });
    it('should throw no more beds', function () {
        let resort = new SkiResort('asd');
        resort.build('asd2', 2);
        let msg = "";

        try {
            resort.book('asd2', 20);
        } catch (e) {
            msg = e.message;
        }
        expect(msg).to.be.equal('There is no free space');
    });
    it('should return for booked', function () {
        let resort = new SkiResort('asd');
        resort.build('asd2', 20);
        let msg = resort.book('asd2', 2);

        expect(msg).to.be.equal('Successfully booked');
        expect(resort.hotels[0].beds).to.be.equal(18);
    });


    describe('leave tests', function () {
        it('should throw if hotel doesnt exist', function () {
            let resort = new SkiResort('asd');
            resort.build('asd2', 20);

            resort.book('asd2', 2);
            expect(resort.leave('asd2', 2, 2)).to.be.equal('2 people left asd2 hotel');
            resort.leave('asd2', 2, 2);
            expect(resort.hotels[0].points).to.be.equal(8);
            let msg = resort.bestHotel;
            expect(msg).to.be.equal('Best hotel is asd2 with grade 8. Available beds: 22');
            let msg2 = resort.averageGrade();
            expect(msg2).to.be.equal('Average grade: 2.00');
        });
        it('should return no votes', function () {
            let resort = new SkiResort('asd');
            resort.build('asd', 2);
            let msg = resort.averageGrade();
            expect(msg).to.be.equal('No votes yet');
        });
    });
});

