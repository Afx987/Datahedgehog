/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/round_trip_self_check.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./round_trip";
import * as lib4 from "./self_check_util";

export var main : (args : core.DartList<string>) => void = (args : core.DartList<string>) : void =>  {
    lib4.runSelfCheck(args,(filename : string) =>  {
        lib3.main(new core.DartList.literal(filename));
    });
};
export class properties {
}
