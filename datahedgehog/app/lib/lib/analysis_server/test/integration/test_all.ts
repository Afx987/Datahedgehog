/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./analysis/test_all";
import * as lib4 from "./completion/test_all";
import * as lib5 from "./diagnostic/test_all";
import * as lib6 from "./edit/test_all";
import * as lib7 from "./execution/test_all";
import * as lib8 from "./search/test_all";
import * as lib9 from "./server/test_all";
import * as lib10 from "./coverage_test";

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
    },{
        name : 'analysis_server_integration'});
};
export class properties {
}
