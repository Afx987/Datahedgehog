/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/model.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ResultDescriptorImpl {
    export type Constructors = 'ResultDescriptorImpl';
    export type Interface<V> = Omit<ResultDescriptorImpl<V>, Constructors>;
}
@DartClass
@Implements(any)
export class ResultDescriptorImpl<V> implements any.Interface {
    private static __$_NEXT_HASH : number;
    static get _NEXT_HASH() : number { 
        if (this.__$_NEXT_HASH===undefined) {
            this.__$_NEXT_HASH = 0;
        }
        return this.__$_NEXT_HASH;
    }
    static set _NEXT_HASH(__$value : number)  { 
        this.__$_NEXT_HASH = __$value;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hashCode;

    name : string;

    defaultValue : V;

    cachingPolicy : any;

    constructor(name : string,defaultValue : V,_namedArguments? : {cachingPolicy? : any}) {
    }
    @defaultConstructor
    ResultDescriptorImpl(name : string,defaultValue : V,_namedArguments? : {cachingPolicy? : any}) {
        let {cachingPolicy} = Object.assign({
            "cachingPolicy" : properties.DEFAULT_CACHING_POLICY}, _namedArguments );
        this.hashCode = ResultDescriptorImpl._NEXT_HASH++;
        this.name = name;
        this.defaultValue = defaultValue;
        this.cachingPolicy = cachingPolicy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, ResultDescriptorImpl<any>) && other.hashCode == this.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    of(target : any,_namedArguments? : {flushOnAccess? : boolean}) : any {
        let {flushOnAccess} = Object.assign({
            "flushOnAccess" : false}, _namedArguments );
        return new bare.createInstance(any,null,target,this,{
            flushOnAccess : flushOnAccess});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace SimpleResultCachingPolicy {
    export type Constructors = 'SimpleResultCachingPolicy';
    export type Interface<T> = Omit<SimpleResultCachingPolicy<T>, Constructors>;
}
@DartClass
@Implements(any)
export class SimpleResultCachingPolicy<T> implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maxActiveSize : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maxIdleSize : number;

    constructor(maxActiveSize : number,maxIdleSize : number) {
    }
    @defaultConstructor
    SimpleResultCachingPolicy(maxActiveSize : number,maxIdleSize : number) {
        this.maxActiveSize = maxActiveSize;
        this.maxIdleSize = maxIdleSize;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    measure(object : T) : number {
        return 1;
    }
}

export namespace TaskDescriptorImpl {
    export type Constructors = 'TaskDescriptorImpl';
    export type Interface = Omit<TaskDescriptorImpl, Constructors>;
}
@DartClass
@Implements(any)
export class TaskDescriptorImpl implements any.Interface {
    name : string;

    buildTask : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createTaskInputs : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    results : core.DartList<any>;

    _suitabilityFor : any;

    constructor(name : string,buildTask : any,createTaskInputs : any,results : core.DartList<any>,_namedArguments? : {suitabilityFor? : any}) {
    }
    @defaultConstructor
    TaskDescriptorImpl(name : string,buildTask : any,createTaskInputs : any,results : core.DartList<any>,_namedArguments? : {suitabilityFor? : any}) {
        let {suitabilityFor} = Object.assign({
        }, _namedArguments );
        this._suitabilityFor = (suitabilityFor || TaskDescriptorImpl._defaultSuitability.bind(this));
        this.name = name;
        this.buildTask = buildTask;
        this.createTaskInputs = createTaskInputs;
        this.results = results;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createTask(context : any,target : any,inputs : core.DartMap<string,any>) : any {
        let task : any = this.buildTask(context,target);
        task.inputs = inputs;
        return task;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    suitabilityFor(target : any) : any {
        return this._suitabilityFor(target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
    static _defaultSuitability(target : any) : any {
        return TaskSuitability.LOWEST;
    }
}

export namespace ListResultDescriptorImpl {
    export type Constructors = ResultDescriptorImpl.Constructors | 'ListResultDescriptorImpl';
    export type Interface<E> = Omit<ListResultDescriptorImpl<E>, Constructors>;
}
@DartClass
@Implements(any)
export class ListResultDescriptorImpl<E> extends ResultDescriptorImpl<core.DartList<E>> implements any.Interface {
    constructor(name : string,defaultValue : core.DartList<E>,_namedArguments? : {cachingPolicy? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListResultDescriptorImpl(name : string,defaultValue : core.DartList<E>,_namedArguments? : {cachingPolicy? : any}) {
        let {cachingPolicy} = Object.assign({
            "cachingPolicy" : properties.DEFAULT_CACHING_POLICY}, _namedArguments );
        super.ResultDescriptorImpl(name,defaultValue,{
            cachingPolicy : cachingPolicy});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    of(target : any,_namedArguments? : {flushOnAccess? : boolean}) : any {
        let {flushOnAccess} = Object.assign({
            "flushOnAccess" : false}, _namedArguments );
        if (flushOnAccess) {
            throw new core.StateError('Cannot flush a list of values');
        }
        return new bare.createInstance(any,null,target,this);
    }
}

export class properties {
    private static __$DEFAULT_CACHING_POLICY : any;
    static get DEFAULT_CACHING_POLICY() : any { 
        if (this.__$DEFAULT_CACHING_POLICY===undefined) {
            this.__$DEFAULT_CACHING_POLICY = new SimpleResultCachingPolicy<any>(-1,-1);
        }
        return this.__$DEFAULT_CACHING_POLICY;
    }
    static set DEFAULT_CACHING_POLICY(__$value : any)  { 
        this.__$DEFAULT_CACHING_POLICY = __$value;
    }

}
