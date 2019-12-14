/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/source/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./analysis_options_provider_test";
import * as lib4 from "./embedder_test";
import * as lib5 from "./error_processor_test";
import * as lib6 from "./package_map_provider_test";
import * as lib7 from "./package_map_resolver_test";
import * as lib8 from "./path_filter_test";
import * as lib9 from "./sdk_ext_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        lib3.main();
        lib4.main();
        lib5.main();
        lib6.main();
        lib7.main();
        lib8.main();
        lib9.main();
    },{
        name : 'source'});
};
export class properties {
}
