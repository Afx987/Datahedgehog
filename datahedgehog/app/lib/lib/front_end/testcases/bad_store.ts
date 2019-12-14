/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/bad_store.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var identity : (x : any) => any = (x : any) : any =>  {
    return x;
};
export var use : (x : any) => void = (x : any) : void =>  {
};
export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    let foo : any = identity(new Foo());
    if (args.length > 1) {
        foo.field = "string";
        let first = foo.field;
        use(first);
        foo.noField = "string";
        let second = foo.noField;
        use(second);
    }
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    field;

    constructor() {
    }
    @defaultConstructor
    Foo() {
    }
}

export class properties {
}
