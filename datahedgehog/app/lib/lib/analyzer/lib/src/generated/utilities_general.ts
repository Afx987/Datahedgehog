/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/utilities_general.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as developer from "@dart2ts/dart/developer";

export var isFalse : (value : core.DartObject) => boolean = (value : core.DartObject) : boolean =>  {
    return is(value, "boolean") ? !value : toLowerCase(value) == 'false';
};
export var isTrue : (value : core.DartObject) => boolean = (value : core.DartObject) : boolean =>  {
    return is(value, "boolean") ? value : toLowerCase(value) == 'true';
};
export var toBool : (value : core.DartObject) => boolean = (value : core.DartObject) : boolean =>  {
    if (is(value, "boolean")) {
        return value;
    }
    let string : string = toLowerCase(value);
    if (string == 'true') {
        return true;
    }
    if (string == 'false') {
        return false;
    }
    return null;
};
export var toLowerCase : (value : core.DartObject) => string = (value : core.DartObject) : string =>  {
    return ((_345_)=>(!!_345_)?new core.DartString(_345_).toLowerCase():null)(((_346_)=>(!!_346_)?_346_.toString():null)(value));
};
export var toUpperCase : (value : core.DartObject) => string = (value : core.DartObject) : string =>  {
    return ((_347_)=>(!!_347_)?new core.DartString(_347_).toUpperCase():null)(((_348_)=>(!!_348_)?_348_.toString():null)(value));
};
export namespace LimitedQueue {
    export type Constructors = collection.ListQueue.Constructors | 'LimitedQueue';
    export type Interface<E> = Omit<LimitedQueue<E>, Constructors>;
}
@DartClass
export class LimitedQueue<E> extends collection.ListQueue<E> {
    limit : number;

    constructor(limit : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LimitedQueue(limit : number) {
        this.limit = limit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(o : E) : void {
        super.add(o);
        while (this.length > this.limit){
            this.remove(this.first);
        }
    }
}

export namespace PerformanceTag {
    export type Constructors = never;
    export type Interface = Omit<PerformanceTag, Constructors>;
}
@DartClass
export class PerformanceTag {
    static get all() : core.DartList<PerformanceTag> {
        return _PerformanceTagImpl.all.toList();
    }
    static get current() : PerformanceTag {
        return _PerformanceTagImpl.current;
    }
    static get UNKNOWN() : PerformanceTag {
        return _PerformanceTagImpl.UNKNOWN;
    }
    constructor(label : string) {
    }
    @defaultFactory
    static $PerformanceTag(label : string) : PerformanceTag {
        return new _PerformanceTagImpl(label);
    }
    @AbstractProperty
    get elapsedMs() : number{ throw 'abstract'}
    @AbstractProperty
    get label() : string{ throw 'abstract'}
    @Abstract
    makeCurrent() : PerformanceTag{ throw 'abstract'}
    @Abstract
    makeCurrentWhile(f : () => any) : any{ throw 'abstract'}
    static reset() : void {
        for(let tag of _PerformanceTagImpl.all) {
            tag.stopwatch.reset();
        }
    }
}

export namespace _PerformanceTagImpl {
    export type Constructors = '_PerformanceTagImpl';
    export type Interface = Omit<_PerformanceTagImpl, Constructors>;
}
@DartClass
@Implements(PerformanceTag)
export class _PerformanceTagImpl implements PerformanceTag.Interface {
    private static __$current : _PerformanceTagImpl;
    static get current() : _PerformanceTagImpl { 
        if (this.__$current===undefined) {
            this.__$current = _PerformanceTagImpl.UNKNOWN;
        }
        return this.__$current;
    }
    static set current(__$value : _PerformanceTagImpl)  { 
        this.__$current = __$value;
    }

    private static __$UNKNOWN : _PerformanceTagImpl;
    static get UNKNOWN() : _PerformanceTagImpl { 
        if (this.__$UNKNOWN===undefined) {
            this.__$UNKNOWN = new _PerformanceTagImpl('unknown');
        }
        return this.__$UNKNOWN;
    }
    static set UNKNOWN(__$value : _PerformanceTagImpl)  { 
        this.__$UNKNOWN = __$value;
    }

    private static __$all : core.DartList<_PerformanceTagImpl>;
    static get all() : core.DartList<_PerformanceTagImpl> { 
        if (this.__$all===undefined) {
            this.__$all = new core.DartList.literal<_PerformanceTagImpl>();
        }
        return this.__$all;
    }
    static set all(__$value : core.DartList<_PerformanceTagImpl>)  { 
        this.__$all = __$value;
    }

    userTag : developer.UserTag;

    stopwatch : core.DartStopwatch;

    constructor(label : string) {
    }
    @defaultConstructor
    _PerformanceTagImpl(label : string) {
        this.userTag = new developer.UserTag(label);
        this.stopwatch = new core.DartStopwatch();
        _PerformanceTagImpl.all.add(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get elapsedMs() : number {
        return this.stopwatch.elapsedMilliseconds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get label() : string {
        return this.userTag.label;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    makeCurrent() : PerformanceTag {
        if (core.identical(this,_PerformanceTagImpl.current)) {
            return _PerformanceTagImpl.current;
        }
        let previous : _PerformanceTagImpl = _PerformanceTagImpl.current;
        previous.stopwatch.stop();
        this.stopwatch.start();
        _PerformanceTagImpl.current = this;
        this.userTag.makeCurrent();
        return previous;
    }
    makeCurrentWhile(f : () => any) : any {
        let prevTag : PerformanceTag = this.makeCurrent();
        try {
            return f();
        } finally {
            prevTag.makeCurrent();
        }
    }
}

export class properties {
}
