/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/super_initializer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Super {
    export type Constructors = 'arg0' | 'arg1' | 'arg2';
    export type Interface = Omit<Super, Constructors>;
}
@DartClass
export class Super {
    @namedConstructor
    arg0() {
    }
    static arg0 : new() => Super;

    @namedConstructor
    arg1(a : any) {
    }
    static arg1 : new(a : any) => Super;

    @namedConstructor
    arg2(a : any,b : any) {
    }
    static arg2 : new(a : any,b : any) => Super;

}

export namespace Sub {
    export type Constructors = Super.Constructors | 'arg0' | 'arg1' | 'arg2';
    export type Interface = Omit<Sub, Constructors>;
}
@DartClass
export class Sub extends Super {
    field;

    @namedConstructor
    arg0() {
        super.arg0();
        this.field = 42;
    }
    static arg0 : new() => Sub;

    @namedConstructor
    arg1(a : any) {
        super.arg1(a);
        this.field = 42;
    }
    static arg1 : new(a : any) => Sub;

    @namedConstructor
    arg2(a : any,b : any) {
        super.arg2(a,b);
        this.field = 42;
    }
    static arg2 : new(a : any,b : any) => Sub;

}

export class properties {
}
