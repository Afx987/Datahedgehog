/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./cancelable_future_test";
import * as lib4 from "./context/test_all";
import * as lib5 from "./dart/test_all";
import * as lib6 from "./file_system/test_all";
import * as lib7 from "./generated/test_all";
import * as lib8 from "./instrumentation/test_all";
import * as lib9 from "./parse_compilation_unit_test";
import * as lib10 from "./source/test_all";
import * as lib11 from "./src/test_all";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        lib3.main();
        lib4.main();
        lib5.main();
        lib6.main();
        lib7.main();
        lib8.main();
        lib9.main();
        lib10.main();
        lib11.main();
    },{
        name : 'analyzer'});
};
export class properties {
}
