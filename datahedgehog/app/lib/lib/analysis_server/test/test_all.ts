/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./analysis/test_all";
import * as lib4 from "./analysis_server_test";
import * as lib5 from "./channel/test_all";
import * as lib6 from "./completion_test";
import * as lib7 from "./context_manager_test";
import * as lib8 from "./domain_analysis_test";
import * as lib9 from "./domain_completion_test";
import * as lib10 from "./domain_execution_test";
import * as lib11 from "./domain_diagnostic_test";
import * as lib12 from "./domain_server_test";
import * as lib13 from "./edit/test_all";
import * as lib14 from "./operation/test_all";
import * as lib15 from "./plugin/test_all";
import * as lib16 from "./protocol_server_test";
import * as lib17 from "./protocol_test";
import * as lib18 from "./search/test_all";
import * as lib19 from "./services/test_all";
import * as lib20 from "./single_context_manager_test";
import * as lib21 from "./socket_server_test";
import * as lib22 from "./source/test_all";
import * as lib23 from "./src/test_all";

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
        lib18.main();
        lib19.main();
        lib20.main();
        lib21.main();
        lib22.main();
        lib23.main();
    },{
        name : 'analysis_server'});
};
export class properties {
}
