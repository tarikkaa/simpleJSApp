let calc = require("/Users/tar/simpleJSApp/calc.js");
let chai = require('chai');

//used chai assert
describe('Calculator_2', function () {
it('Result - plus/positive', function () {
    chai.assert.equal ("8 (4+4)", calc.calc(4, 4, "+"));
    });
});