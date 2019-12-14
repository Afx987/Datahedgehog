/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_return_of_statement_lambda.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var strings : () => core.DartList<string> = () : core.DartList<string> =>  {
    let stuff = new core.DartList.literal().expand((i : any) =>  {
        return new core.DartList.literal<string>();
    });
    return stuff.toList();
};
export var main : () => any = () =>  {
    strings();
};
export class properties {
}
