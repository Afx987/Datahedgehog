/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/inferred_type_uses_synthetic_function_type_named_param.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : (_namedArguments? : {x? : number}) => number = (_namedArguments? : {x? : number}) : number =>  {
    let {x} = Object.assign({
    }, _namedArguments );
    return null;
};
export var g : (_namedArguments? : {x? : number}) => string = (_namedArguments? : {x? : number}) : string =>  {
    let {x} = Object.assign({
    }, _namedArguments );
    return null;
};
export class properties {
    private static __$v;
    static get v() { 
        if (this.__$v===undefined) {
            this.__$v = new core.DartList.literal(f,g);
        }
        return this.__$v;
    }
    static set v(__$value : any)  { 
        this.__$v = __$value;
    }

}
