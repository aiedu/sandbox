const vm = require("vm");
const util = require("util");
const assert = require("assert");
const Core = require("./core");

module.exports = class Javascript extends Core { 
    constructor ( options ){
        super();
        this.options = options;
        this.version = this.options.version;
    }
    compile ( code ){
        return new vm.Script( code );
    }   
    exec ( code ){
        let t0 = +new Date();
        this.compile( code ).runInNewContext({
            assert: assert
        }, {
            timeout: 2000
        });
        return {
            time: +new Date() - t0
        }
    }
    run ( code ){
        return this.exec( code );
    }
}       