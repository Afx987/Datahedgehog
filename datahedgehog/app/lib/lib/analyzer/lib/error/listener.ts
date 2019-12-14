/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/error/listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/source_span/lib/src/span";
import * as collection from "@dart2ts/dart/core";

export namespace AnalysisErrorListener {
    export type Constructors = 'AnalysisErrorListener';
    export type Interface = Omit<AnalysisErrorListener, Constructors>;
}
@DartClass
export class AnalysisErrorListener {
    private static __$NULL_LISTENER : AnalysisErrorListener;
    static get NULL_LISTENER() : AnalysisErrorListener { 
        if (this.__$NULL_LISTENER===undefined) {
            this.__$NULL_LISTENER = new _NullErrorListener();
        }
        return this.__$NULL_LISTENER;
    }
    static set NULL_LISTENER(__$value : AnalysisErrorListener)  { 
        this.__$NULL_LISTENER = __$value;
    }

    @Abstract
    onError(error : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AnalysisErrorListener() {
    }
}

export namespace BooleanErrorListener {
    export type Constructors = 'BooleanErrorListener';
    export type Interface = Omit<BooleanErrorListener, Constructors>;
}
@DartClass
@Implements(AnalysisErrorListener)
export class BooleanErrorListener implements AnalysisErrorListener.Interface {
    _errorReported : boolean;

    get errorReported() : boolean {
        return this._errorReported;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onError(error : any) : void {
        this._errorReported = true;
    }
    constructor() {
    }
    @defaultConstructor
    BooleanErrorListener() {
        this._errorReported = false;
    }
}

export namespace ErrorReporter {
    export type Constructors = 'ErrorReporter';
    export type Interface = Omit<ErrorReporter, Constructors>;
}
@DartClass
export class ErrorReporter {
    _errorListener : AnalysisErrorListener;

    _defaultSource : any;

    _source : any;

