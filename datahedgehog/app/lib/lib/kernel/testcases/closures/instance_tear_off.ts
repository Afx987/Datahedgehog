/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/instance_tear_off.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var expect : (expected : any,actual : any) => any = (expected : any,actual : any) =>  {
    core.print(`Expecting '${expected}' and got '${actual}'`);
    if (expected != actual) {
        core.print(`Expected '${expected}' but got '${actual}'`);
        throw `Expected '${expected}' but got '${actual}'`;
    }
};
export var test : (o : any) => any = (o : any) =>  {
    expect("f",o.f());
    expect("f",((o.f))());
    expect("g(42)",o.g(42));
    expect("g(42)",((o.g))(42));
    expect("a",o.a());
    expect("a",((o.a))());
    expect(42,o.b(42));
    expect(42,((o.b))(42));
    expect(42,o.c(40));
    expect(42,((o.c))(40));
    expect(87,o.c(80,7));
    expect(87,((o.c))(80,7));
    expect(42,o.d(40));
    expect(42,((o.d))(40));
    expect(87,o.d(80,{
        y : 7}));
    expect(87,((o.d))(80,{
        y : 7}));
};
export var main : (arguments : any) => any = (arguments : any) =>  {
    test(new C());
    test(new D<number>());
    test(new E<number>());
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    f;

    get g() {
        return (x : any) =>  {
            return `g(${x})`;
        };
    }
    a() {
        return "a";
    }
    b(x : any) {
        return x;
    }
    c(x : any,y? : any) {
        y = y || 2;
        return op(Op.PLUS,x,y);
    }
    d(x : any,_namedArguments? : {y? : any}) {
        let {y} = Object.assign({
            "y" : 2}, _namedArguments );
        return op(Op.PLUS,x,y);
    }
    constructor() {
    }
    @defaultConstructor
    C() {
        this.f = () =>  {
            return "f";
        };
    }
}

export namespace D {
    export type Constructors = 'D';
    export type Interface<T> = Omit<D<T>, Constructors>;
}
@DartClass
export class D<T> {
    f;

    get g() {
        return (x : any) =>  {
            return `g(${x})`;
        };
    }
    a() {
        return "a";
    }
    b(x : any) {
        return x;
    }
    c(x : any,y? : any) {
        y = y || 2;
        return op(Op.PLUS,x,y);
    }
    d(x : any,_namedArguments? : {y? : any}) {
        let {y} = Object.assign({
            "y" : 2}, _namedArguments );
        return op(Op.PLUS,x,y);
    }
    constructor() {
    }
    @defaultConstructor
    D() {
        this.f = () =>  {
            return "f";
        };
    }
}

export namespace E {
    export type Constructors = 'E';
    export type Interface<T> = Omit<E<T>, Constructors>;
}
@DartClass
export class E<T> {
    f;

    get g() {
        return (x : T) =>  {
            return `g(${x})`;
        };
    }
    a() {
        return "a";
    }
    b(x : T) {
        return x;
    }
    c(x : T,y? : T) {
        y = y || 2;
        return op(Op.PLUS,x,y);
    }
    d(x : T,_namedArguments? : {y? : T}) {
        let {y} = Object.assign({
            "y" : 2}, _namedArguments );
        return op(Op.PLUS,x,y);
    }
    constructor() {
    }
    @defaultConstructor
    E() {
        this.f = () =>  {
            return "f";
        };
    }
}

export class properties {
}
