/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/escape.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var useAsA : (object : A) => void = (object : A) : void =>  {
    let _ = object.field;
};
export var useAsB : (object : B) => void = (object : B) : void =>  {
    let _ = object.field;
    escape(object);
};
export var escape : (x : any) => void = (x : any) : void =>  {
    x = ( x ) || ( "" );
    x = ( x ) || ( 45 );
    if (isNot(x, "number") && isNot(x, "string")) {
        x.field = 45;
    }
};
export var main : () => any = () =>  {
    let object = new X();
    useAsA(new A());
    useAsA(object);
    useAsB(new B());
    useAsB(object);
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    field;

    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B {
    field;

    constructor() {
    }
    @defaultConstructor
    B() {
    }
}

export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    [OperatorMethods.EQUALS](x : any) {
        return false;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export namespace X {
    export type Constructors = 'X';
    export type Interface = Omit<X, Constructors>;
}
@DartClass
@Implements(A,B)
export class X implements A.Interface,B.Interface {
    field;

    constructor() {
    }
    @defaultConstructor
    X() {
    }
}

export class properties {
}
