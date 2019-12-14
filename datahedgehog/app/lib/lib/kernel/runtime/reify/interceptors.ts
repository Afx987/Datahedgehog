/** Library asset:datahedgehog_monitor/lib/lib/kernel/runtime/reify/interceptors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./types";

export var reify : (type : core.Type) => lib3.ReifiedType = (type : core.Type) : lib3.ReifiedType =>  {
    throw "This method should never be called in translated code";
};
export var type : (o : any) => lib3.ReifiedType = (o : any) : lib3.ReifiedType =>  {
    if (op(Op.EQUALS,o,null)) {
        return reify(core.Null);
    }else if (is(o, HasRuntimeTypeGetter)) {
        return o.$type;
    }else if (is(o, "boolean")) {
        return reify(boolean);
    }else if (is(o, "string")) {
        return reify(string);
    }else if (is(o, "number")) {
        return reify(number);
    }else if (is(o, "double")) {
        return reify(double);
    }else if (is(o, core.Type)) {
        return reify(core.Type);
    }else if (is(o, core.AbstractClassInstantiationError)) {
        return reify(core.AbstractClassInstantiationError);
    }else if (is(o, core.NoSuchMethodError)) {
        return reify(core.NoSuchMethodError);
    }else if (is(o, core.CyclicInitializationError)) {
        return reify(core.CyclicInitializationError);
    }else if (is(o, core.UnsupportedError)) {
        return reify(core.UnsupportedError);
    }else if (is(o, core.DartIntegerDivisionByZeroException)) {
        return reify(core.DartIntegerDivisionByZeroException);
    }else if (is(o, core.RangeError)) {
        return reify(core.RangeError);
    }else if (is(o, core.ArgumentError)) {
        return reify(core.ArgumentError);
    }
    let type : lib3.ReifiedType = properties._type.get(o);
    if (type != null) {
        return type;
    }
    throw `Unable to get runtime type of ${o.runtimeType}`;
};
export var attachType : (o : core.DartObject,t : lib3.ReifiedType) => any = (o : core.DartObject,t : lib3.ReifiedType) : any =>  {
    properties._type.set(o,t);
    return o;
};
export namespace HasRuntimeTypeGetter {
    export type Constructors = 'HasRuntimeTypeGetter';
    export type Interface = Omit<HasRuntimeTypeGetter, Constructors>;
}
@DartClass
export class HasRuntimeTypeGetter {
    @AbstractProperty
    get $type() : lib3.ReifiedType{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    HasRuntimeTypeGetter() {
    }
}

export class properties {
    private static __$_type : core.DartExpando<any>;
    static get _type() : core.DartExpando<any> { 
        if (this.__$_type===undefined) {
            this.__$_type = new core.DartExpando<any>();
        }
        return this.__$_type;
    }
    static set _type(__$value : core.DartExpando<any>)  { 
        this.__$_type = __$value;
    }

}
