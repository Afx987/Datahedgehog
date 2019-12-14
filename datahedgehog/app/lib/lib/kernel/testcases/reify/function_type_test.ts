/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/function_type_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var foo : (a : A) => C = (a : A) : C =>  {
    return null;
};
export var test : (x : any) => void = (x : any) : void =>  {
    lib3.write(is(x, "Function"));
    lib3.write(is(x, (a : A) => B));
    lib3.write(is(x, (c : C) => C));
    lib3.write(is(x, (a : A?) => void));
    lib3.write(is(x, (a : A) => void));
    lib3.write(is(x, (a : A,b : B?) => void));
    lib3.write(is(x, (a : A,b : B?,c : C?) => void));
    lib3.write(is(x, (a : A,b : B,c : C?) => void));
    lib3.write(is(x, (_namedArguments : {a? : A?}) => void));
    lib3.write(is(x, (a : A) => void));
    lib3.write(is(x, (a : A,_namedArguments : {b? : B?}) => void));
    lib3.write(is(x, (a : A,_namedArguments : {b? : B?,c? : C?}) => void));
    lib3.write(is(x, (a : A,b : B,_namedArguments : {c? : C?}) => void));
};
export var main : () => any = () =>  {
    test(new D());
    for(let c of new core.DartList.literal(new ER0P1(),new ER1P0(),new ER1P1(),new ER1P2(),new ER2P1(),new ER0N1(),new ER1N0(),new ER1N1(),new ER1N2(),new ER2N1())) {
        test(c);
    }
    lib3.expectOutput("true\ntrue\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\ntrue\ntrue\nfalse\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\ntrue\ntrue\ntrue\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\nfalse\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\nfalse\ntrue\ntrue\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\nfalse\nfalse\ntrue\ntrue\ntrue\nfalse\ntrue\nfalse\nfalse\nfalse\nfalse\nfalse\nfalse\nfalse\nfalse\nfalse\nfalse\nfalse\ntrue");
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace D {
    export type Constructors = 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
@Implements(Function)
export class D implements Function.Interface {
    call(a : A) : B {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    D() {
    }
}

export namespace ER0P1 {
    export type Constructors = 'ER0P1';
    export type Interface = Omit<ER0P1, Constructors>;
}
@DartClass
export class ER0P1 {
    call(a? : A) : void {
    }
    constructor() {
    }
    @defaultConstructor
    ER0P1() {
    }
}

export namespace ER1P0 {
    export type Constructors = 'ER1P0';
    export type Interface = Omit<ER1P0, Constructors>;
}
@DartClass
export class ER1P0 {
    call(a : A) : void {
    }
    constructor() {
    }
    @defaultConstructor
    ER1P0() {
    }
}

export namespace ER1P1 {
    export type Constructors = 'ER1P1';
    export type Interface = Omit<ER1P1, Constructors>;
}
@DartClass
export class ER1P1 {
    call(a : A,b? : B) : void {
    }
    constructor() {
    }
    @defaultConstructor
    ER1P1() {
    }
}

export namespace ER1P2 {
    export type Constructors = 'ER1P2';
    export type Interface = Omit<ER1P2, Constructors>;
}
@DartClass
export class ER1P2 {
    call(a : A,b? : B,c? : C) : void {
    }
    constructor() {
    }
    @defaultConstructor
    ER1P2() {
    }
}

export namespace ER2P1 {
    export type Constructors = 'ER2P1';
    export type Interface = Omit<ER2P1, Constructors>;
}
@DartClass
export class ER2P1 {
    call(a : A,b : B,c? : C) : void {
    }
    constructor() {
    }
    @defaultConstructor
    ER2P1() {
    }
}

export namespace ER0N1 {
    export type Constructors = 'ER0N1';
    export type Interface = Omit<ER0N1, Constructors>;
}
@DartClass
export class ER0N1 {
    call(_namedArguments? : {a? : A}) : void {
        let {a} = Object.assign({
        }, _namedArguments );
    }
    constructor() {
    }
    @defaultConstructor
    ER0N1() {
    }
}

export namespace ER1N0 {
    export type Constructors = 'ER1N0';
    export type Interface = Omit<ER1N0, Constructors>;
}
@DartClass
export class ER1N0 {
    call(a : A) : void {
    }
    constructor() {
    }
    @defaultConstructor
    ER1N0() {
    }
}

export namespace ER1N1 {
    export type Constructors = 'ER1N1';
    export type Interface = Omit<ER1N1, Constructors>;
}
@DartClass
export class ER1N1 {
    call(a : A,_namedArguments? : {b? : B}) : void {
        let {b} = Object.assign({
        }, _namedArguments );
    }
    constructor() {
    }
    @defaultConstructor
    ER1N1() {
    }
}

export namespace ER1N2 {
    export type Constructors = 'ER1N2';
    export type Interface = Omit<ER1N2, Constructors>;
}
@DartClass
export class ER1N2 {
    call(a : A,_namedArguments? : {b? : B,c? : C}) : void {
        let {b,c} = Object.assign({
        }, _namedArguments );
    }
    constructor() {
    }
    @defaultConstructor
    ER1N2() {
    }
}

export namespace ER2N1 {
    export type Constructors = 'ER2N1';
    export type Interface = Omit<ER2N1, Constructors>;
}
@DartClass
export class ER2N1 {
    call(a : A,b : B,_namedArguments? : {c? : C}) : void {
        let {c} = Object.assign({
        }, _namedArguments );
    }
    constructor() {
    }
    @defaultConstructor
    ER2N1() {
    }
}

export namespace ER0N8 {
    export type Constructors = 'ER0N8';
    export type Interface = Omit<ER0N8, Constructors>;
}
@DartClass
export class ER0N8 {
    call(_namedArguments? : {kE? : any,ii? : any,oP? : any,Ij? : any,pA? : any,zD? : any,aZ? : any,UU? : any}) : void {
        let {kE,ii,oP,Ij,pA,zD,aZ,UU} = Object.assign({
        }, _namedArguments );
    }
    constructor() {
    }
    @defaultConstructor
    ER0N8() {
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends A {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
    }
}

export namespace C {
    export type Constructors = A.Constructors | 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C extends A {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
