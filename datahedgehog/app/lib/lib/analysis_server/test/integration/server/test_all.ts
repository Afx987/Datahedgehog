/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/server/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./get_version_test";
import * as lib4 from "./set_subscriptions_test";
import * as lib5 from "./set_subscriptions_invalid_service_test";
import * as lib6 from "./shutdown_test";
import * as lib7 from "./status_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        lib3.main();
        lib4.main();
        lib5.main();
        lib6.main();
        lib7.main();
    },{
        name : 'server'});
};
export class properties {
}
