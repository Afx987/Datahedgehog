/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/plugin/edit/assist/assist_dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DartAssistContext {
    export type Constructors = 'DartAssistContext';
    export type Interface = Omit<DartAssistContext, Constructors>;
}
@DartClass
export class DartAssistContext {
    @AbstractProperty
    get analysisDriver() : any{ throw 'abstract'}
    @AbstractProperty
    get astProvider() : any{ throw 'abstract'}
    @AbstractProperty
    get selectionLength() : number{ throw 'abstract'}
    @AbstractProperty
    get selectionOffset() : number{ throw 'abstract'}
    @AbstractProperty
    get source() : any{ throw 'abstract'}
    @AbstractProperty
    get unit() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DartAssistContext() {
    }
}

export namespace DartAssistContributor {
    export type Constructors = 'DartAssistContributor';
    export type Interface = Omit<DartAssistContributor, Constructors>;
}
@DartClass
@Implements(any)
export class DartAssistContributor implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeAssists(context : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let driver : any = context.analysisDriver;
            let source : any = context.source;
            if (!AnalysisEngine.isDartFileName(source.fullName)) {
                return Assist.EMPTY_LIST;
            }
            let unit : any = (await driver.getResult(source.fullName)).unit;
            if (op(Op.EQUALS,unit,null)) {
                return Assist.EMPTY_LIST;
            }
            let dartContext : DartAssistContext = new _DartAssistContextImpl(new bare.createInstance(any,null,driver),context,unit);
            return this.internalComputeAssists(dartContext);
        } )());
    }

    @Abstract
    internalComputeAssists(context : DartAssistContext) : async.Future<core.DartList<any>>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DartAssistContributor() {
    }
}

export namespace _DartAssistContextImpl {
    export type Constructors = '_DartAssistContextImpl';
    export type Interface = Omit<_DartAssistContextImpl, Constructors>;
}
@DartClass
@Implements(DartAssistContext)
export class _DartAssistContextImpl implements DartAssistContext.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    astProvider : any;

    _context : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unit : any;

    constructor(astProvider : any,_context : any,unit : any) {
    }
    @defaultConstructor
    _DartAssistContextImpl(astProvider : any,_context : any,unit : any) {
        this.astProvider = astProvider;
        this._context = _context;
        this.unit = unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get analysisDriver() : any {
        return this._context.analysisDriver;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get selectionLength() : number {
        return this._context.selectionLength;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get selectionOffset() : number {
        return this._context.selectionOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        return this._context.source;
    }
}

export class properties {
}
