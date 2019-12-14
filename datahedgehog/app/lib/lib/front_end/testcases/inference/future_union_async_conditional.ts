/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/future_union_async_conditional.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var g1 : (x : boolean) => async.Future<number> = (x : boolean) => new async.Future.fromPromise(( async () : Promise<number> =>  {
    return x ? 42 : new async.Future.value(42);
})());
export var g2 : (x : boolean) => async.Future<number> = (x : boolean) => new async.Future.fromPromise(( async () : Promise<number> =>  {
    return x ? 42 : new async.Future.value(42);
})());
export var g3 : (x : boolean) => async.Future<number> = (x : boolean) => new async.Future.fromPromise(( async () : Promise<number> =>  {
    let y = x ? 42 : new async.Future.value(42);
    return y;
})());
export namespace MyFuture {
    export type Constructors = 'MyFuture' | 'value';
    export type Interface<T> = Omit<MyFuture<T>, Constructors>;
}
@DartClass
@Implements(async.Future)
export class MyFuture<T> implements async.Future.Interface<T> {
    constructor() {
    }
    @defaultConstructor
    MyFuture() {
    }
    @namedConstructor
    value(x : any) {
    }
    static value : new<T>(x : any) => MyFuture<T>;

    @Abstract
    noSuchMethod(invocation : any) : any{ throw 'abstract'}
    then<S>(f : <S,T>(x : T) => any,_namedArguments? : {onError? : Function}) : MyFuture<S> {
        let {onError} = Object.assign({
        }, _namedArguments );
        return null;
    }
}

export class properties {
}
