/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_local_function_return_type.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    var f0 : () => any = () =>  {
        return 42;
    };
    var f1 : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
        return 42;
    })());
    var f2 : () => any = () =>  {
        return 42;
    };
    var f3 : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
        return 42;
    })());
    var f4 : () => any = () : core.DartIterable<any> => core.iter<any>(()=>(function*()  {
        yield 42;
    }).call(this));
    var f5 : () => any = () : async.DartStream<any> => async.stream<any>(()=>(async function*()  {
        yield 42;
    }).call(this));
    var f6 : () => number = () : number =>  {
        return 42;
    };
    var f7 : () => any = () =>  {
        return f7();
    };
    var f8 : () => any = () =>  {
        return f9();
    };
    var f9 : () => any = () =>  {
        return f5();
    };
};
export class properties {
}
