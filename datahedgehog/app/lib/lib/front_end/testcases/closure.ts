/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/closure.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var useCallback : (callback : any) => any = (callback : any) =>  {
    let _ = callback();
};
export var main : () => any = () =>  {
    let x;
    var inner : () => any = () =>  {
        x = new Foo();
        return new Foo();
    };
    useCallback(inner);
    let _ = inner()._field;
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    _field;

    constructor() {
    }
    @defaultConstructor
    Foo() {
        this._field = new Bar();
    }
}

export namespace Bar {
    export type Constructors = 'Bar';
    export type Interface = Omit<Bar, Constructors>;
}
@DartClass
export class Bar {
    constructor() {
    }
    @defaultConstructor
    Bar() {
    }
}

export class properties {
}
