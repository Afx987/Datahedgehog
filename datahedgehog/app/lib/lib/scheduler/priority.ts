/** Library asset:datahedgehog_monitor/lib/lib/scheduler/priority.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Priority {
    export type Constructors = '_';
    export type Interface = Omit<Priority, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class Priority {
    @namedConstructor
    _(_value : number) {
        this._value = _value;
    }
    static _ : new(_value : number) => Priority;

    get value() : number {
        return this._value;
    }
    _value : number;

    private static __$idle : Priority;
    static get idle() : Priority { 
        if (this.__$idle===undefined) {
            this.__$idle = Priority._(0);
        }
        return this.__$idle;
    }

    private static __$animation : Priority;
    static get animation() : Priority { 
        if (this.__$animation===undefined) {
            this.__$animation = Priority._(100000);
        }
        return this.__$animation;
    }

    private static __$touch : Priority;
    static get touch() : Priority { 
        if (this.__$touch===undefined) {
            this.__$touch = Priority._(200000);
        }
        return this.__$touch;
    }

    private static __$kMaxOffset : number;
    static get kMaxOffset() : number { 
        if (this.__$kMaxOffset===undefined) {
            this.__$kMaxOffset = 10000;
        }
        return this.__$kMaxOffset;
    }

    [OperatorMethods.PLUS](offset : number) : Priority {
        if (new core.DartInt(offset).abs() > Priority.kMaxOffset) {
            offset = Priority.kMaxOffset * new core.DartInt(offset).sign;
        }
        return Priority._(this._value + offset);
    }
    [OperatorMethods.MINUS](offset : number) : Priority {
        return op(Op.PLUS,this,(-offset));
    }
}

export class properties {
}
