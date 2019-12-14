/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_yield_yield_star.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : () => async.DartStream<core.DartList<number>> = () : async.DartStream<core.DartList<number>> => async.stream<core.DartList<number>>(()=>(async function*()  {
    yield new core.DartList.literal();
    yield new MyStream<any>();
    yield* new core.DartList.literal();
    yield* new MyStream<any>();
}).call(this));
export var bar : () => core.DartIterable<core.DartMap<number,number>> = () : core.DartIterable<core.DartMap<number,number>> => core.iter<core.DartMap<number,number>>(()=>(function*()  {
    yield new core.DartMap.literal([
    ]);
    yield new core.DartList<any>();
    yield* new core.DartMap.literal([
    ]);
    yield* new core.DartList<any>();
}).call(this));
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
