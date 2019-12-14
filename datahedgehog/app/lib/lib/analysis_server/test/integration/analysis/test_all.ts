/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./analysis_options_test";
import * as lib4 from "./error_test";
import * as lib5 from "./get_errors_test";
import * as lib6 from "./get_errors_nonStandard_sdk";
import * as lib7 from "./get_library_dependencies_test";
import * as lib8 from "./get_hover_test";
import * as lib9 from "./get_navigation_test";
import * as lib10 from "./get_reachable_sources_test";
import * as lib11 from "./highlights_test";
import * as lib12 from "./highlights_test2";
import * as lib13 from "./lint_test";
import * as lib14 from "./navigation_test";
import * as lib15 from "./occurrences_test";
import * as lib16 from "./outline_test";
import * as lib17 from "./overrides_test";
import * as lib18 from "./package_root_test";
import * as lib19 from "./reanalyze_concurrent_test";
import * as lib20 from "./reanalyze_test";
import * as lib21 from "./set_analysis_roots_test";
import * as lib22 from "./set_general_subscriptions_test";
import * as lib23 from "./set_priority_files_test";
import * as lib24 from "./set_subscriptions_test";
import * as lib25 from "./update_content_test";
import * as lib26 from "./update_content_list_test";
import * as lib27 from "./update_options_test";

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
        lib24.main();
        lib25.main();
        lib26.main();
        lib27.main();
    },{
        name : 'analysis'});
};
export class properties {
}
