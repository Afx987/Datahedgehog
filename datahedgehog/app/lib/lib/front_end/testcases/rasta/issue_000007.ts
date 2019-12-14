/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000007.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    new Sub().foo();
};
export namespace Base {
    export type Constructors = 'Base';
    export type Interface = Omit<Base, Constructors>;
}
@DartClass
export class Base {
    constructor() {
    }
    @defaultConstructor
    Base() {
    }
}

export namespace Mixin {
    export type Constructors = 'Mixin';
    export type Interface = Omit<Mixin, Constructors>;
}
@DartClass
export class Mixin {
    foo() {
        return core.print('foo');
    }
    constructor() {
    }
    @defaultConstructor
    Mixin() {
    }
}

export namespace Sub {
    export type Constructors = Base.Constructors | 'Sub';
    export type Interface = Omit<Sub, Constructors>;
}
@DartClass
@With(Mixin)
export class Sub extends Base implements Mixin.Interface {
    @Abstract
    foo() : any {
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Sub() {
    }
}

export class properties {
}
