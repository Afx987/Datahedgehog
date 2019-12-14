/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/accessors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    try {
        core.print(onlySetter);
        throw "No error thrown";
    } catch (__error__) {

        if (is(__error__,core.NoSuchMethodError)){
            let e : core.NoSuchMethodError = __error__;
            core.print(`Expected error: ${e}`);
        }
    }
    properties.onlySetter = "fisk";
    new C().testC();
    new D().testD();
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    set onlySetter(value : any) {
        core.print(`C.onlySetter called with ${value}.`);
    }
    testC() {
        try {
            core.print(onlySetter);
            throw "No error thrown";
        } catch (__error__) {

            if (is(__error__,core.NoSuchMethodError)){
                let e : core.NoSuchMethodError = __error__;
                core.print(`Expected error: ${e}`);
            }
        }
        this.onlySetter = "hest";
    }
    testD() {
        core.print(onlySetter);
        this.onlySetter = "hest";
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export namespace D {
    export type Constructors = C.Constructors | 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D extends C {
    get onlySetter() : string {
        return "D.onlySetter called.";
    }
    set onlySetter(value : any) {
        core.print(`D.onlySetter called with ${value}.`);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    D() {
    }
}

export class properties {
    static set onlySetter(value : any) {
        core.print(`onlySetter called with ${value}.`);
    }
}
