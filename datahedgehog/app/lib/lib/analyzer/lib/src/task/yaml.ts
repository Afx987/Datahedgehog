/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/yaml.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/source_span/lib/src/span";

export namespace ParseYamlTask {
    export type Constructors = 'ParseYamlTask';
    export type Interface = Omit<ParseYamlTask, Constructors>;
}
@DartClass
export class ParseYamlTask extends any {
    private static __$CONTENT_INPUT_NAME : string;
    static get CONTENT_INPUT_NAME() : string { 
        if (this.__$CONTENT_INPUT_NAME===undefined) {
            this.__$CONTENT_INPUT_NAME = 'CONTENT_INPUT_NAME';
        }
        return this.__$CONTENT_INPUT_NAME;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ParseYamlTask',ParseYamlTask.createTask.bind(this),ParseYamlTask.buildInputs.bind(this),new core.DartList.literal<any>(YAML_DOCUMENT,YAML_ERRORS,LINE_INFO),{
                suitabilityFor : ParseYamlTask.suitabilityFor.bind(this)});
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ParseYamlTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ParseYamlTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let source : any = target.source;
        let uri : string = source.uri.toString();
        let content : string = getRequiredInput(ParseYamlTask.CONTENT_INPUT_NAME);
        if (op(Op.LT,context.getModificationStamp(source),0)) {
            let message : string = 'Content could not be read';
            if (is(context, any)) {
                let entry : any = (context as any).getCacheEntry(target);
                let exception : any = entry.exception;
                if (exception != null) {
                    message = exception.toString();
                }
            }
            op(Op.INDEX_ASSIGN,outputs,YAML_DOCUMENT,loadYamlDocument('',{
                sourceUrl : uri}));
            op(Op.INDEX_ASSIGN,outputs,YAML_ERRORS,new core.DartList.literal<any>(new bare.createInstance(any,null,source,0,0,ScannerErrorCode.UNABLE_GET_CONTENT,new core.DartList.literal(message))));
            op(Op.INDEX_ASSIGN,outputs,LINE_INFO,new bare.createInstance(any,null,new core.DartList.literal<number>(0)));
        }else {
            let document : any;
            let errors : core.DartList<any> = new core.DartList.literal<any>();
            try {
                document = loadYamlDocument(content,{
                    sourceUrl : uri});
            } catch (__error__) {

                if (is(__error__,any)){
                    let exception : any = __error__;
                    let span : lib3.SourceSpan = exception.span;
                    let offset : number = span.start.offset;
                    let length : number = span.end.offset - offset;
                    errors.add(new bare.createInstance(any,null,source,offset,length,YamlErrorCode.PARSE_ERROR,new core.DartList.literal(exception.message)));
                }


                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    throw new bare.createInstance(any,null,`Error while parsing ${source.fullName}`,new bare.createInstance(any,null,exception,stackTrace));
                }
            }
            op(Op.INDEX_ASSIGN,outputs,YAML_DOCUMENT,document);
            op(Op.INDEX_ASSIGN,outputs,YAML_ERRORS,errors);
            op(Op.INDEX_ASSIGN,outputs,LINE_INFO,new bare.createInstance(any,null,content));
        }
    }
    static buildInputs(source : any) : core.DartMap<string,any> {
        return new core.DartMap.literal([
            [ParseYamlTask.CONTENT_INPUT_NAME,CONTENT.of(source)]]);
    }
    static createTask(context : any,target : any) : ParseYamlTask {
        return new ParseYamlTask(context,target);
    }
    static suitabilityFor(target : any) : any {
        if (is(target, any) && target.shortName.endsWith('.yaml')) {
            return TaskSuitability.HIGHEST;
        }
        return TaskSuitability.NONE;
    }
}

export namespace YamlErrorCode {
    export type Constructors = 'YamlErrorCode';
    export type Interface = Omit<YamlErrorCode, Constructors>;
}
@DartClass
export class YamlErrorCode extends any {
    private static __$PARSE_ERROR : YamlErrorCode;
    static get PARSE_ERROR() : YamlErrorCode { 
        if (this.__$PARSE_ERROR===undefined) {
            this.__$PARSE_ERROR = new YamlErrorCode('PARSE_ERROR','{0}');
        }
        return this.__$PARSE_ERROR;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    YamlErrorCode(name : string,message : string,correction? : string) {
        super.DartObject(name,message,correction);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return ErrorSeverity.ERROR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.COMPILE_TIME_ERROR;
    }
}

export class properties {
}
