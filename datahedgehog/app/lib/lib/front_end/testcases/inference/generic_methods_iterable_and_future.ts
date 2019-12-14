/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_methods_iterable_and_future.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var make : (x : number) => async.Future<number> = (x : number) : async.Future<number> =>  {
    return (new async.Future<any>(() =>  {
        return x;
    }));
};
export var main : () => any = () =>  {
    let list : core.DartIterable<async.Future<number>> = new core.DartList.literal<number>(1,2,3).map(make);
    let results : async.Future<core.DartList<number>> = async.Future.wait(list);
    let results2 : async.Future<string> = results.then((list : core.DartList<number>) =>  {
        return list.fold('',(x : any,y : any) =>  {
            return op(Op.PLUS,x,new core.DartInt(y).toString());
        });
    });
    let results3 : async.Future<string> = results.then((list : core.DartList<number>) =>  {
        return list.fold('',(x : string,y : any) =>  {
            return x + y.toString();
        });
    });
    let results4 : async.Future<string> = results.then((list : core.DartList<number>) =>  {
        return list.fold('',(x : any,y : any) =>  {
            return x + new core.DartInt(y).toString();
        });
    });
};
export class properties {
}
