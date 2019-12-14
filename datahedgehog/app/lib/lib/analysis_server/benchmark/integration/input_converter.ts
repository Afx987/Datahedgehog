/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/benchmark/integration/input_converter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "./operation";
import * as io from "@dart2ts/dart/io";
import * as lib7 from "./instrumentation_input_converter";
import * as lib8 from "./log_file_input_converter";

export namespace CommonInputConverter {
    export type Constructors = convert.Converter.Constructors | 'CommonInputConverter';
    export type Interface = Omit<CommonInputConverter, Constructors>;
}
@DartClass
export class CommonInputConverter extends convert.Converter<string,lib5.Operation> {
    private static __$ERROR_PREFIX;
    static get ERROR_PREFIX() { 
        if (this.__$ERROR_PREFIX===undefined) {
            this.__$ERROR_PREFIX = 'Server responded with an error: ';
        }
        return this.__$ERROR_PREFIX;
    }
    static set ERROR_PREFIX(__$value : any)  { 
        this.__$ERROR_PREFIX = __$value;
    }

    logger : any;

    eventsSeen : core.DartSet<string>;

    requestMap : core.DartMap<string,any>;

    responseCompleters : core.DartMap<string,async.DartCompleter<any>>;

    responseMap : core.DartMap<string,any>;

    overlays : core.DartMap<string,string>;

    rootPrefix : string;

    srcPathMap : PathMap;

    tmpSrcDirPath : string;

