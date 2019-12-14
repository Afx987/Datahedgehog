/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./in_summary_source_test";
import * as lib4 from "./linker_test";
import * as lib5 from "./name_filter_test";
import * as lib6 from "./package_bundle_reader_test";
import * as lib7 from "./prelinker_test";
import * as lib8 from "./resynthesize_ast_test";
import * as lib9 from "./summarize_ast_strong_test";
import * as lib10 from "./summarize_ast_test";
import * as lib11 from "./top_level_inference_test";

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
        name : 'summary'});
};
export class properties {
}
