/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/html.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as collection from "@dart2ts/dart/core";
import * as lib5 from "@dart2ts.packages/source_span/lib/src/file";

export namespace DartScript {
    export type Constructors = 'DartScript';
    export type Interface = Omit<DartScript, Constructors>;
}
@DartClass
@Implements(any)
export class DartScript implements any.Interface {
    private static __$EMPTY_LIST : core.DartList<DartScript>;
    static get EMPTY_LIST() : core.DartList<DartScript> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<DartScript>();
        }
        return this.__$EMPTY_LIST;
    }
    static set EMPTY_LIST(__$value : core.DartList<DartScript>)  { 
        this.__$EMPTY_LIST = __$value;
    }

    source : any;

    fragments : core.DartList<ScriptFragment>;

    constructor(source : any,fragments : core.DartList<ScriptFragment>) {
    }
    @defaultConstructor
    DartScript(source : any,fragments : core.DartList<ScriptFragment>) {
        this.source = source;
        this.fragments = fragments;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get contents() : any {
        return new bare.createInstance(any,null,this.modificationStamp,this.fragments[0].content);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get encoding() : string {
        return this.source.encoding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullName() : string {
        return this.source.fullName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInSystemLibrary() : boolean {
        return this.source.isInSystemLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get librarySource() : any {
        return this.source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get modificationStamp() : number {
        return this.source.modificationStamp;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get shortName() : string {
        return this.source.shortName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uri() : lib3.Uri {
        return this.source.uri.replace({
            queryParameters : new core.DartMap.literal([
                ['offset',new core.DartInt(this.fragments[0].offset).toString()]])});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriKind() : any {
        return throw new core.StateError('uriKind not supported for scripts');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exists() : boolean {
        return this.source.exists();
    }
}

export namespace DartScriptsTask {
    export type Constructors = 'DartScriptsTask';
    export type Interface = Omit<DartScriptsTask, Constructors>;
}
@DartClass
export class DartScriptsTask extends any {
    private static __$DOCUMENT_INPUT : string;
    static get DOCUMENT_INPUT() : string { 
        if (this.__$DOCUMENT_INPUT===undefined) {
            this.__$DOCUMENT_INPUT = 'DOCUMENT';
        }
        return this.__$DOCUMENT_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'DartScriptsTask',DartScriptsTask.createTask.bind(this),DartScriptsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.DART_SCRIPTS,REFERENCED_LIBRARIES));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    DartScriptsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return DartScriptsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let source : any = target.source;
        let document : any = getRequiredInput(DartScriptsTask.DOCUMENT_INPUT);
        let libraries : core.DartList<any> = new core.DartList.literal<any>();
        let inlineScripts : core.DartList<DartScript> = new core.DartList.literal<DartScript>();
        let scripts : core.DartList<any> = document.getElementsByTagName('script');
        for(let script of scripts) {
            let attributes : core.DartLinkedHashMap<any,string> = script.attributes;
            if (op(Op.INDEX,attributes,'type') == 'application/dart') {
                let src : string = op(Op.INDEX,attributes,'src');
                if (src == null) {
                    if (script.hasContent()) {
                        let fragments : core.DartList<ScriptFragment> = new core.DartList.literal<ScriptFragment>();
                        for(let node of script.nodes) {
                            if (op(Op.EQUALS,node.nodeType,Node.TEXT_NODE)) {
                                let start : lib5.FileLocation = node.sourceSpan.start;
                                fragments.add(new ScriptFragment(start.offset,start.line,start.column,(node as any).data));
                            }
                        }
                        inlineScripts.add(new DartScript(source,fragments));
                    }
                }else if (AnalysisEngine.isDartFileName(src)) {
                    let source : any = context.sourceFactory.resolveUri(target.source,src);
                    if (source != null) {
                        libraries.add(source);
                    }
                }
            }
        }
        op(Op.INDEX_ASSIGN,outputs,REFERENCED_LIBRARIES,libraries.isEmpty ? Source.EMPTY_LIST : libraries);
        op(Op.INDEX_ASSIGN,outputs,properties.DART_SCRIPTS,inlineScripts.isEmpty ? DartScript.EMPTY_LIST : inlineScripts);
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        return new core.DartMap.literal([
            [DartScriptsTask.DOCUMENT_INPUT,HTML_DOCUMENT.of(target)]]);
    }
    static createTask(context : any,target : any) : DartScriptsTask {
        return new DartScriptsTask(context,target);
    }
}

export namespace HtmlErrorsTask {
    export type Constructors = 'HtmlErrorsTask';
    export type Interface = Omit<HtmlErrorsTask, Constructors>;
}
@DartClass
export class HtmlErrorsTask extends any {
    private static __$INPUT_SUFFIX : string;
    static get INPUT_SUFFIX() : string { 
        if (this.__$INPUT_SUFFIX===undefined) {
            this.__$INPUT_SUFFIX = '_input';
        }
        return this.__$INPUT_SUFFIX;
    }

    private static __$DART_ERRORS_INPUT : string;
    static get DART_ERRORS_INPUT() : string { 
        if (this.__$DART_ERRORS_INPUT===undefined) {
            this.__$DART_ERRORS_INPUT = 'DART_ERRORS';
        }
        return this.__$DART_ERRORS_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'HtmlErrorsTask',HtmlErrorsTask.createTask.bind(this),HtmlErrorsTask.buildInputs.bind(this),new core.DartList.literal<any>(HTML_ERRORS));
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    HtmlErrorsTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return HtmlErrorsTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let enginePlugin : any = AnalysisEngine.instance.enginePlugin;
        let dartErrors : core.DartList<core.DartList<any>> = getRequiredInput(HtmlErrorsTask.DART_ERRORS_INPUT);
        let htmlErrors : core.DartList<core.DartList<any>> = new core.DartList.literal<core.DartList<any>>();
        for(let result of enginePlugin.htmlErrors) {
            let inputName : string = op(Op.PLUS,result.name,HtmlErrorsTask.INPUT_SUFFIX);
            htmlErrors.add(getRequiredInput(inputName));
        }
        let errorLists : core.DartList<core.DartList<any>> = new core.DartList.literal<core.DartList<any>>();
        errorLists.addAll(dartErrors);
        errorLists.addAll(htmlErrors);
        op(Op.INDEX_ASSIGN,outputs,HTML_ERRORS,AnalysisError.mergeLists(errorLists));
    }
    static buildInputs(target : any) : core.DartMap<string,any> {
        let enginePlugin : any = AnalysisEngine.instance.enginePlugin;
        let inputs : core.DartMap<string,any> = new core.DartMap.literal([
            [HtmlErrorsTask.DART_ERRORS_INPUT,properties.DART_SCRIPTS.of(target).toListOf(DART_ERRORS)]]);
        for(let result of enginePlugin.htmlErrors) {
            let inputName : string = op(Op.PLUS,result.name,HtmlErrorsTask.INPUT_SUFFIX);
            inputs.set(inputName,result.of(target));
        }
        return inputs;
    }
    static createTask(context : any,target : any) : HtmlErrorsTask {
        return new HtmlErrorsTask(context,target);
    }
}

export namespace ParseHtmlTask {
    export type Constructors = 'ParseHtmlTask';
    export type Interface = Omit<ParseHtmlTask, Constructors>;
}
@DartClass
export class ParseHtmlTask extends any {
    private static __$CONTENT_INPUT_NAME : string;
    static get CONTENT_INPUT_NAME() : string { 
        if (this.__$CONTENT_INPUT_NAME===undefined) {
            this.__$CONTENT_INPUT_NAME = 'CONTENT_INPUT_NAME';
        }
        return this.__$CONTENT_INPUT_NAME;
    }

    private static __$MODIFICATION_TIME_INPUT : string;
    static get MODIFICATION_TIME_INPUT() : string { 
        if (this.__$MODIFICATION_TIME_INPUT===undefined) {
            this.__$MODIFICATION_TIME_INPUT = 'MODIFICATION_TIME_INPUT';
        }
        return this.__$MODIFICATION_TIME_INPUT;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'ParseHtmlTask',ParseHtmlTask.createTask.bind(this),ParseHtmlTask.buildInputs.bind(this),new core.DartList.literal<any>(HTML_DOCUMENT,properties.HTML_DOCUMENT_ERRORS,LINE_INFO),{
                suitabilityFor : ParseHtmlTask.suitabilityFor.bind(this)});
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    ParseHtmlTask(context : any,target : any) {
        super.DartObject(context,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return ParseHtmlTask.DESCRIPTOR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let content : string = getRequiredInput(ParseHtmlTask.CONTENT_INPUT_NAME);
        let modificationTime : number = getRequiredInput(ParseHtmlTask.MODIFICATION_TIME_INPUT);
        if (modificationTime < 0) {
            let message : string = 'Content could not be read';
            if (is(context, any)) {
                let entry : any = (context as any).getCacheEntry(target);
                let exception : any = entry.exception;
                if (exception != null) {
                    message = exception.toString();
                }
            }
            op(Op.INDEX_ASSIGN,outputs,HTML_DOCUMENT,new bare.createInstance(any,null));
            op(Op.INDEX_ASSIGN,outputs,properties.HTML_DOCUMENT_ERRORS,new core.DartList.literal<any>(new bare.createInstance(any,null,target.source,0,0,ScannerErrorCode.UNABLE_GET_CONTENT,new core.DartList.literal(message))));
            op(Op.INDEX_ASSIGN,outputs,LINE_INFO,new bare.createInstance(any,null,new core.DartList.literal<number>(0)));
        }else {
            let parser : any = new bare.createInstance(any,null,content,{
                generateSpans : true,lowercaseAttrName : false});
            parser.compatMode = 'quirks';
            let document : any = parser.parse();
            let errors : core.DartList<any> = new core.DartList.literal<any>();
            op(Op.INDEX_ASSIGN,outputs,HTML_DOCUMENT,document);
            op(Op.INDEX_ASSIGN,outputs,properties.HTML_DOCUMENT_ERRORS,errors);
            op(Op.INDEX_ASSIGN,outputs,LINE_INFO,ParseHtmlTask._computeLineInfo(content));
        }
    }
    static buildInputs(source : any) : core.DartMap<string,any> {
        return new core.DartMap.literal([
            [ParseHtmlTask.CONTENT_INPUT_NAME,CONTENT.of(source)],
            [ParseHtmlTask.MODIFICATION_TIME_INPUT,MODIFICATION_TIME.of(source)]]);
    }
    static createTask(context : any,target : any) : ParseHtmlTask {
        return new ParseHtmlTask(context,target);
    }
    static suitabilityFor(target : any) : any {
        if (is(target, any)) {
            let name : string = target.shortName;
            if (new core.DartString(name).endsWith(AnalysisEngine.SUFFIX_HTML) || new core.DartString(name).endsWith(AnalysisEngine.SUFFIX_HTM)) {
                return TaskSuitability.HIGHEST;
            }
        }
        return TaskSuitability.NONE;
    }
    static _computeLineInfo(content : string) : any {
        let lineStarts : core.DartList<number> = StringUtilities.computeLineStarts(content);
        return new bare.createInstance(any,null,lineStarts);
    }
}

export namespace ScriptFragment {
    export type Constructors = 'ScriptFragment';
    export type Interface = Omit<ScriptFragment, Constructors>;
}
@DartClass
export class ScriptFragment {
    offset : number;

    line : number;

    column : number;

    content : string;

    constructor(offset : number,line : number,column : number,content : string) {
    }
    @defaultConstructor
    ScriptFragment(offset : number,line : number,column : number,content : string) {
        this.offset = offset;
        this.line = line;
        this.column = column;
        this.content = content;
    }
}

export class properties {
    private static __$DART_SCRIPTS : any;
    static get DART_SCRIPTS() : any { 
        if (this.__$DART_SCRIPTS===undefined) {
            this.__$DART_SCRIPTS = new bare.createInstance(any,null,'DART_SCRIPTS',DartScript.EMPTY_LIST);
        }
        return this.__$DART_SCRIPTS;
    }
    static set DART_SCRIPTS(__$value : any)  { 
        this.__$DART_SCRIPTS = __$value;
    }

    private static __$HTML_DOCUMENT_ERRORS : any;
    static get HTML_DOCUMENT_ERRORS() : any { 
        if (this.__$HTML_DOCUMENT_ERRORS===undefined) {
            this.__$HTML_DOCUMENT_ERRORS = new bare.createInstance(any,null,'HTML_DOCUMENT_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$HTML_DOCUMENT_ERRORS;
    }
    static set HTML_DOCUMENT_ERRORS(__$value : any)  { 
        this.__$HTML_DOCUMENT_ERRORS = __$value;
    }

}