    constructor(tmpSrcDirPath : string,srcPathMap : PathMap) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CommonInputConverter(tmpSrcDirPath : string,srcPathMap : PathMap) {
        this.logger = new bare.createInstance(any,null,'InstrumentationInputConverter');
        this.eventsSeen = new core.DartSet<string>();
        this.requestMap = new core.DartMap.literal([
        ]);
        this.responseCompleters = new core.DartMap.literal([
        ]);
        this.responseMap = new core.DartMap.literal([
        ]);
        this.overlays = new core.DartMap.literal([
        ]);
        this.rootPrefix = lib4.rootPrefix(lib4.properties.current);
        this.tmpSrcDirPath = tmpSrcDirPath;
        this.srcPathMap = srcPathMap;
    }
    asMap(value : any) : core.DartMap<string,any> {
        return value as core.DartMap<string,any>;
    }
    convertNotification(json : core.DartMap<string,any>) : lib5.Operation {
        let event : string = json.get('event');
        if (event == SERVER_STATUS) {
            let params : core.DartMap<string,any> = this.asMap(json.get('params'));
            if (params != null) {
                let analysis : core.DartMap<string,any> = this.asMap(params.get('analysis'));
                if (analysis != null && op(Op.EQUALS,analysis.get('isAnalyzing'),false)) {
                    return new lib5.WaitForAnalysisCompleteOperation();
                }
            }
        }
        if (event == SERVER_CONNECTED) {
            return new lib5.StartServerOperation();
        }
        if (this.eventsSeen.add(event)) {
            this.logger.log(Level.INFO,`Ignored notification: ${event}\n  ${json}`);
        }
        return null;
    }
    convertRequest(origJson : core.DartMap<string,any>) : lib5.Operation {
        let json : core.DartMap<string,any> = this.asMap(this.translateSrcPaths(origJson));
        this.requestMap.set(json.get('id'),json);
        let method : string = json.get('method');
        if (method == ANALYSIS_UPDATE_CONTENT) {
            let request : any = new bare.createInstance(any,null,json);
            let params = new bare.createInstance(any,null,request);
            params.files.forEach((filePath : string,change : any) =>  {
                if (is(change, any)) {
                    let content : string = change.content;
                    if (content == null) {
                        throw `expected new overlay content\n${json}`;
                    }
                    this.overlays.set(filePath,content);
                }else if (is(change, any)) {
                    let content : string = this.overlays.get(filePath);
                    if (content == null) {
                        throw `expected cached overlay content\n${json}`;
                    }
                    this.overlays.set(filePath,SourceEdit.applySequence(content,change.edits));
                }else if (is(change, any)) {
                    let content : string = this.overlays.remove(filePath);
                    if (content == null) {
                        throw `expected cached overlay content\n${json}`;
                    }
                    if (!lib4.isWithin(this.tmpSrcDirPath,filePath)) {
                        throw `found path referencing source outside temp space\n${filePath}\n${json}`;
                    }
                    new io.File(filePath).writeAsStringSync(content);
                }else {
                    throw `unknown overlay change ${change}\n${json}`;
                }
            });
            return new lib5.RequestOperation(this,json);
        }
        if (method == COMPLETION_GET_SUGGESTIONS) {
            return new lib5.CompletionRequestOperation(this,json);
        }
        if (method == ANALYSIS_GET_HOVER || method == ANALYSIS_SET_ANALYSIS_ROOTS || method == ANALYSIS_SET_PRIORITY_FILES || method == ANALYSIS_SET_SUBSCRIPTIONS || method == ANALYSIS_UPDATE_OPTIONS || method == EDIT_GET_ASSISTS || method == EDIT_GET_AVAILABLE_REFACTORINGS || method == EDIT_GET_FIXES || method == EDIT_GET_REFACTORING || method == EDIT_SORT_MEMBERS || method == EXECUTION_CREATE_CONTEXT || method == EXECUTION_DELETE_CONTEXT || method == EXECUTION_MAP_URI || method == EXECUTION_SET_SUBSCRIPTIONS || method == SEARCH_FIND_ELEMENT_REFERENCES || method == SEARCH_FIND_MEMBER_DECLARATIONS || method == SERVER_GET_VERSION || method == SERVER_SET_SUBSCRIPTIONS) {
            return new lib5.RequestOperation(this,json);
        }
        throw `unknown request: ${method}\n  ${json}`;
    }
    convertResponse(json : core.DartMap<string,any>) : lib5.Operation {
        return new lib5.ResponseOperation(this,this.asMap(this.requestMap.remove(json.get('id'))),this.asMap(this.translateSrcPaths(json)));
    }
    logOverlayContent() : void {
        this.logger.log(Level.WARNING,`${this.overlays.length} overlays`);
        let allPaths : core.DartList<string> = ((_) : core.DartList<string> =>  {
            {
                _.sort();
                return _;
            }
        })(this.overlays.keys.toList());
        for(let filePath of allPaths) {
            this.logger.log(Level.WARNING,`overlay ${filePath}\n${this.overlays.get(filePath)}`);
        }
    }
    processErrorResponse(id : string,exception : any) : void {
        let result = exception;
        if (is(exception, core.UnimplementedError)) {
            if (new core.DartString(exception.message).startsWith(CommonInputConverter.ERROR_PREFIX)) {
                result = convert.properties.JSON.decode(new core.DartString(exception.message).substring(CommonInputConverter.ERROR_PREFIX.length));
            }
        }
        this.processResponseResult(id,result);
    }
    processExpectedResponse(id : string,completer : async.DartCompleter<any>) : async.Future<any> {
        if (this.responseMap.containsKey(id)) {
            this.logger.log(Level.INFO,`processing cached response ${id}`);
            completer.complete(this.responseMap.remove(id));
            return null;
        }else {
            this.logger.log(Level.INFO,`waiting for response ${id}`);
            this.responseCompleters.set(id,completer);
            return completer.future;
        }
    }
    processResponseResult(id : string,result : any) : void {
        let completer : async.DartCompleter<any> = this.responseCompleters.get(id);
        if (completer != null) {
            this.logger.log(Level.INFO,`processing response ${id}`);
            completer.complete(result);
        }else {
            this.logger.log(Level.INFO,`caching response ${id}`);
            this.responseMap.set(id,result);
        }
    }
    translateSrcPaths(json : any) {
        if (is(json, "string")) {
            return this.srcPathMap.translate(json);
        }
        if (is(json, core.DartList<any>)) {
            let result : core.DartList<any> = new core.DartList.literal();
            for(let i : number = 0; i < json.length; ++i){
                result.add(this.translateSrcPaths(json[i]));
            }
            return result;
        }
        if (is(json, core.DartMap<any,any>)) {
            let result : core.DartMap<string,any> = new core.DartMap<string,any>();
            json.forEach((origKey : string,value : any) =>  {
                result.set(this.translateSrcPaths(origKey),this.translateSrcPaths(value));
            });
            return result;
        }
        return json;
    }
}

