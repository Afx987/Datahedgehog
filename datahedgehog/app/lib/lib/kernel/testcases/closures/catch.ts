/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/catch.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let c;
    try {
        throw "Fisk";
    } catch (__error__) {

        if (is(__error__,string)){
            let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
            let e : string = __error__;
            c = () =>  {
                core.print(e);
                if (s != null) core.print(s);
            };
        }
    }
    c();
    core.print("TEST PASSED");
};
export class properties {
}
