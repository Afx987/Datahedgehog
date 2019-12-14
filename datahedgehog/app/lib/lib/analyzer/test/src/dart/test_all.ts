/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./analysis/test_all";
import * as lib4 from "./ast/test_all";
import * as lib5 from "./constant/test_all";
import * as lib6 from "./element/test_all";
import * as lib7 from "./sdk/test_all";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        lib3.main();
        lib4.main();
        lib5.main();
        lib6.main();
        lib7.main();
    },{
        name : 'dart'});
};
export class properties {
}