export namespace InputConverter {
    export type Constructors = convert.Converter.Constructors | 'InputConverter';
    export type Interface = Omit<InputConverter, Constructors>;
}
@DartClass
export class InputConverter extends convert.Converter<string,lib5.Operation> {
    logger : any;

    srcPathMap : PathMap;

    tmpSrcDirPath : string;

    headerLineCount : number;

    converter : convert.Converter<string,lib5.Operation>;

    active : boolean;

    constructor(tmpSrcDirPath : string,srcPathMap : PathMap) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InputConverter(tmpSrcDirPath : string,srcPathMap : PathMap) {
        this.logger = new bare.createInstance(any,null,'InputConverter');
        this.headerLineCount = 0;
        this.active = true;
        this.tmpSrcDirPath = tmpSrcDirPath;
        this.srcPathMap = srcPathMap;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convert(line : string) : lib5.Operation {
        if (!this.active) {
            return null;
        }
        if (this.converter != null) {
            try {
                return this.converter.convert(line);
            } catch (__error__) {

                {
                    let e = __error__;
                    this.active = false;
                    /* TODO (RethrowExpressionImpl): rethrow */;
                }
            }
        }
        if (this.headerLineCount == 20) {
            throw 'Failed to determine input file format';
        }
        if (lib7.InstrumentationInputConverter.isFormat(line)) {
            this.converter = new lib7.InstrumentationInputConverter(this.tmpSrcDirPath,this.srcPathMap);
        }else if (lib8.LogFileInputConverter.isFormat(line)) {
            this.converter = new lib8.LogFileInputConverter(this.tmpSrcDirPath,this.srcPathMap);
        }
        if (this.converter != null) {
            return this.converter.convert(line);
        }
        this.logger.log(Level.INFO,`skipped input line: ${line}`);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    startChunkedConversion(outSink : any) : _InputSink {
        return new _InputSink(this,outSink);
    }
}

export namespace PathMap {
    export type Constructors = 'PathMap';
    export type Interface = Omit<PathMap, Constructors>;
}
@DartClass
export class PathMap {
    entries : core.DartList<PathMapEntry>;

    add(oldSrcPrefix : string,newSrcPrefix : string) : void {
        this.entries.add(new PathMapEntry(oldSrcPrefix,newSrcPrefix));
    }
    translate(original : string) : string {
        let result : string = original;
        for(let entry of this.entries) {
            result = entry.translate(result);
        }
        return result;
    }
    constructor() {
    }
    @defaultConstructor
    PathMap() {
        this.entries = new core.DartList.literal();
    }
}

export namespace PathMapEntry {
    export type Constructors = 'PathMapEntry';
    export type Interface = Omit<PathMapEntry, Constructors>;
}
@DartClass
export class PathMapEntry {
    oldSrcPrefix : string;

    newSrcPrefix : string;

    constructor(oldSrcPrefix : string,newSrcPrefix : string) {
    }
    @defaultConstructor
    PathMapEntry(oldSrcPrefix : string,newSrcPrefix : string) {
        this.oldSrcPrefix = oldSrcPrefix;
        this.newSrcPrefix = newSrcPrefix;
    }
    translate(original : string) : string {
        return new core.DartString(original).startsWith(this.oldSrcPrefix) ? `${this.newSrcPrefix}${new core.DartString(original).substring(new core.DartString(this.oldSrcPrefix).length)}` : original;
    }
}

export namespace _InputSink {
    export type Constructors = convert.ChunkedConversionSink.Constructors | '_InputSink';
    export type Interface = Omit<_InputSink, Constructors>;
}
@DartClass
export class _InputSink extends convert.ChunkedConversionSink<string> {
    converter : convert.Converter<string,lib5.Operation>;

    outSink;

    constructor(converter : convert.Converter<string,lib5.Operation>,outSink : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InputSink(converter : convert.Converter<string,lib5.Operation>,outSink : any) {
        this.converter = converter;
        this.outSink = outSink;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(line : string) : void {
        let op : lib5.Operation = this.converter.convert(line);
        if (op != null) {
            this.outSink.add(op);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    close() : void {
        this.outSink.close();
    }
}

export class properties {
}
