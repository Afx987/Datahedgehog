/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_from_complex_expressions_if_outer_most_value_is_precise.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test1 : () => any = () =>  {
    properties.a = "hi";
    properties.a = new B(3);
    properties.b = "hi";
    properties.b = new B(3);
    properties.c1 = new core.DartList.literal();
    properties.c1 = new core.DartMap.literal([
    ]);
    properties.c2 = new core.DartList.literal();
    properties.c2 = new core.DartMap.literal([
    ]);
    properties.d = new core.DartMap.literal([
    ]);
    properties.d = 3;
    properties.e = new A();
    properties.e = new core.DartMap.literal([
    ]);
    properties.f = 3;
    properties.f = false;
    properties.g = 1;
    properties.g = false;
    properties.h = false;
    properties.h = new B('b');
    properties.i = false;
    properties.j = new B('b');
    properties.j = false;
    properties.j = new core.DartList.literal();
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    x : number;

    [OperatorMethods.PLUS](other : any) : B {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends A {
    constructor(ignore : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B(ignore : any) {
    }
}

export class properties {
    private static __$a;
    static get a() { 
        if (this.__$a===undefined) {
            this.__$a = new A();
        }
        return this.__$a;
    }
    static set a(__$value : any)  { 
        this.__$a = __$value;
    }

    private static __$b;
    static get b() { 
        if (this.__$b===undefined) {
            this.__$b = new B(x);
        }
        return this.__$b;
    }
    static set b(__$value : any)  { 
        this.__$b = __$value;
    }

    private static __$c1;
    static get c1() { 
        if (this.__$c1===undefined) {
            this.__$c1 = new core.DartList.literal(x);
        }
        return this.__$c1;
    }
    static set c1(__$value : any)  { 
        this.__$c1 = __$value;
    }

    private static __$c2;
    static get c2() { 
        if (this.__$c2===undefined) {
            this.__$c2 = new core.DartList.literal();
        }
        return this.__$c2;
    }
    static set c2(__$value : any)  { 
        this.__$c2 = __$value;
    }

    private static __$d;
    static get d() { 
        if (this.__$d===undefined) {
            this.__$d = new core.DartMap.literal([
                ['a','b']]);
        }
        return this.__$d;
    }
    static set d(__$value : any)  { 
        this.__$d = __$value;
    }

    private static __$e;
    static get e() { 
        if (this.__$e===undefined) {
            this.__$e = ((_) : A =>  {
                {
                    _.x = 3;
                    return _;
                }
            })(new A());
        }
        return this.__$e;
    }
    static set e(__$value : any)  { 
        this.__$e = __$value;
    }

    private static __$f;
    static get f() { 
        if (this.__$f===undefined) {
            this.__$f = 2 + 3;
        }
        return this.__$f;
    }
    static set f(__$value : any)  { 
        this.__$f = __$value;
    }

    private static __$g;
    static get g() { 
        if (this.__$g===undefined) {
            this.__$g = -3;
        }
        return this.__$g;
    }
    static set g(__$value : any)  { 
        this.__$g = __$value;
    }

    private static __$h;
    static get h() { 
        if (this.__$h===undefined) {
            this.__$h = op(Op.PLUS,new A(),3);
        }
        return this.__$h;
    }
    static set h(__$value : any)  { 
        this.__$h = __$value;
    }

    private static __$i;
    static get i() { 
        if (this.__$i===undefined) {
            this.__$i = op(Op.NEG,new A());
        }
        return this.__$i;
    }
    static set i(__$value : any)  { 
        this.__$i = __$value;
    }

    private static __$j;
    static get j() { 
        if (this.__$j===undefined) {
            this.__$j = null as B;
        }
        return this.__$j;
    }
    static set j(__$value : any)  { 
        this.__$j = __$value;
    }

}
