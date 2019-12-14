/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/prefer_baseclass.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var takeSubclassOfA : (obj : any) => any = (obj : any) =>  {
};
export var takeSubclassOfB : (obj : any) => any = (obj : any) =>  {
};
export var main : () => any = () =>  {
    takeSubclassOfA(new AB1());
    takeSubclassOfA(new AB2());
    takeSubclassOfB(new BA1());
    takeSubclassOfB(new BA2());
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

export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B {
    constructor() {
    }
    @defaultConstructor
    B() {
    }
}

export namespace AB1 {
    export type Constructors = A.Constructors | 'AB1';
    export type Interface = Omit<AB1, Constructors>;
}
@DartClass
@Implements(B)
export class AB1 extends A implements B.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AB1() {
    }
}

export namespace AB2 {
    export type Constructors = A.Constructors | 'AB2';
    export type Interface = Omit<AB2, Constructors>;
}
@DartClass
@Implements(B)
export class AB2 extends A implements B.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AB2() {
    }
}

export namespace BA1 {
    export type Constructors = B.Constructors | 'BA1';
    export type Interface = Omit<BA1, Constructors>;
}
@DartClass
@Implements(A)
export class BA1 extends B implements A.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BA1() {
    }
}

export namespace BA2 {
    export type Constructors = B.Constructors | 'BA2';
    export type Interface = Omit<BA2, Constructors>;
}
@DartClass
@Implements(A)
export class BA2 extends B implements A.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BA2() {
    }
}

export class properties {
}
