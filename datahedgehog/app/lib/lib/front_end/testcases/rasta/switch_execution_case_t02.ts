/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/switch_execution_case_t02.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test : (value : any) => any = (value : any) =>  {
    let result;
    switch (value) {
        case 1:
            result = 1;
            break;
        case 2:
            result = 2;
        case 3:
            result = 3;
        default:
            result = 4;
    }
    return result;
};
export var testEmptyCases : (value : any) => any = (value : any) =>  {
    let result;
    switch (value) {
        case 1:
        case 2:
            result = 1;
        case 3:
        case 4:
            result = 2;
            break;
        case 5:
        case 6:
        default:
    }
    return result;
};
export var main : () => any = () =>  {
};
export class properties {
}
