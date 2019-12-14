/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/native_types_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    lib3.expectTrue(is(1, "number"));
    lib3.expectTrue(isNot(1, "double"));
    lib3.expectTrue(is(new core.DartList<number>(), core.DartList<number>));
    lib3.expectTrue(isNot(new core.DartList<number>(), core.DartList<double>));
    lib3.expectTrue(is("hest", "string"));
    lib3.expectTrue(isNot("hest", "number"));
    lib3.expectTrue(isNot(null, "string"));
    lib3.expectTrue(is(null, any));
    lib3.expectTrue(is(null, core.DartObject));
    lib3.expectTrue(is(true, "boolean"));
    lib3.expectTrue(isNot(true, "number"));
    lib3.expectThrows(() =>  {
        return new C();
    },(e : any) =>  {
        return is(e, core.AbstractClassInstantiationError);
    });
    lib3.expectThrows(() =>  {
        return new D().foo();
    },(e : any) =>  {
        return is(e, core.NoSuchMethodError);
    });
    lib3.expectThrows(() =>  {
        return properties.foo;
    },(e : any) =>  {
        return is(e, core.CyclicInitializationError);
    });
    lib3.expectThrows(() =>  {
        return new core.DartList.literal()[1];
    },(e : any) =>  {
        return is(e, core.RangeError);
    });
    lib3.expectTrue(is(new core.UnsupportedError(""), core.UnsupportedError));
    lib3.expectTrue(is(new core.ArgumentError(), core.ArgumentError));
    lib3.expectTrue(is(new core.DartIntegerDivisionByZeroException(), core.DartIntegerDivisionByZeroException));
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export namespace D {
    export type Constructors = 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D {
    constructor() {
    }
    @defaultConstructor
    D() {
    }
}

export class properties {
    private static __$foo;
    static get foo() { 
        if (this.__$foo===undefined) {
            this.__$foo = properties.bar;
        }
        return this.__$foo;
    }
    static set foo(__$value : any)  { 
        this.__$foo = __$value;
    }

    private static __$bar;
    static get bar() { 
        if (this.__$bar===undefined) {
            this.__$bar = properties.foo;
        }
        return this.__$bar;
    }
    static set bar(__$value : any)  { 
        this.__$bar = __$value;
    }

}
