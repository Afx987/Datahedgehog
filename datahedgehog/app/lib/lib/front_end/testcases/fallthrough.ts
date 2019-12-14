/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/fallthrough.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : (args : core.DartList<string>) => void = (args : core.DartList<string>) : void =>  {
    let x = args.length;
    switch (x) {
        case 3:
            x = 4;
        case 5:
            break;
        case 6:
        case 7:
            if (args[0] == '') {
                break;
            }else {
                return;
            }
        case 4:
    }
};
export class properties {
}
