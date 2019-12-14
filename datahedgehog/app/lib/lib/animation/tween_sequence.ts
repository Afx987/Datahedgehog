/** Library asset:datahedgehog_monitor/lib/lib/animation/tween_sequence.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./tween";

export var _evaluateAt : (t : double,index : number) => any = (t : double,index : number) : any =>  {
    let element : TweenSequenceItem<any> = properties._items[index];
    let tInterval : double = properties._intervals[index].value(t);
    return element.tween.transform(tInterval);
};
export var transform : (t : double) => any = (t : double) : any =>  {
    /* TODO (AssertStatementImpl) : assert (t >= 0.0 && t <= 1.0); */;
    if (t == 1.0) return _evaluateAt(t,properties._items.length - 1);
    for(let index : number = 0; index < properties._items.length; index++){
        if (properties._intervals[index].contains(t)) return _evaluateAt(t,index);
    }
    /* TODO (AssertStatementImpl) : assert (false, 'TweenSequence.evaluate() could not find a interval for $t'); */;
    return null;
};
export var toString : () => string = () : string =>  {
    return `TweenSequence(${properties._items.length} items)`;
};
export namespace TweenSequence {
    export type Constructors = lib3.Animatable.Constructors | 'TweenSequence' | 'addAll' | 'add';
    export type Interface<T> = Omit<TweenSequence<T>, Constructors>;
}
@DartClass
export class TweenSequence<T> extends lib3.Animatable<T> {
    constructor(items : core.DartList<TweenSequenceItem<T>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TweenSequence(items : core.DartList<TweenSequenceItem<T>>) {
        this.totalWeight = 0.0;
        this.start = 0.0;
        this.i = 0;
        this.end = this.i == properties._items.length - 1 ? 1.0 : this.start + properties._items[this.i].weight / this.totalWeight;
        this.start = this.end;
        this.assert = assert;
    }
     : any;

     : any;

    @namedConstructor
    addAll(items : any) {
        this.totalWeight = 0.0;
        this.start = 0.0;
        this.i = 0;
        this.end = this.i == properties._items.length - 1 ? 1.0 : this.start + properties._items[this.i].weight / this.totalWeight;
        this.start = this.end;
    }
    static addAll : new<T>(items : any) => TweenSequence<T>;

    totalWeight : double;

    item : TweenSequenceItem<T>;

     : any;

     : any;

     : any;

     : any;

    start : double;

    i : number;

     : any;

     : any;

    end : double;

    @namedConstructor
    add(_Interval : <T>(start : any,end : any) => any) {
        this.totalWeight = 0.0;
        this.start = 0.0;
        this.i = 0;
        this.end = this.i == properties._items.length - 1 ? 1.0 : this.start + properties._items[this.i].weight / this.totalWeight;
        this.start = this.end;
    }
    static add : new<T>(_Interval : <T>(start : any,end : any) => any) => TweenSequence<T>;

    start;

}

export namespace TweenSequenceItem {
    export type Constructors = 'TweenSequenceItem';
    export type Interface<T> = Omit<TweenSequenceItem<T>, Constructors>;
}
@DartClass
export class TweenSequenceItem<T> {
    constructor(_namedArguments? : {tween? : lib3.Animatable<T>,weight? : double}) {
    }
    @defaultConstructor
    TweenSequenceItem(_namedArguments? : {tween? : lib3.Animatable<T>,weight? : double}) {
        let {tween,weight} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.tween = tween;
        this.weight = weight;
    }
     : any;

     : any;

     : any;

    tween : lib3.Animatable<T>;

    weight : double;

}

export namespace _Interval {
    export type Constructors = '_Interval';
    export type Interface = Omit<_Interval, Constructors>;
}
@DartClass
export class _Interval {
    constructor(start : double,end : double) {
    }
    @defaultConstructor
    _Interval(start : double,end : double) {
        this.assert = assert;
        this.start = start;
        this.end = end;
    }
     : any;

     : any;

    start : double;

    end : double;

    contains(t : double) : boolean {
        return t >= this.start && t < this.end;
    }
    value(t : double) : double {
        return (t - this.start) / (this.end - this.start);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `<${this.start}, ${this.end}>`;
    }
}

export class properties {
    private static __$_items : core.DartList<TweenSequenceItem<any>>;
    static get _items() : core.DartList<TweenSequenceItem<any>> { 
        if (this.__$_items===undefined) {
            this.__$_items = new core.DartList.literal<TweenSequenceItem<any>>();
        }
        return this.__$_items;
    }
    static set _items(__$value : core.DartList<TweenSequenceItem<any>>)  { 
        this.__$_items = __$value;
    }

    private static __$_intervals : core.DartList<_Interval>;
    static get _intervals() : core.DartList<_Interval> { 
        if (this.__$_intervals===undefined) {
            this.__$_intervals = new core.DartList.literal<_Interval>();
        }
        return this.__$_intervals;
    }
    static set _intervals(__$value : core.DartList<_Interval>)  { 
        this.__$_intervals = __$value;
    }

}
