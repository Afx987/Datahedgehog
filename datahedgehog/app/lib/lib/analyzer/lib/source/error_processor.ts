/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/source/error_processor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ErrorConfig {
    export type Constructors = 'ErrorConfig';
    export type Interface = Omit<ErrorConfig, Constructors>;
}
@DartClass
export class ErrorConfig {
    processors : core.DartList<ErrorProcessor>;

    constructor(codeMap : core.DartObject) {
    }
    @defaultConstructor
    ErrorConfig(codeMap : core.DartObject) {
        this.processors = new core.DartList.literal<ErrorProcessor>();
        this._processMap(codeMap);
    }
    _process(code : string,action : core.DartObject) : void {
        code = toUpperCase(code);
        action = toLowerCase(action);
        if (AnalyzerOptions.ignoreSynonyms.contains(action)) {
            this.processors.add(new ErrorProcessor.ignore(code));
        }else {
            let severity : any = this._toSeverity(action);
            if (severity != null) {
                this.processors.add(new ErrorProcessor(code,severity));
            }
        }
    }
    _processMap(codes : core.DartObject) : void {
        if (is(codes, any)) {
            codes.nodes.forEach((k : any,v : any) =>  {
                if (is(k, any) && is(v, any)) {
                    this._process(k.value,v.value);
                }
            });
        }else if (is(codes, core.DartMap<any,any>)) {
            codes.forEach((k : any,v : any) =>  {
                if (is(k, "string")) {
                    this._process(k,v);
                }
            });
        }
    }
    _toSeverity(severity : string) : any {
        return properties.severityMap.get(severity);
    }
}

export namespace ErrorProcessor {
    export type Constructors = 'ErrorProcessor';
    export type Interface = Omit<ErrorProcessor, Constructors>;
}
@DartClass
export class ErrorProcessor {
    code : string;

    severity : any;

    constructor(code : string,severity? : any) {
    }
    @defaultConstructor
    ErrorProcessor(code : string,severity? : any) {
        this.code = code;
        this.severity = severity;
    }
    @namedFactory
    static $ignore(code : string) : ErrorProcessor {
        return new ErrorProcessor(code);
    }
    static ignore : new(code : string) => ErrorProcessor;

    get description() : string {
        return `${this.code} -> ${((t)=>(!!t)?t.name:null)(this.severity)}`;
    }
    appliesTo(error : any) : boolean {
        return this.code == error.errorCode.name || this.code == error.errorCode.name.toUpperCase();
    }
    static getProcessor(analysisOptions : any,error : any) : ErrorProcessor {
        if (op(Op.EQUALS,analysisOptions,null)) {
            return null;
        }
        let processors : core.DartList<ErrorProcessor> = analysisOptions.errorProcessors;
        if (analysisOptions.strongMode) {
            processors = processors.toList();
            processors.add(_StrongModeTypeErrorProcessor.instance);
        }
        return processors.firstWhere((p : ErrorProcessor) =>  {
            return p.appliesTo(error);
        },{
            orElse : () =>  {
                return null;
            }});
    }
}

export namespace _StrongModeTypeErrorProcessor {
    export type Constructors = '_StrongModeTypeErrorProcessor';
    export type Interface = Omit<_StrongModeTypeErrorProcessor, Constructors>;
}
@DartClass
@Implements(ErrorProcessor)
export class _StrongModeTypeErrorProcessor implements ErrorProcessor.Interface {
    private static __$instance;
    static get instance() { 
        if (this.__$instance===undefined) {
            this.__$instance = new _StrongModeTypeErrorProcessor();
        }
        return this.__$instance;
    }
    static set instance(__$value : any)  { 
        this.__$instance = __$value;
    }

    get code() : string {
        return throw new core.UnsupportedError("_StrongModeTypeErrorProcessor is not specific to an error code.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get description() : string {
        return 'allStrongWarnings -> ERROR';
    }
    get severity() : any {
        return ErrorSeverity.ERROR;
    }
    appliesTo(error : any) : boolean {
        let errorCode : any = error.errorCode;
        if (is(errorCode, any)) {
            return true;
        }
        if (is(errorCode, any)) {
            return errorCode.isStrongModeError;
        }
        return false;
    }
    constructor() {
    }
    @defaultConstructor
    _StrongModeTypeErrorProcessor() {
    }
}

export class properties {
    private static __$severityMap : core.DartMap<string,any>;
    static get severityMap() : core.DartMap<string,any> { 
        if (this.__$severityMap===undefined) {
            this.__$severityMap = new core.DartMap.literal([
                ['error',ErrorSeverity.ERROR],
                ['info',ErrorSeverity.INFO],
                ['warning',ErrorSeverity.WARNING]]);
        }
        return this.__$severityMap;
    }
    static set severityMap(__$value : core.DartMap<string,any>)  { 
        this.__$severityMap = __$value;
    }

}
