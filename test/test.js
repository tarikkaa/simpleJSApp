let calc = require("/Users/tar/simpleJSApp/calc.js");
let assert = require('assert');


describe('Calculator', function () {
it('Result - plus/positive', function () {
    assert.equal("8 (4+4)", calc.calc(4, 4, "+"));
    });
});

describe('Calculator', function () {
    it('Result - minus/positive', function () {
        assert.equal("8 (16-8)", calc.calc(16, 8, "-"));
        });
    });

describe('Calculator', function () {
it('Result - multiple/positive', function () {
    assert.equal("16 (4*4)", calc.calc(4, 4, "*"));
    });
});

describe('Calculator', function () {
    it('Result - divide/positive', function () {
        assert.equal("2 (16/8)", calc.calc(16, 8, "/"));
        });
    });



describe('Calculator', function () {
it('Result - plus/negative', function () {
    assert.equal("5 (4+4)", calc.calc(4, 4, "+"));
    });
});

describe('Calculator', function () {
    it('Result - minus/negative', function () {
        assert.equal("8 (16-9)", calc.calc(16, 8, "-"));
        });
    });

describe('Calculator', function () {
it('Result - multiple/negative', function () {
    assert.equal("16 (3*4)", calc.calc(4, 4, "*"));
    });
});

describe('Calculator', function () {
    it('Result - divide/negative', function () {
        assert.equal("3 (16/8)", calc.calc(16, 8, "/"));
        });
    });


describe('Calculator', function () {
    it('Result - not a number/positive', function () {
        assert.equal("Check is first two inputs are numbers", calc.calc(16, "e", "/"));
        });
    });

describe('Calculator', function () {
    it('Result - not a number/negative', function () {
        assert.notEqual("Check is first two inputs are numbers", calc.calc(16, 3, "/"));
        });
    });


describe('Calculator', function () {
    it('Result - wrong operator/positive', function () {
        assert.equal('Check if the third input is one of: "+", "-", "*", "/"', calc.calc(16, 3, "a"));
        });
    });

describe('Calculator', function () {
    it('Result - wrong operator/negative', function () {
        assert.notEqual('Check if the third input is one of: "+", "-", "*", "/"', calc.calc(16, "a", "/"));
        });
    });


