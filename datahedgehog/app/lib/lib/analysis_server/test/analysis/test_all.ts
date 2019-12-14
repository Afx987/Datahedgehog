/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./get_errors_test";
import * as lib4 from "./get_hover_test";
import * as lib5 from "./get_navigation_test";
import * as lib6 from "./navigation_collector_test";
import * as lib7 from "./notification_analysis_options_test";
import * as lib8 from "./notification_analyzedFiles_test";
import * as lib9 from "./notification_errors_test";
import * as lib10 from "./notification_highlights_test";
import * as lib11 from "./notification_highlights_test2";
import * as lib12 from "./notification_implemented_test";
import * as lib13 from "./notification_navigation_test";
import * as lib14 from "./notification_occurrences_test";
import * as lib15 from "./notification_outline_test";
import * as lib16 from "./notification_overrides_test";
import * as lib17 from "./reanalyze_test";
import * as lib18 from "./set_priority_files_test";
import * as lib19 from "./update_content_test";

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
    },{
        name : 'analysis'});
};
export class properties {
}
