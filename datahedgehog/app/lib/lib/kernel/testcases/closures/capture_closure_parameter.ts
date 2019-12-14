/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/capture_closure_parameter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) =>  {
    var foo : (x : any) => any = (x : any) =>  {
        var bar : () => any = () =>  {
            core.print(x);
        };
        return bar;
    };
    (foo(arguments[0]))();
};
export class properties {
}
