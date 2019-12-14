/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/lambda_does_not_have_propagated_type_hint.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var getListOfString : () => core.DartList<string> = () : core.DartList<string> =>  {
    return new core.DartList.literal<string>();
};
export var foo : () => void = () : void =>  {
    let myList : core.DartList<any> = getListOfString();
    myList.map((type : any) =>  {
        return 42;
    });
};
export var bar : () => void = () : void =>  {
    let list;
    try {
        list = new core.DartList.literal<string>();
    } catch (__error__) {

        {
            let _ = __error__;
            return;
        }
    }
    list.map((value : any) =>  {
        return `${value}`;
    });
};
export class properties {
}
