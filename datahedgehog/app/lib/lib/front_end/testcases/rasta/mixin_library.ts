/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/mixin_library.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : () => any = () =>  {
    return 2;
};
export var V : () => any = () =>  {
    return 87;
};
export var _private : () => any = () =>  {
    return 117;
};
export var foo : (m : any) => any = (m : any) =>  {
    return m._privateMethod();
};
export namespace Mixin {
    export type Constructors = 'Mixin';
    export type Interface<T> = Omit<Mixin<T>, Constructors>;
}
@DartClass
export class Mixin<T> {
    x;
    y;
    z;

    t : T;

    foo() {
        return op(Op.PLUS,super.foo(),f());
    }
    g(a : T) : T {
        return null;
    }
    h() {
        return V();
    }
    l() {
        return _private();
    }
    _privateMethod() {
        return 49;
    }
    publicMethod() {
        return this._privateMethod();
    }
    constructor() {
    }
    @defaultConstructor
    Mixin() {
        this.x = f();
    }
}

export class properties {
}
