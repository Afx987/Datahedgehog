/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_for_each.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => async.Future<any> = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    for(let x of new core.DartList.literal(1,2,3)) {
    }
    for await(let x of new MyStream<any>()) {
    }
})());
export namespace MyStream {
    export type Constructors = async.DartStream.Constructors | never;
    export type Interface<T> = Omit<MyStream<T>, Constructors>;
}
@DartClass
export class MyStream<T> extends async.DartStream<T> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $MyStream<T>() : MyStream<T> {
        return null;
    }
}

export class properties {
}
