const LangEnum = require("./enum/lang");
const Javascript = require("./lang/javascript");

module.exports = {
    run ( code, options = {}){
        language = options.language && options.language.toLowerCase();
        return new Promise(( resolve, reject ) => {
            try {
                switch( language ){
                    case LangEnum.Javascript: {
                        var javascript = new Javascript({
                            version: options.version || 'ES2015'
                        });
                        //获取全部测试用例
                        let cases = options.cases.split(';').filter( t => {
                            //去除前后括号
                            return !!t.replace(/^\s+|\s+$/g, "");
                        });
                        //测试用例个数
                        let casesLength = cases.length;
                        //测试用例通过数
                        let pass = 0;
                        //记录平均用时
                        let timeCosts = 0;

                        //每个用例都单独跑
                        for( let i = 0; i < casesLength; i++ ){
                            let runCode = code + ';' + cases[ i ];
                            try {
                                let r = javascript.run( runCode );
                                timeCosts += r.time;
                                pass++;
                            } catch ( e ){
                                reject(Object.assign( e, {
                                    //返回未通过的用例
                                    code: cases[ i ],
                                    //用例通过比率
                                    ratio: (pass / casesLength).toFixed( 2 )
                                }));
                                break;
                            }
                        }
                        resolve({
                            time: (timeCosts / casesLength).toFixed( 3 )
                        });
                        break;
                    }
                    case LangEnum.HTML: {
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
                    default: {
                        reject({ message: 'not support the language:' + language });
                    }
                }
            } catch( e ){
                reject( e );
            }
        });
    }   
};