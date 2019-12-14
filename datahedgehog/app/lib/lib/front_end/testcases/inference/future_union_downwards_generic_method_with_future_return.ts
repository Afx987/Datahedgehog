/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/future_union_downwards_generic_method_with_future_return.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let f1 : async.Future<core.DartList<A>> = null;
    let f2 : async.Future<core.DartList<A>> = null;
    let merged : core.DartList<core.DartList<A>> = await async.Future.wait(new core.DartList.literal(f1,f2));
})());
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

export class properties {
}
