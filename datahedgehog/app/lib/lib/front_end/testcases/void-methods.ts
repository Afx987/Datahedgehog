/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/void-methods.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    new Foo().first = 4;
    op(Op.INDEX_ASSIGN,new Foo(),3,4);
    new Foo().clear();
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    list : core.DartList<any>;

    set first(x : any) {
        this.list[0] = x;
    }
    [OperatorMethods.INDEX_EQ](x : any,y : any) {
        return this.list[x] = y;
    }
    clear() : void {
        return this.list.clear();
    }
    constructor() {
    }
    @defaultConstructor
    Foo() {
        this.list = new core.DartList.literal(1,2,3);
    }
}

export class properties {
}
