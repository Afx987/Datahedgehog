/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./convert_getter_to_method_test";
import * as lib4 from "./convert_method_to_getter_test";
import * as lib5 from "./extract_local_test";
import * as lib6 from "./extract_method_test";
import * as lib7 from "./inline_local_test";
import * as lib8 from "./inline_method_test";
import * as lib9 from "./move_file_test";
import * as lib10 from "./naming_conventions_test";
import * as lib11 from "./rename_class_member_test";
import * as lib12 from "./rename_constructor_test";
import * as lib13 from "./rename_import_test";
import * as lib14 from "./rename_label_test";
import * as lib15 from "./rename_library_test";
import * as lib16 from "./rename_local_test";
import * as lib17 from "./rename_unit_member_test";

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
        name : 'refactoring'});
};
export class properties {
}
