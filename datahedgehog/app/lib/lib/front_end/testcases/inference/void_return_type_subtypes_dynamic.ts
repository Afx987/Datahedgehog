/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/void_return_type_subtypes_dynamic.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var run : <T>(f : <T>() => T) => T = <T>(f : <T>() => T) : T =>  {
    core.print("running");
    let t = f();
    core.print("done running");
    return t;
};
export var printRunning : () => void = () : void =>  {
    core.print("running");
};
export var main : () => any = () =>  {
    var printRunning : () => void = () : void =>  {
        core.print("running");
    };
    let x = run(printRunning);
    let y = run(printRunning);
    x = 123;
    x = 'hi';
    y = 123;
    y = 'hi';
};
export class properties {
    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = run(printRunning);
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

    private static __$y;
    static get y() { 
        if (this.__$y===undefined) {
            this.__$y = run(printRunning);
        }
        return this.__$y;
    }
    static set y(__$value : any)  { 
        this.__$y = __$value;
    }

}
