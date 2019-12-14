/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/top_level_accessors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.exitCode = 42;
    core.print(properties.exitCode);
};
export class properties {
    static set exitCode(code : number) {
        core.print(code);
    }
    static get exitCode() : number {
        return 0;
    }
}
