let expect = require('chai').expect;
let rgbToHexColor = require("../rgb-to-hex.js").rgbToHexColor;

describe("rgbToHexColor(r, g, b) should check if the params are correct and in range", function () {
    it('should return "undefined" if some of params are below 0', function () {
        expect(rgbToHexColor(-1, 0, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, -1, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 0, -1)).to.be.equal(undefined);
    });
    it('should return "undefined" if some of params are not number', function () {
        expect(rgbToHexColor('0', 0, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, '0', 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 0, '0')).to.be.equal(undefined);
    });
    it('should return "undefined" if some of params are more than 255', function () {
        expect(rgbToHexColor(256, 0, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 256, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 0, 256)).to.be.equal(undefined);
    });
    it('should return "undefined" if some of params are float numbers', function () {
        expect(rgbToHexColor(2.5, 0, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 2.5, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 0, 2.5)).to.be.equal(undefined);
    });
    it('should return "#000000" if params are 0, 0, 0', function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it('should return "#FFFFFF" if params are 255, 255, 255', function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
});
