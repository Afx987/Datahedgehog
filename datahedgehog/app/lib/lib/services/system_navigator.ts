/** Library asset:datahedgehog_monitor/lib/lib/services/system_navigator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./system_channels";

export namespace SystemNavigator {
    export type Constructors = '_';
    export type Interface = Omit<SystemNavigator, Constructors>;
}
@DartClass
export class SystemNavigator {
    @namedConstructor
    _() {
    }
    static _ : new() => SystemNavigator;

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    pop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            op(Op.LT,await lib3.SystemChannels.platform.invokeMethod.bind(lib3.SystemChannels.platform),);
            op(Op.GT,,('SystemNavigator.pop'));
        } )());
    }

}

export class properties {
}
