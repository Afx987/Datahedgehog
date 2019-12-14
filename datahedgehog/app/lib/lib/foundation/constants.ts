/** Library asset:datahedgehog_monitor/lib/lib/foundation/constants.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export class properties {
    private static __$kReleaseMode : boolean;
    static get kReleaseMode() : boolean { 
        if (this.__$kReleaseMode===undefined) {
            this.__$kReleaseMode = boolean.fromEnvironment('dart.vm.product',{
                defaultValue : false});
        }
        return this.__$kReleaseMode;
    }
    static set kReleaseMode(__$value : boolean)  { 
        this.__$kReleaseMode = __$value;
    }

}
