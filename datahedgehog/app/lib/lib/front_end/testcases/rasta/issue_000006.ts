/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000006.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.list.add(1);
};
export class properties {
    private static __$list;
    static get list() { 
        if (this.__$list===undefined) {
            this.__$list = new core.DartList.literal(1,2,3);
        }
        return this.__$list;
    }
    static set list(__$value : any)  { 
        this.__$list = __$value;
    }

}
