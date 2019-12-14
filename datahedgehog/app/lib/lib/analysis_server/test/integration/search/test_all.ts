/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/search/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./find_element_references_test";
import * as lib4 from "./find_member_declarations_test";
import * as lib5 from "./find_member_references_test";
import * as lib6 from "./find_top_level_declarations_test";
import * as lib7 from "./get_type_hierarchy_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        lib3.main();
        lib4.main();
        lib5.main();
        lib6.main();
        lib7.main();
    },{
        name : 'search'});
};
export class properties {
}
