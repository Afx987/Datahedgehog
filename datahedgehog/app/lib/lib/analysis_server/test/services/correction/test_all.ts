/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./assist_test";
import * as lib4 from "./change_test";
import * as lib5 from "./fix_test";
import * as lib6 from "./levenshtein_test";
import * as lib7 from "./name_suggestion_test";
import * as lib8 from "./organize_directives_test";
import * as lib9 from "./sort_members_test";
import * as lib10 from "./source_range_test";
import * as lib11 from "./status_test";
import * as lib12 from "./strings_test";
import * as lib13 from "./util_test";

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
    },{
        name : 'correction'});
};
export class properties {
}
