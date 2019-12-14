/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/super_mixin.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./mixin_library";

export var main : () => any = () =>  {
    core.print(new C<any>().foo());
    core.print(new C2<any>().foo());
};
export namespace Super {
    export type Constructors = 'Super';
    export type Interface<S> = Omit<Super<S>, Constructors>;
}
@DartClass
export class Super<S> {
    foo() {
        return 40;
    }
    f() {
        return 3;
    }
    constructor() {
    }
    @defaultConstructor
    Super() {
    }
}

export namespace C {
    export type Constructors = Super.Constructors | 'C';
    export type Interface<V> = Omit<C<V>, Constructors>;
}
@DartClass
@With(lib3.Mixin)
export class C<V> extends Super<V> implements lib3.Mixin.Interface<V> {
    @Abstract
    foo() : any {
        throw 'from mixin';
    }
    @Abstract
    g(a : T) : V {
        throw 'from mixin';
    }
    @Abstract
    h() : any {
        throw 'from mixin';
    }
    @Abstract
    l() : any {
        throw 'from mixin';
    }
    @Abstract
    _privateMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    publicMethod() : any {
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    C() {
    }
}

export namespace D {
    export type Constructors = Super.Constructors | 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
@With(lib3.Mixin)
export class D extends Super<any> implements lib3.Mixin.Interface<any> {
    @Abstract
    foo() : any {
        throw 'from mixin';
    }
    @Abstract
    g(a : T) : any {
        throw 'from mixin';
    }
    @Abstract
    h() : any {
        throw 'from mixin';
    }
    @Abstract
    l() : any {
        throw 'from mixin';
    }
    @Abstract
    _privateMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    publicMethod() : any {
        throw 'from mixin';
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
}
