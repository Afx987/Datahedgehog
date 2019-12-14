/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/expressions.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : (_namedArguments? : {fisk? : any}) => any = (_namedArguments? : {fisk? : any}) =>  {
    let {fisk} = Object.assign({
    }, _namedArguments );
    core.print(fisk);
};
export var caller : (f : any) => any = (f : any) =>  {
    f();
};
export var main : () => any = () =>  {
    let i : number = 0;
    core.print(i == 1 ? "bad" : "good");
    core.print(`${i}`);
    core.print(`'${i}'`);
    core.print(` '${i}' `);
    core.print(` '${i}' '${i}'`);
    core.print(` '${i}' '${i}'`);
    core.print("foo" + "bar");
    core.print(` '${i}' '${i}'` + ` '${i}' '${i}'`);
    try {
        throw "fisk";
    } catch (__error__) {

        if (is(__error__,string)){
            let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
            let e : string = __error__;
            core.print(e);
            if (s != null) core.print(s);
        }
    }
    for(; false; ){
    }
    let list = new core.DartList.literal("Hello, World!");
    core.print(list[i]);
    list[i] = "Hello, Brave New World!";
    core.print(list[i]);
    i = 87;
    core.print(-i);
    core.print(~i);
    core.print(!(i == 42));
    core.print(--i);
    core.print(++i);
    core.print(i--);
    core.print(i++);
    core.print(new core.DartObject());
    core.print(new core.DartObject());
    core.print((new core.DartList<string>(2)).runtimeType);
    foo({
        fisk : "Blorp gulp"});
    var f : () => any = () =>  {
        core.print("f was called");
    };
    caller(f);
    caller(() =>  {
        core.print("<anon> was called");
    });
    var g : (message? : any) => any = (message? : any) =>  {
        core.print(message);
    };
    g("Hello, World");
    caller((x? : any) =>  {
        core.print(`<anon> was called with ${x}`);
    });
    var h : (_namedArguments? : {message? : any}) => any = (_namedArguments? : {message? : any}) =>  {
        let {message} = Object.assign({
        }, _namedArguments );
        core.print(message);
    };
    h({
        message : "Hello, World"});
    caller((_namedArguments? : {x? : any}) =>  {
        let {x} = Object.assign({
        }, _namedArguments );
        core.print(`<anon> was called with ${x}`);
    });
    core.print((number).toString());
    core.print(number);
    core.print(((_) : core.Type =>  {
        {
            toString();
            return _;
        }
    })(number));
    try {
        core.print(((_570_)=>(!!_570_)?_570_.toString():null)(number));
        throw "Shouldn't work";
    } catch (__error__) {

        if (is(__error__,core.NoSuchMethodError)){
            let e : core.NoSuchMethodError = __error__;
            core.print(`As expected: ${e}`);
        }
    }
    core.print(core.DartInt.parse("42"));
};
export class properties {
}
