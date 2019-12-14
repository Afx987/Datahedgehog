/** Library asset:datahedgehog_monitor/lib/lib/painting/debug.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var debugAssertAllPaintingVarsUnset : (reason : string,_namedArguments? : {debugDisableShadowsOverride? : boolean}) => boolean = (reason : string,_namedArguments? : {debugDisableShadowsOverride? : boolean}) : boolean =>  {
    let {debugDisableShadowsOverride} = Object.assign({
        "debugDisableShadowsOverride" : false}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (() {if (debugDisableShadows != debugDisableShadowsOverride) {throw FlutterError(reason);} return true;}()); */;
    return true;
};
export class properties {
    private static __$debugDisableShadows : boolean;
    static get debugDisableShadows() : boolean { 
        if (this.__$debugDisableShadows===undefined) {
            this.__$debugDisableShadows = false;
        }
        return this.__$debugDisableShadows;
    }
    static set debugDisableShadows(__$value : boolean)  { 
        this.__$debugDisableShadows = __$value;
    }

}
