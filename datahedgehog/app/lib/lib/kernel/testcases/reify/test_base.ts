/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/test_base.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var expectIs : (expected : any,actual : any,note? : string) => any = (expected : any,actual : any,note? : string) =>  {
    if (expected != actual) {
        if (note != null) {
            throw `Expected: '${expected}': ${note}, actual: '${actual}'`;
        }
        throw `Expected: '${expected}', actual: '${actual}'`;
    }
};
export var expectTrue : (actual : any) => any = (actual : any) =>  {
    return expectIs(true,actual);
};
export var expectFalse : (actual : any) => any = (actual : any) =>  {
    return expectIs(false,actual);
};
export var expectThrows : (f : () => any,test : (e : any) => any) => any = (f : () => any,test : (e : any) => any) =>  {
    let exception = false;
    let note : string = null;
    try {
        f();
    } catch (__error__) {

        {
            let e = __error__;
            exception = test(e);
            if (!exception) {
                note = `${e} [${e.runtimeType}]`;
            }
        }
    }
    expectIs(true,exception,note);
};
export var expectOutput : (expected : string) => any = (expected : string) =>  {
    return expectIs(expected,properties.output);
};
export var write : (o : any) => any = (o : any) =>  {
    properties.output = properties.output == null ? `${o}` : `${properties.output}\n${o}`;
};
export class properties {
    private static __$output : string;
    static get output() : string { 
        return this.__$output;
    }
    static set output(__$value : string)  { 
        this.__$output = __$value;
    }

}