    constructor(_errorListener : AnalysisErrorListener,_defaultSource : any) {
    }
    @defaultConstructor
    ErrorReporter(_errorListener : AnalysisErrorListener,_defaultSource : any) {
        this._errorListener = _errorListener;
        this._defaultSource = _defaultSource;
        if (op(Op.EQUALS,this._errorListener,null)) {
            throw new core.ArgumentError("An error listener must be provided");
        }else if (op(Op.EQUALS,this._defaultSource,null)) {
            throw new core.ArgumentError("A default source must be provided");
        }
        this._source = this._defaultSource;
    }
    get source() : any {
        return this._source;
    }
    set source(source : any) {
        this._source = (source || this._defaultSource);
    }
    reportError(error : any) : void {
        this._errorListener.onError(error);
    }
    reportErrorForElement(errorCode : any,element : any,arguments? : core.DartList<core.DartObject>) : void {
        let length : number = 0;
        if (is(element, any)) {
            length = 6;
        }else if (is(element, any)) {
            length = 6;
        }else {
            length = element.nameLength;
        }
        this.reportErrorForOffset(errorCode,element.nameOffset,length,arguments);
    }
    reportErrorForNode(errorCode : any,node : any,arguments? : core.DartList<core.DartObject>) : void {
        this.reportErrorForOffset(errorCode,node.offset,node.length,arguments);
    }
    reportErrorForOffset(errorCode : any,offset : number,length : number,arguments? : core.DartList<core.DartObject>) : void {
        this._errorListener.onError(new bare.createInstance(any,null,this._source,offset,length,errorCode,arguments));
    }
    reportErrorForSpan(errorCode : any,span : lib3.SourceSpan,arguments? : core.DartList<core.DartObject>) : void {
        this.reportErrorForOffset(errorCode,span.start.offset,span.length,arguments);
    }
    reportErrorForToken(errorCode : any,token : any,arguments? : core.DartList<core.DartObject>) : void {
        this.reportErrorForOffset(errorCode,token.offset,token.length,arguments);
    }
    reportTypeErrorForNode(errorCode : any,node : any,arguments : core.DartList<core.DartObject>) : void {
        this._convertTypeNames(arguments);
        this.reportErrorForOffset(errorCode,node.offset,node.length,arguments);
    }
    _convertTypeNames(arguments : core.DartList<core.DartObject>) : void {
        var displayName : (type : any) => string = (type : any) : string =>  {
            if (is(type, any)) {
                let name : string = type.name;
                if (name != null && new core.DartString(name).length > 0) {
                    let buffer : core.DartStringBuffer = new core.DartStringBuffer();
                    buffer.write(name);
                    (type as any).appendTo(buffer,new core.DartSet.identity());
                    return buffer.toString();
                }
            }
            return type.displayName;
        };
        if (this._hasEqualTypeNames(arguments)) {
            let count : number = arguments.length;
            for(let i : number = 0; i < count; i++){
                let argument : core.DartObject = arguments[i];
                if (is(argument, any)) {
                    let element : any = argument.element;
                    if (op(Op.EQUALS,element,null)) {
                        arguments[i] = displayName(argument);
                    }else {
                        arguments[i] = element.getExtendedDisplayName(displayName(argument));
                    }
                }
            }
        }else {
            let count : number = arguments.length;
            for(let i : number = 0; i < count; i++){
                let argument : core.DartObject = arguments[i];
                if (is(argument, any)) {
                    arguments[i] = displayName(argument);
                }
            }
        }
    }
    _hasEqualTypeNames(arguments : core.DartList<core.DartObject>) : boolean {
        let count : number = arguments.length;
        let typeNames : core.DartHashSet<string> = new core.DartHashSet<string>();
        for(let i : number = 0; i < count; i++){
            let argument : core.DartObject = arguments[i];
            if (is(argument, any) && !typeNames.add(argument.displayName)) {
                return true;
            }
        }
        return false;
    }
}

export namespace RecordingErrorListener {
    export type Constructors = 'RecordingErrorListener';
    export type Interface = Omit<RecordingErrorListener, Constructors>;
}
@DartClass
@Implements(AnalysisErrorListener)
export class RecordingErrorListener implements AnalysisErrorListener.Interface {
    _errors : core.DartMap<any,core.DartHashSet<any>>;

    get errors() : core.DartList<any> {
        let numEntries : number = this._errors.length;
        if (numEntries == 0) {
            return AnalysisError.NO_ERRORS;
        }
        let resultList : core.DartList<any> = new core.DartList<any>();
        for(let errors of this._errors.values) {
            resultList.addAll(errors);
        }
        return resultList;
    }
    addAll(listener : RecordingErrorListener) : void {
        for(let error of listener.errors) {
            this.onError(error);
        }
    }
    getErrorsForSource(source : any) : core.DartList<any> {
        let errorsForSource : core.DartHashSet<any> = this._errors.get(source);
        if (op(Op.EQUALS,errorsForSource,null)) {
            return AnalysisError.NO_ERRORS;
        }else {
            return new core.DartList.from(errorsForSource);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onError(error : any) : void {
        let source : any = error.source;
        let errorsForSource : core.DartHashSet<any> = this._errors.get(source);
        if (op(Op.EQUALS,this._errors.get(source),null)) {
            errorsForSource = new core.DartHashSet<any>();
            this._errors.set(source,errorsForSource);
        }
        errorsForSource.add(error);
    }
    constructor() {
    }
    @defaultConstructor
    RecordingErrorListener() {
        this._errors = new core.DartHashMap<any,core.DartHashSet<any>>();
    }
}

export namespace _NullErrorListener {
    export type Constructors = '_NullErrorListener';
    export type Interface = Omit<_NullErrorListener, Constructors>;
}
@DartClass
@Implements(AnalysisErrorListener)
export class _NullErrorListener implements AnalysisErrorListener.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onError(event : any) : void {
    }
    constructor() {
    }
    @defaultConstructor
    _NullErrorListener() {
    }
}

export class properties {
}
