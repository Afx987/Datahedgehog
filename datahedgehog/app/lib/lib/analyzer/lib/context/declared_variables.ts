/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/context/declared_variables.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace DeclaredVariables {
    export type Constructors = 'DeclaredVariables';
    export type Interface = Omit<DeclaredVariables, Constructors>;
}
@DartClass
export class DeclaredVariables {
    _declaredVariables : core.DartHashMap<string,string>;

    get variableNames() : core.DartIterable<string> {
        return this._declaredVariables.keys;
    }
    addAll(other : DeclaredVariables) : void {
        this._declaredVariables.addAll(other._declaredVariables);
    }
    define(name : string,value : string) : void {
        op(Op.INDEX_ASSIGN,this._declaredVariables,name,value);
    }
    get(name : string) : string {
        return op(Op.INDEX,this._declaredVariables,name);
    }
    getBool(typeProvider : any,name : string) : any {
        let value : string = op(Op.INDEX,this._declaredVariables,name);
        if (value == null) {
            return new bare.createInstance(any,null,typeProvider.boolType,BoolState.UNKNOWN_VALUE);
        }
        if (value == "true") {
            return new bare.createInstance(any,null,typeProvider.boolType,BoolState.TRUE_STATE);
        }else if (value == "false") {
            return new bare.createInstance(any,null,typeProvider.boolType,BoolState.FALSE_STATE);
        }
        return new bare.createInstance(any,null,typeProvider.nullType,NullState.NULL_STATE);
    }
    getInt(typeProvider : any,name : string) : any {
        let value : string = op(Op.INDEX,this._declaredVariables,name);
        if (value == null) {
            return new bare.createInstance(any,null,typeProvider.intType,IntState.UNKNOWN_VALUE);
        }
        let bigInteger : number;
        try {
            bigInteger = core.DartInt.parse(value);
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                return new bare.createInstance(any,null,typeProvider.nullType,NullState.NULL_STATE);
            }
        }
        return new bare.createInstance(any,null,typeProvider.intType,new bare.createInstance(any,null,bigInteger));
    }
    getString(typeProvider : any,name : string) : any {
        let value : string = op(Op.INDEX,this._declaredVariables,name);
        if (value == null) {
            return new bare.createInstance(any,null,typeProvider.stringType,StringState.UNKNOWN_VALUE);
        }
        return new bare.createInstance(any,null,typeProvider.stringType,new bare.createInstance(any,null,value));
    }
    constructor() {
    }
    @defaultConstructor
    DeclaredVariables() {
        this._declaredVariables = new core.DartHashMap<string,string>();
    }
}

export class properties {
}
