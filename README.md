# sandbox
ai edu runtime sandbox

## 支持多语言

### api:
- run( lang, code, options );

    ex:
    run('javascript', 'var a = 1; console.log(a);', { 
        warning: true,
        version: 'ES2016'
    });

    run('python', 'a = 1; print a;', {
        version: '2.7.10'
    });

    //success
    return {
        error: `stack`, //...
        result: undefined,  //...
        lang: 'javascript',
        code: `code`,
        version: 'ES2016',
        time: 1200
    };

- test( lang, code, cases, options )

    ex: 
    run('javascript', 'function ex (){ return 1; }', [
        [ 1,2,3 ].indexOf( ex() ).should.equal( 0 );
    ]);