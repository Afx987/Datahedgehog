/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/unresolved_recovery.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var beforeTestMissingTry : () => any = () =>  {
    testMissingTry();
};
export var testMissingTry : () => any = () =>  {
    on;
    core.Exception;
    (e : any) =>  {
    }
};
export var main : () => any = () =>  {
};
export namespace E {
    export type Constructors = 'E';
    export type Interface = Omit<E, Constructors>;
}
@DartClass
export class E {
    foo() {
        op(Op.INDEX_ASSIGN,super,4,42);
        op(Op.INDEX_ASSIGN,super,4,5);
        return op(Op.INDEX,super,2);
    }
    constructor() {
    }
    @defaultConstructor
    E() {
    }
}

export class properties {
}
