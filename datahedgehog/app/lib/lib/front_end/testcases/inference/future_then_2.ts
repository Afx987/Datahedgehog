/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/future_then_2.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    let f : MyFuture<any>;
    let t1 : async.Future<number> = f.then((_ : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
        return await new MyFuture.value(3);
    })()));
    let t2 : async.Future<number> = f.then((_ : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
        return await new MyFuture.value(3);
    })()));
    let t3 : async.Future<number> = f.then((_ : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
        return 3;
    })()));
    let t4 : async.Future<number> = f.then((_ : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
        return 3;
    })()));
    let t5 : async.Future<number> = f.then((_ : any) =>  {
        return new MyFuture.value(3);
    });
    let t6 : async.Future<number> = f.then((_ : any) =>  {
        return new MyFuture.value(3);
    });
    let t7 : async.Future<number> = f.then((_ : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
        return new MyFuture.value(3);
    })()));
    let t8 : async.Future<number> = f.then((_ : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
        return new MyFuture.value(3);
    })()));
};
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
    value(x : T) {
    }
    static value : new<T>(x : T) => MyFuture<T>;

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
