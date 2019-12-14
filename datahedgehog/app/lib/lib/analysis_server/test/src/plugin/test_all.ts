/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/plugin/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./notification_manager_test";
import * as lib4 from "./plugin_locator_test";
import * as lib5 from "./plugin_manager_test";
import * as lib6 from "./plugin_watcher_test";
import * as lib7 from "./request_converter_test";
import * as lib8 from "./result_collector_test";
import * as lib9 from "./result_converter_test";
import * as lib10 from "./result_merger_test";

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
    });
};
export class properties {
}
