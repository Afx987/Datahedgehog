/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./dart_test";
import * as lib4 from "./dart_work_manager_test";
import * as lib5 from "./driver_test";
import * as lib6 from "./general_test";
import * as lib7 from "./html_test";
import * as lib8 from "./html_work_manager_test";
import * as lib9 from "./inputs_test";
import * as lib10 from "./manager_test";
import * as lib11 from "./model_test";
import * as lib12 from "./options_test";
import * as lib13 from "./options_work_manager_test";
import * as lib14 from "./strong/test_all";
import * as lib15 from "./strong_mode_driver_test";
import * as lib16 from "./strong_mode_test";
import * as lib17 from "./yaml_test";

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
        lib12.main();
        lib13.main();
        lib14.main();
        lib15.main();
        lib16.main();
        lib17.main();
    },{
        name : 'task'});
};
export class properties {
}
