/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/type_substitution_identity_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_unification_test";
import * as lib4 from "./type_parser";

export var checkType : (type : any) => any = (type : any) =>  {
    let map = new core.DartMap.literal([
        [new bare.createInstance(any,null),new bare.createInstance(any,null)]]);
    let other = substitute(type,map);
    if (!core.identical(type,other)) {
        fail(`Identity substitution test failed for ${type}`);
    }
    other = Substitution.fromUpperAndLowerBounds(map,map).substituteType(type);
    if (!core.identical(type,other)) {
        fail(`Identity bounded substitution test failed for ${type}`);
    }
};
export var main : () => any = () =>  {
    for(let testCase of lib3.properties.testCases) {
        test(`${testCase}`,() =>  {
            let env = new lib4.LazyTypeEnvironment();
            checkType(env.parse(testCase.type1));
            checkType(env.parse(testCase.type2));
        });
    }
};
export class properties {
}
