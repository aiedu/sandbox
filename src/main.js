var LangEnum = require("./enum/lang");
var Javascript = require("./lang/javascript");

module.exports = {
    run ( lang, code, options = {}){
        lang = lang && lang.toLowerCase();
        return new Promise(( resolve, reject ) => {
            try {
                switch( lang ){
                    case LangEnum.Javascript: {
                        var l = new Javascript({
                            version: options.version || 'ES2015'
                        });
                        resolve(l.run( code ));
                        break;  
                    }
                    case LangEnum.Java: {
                        break;
                    }
                    case LangEnum.C: {
                        break;
                    }
                    case LangEnum.Python: {
                        break;
                    }
                }
            } catch( e ){
                reject( e );
            }
        });
    }   
};  