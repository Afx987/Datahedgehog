/** Library asset:datahedgehog_monitor/lib/lib/_internal/pub/asset/dart/utils.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var getErrorMessage : (error : any) => string = (error : any) : string =>  {
    return new core.DartString(error.toString()).replaceFirst(properties._exceptionPrefix,'');
};
export class properties {
    private static __$_exceptionPrefix;
    static get _exceptionPrefix() { 
        if (this.__$_exceptionPrefix===undefined) {
            this.__$_exceptionPrefix = new core.DartRegExp('^([A-Z][a-zA-Z]*)?(Exception|Error): ');
        }
        return this.__$_exceptionPrefix;
    }
    static set _exceptionPrefix(__$value : any)  { 
        this.__$_exceptionPrefix = __$value;
    }

}
