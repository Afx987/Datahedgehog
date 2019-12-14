/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/protocol/protocol_generated.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";

export namespace ContextData {
    export type Constructors = 'ContextData';
    export type Interface = Omit<ContextData, Constructors>;
}
@DartClass
@Implements(any)
export class ContextData implements any.Interface {
    _name : string;

    _explicitFileCount : number;

    _implicitFileCount : number;

    _workItemQueueLength : number;

    _cacheEntryExceptions : core.DartList<string>;

    get name() : string {
        return this._name;
    }
    set name(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._name = value;
    }
    get explicitFileCount() : number {
        return this._explicitFileCount;
    }
    set explicitFileCount(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._explicitFileCount = value;
    }
    get implicitFileCount() : number {
        return this._implicitFileCount;
    }
    set implicitFileCount(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._implicitFileCount = value;
    }
    get workItemQueueLength() : number {
        return this._workItemQueueLength;
    }
    set workItemQueueLength(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._workItemQueueLength = value;
    }
    get cacheEntryExceptions() : core.DartList<string> {
        return this._cacheEntryExceptions;
    }
    set cacheEntryExceptions(value : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._cacheEntryExceptions = value;
    }
    constructor(name : string,explicitFileCount : number,implicitFileCount : number,workItemQueueLength : number,cacheEntryExceptions : core.DartList<string>) {
    }
    @defaultConstructor
    ContextData(name : string,explicitFileCount : number,implicitFileCount : number,workItemQueueLength : number,cacheEntryExceptions : core.DartList<string>) {
        this.name = name;
        this.explicitFileCount = explicitFileCount;
        this.implicitFileCount = implicitFileCount;
        this.workItemQueueLength = workItemQueueLength;
        this.cacheEntryExceptions = cacheEntryExceptions;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ContextData {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let name : string;
            if (json.containsKey("name")) {
                name = jsonDecoder.decodeString(jsonPath + ".name",json.get("name"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"name");
            }
            let explicitFileCount : number;
            if (json.containsKey("explicitFileCount")) {
                explicitFileCount = jsonDecoder.decodeInt(jsonPath + ".explicitFileCount",json.get("explicitFileCount"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"explicitFileCount");
            }
            let implicitFileCount : number;
            if (json.containsKey("implicitFileCount")) {
                implicitFileCount = jsonDecoder.decodeInt(jsonPath + ".implicitFileCount",json.get("implicitFileCount"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"implicitFileCount");
            }
            let workItemQueueLength : number;
            if (json.containsKey("workItemQueueLength")) {
                workItemQueueLength = jsonDecoder.decodeInt(jsonPath + ".workItemQueueLength",json.get("workItemQueueLength"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"workItemQueueLength");
            }
            let cacheEntryExceptions : core.DartList<string>;
            if (json.containsKey("cacheEntryExceptions")) {
                cacheEntryExceptions = jsonDecoder.decodeList(jsonPath + ".cacheEntryExceptions",json.get("cacheEntryExceptions"),jsonDecoder.decodeString);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"cacheEntryExceptions");
            }
            return new ContextData(name,explicitFileCount,implicitFileCount,workItemQueueLength,cacheEntryExceptions);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"ContextData",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ContextData;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("name",this.name);
        result.set("explicitFileCount",this.explicitFileCount);
        result.set("implicitFileCount",this.implicitFileCount);
        result.set("workItemQueueLength",this.workItemQueueLength);
        result.set("cacheEntryExceptions",this.cacheEntryExceptions);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ContextData)) {
            return this.name == other.name && this.explicitFileCount == other.explicitFileCount && this.implicitFileCount == other.implicitFileCount && this.workItemQueueLength == other.workItemQueueLength && listEqual(this.cacheEntryExceptions,other.cacheEntryExceptions,(a : string,b : string) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.name).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.explicitFileCount).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.implicitFileCount).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.workItemQueueLength).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.cacheEntryExceptions.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisErrorFixes {
    export type Constructors = 'AnalysisErrorFixes';
    export type Interface = Omit<AnalysisErrorFixes, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisErrorFixes implements any.Interface {
    _error : any;

    _fixes : core.DartList<any>;

    get error() : any {
        return this._error;
    }
    set error(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._error = value;
    }
    get fixes() : core.DartList<any> {
        return this._fixes;
    }
    set fixes(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._fixes = value;
    }
    constructor(error : any,_namedArguments? : {fixes? : core.DartList<any>}) {
    }
    @defaultConstructor
    AnalysisErrorFixes(error : any,_namedArguments? : {fixes? : core.DartList<any>}) {
        let {fixes} = Object.assign({
        }, _namedArguments );
        this.error = error;
        if (fixes == null) {
            this.fixes = new core.DartList.literal<any>();
        }else {
            this.fixes = fixes;
        }
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisErrorFixes {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let error : any;
            if (json.containsKey("error")) {
                error = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".error",json.get("error"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"error");
            }
            let fixes : core.DartList<any>;
            if (json.containsKey("fixes")) {
                fixes = jsonDecoder.decodeList(jsonPath + ".fixes",json.get("fixes"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"fixes");
            }
            return new AnalysisErrorFixes(error,{
                fixes : fixes});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"AnalysisErrorFixes",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisErrorFixes;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("error",this.error.toJson());
        result.set("fixes",this.fixes.map((value : any) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisErrorFixes)) {
            return op(Op.EQUALS,this.error,other.error) && listEqual(this.fixes,other.fixes,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.error.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.fixes.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisErrorsParams {
    export type Constructors = 'AnalysisErrorsParams';
    export type Interface = Omit<AnalysisErrorsParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisErrorsParams implements any.Interface {
    _file : string;

    _errors : core.DartList<any>;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get errors() : core.DartList<any> {
        return this._errors;
    }
    set errors(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._errors = value;
    }
    constructor(file : string,errors : core.DartList<any>) {
    }
    @defaultConstructor
    AnalysisErrorsParams(file : string,errors : core.DartList<any>) {
        this.file = file;
        this.errors = errors;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisErrorsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let errors : core.DartList<any>;
            if (json.containsKey("errors")) {
                errors = jsonDecoder.decodeList(jsonPath + ".errors",json.get("errors"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"errors");
            }
            return new AnalysisErrorsParams(file,errors);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.errors params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisErrorsParams;

    @namedFactory
    static $fromNotification(notification : any) : AnalysisErrorsParams {
        return new AnalysisErrorsParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => AnalysisErrorsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("errors",this.errors.map((value : any) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"analysis.errors",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisErrorsParams)) {
            return this.file == other.file && listEqual(this.errors,other.errors,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.errors.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisFlushResultsParams {
    export type Constructors = 'AnalysisFlushResultsParams';
    export type Interface = Omit<AnalysisFlushResultsParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisFlushResultsParams implements any.Interface {
    _files : core.DartList<string>;

    get files() : core.DartList<string> {
        return this._files;
    }
    set files(value : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._files = value;
    }
    constructor(files : core.DartList<string>) {
    }
    @defaultConstructor
    AnalysisFlushResultsParams(files : core.DartList<string>) {
        this.files = files;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisFlushResultsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let files : core.DartList<string>;
            if (json.containsKey("files")) {
                files = jsonDecoder.decodeList(jsonPath + ".files",json.get("files"),jsonDecoder.decodeString);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"files");
            }
            return new AnalysisFlushResultsParams(files);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.flushResults params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisFlushResultsParams;

    @namedFactory
    static $fromNotification(notification : any) : AnalysisFlushResultsParams {
        return new AnalysisFlushResultsParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => AnalysisFlushResultsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("files",this.files);
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"analysis.flushResults",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisFlushResultsParams)) {
            return listEqual(this.files,other.files,(a : string,b : string) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.files.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisFoldingParams {
    export type Constructors = 'AnalysisFoldingParams';
    export type Interface = Omit<AnalysisFoldingParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisFoldingParams implements any.Interface {
    _file : string;

    _regions : core.DartList<any>;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get regions() : core.DartList<any> {
        return this._regions;
    }
    set regions(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._regions = value;
    }
    constructor(file : string,regions : core.DartList<any>) {
    }
    @defaultConstructor
    AnalysisFoldingParams(file : string,regions : core.DartList<any>) {
        this.file = file;
        this.regions = regions;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisFoldingParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let regions : core.DartList<any>;
            if (json.containsKey("regions")) {
                regions = jsonDecoder.decodeList(jsonPath + ".regions",json.get("regions"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"regions");
            }
            return new AnalysisFoldingParams(file,regions);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.folding params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisFoldingParams;

    @namedFactory
    static $fromNotification(notification : any) : AnalysisFoldingParams {
        return new AnalysisFoldingParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => AnalysisFoldingParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("regions",this.regions.map((value : any) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"analysis.folding",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisFoldingParams)) {
            return this.file == other.file && listEqual(this.regions,other.regions,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.regions.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisGetErrorsParams {
    export type Constructors = 'AnalysisGetErrorsParams';
    export type Interface = Omit<AnalysisGetErrorsParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisGetErrorsParams implements any.Interface {
    _file : string;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    constructor(file : string) {
    }
    @defaultConstructor
    AnalysisGetErrorsParams(file : string) {
        this.file = file;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisGetErrorsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            return new AnalysisGetErrorsParams(file);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.getErrors params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisGetErrorsParams;

    @namedFactory
    static $fromRequest(request : any) : AnalysisGetErrorsParams {
        return new AnalysisGetErrorsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => AnalysisGetErrorsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.getErrors",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisGetErrorsParams)) {
            return this.file == other.file;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisGetErrorsResult {
    export type Constructors = 'AnalysisGetErrorsResult';
    export type Interface = Omit<AnalysisGetErrorsResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisGetErrorsResult implements any.Interface {
    _errors : core.DartList<any>;

    get errors() : core.DartList<any> {
        return this._errors;
    }
    set errors(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._errors = value;
    }
    constructor(errors : core.DartList<any>) {
    }
    @defaultConstructor
    AnalysisGetErrorsResult(errors : core.DartList<any>) {
        this.errors = errors;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisGetErrorsResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let errors : core.DartList<any>;
            if (json.containsKey("errors")) {
                errors = jsonDecoder.decodeList(jsonPath + ".errors",json.get("errors"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"errors");
            }
            return new AnalysisGetErrorsResult(errors);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.getErrors result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisGetErrorsResult;

    @namedFactory
    static $fromResponse(response : any) : AnalysisGetErrorsResult {
        return new AnalysisGetErrorsResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => AnalysisGetErrorsResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("errors",this.errors.map((value : any) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisGetErrorsResult)) {
            return listEqual(this.errors,other.errors,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.errors.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisGetHoverParams {
    export type Constructors = 'AnalysisGetHoverParams';
    export type Interface = Omit<AnalysisGetHoverParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisGetHoverParams implements any.Interface {
    _file : string;

    _offset : number;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    constructor(file : string,offset : number) {
    }
    @defaultConstructor
    AnalysisGetHoverParams(file : string,offset : number) {
        this.file = file;
        this.offset = offset;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisGetHoverParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            return new AnalysisGetHoverParams(file,offset);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.getHover params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisGetHoverParams;

    @namedFactory
    static $fromRequest(request : any) : AnalysisGetHoverParams {
        return new AnalysisGetHoverParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => AnalysisGetHoverParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("offset",this.offset);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.getHover",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisGetHoverParams)) {
            return this.file == other.file && this.offset == other.offset;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisGetHoverResult {
    export type Constructors = 'AnalysisGetHoverResult';
    export type Interface = Omit<AnalysisGetHoverResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisGetHoverResult implements any.Interface {
    _hovers : core.DartList<HoverInformation>;

    get hovers() : core.DartList<HoverInformation> {
        return this._hovers;
    }
    set hovers(value : core.DartList<HoverInformation>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._hovers = value;
    }
    constructor(hovers : core.DartList<HoverInformation>) {
    }
    @defaultConstructor
    AnalysisGetHoverResult(hovers : core.DartList<HoverInformation>) {
        this.hovers = hovers;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisGetHoverResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let hovers : core.DartList<HoverInformation>;
            if (json.containsKey("hovers")) {
                hovers = jsonDecoder.decodeList(jsonPath + ".hovers",json.get("hovers"),(jsonPath : string,json : core.DartObject) =>  {
                    return new HoverInformation.fromJson(jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"hovers");
            }
            return new AnalysisGetHoverResult(hovers);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.getHover result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisGetHoverResult;

    @namedFactory
    static $fromResponse(response : any) : AnalysisGetHoverResult {
        return new AnalysisGetHoverResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => AnalysisGetHoverResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("hovers",this.hovers.map((value : HoverInformation) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisGetHoverResult)) {
            return listEqual(this.hovers,other.hovers,(a : HoverInformation,b : HoverInformation) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.hovers.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisGetLibraryDependenciesParams {
    export type Constructors = 'AnalysisGetLibraryDependenciesParams';
    export type Interface = Omit<AnalysisGetLibraryDependenciesParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisGetLibraryDependenciesParams implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.getLibraryDependencies",null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisGetLibraryDependenciesParams)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 246577680;
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisGetLibraryDependenciesParams() {
    }
}

export namespace AnalysisGetLibraryDependenciesResult {
    export type Constructors = 'AnalysisGetLibraryDependenciesResult';
    export type Interface = Omit<AnalysisGetLibraryDependenciesResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisGetLibraryDependenciesResult implements any.Interface {
    _libraries : core.DartList<string>;

    _packageMap : core.DartMap<string,core.DartMap<string,core.DartList<string>>>;

    get libraries() : core.DartList<string> {
        return this._libraries;
    }
    set libraries(value : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._libraries = value;
    }
    get packageMap() : core.DartMap<string,core.DartMap<string,core.DartList<string>>> {
        return this._packageMap;
    }
    set packageMap(value : core.DartMap<string,core.DartMap<string,core.DartList<string>>>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._packageMap = value;
    }
    constructor(libraries : core.DartList<string>,packageMap : core.DartMap<string,core.DartMap<string,core.DartList<string>>>) {
    }
    @defaultConstructor
    AnalysisGetLibraryDependenciesResult(libraries : core.DartList<string>,packageMap : core.DartMap<string,core.DartMap<string,core.DartList<string>>>) {
        this.libraries = libraries;
        this.packageMap = packageMap;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisGetLibraryDependenciesResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let libraries : core.DartList<string>;
            if (json.containsKey("libraries")) {
                libraries = jsonDecoder.decodeList(jsonPath + ".libraries",json.get("libraries"),jsonDecoder.decodeString);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"libraries");
            }
            let packageMap : core.DartMap<string,core.DartMap<string,core.DartList<string>>>;
            if (json.containsKey("packageMap")) {
                packageMap = jsonDecoder.decodeMap(jsonPath + ".packageMap",json.get("packageMap"),{
                    valueDecoder : (jsonPath : string,json : core.DartObject) =>  {
                        return jsonDecoder.decodeMap(jsonPath,json,{
                            valueDecoder : (jsonPath : string,json : core.DartObject) =>  {
                                return jsonDecoder.decodeList(jsonPath,json,jsonDecoder.decodeString);
                            }});
                    }});
            }else {
                throw jsonDecoder.mismatch(jsonPath,"packageMap");
            }
            return new AnalysisGetLibraryDependenciesResult(libraries,packageMap);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.getLibraryDependencies result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisGetLibraryDependenciesResult;

    @namedFactory
    static $fromResponse(response : any) : AnalysisGetLibraryDependenciesResult {
        return new AnalysisGetLibraryDependenciesResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => AnalysisGetLibraryDependenciesResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("libraries",this.libraries);
        result.set("packageMap",this.packageMap);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisGetLibraryDependenciesResult)) {
            return listEqual(this.libraries,other.libraries,(a : string,b : string) =>  {
                return a == b;
            }) && mapEqual(this.packageMap,other.packageMap,(a : core.DartMap<string,core.DartList<string>>,b : core.DartMap<string,core.DartList<string>>) =>  {
                return mapEqual(a,b,(a : core.DartList<string>,b : core.DartList<string>) =>  {
                    return listEqual(a,b,(a : string,b : string) =>  {
                        return a == b;
                    });
                });
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.libraries.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.packageMap.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisGetNavigationParams {
    export type Constructors = 'AnalysisGetNavigationParams';
    export type Interface = Omit<AnalysisGetNavigationParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisGetNavigationParams implements any.Interface {
    _file : string;

    _offset : number;

    _length : number;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get length() : number {
        return this._length;
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._length = value;
    }
    constructor(file : string,offset : number,length : number) {
    }
    @defaultConstructor
    AnalysisGetNavigationParams(file : string,offset : number,length : number) {
        this.file = file;
        this.offset = offset;
        this.length = length;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisGetNavigationParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let length : number;
            if (json.containsKey("length")) {
                length = jsonDecoder.decodeInt(jsonPath + ".length",json.get("length"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"length");
            }
            return new AnalysisGetNavigationParams(file,offset,length);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.getNavigation params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisGetNavigationParams;

    @namedFactory
    static $fromRequest(request : any) : AnalysisGetNavigationParams {
        return new AnalysisGetNavigationParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => AnalysisGetNavigationParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("offset",this.offset);
        result.set("length",this.length);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.getNavigation",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisGetNavigationParams)) {
            return this.file == other.file && this.offset == other.offset && this.length == other.length;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.length).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisGetNavigationResult {
    export type Constructors = 'AnalysisGetNavigationResult';
    export type Interface = Omit<AnalysisGetNavigationResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisGetNavigationResult implements any.Interface {
    _files : core.DartList<string>;

    _targets : core.DartList<any>;

    _regions : core.DartList<any>;

    get files() : core.DartList<string> {
        return this._files;
    }
    set files(value : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._files = value;
    }
    get targets() : core.DartList<any> {
        return this._targets;
    }
    set targets(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._targets = value;
    }
    get regions() : core.DartList<any> {
        return this._regions;
    }
    set regions(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._regions = value;
    }
    constructor(files : core.DartList<string>,targets : core.DartList<any>,regions : core.DartList<any>) {
    }
    @defaultConstructor
    AnalysisGetNavigationResult(files : core.DartList<string>,targets : core.DartList<any>,regions : core.DartList<any>) {
        this.files = files;
        this.targets = targets;
        this.regions = regions;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisGetNavigationResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let files : core.DartList<string>;
            if (json.containsKey("files")) {
                files = jsonDecoder.decodeList(jsonPath + ".files",json.get("files"),jsonDecoder.decodeString);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"files");
            }
            let targets : core.DartList<any>;
            if (json.containsKey("targets")) {
                targets = jsonDecoder.decodeList(jsonPath + ".targets",json.get("targets"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"targets");
            }
            let regions : core.DartList<any>;
            if (json.containsKey("regions")) {
                regions = jsonDecoder.decodeList(jsonPath + ".regions",json.get("regions"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"regions");
            }
            return new AnalysisGetNavigationResult(files,targets,regions);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.getNavigation result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisGetNavigationResult;

    @namedFactory
    static $fromResponse(response : any) : AnalysisGetNavigationResult {
        return new AnalysisGetNavigationResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => AnalysisGetNavigationResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("files",this.files);
        result.set("targets",this.targets.map((value : any) =>  {
            return value.toJson();
        }).toList());
        result.set("regions",this.regions.map((value : any) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisGetNavigationResult)) {
            return listEqual(this.files,other.files,(a : string,b : string) =>  {
                return a == b;
            }) && listEqual(this.targets,other.targets,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            }) && listEqual(this.regions,other.regions,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.files.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.targets.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.regions.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisGetReachableSourcesParams {
    export type Constructors = 'AnalysisGetReachableSourcesParams';
    export type Interface = Omit<AnalysisGetReachableSourcesParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisGetReachableSourcesParams implements any.Interface {
    _file : string;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    constructor(file : string) {
    }
    @defaultConstructor
    AnalysisGetReachableSourcesParams(file : string) {
        this.file = file;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisGetReachableSourcesParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            return new AnalysisGetReachableSourcesParams(file);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.getReachableSources params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisGetReachableSourcesParams;

    @namedFactory
    static $fromRequest(request : any) : AnalysisGetReachableSourcesParams {
        return new AnalysisGetReachableSourcesParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => AnalysisGetReachableSourcesParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.getReachableSources",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisGetReachableSourcesParams)) {
            return this.file == other.file;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisGetReachableSourcesResult {
    export type Constructors = 'AnalysisGetReachableSourcesResult';
    export type Interface = Omit<AnalysisGetReachableSourcesResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisGetReachableSourcesResult implements any.Interface {
    _sources : core.DartMap<string,core.DartList<string>>;

    get sources() : core.DartMap<string,core.DartList<string>> {
        return this._sources;
    }
    set sources(value : core.DartMap<string,core.DartList<string>>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._sources = value;
    }
    constructor(sources : core.DartMap<string,core.DartList<string>>) {
    }
    @defaultConstructor
    AnalysisGetReachableSourcesResult(sources : core.DartMap<string,core.DartList<string>>) {
        this.sources = sources;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisGetReachableSourcesResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let sources : core.DartMap<string,core.DartList<string>>;
            if (json.containsKey("sources")) {
                sources = jsonDecoder.decodeMap(jsonPath + ".sources",json.get("sources"),{
                    valueDecoder : (jsonPath : string,json : core.DartObject) =>  {
                        return jsonDecoder.decodeList(jsonPath,json,jsonDecoder.decodeString);
                    }});
            }else {
                throw jsonDecoder.mismatch(jsonPath,"sources");
            }
            return new AnalysisGetReachableSourcesResult(sources);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.getReachableSources result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisGetReachableSourcesResult;

    @namedFactory
    static $fromResponse(response : any) : AnalysisGetReachableSourcesResult {
        return new AnalysisGetReachableSourcesResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => AnalysisGetReachableSourcesResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("sources",this.sources);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisGetReachableSourcesResult)) {
            return mapEqual(this.sources,other.sources,(a : core.DartList<string>,b : core.DartList<string>) =>  {
                return listEqual(a,b,(a : string,b : string) =>  {
                    return a == b;
                });
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.sources.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisHighlightsParams {
    export type Constructors = 'AnalysisHighlightsParams';
    export type Interface = Omit<AnalysisHighlightsParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisHighlightsParams implements any.Interface {
    _file : string;

    _regions : core.DartList<any>;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get regions() : core.DartList<any> {
        return this._regions;
    }
    set regions(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._regions = value;
    }
    constructor(file : string,regions : core.DartList<any>) {
    }
    @defaultConstructor
    AnalysisHighlightsParams(file : string,regions : core.DartList<any>) {
        this.file = file;
        this.regions = regions;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisHighlightsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let regions : core.DartList<any>;
            if (json.containsKey("regions")) {
                regions = jsonDecoder.decodeList(jsonPath + ".regions",json.get("regions"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"regions");
            }
            return new AnalysisHighlightsParams(file,regions);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.highlights params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisHighlightsParams;

    @namedFactory
    static $fromNotification(notification : any) : AnalysisHighlightsParams {
        return new AnalysisHighlightsParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => AnalysisHighlightsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("regions",this.regions.map((value : any) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"analysis.highlights",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisHighlightsParams)) {
            return this.file == other.file && listEqual(this.regions,other.regions,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.regions.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisImplementedParams {
    export type Constructors = 'AnalysisImplementedParams';
    export type Interface = Omit<AnalysisImplementedParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisImplementedParams implements any.Interface {
    _file : string;

    _classes : core.DartList<ImplementedClass>;

    _members : core.DartList<ImplementedMember>;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get classes() : core.DartList<ImplementedClass> {
        return this._classes;
    }
    set classes(value : core.DartList<ImplementedClass>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._classes = value;
    }
    get members() : core.DartList<ImplementedMember> {
        return this._members;
    }
    set members(value : core.DartList<ImplementedMember>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._members = value;
    }
    constructor(file : string,classes : core.DartList<ImplementedClass>,members : core.DartList<ImplementedMember>) {
    }
    @defaultConstructor
    AnalysisImplementedParams(file : string,classes : core.DartList<ImplementedClass>,members : core.DartList<ImplementedMember>) {
        this.file = file;
        this.classes = classes;
        this.members = members;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisImplementedParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let classes : core.DartList<ImplementedClass>;
            if (json.containsKey("classes")) {
                classes = jsonDecoder.decodeList(jsonPath + ".classes",json.get("classes"),(jsonPath : string,json : core.DartObject) =>  {
                    return new ImplementedClass.fromJson(jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"classes");
            }
            let members : core.DartList<ImplementedMember>;
            if (json.containsKey("members")) {
                members = jsonDecoder.decodeList(jsonPath + ".members",json.get("members"),(jsonPath : string,json : core.DartObject) =>  {
                    return new ImplementedMember.fromJson(jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"members");
            }
            return new AnalysisImplementedParams(file,classes,members);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.implemented params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisImplementedParams;

    @namedFactory
    static $fromNotification(notification : any) : AnalysisImplementedParams {
        return new AnalysisImplementedParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => AnalysisImplementedParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("classes",this.classes.map((value : ImplementedClass) =>  {
            return value.toJson();
        }).toList());
        result.set("members",this.members.map((value : ImplementedMember) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"analysis.implemented",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisImplementedParams)) {
            return this.file == other.file && listEqual(this.classes,other.classes,(a : ImplementedClass,b : ImplementedClass) =>  {
                return op(Op.EQUALS,a,b);
            }) && listEqual(this.members,other.members,(a : ImplementedMember,b : ImplementedMember) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.classes.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.members.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisInvalidateParams {
    export type Constructors = 'AnalysisInvalidateParams';
    export type Interface = Omit<AnalysisInvalidateParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisInvalidateParams implements any.Interface {
    _file : string;

    _offset : number;

    _length : number;

    _delta : number;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get length() : number {
        return this._length;
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._length = value;
    }
    get delta() : number {
        return this._delta;
    }
    set delta(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._delta = value;
    }
    constructor(file : string,offset : number,length : number,delta : number) {
    }
    @defaultConstructor
    AnalysisInvalidateParams(file : string,offset : number,length : number,delta : number) {
        this.file = file;
        this.offset = offset;
        this.length = length;
        this.delta = delta;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisInvalidateParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let length : number;
            if (json.containsKey("length")) {
                length = jsonDecoder.decodeInt(jsonPath + ".length",json.get("length"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"length");
            }
            let delta : number;
            if (json.containsKey("delta")) {
                delta = jsonDecoder.decodeInt(jsonPath + ".delta",json.get("delta"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"delta");
            }
            return new AnalysisInvalidateParams(file,offset,length,delta);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.invalidate params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisInvalidateParams;

    @namedFactory
    static $fromNotification(notification : any) : AnalysisInvalidateParams {
        return new AnalysisInvalidateParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => AnalysisInvalidateParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("offset",this.offset);
        result.set("length",this.length);
        result.set("delta",this.delta);
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"analysis.invalidate",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisInvalidateParams)) {
            return this.file == other.file && this.offset == other.offset && this.length == other.length && this.delta == other.delta;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.length).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.delta).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisNavigationParams {
    export type Constructors = 'AnalysisNavigationParams';
    export type Interface = Omit<AnalysisNavigationParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisNavigationParams implements any.Interface {
    _file : string;

    _regions : core.DartList<any>;

    _targets : core.DartList<any>;

    _files : core.DartList<string>;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get regions() : core.DartList<any> {
        return this._regions;
    }
    set regions(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._regions = value;
    }
    get targets() : core.DartList<any> {
        return this._targets;
    }
    set targets(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._targets = value;
    }
    get files() : core.DartList<string> {
        return this._files;
    }
    set files(value : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._files = value;
    }
    constructor(file : string,regions : core.DartList<any>,targets : core.DartList<any>,files : core.DartList<string>) {
    }
    @defaultConstructor
    AnalysisNavigationParams(file : string,regions : core.DartList<any>,targets : core.DartList<any>,files : core.DartList<string>) {
        this.file = file;
        this.regions = regions;
        this.targets = targets;
        this.files = files;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisNavigationParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let regions : core.DartList<any>;
            if (json.containsKey("regions")) {
                regions = jsonDecoder.decodeList(jsonPath + ".regions",json.get("regions"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"regions");
            }
            let targets : core.DartList<any>;
            if (json.containsKey("targets")) {
                targets = jsonDecoder.decodeList(jsonPath + ".targets",json.get("targets"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"targets");
            }
            let files : core.DartList<string>;
            if (json.containsKey("files")) {
                files = jsonDecoder.decodeList(jsonPath + ".files",json.get("files"),jsonDecoder.decodeString);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"files");
            }
            return new AnalysisNavigationParams(file,regions,targets,files);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.navigation params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisNavigationParams;

    @namedFactory
    static $fromNotification(notification : any) : AnalysisNavigationParams {
        return new AnalysisNavigationParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => AnalysisNavigationParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("regions",this.regions.map((value : any) =>  {
            return value.toJson();
        }).toList());
        result.set("targets",this.targets.map((value : any) =>  {
            return value.toJson();
        }).toList());
        result.set("files",this.files);
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"analysis.navigation",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisNavigationParams)) {
            return this.file == other.file && listEqual(this.regions,other.regions,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            }) && listEqual(this.targets,other.targets,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            }) && listEqual(this.files,other.files,(a : string,b : string) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.regions.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.targets.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.files.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisOccurrencesParams {
    export type Constructors = 'AnalysisOccurrencesParams';
    export type Interface = Omit<AnalysisOccurrencesParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisOccurrencesParams implements any.Interface {
    _file : string;

    _occurrences : core.DartList<any>;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get occurrences() : core.DartList<any> {
        return this._occurrences;
    }
    set occurrences(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._occurrences = value;
    }
    constructor(file : string,occurrences : core.DartList<any>) {
    }
    @defaultConstructor
    AnalysisOccurrencesParams(file : string,occurrences : core.DartList<any>) {
        this.file = file;
        this.occurrences = occurrences;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisOccurrencesParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let occurrences : core.DartList<any>;
            if (json.containsKey("occurrences")) {
                occurrences = jsonDecoder.decodeList(jsonPath + ".occurrences",json.get("occurrences"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"occurrences");
            }
            return new AnalysisOccurrencesParams(file,occurrences);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.occurrences params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisOccurrencesParams;

    @namedFactory
    static $fromNotification(notification : any) : AnalysisOccurrencesParams {
        return new AnalysisOccurrencesParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => AnalysisOccurrencesParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("occurrences",this.occurrences.map((value : any) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"analysis.occurrences",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisOccurrencesParams)) {
            return this.file == other.file && listEqual(this.occurrences,other.occurrences,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.occurrences.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisOptions {
    export type Constructors = 'AnalysisOptions';
    export type Interface = Omit<AnalysisOptions, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisOptions implements any.Interface {
    _enableAsync : boolean;

    _enableDeferredLoading : boolean;

    _enableEnums : boolean;

    _enableNullAwareOperators : boolean;

    _enableSuperMixins : boolean;

    _generateDart2jsHints : boolean;

    _generateHints : boolean;

    _generateLints : boolean;

    get enableAsync() : boolean {
        return this._enableAsync;
    }
    set enableAsync(value : boolean) {
        this._enableAsync = value;
    }
    get enableDeferredLoading() : boolean {
        return this._enableDeferredLoading;
    }
    set enableDeferredLoading(value : boolean) {
        this._enableDeferredLoading = value;
    }
    get enableEnums() : boolean {
        return this._enableEnums;
    }
    set enableEnums(value : boolean) {
        this._enableEnums = value;
    }
    get enableNullAwareOperators() : boolean {
        return this._enableNullAwareOperators;
    }
    set enableNullAwareOperators(value : boolean) {
        this._enableNullAwareOperators = value;
    }
    get enableSuperMixins() : boolean {
        return this._enableSuperMixins;
    }
    set enableSuperMixins(value : boolean) {
        this._enableSuperMixins = value;
    }
    get generateDart2jsHints() : boolean {
        return this._generateDart2jsHints;
    }
    set generateDart2jsHints(value : boolean) {
        this._generateDart2jsHints = value;
    }
    get generateHints() : boolean {
        return this._generateHints;
    }
    set generateHints(value : boolean) {
        this._generateHints = value;
    }
    get generateLints() : boolean {
        return this._generateLints;
    }
    set generateLints(value : boolean) {
        this._generateLints = value;
    }
    constructor(_namedArguments? : {enableAsync? : boolean,enableDeferredLoading? : boolean,enableEnums? : boolean,enableNullAwareOperators? : boolean,enableSuperMixins? : boolean,generateDart2jsHints? : boolean,generateHints? : boolean,generateLints? : boolean}) {
    }
    @defaultConstructor
    AnalysisOptions(_namedArguments? : {enableAsync? : boolean,enableDeferredLoading? : boolean,enableEnums? : boolean,enableNullAwareOperators? : boolean,enableSuperMixins? : boolean,generateDart2jsHints? : boolean,generateHints? : boolean,generateLints? : boolean}) {
        let {enableAsync,enableDeferredLoading,enableEnums,enableNullAwareOperators,enableSuperMixins,generateDart2jsHints,generateHints,generateLints} = Object.assign({
        }, _namedArguments );
        this.enableAsync = enableAsync;
        this.enableDeferredLoading = enableDeferredLoading;
        this.enableEnums = enableEnums;
        this.enableNullAwareOperators = enableNullAwareOperators;
        this.enableSuperMixins = enableSuperMixins;
        this.generateDart2jsHints = generateDart2jsHints;
        this.generateHints = generateHints;
        this.generateLints = generateLints;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisOptions {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let enableAsync : boolean;
            if (json.containsKey("enableAsync")) {
                enableAsync = jsonDecoder.decodeBool(jsonPath + ".enableAsync",json.get("enableAsync"));
            }
            let enableDeferredLoading : boolean;
            if (json.containsKey("enableDeferredLoading")) {
                enableDeferredLoading = jsonDecoder.decodeBool(jsonPath + ".enableDeferredLoading",json.get("enableDeferredLoading"));
            }
            let enableEnums : boolean;
            if (json.containsKey("enableEnums")) {
                enableEnums = jsonDecoder.decodeBool(jsonPath + ".enableEnums",json.get("enableEnums"));
            }
            let enableNullAwareOperators : boolean;
            if (json.containsKey("enableNullAwareOperators")) {
                enableNullAwareOperators = jsonDecoder.decodeBool(jsonPath + ".enableNullAwareOperators",json.get("enableNullAwareOperators"));
            }
            let enableSuperMixins : boolean;
            if (json.containsKey("enableSuperMixins")) {
                enableSuperMixins = jsonDecoder.decodeBool(jsonPath + ".enableSuperMixins",json.get("enableSuperMixins"));
            }
            let generateDart2jsHints : boolean;
            if (json.containsKey("generateDart2jsHints")) {
                generateDart2jsHints = jsonDecoder.decodeBool(jsonPath + ".generateDart2jsHints",json.get("generateDart2jsHints"));
            }
            let generateHints : boolean;
            if (json.containsKey("generateHints")) {
                generateHints = jsonDecoder.decodeBool(jsonPath + ".generateHints",json.get("generateHints"));
            }
            let generateLints : boolean;
            if (json.containsKey("generateLints")) {
                generateLints = jsonDecoder.decodeBool(jsonPath + ".generateLints",json.get("generateLints"));
            }
            return new AnalysisOptions({
                enableAsync : enableAsync,enableDeferredLoading : enableDeferredLoading,enableEnums : enableEnums,enableNullAwareOperators : enableNullAwareOperators,enableSuperMixins : enableSuperMixins,generateDart2jsHints : generateDart2jsHints,generateHints : generateHints,generateLints : generateLints});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"AnalysisOptions",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisOptions;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        if (this.enableAsync != null) {
            result.set("enableAsync",this.enableAsync);
        }
        if (this.enableDeferredLoading != null) {
            result.set("enableDeferredLoading",this.enableDeferredLoading);
        }
        if (this.enableEnums != null) {
            result.set("enableEnums",this.enableEnums);
        }
        if (this.enableNullAwareOperators != null) {
            result.set("enableNullAwareOperators",this.enableNullAwareOperators);
        }
        if (this.enableSuperMixins != null) {
            result.set("enableSuperMixins",this.enableSuperMixins);
        }
        if (this.generateDart2jsHints != null) {
            result.set("generateDart2jsHints",this.generateDart2jsHints);
        }
        if (this.generateHints != null) {
            result.set("generateHints",this.generateHints);
        }
        if (this.generateLints != null) {
            result.set("generateLints",this.generateLints);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisOptions)) {
            return this.enableAsync == other.enableAsync && this.enableDeferredLoading == other.enableDeferredLoading && this.enableEnums == other.enableEnums && this.enableNullAwareOperators == other.enableNullAwareOperators && this.enableSuperMixins == other.enableSuperMixins && this.generateDart2jsHints == other.generateDart2jsHints && this.generateHints == other.generateHints && this.generateLints == other.generateLints;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.enableAsync.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.enableDeferredLoading.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.enableEnums.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.enableNullAwareOperators.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.enableSuperMixins.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.generateDart2jsHints.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.generateHints.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.generateLints.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisOutlineParams {
    export type Constructors = 'AnalysisOutlineParams';
    export type Interface = Omit<AnalysisOutlineParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisOutlineParams implements any.Interface {
    _file : string;

    _kind : FileKind;

    _libraryName : string;

    _outline : any;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get kind() : FileKind {
        return this._kind;
    }
    set kind(value : FileKind) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._kind = value;
    }
    get libraryName() : string {
        return this._libraryName;
    }
    set libraryName(value : string) {
        this._libraryName = value;
    }
    get outline() : any {
        return this._outline;
    }
    set outline(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._outline = value;
    }
    constructor(file : string,kind : FileKind,outline : any,_namedArguments? : {libraryName? : string}) {
    }
    @defaultConstructor
    AnalysisOutlineParams(file : string,kind : FileKind,outline : any,_namedArguments? : {libraryName? : string}) {
        let {libraryName} = Object.assign({
        }, _namedArguments );
        this.file = file;
        this.kind = kind;
        this.libraryName = libraryName;
        this.outline = outline;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisOutlineParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let kind : FileKind;
            if (json.containsKey("kind")) {
                kind = new FileKind.fromJson(jsonDecoder,jsonPath + ".kind",json.get("kind"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"kind");
            }
            let libraryName : string;
            if (json.containsKey("libraryName")) {
                libraryName = jsonDecoder.decodeString(jsonPath + ".libraryName",json.get("libraryName"));
            }
            let outline : any;
            if (json.containsKey("outline")) {
                outline = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".outline",json.get("outline"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"outline");
            }
            return new AnalysisOutlineParams(file,kind,outline,{
                libraryName : libraryName});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.outline params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisOutlineParams;

    @namedFactory
    static $fromNotification(notification : any) : AnalysisOutlineParams {
        return new AnalysisOutlineParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => AnalysisOutlineParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("kind",this.kind.toJson());
        if (this.libraryName != null) {
            result.set("libraryName",this.libraryName);
        }
        result.set("outline",this.outline.toJson());
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"analysis.outline",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisOutlineParams)) {
            return this.file == other.file && op(Op.EQUALS,this.kind,other.kind) && this.libraryName == other.libraryName && op(Op.EQUALS,this.outline,other.outline);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.kind.hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.libraryName).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.outline.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisOverridesParams {
    export type Constructors = 'AnalysisOverridesParams';
    export type Interface = Omit<AnalysisOverridesParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisOverridesParams implements any.Interface {
    _file : string;

    _overrides : core.DartList<Override>;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get overrides() : core.DartList<Override> {
        return this._overrides;
    }
    set overrides(value : core.DartList<Override>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._overrides = value;
    }
    constructor(file : string,overrides : core.DartList<Override>) {
    }
    @defaultConstructor
    AnalysisOverridesParams(file : string,overrides : core.DartList<Override>) {
        this.file = file;
        this.overrides = overrides;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisOverridesParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let overrides : core.DartList<Override>;
            if (json.containsKey("overrides")) {
                overrides = jsonDecoder.decodeList(jsonPath + ".overrides",json.get("overrides"),(jsonPath : string,json : core.DartObject) =>  {
                    return new Override.fromJson(jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"overrides");
            }
            return new AnalysisOverridesParams(file,overrides);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.overrides params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisOverridesParams;

    @namedFactory
    static $fromNotification(notification : any) : AnalysisOverridesParams {
        return new AnalysisOverridesParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => AnalysisOverridesParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("overrides",this.overrides.map((value : Override) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"analysis.overrides",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisOverridesParams)) {
            return this.file == other.file && listEqual(this.overrides,other.overrides,(a : Override,b : Override) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.overrides.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisReanalyzeParams {
    export type Constructors = 'AnalysisReanalyzeParams';
    export type Interface = Omit<AnalysisReanalyzeParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisReanalyzeParams implements any.Interface {
    _roots : core.DartList<string>;

    get roots() : core.DartList<string> {
        return this._roots;
    }
    set roots(value : core.DartList<string>) {
        this._roots = value;
    }
    constructor(_namedArguments? : {roots? : core.DartList<string>}) {
    }
    @defaultConstructor
    AnalysisReanalyzeParams(_namedArguments? : {roots? : core.DartList<string>}) {
        let {roots} = Object.assign({
        }, _namedArguments );
        this.roots = roots;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisReanalyzeParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let roots : core.DartList<string>;
            if (json.containsKey("roots")) {
                roots = jsonDecoder.decodeList(jsonPath + ".roots",json.get("roots"),jsonDecoder.decodeString);
            }
            return new AnalysisReanalyzeParams({
                roots : roots});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.reanalyze params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisReanalyzeParams;

    @namedFactory
    static $fromRequest(request : any) : AnalysisReanalyzeParams {
        return new AnalysisReanalyzeParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => AnalysisReanalyzeParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        if (this.roots != null) {
            result.set("roots",this.roots);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.reanalyze",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisReanalyzeParams)) {
            return listEqual(this.roots,other.roots,(a : string,b : string) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.roots.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisReanalyzeResult {
    export type Constructors = 'AnalysisReanalyzeResult';
    export type Interface = Omit<AnalysisReanalyzeResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisReanalyzeResult implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : null});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisReanalyzeResult)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 846803925;
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisReanalyzeResult() {
    }
}

export namespace AnalysisService {
    export type Constructors = '_';
    export type Interface = Omit<AnalysisService, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisService implements any.Interface {
    private static __$FOLDING : AnalysisService;
    static get FOLDING() : AnalysisService { 
        if (this.__$FOLDING===undefined) {
            this.__$FOLDING = new AnalysisService._("FOLDING");
        }
        return this.__$FOLDING;
    }

    private static __$HIGHLIGHTS : AnalysisService;
    static get HIGHLIGHTS() : AnalysisService { 
        if (this.__$HIGHLIGHTS===undefined) {
            this.__$HIGHLIGHTS = new AnalysisService._("HIGHLIGHTS");
        }
        return this.__$HIGHLIGHTS;
    }

    private static __$IMPLEMENTED : AnalysisService;
    static get IMPLEMENTED() : AnalysisService { 
        if (this.__$IMPLEMENTED===undefined) {
            this.__$IMPLEMENTED = new AnalysisService._("IMPLEMENTED");
        }
        return this.__$IMPLEMENTED;
    }

    private static __$INVALIDATE : AnalysisService;
    static get INVALIDATE() : AnalysisService { 
        if (this.__$INVALIDATE===undefined) {
            this.__$INVALIDATE = new AnalysisService._("INVALIDATE");
        }
        return this.__$INVALIDATE;
    }

    private static __$NAVIGATION : AnalysisService;
    static get NAVIGATION() : AnalysisService { 
        if (this.__$NAVIGATION===undefined) {
            this.__$NAVIGATION = new AnalysisService._("NAVIGATION");
        }
        return this.__$NAVIGATION;
    }

    private static __$OCCURRENCES : AnalysisService;
    static get OCCURRENCES() : AnalysisService { 
        if (this.__$OCCURRENCES===undefined) {
            this.__$OCCURRENCES = new AnalysisService._("OCCURRENCES");
        }
        return this.__$OCCURRENCES;
    }

    private static __$OUTLINE : AnalysisService;
    static get OUTLINE() : AnalysisService { 
        if (this.__$OUTLINE===undefined) {
            this.__$OUTLINE = new AnalysisService._("OUTLINE");
        }
        return this.__$OUTLINE;
    }

    private static __$OVERRIDES : AnalysisService;
    static get OVERRIDES() : AnalysisService { 
        if (this.__$OVERRIDES===undefined) {
            this.__$OVERRIDES = new AnalysisService._("OVERRIDES");
        }
        return this.__$OVERRIDES;
    }

    private static __$VALUES : core.DartList<AnalysisService>;
    static get VALUES() : core.DartList<AnalysisService> { 
        if (this.__$VALUES===undefined) {
            this.__$VALUES = new core.DartList.literal<AnalysisService>(AnalysisService.FOLDING,AnalysisService.HIGHLIGHTS,AnalysisService.IMPLEMENTED,AnalysisService.INVALIDATE,AnalysisService.NAVIGATION,AnalysisService.OCCURRENCES,AnalysisService.OUTLINE,AnalysisService.OVERRIDES);
        }
        return this.__$VALUES;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    @namedConstructor
    _(name : string) {
        this.name = name;
    }
    static _ : new(name : string) => AnalysisService;

    constructor(name : string) {
    }
    @defaultFactory
    static $AnalysisService(name : string) : AnalysisService {
        switch (name) {
            case "FOLDING":
                return AnalysisService.FOLDING;
            case "HIGHLIGHTS":
                return AnalysisService.HIGHLIGHTS;
            case "IMPLEMENTED":
                return AnalysisService.IMPLEMENTED;
            case "INVALIDATE":
                return AnalysisService.INVALIDATE;
            case "NAVIGATION":
                return AnalysisService.NAVIGATION;
            case "OCCURRENCES":
                return AnalysisService.OCCURRENCES;
            case "OUTLINE":
                return AnalysisService.OUTLINE;
            case "OVERRIDES":
                return AnalysisService.OVERRIDES;
        }
        throw new core.Exception(`Illegal enum value: ${name}`);
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisService {
        if (is(json, "string")) {
            try {
                return new AnalysisService(json);
            } catch (__error__) {

                {
                    let _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath,"AnalysisService",json);
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisService;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `AnalysisService.${this.name}`;
    }
    toJson() : string {
        return this.name;
    }
}

export namespace AnalysisSetAnalysisRootsParams {
    export type Constructors = 'AnalysisSetAnalysisRootsParams';
    export type Interface = Omit<AnalysisSetAnalysisRootsParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisSetAnalysisRootsParams implements any.Interface {
    _included : core.DartList<string>;

    _excluded : core.DartList<string>;

    _packageRoots : core.DartMap<string,string>;

    get included() : core.DartList<string> {
        return this._included;
    }
    set included(value : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._included = value;
    }
    get excluded() : core.DartList<string> {
        return this._excluded;
    }
    set excluded(value : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._excluded = value;
    }
    get packageRoots() : core.DartMap<string,string> {
        return this._packageRoots;
    }
    set packageRoots(value : core.DartMap<string,string>) {
        this._packageRoots = value;
    }
    constructor(included : core.DartList<string>,excluded : core.DartList<string>,_namedArguments? : {packageRoots? : core.DartMap<string,string>}) {
    }
    @defaultConstructor
    AnalysisSetAnalysisRootsParams(included : core.DartList<string>,excluded : core.DartList<string>,_namedArguments? : {packageRoots? : core.DartMap<string,string>}) {
        let {packageRoots} = Object.assign({
        }, _namedArguments );
        this.included = included;
        this.excluded = excluded;
        this.packageRoots = packageRoots;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisSetAnalysisRootsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let included : core.DartList<string>;
            if (json.containsKey("included")) {
                included = jsonDecoder.decodeList(jsonPath + ".included",json.get("included"),jsonDecoder.decodeString);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"included");
            }
            let excluded : core.DartList<string>;
            if (json.containsKey("excluded")) {
                excluded = jsonDecoder.decodeList(jsonPath + ".excluded",json.get("excluded"),jsonDecoder.decodeString);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"excluded");
            }
            let packageRoots : core.DartMap<string,string>;
            if (json.containsKey("packageRoots")) {
                packageRoots = jsonDecoder.decodeMap(jsonPath + ".packageRoots",json.get("packageRoots"),{
                    valueDecoder : jsonDecoder.decodeString});
            }
            return new AnalysisSetAnalysisRootsParams(included,excluded,{
                packageRoots : packageRoots});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.setAnalysisRoots params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisSetAnalysisRootsParams;

    @namedFactory
    static $fromRequest(request : any) : AnalysisSetAnalysisRootsParams {
        return new AnalysisSetAnalysisRootsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => AnalysisSetAnalysisRootsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("included",this.included);
        result.set("excluded",this.excluded);
        if (this.packageRoots != null) {
            result.set("packageRoots",this.packageRoots);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.setAnalysisRoots",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisSetAnalysisRootsParams)) {
            return listEqual(this.included,other.included,(a : string,b : string) =>  {
                return a == b;
            }) && listEqual(this.excluded,other.excluded,(a : string,b : string) =>  {
                return a == b;
            }) && mapEqual(this.packageRoots,other.packageRoots,(a : string,b : string) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.included.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.excluded.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.packageRoots.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisSetAnalysisRootsResult {
    export type Constructors = 'AnalysisSetAnalysisRootsResult';
    export type Interface = Omit<AnalysisSetAnalysisRootsResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisSetAnalysisRootsResult implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : null});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisSetAnalysisRootsResult)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 866004753;
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisSetAnalysisRootsResult() {
    }
}

export namespace AnalysisSetGeneralSubscriptionsParams {
    export type Constructors = 'AnalysisSetGeneralSubscriptionsParams';
    export type Interface = Omit<AnalysisSetGeneralSubscriptionsParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisSetGeneralSubscriptionsParams implements any.Interface {
    _subscriptions : core.DartList<GeneralAnalysisService>;

    get subscriptions() : core.DartList<GeneralAnalysisService> {
        return this._subscriptions;
    }
    set subscriptions(value : core.DartList<GeneralAnalysisService>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._subscriptions = value;
    }
    constructor(subscriptions : core.DartList<GeneralAnalysisService>) {
    }
    @defaultConstructor
    AnalysisSetGeneralSubscriptionsParams(subscriptions : core.DartList<GeneralAnalysisService>) {
        this.subscriptions = subscriptions;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisSetGeneralSubscriptionsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let subscriptions : core.DartList<GeneralAnalysisService>;
            if (json.containsKey("subscriptions")) {
                subscriptions = jsonDecoder.decodeList(jsonPath + ".subscriptions",json.get("subscriptions"),(jsonPath : string,json : core.DartObject) =>  {
                    return new GeneralAnalysisService.fromJson(jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"subscriptions");
            }
            return new AnalysisSetGeneralSubscriptionsParams(subscriptions);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.setGeneralSubscriptions params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisSetGeneralSubscriptionsParams;

    @namedFactory
    static $fromRequest(request : any) : AnalysisSetGeneralSubscriptionsParams {
        return new AnalysisSetGeneralSubscriptionsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => AnalysisSetGeneralSubscriptionsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("subscriptions",this.subscriptions.map((value : GeneralAnalysisService) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.setGeneralSubscriptions",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisSetGeneralSubscriptionsParams)) {
            return listEqual(this.subscriptions,other.subscriptions,(a : GeneralAnalysisService,b : GeneralAnalysisService) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.subscriptions.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisSetGeneralSubscriptionsResult {
    export type Constructors = 'AnalysisSetGeneralSubscriptionsResult';
    export type Interface = Omit<AnalysisSetGeneralSubscriptionsResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisSetGeneralSubscriptionsResult implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : null});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisSetGeneralSubscriptionsResult)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 386759562;
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisSetGeneralSubscriptionsResult() {
    }
}

export namespace AnalysisSetPriorityFilesParams {
    export type Constructors = 'AnalysisSetPriorityFilesParams';
    export type Interface = Omit<AnalysisSetPriorityFilesParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisSetPriorityFilesParams implements any.Interface {
    _files : core.DartList<string>;

    get files() : core.DartList<string> {
        return this._files;
    }
    set files(value : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._files = value;
    }
    constructor(files : core.DartList<string>) {
    }
    @defaultConstructor
    AnalysisSetPriorityFilesParams(files : core.DartList<string>) {
        this.files = files;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisSetPriorityFilesParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let files : core.DartList<string>;
            if (json.containsKey("files")) {
                files = jsonDecoder.decodeList(jsonPath + ".files",json.get("files"),jsonDecoder.decodeString);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"files");
            }
            return new AnalysisSetPriorityFilesParams(files);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.setPriorityFiles params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisSetPriorityFilesParams;

    @namedFactory
    static $fromRequest(request : any) : AnalysisSetPriorityFilesParams {
        return new AnalysisSetPriorityFilesParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => AnalysisSetPriorityFilesParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("files",this.files);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.setPriorityFiles",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisSetPriorityFilesParams)) {
            return listEqual(this.files,other.files,(a : string,b : string) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.files.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisSetPriorityFilesResult {
    export type Constructors = 'AnalysisSetPriorityFilesResult';
    export type Interface = Omit<AnalysisSetPriorityFilesResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisSetPriorityFilesResult implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : null});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisSetPriorityFilesResult)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 330050055;
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisSetPriorityFilesResult() {
    }
}

export namespace AnalysisSetSubscriptionsParams {
    export type Constructors = 'AnalysisSetSubscriptionsParams';
    export type Interface = Omit<AnalysisSetSubscriptionsParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisSetSubscriptionsParams implements any.Interface {
    _subscriptions : core.DartMap<AnalysisService,core.DartList<string>>;

    get subscriptions() : core.DartMap<AnalysisService,core.DartList<string>> {
        return this._subscriptions;
    }
    set subscriptions(value : core.DartMap<AnalysisService,core.DartList<string>>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._subscriptions = value;
    }
    constructor(subscriptions : core.DartMap<AnalysisService,core.DartList<string>>) {
    }
    @defaultConstructor
    AnalysisSetSubscriptionsParams(subscriptions : core.DartMap<AnalysisService,core.DartList<string>>) {
        this.subscriptions = subscriptions;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisSetSubscriptionsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let subscriptions : core.DartMap<AnalysisService,core.DartList<string>>;
            if (json.containsKey("subscriptions")) {
                subscriptions = jsonDecoder.decodeMap(jsonPath + ".subscriptions",json.get("subscriptions"),{
                    keyDecoder : (jsonPath : string,json : core.DartObject) =>  {
                        return new AnalysisService.fromJson(jsonDecoder,jsonPath,json);
                    },valueDecoder : (jsonPath : string,json : core.DartObject) =>  {
                        return jsonDecoder.decodeList(jsonPath,json,jsonDecoder.decodeString);
                    }});
            }else {
                throw jsonDecoder.mismatch(jsonPath,"subscriptions");
            }
            return new AnalysisSetSubscriptionsParams(subscriptions);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.setSubscriptions params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisSetSubscriptionsParams;

    @namedFactory
    static $fromRequest(request : any) : AnalysisSetSubscriptionsParams {
        return new AnalysisSetSubscriptionsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => AnalysisSetSubscriptionsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("subscriptions",mapMap(this.subscriptions,{
            keyCallback : (value : AnalysisService) =>  {
                return value.toJson();
            }}));
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.setSubscriptions",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisSetSubscriptionsParams)) {
            return mapEqual(this.subscriptions,other.subscriptions,(a : core.DartList<string>,b : core.DartList<string>) =>  {
                return listEqual(a,b,(a : string,b : string) =>  {
                    return a == b;
                });
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.subscriptions.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisSetSubscriptionsResult {
    export type Constructors = 'AnalysisSetSubscriptionsResult';
    export type Interface = Omit<AnalysisSetSubscriptionsResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisSetSubscriptionsResult implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : null});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisSetSubscriptionsResult)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 218088493;
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisSetSubscriptionsResult() {
    }
}

export namespace AnalysisStatus {
    export type Constructors = 'AnalysisStatus';
    export type Interface = Omit<AnalysisStatus, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisStatus implements any.Interface {
    _isAnalyzing : boolean;

    _analysisTarget : string;

    get isAnalyzing() : boolean {
        return this._isAnalyzing;
    }
    set isAnalyzing(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._isAnalyzing = value;
    }
    get analysisTarget() : string {
        return this._analysisTarget;
    }
    set analysisTarget(value : string) {
        this._analysisTarget = value;
    }
    constructor(isAnalyzing : boolean,_namedArguments? : {analysisTarget? : string}) {
    }
    @defaultConstructor
    AnalysisStatus(isAnalyzing : boolean,_namedArguments? : {analysisTarget? : string}) {
        let {analysisTarget} = Object.assign({
        }, _namedArguments );
        this.isAnalyzing = isAnalyzing;
        this.analysisTarget = analysisTarget;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisStatus {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let isAnalyzing : boolean;
            if (json.containsKey("isAnalyzing")) {
                isAnalyzing = jsonDecoder.decodeBool(jsonPath + ".isAnalyzing",json.get("isAnalyzing"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"isAnalyzing");
            }
            let analysisTarget : string;
            if (json.containsKey("analysisTarget")) {
                analysisTarget = jsonDecoder.decodeString(jsonPath + ".analysisTarget",json.get("analysisTarget"));
            }
            return new AnalysisStatus(isAnalyzing,{
                analysisTarget : analysisTarget});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"AnalysisStatus",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisStatus;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("isAnalyzing",this.isAnalyzing);
        if (this.analysisTarget != null) {
            result.set("analysisTarget",this.analysisTarget);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisStatus)) {
            return this.isAnalyzing == other.isAnalyzing && this.analysisTarget == other.analysisTarget;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.isAnalyzing.hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.analysisTarget).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisUpdateContentParams {
    export type Constructors = 'AnalysisUpdateContentParams';
    export type Interface = Omit<AnalysisUpdateContentParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisUpdateContentParams implements any.Interface {
    _files : core.DartMap<string,any>;

    get files() : core.DartMap<string,any> {
        return this._files;
    }
    set files(value : core.DartMap<string,any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._files = value;
    }
    constructor(files : core.DartMap<string,any>) {
    }
    @defaultConstructor
    AnalysisUpdateContentParams(files : core.DartMap<string,any>) {
        this.files = files;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisUpdateContentParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let files : core.DartMap<string,any>;
            if (json.containsKey("files")) {
                files = jsonDecoder.decodeMap(jsonPath + ".files",json.get("files"),{
                    valueDecoder : (jsonPath : string,json : core.DartObject) =>  {
                        return jsonDecoder.decodeUnion(jsonPath,json,"type",new core.DartMap.literal([
                            ["add",(jsonPath : string,json : core.DartObject) =>  {
                                return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                            }],
                            ["change",(jsonPath : string,json : core.DartObject) =>  {
                                return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                            }],
                            ["remove",(jsonPath : string,json : core.DartObject) =>  {
                                return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                            }]]));
                    }});
            }else {
                throw jsonDecoder.mismatch(jsonPath,"files");
            }
            return new AnalysisUpdateContentParams(files);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.updateContent params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisUpdateContentParams;

    @namedFactory
    static $fromRequest(request : any) : AnalysisUpdateContentParams {
        return new AnalysisUpdateContentParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => AnalysisUpdateContentParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("files",mapMap(this.files,{
            valueCallback : (value : any) =>  {
                return value.toJson();
            }}));
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.updateContent",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisUpdateContentParams)) {
            return mapEqual(this.files,other.files,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.files.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisUpdateContentResult {
    export type Constructors = 'AnalysisUpdateContentResult';
    export type Interface = Omit<AnalysisUpdateContentResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisUpdateContentResult implements any.Interface {
    constructor() {
    }
    @defaultConstructor
    AnalysisUpdateContentResult() {
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisUpdateContentResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            return new AnalysisUpdateContentResult();
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.updateContent result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisUpdateContentResult;

    @namedFactory
    static $fromResponse(response : any) : AnalysisUpdateContentResult {
        return new AnalysisUpdateContentResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => AnalysisUpdateContentResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisUpdateContentResult)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisUpdateOptionsParams {
    export type Constructors = 'AnalysisUpdateOptionsParams';
    export type Interface = Omit<AnalysisUpdateOptionsParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisUpdateOptionsParams implements any.Interface {
    _options : AnalysisOptions;

    get options() : AnalysisOptions {
        return this._options;
    }
    set options(value : AnalysisOptions) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._options = value;
    }
    constructor(options : AnalysisOptions) {
    }
    @defaultConstructor
    AnalysisUpdateOptionsParams(options : AnalysisOptions) {
        this.options = options;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisUpdateOptionsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let options : AnalysisOptions;
            if (json.containsKey("options")) {
                options = new AnalysisOptions.fromJson(jsonDecoder,jsonPath + ".options",json.get("options"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"options");
            }
            return new AnalysisUpdateOptionsParams(options);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.updateOptions params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisUpdateOptionsParams;

    @namedFactory
    static $fromRequest(request : any) : AnalysisUpdateOptionsParams {
        return new AnalysisUpdateOptionsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => AnalysisUpdateOptionsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("options",this.options.toJson());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"analysis.updateOptions",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisUpdateOptionsParams)) {
            return op(Op.EQUALS,this.options,other.options);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.options.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisUpdateOptionsResult {
    export type Constructors = 'AnalysisUpdateOptionsResult';
    export type Interface = Omit<AnalysisUpdateOptionsResult, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisUpdateOptionsResult implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : null});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisUpdateOptionsResult)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 179689467;
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisUpdateOptionsResult() {
    }
}

export namespace CompletionGetSuggestionsParams {
    export type Constructors = 'CompletionGetSuggestionsParams';
    export type Interface = Omit<CompletionGetSuggestionsParams, Constructors>;
}
@DartClass
@Implements(any)
export class CompletionGetSuggestionsParams implements any.Interface {
    _file : string;

    _offset : number;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    constructor(file : string,offset : number) {
    }
    @defaultConstructor
    CompletionGetSuggestionsParams(file : string,offset : number) {
        this.file = file;
        this.offset = offset;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : CompletionGetSuggestionsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            return new CompletionGetSuggestionsParams(file,offset);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"completion.getSuggestions params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => CompletionGetSuggestionsParams;

    @namedFactory
    static $fromRequest(request : any) : CompletionGetSuggestionsParams {
        return new CompletionGetSuggestionsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => CompletionGetSuggestionsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("offset",this.offset);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"completion.getSuggestions",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, CompletionGetSuggestionsParams)) {
            return this.file == other.file && this.offset == other.offset;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace CompletionGetSuggestionsResult {
    export type Constructors = 'CompletionGetSuggestionsResult';
    export type Interface = Omit<CompletionGetSuggestionsResult, Constructors>;
}
@DartClass
@Implements(any)
export class CompletionGetSuggestionsResult implements any.Interface {
    _id : string;

    get id() : string {
        return this._id;
    }
    set id(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._id = value;
    }
    constructor(id : string) {
    }
    @defaultConstructor
    CompletionGetSuggestionsResult(id : string) {
        this.id = id;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : CompletionGetSuggestionsResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let id : string;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id",json.get("id"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"id");
            }
            return new CompletionGetSuggestionsResult(id);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"completion.getSuggestions result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => CompletionGetSuggestionsResult;

    @namedFactory
    static $fromResponse(response : any) : CompletionGetSuggestionsResult {
        return new CompletionGetSuggestionsResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => CompletionGetSuggestionsResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("id",this.id);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, CompletionGetSuggestionsResult)) {
            return this.id == other.id;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.id).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace CompletionResultsParams {
    export type Constructors = 'CompletionResultsParams';
    export type Interface = Omit<CompletionResultsParams, Constructors>;
}
@DartClass
@Implements(any)
export class CompletionResultsParams implements any.Interface {
    _id : string;

    _replacementOffset : number;

    _replacementLength : number;

    _results : core.DartList<any>;

    _isLast : boolean;

    get id() : string {
        return this._id;
    }
    set id(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._id = value;
    }
    get replacementOffset() : number {
        return this._replacementOffset;
    }
    set replacementOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._replacementOffset = value;
    }
    get replacementLength() : number {
        return this._replacementLength;
    }
    set replacementLength(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._replacementLength = value;
    }
    get results() : core.DartList<any> {
        return this._results;
    }
    set results(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._results = value;
    }
    get isLast() : boolean {
        return this._isLast;
    }
    set isLast(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._isLast = value;
    }
    constructor(id : string,replacementOffset : number,replacementLength : number,results : core.DartList<any>,isLast : boolean) {
    }
    @defaultConstructor
    CompletionResultsParams(id : string,replacementOffset : number,replacementLength : number,results : core.DartList<any>,isLast : boolean) {
        this.id = id;
        this.replacementOffset = replacementOffset;
        this.replacementLength = replacementLength;
        this.results = results;
        this.isLast = isLast;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : CompletionResultsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let id : string;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id",json.get("id"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"id");
            }
            let replacementOffset : number;
            if (json.containsKey("replacementOffset")) {
                replacementOffset = jsonDecoder.decodeInt(jsonPath + ".replacementOffset",json.get("replacementOffset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"replacementOffset");
            }
            let replacementLength : number;
            if (json.containsKey("replacementLength")) {
                replacementLength = jsonDecoder.decodeInt(jsonPath + ".replacementLength",json.get("replacementLength"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"replacementLength");
            }
            let results : core.DartList<any>;
            if (json.containsKey("results")) {
                results = jsonDecoder.decodeList(jsonPath + ".results",json.get("results"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"results");
            }
            let isLast : boolean;
            if (json.containsKey("isLast")) {
                isLast = jsonDecoder.decodeBool(jsonPath + ".isLast",json.get("isLast"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"isLast");
            }
            return new CompletionResultsParams(id,replacementOffset,replacementLength,results,isLast);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"completion.results params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => CompletionResultsParams;

    @namedFactory
    static $fromNotification(notification : any) : CompletionResultsParams {
        return new CompletionResultsParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => CompletionResultsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("id",this.id);
        result.set("replacementOffset",this.replacementOffset);
        result.set("replacementLength",this.replacementLength);
        result.set("results",this.results.map((value : any) =>  {
            return value.toJson();
        }).toList());
        result.set("isLast",this.isLast);
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"completion.results",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, CompletionResultsParams)) {
            return this.id == other.id && this.replacementOffset == other.replacementOffset && this.replacementLength == other.replacementLength && listEqual(this.results,other.results,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            }) && this.isLast == other.isLast;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.id).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.replacementOffset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.replacementLength).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.results.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.isLast.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace AnalysisAnalyzedFilesParams {
    export type Constructors = 'AnalysisAnalyzedFilesParams';
    export type Interface = Omit<AnalysisAnalyzedFilesParams, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisAnalyzedFilesParams implements any.Interface {
    _directories : core.DartList<string>;

    get directories() : core.DartList<string> {
        return this._directories;
    }
    set directories(value : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._directories = value;
    }
    constructor(directories : core.DartList<string>) {
    }
    @defaultConstructor
    AnalysisAnalyzedFilesParams(directories : core.DartList<string>) {
        this.directories = directories;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : AnalysisAnalyzedFilesParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let directories : core.DartList<string>;
            if (json.containsKey("directories")) {
                directories = jsonDecoder.decodeList(jsonPath + ".directories",json.get("directories"),jsonDecoder.decodeString);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"directories");
            }
            return new AnalysisAnalyzedFilesParams(directories);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"analysis.analyzedFiles params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => AnalysisAnalyzedFilesParams;

    @namedFactory
    static $fromNotification(notification : any) : AnalysisAnalyzedFilesParams {
        return new AnalysisAnalyzedFilesParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => AnalysisAnalyzedFilesParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("directories",this.directories);
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"analysis.analyzedFiles",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, AnalysisAnalyzedFilesParams)) {
            return listEqual(this.directories,other.directories,(a : string,b : string) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.directories.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ServerStatusParams {
    export type Constructors = 'ServerStatusParams';
    export type Interface = Omit<ServerStatusParams, Constructors>;
}
@DartClass
@Implements(any)
export class ServerStatusParams implements any.Interface {
    _analysis : AnalysisStatus;

    _pub : PubStatus;

    get analysis() : AnalysisStatus {
        return this._analysis;
    }
    set analysis(value : AnalysisStatus) {
        this._analysis = value;
    }
    get pub() : PubStatus {
        return this._pub;
    }
    set pub(value : PubStatus) {
        this._pub = value;
    }
    constructor(_namedArguments? : {analysis? : AnalysisStatus,pub? : PubStatus}) {
    }
    @defaultConstructor
    ServerStatusParams(_namedArguments? : {analysis? : AnalysisStatus,pub? : PubStatus}) {
        let {analysis,pub} = Object.assign({
        }, _namedArguments );
        this.analysis = analysis;
        this.pub = pub;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ServerStatusParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let analysis : AnalysisStatus;
            if (json.containsKey("analysis")) {
                analysis = new AnalysisStatus.fromJson(jsonDecoder,jsonPath + ".analysis",json.get("analysis"));
            }
            let pub : PubStatus;
            if (json.containsKey("pub")) {
                pub = new PubStatus.fromJson(jsonDecoder,jsonPath + ".pub",json.get("pub"));
            }
            return new ServerStatusParams({
                analysis : analysis,pub : pub});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"server.status params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ServerStatusParams;

    @namedFactory
    static $fromNotification(notification : any) : ServerStatusParams {
        return new ServerStatusParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => ServerStatusParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        if (this.analysis != null) {
            result.set("analysis",this.analysis.toJson());
        }
        if (this.pub != null) {
            result.set("pub",this.pub.toJson());
        }
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"server.status",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ServerStatusParams)) {
            return op(Op.EQUALS,this.analysis,other.analysis) && op(Op.EQUALS,this.pub,other.pub);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.analysis.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.pub.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ServerShutdownResult {
    export type Constructors = 'ServerShutdownResult';
    export type Interface = Omit<ServerShutdownResult, Constructors>;
}
@DartClass
@Implements(any)
export class ServerShutdownResult implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : null});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ServerShutdownResult)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 193626532;
    }
    constructor() {
    }
    @defaultConstructor
    ServerShutdownResult() {
    }
}

export namespace ServerShutdownParams {
    export type Constructors = 'ServerShutdownParams';
    export type Interface = Omit<ServerShutdownParams, Constructors>;
}
@DartClass
@Implements(any)
export class ServerShutdownParams implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"server.shutdown",null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ServerShutdownParams)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 366630911;
    }
    constructor() {
    }
    @defaultConstructor
    ServerShutdownParams() {
    }
}

export namespace ServerSetSubscriptionsResult {
    export type Constructors = 'ServerSetSubscriptionsResult';
    export type Interface = Omit<ServerSetSubscriptionsResult, Constructors>;
}
@DartClass
@Implements(any)
export class ServerSetSubscriptionsResult implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : null});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ServerSetSubscriptionsResult)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 748820900;
    }
    constructor() {
    }
    @defaultConstructor
    ServerSetSubscriptionsResult() {
    }
}

export namespace DiagnosticGetDiagnosticsParams {
    export type Constructors = 'DiagnosticGetDiagnosticsParams';
    export type Interface = Omit<DiagnosticGetDiagnosticsParams, Constructors>;
}
@DartClass
@Implements(any)
export class DiagnosticGetDiagnosticsParams implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"diagnostic.getDiagnostics",null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, DiagnosticGetDiagnosticsParams)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 587526202;
    }
    constructor() {
    }
    @defaultConstructor
    DiagnosticGetDiagnosticsParams() {
    }
}

export namespace DiagnosticGetDiagnosticsResult {
    export type Constructors = 'DiagnosticGetDiagnosticsResult';
    export type Interface = Omit<DiagnosticGetDiagnosticsResult, Constructors>;
}
@DartClass
@Implements(any)
export class DiagnosticGetDiagnosticsResult implements any.Interface {
    _contexts : core.DartList<ContextData>;

    get contexts() : core.DartList<ContextData> {
        return this._contexts;
    }
    set contexts(value : core.DartList<ContextData>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._contexts = value;
    }
    constructor(contexts : core.DartList<ContextData>) {
    }
    @defaultConstructor
    DiagnosticGetDiagnosticsResult(contexts : core.DartList<ContextData>) {
        this.contexts = contexts;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : DiagnosticGetDiagnosticsResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let contexts : core.DartList<ContextData>;
            if (json.containsKey("contexts")) {
                contexts = jsonDecoder.decodeList(jsonPath + ".contexts",json.get("contexts"),(jsonPath : string,json : core.DartObject) =>  {
                    return new ContextData.fromJson(jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"contexts");
            }
            return new DiagnosticGetDiagnosticsResult(contexts);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"diagnostic.getDiagnostics result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => DiagnosticGetDiagnosticsResult;

    @namedFactory
    static $fromResponse(response : any) : DiagnosticGetDiagnosticsResult {
        return new DiagnosticGetDiagnosticsResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => DiagnosticGetDiagnosticsResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("contexts",this.contexts.map((value : ContextData) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, DiagnosticGetDiagnosticsResult)) {
            return listEqual(this.contexts,other.contexts,(a : ContextData,b : ContextData) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.contexts.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace DiagnosticGetServerPortParams {
    export type Constructors = 'DiagnosticGetServerPortParams';
    export type Interface = Omit<DiagnosticGetServerPortParams, Constructors>;
}
@DartClass
@Implements(any)
export class DiagnosticGetServerPortParams implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"diagnostic.getServerPort",null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, DiagnosticGetServerPortParams)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 367508704;
    }
    constructor() {
    }
    @defaultConstructor
    DiagnosticGetServerPortParams() {
    }
}

export namespace DiagnosticGetServerPortResult {
    export type Constructors = 'DiagnosticGetServerPortResult';
    export type Interface = Omit<DiagnosticGetServerPortResult, Constructors>;
}
@DartClass
@Implements(any)
export class DiagnosticGetServerPortResult implements any.Interface {
    _port : number;

    get port() : number {
        return this._port;
    }
    set port(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._port = value;
    }
    constructor(port : number) {
    }
    @defaultConstructor
    DiagnosticGetServerPortResult(port : number) {
        this.port = port;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : DiagnosticGetServerPortResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let port : number;
            if (json.containsKey("port")) {
                port = jsonDecoder.decodeInt(jsonPath + ".port",json.get("port"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"port");
            }
            return new DiagnosticGetServerPortResult(port);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"diagnostic.getServerPort result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => DiagnosticGetServerPortResult;

    @namedFactory
    static $fromResponse(response : any) : DiagnosticGetServerPortResult {
        return new DiagnosticGetServerPortResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => DiagnosticGetServerPortResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("port",this.port);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, DiagnosticGetServerPortResult)) {
            return this.port == other.port;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.port).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditFormatParams {
    export type Constructors = 'EditFormatParams';
    export type Interface = Omit<EditFormatParams, Constructors>;
}
@DartClass
@Implements(any)
export class EditFormatParams implements any.Interface {
    _file : string;

    _selectionOffset : number;

    _selectionLength : number;

    _lineLength : number;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get selectionOffset() : number {
        return this._selectionOffset;
    }
    set selectionOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._selectionOffset = value;
    }
    get selectionLength() : number {
        return this._selectionLength;
    }
    set selectionLength(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._selectionLength = value;
    }
    get lineLength() : number {
        return this._lineLength;
    }
    set lineLength(value : number) {
        this._lineLength = value;
    }
    constructor(file : string,selectionOffset : number,selectionLength : number,_namedArguments? : {lineLength? : number}) {
    }
    @defaultConstructor
    EditFormatParams(file : string,selectionOffset : number,selectionLength : number,_namedArguments? : {lineLength? : number}) {
        let {lineLength} = Object.assign({
        }, _namedArguments );
        this.file = file;
        this.selectionOffset = selectionOffset;
        this.selectionLength = selectionLength;
        this.lineLength = lineLength;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditFormatParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let selectionOffset : number;
            if (json.containsKey("selectionOffset")) {
                selectionOffset = jsonDecoder.decodeInt(jsonPath + ".selectionOffset",json.get("selectionOffset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"selectionOffset");
            }
            let selectionLength : number;
            if (json.containsKey("selectionLength")) {
                selectionLength = jsonDecoder.decodeInt(jsonPath + ".selectionLength",json.get("selectionLength"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"selectionLength");
            }
            let lineLength : number;
            if (json.containsKey("lineLength")) {
                lineLength = jsonDecoder.decodeInt(jsonPath + ".lineLength",json.get("lineLength"));
            }
            return new EditFormatParams(file,selectionOffset,selectionLength,{
                lineLength : lineLength});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.format params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditFormatParams;

    @namedFactory
    static $fromRequest(request : any) : EditFormatParams {
        return new EditFormatParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => EditFormatParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("selectionOffset",this.selectionOffset);
        result.set("selectionLength",this.selectionLength);
        if (this.lineLength != null) {
            result.set("lineLength",this.lineLength);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"edit.format",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditFormatParams)) {
            return this.file == other.file && this.selectionOffset == other.selectionOffset && this.selectionLength == other.selectionLength && this.lineLength == other.lineLength;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.selectionOffset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.selectionLength).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.lineLength).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditFormatResult {
    export type Constructors = 'EditFormatResult';
    export type Interface = Omit<EditFormatResult, Constructors>;
}
@DartClass
@Implements(any)
export class EditFormatResult implements any.Interface {
    _edits : core.DartList<any>;

    _selectionOffset : number;

    _selectionLength : number;

    get edits() : core.DartList<any> {
        return this._edits;
    }
    set edits(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._edits = value;
    }
    get selectionOffset() : number {
        return this._selectionOffset;
    }
    set selectionOffset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._selectionOffset = value;
    }
    get selectionLength() : number {
        return this._selectionLength;
    }
    set selectionLength(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._selectionLength = value;
    }
    constructor(edits : core.DartList<any>,selectionOffset : number,selectionLength : number) {
    }
    @defaultConstructor
    EditFormatResult(edits : core.DartList<any>,selectionOffset : number,selectionLength : number) {
        this.edits = edits;
        this.selectionOffset = selectionOffset;
        this.selectionLength = selectionLength;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditFormatResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let edits : core.DartList<any>;
            if (json.containsKey("edits")) {
                edits = jsonDecoder.decodeList(jsonPath + ".edits",json.get("edits"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"edits");
            }
            let selectionOffset : number;
            if (json.containsKey("selectionOffset")) {
                selectionOffset = jsonDecoder.decodeInt(jsonPath + ".selectionOffset",json.get("selectionOffset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"selectionOffset");
            }
            let selectionLength : number;
            if (json.containsKey("selectionLength")) {
                selectionLength = jsonDecoder.decodeInt(jsonPath + ".selectionLength",json.get("selectionLength"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"selectionLength");
            }
            return new EditFormatResult(edits,selectionOffset,selectionLength);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.format result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditFormatResult;

    @namedFactory
    static $fromResponse(response : any) : EditFormatResult {
        return new EditFormatResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => EditFormatResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("edits",this.edits.map((value : any) =>  {
            return value.toJson();
        }).toList());
        result.set("selectionOffset",this.selectionOffset);
        result.set("selectionLength",this.selectionLength);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditFormatResult)) {
            return listEqual(this.edits,other.edits,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            }) && this.selectionOffset == other.selectionOffset && this.selectionLength == other.selectionLength;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.edits.hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.selectionOffset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.selectionLength).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditGetAssistsParams {
    export type Constructors = 'EditGetAssistsParams';
    export type Interface = Omit<EditGetAssistsParams, Constructors>;
}
@DartClass
@Implements(any)
export class EditGetAssistsParams implements any.Interface {
    _file : string;

    _offset : number;

    _length : number;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get length() : number {
        return this._length;
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._length = value;
    }
    constructor(file : string,offset : number,length : number) {
    }
    @defaultConstructor
    EditGetAssistsParams(file : string,offset : number,length : number) {
        this.file = file;
        this.offset = offset;
        this.length = length;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditGetAssistsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let length : number;
            if (json.containsKey("length")) {
                length = jsonDecoder.decodeInt(jsonPath + ".length",json.get("length"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"length");
            }
            return new EditGetAssistsParams(file,offset,length);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.getAssists params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditGetAssistsParams;

    @namedFactory
    static $fromRequest(request : any) : EditGetAssistsParams {
        return new EditGetAssistsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => EditGetAssistsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("offset",this.offset);
        result.set("length",this.length);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"edit.getAssists",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditGetAssistsParams)) {
            return this.file == other.file && this.offset == other.offset && this.length == other.length;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.length).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditGetAssistsResult {
    export type Constructors = 'EditGetAssistsResult';
    export type Interface = Omit<EditGetAssistsResult, Constructors>;
}
@DartClass
@Implements(any)
export class EditGetAssistsResult implements any.Interface {
    _assists : core.DartList<any>;

    get assists() : core.DartList<any> {
        return this._assists;
    }
    set assists(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._assists = value;
    }
    constructor(assists : core.DartList<any>) {
    }
    @defaultConstructor
    EditGetAssistsResult(assists : core.DartList<any>) {
        this.assists = assists;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditGetAssistsResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let assists : core.DartList<any>;
            if (json.containsKey("assists")) {
                assists = jsonDecoder.decodeList(jsonPath + ".assists",json.get("assists"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"assists");
            }
            return new EditGetAssistsResult(assists);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.getAssists result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditGetAssistsResult;

    @namedFactory
    static $fromResponse(response : any) : EditGetAssistsResult {
        return new EditGetAssistsResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => EditGetAssistsResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("assists",this.assists.map((value : any) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditGetAssistsResult)) {
            return listEqual(this.assists,other.assists,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.assists.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditGetAvailableRefactoringsParams {
    export type Constructors = 'EditGetAvailableRefactoringsParams';
    export type Interface = Omit<EditGetAvailableRefactoringsParams, Constructors>;
}
@DartClass
@Implements(any)
export class EditGetAvailableRefactoringsParams implements any.Interface {
    _file : string;

    _offset : number;

    _length : number;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get length() : number {
        return this._length;
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._length = value;
    }
    constructor(file : string,offset : number,length : number) {
    }
    @defaultConstructor
    EditGetAvailableRefactoringsParams(file : string,offset : number,length : number) {
        this.file = file;
        this.offset = offset;
        this.length = length;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditGetAvailableRefactoringsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let length : number;
            if (json.containsKey("length")) {
                length = jsonDecoder.decodeInt(jsonPath + ".length",json.get("length"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"length");
            }
            return new EditGetAvailableRefactoringsParams(file,offset,length);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.getAvailableRefactorings params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditGetAvailableRefactoringsParams;

    @namedFactory
    static $fromRequest(request : any) : EditGetAvailableRefactoringsParams {
        return new EditGetAvailableRefactoringsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => EditGetAvailableRefactoringsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("offset",this.offset);
        result.set("length",this.length);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"edit.getAvailableRefactorings",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditGetAvailableRefactoringsParams)) {
            return this.file == other.file && this.offset == other.offset && this.length == other.length;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.length).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditGetAvailableRefactoringsResult {
    export type Constructors = 'EditGetAvailableRefactoringsResult';
    export type Interface = Omit<EditGetAvailableRefactoringsResult, Constructors>;
}
@DartClass
@Implements(any)
export class EditGetAvailableRefactoringsResult implements any.Interface {
    _kinds : core.DartList<any>;

    get kinds() : core.DartList<any> {
        return this._kinds;
    }
    set kinds(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._kinds = value;
    }
    constructor(kinds : core.DartList<any>) {
    }
    @defaultConstructor
    EditGetAvailableRefactoringsResult(kinds : core.DartList<any>) {
        this.kinds = kinds;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditGetAvailableRefactoringsResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let kinds : core.DartList<any>;
            if (json.containsKey("kinds")) {
                kinds = jsonDecoder.decodeList(jsonPath + ".kinds",json.get("kinds"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"kinds");
            }
            return new EditGetAvailableRefactoringsResult(kinds);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.getAvailableRefactorings result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditGetAvailableRefactoringsResult;

    @namedFactory
    static $fromResponse(response : any) : EditGetAvailableRefactoringsResult {
        return new EditGetAvailableRefactoringsResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => EditGetAvailableRefactoringsResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("kinds",this.kinds.map((value : any) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditGetAvailableRefactoringsResult)) {
            return listEqual(this.kinds,other.kinds,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.kinds.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditGetFixesParams {
    export type Constructors = 'EditGetFixesParams';
    export type Interface = Omit<EditGetFixesParams, Constructors>;
}
@DartClass
@Implements(any)
export class EditGetFixesParams implements any.Interface {
    _file : string;

    _offset : number;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    constructor(file : string,offset : number) {
    }
    @defaultConstructor
    EditGetFixesParams(file : string,offset : number) {
        this.file = file;
        this.offset = offset;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditGetFixesParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            return new EditGetFixesParams(file,offset);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.getFixes params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditGetFixesParams;

    @namedFactory
    static $fromRequest(request : any) : EditGetFixesParams {
        return new EditGetFixesParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => EditGetFixesParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("offset",this.offset);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"edit.getFixes",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditGetFixesParams)) {
            return this.file == other.file && this.offset == other.offset;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditGetFixesResult {
    export type Constructors = 'EditGetFixesResult';
    export type Interface = Omit<EditGetFixesResult, Constructors>;
}
@DartClass
@Implements(any)
export class EditGetFixesResult implements any.Interface {
    _fixes : core.DartList<AnalysisErrorFixes>;

    get fixes() : core.DartList<AnalysisErrorFixes> {
        return this._fixes;
    }
    set fixes(value : core.DartList<AnalysisErrorFixes>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._fixes = value;
    }
    constructor(fixes : core.DartList<AnalysisErrorFixes>) {
    }
    @defaultConstructor
    EditGetFixesResult(fixes : core.DartList<AnalysisErrorFixes>) {
        this.fixes = fixes;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditGetFixesResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let fixes : core.DartList<AnalysisErrorFixes>;
            if (json.containsKey("fixes")) {
                fixes = jsonDecoder.decodeList(jsonPath + ".fixes",json.get("fixes"),(jsonPath : string,json : core.DartObject) =>  {
                    return new AnalysisErrorFixes.fromJson(jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"fixes");
            }
            return new EditGetFixesResult(fixes);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.getFixes result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditGetFixesResult;

    @namedFactory
    static $fromResponse(response : any) : EditGetFixesResult {
        return new EditGetFixesResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => EditGetFixesResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("fixes",this.fixes.map((value : AnalysisErrorFixes) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditGetFixesResult)) {
            return listEqual(this.fixes,other.fixes,(a : AnalysisErrorFixes,b : AnalysisErrorFixes) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.fixes.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditGetRefactoringParams {
    export type Constructors = 'EditGetRefactoringParams';
    export type Interface = Omit<EditGetRefactoringParams, Constructors>;
}
@DartClass
@Implements(any)
export class EditGetRefactoringParams implements any.Interface {
    _kind : any;

    _file : string;

    _offset : number;

    _length : number;

    _validateOnly : boolean;

    _options : RefactoringOptions;

    get kind() : any {
        return this._kind;
    }
    set kind(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._kind = value;
    }
    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get length() : number {
        return this._length;
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._length = value;
    }
    get validateOnly() : boolean {
        return this._validateOnly;
    }
    set validateOnly(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._validateOnly = value;
    }
    get options() : RefactoringOptions {
        return this._options;
    }
    set options(value : RefactoringOptions) {
        this._options = value;
    }
    constructor(kind : any,file : string,offset : number,length : number,validateOnly : boolean,_namedArguments? : {options? : RefactoringOptions}) {
    }
    @defaultConstructor
    EditGetRefactoringParams(kind : any,file : string,offset : number,length : number,validateOnly : boolean,_namedArguments? : {options? : RefactoringOptions}) {
        let {options} = Object.assign({
        }, _namedArguments );
        this.kind = kind;
        this.file = file;
        this.offset = offset;
        this.length = length;
        this.validateOnly = validateOnly;
        this.options = options;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditGetRefactoringParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let kind : any;
            if (json.containsKey("kind")) {
                kind = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".kind",json.get("kind"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"kind");
            }
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let length : number;
            if (json.containsKey("length")) {
                length = jsonDecoder.decodeInt(jsonPath + ".length",json.get("length"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"length");
            }
            let validateOnly : boolean;
            if (json.containsKey("validateOnly")) {
                validateOnly = jsonDecoder.decodeBool(jsonPath + ".validateOnly",json.get("validateOnly"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"validateOnly");
            }
            let options : RefactoringOptions;
            if (json.containsKey("options")) {
                options = new RefactoringOptions.fromJson(jsonDecoder,jsonPath + ".options",json.get("options"),kind);
            }
            return new EditGetRefactoringParams(kind,file,offset,length,validateOnly,{
                options : options});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.getRefactoring params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditGetRefactoringParams;

    @namedFactory
    static $fromRequest(request : any) : EditGetRefactoringParams {
        let params = new EditGetRefactoringParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
        op(Op.INDEX_ASSIGN,REQUEST_ID_REFACTORING_KINDS,request.id,params.kind);
        return params;
    }
    static fromRequest : new(request : any) => EditGetRefactoringParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("kind",this.kind.toJson());
        result.set("file",this.file);
        result.set("offset",this.offset);
        result.set("length",this.length);
        result.set("validateOnly",this.validateOnly);
        if (this.options != null) {
            result.set("options",this.options.toJson());
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"edit.getRefactoring",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditGetRefactoringParams)) {
            return op(Op.EQUALS,this.kind,other.kind) && this.file == other.file && this.offset == other.offset && this.length == other.length && this.validateOnly == other.validateOnly && op(Op.EQUALS,this.options,other.options);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.kind.hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.length).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.validateOnly.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.options.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditGetRefactoringResult {
    export type Constructors = 'EditGetRefactoringResult';
    export type Interface = Omit<EditGetRefactoringResult, Constructors>;
}
@DartClass
@Implements(any)
export class EditGetRefactoringResult implements any.Interface {
    _initialProblems : core.DartList<any>;

    _optionsProblems : core.DartList<any>;

    _finalProblems : core.DartList<any>;

    _feedback : RefactoringFeedback;

    _change : any;

    _potentialEdits : core.DartList<string>;

    get initialProblems() : core.DartList<any> {
        return this._initialProblems;
    }
    set initialProblems(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._initialProblems = value;
    }
    get optionsProblems() : core.DartList<any> {
        return this._optionsProblems;
    }
    set optionsProblems(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._optionsProblems = value;
    }
    get finalProblems() : core.DartList<any> {
        return this._finalProblems;
    }
    set finalProblems(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._finalProblems = value;
    }
    get feedback() : RefactoringFeedback {
        return this._feedback;
    }
    set feedback(value : RefactoringFeedback) {
        this._feedback = value;
    }
    get change() : any {
        return this._change;
    }
    set change(value : any) {
        this._change = value;
    }
    get potentialEdits() : core.DartList<string> {
        return this._potentialEdits;
    }
    set potentialEdits(value : core.DartList<string>) {
        this._potentialEdits = value;
    }
    constructor(initialProblems : core.DartList<any>,optionsProblems : core.DartList<any>,finalProblems : core.DartList<any>,_namedArguments? : {feedback? : RefactoringFeedback,change? : any,potentialEdits? : core.DartList<string>}) {
    }
    @defaultConstructor
    EditGetRefactoringResult(initialProblems : core.DartList<any>,optionsProblems : core.DartList<any>,finalProblems : core.DartList<any>,_namedArguments? : {feedback? : RefactoringFeedback,change? : any,potentialEdits? : core.DartList<string>}) {
        let {feedback,change,potentialEdits} = Object.assign({
        }, _namedArguments );
        this.initialProblems = initialProblems;
        this.optionsProblems = optionsProblems;
        this.finalProblems = finalProblems;
        this.feedback = feedback;
        this.change = change;
        this.potentialEdits = potentialEdits;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditGetRefactoringResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let initialProblems : core.DartList<any>;
            if (json.containsKey("initialProblems")) {
                initialProblems = jsonDecoder.decodeList(jsonPath + ".initialProblems",json.get("initialProblems"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"initialProblems");
            }
            let optionsProblems : core.DartList<any>;
            if (json.containsKey("optionsProblems")) {
                optionsProblems = jsonDecoder.decodeList(jsonPath + ".optionsProblems",json.get("optionsProblems"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"optionsProblems");
            }
            let finalProblems : core.DartList<any>;
            if (json.containsKey("finalProblems")) {
                finalProblems = jsonDecoder.decodeList(jsonPath + ".finalProblems",json.get("finalProblems"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"finalProblems");
            }
            let feedback : RefactoringFeedback;
            if (json.containsKey("feedback")) {
                feedback = new RefactoringFeedback.fromJson(jsonDecoder,jsonPath + ".feedback",json.get("feedback"),json);
            }
            let change : any;
            if (json.containsKey("change")) {
                change = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".change",json.get("change"));
            }
            let potentialEdits : core.DartList<string>;
            if (json.containsKey("potentialEdits")) {
                potentialEdits = jsonDecoder.decodeList(jsonPath + ".potentialEdits",json.get("potentialEdits"),jsonDecoder.decodeString);
            }
            return new EditGetRefactoringResult(initialProblems,optionsProblems,finalProblems,{
                feedback : feedback,change : change,potentialEdits : potentialEdits});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.getRefactoring result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditGetRefactoringResult;

    @namedFactory
    static $fromResponse(response : any) : EditGetRefactoringResult {
        return new EditGetRefactoringResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => EditGetRefactoringResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("initialProblems",this.initialProblems.map((value : any) =>  {
            return value.toJson();
        }).toList());
        result.set("optionsProblems",this.optionsProblems.map((value : any) =>  {
            return value.toJson();
        }).toList());
        result.set("finalProblems",this.finalProblems.map((value : any) =>  {
            return value.toJson();
        }).toList());
        if (this.feedback != null) {
            result.set("feedback",this.feedback.toJson());
        }
        if (this.change != null) {
            result.set("change",this.change.toJson());
        }
        if (this.potentialEdits != null) {
            result.set("potentialEdits",this.potentialEdits);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditGetRefactoringResult)) {
            return listEqual(this.initialProblems,other.initialProblems,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            }) && listEqual(this.optionsProblems,other.optionsProblems,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            }) && listEqual(this.finalProblems,other.finalProblems,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            }) && op(Op.EQUALS,this.feedback,other.feedback) && op(Op.EQUALS,this.change,other.change) && listEqual(this.potentialEdits,other.potentialEdits,(a : string,b : string) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.initialProblems.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.optionsProblems.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.finalProblems.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.feedback.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.change.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.potentialEdits.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditGetStatementCompletionParams {
    export type Constructors = 'EditGetStatementCompletionParams';
    export type Interface = Omit<EditGetStatementCompletionParams, Constructors>;
}
@DartClass
@Implements(any)
export class EditGetStatementCompletionParams implements any.Interface {
    _file : string;

    _offset : number;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    constructor(file : string,offset : number) {
    }
    @defaultConstructor
    EditGetStatementCompletionParams(file : string,offset : number) {
        this.file = file;
        this.offset = offset;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditGetStatementCompletionParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            return new EditGetStatementCompletionParams(file,offset);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.getStatementCompletion params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditGetStatementCompletionParams;

    @namedFactory
    static $fromRequest(request : any) : EditGetStatementCompletionParams {
        return new EditGetStatementCompletionParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => EditGetStatementCompletionParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("offset",this.offset);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"edit.getStatementCompletion",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditGetStatementCompletionParams)) {
            return this.file == other.file && this.offset == other.offset;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditGetStatementCompletionResult {
    export type Constructors = 'EditGetStatementCompletionResult';
    export type Interface = Omit<EditGetStatementCompletionResult, Constructors>;
}
@DartClass
@Implements(any)
export class EditGetStatementCompletionResult implements any.Interface {
    _change : any;

    _whitespaceOnly : boolean;

    get change() : any {
        return this._change;
    }
    set change(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._change = value;
    }
    get whitespaceOnly() : boolean {
        return this._whitespaceOnly;
    }
    set whitespaceOnly(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._whitespaceOnly = value;
    }
    constructor(change : any,whitespaceOnly : boolean) {
    }
    @defaultConstructor
    EditGetStatementCompletionResult(change : any,whitespaceOnly : boolean) {
        this.change = change;
        this.whitespaceOnly = whitespaceOnly;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditGetStatementCompletionResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let change : any;
            if (json.containsKey("change")) {
                change = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".change",json.get("change"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"change");
            }
            let whitespaceOnly : boolean;
            if (json.containsKey("whitespaceOnly")) {
                whitespaceOnly = jsonDecoder.decodeBool(jsonPath + ".whitespaceOnly",json.get("whitespaceOnly"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"whitespaceOnly");
            }
            return new EditGetStatementCompletionResult(change,whitespaceOnly);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.getStatementCompletion result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditGetStatementCompletionResult;

    @namedFactory
    static $fromResponse(response : any) : EditGetStatementCompletionResult {
        return new EditGetStatementCompletionResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => EditGetStatementCompletionResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("change",this.change.toJson());
        result.set("whitespaceOnly",this.whitespaceOnly);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditGetStatementCompletionResult)) {
            return op(Op.EQUALS,this.change,other.change) && this.whitespaceOnly == other.whitespaceOnly;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.change.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.whitespaceOnly.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditOrganizeDirectivesParams {
    export type Constructors = 'EditOrganizeDirectivesParams';
    export type Interface = Omit<EditOrganizeDirectivesParams, Constructors>;
}
@DartClass
@Implements(any)
export class EditOrganizeDirectivesParams implements any.Interface {
    _file : string;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    constructor(file : string) {
    }
    @defaultConstructor
    EditOrganizeDirectivesParams(file : string) {
        this.file = file;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditOrganizeDirectivesParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            return new EditOrganizeDirectivesParams(file);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.organizeDirectives params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditOrganizeDirectivesParams;

    @namedFactory
    static $fromRequest(request : any) : EditOrganizeDirectivesParams {
        return new EditOrganizeDirectivesParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => EditOrganizeDirectivesParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"edit.organizeDirectives",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditOrganizeDirectivesParams)) {
            return this.file == other.file;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditOrganizeDirectivesResult {
    export type Constructors = 'EditOrganizeDirectivesResult';
    export type Interface = Omit<EditOrganizeDirectivesResult, Constructors>;
}
@DartClass
@Implements(any)
export class EditOrganizeDirectivesResult implements any.Interface {
    _edit : any;

    get edit() : any {
        return this._edit;
    }
    set edit(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._edit = value;
    }
    constructor(edit : any) {
    }
    @defaultConstructor
    EditOrganizeDirectivesResult(edit : any) {
        this.edit = edit;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditOrganizeDirectivesResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let edit : any;
            if (json.containsKey("edit")) {
                edit = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".edit",json.get("edit"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"edit");
            }
            return new EditOrganizeDirectivesResult(edit);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.organizeDirectives result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditOrganizeDirectivesResult;

    @namedFactory
    static $fromResponse(response : any) : EditOrganizeDirectivesResult {
        return new EditOrganizeDirectivesResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => EditOrganizeDirectivesResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("edit",this.edit.toJson());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditOrganizeDirectivesResult)) {
            return op(Op.EQUALS,this.edit,other.edit);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.edit.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditSortMembersParams {
    export type Constructors = 'EditSortMembersParams';
    export type Interface = Omit<EditSortMembersParams, Constructors>;
}
@DartClass
@Implements(any)
export class EditSortMembersParams implements any.Interface {
    _file : string;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    constructor(file : string) {
    }
    @defaultConstructor
    EditSortMembersParams(file : string) {
        this.file = file;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditSortMembersParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            return new EditSortMembersParams(file);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.sortMembers params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditSortMembersParams;

    @namedFactory
    static $fromRequest(request : any) : EditSortMembersParams {
        return new EditSortMembersParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => EditSortMembersParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"edit.sortMembers",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditSortMembersParams)) {
            return this.file == other.file;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace EditSortMembersResult {
    export type Constructors = 'EditSortMembersResult';
    export type Interface = Omit<EditSortMembersResult, Constructors>;
}
@DartClass
@Implements(any)
export class EditSortMembersResult implements any.Interface {
    _edit : any;

    get edit() : any {
        return this._edit;
    }
    set edit(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._edit = value;
    }
    constructor(edit : any) {
    }
    @defaultConstructor
    EditSortMembersResult(edit : any) {
        this.edit = edit;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : EditSortMembersResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let edit : any;
            if (json.containsKey("edit")) {
                edit = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".edit",json.get("edit"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"edit");
            }
            return new EditSortMembersResult(edit);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"edit.sortMembers result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => EditSortMembersResult;

    @namedFactory
    static $fromResponse(response : any) : EditSortMembersResult {
        return new EditSortMembersResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => EditSortMembersResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("edit",this.edit.toJson());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, EditSortMembersResult)) {
            return op(Op.EQUALS,this.edit,other.edit);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.edit.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExecutableFile {
    export type Constructors = 'ExecutableFile';
    export type Interface = Omit<ExecutableFile, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutableFile implements any.Interface {
    _file : string;

    _kind : ExecutableKind;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get kind() : ExecutableKind {
        return this._kind;
    }
    set kind(value : ExecutableKind) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._kind = value;
    }
    constructor(file : string,kind : ExecutableKind) {
    }
    @defaultConstructor
    ExecutableFile(file : string,kind : ExecutableKind) {
        this.file = file;
        this.kind = kind;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExecutableFile {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let kind : ExecutableKind;
            if (json.containsKey("kind")) {
                kind = new ExecutableKind.fromJson(jsonDecoder,jsonPath + ".kind",json.get("kind"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"kind");
            }
            return new ExecutableFile(file,kind);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"ExecutableFile",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExecutableFile;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("kind",this.kind.toJson());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExecutableFile)) {
            return this.file == other.file && op(Op.EQUALS,this.kind,other.kind);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.kind.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExecutableKind {
    export type Constructors = '_';
    export type Interface = Omit<ExecutableKind, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutableKind implements any.Interface {
    private static __$CLIENT : ExecutableKind;
    static get CLIENT() : ExecutableKind { 
        if (this.__$CLIENT===undefined) {
            this.__$CLIENT = new ExecutableKind._("CLIENT");
        }
        return this.__$CLIENT;
    }

    private static __$EITHER : ExecutableKind;
    static get EITHER() : ExecutableKind { 
        if (this.__$EITHER===undefined) {
            this.__$EITHER = new ExecutableKind._("EITHER");
        }
        return this.__$EITHER;
    }

    private static __$NOT_EXECUTABLE : ExecutableKind;
    static get NOT_EXECUTABLE() : ExecutableKind { 
        if (this.__$NOT_EXECUTABLE===undefined) {
            this.__$NOT_EXECUTABLE = new ExecutableKind._("NOT_EXECUTABLE");
        }
        return this.__$NOT_EXECUTABLE;
    }

    private static __$SERVER : ExecutableKind;
    static get SERVER() : ExecutableKind { 
        if (this.__$SERVER===undefined) {
            this.__$SERVER = new ExecutableKind._("SERVER");
        }
        return this.__$SERVER;
    }

    private static __$VALUES : core.DartList<ExecutableKind>;
    static get VALUES() : core.DartList<ExecutableKind> { 
        if (this.__$VALUES===undefined) {
            this.__$VALUES = new core.DartList.literal<ExecutableKind>(ExecutableKind.CLIENT,ExecutableKind.EITHER,ExecutableKind.NOT_EXECUTABLE,ExecutableKind.SERVER);
        }
        return this.__$VALUES;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    @namedConstructor
    _(name : string) {
        this.name = name;
    }
    static _ : new(name : string) => ExecutableKind;

    constructor(name : string) {
    }
    @defaultFactory
    static $ExecutableKind(name : string) : ExecutableKind {
        switch (name) {
            case "CLIENT":
                return ExecutableKind.CLIENT;
            case "EITHER":
                return ExecutableKind.EITHER;
            case "NOT_EXECUTABLE":
                return ExecutableKind.NOT_EXECUTABLE;
            case "SERVER":
                return ExecutableKind.SERVER;
        }
        throw new core.Exception(`Illegal enum value: ${name}`);
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExecutableKind {
        if (is(json, "string")) {
            try {
                return new ExecutableKind(json);
            } catch (__error__) {

                {
                    let _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath,"ExecutableKind",json);
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExecutableKind;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `ExecutableKind.${this.name}`;
    }
    toJson() : string {
        return this.name;
    }
}

export namespace ExecutionCreateContextParams {
    export type Constructors = 'ExecutionCreateContextParams';
    export type Interface = Omit<ExecutionCreateContextParams, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutionCreateContextParams implements any.Interface {
    _contextRoot : string;

    get contextRoot() : string {
        return this._contextRoot;
    }
    set contextRoot(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._contextRoot = value;
    }
    constructor(contextRoot : string) {
    }
    @defaultConstructor
    ExecutionCreateContextParams(contextRoot : string) {
        this.contextRoot = contextRoot;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExecutionCreateContextParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let contextRoot : string;
            if (json.containsKey("contextRoot")) {
                contextRoot = jsonDecoder.decodeString(jsonPath + ".contextRoot",json.get("contextRoot"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"contextRoot");
            }
            return new ExecutionCreateContextParams(contextRoot);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"execution.createContext params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExecutionCreateContextParams;

    @namedFactory
    static $fromRequest(request : any) : ExecutionCreateContextParams {
        return new ExecutionCreateContextParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => ExecutionCreateContextParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("contextRoot",this.contextRoot);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"execution.createContext",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExecutionCreateContextParams)) {
            return this.contextRoot == other.contextRoot;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.contextRoot).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExecutionCreateContextResult {
    export type Constructors = 'ExecutionCreateContextResult';
    export type Interface = Omit<ExecutionCreateContextResult, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutionCreateContextResult implements any.Interface {
    _id : string;

    get id() : string {
        return this._id;
    }
    set id(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._id = value;
    }
    constructor(id : string) {
    }
    @defaultConstructor
    ExecutionCreateContextResult(id : string) {
        this.id = id;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExecutionCreateContextResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let id : string;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id",json.get("id"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"id");
            }
            return new ExecutionCreateContextResult(id);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"execution.createContext result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExecutionCreateContextResult;

    @namedFactory
    static $fromResponse(response : any) : ExecutionCreateContextResult {
        return new ExecutionCreateContextResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => ExecutionCreateContextResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("id",this.id);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExecutionCreateContextResult)) {
            return this.id == other.id;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.id).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExecutionDeleteContextParams {
    export type Constructors = 'ExecutionDeleteContextParams';
    export type Interface = Omit<ExecutionDeleteContextParams, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutionDeleteContextParams implements any.Interface {
    _id : string;

    get id() : string {
        return this._id;
    }
    set id(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._id = value;
    }
    constructor(id : string) {
    }
    @defaultConstructor
    ExecutionDeleteContextParams(id : string) {
        this.id = id;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExecutionDeleteContextParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let id : string;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id",json.get("id"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"id");
            }
            return new ExecutionDeleteContextParams(id);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"execution.deleteContext params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExecutionDeleteContextParams;

    @namedFactory
    static $fromRequest(request : any) : ExecutionDeleteContextParams {
        return new ExecutionDeleteContextParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => ExecutionDeleteContextParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("id",this.id);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"execution.deleteContext",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExecutionDeleteContextParams)) {
            return this.id == other.id;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.id).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExecutionDeleteContextResult {
    export type Constructors = 'ExecutionDeleteContextResult';
    export type Interface = Omit<ExecutionDeleteContextResult, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutionDeleteContextResult implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : null});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExecutionDeleteContextResult)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 479954425;
    }
    constructor() {
    }
    @defaultConstructor
    ExecutionDeleteContextResult() {
    }
}

export namespace ExecutionLaunchDataParams {
    export type Constructors = 'ExecutionLaunchDataParams';
    export type Interface = Omit<ExecutionLaunchDataParams, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutionLaunchDataParams implements any.Interface {
    _file : string;

    _kind : ExecutableKind;

    _referencedFiles : core.DartList<string>;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get kind() : ExecutableKind {
        return this._kind;
    }
    set kind(value : ExecutableKind) {
        this._kind = value;
    }
    get referencedFiles() : core.DartList<string> {
        return this._referencedFiles;
    }
    set referencedFiles(value : core.DartList<string>) {
        this._referencedFiles = value;
    }
    constructor(file : string,_namedArguments? : {kind? : ExecutableKind,referencedFiles? : core.DartList<string>}) {
    }
    @defaultConstructor
    ExecutionLaunchDataParams(file : string,_namedArguments? : {kind? : ExecutableKind,referencedFiles? : core.DartList<string>}) {
        let {kind,referencedFiles} = Object.assign({
        }, _namedArguments );
        this.file = file;
        this.kind = kind;
        this.referencedFiles = referencedFiles;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExecutionLaunchDataParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let kind : ExecutableKind;
            if (json.containsKey("kind")) {
                kind = new ExecutableKind.fromJson(jsonDecoder,jsonPath + ".kind",json.get("kind"));
            }
            let referencedFiles : core.DartList<string>;
            if (json.containsKey("referencedFiles")) {
                referencedFiles = jsonDecoder.decodeList(jsonPath + ".referencedFiles",json.get("referencedFiles"),jsonDecoder.decodeString);
            }
            return new ExecutionLaunchDataParams(file,{
                kind : kind,referencedFiles : referencedFiles});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"execution.launchData params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExecutionLaunchDataParams;

    @namedFactory
    static $fromNotification(notification : any) : ExecutionLaunchDataParams {
        return new ExecutionLaunchDataParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => ExecutionLaunchDataParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        if (this.kind != null) {
            result.set("kind",this.kind.toJson());
        }
        if (this.referencedFiles != null) {
            result.set("referencedFiles",this.referencedFiles);
        }
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"execution.launchData",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExecutionLaunchDataParams)) {
            return this.file == other.file && op(Op.EQUALS,this.kind,other.kind) && listEqual(this.referencedFiles,other.referencedFiles,(a : string,b : string) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.kind.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.referencedFiles.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExecutionMapUriParams {
    export type Constructors = 'ExecutionMapUriParams';
    export type Interface = Omit<ExecutionMapUriParams, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutionMapUriParams implements any.Interface {
    _id : string;

    _file : string;

    _uri : string;

    get id() : string {
        return this._id;
    }
    set id(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._id = value;
    }
    get file() : string {
        return this._file;
    }
    set file(value : string) {
        this._file = value;
    }
    get uri() : string {
        return this._uri;
    }
    set uri(value : string) {
        this._uri = value;
    }
    constructor(id : string,_namedArguments? : {file? : string,uri? : string}) {
    }
    @defaultConstructor
    ExecutionMapUriParams(id : string,_namedArguments? : {file? : string,uri? : string}) {
        let {file,uri} = Object.assign({
        }, _namedArguments );
        this.id = id;
        this.file = file;
        this.uri = uri;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExecutionMapUriParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let id : string;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id",json.get("id"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"id");
            }
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }
            let uri : string;
            if (json.containsKey("uri")) {
                uri = jsonDecoder.decodeString(jsonPath + ".uri",json.get("uri"));
            }
            return new ExecutionMapUriParams(id,{
                file : file,uri : uri});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"execution.mapUri params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExecutionMapUriParams;

    @namedFactory
    static $fromRequest(request : any) : ExecutionMapUriParams {
        return new ExecutionMapUriParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => ExecutionMapUriParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("id",this.id);
        if (this.file != null) {
            result.set("file",this.file);
        }
        if (this.uri != null) {
            result.set("uri",this.uri);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"execution.mapUri",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExecutionMapUriParams)) {
            return this.id == other.id && this.file == other.file && this.uri == other.uri;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.id).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.uri).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExecutionMapUriResult {
    export type Constructors = 'ExecutionMapUriResult';
    export type Interface = Omit<ExecutionMapUriResult, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutionMapUriResult implements any.Interface {
    _file : string;

    _uri : string;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        this._file = value;
    }
    get uri() : string {
        return this._uri;
    }
    set uri(value : string) {
        this._uri = value;
    }
    constructor(_namedArguments? : {file? : string,uri? : string}) {
    }
    @defaultConstructor
    ExecutionMapUriResult(_namedArguments? : {file? : string,uri? : string}) {
        let {file,uri} = Object.assign({
        }, _namedArguments );
        this.file = file;
        this.uri = uri;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExecutionMapUriResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }
            let uri : string;
            if (json.containsKey("uri")) {
                uri = jsonDecoder.decodeString(jsonPath + ".uri",json.get("uri"));
            }
            return new ExecutionMapUriResult({
                file : file,uri : uri});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"execution.mapUri result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExecutionMapUriResult;

    @namedFactory
    static $fromResponse(response : any) : ExecutionMapUriResult {
        return new ExecutionMapUriResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => ExecutionMapUriResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        if (this.file != null) {
            result.set("file",this.file);
        }
        if (this.uri != null) {
            result.set("uri",this.uri);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExecutionMapUriResult)) {
            return this.file == other.file && this.uri == other.uri;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.uri).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExecutionService {
    export type Constructors = '_';
    export type Interface = Omit<ExecutionService, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutionService implements any.Interface {
    private static __$LAUNCH_DATA : ExecutionService;
    static get LAUNCH_DATA() : ExecutionService { 
        if (this.__$LAUNCH_DATA===undefined) {
            this.__$LAUNCH_DATA = new ExecutionService._("LAUNCH_DATA");
        }
        return this.__$LAUNCH_DATA;
    }

    private static __$VALUES : core.DartList<ExecutionService>;
    static get VALUES() : core.DartList<ExecutionService> { 
        if (this.__$VALUES===undefined) {
            this.__$VALUES = new core.DartList.literal<ExecutionService>(ExecutionService.LAUNCH_DATA);
        }
        return this.__$VALUES;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    @namedConstructor
    _(name : string) {
        this.name = name;
    }
    static _ : new(name : string) => ExecutionService;

    constructor(name : string) {
    }
    @defaultFactory
    static $ExecutionService(name : string) : ExecutionService {
        switch (name) {
            case "LAUNCH_DATA":
                return ExecutionService.LAUNCH_DATA;
        }
        throw new core.Exception(`Illegal enum value: ${name}`);
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExecutionService {
        if (is(json, "string")) {
            try {
                return new ExecutionService(json);
            } catch (__error__) {

                {
                    let _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath,"ExecutionService",json);
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExecutionService;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `ExecutionService.${this.name}`;
    }
    toJson() : string {
        return this.name;
    }
}

export namespace ExecutionSetSubscriptionsParams {
    export type Constructors = 'ExecutionSetSubscriptionsParams';
    export type Interface = Omit<ExecutionSetSubscriptionsParams, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutionSetSubscriptionsParams implements any.Interface {
    _subscriptions : core.DartList<ExecutionService>;

    get subscriptions() : core.DartList<ExecutionService> {
        return this._subscriptions;
    }
    set subscriptions(value : core.DartList<ExecutionService>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._subscriptions = value;
    }
    constructor(subscriptions : core.DartList<ExecutionService>) {
    }
    @defaultConstructor
    ExecutionSetSubscriptionsParams(subscriptions : core.DartList<ExecutionService>) {
        this.subscriptions = subscriptions;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExecutionSetSubscriptionsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let subscriptions : core.DartList<ExecutionService>;
            if (json.containsKey("subscriptions")) {
                subscriptions = jsonDecoder.decodeList(jsonPath + ".subscriptions",json.get("subscriptions"),(jsonPath : string,json : core.DartObject) =>  {
                    return new ExecutionService.fromJson(jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"subscriptions");
            }
            return new ExecutionSetSubscriptionsParams(subscriptions);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"execution.setSubscriptions params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExecutionSetSubscriptionsParams;

    @namedFactory
    static $fromRequest(request : any) : ExecutionSetSubscriptionsParams {
        return new ExecutionSetSubscriptionsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => ExecutionSetSubscriptionsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("subscriptions",this.subscriptions.map((value : ExecutionService) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"execution.setSubscriptions",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExecutionSetSubscriptionsParams)) {
            return listEqual(this.subscriptions,other.subscriptions,(a : ExecutionService,b : ExecutionService) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.subscriptions.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExecutionSetSubscriptionsResult {
    export type Constructors = 'ExecutionSetSubscriptionsResult';
    export type Interface = Omit<ExecutionSetSubscriptionsResult, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutionSetSubscriptionsResult implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : null});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExecutionSetSubscriptionsResult)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 287678780;
    }
    constructor() {
    }
    @defaultConstructor
    ExecutionSetSubscriptionsResult() {
    }
}

export namespace ServerSetSubscriptionsParams {
    export type Constructors = 'ServerSetSubscriptionsParams';
    export type Interface = Omit<ServerSetSubscriptionsParams, Constructors>;
}
@DartClass
@Implements(any)
export class ServerSetSubscriptionsParams implements any.Interface {
    _subscriptions : core.DartList<ServerService>;

    get subscriptions() : core.DartList<ServerService> {
        return this._subscriptions;
    }
    set subscriptions(value : core.DartList<ServerService>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._subscriptions = value;
    }
    constructor(subscriptions : core.DartList<ServerService>) {
    }
    @defaultConstructor
    ServerSetSubscriptionsParams(subscriptions : core.DartList<ServerService>) {
        this.subscriptions = subscriptions;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ServerSetSubscriptionsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let subscriptions : core.DartList<ServerService>;
            if (json.containsKey("subscriptions")) {
                subscriptions = jsonDecoder.decodeList(jsonPath + ".subscriptions",json.get("subscriptions"),(jsonPath : string,json : core.DartObject) =>  {
                    return new ServerService.fromJson(jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"subscriptions");
            }
            return new ServerSetSubscriptionsParams(subscriptions);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"server.setSubscriptions params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ServerSetSubscriptionsParams;

    @namedFactory
    static $fromRequest(request : any) : ServerSetSubscriptionsParams {
        return new ServerSetSubscriptionsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => ServerSetSubscriptionsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("subscriptions",this.subscriptions.map((value : ServerService) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"server.setSubscriptions",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ServerSetSubscriptionsParams)) {
            return listEqual(this.subscriptions,other.subscriptions,(a : ServerService,b : ServerService) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.subscriptions.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ServerService {
    export type Constructors = '_';
    export type Interface = Omit<ServerService, Constructors>;
}
@DartClass
@Implements(any)
export class ServerService implements any.Interface {
    private static __$STATUS : ServerService;
    static get STATUS() : ServerService { 
        if (this.__$STATUS===undefined) {
            this.__$STATUS = new ServerService._("STATUS");
        }
        return this.__$STATUS;
    }

    private static __$VALUES : core.DartList<ServerService>;
    static get VALUES() : core.DartList<ServerService> { 
        if (this.__$VALUES===undefined) {
            this.__$VALUES = new core.DartList.literal<ServerService>(ServerService.STATUS);
        }
        return this.__$VALUES;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    @namedConstructor
    _(name : string) {
        this.name = name;
    }
    static _ : new(name : string) => ServerService;

    constructor(name : string) {
    }
    @defaultFactory
    static $ServerService(name : string) : ServerService {
        switch (name) {
            case "STATUS":
                return ServerService.STATUS;
        }
        throw new core.Exception(`Illegal enum value: ${name}`);
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ServerService {
        if (is(json, "string")) {
            try {
                return new ServerService(json);
            } catch (__error__) {

                {
                    let _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath,"ServerService",json);
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ServerService;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `ServerService.${this.name}`;
    }
    toJson() : string {
        return this.name;
    }
}

export namespace ServerGetVersionResult {
    export type Constructors = 'ServerGetVersionResult';
    export type Interface = Omit<ServerGetVersionResult, Constructors>;
}
@DartClass
@Implements(any)
export class ServerGetVersionResult implements any.Interface {
    _version : string;

    get version() : string {
        return this._version;
    }
    set version(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._version = value;
    }
    constructor(version : string) {
    }
    @defaultConstructor
    ServerGetVersionResult(version : string) {
        this.version = version;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ServerGetVersionResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let version : string;
            if (json.containsKey("version")) {
                version = jsonDecoder.decodeString(jsonPath + ".version",json.get("version"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"version");
            }
            return new ServerGetVersionResult(version);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"server.getVersion result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ServerGetVersionResult;

    @namedFactory
    static $fromResponse(response : any) : ServerGetVersionResult {
        return new ServerGetVersionResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => ServerGetVersionResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("version",this.version);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ServerGetVersionResult)) {
            return this.version == other.version;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.version).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ServerGetVersionParams {
    export type Constructors = 'ServerGetVersionParams';
    export type Interface = Omit<ServerGetVersionParams, Constructors>;
}
@DartClass
@Implements(any)
export class ServerGetVersionParams implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"server.getVersion",null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ServerGetVersionParams)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 55877452;
    }
    constructor() {
    }
    @defaultConstructor
    ServerGetVersionParams() {
    }
}

export namespace FileKind {
    export type Constructors = '_';
    export type Interface = Omit<FileKind, Constructors>;
}
@DartClass
@Implements(any)
export class FileKind implements any.Interface {
    private static __$LIBRARY : FileKind;
    static get LIBRARY() : FileKind { 
        if (this.__$LIBRARY===undefined) {
            this.__$LIBRARY = new FileKind._("LIBRARY");
        }
        return this.__$LIBRARY;
    }

    private static __$PART : FileKind;
    static get PART() : FileKind { 
        if (this.__$PART===undefined) {
            this.__$PART = new FileKind._("PART");
        }
        return this.__$PART;
    }

    private static __$VALUES : core.DartList<FileKind>;
    static get VALUES() : core.DartList<FileKind> { 
        if (this.__$VALUES===undefined) {
            this.__$VALUES = new core.DartList.literal<FileKind>(FileKind.LIBRARY,FileKind.PART);
        }
        return this.__$VALUES;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    @namedConstructor
    _(name : string) {
        this.name = name;
    }
    static _ : new(name : string) => FileKind;

    constructor(name : string) {
    }
    @defaultFactory
    static $FileKind(name : string) : FileKind {
        switch (name) {
            case "LIBRARY":
                return FileKind.LIBRARY;
            case "PART":
                return FileKind.PART;
        }
        throw new core.Exception(`Illegal enum value: ${name}`);
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : FileKind {
        if (is(json, "string")) {
            try {
                return new FileKind(json);
            } catch (__error__) {

                {
                    let _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath,"FileKind",json);
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => FileKind;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `FileKind.${this.name}`;
    }
    toJson() : string {
        return this.name;
    }
}

export namespace TypeHierarchyItem {
    export type Constructors = 'TypeHierarchyItem';
    export type Interface = Omit<TypeHierarchyItem, Constructors>;
}
@DartClass
@Implements(any)
export class TypeHierarchyItem implements any.Interface {
    _classElement : any;

    _displayName : string;

    _memberElement : any;

    _superclass : number;

    _interfaces : core.DartList<number>;

    _mixins : core.DartList<number>;

    _subclasses : core.DartList<number>;

    get classElement() : any {
        return this._classElement;
    }
    set classElement(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._classElement = value;
    }
    get displayName() : string {
        return this._displayName;
    }
    set displayName(value : string) {
        this._displayName = value;
    }
    get memberElement() : any {
        return this._memberElement;
    }
    set memberElement(value : any) {
        this._memberElement = value;
    }
    get superclass() : number {
        return this._superclass;
    }
    set superclass(value : number) {
        this._superclass = value;
    }
    get interfaces() : core.DartList<number> {
        return this._interfaces;
    }
    set interfaces(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._interfaces = value;
    }
    get mixins() : core.DartList<number> {
        return this._mixins;
    }
    set mixins(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._mixins = value;
    }
    get subclasses() : core.DartList<number> {
        return this._subclasses;
    }
    set subclasses(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._subclasses = value;
    }
    constructor(classElement : any,_namedArguments? : {displayName? : string,memberElement? : any,superclass? : number,interfaces? : core.DartList<number>,mixins? : core.DartList<number>,subclasses? : core.DartList<number>}) {
    }
    @defaultConstructor
    TypeHierarchyItem(classElement : any,_namedArguments? : {displayName? : string,memberElement? : any,superclass? : number,interfaces? : core.DartList<number>,mixins? : core.DartList<number>,subclasses? : core.DartList<number>}) {
        let {displayName,memberElement,superclass,interfaces,mixins,subclasses} = Object.assign({
        }, _namedArguments );
        this.classElement = classElement;
        this.displayName = displayName;
        this.memberElement = memberElement;
        this.superclass = superclass;
        if (interfaces == null) {
            this.interfaces = new core.DartList.literal<number>();
        }else {
            this.interfaces = interfaces;
        }
        if (mixins == null) {
            this.mixins = new core.DartList.literal<number>();
        }else {
            this.mixins = mixins;
        }
        if (subclasses == null) {
            this.subclasses = new core.DartList.literal<number>();
        }else {
            this.subclasses = subclasses;
        }
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : TypeHierarchyItem {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let classElement : any;
            if (json.containsKey("classElement")) {
                classElement = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".classElement",json.get("classElement"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"classElement");
            }
            let displayName : string;
            if (json.containsKey("displayName")) {
                displayName = jsonDecoder.decodeString(jsonPath + ".displayName",json.get("displayName"));
            }
            let memberElement : any;
            if (json.containsKey("memberElement")) {
                memberElement = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".memberElement",json.get("memberElement"));
            }
            let superclass : number;
            if (json.containsKey("superclass")) {
                superclass = jsonDecoder.decodeInt(jsonPath + ".superclass",json.get("superclass"));
            }
            let interfaces : core.DartList<number>;
            if (json.containsKey("interfaces")) {
                interfaces = jsonDecoder.decodeList(jsonPath + ".interfaces",json.get("interfaces"),jsonDecoder.decodeInt);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"interfaces");
            }
            let mixins : core.DartList<number>;
            if (json.containsKey("mixins")) {
                mixins = jsonDecoder.decodeList(jsonPath + ".mixins",json.get("mixins"),jsonDecoder.decodeInt);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"mixins");
            }
            let subclasses : core.DartList<number>;
            if (json.containsKey("subclasses")) {
                subclasses = jsonDecoder.decodeList(jsonPath + ".subclasses",json.get("subclasses"),jsonDecoder.decodeInt);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"subclasses");
            }
            return new TypeHierarchyItem(classElement,{
                displayName : displayName,memberElement : memberElement,superclass : superclass,interfaces : interfaces,mixins : mixins,subclasses : subclasses});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"TypeHierarchyItem",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => TypeHierarchyItem;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("classElement",this.classElement.toJson());
        if (this.displayName != null) {
            result.set("displayName",this.displayName);
        }
        if (this.memberElement != null) {
            result.set("memberElement",this.memberElement.toJson());
        }
        if (this.superclass != null) {
            result.set("superclass",this.superclass);
        }
        result.set("interfaces",this.interfaces);
        result.set("mixins",this.mixins);
        result.set("subclasses",this.subclasses);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, TypeHierarchyItem)) {
            return op(Op.EQUALS,this.classElement,other.classElement) && this.displayName == other.displayName && op(Op.EQUALS,this.memberElement,other.memberElement) && this.superclass == other.superclass && listEqual(this.interfaces,other.interfaces,(a : number,b : number) =>  {
                return a == b;
            }) && listEqual(this.mixins,other.mixins,(a : number,b : number) =>  {
                return a == b;
            }) && listEqual(this.subclasses,other.subclasses,(a : number,b : number) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.classElement.hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.displayName).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.memberElement.hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.superclass).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.interfaces.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.mixins.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.subclasses.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace HoverInformation {
    export type Constructors = 'HoverInformation';
    export type Interface = Omit<HoverInformation, Constructors>;
}
@DartClass
@Implements(any)
export class HoverInformation implements any.Interface {
    _offset : number;

    _length : number;

    _containingLibraryPath : string;

    _containingLibraryName : string;

    _containingClassDescription : string;

    _dartdoc : string;

    _elementDescription : string;

    _elementKind : string;

    _isDeprecated : boolean;

    _parameter : string;

    _propagatedType : string;

    _staticType : string;

    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get length() : number {
        return this._length;
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._length = value;
    }
    get containingLibraryPath() : string {
        return this._containingLibraryPath;
    }
    set containingLibraryPath(value : string) {
        this._containingLibraryPath = value;
    }
    get containingLibraryName() : string {
        return this._containingLibraryName;
    }
    set containingLibraryName(value : string) {
        this._containingLibraryName = value;
    }
    get containingClassDescription() : string {
        return this._containingClassDescription;
    }
    set containingClassDescription(value : string) {
        this._containingClassDescription = value;
    }
    get dartdoc() : string {
        return this._dartdoc;
    }
    set dartdoc(value : string) {
        this._dartdoc = value;
    }
    get elementDescription() : string {
        return this._elementDescription;
    }
    set elementDescription(value : string) {
        this._elementDescription = value;
    }
    get elementKind() : string {
        return this._elementKind;
    }
    set elementKind(value : string) {
        this._elementKind = value;
    }
    get isDeprecated() : boolean {
        return this._isDeprecated;
    }
    set isDeprecated(value : boolean) {
        this._isDeprecated = value;
    }
    get parameter() : string {
        return this._parameter;
    }
    set parameter(value : string) {
        this._parameter = value;
    }
    get propagatedType() : string {
        return this._propagatedType;
    }
    set propagatedType(value : string) {
        this._propagatedType = value;
    }
    get staticType() : string {
        return this._staticType;
    }
    set staticType(value : string) {
        this._staticType = value;
    }
    constructor(offset : number,length : number,_namedArguments? : {containingLibraryPath? : string,containingLibraryName? : string,containingClassDescription? : string,dartdoc? : string,elementDescription? : string,elementKind? : string,isDeprecated? : boolean,parameter? : string,propagatedType? : string,staticType? : string}) {
    }
    @defaultConstructor
    HoverInformation(offset : number,length : number,_namedArguments? : {containingLibraryPath? : string,containingLibraryName? : string,containingClassDescription? : string,dartdoc? : string,elementDescription? : string,elementKind? : string,isDeprecated? : boolean,parameter? : string,propagatedType? : string,staticType? : string}) {
        let {containingLibraryPath,containingLibraryName,containingClassDescription,dartdoc,elementDescription,elementKind,isDeprecated,parameter,propagatedType,staticType} = Object.assign({
        }, _namedArguments );
        this.offset = offset;
        this.length = length;
        this.containingLibraryPath = containingLibraryPath;
        this.containingLibraryName = containingLibraryName;
        this.containingClassDescription = containingClassDescription;
        this.dartdoc = dartdoc;
        this.elementDescription = elementDescription;
        this.elementKind = elementKind;
        this.isDeprecated = isDeprecated;
        this.parameter = parameter;
        this.propagatedType = propagatedType;
        this.staticType = staticType;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : HoverInformation {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let length : number;
            if (json.containsKey("length")) {
                length = jsonDecoder.decodeInt(jsonPath + ".length",json.get("length"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"length");
            }
            let containingLibraryPath : string;
            if (json.containsKey("containingLibraryPath")) {
                containingLibraryPath = jsonDecoder.decodeString(jsonPath + ".containingLibraryPath",json.get("containingLibraryPath"));
            }
            let containingLibraryName : string;
            if (json.containsKey("containingLibraryName")) {
                containingLibraryName = jsonDecoder.decodeString(jsonPath + ".containingLibraryName",json.get("containingLibraryName"));
            }
            let containingClassDescription : string;
            if (json.containsKey("containingClassDescription")) {
                containingClassDescription = jsonDecoder.decodeString(jsonPath + ".containingClassDescription",json.get("containingClassDescription"));
            }
            let dartdoc : string;
            if (json.containsKey("dartdoc")) {
                dartdoc = jsonDecoder.decodeString(jsonPath + ".dartdoc",json.get("dartdoc"));
            }
            let elementDescription : string;
            if (json.containsKey("elementDescription")) {
                elementDescription = jsonDecoder.decodeString(jsonPath + ".elementDescription",json.get("elementDescription"));
            }
            let elementKind : string;
            if (json.containsKey("elementKind")) {
                elementKind = jsonDecoder.decodeString(jsonPath + ".elementKind",json.get("elementKind"));
            }
            let isDeprecated : boolean;
            if (json.containsKey("isDeprecated")) {
                isDeprecated = jsonDecoder.decodeBool(jsonPath + ".isDeprecated",json.get("isDeprecated"));
            }
            let parameter : string;
            if (json.containsKey("parameter")) {
                parameter = jsonDecoder.decodeString(jsonPath + ".parameter",json.get("parameter"));
            }
            let propagatedType : string;
            if (json.containsKey("propagatedType")) {
                propagatedType = jsonDecoder.decodeString(jsonPath + ".propagatedType",json.get("propagatedType"));
            }
            let staticType : string;
            if (json.containsKey("staticType")) {
                staticType = jsonDecoder.decodeString(jsonPath + ".staticType",json.get("staticType"));
            }
            return new HoverInformation(offset,length,{
                containingLibraryPath : containingLibraryPath,containingLibraryName : containingLibraryName,containingClassDescription : containingClassDescription,dartdoc : dartdoc,elementDescription : elementDescription,elementKind : elementKind,isDeprecated : isDeprecated,parameter : parameter,propagatedType : propagatedType,staticType : staticType});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"HoverInformation",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => HoverInformation;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("offset",this.offset);
        result.set("length",this.length);
        if (this.containingLibraryPath != null) {
            result.set("containingLibraryPath",this.containingLibraryPath);
        }
        if (this.containingLibraryName != null) {
            result.set("containingLibraryName",this.containingLibraryName);
        }
        if (this.containingClassDescription != null) {
            result.set("containingClassDescription",this.containingClassDescription);
        }
        if (this.dartdoc != null) {
            result.set("dartdoc",this.dartdoc);
        }
        if (this.elementDescription != null) {
            result.set("elementDescription",this.elementDescription);
        }
        if (this.elementKind != null) {
            result.set("elementKind",this.elementKind);
        }
        if (this.isDeprecated != null) {
            result.set("isDeprecated",this.isDeprecated);
        }
        if (this.parameter != null) {
            result.set("parameter",this.parameter);
        }
        if (this.propagatedType != null) {
            result.set("propagatedType",this.propagatedType);
        }
        if (this.staticType != null) {
            result.set("staticType",this.staticType);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, HoverInformation)) {
            return this.offset == other.offset && this.length == other.length && this.containingLibraryPath == other.containingLibraryPath && this.containingLibraryName == other.containingLibraryName && this.containingClassDescription == other.containingClassDescription && this.dartdoc == other.dartdoc && this.elementDescription == other.elementDescription && this.elementKind == other.elementKind && this.isDeprecated == other.isDeprecated && this.parameter == other.parameter && this.propagatedType == other.propagatedType && this.staticType == other.staticType;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.length).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.containingLibraryPath).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.containingLibraryName).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.containingClassDescription).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.dartdoc).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.elementDescription).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.elementKind).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.isDeprecated.hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.parameter).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.propagatedType).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.staticType).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ImplementedClass {
    export type Constructors = 'ImplementedClass';
    export type Interface = Omit<ImplementedClass, Constructors>;
}
@DartClass
@Implements(any)
export class ImplementedClass implements any.Interface {
    _offset : number;

    _length : number;

    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get length() : number {
        return this._length;
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._length = value;
    }
    constructor(offset : number,length : number) {
    }
    @defaultConstructor
    ImplementedClass(offset : number,length : number) {
        this.offset = offset;
        this.length = length;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ImplementedClass {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let length : number;
            if (json.containsKey("length")) {
                length = jsonDecoder.decodeInt(jsonPath + ".length",json.get("length"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"length");
            }
            return new ImplementedClass(offset,length);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"ImplementedClass",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ImplementedClass;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("offset",this.offset);
        result.set("length",this.length);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ImplementedClass)) {
            return this.offset == other.offset && this.length == other.length;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.length).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ImplementedMember {
    export type Constructors = 'ImplementedMember';
    export type Interface = Omit<ImplementedMember, Constructors>;
}
@DartClass
@Implements(any)
export class ImplementedMember implements any.Interface {
    _offset : number;

    _length : number;

    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get length() : number {
        return this._length;
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._length = value;
    }
    constructor(offset : number,length : number) {
    }
    @defaultConstructor
    ImplementedMember(offset : number,length : number) {
        this.offset = offset;
        this.length = length;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ImplementedMember {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let length : number;
            if (json.containsKey("length")) {
                length = jsonDecoder.decodeInt(jsonPath + ".length",json.get("length"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"length");
            }
            return new ImplementedMember(offset,length);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"ImplementedMember",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ImplementedMember;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("offset",this.offset);
        result.set("length",this.length);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ImplementedMember)) {
            return this.offset == other.offset && this.length == other.length;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.length).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ServerErrorParams {
    export type Constructors = 'ServerErrorParams';
    export type Interface = Omit<ServerErrorParams, Constructors>;
}
@DartClass
@Implements(any)
export class ServerErrorParams implements any.Interface {
    _isFatal : boolean;

    _message : string;

    _stackTrace : string;

    get isFatal() : boolean {
        return this._isFatal;
    }
    set isFatal(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._isFatal = value;
    }
    get message() : string {
        return this._message;
    }
    set message(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._message = value;
    }
    get stackTrace() : string {
        return this._stackTrace;
    }
    set stackTrace(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._stackTrace = value;
    }
    constructor(isFatal : boolean,message : string,stackTrace : string) {
    }
    @defaultConstructor
    ServerErrorParams(isFatal : boolean,message : string,stackTrace : string) {
        this.isFatal = isFatal;
        this.message = message;
        this.stackTrace = stackTrace;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ServerErrorParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let isFatal : boolean;
            if (json.containsKey("isFatal")) {
                isFatal = jsonDecoder.decodeBool(jsonPath + ".isFatal",json.get("isFatal"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"isFatal");
            }
            let message : string;
            if (json.containsKey("message")) {
                message = jsonDecoder.decodeString(jsonPath + ".message",json.get("message"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"message");
            }
            let stackTrace : string;
            if (json.containsKey("stackTrace")) {
                stackTrace = jsonDecoder.decodeString(jsonPath + ".stackTrace",json.get("stackTrace"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"stackTrace");
            }
            return new ServerErrorParams(isFatal,message,stackTrace);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"server.error params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ServerErrorParams;

    @namedFactory
    static $fromNotification(notification : any) : ServerErrorParams {
        return new ServerErrorParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => ServerErrorParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("isFatal",this.isFatal);
        result.set("message",this.message);
        result.set("stackTrace",this.stackTrace);
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"server.error",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ServerErrorParams)) {
            return this.isFatal == other.isFatal && this.message == other.message && this.stackTrace == other.stackTrace;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.isFatal.hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.message).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.stackTrace).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ServerConnectedParams {
    export type Constructors = 'ServerConnectedParams';
    export type Interface = Omit<ServerConnectedParams, Constructors>;
}
@DartClass
@Implements(any)
export class ServerConnectedParams implements any.Interface {
    _version : string;

    _pid : number;

    _sessionId : string;

    get version() : string {
        return this._version;
    }
    set version(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._version = value;
    }
    get pid() : number {
        return this._pid;
    }
    set pid(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._pid = value;
    }
    get sessionId() : string {
        return this._sessionId;
    }
    set sessionId(value : string) {
        this._sessionId = value;
    }
    constructor(version : string,pid : number,_namedArguments? : {sessionId? : string}) {
    }
    @defaultConstructor
    ServerConnectedParams(version : string,pid : number,_namedArguments? : {sessionId? : string}) {
        let {sessionId} = Object.assign({
        }, _namedArguments );
        this.version = version;
        this.pid = pid;
        this.sessionId = sessionId;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ServerConnectedParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let version : string;
            if (json.containsKey("version")) {
                version = jsonDecoder.decodeString(jsonPath + ".version",json.get("version"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"version");
            }
            let pid : number;
            if (json.containsKey("pid")) {
                pid = jsonDecoder.decodeInt(jsonPath + ".pid",json.get("pid"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"pid");
            }
            let sessionId : string;
            if (json.containsKey("sessionId")) {
                sessionId = jsonDecoder.decodeString(jsonPath + ".sessionId",json.get("sessionId"));
            }
            return new ServerConnectedParams(version,pid,{
                sessionId : sessionId});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"server.connected params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ServerConnectedParams;

    @namedFactory
    static $fromNotification(notification : any) : ServerConnectedParams {
        return new ServerConnectedParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => ServerConnectedParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("version",this.version);
        result.set("pid",this.pid);
        if (this.sessionId != null) {
            result.set("sessionId",this.sessionId);
        }
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"server.connected",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ServerConnectedParams)) {
            return this.version == other.version && this.pid == other.pid && this.sessionId == other.sessionId;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.version).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.pid).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.sessionId).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace SearchResultsParams {
    export type Constructors = 'SearchResultsParams';
    export type Interface = Omit<SearchResultsParams, Constructors>;
}
@DartClass
@Implements(any)
export class SearchResultsParams implements any.Interface {
    _id : string;

    _results : core.DartList<SearchResult>;

    _isLast : boolean;

    get id() : string {
        return this._id;
    }
    set id(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._id = value;
    }
    get results() : core.DartList<SearchResult> {
        return this._results;
    }
    set results(value : core.DartList<SearchResult>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._results = value;
    }
    get isLast() : boolean {
        return this._isLast;
    }
    set isLast(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._isLast = value;
    }
    constructor(id : string,results : core.DartList<SearchResult>,isLast : boolean) {
    }
    @defaultConstructor
    SearchResultsParams(id : string,results : core.DartList<SearchResult>,isLast : boolean) {
        this.id = id;
        this.results = results;
        this.isLast = isLast;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchResultsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let id : string;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id",json.get("id"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"id");
            }
            let results : core.DartList<SearchResult>;
            if (json.containsKey("results")) {
                results = jsonDecoder.decodeList(jsonPath + ".results",json.get("results"),(jsonPath : string,json : core.DartObject) =>  {
                    return new SearchResult.fromJson(jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"results");
            }
            let isLast : boolean;
            if (json.containsKey("isLast")) {
                isLast = jsonDecoder.decodeBool(jsonPath + ".isLast",json.get("isLast"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"isLast");
            }
            return new SearchResultsParams(id,results,isLast);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"search.results params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchResultsParams;

    @namedFactory
    static $fromNotification(notification : any) : SearchResultsParams {
        return new SearchResultsParams.fromJson(new bare.createInstance(any,null,null),"params",notification.params);
    }
    static fromNotification : new(notification : any) => SearchResultsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("id",this.id);
        result.set("results",this.results.map((value : SearchResult) =>  {
            return value.toJson();
        }).toList());
        result.set("isLast",this.isLast);
        return result;
    }
    toNotification() : any {
        return new bare.createInstance(any,null,"search.results",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchResultsParams)) {
            return this.id == other.id && listEqual(this.results,other.results,(a : SearchResult,b : SearchResult) =>  {
                return op(Op.EQUALS,a,b);
            }) && this.isLast == other.isLast;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.id).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.results.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.isLast.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace SearchResultKind {
    export type Constructors = '_';
    export type Interface = Omit<SearchResultKind, Constructors>;
}
@DartClass
@Implements(any)
export class SearchResultKind implements any.Interface {
    private static __$DECLARATION : SearchResultKind;
    static get DECLARATION() : SearchResultKind { 
        if (this.__$DECLARATION===undefined) {
            this.__$DECLARATION = new SearchResultKind._("DECLARATION");
        }
        return this.__$DECLARATION;
    }

    private static __$INVOCATION : SearchResultKind;
    static get INVOCATION() : SearchResultKind { 
        if (this.__$INVOCATION===undefined) {
            this.__$INVOCATION = new SearchResultKind._("INVOCATION");
        }
        return this.__$INVOCATION;
    }

    private static __$READ : SearchResultKind;
    static get READ() : SearchResultKind { 
        if (this.__$READ===undefined) {
            this.__$READ = new SearchResultKind._("READ");
        }
        return this.__$READ;
    }

    private static __$READ_WRITE : SearchResultKind;
    static get READ_WRITE() : SearchResultKind { 
        if (this.__$READ_WRITE===undefined) {
            this.__$READ_WRITE = new SearchResultKind._("READ_WRITE");
        }
        return this.__$READ_WRITE;
    }

    private static __$REFERENCE : SearchResultKind;
    static get REFERENCE() : SearchResultKind { 
        if (this.__$REFERENCE===undefined) {
            this.__$REFERENCE = new SearchResultKind._("REFERENCE");
        }
        return this.__$REFERENCE;
    }

    private static __$UNKNOWN : SearchResultKind;
    static get UNKNOWN() : SearchResultKind { 
        if (this.__$UNKNOWN===undefined) {
            this.__$UNKNOWN = new SearchResultKind._("UNKNOWN");
        }
        return this.__$UNKNOWN;
    }

    private static __$WRITE : SearchResultKind;
    static get WRITE() : SearchResultKind { 
        if (this.__$WRITE===undefined) {
            this.__$WRITE = new SearchResultKind._("WRITE");
        }
        return this.__$WRITE;
    }

    private static __$VALUES : core.DartList<SearchResultKind>;
    static get VALUES() : core.DartList<SearchResultKind> { 
        if (this.__$VALUES===undefined) {
            this.__$VALUES = new core.DartList.literal<SearchResultKind>(SearchResultKind.DECLARATION,SearchResultKind.INVOCATION,SearchResultKind.READ,SearchResultKind.READ_WRITE,SearchResultKind.REFERENCE,SearchResultKind.UNKNOWN,SearchResultKind.WRITE);
        }
        return this.__$VALUES;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    @namedConstructor
    _(name : string) {
        this.name = name;
    }
    static _ : new(name : string) => SearchResultKind;

    constructor(name : string) {
    }
    @defaultFactory
    static $SearchResultKind(name : string) : SearchResultKind {
        switch (name) {
            case "DECLARATION":
                return SearchResultKind.DECLARATION;
            case "INVOCATION":
                return SearchResultKind.INVOCATION;
            case "READ":
                return SearchResultKind.READ;
            case "READ_WRITE":
                return SearchResultKind.READ_WRITE;
            case "REFERENCE":
                return SearchResultKind.REFERENCE;
            case "UNKNOWN":
                return SearchResultKind.UNKNOWN;
            case "WRITE":
                return SearchResultKind.WRITE;
        }
        throw new core.Exception(`Illegal enum value: ${name}`);
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchResultKind {
        if (is(json, "string")) {
            try {
                return new SearchResultKind(json);
            } catch (__error__) {

                {
                    let _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath,"SearchResultKind",json);
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchResultKind;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `SearchResultKind.${this.name}`;
    }
    toJson() : string {
        return this.name;
    }
}

export namespace SearchResult {
    export type Constructors = 'SearchResult';
    export type Interface = Omit<SearchResult, Constructors>;
}
@DartClass
@Implements(any)
export class SearchResult implements any.Interface {
    _location : any;

    _kind : SearchResultKind;

    _isPotential : boolean;

    _path : core.DartList<any>;

    get location() : any {
        return this._location;
    }
    set location(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._location = value;
    }
    get kind() : SearchResultKind {
        return this._kind;
    }
    set kind(value : SearchResultKind) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._kind = value;
    }
    get isPotential() : boolean {
        return this._isPotential;
    }
    set isPotential(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._isPotential = value;
    }
    get path() : core.DartList<any> {
        return this._path;
    }
    set path(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._path = value;
    }
    constructor(location : any,kind : SearchResultKind,isPotential : boolean,path : core.DartList<any>) {
    }
    @defaultConstructor
    SearchResult(location : any,kind : SearchResultKind,isPotential : boolean,path : core.DartList<any>) {
        this.location = location;
        this.kind = kind;
        this.isPotential = isPotential;
        this.path = path;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let location : any;
            if (json.containsKey("location")) {
                location = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".location",json.get("location"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"location");
            }
            let kind : SearchResultKind;
            if (json.containsKey("kind")) {
                kind = new SearchResultKind.fromJson(jsonDecoder,jsonPath + ".kind",json.get("kind"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"kind");
            }
            let isPotential : boolean;
            if (json.containsKey("isPotential")) {
                isPotential = jsonDecoder.decodeBool(jsonPath + ".isPotential",json.get("isPotential"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"isPotential");
            }
            let path : core.DartList<any>;
            if (json.containsKey("path")) {
                path = jsonDecoder.decodeList(jsonPath + ".path",json.get("path"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"path");
            }
            return new SearchResult(location,kind,isPotential,path);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"SearchResult",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("location",this.location.toJson());
        result.set("kind",this.kind.toJson());
        result.set("isPotential",this.isPotential);
        result.set("path",this.path.map((value : any) =>  {
            return value.toJson();
        }).toList());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchResult)) {
            return op(Op.EQUALS,this.location,other.location) && op(Op.EQUALS,this.kind,other.kind) && this.isPotential == other.isPotential && listEqual(this.path,other.path,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.location.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.kind.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.isPotential.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.path.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace SearchGetTypeHierarchyResult {
    export type Constructors = 'SearchGetTypeHierarchyResult';
    export type Interface = Omit<SearchGetTypeHierarchyResult, Constructors>;
}
@DartClass
@Implements(any)
export class SearchGetTypeHierarchyResult implements any.Interface {
    _hierarchyItems : core.DartList<TypeHierarchyItem>;

    get hierarchyItems() : core.DartList<TypeHierarchyItem> {
        return this._hierarchyItems;
    }
    set hierarchyItems(value : core.DartList<TypeHierarchyItem>) {
        this._hierarchyItems = value;
    }
    constructor(_namedArguments? : {hierarchyItems? : core.DartList<TypeHierarchyItem>}) {
    }
    @defaultConstructor
    SearchGetTypeHierarchyResult(_namedArguments? : {hierarchyItems? : core.DartList<TypeHierarchyItem>}) {
        let {hierarchyItems} = Object.assign({
        }, _namedArguments );
        this.hierarchyItems = hierarchyItems;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchGetTypeHierarchyResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let hierarchyItems : core.DartList<TypeHierarchyItem>;
            if (json.containsKey("hierarchyItems")) {
                hierarchyItems = jsonDecoder.decodeList(jsonPath + ".hierarchyItems",json.get("hierarchyItems"),(jsonPath : string,json : core.DartObject) =>  {
                    return new TypeHierarchyItem.fromJson(jsonDecoder,jsonPath,json);
                });
            }
            return new SearchGetTypeHierarchyResult({
                hierarchyItems : hierarchyItems});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"search.getTypeHierarchy result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchGetTypeHierarchyResult;

    @namedFactory
    static $fromResponse(response : any) : SearchGetTypeHierarchyResult {
        return new SearchGetTypeHierarchyResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => SearchGetTypeHierarchyResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        if (this.hierarchyItems != null) {
            result.set("hierarchyItems",this.hierarchyItems.map((value : TypeHierarchyItem) =>  {
                return value.toJson();
            }).toList());
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchGetTypeHierarchyResult)) {
            return listEqual(this.hierarchyItems,other.hierarchyItems,(a : TypeHierarchyItem,b : TypeHierarchyItem) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.hierarchyItems.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace OverriddenMember {
    export type Constructors = 'OverriddenMember';
    export type Interface = Omit<OverriddenMember, Constructors>;
}
@DartClass
@Implements(any)
export class OverriddenMember implements any.Interface {
    _element : any;

    _className : string;

    get element() : any {
        return this._element;
    }
    set element(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._element = value;
    }
    get className() : string {
        return this._className;
    }
    set className(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._className = value;
    }
    constructor(element : any,className : string) {
    }
    @defaultConstructor
    OverriddenMember(element : any,className : string) {
        this.element = element;
        this.className = className;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : OverriddenMember {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let element : any;
            if (json.containsKey("element")) {
                element = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".element",json.get("element"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"element");
            }
            let className : string;
            if (json.containsKey("className")) {
                className = jsonDecoder.decodeString(jsonPath + ".className",json.get("className"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"className");
            }
            return new OverriddenMember(element,className);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"OverriddenMember",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => OverriddenMember;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("element",this.element.toJson());
        result.set("className",this.className);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, OverriddenMember)) {
            return op(Op.EQUALS,this.element,other.element) && this.className == other.className;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.element.hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.className).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace Override {
    export type Constructors = 'Override';
    export type Interface = Omit<Override, Constructors>;
}
@DartClass
@Implements(any)
export class Override implements any.Interface {
    _offset : number;

    _length : number;

    _superclassMember : OverriddenMember;

    _interfaceMembers : core.DartList<OverriddenMember>;

    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get length() : number {
        return this._length;
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._length = value;
    }
    get superclassMember() : OverriddenMember {
        return this._superclassMember;
    }
    set superclassMember(value : OverriddenMember) {
        this._superclassMember = value;
    }
    get interfaceMembers() : core.DartList<OverriddenMember> {
        return this._interfaceMembers;
    }
    set interfaceMembers(value : core.DartList<OverriddenMember>) {
        this._interfaceMembers = value;
    }
    constructor(offset : number,length : number,_namedArguments? : {superclassMember? : OverriddenMember,interfaceMembers? : core.DartList<OverriddenMember>}) {
    }
    @defaultConstructor
    Override(offset : number,length : number,_namedArguments? : {superclassMember? : OverriddenMember,interfaceMembers? : core.DartList<OverriddenMember>}) {
        let {superclassMember,interfaceMembers} = Object.assign({
        }, _namedArguments );
        this.offset = offset;
        this.length = length;
        this.superclassMember = superclassMember;
        this.interfaceMembers = interfaceMembers;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : Override {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let length : number;
            if (json.containsKey("length")) {
                length = jsonDecoder.decodeInt(jsonPath + ".length",json.get("length"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"length");
            }
            let superclassMember : OverriddenMember;
            if (json.containsKey("superclassMember")) {
                superclassMember = new OverriddenMember.fromJson(jsonDecoder,jsonPath + ".superclassMember",json.get("superclassMember"));
            }
            let interfaceMembers : core.DartList<OverriddenMember>;
            if (json.containsKey("interfaceMembers")) {
                interfaceMembers = jsonDecoder.decodeList(jsonPath + ".interfaceMembers",json.get("interfaceMembers"),(jsonPath : string,json : core.DartObject) =>  {
                    return new OverriddenMember.fromJson(jsonDecoder,jsonPath,json);
                });
            }
            return new Override(offset,length,{
                superclassMember : superclassMember,interfaceMembers : interfaceMembers});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"Override",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => Override;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("offset",this.offset);
        result.set("length",this.length);
        if (this.superclassMember != null) {
            result.set("superclassMember",this.superclassMember.toJson());
        }
        if (this.interfaceMembers != null) {
            result.set("interfaceMembers",this.interfaceMembers.map((value : OverriddenMember) =>  {
                return value.toJson();
            }).toList());
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, Override)) {
            return this.offset == other.offset && this.length == other.length && op(Op.EQUALS,this.superclassMember,other.superclassMember) && listEqual(this.interfaceMembers,other.interfaceMembers,(a : OverriddenMember,b : OverriddenMember) =>  {
                return op(Op.EQUALS,a,b);
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.length).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.superclassMember.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.interfaceMembers.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace PubStatus {
    export type Constructors = 'PubStatus';
    export type Interface = Omit<PubStatus, Constructors>;
}
@DartClass
@Implements(any)
export class PubStatus implements any.Interface {
    _isListingPackageDirs : boolean;

    get isListingPackageDirs() : boolean {
        return this._isListingPackageDirs;
    }
    set isListingPackageDirs(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._isListingPackageDirs = value;
    }
    constructor(isListingPackageDirs : boolean) {
    }
    @defaultConstructor
    PubStatus(isListingPackageDirs : boolean) {
        this.isListingPackageDirs = isListingPackageDirs;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : PubStatus {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let isListingPackageDirs : boolean;
            if (json.containsKey("isListingPackageDirs")) {
                isListingPackageDirs = jsonDecoder.decodeBool(jsonPath + ".isListingPackageDirs",json.get("isListingPackageDirs"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"isListingPackageDirs");
            }
            return new PubStatus(isListingPackageDirs);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"PubStatus",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => PubStatus;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("isListingPackageDirs",this.isListingPackageDirs);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, PubStatus)) {
            return this.isListingPackageDirs == other.isListingPackageDirs;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.isListingPackageDirs.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace RefactoringFeedback {
    export type Constructors = 'RefactoringFeedback';
    export type Interface = Omit<RefactoringFeedback, Constructors>;
}
@DartClass
@Implements(any)
export class RefactoringFeedback implements any.Interface {
    constructor() {
    }
    @defaultConstructor
    RefactoringFeedback() {
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject,responseJson : core.DartMap<any,any>) : RefactoringFeedback {
        return refactoringFeedbackFromJson(jsonDecoder,jsonPath,json,responseJson);
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject,responseJson : core.DartMap<any,any>) => RefactoringFeedback;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, RefactoringFeedback)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace RefactoringOptions {
    export type Constructors = 'RefactoringOptions';
    export type Interface = Omit<RefactoringOptions, Constructors>;
}
@DartClass
@Implements(any)
export class RefactoringOptions implements any.Interface {
    constructor() {
    }
    @defaultConstructor
    RefactoringOptions() {
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject,kind : any) : RefactoringOptions {
        return refactoringOptionsFromJson(jsonDecoder,jsonPath,json,kind);
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject,kind : any) => RefactoringOptions;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, RefactoringOptions)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace SearchGetTypeHierarchyParams {
    export type Constructors = 'SearchGetTypeHierarchyParams';
    export type Interface = Omit<SearchGetTypeHierarchyParams, Constructors>;
}
@DartClass
@Implements(any)
export class SearchGetTypeHierarchyParams implements any.Interface {
    _file : string;

    _offset : number;

    _superOnly : boolean;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get superOnly() : boolean {
        return this._superOnly;
    }
    set superOnly(value : boolean) {
        this._superOnly = value;
    }
    constructor(file : string,offset : number,_namedArguments? : {superOnly? : boolean}) {
    }
    @defaultConstructor
    SearchGetTypeHierarchyParams(file : string,offset : number,_namedArguments? : {superOnly? : boolean}) {
        let {superOnly} = Object.assign({
        }, _namedArguments );
        this.file = file;
        this.offset = offset;
        this.superOnly = superOnly;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchGetTypeHierarchyParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let superOnly : boolean;
            if (json.containsKey("superOnly")) {
                superOnly = jsonDecoder.decodeBool(jsonPath + ".superOnly",json.get("superOnly"));
            }
            return new SearchGetTypeHierarchyParams(file,offset,{
                superOnly : superOnly});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"search.getTypeHierarchy params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchGetTypeHierarchyParams;

    @namedFactory
    static $fromRequest(request : any) : SearchGetTypeHierarchyParams {
        return new SearchGetTypeHierarchyParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => SearchGetTypeHierarchyParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("offset",this.offset);
        if (this.superOnly != null) {
            result.set("superOnly",this.superOnly);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"search.getTypeHierarchy",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchGetTypeHierarchyParams)) {
            return this.file == other.file && this.offset == other.offset && this.superOnly == other.superOnly;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.superOnly.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace SearchFindTopLevelDeclarationsResult {
    export type Constructors = 'SearchFindTopLevelDeclarationsResult';
    export type Interface = Omit<SearchFindTopLevelDeclarationsResult, Constructors>;
}
@DartClass
@Implements(any)
export class SearchFindTopLevelDeclarationsResult implements any.Interface {
    _id : string;

    get id() : string {
        return this._id;
    }
    set id(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._id = value;
    }
    constructor(id : string) {
    }
    @defaultConstructor
    SearchFindTopLevelDeclarationsResult(id : string) {
        this.id = id;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchFindTopLevelDeclarationsResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let id : string;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id",json.get("id"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"id");
            }
            return new SearchFindTopLevelDeclarationsResult(id);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"search.findTopLevelDeclarations result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchFindTopLevelDeclarationsResult;

    @namedFactory
    static $fromResponse(response : any) : SearchFindTopLevelDeclarationsResult {
        return new SearchFindTopLevelDeclarationsResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => SearchFindTopLevelDeclarationsResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("id",this.id);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchFindTopLevelDeclarationsResult)) {
            return this.id == other.id;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.id).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace RequestError {
    export type Constructors = 'RequestError';
    export type Interface = Omit<RequestError, Constructors>;
}
@DartClass
@Implements(any)
export class RequestError implements any.Interface {
    _code : RequestErrorCode;

    _message : string;

    _stackTrace : string;

    get code() : RequestErrorCode {
        return this._code;
    }
    set code(value : RequestErrorCode) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._code = value;
    }
    get message() : string {
        return this._message;
    }
    set message(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._message = value;
    }
    get stackTrace() : string {
        return this._stackTrace;
    }
    set stackTrace(value : string) {
        this._stackTrace = value;
    }
    constructor(code : RequestErrorCode,message : string,_namedArguments? : {stackTrace? : string}) {
    }
    @defaultConstructor
    RequestError(code : RequestErrorCode,message : string,_namedArguments? : {stackTrace? : string}) {
        let {stackTrace} = Object.assign({
        }, _namedArguments );
        this.code = code;
        this.message = message;
        this.stackTrace = stackTrace;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : RequestError {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let code : RequestErrorCode;
            if (json.containsKey("code")) {
                code = new RequestErrorCode.fromJson(jsonDecoder,jsonPath + ".code",json.get("code"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"code");
            }
            let message : string;
            if (json.containsKey("message")) {
                message = jsonDecoder.decodeString(jsonPath + ".message",json.get("message"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"message");
            }
            let stackTrace : string;
            if (json.containsKey("stackTrace")) {
                stackTrace = jsonDecoder.decodeString(jsonPath + ".stackTrace",json.get("stackTrace"));
            }
            return new RequestError(code,message,{
                stackTrace : stackTrace});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"RequestError",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => RequestError;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("code",this.code.toJson());
        result.set("message",this.message);
        if (this.stackTrace != null) {
            result.set("stackTrace",this.stackTrace);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, RequestError)) {
            return op(Op.EQUALS,this.code,other.code) && this.message == other.message && this.stackTrace == other.stackTrace;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.code.hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.message).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.stackTrace).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace RequestErrorCode {
    export type Constructors = '_';
    export type Interface = Omit<RequestErrorCode, Constructors>;
}
@DartClass
@Implements(any)
export class RequestErrorCode implements any.Interface {
    private static __$CONTENT_MODIFIED : RequestErrorCode;
    static get CONTENT_MODIFIED() : RequestErrorCode { 
        if (this.__$CONTENT_MODIFIED===undefined) {
            this.__$CONTENT_MODIFIED = new RequestErrorCode._("CONTENT_MODIFIED");
        }
        return this.__$CONTENT_MODIFIED;
    }

    private static __$DEBUG_PORT_COULD_NOT_BE_OPENED : RequestErrorCode;
    static get DEBUG_PORT_COULD_NOT_BE_OPENED() : RequestErrorCode { 
        if (this.__$DEBUG_PORT_COULD_NOT_BE_OPENED===undefined) {
            this.__$DEBUG_PORT_COULD_NOT_BE_OPENED = new RequestErrorCode._("DEBUG_PORT_COULD_NOT_BE_OPENED");
        }
        return this.__$DEBUG_PORT_COULD_NOT_BE_OPENED;
    }

    private static __$FILE_NOT_ANALYZED : RequestErrorCode;
    static get FILE_NOT_ANALYZED() : RequestErrorCode { 
        if (this.__$FILE_NOT_ANALYZED===undefined) {
            this.__$FILE_NOT_ANALYZED = new RequestErrorCode._("FILE_NOT_ANALYZED");
        }
        return this.__$FILE_NOT_ANALYZED;
    }

    private static __$FORMAT_INVALID_FILE : RequestErrorCode;
    static get FORMAT_INVALID_FILE() : RequestErrorCode { 
        if (this.__$FORMAT_INVALID_FILE===undefined) {
            this.__$FORMAT_INVALID_FILE = new RequestErrorCode._("FORMAT_INVALID_FILE");
        }
        return this.__$FORMAT_INVALID_FILE;
    }

    private static __$FORMAT_WITH_ERRORS : RequestErrorCode;
    static get FORMAT_WITH_ERRORS() : RequestErrorCode { 
        if (this.__$FORMAT_WITH_ERRORS===undefined) {
            this.__$FORMAT_WITH_ERRORS = new RequestErrorCode._("FORMAT_WITH_ERRORS");
        }
        return this.__$FORMAT_WITH_ERRORS;
    }

    private static __$GET_ERRORS_INVALID_FILE : RequestErrorCode;
    static get GET_ERRORS_INVALID_FILE() : RequestErrorCode { 
        if (this.__$GET_ERRORS_INVALID_FILE===undefined) {
            this.__$GET_ERRORS_INVALID_FILE = new RequestErrorCode._("GET_ERRORS_INVALID_FILE");
        }
        return this.__$GET_ERRORS_INVALID_FILE;
    }

    private static __$GET_NAVIGATION_INVALID_FILE : RequestErrorCode;
    static get GET_NAVIGATION_INVALID_FILE() : RequestErrorCode { 
        if (this.__$GET_NAVIGATION_INVALID_FILE===undefined) {
            this.__$GET_NAVIGATION_INVALID_FILE = new RequestErrorCode._("GET_NAVIGATION_INVALID_FILE");
        }
        return this.__$GET_NAVIGATION_INVALID_FILE;
    }

    private static __$GET_REACHABLE_SOURCES_INVALID_FILE : RequestErrorCode;
    static get GET_REACHABLE_SOURCES_INVALID_FILE() : RequestErrorCode { 
        if (this.__$GET_REACHABLE_SOURCES_INVALID_FILE===undefined) {
            this.__$GET_REACHABLE_SOURCES_INVALID_FILE = new RequestErrorCode._("GET_REACHABLE_SOURCES_INVALID_FILE");
        }
        return this.__$GET_REACHABLE_SOURCES_INVALID_FILE;
    }

    private static __$INVALID_ANALYSIS_ROOT : RequestErrorCode;
    static get INVALID_ANALYSIS_ROOT() : RequestErrorCode { 
        if (this.__$INVALID_ANALYSIS_ROOT===undefined) {
            this.__$INVALID_ANALYSIS_ROOT = new RequestErrorCode._("INVALID_ANALYSIS_ROOT");
        }
        return this.__$INVALID_ANALYSIS_ROOT;
    }

    private static __$INVALID_EXECUTION_CONTEXT : RequestErrorCode;
    static get INVALID_EXECUTION_CONTEXT() : RequestErrorCode { 
        if (this.__$INVALID_EXECUTION_CONTEXT===undefined) {
            this.__$INVALID_EXECUTION_CONTEXT = new RequestErrorCode._("INVALID_EXECUTION_CONTEXT");
        }
        return this.__$INVALID_EXECUTION_CONTEXT;
    }

    private static __$INVALID_FILE_PATH_FORMAT : RequestErrorCode;
    static get INVALID_FILE_PATH_FORMAT() : RequestErrorCode { 
        if (this.__$INVALID_FILE_PATH_FORMAT===undefined) {
            this.__$INVALID_FILE_PATH_FORMAT = new RequestErrorCode._("INVALID_FILE_PATH_FORMAT");
        }
        return this.__$INVALID_FILE_PATH_FORMAT;
    }

    private static __$INVALID_OVERLAY_CHANGE : RequestErrorCode;
    static get INVALID_OVERLAY_CHANGE() : RequestErrorCode { 
        if (this.__$INVALID_OVERLAY_CHANGE===undefined) {
            this.__$INVALID_OVERLAY_CHANGE = new RequestErrorCode._("INVALID_OVERLAY_CHANGE");
        }
        return this.__$INVALID_OVERLAY_CHANGE;
    }

    private static __$INVALID_PARAMETER : RequestErrorCode;
    static get INVALID_PARAMETER() : RequestErrorCode { 
        if (this.__$INVALID_PARAMETER===undefined) {
            this.__$INVALID_PARAMETER = new RequestErrorCode._("INVALID_PARAMETER");
        }
        return this.__$INVALID_PARAMETER;
    }

    private static __$INVALID_REQUEST : RequestErrorCode;
    static get INVALID_REQUEST() : RequestErrorCode { 
        if (this.__$INVALID_REQUEST===undefined) {
            this.__$INVALID_REQUEST = new RequestErrorCode._("INVALID_REQUEST");
        }
        return this.__$INVALID_REQUEST;
    }

    private static __$ORGANIZE_DIRECTIVES_ERROR : RequestErrorCode;
    static get ORGANIZE_DIRECTIVES_ERROR() : RequestErrorCode { 
        if (this.__$ORGANIZE_DIRECTIVES_ERROR===undefined) {
            this.__$ORGANIZE_DIRECTIVES_ERROR = new RequestErrorCode._("ORGANIZE_DIRECTIVES_ERROR");
        }
        return this.__$ORGANIZE_DIRECTIVES_ERROR;
    }

    private static __$REFACTORING_REQUEST_CANCELLED : RequestErrorCode;
    static get REFACTORING_REQUEST_CANCELLED() : RequestErrorCode { 
        if (this.__$REFACTORING_REQUEST_CANCELLED===undefined) {
            this.__$REFACTORING_REQUEST_CANCELLED = new RequestErrorCode._("REFACTORING_REQUEST_CANCELLED");
        }
        return this.__$REFACTORING_REQUEST_CANCELLED;
    }

    private static __$SERVER_ALREADY_STARTED : RequestErrorCode;
    static get SERVER_ALREADY_STARTED() : RequestErrorCode { 
        if (this.__$SERVER_ALREADY_STARTED===undefined) {
            this.__$SERVER_ALREADY_STARTED = new RequestErrorCode._("SERVER_ALREADY_STARTED");
        }
        return this.__$SERVER_ALREADY_STARTED;
    }

    private static __$SERVER_ERROR : RequestErrorCode;
    static get SERVER_ERROR() : RequestErrorCode { 
        if (this.__$SERVER_ERROR===undefined) {
            this.__$SERVER_ERROR = new RequestErrorCode._("SERVER_ERROR");
        }
        return this.__$SERVER_ERROR;
    }

    private static __$SORT_MEMBERS_INVALID_FILE : RequestErrorCode;
    static get SORT_MEMBERS_INVALID_FILE() : RequestErrorCode { 
        if (this.__$SORT_MEMBERS_INVALID_FILE===undefined) {
            this.__$SORT_MEMBERS_INVALID_FILE = new RequestErrorCode._("SORT_MEMBERS_INVALID_FILE");
        }
        return this.__$SORT_MEMBERS_INVALID_FILE;
    }

    private static __$SORT_MEMBERS_PARSE_ERRORS : RequestErrorCode;
    static get SORT_MEMBERS_PARSE_ERRORS() : RequestErrorCode { 
        if (this.__$SORT_MEMBERS_PARSE_ERRORS===undefined) {
            this.__$SORT_MEMBERS_PARSE_ERRORS = new RequestErrorCode._("SORT_MEMBERS_PARSE_ERRORS");
        }
        return this.__$SORT_MEMBERS_PARSE_ERRORS;
    }

    private static __$UNANALYZED_PRIORITY_FILES : RequestErrorCode;
    static get UNANALYZED_PRIORITY_FILES() : RequestErrorCode { 
        if (this.__$UNANALYZED_PRIORITY_FILES===undefined) {
            this.__$UNANALYZED_PRIORITY_FILES = new RequestErrorCode._("UNANALYZED_PRIORITY_FILES");
        }
        return this.__$UNANALYZED_PRIORITY_FILES;
    }

    private static __$UNKNOWN_REQUEST : RequestErrorCode;
    static get UNKNOWN_REQUEST() : RequestErrorCode { 
        if (this.__$UNKNOWN_REQUEST===undefined) {
            this.__$UNKNOWN_REQUEST = new RequestErrorCode._("UNKNOWN_REQUEST");
        }
        return this.__$UNKNOWN_REQUEST;
    }

    private static __$UNKNOWN_SOURCE : RequestErrorCode;
    static get UNKNOWN_SOURCE() : RequestErrorCode { 
        if (this.__$UNKNOWN_SOURCE===undefined) {
            this.__$UNKNOWN_SOURCE = new RequestErrorCode._("UNKNOWN_SOURCE");
        }
        return this.__$UNKNOWN_SOURCE;
    }

    private static __$UNSUPPORTED_FEATURE : RequestErrorCode;
    static get UNSUPPORTED_FEATURE() : RequestErrorCode { 
        if (this.__$UNSUPPORTED_FEATURE===undefined) {
            this.__$UNSUPPORTED_FEATURE = new RequestErrorCode._("UNSUPPORTED_FEATURE");
        }
        return this.__$UNSUPPORTED_FEATURE;
    }

    private static __$VALUES : core.DartList<RequestErrorCode>;
    static get VALUES() : core.DartList<RequestErrorCode> { 
        if (this.__$VALUES===undefined) {
            this.__$VALUES = new core.DartList.literal<RequestErrorCode>(RequestErrorCode.CONTENT_MODIFIED,RequestErrorCode.DEBUG_PORT_COULD_NOT_BE_OPENED,RequestErrorCode.FILE_NOT_ANALYZED,RequestErrorCode.FORMAT_INVALID_FILE,RequestErrorCode.FORMAT_WITH_ERRORS,RequestErrorCode.GET_ERRORS_INVALID_FILE,RequestErrorCode.GET_NAVIGATION_INVALID_FILE,RequestErrorCode.GET_REACHABLE_SOURCES_INVALID_FILE,RequestErrorCode.INVALID_ANALYSIS_ROOT,RequestErrorCode.INVALID_EXECUTION_CONTEXT,RequestErrorCode.INVALID_FILE_PATH_FORMAT,RequestErrorCode.INVALID_OVERLAY_CHANGE,RequestErrorCode.INVALID_PARAMETER,RequestErrorCode.INVALID_REQUEST,RequestErrorCode.ORGANIZE_DIRECTIVES_ERROR,RequestErrorCode.REFACTORING_REQUEST_CANCELLED,RequestErrorCode.SERVER_ALREADY_STARTED,RequestErrorCode.SERVER_ERROR,RequestErrorCode.SORT_MEMBERS_INVALID_FILE,RequestErrorCode.SORT_MEMBERS_PARSE_ERRORS,RequestErrorCode.UNANALYZED_PRIORITY_FILES,RequestErrorCode.UNKNOWN_REQUEST,RequestErrorCode.UNKNOWN_SOURCE,RequestErrorCode.UNSUPPORTED_FEATURE);
        }
        return this.__$VALUES;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    @namedConstructor
    _(name : string) {
        this.name = name;
    }
    static _ : new(name : string) => RequestErrorCode;

    constructor(name : string) {
    }
    @defaultFactory
    static $RequestErrorCode(name : string) : RequestErrorCode {
        switch (name) {
            case "CONTENT_MODIFIED":
                return RequestErrorCode.CONTENT_MODIFIED;
            case "DEBUG_PORT_COULD_NOT_BE_OPENED":
                return RequestErrorCode.DEBUG_PORT_COULD_NOT_BE_OPENED;
            case "FILE_NOT_ANALYZED":
                return RequestErrorCode.FILE_NOT_ANALYZED;
            case "FORMAT_INVALID_FILE":
                return RequestErrorCode.FORMAT_INVALID_FILE;
            case "FORMAT_WITH_ERRORS":
                return RequestErrorCode.FORMAT_WITH_ERRORS;
            case "GET_ERRORS_INVALID_FILE":
                return RequestErrorCode.GET_ERRORS_INVALID_FILE;
            case "GET_NAVIGATION_INVALID_FILE":
                return RequestErrorCode.GET_NAVIGATION_INVALID_FILE;
            case "GET_REACHABLE_SOURCES_INVALID_FILE":
                return RequestErrorCode.GET_REACHABLE_SOURCES_INVALID_FILE;
            case "INVALID_ANALYSIS_ROOT":
                return RequestErrorCode.INVALID_ANALYSIS_ROOT;
            case "INVALID_EXECUTION_CONTEXT":
                return RequestErrorCode.INVALID_EXECUTION_CONTEXT;
            case "INVALID_FILE_PATH_FORMAT":
                return RequestErrorCode.INVALID_FILE_PATH_FORMAT;
            case "INVALID_OVERLAY_CHANGE":
                return RequestErrorCode.INVALID_OVERLAY_CHANGE;
            case "INVALID_PARAMETER":
                return RequestErrorCode.INVALID_PARAMETER;
            case "INVALID_REQUEST":
                return RequestErrorCode.INVALID_REQUEST;
            case "ORGANIZE_DIRECTIVES_ERROR":
                return RequestErrorCode.ORGANIZE_DIRECTIVES_ERROR;
            case "REFACTORING_REQUEST_CANCELLED":
                return RequestErrorCode.REFACTORING_REQUEST_CANCELLED;
            case "SERVER_ALREADY_STARTED":
                return RequestErrorCode.SERVER_ALREADY_STARTED;
            case "SERVER_ERROR":
                return RequestErrorCode.SERVER_ERROR;
            case "SORT_MEMBERS_INVALID_FILE":
                return RequestErrorCode.SORT_MEMBERS_INVALID_FILE;
            case "SORT_MEMBERS_PARSE_ERRORS":
                return RequestErrorCode.SORT_MEMBERS_PARSE_ERRORS;
            case "UNANALYZED_PRIORITY_FILES":
                return RequestErrorCode.UNANALYZED_PRIORITY_FILES;
            case "UNKNOWN_REQUEST":
                return RequestErrorCode.UNKNOWN_REQUEST;
            case "UNKNOWN_SOURCE":
                return RequestErrorCode.UNKNOWN_SOURCE;
            case "UNSUPPORTED_FEATURE":
                return RequestErrorCode.UNSUPPORTED_FEATURE;
        }
        throw new core.Exception(`Illegal enum value: ${name}`);
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : RequestErrorCode {
        if (is(json, "string")) {
            try {
                return new RequestErrorCode(json);
            } catch (__error__) {

                {
                    let _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath,"RequestErrorCode",json);
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => RequestErrorCode;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `RequestErrorCode.${this.name}`;
    }
    toJson() : string {
        return this.name;
    }
}

export namespace SearchFindElementReferencesParams {
    export type Constructors = 'SearchFindElementReferencesParams';
    export type Interface = Omit<SearchFindElementReferencesParams, Constructors>;
}
@DartClass
@Implements(any)
export class SearchFindElementReferencesParams implements any.Interface {
    _file : string;

    _offset : number;

    _includePotential : boolean;

    get file() : string {
        return this._file;
    }
    set file(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._file = value;
    }
    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get includePotential() : boolean {
        return this._includePotential;
    }
    set includePotential(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._includePotential = value;
    }
    constructor(file : string,offset : number,includePotential : boolean) {
    }
    @defaultConstructor
    SearchFindElementReferencesParams(file : string,offset : number,includePotential : boolean) {
        this.file = file;
        this.offset = offset;
        this.includePotential = includePotential;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchFindElementReferencesParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let file : string;
            if (json.containsKey("file")) {
                file = jsonDecoder.decodeString(jsonPath + ".file",json.get("file"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"file");
            }
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let includePotential : boolean;
            if (json.containsKey("includePotential")) {
                includePotential = jsonDecoder.decodeBool(jsonPath + ".includePotential",json.get("includePotential"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"includePotential");
            }
            return new SearchFindElementReferencesParams(file,offset,includePotential);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"search.findElementReferences params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchFindElementReferencesParams;

    @namedFactory
    static $fromRequest(request : any) : SearchFindElementReferencesParams {
        return new SearchFindElementReferencesParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => SearchFindElementReferencesParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("file",this.file);
        result.set("offset",this.offset);
        result.set("includePotential",this.includePotential);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"search.findElementReferences",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchFindElementReferencesParams)) {
            return this.file == other.file && this.offset == other.offset && this.includePotential == other.includePotential;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.file).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.includePotential.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace SearchFindElementReferencesResult {
    export type Constructors = 'SearchFindElementReferencesResult';
    export type Interface = Omit<SearchFindElementReferencesResult, Constructors>;
}
@DartClass
@Implements(any)
export class SearchFindElementReferencesResult implements any.Interface {
    _id : string;

    _element : any;

    get id() : string {
        return this._id;
    }
    set id(value : string) {
        this._id = value;
    }
    get element() : any {
        return this._element;
    }
    set element(value : any) {
        this._element = value;
    }
    constructor(_namedArguments? : {id? : string,element? : any}) {
    }
    @defaultConstructor
    SearchFindElementReferencesResult(_namedArguments? : {id? : string,element? : any}) {
        let {id,element} = Object.assign({
        }, _namedArguments );
        this.id = id;
        this.element = element;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchFindElementReferencesResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let id : string;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id",json.get("id"));
            }
            let element : any;
            if (json.containsKey("element")) {
                element = new bare.createInstance(any,null,jsonDecoder,jsonPath + ".element",json.get("element"));
            }
            return new SearchFindElementReferencesResult({
                id : id,element : element});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"search.findElementReferences result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchFindElementReferencesResult;

    @namedFactory
    static $fromResponse(response : any) : SearchFindElementReferencesResult {
        return new SearchFindElementReferencesResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => SearchFindElementReferencesResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        if (this.id != null) {
            result.set("id",this.id);
        }
        if (this.element != null) {
            result.set("element",this.element.toJson());
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchFindElementReferencesResult)) {
            return this.id == other.id && op(Op.EQUALS,this.element,other.element);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.id).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.element.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace SearchFindMemberDeclarationsParams {
    export type Constructors = 'SearchFindMemberDeclarationsParams';
    export type Interface = Omit<SearchFindMemberDeclarationsParams, Constructors>;
}
@DartClass
@Implements(any)
export class SearchFindMemberDeclarationsParams implements any.Interface {
    _name : string;

    get name() : string {
        return this._name;
    }
    set name(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._name = value;
    }
    constructor(name : string) {
    }
    @defaultConstructor
    SearchFindMemberDeclarationsParams(name : string) {
        this.name = name;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchFindMemberDeclarationsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let name : string;
            if (json.containsKey("name")) {
                name = jsonDecoder.decodeString(jsonPath + ".name",json.get("name"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"name");
            }
            return new SearchFindMemberDeclarationsParams(name);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"search.findMemberDeclarations params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchFindMemberDeclarationsParams;

    @namedFactory
    static $fromRequest(request : any) : SearchFindMemberDeclarationsParams {
        return new SearchFindMemberDeclarationsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => SearchFindMemberDeclarationsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("name",this.name);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"search.findMemberDeclarations",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchFindMemberDeclarationsParams)) {
            return this.name == other.name;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.name).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace SearchFindMemberDeclarationsResult {
    export type Constructors = 'SearchFindMemberDeclarationsResult';
    export type Interface = Omit<SearchFindMemberDeclarationsResult, Constructors>;
}
@DartClass
@Implements(any)
export class SearchFindMemberDeclarationsResult implements any.Interface {
    _id : string;

    get id() : string {
        return this._id;
    }
    set id(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._id = value;
    }
    constructor(id : string) {
    }
    @defaultConstructor
    SearchFindMemberDeclarationsResult(id : string) {
        this.id = id;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchFindMemberDeclarationsResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let id : string;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id",json.get("id"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"id");
            }
            return new SearchFindMemberDeclarationsResult(id);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"search.findMemberDeclarations result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchFindMemberDeclarationsResult;

    @namedFactory
    static $fromResponse(response : any) : SearchFindMemberDeclarationsResult {
        return new SearchFindMemberDeclarationsResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => SearchFindMemberDeclarationsResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("id",this.id);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchFindMemberDeclarationsResult)) {
            return this.id == other.id;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.id).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace SearchFindMemberReferencesParams {
    export type Constructors = 'SearchFindMemberReferencesParams';
    export type Interface = Omit<SearchFindMemberReferencesParams, Constructors>;
}
@DartClass
@Implements(any)
export class SearchFindMemberReferencesParams implements any.Interface {
    _name : string;

    get name() : string {
        return this._name;
    }
    set name(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._name = value;
    }
    constructor(name : string) {
    }
    @defaultConstructor
    SearchFindMemberReferencesParams(name : string) {
        this.name = name;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchFindMemberReferencesParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let name : string;
            if (json.containsKey("name")) {
                name = jsonDecoder.decodeString(jsonPath + ".name",json.get("name"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"name");
            }
            return new SearchFindMemberReferencesParams(name);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"search.findMemberReferences params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchFindMemberReferencesParams;

    @namedFactory
    static $fromRequest(request : any) : SearchFindMemberReferencesParams {
        return new SearchFindMemberReferencesParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => SearchFindMemberReferencesParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("name",this.name);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"search.findMemberReferences",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchFindMemberReferencesParams)) {
            return this.name == other.name;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.name).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace SearchFindMemberReferencesResult {
    export type Constructors = 'SearchFindMemberReferencesResult';
    export type Interface = Omit<SearchFindMemberReferencesResult, Constructors>;
}
@DartClass
@Implements(any)
export class SearchFindMemberReferencesResult implements any.Interface {
    _id : string;

    get id() : string {
        return this._id;
    }
    set id(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._id = value;
    }
    constructor(id : string) {
    }
    @defaultConstructor
    SearchFindMemberReferencesResult(id : string) {
        this.id = id;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchFindMemberReferencesResult {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let id : string;
            if (json.containsKey("id")) {
                id = jsonDecoder.decodeString(jsonPath + ".id",json.get("id"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"id");
            }
            return new SearchFindMemberReferencesResult(id);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"search.findMemberReferences result",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchFindMemberReferencesResult;

    @namedFactory
    static $fromResponse(response : any) : SearchFindMemberReferencesResult {
        return new SearchFindMemberReferencesResult.fromJson(new bare.createInstance(any,null,REQUEST_ID_REFACTORING_KINDS.remove(response.id)),"result",response.result);
    }
    static fromResponse : new(response : any) => SearchFindMemberReferencesResult;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("id",this.id);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toResponse(id : string) : any {
        return new bare.createInstance(any,null,id,{
            result : this.toJson()});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchFindMemberReferencesResult)) {
            return this.id == other.id;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.id).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace SearchFindTopLevelDeclarationsParams {
    export type Constructors = 'SearchFindTopLevelDeclarationsParams';
    export type Interface = Omit<SearchFindTopLevelDeclarationsParams, Constructors>;
}
@DartClass
@Implements(any)
export class SearchFindTopLevelDeclarationsParams implements any.Interface {
    _pattern : string;

    get pattern() : string {
        return this._pattern;
    }
    set pattern(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._pattern = value;
    }
    constructor(pattern : string) {
    }
    @defaultConstructor
    SearchFindTopLevelDeclarationsParams(pattern : string) {
        this.pattern = pattern;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : SearchFindTopLevelDeclarationsParams {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let pattern : string;
            if (json.containsKey("pattern")) {
                pattern = jsonDecoder.decodeString(jsonPath + ".pattern",json.get("pattern"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"pattern");
            }
            return new SearchFindTopLevelDeclarationsParams(pattern);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"search.findTopLevelDeclarations params",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => SearchFindTopLevelDeclarationsParams;

    @namedFactory
    static $fromRequest(request : any) : SearchFindTopLevelDeclarationsParams {
        return new SearchFindTopLevelDeclarationsParams.fromJson(new bare.createInstance(any,null,request),"params",request.params);
    }
    static fromRequest : new(request : any) => SearchFindTopLevelDeclarationsParams;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("pattern",this.pattern);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toRequest(id : string) : any {
        return new bare.createInstance(any,null,id,"search.findTopLevelDeclarations",this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, SearchFindTopLevelDeclarationsParams)) {
            return this.pattern == other.pattern;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.pattern).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace GeneralAnalysisService {
    export type Constructors = '_';
    export type Interface = Omit<GeneralAnalysisService, Constructors>;
}
@DartClass
@Implements(any)
export class GeneralAnalysisService implements any.Interface {
    private static __$ANALYZED_FILES : GeneralAnalysisService;
    static get ANALYZED_FILES() : GeneralAnalysisService { 
        if (this.__$ANALYZED_FILES===undefined) {
            this.__$ANALYZED_FILES = new GeneralAnalysisService._("ANALYZED_FILES");
        }
        return this.__$ANALYZED_FILES;
    }

    private static __$VALUES : core.DartList<GeneralAnalysisService>;
    static get VALUES() : core.DartList<GeneralAnalysisService> { 
        if (this.__$VALUES===undefined) {
            this.__$VALUES = new core.DartList.literal<GeneralAnalysisService>(GeneralAnalysisService.ANALYZED_FILES);
        }
        return this.__$VALUES;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    @namedConstructor
    _(name : string) {
        this.name = name;
    }
    static _ : new(name : string) => GeneralAnalysisService;

    constructor(name : string) {
    }
    @defaultFactory
    static $GeneralAnalysisService(name : string) : GeneralAnalysisService {
        switch (name) {
            case "ANALYZED_FILES":
                return GeneralAnalysisService.ANALYZED_FILES;
        }
        throw new core.Exception(`Illegal enum value: ${name}`);
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : GeneralAnalysisService {
        if (is(json, "string")) {
            try {
                return new GeneralAnalysisService(json);
            } catch (__error__) {

                {
                    let _ = __error__;
                }
            }
        }
        throw jsonDecoder.mismatch(jsonPath,"GeneralAnalysisService",json);
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => GeneralAnalysisService;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `GeneralAnalysisService.${this.name}`;
    }
    toJson() : string {
        return this.name;
    }
}

export namespace RenameFeedback {
    export type Constructors = RefactoringFeedback.Constructors | 'RenameFeedback';
    export type Interface = Omit<RenameFeedback, Constructors>;
}
@DartClass
export class RenameFeedback extends RefactoringFeedback {
    _offset : number;

    _length : number;

    _elementKindName : string;

    _oldName : string;

    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get length() : number {
        return this._length;
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._length = value;
    }
    get elementKindName() : string {
        return this._elementKindName;
    }
    set elementKindName(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._elementKindName = value;
    }
    get oldName() : string {
        return this._oldName;
    }
    set oldName(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._oldName = value;
    }
    constructor(offset : number,length : number,elementKindName : string,oldName : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenameFeedback(offset : number,length : number,elementKindName : string,oldName : string) {
        this.offset = offset;
        this.length = length;
        this.elementKindName = elementKindName;
        this.oldName = oldName;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : RenameFeedback {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let length : number;
            if (json.containsKey("length")) {
                length = jsonDecoder.decodeInt(jsonPath + ".length",json.get("length"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"length");
            }
            let elementKindName : string;
            if (json.containsKey("elementKindName")) {
                elementKindName = jsonDecoder.decodeString(jsonPath + ".elementKindName",json.get("elementKindName"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"elementKindName");
            }
            let oldName : string;
            if (json.containsKey("oldName")) {
                oldName = jsonDecoder.decodeString(jsonPath + ".oldName",json.get("oldName"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"oldName");
            }
            return new RenameFeedback(offset,length,elementKindName,oldName);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"rename feedback",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => RenameFeedback;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("offset",this.offset);
        result.set("length",this.length);
        result.set("elementKindName",this.elementKindName);
        result.set("oldName",this.oldName);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, RenameFeedback)) {
            return this.offset == other.offset && this.length == other.length && this.elementKindName == other.elementKindName && this.oldName == other.oldName;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.length).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.elementKindName).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.oldName).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace MoveFileOptions {
    export type Constructors = RefactoringOptions.Constructors | 'MoveFileOptions';
    export type Interface = Omit<MoveFileOptions, Constructors>;
}
@DartClass
export class MoveFileOptions extends RefactoringOptions {
    _newFile : string;

    get newFile() : string {
        return this._newFile;
    }
    set newFile(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._newFile = value;
    }
    constructor(newFile : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MoveFileOptions(newFile : string) {
        this.newFile = newFile;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : MoveFileOptions {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let newFile : string;
            if (json.containsKey("newFile")) {
                newFile = jsonDecoder.decodeString(jsonPath + ".newFile",json.get("newFile"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"newFile");
            }
            return new MoveFileOptions(newFile);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"moveFile options",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => MoveFileOptions;

    @namedFactory
    static $fromRefactoringParams(refactoringParams : EditGetRefactoringParams,request : any) : MoveFileOptions {
        return new MoveFileOptions.fromJson(new bare.createInstance(any,null,request),"options",refactoringParams.options);
    }
    static fromRefactoringParams : new(refactoringParams : EditGetRefactoringParams,request : any) => MoveFileOptions;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("newFile",this.newFile);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, MoveFileOptions)) {
            return this.newFile == other.newFile;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.newFile).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace MoveFileFeedback {
    export type Constructors = RefactoringFeedback.Constructors | 'MoveFileFeedback';
    export type Interface = Omit<MoveFileFeedback, Constructors>;
}
@DartClass
@Implements(any)
export class MoveFileFeedback extends RefactoringFeedback implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, MoveFileFeedback)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 438975893;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MoveFileFeedback() {
    }
}

export namespace InlineMethodOptions {
    export type Constructors = RefactoringOptions.Constructors | 'InlineMethodOptions';
    export type Interface = Omit<InlineMethodOptions, Constructors>;
}
@DartClass
export class InlineMethodOptions extends RefactoringOptions {
    _deleteSource : boolean;

    _inlineAll : boolean;

    get deleteSource() : boolean {
        return this._deleteSource;
    }
    set deleteSource(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._deleteSource = value;
    }
    get inlineAll() : boolean {
        return this._inlineAll;
    }
    set inlineAll(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._inlineAll = value;
    }
    constructor(deleteSource : boolean,inlineAll : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InlineMethodOptions(deleteSource : boolean,inlineAll : boolean) {
        this.deleteSource = deleteSource;
        this.inlineAll = inlineAll;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : InlineMethodOptions {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let deleteSource : boolean;
            if (json.containsKey("deleteSource")) {
                deleteSource = jsonDecoder.decodeBool(jsonPath + ".deleteSource",json.get("deleteSource"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"deleteSource");
            }
            let inlineAll : boolean;
            if (json.containsKey("inlineAll")) {
                inlineAll = jsonDecoder.decodeBool(jsonPath + ".inlineAll",json.get("inlineAll"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"inlineAll");
            }
            return new InlineMethodOptions(deleteSource,inlineAll);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"inlineMethod options",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => InlineMethodOptions;

    @namedFactory
    static $fromRefactoringParams(refactoringParams : EditGetRefactoringParams,request : any) : InlineMethodOptions {
        return new InlineMethodOptions.fromJson(new bare.createInstance(any,null,request),"options",refactoringParams.options);
    }
    static fromRefactoringParams : new(refactoringParams : EditGetRefactoringParams,request : any) => InlineMethodOptions;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("deleteSource",this.deleteSource);
        result.set("inlineAll",this.inlineAll);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, InlineMethodOptions)) {
            return this.deleteSource == other.deleteSource && this.inlineAll == other.inlineAll;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.deleteSource.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.inlineAll.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace InlineMethodFeedback {
    export type Constructors = RefactoringFeedback.Constructors | 'InlineMethodFeedback';
    export type Interface = Omit<InlineMethodFeedback, Constructors>;
}
@DartClass
export class InlineMethodFeedback extends RefactoringFeedback {
    _className : string;

    _methodName : string;

    _isDeclaration : boolean;

    get className() : string {
        return this._className;
    }
    set className(value : string) {
        this._className = value;
    }
    get methodName() : string {
        return this._methodName;
    }
    set methodName(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._methodName = value;
    }
    get isDeclaration() : boolean {
        return this._isDeclaration;
    }
    set isDeclaration(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._isDeclaration = value;
    }
    constructor(methodName : string,isDeclaration : boolean,_namedArguments? : {className? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InlineMethodFeedback(methodName : string,isDeclaration : boolean,_namedArguments? : {className? : string}) {
        let {className} = Object.assign({
        }, _namedArguments );
        this.className = className;
        this.methodName = methodName;
        this.isDeclaration = isDeclaration;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : InlineMethodFeedback {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let className : string;
            if (json.containsKey("className")) {
                className = jsonDecoder.decodeString(jsonPath + ".className",json.get("className"));
            }
            let methodName : string;
            if (json.containsKey("methodName")) {
                methodName = jsonDecoder.decodeString(jsonPath + ".methodName",json.get("methodName"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"methodName");
            }
            let isDeclaration : boolean;
            if (json.containsKey("isDeclaration")) {
                isDeclaration = jsonDecoder.decodeBool(jsonPath + ".isDeclaration",json.get("isDeclaration"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"isDeclaration");
            }
            return new InlineMethodFeedback(methodName,isDeclaration,{
                className : className});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"inlineMethod feedback",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => InlineMethodFeedback;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        if (this.className != null) {
            result.set("className",this.className);
        }
        result.set("methodName",this.methodName);
        result.set("isDeclaration",this.isDeclaration);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, InlineMethodFeedback)) {
            return this.className == other.className && this.methodName == other.methodName && this.isDeclaration == other.isDeclaration;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.className).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.methodName).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.isDeclaration.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace InlineLocalVariableOptions {
    export type Constructors = RefactoringOptions.Constructors | 'InlineLocalVariableOptions';
    export type Interface = Omit<InlineLocalVariableOptions, Constructors>;
}
@DartClass
@Implements(any)
export class InlineLocalVariableOptions extends RefactoringOptions implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, InlineLocalVariableOptions)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 540364977;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InlineLocalVariableOptions() {
    }
}

export namespace InlineLocalVariableFeedback {
    export type Constructors = RefactoringFeedback.Constructors | 'InlineLocalVariableFeedback';
    export type Interface = Omit<InlineLocalVariableFeedback, Constructors>;
}
@DartClass
export class InlineLocalVariableFeedback extends RefactoringFeedback {
    _name : string;

    _occurrences : number;

    get name() : string {
        return this._name;
    }
    set name(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._name = value;
    }
    get occurrences() : number {
        return this._occurrences;
    }
    set occurrences(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._occurrences = value;
    }
    constructor(name : string,occurrences : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InlineLocalVariableFeedback(name : string,occurrences : number) {
        this.name = name;
        this.occurrences = occurrences;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : InlineLocalVariableFeedback {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let name : string;
            if (json.containsKey("name")) {
                name = jsonDecoder.decodeString(jsonPath + ".name",json.get("name"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"name");
            }
            let occurrences : number;
            if (json.containsKey("occurrences")) {
                occurrences = jsonDecoder.decodeInt(jsonPath + ".occurrences",json.get("occurrences"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"occurrences");
            }
            return new InlineLocalVariableFeedback(name,occurrences);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"inlineLocalVariable feedback",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => InlineLocalVariableFeedback;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("name",this.name);
        result.set("occurrences",this.occurrences);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, InlineLocalVariableFeedback)) {
            return this.name == other.name && this.occurrences == other.occurrences;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.name).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.occurrences).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExtractMethodOptions {
    export type Constructors = RefactoringOptions.Constructors | 'ExtractMethodOptions';
    export type Interface = Omit<ExtractMethodOptions, Constructors>;
}
@DartClass
export class ExtractMethodOptions extends RefactoringOptions {
    _returnType : string;

    _createGetter : boolean;

    _name : string;

    _parameters : core.DartList<any>;

    _extractAll : boolean;

    get returnType() : string {
        return this._returnType;
    }
    set returnType(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._returnType = value;
    }
    get createGetter() : boolean {
        return this._createGetter;
    }
    set createGetter(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._createGetter = value;
    }
    get name() : string {
        return this._name;
    }
    set name(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._name = value;
    }
    get parameters() : core.DartList<any> {
        return this._parameters;
    }
    set parameters(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._parameters = value;
    }
    get extractAll() : boolean {
        return this._extractAll;
    }
    set extractAll(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._extractAll = value;
    }
    constructor(returnType : string,createGetter : boolean,name : string,parameters : core.DartList<any>,extractAll : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExtractMethodOptions(returnType : string,createGetter : boolean,name : string,parameters : core.DartList<any>,extractAll : boolean) {
        this.returnType = returnType;
        this.createGetter = createGetter;
        this.name = name;
        this.parameters = parameters;
        this.extractAll = extractAll;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExtractMethodOptions {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let returnType : string;
            if (json.containsKey("returnType")) {
                returnType = jsonDecoder.decodeString(jsonPath + ".returnType",json.get("returnType"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"returnType");
            }
            let createGetter : boolean;
            if (json.containsKey("createGetter")) {
                createGetter = jsonDecoder.decodeBool(jsonPath + ".createGetter",json.get("createGetter"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"createGetter");
            }
            let name : string;
            if (json.containsKey("name")) {
                name = jsonDecoder.decodeString(jsonPath + ".name",json.get("name"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"name");
            }
            let parameters : core.DartList<any>;
            if (json.containsKey("parameters")) {
                parameters = jsonDecoder.decodeList(jsonPath + ".parameters",json.get("parameters"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"parameters");
            }
            let extractAll : boolean;
            if (json.containsKey("extractAll")) {
                extractAll = jsonDecoder.decodeBool(jsonPath + ".extractAll",json.get("extractAll"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"extractAll");
            }
            return new ExtractMethodOptions(returnType,createGetter,name,parameters,extractAll);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"extractMethod options",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExtractMethodOptions;

    @namedFactory
    static $fromRefactoringParams(refactoringParams : EditGetRefactoringParams,request : any) : ExtractMethodOptions {
        return new ExtractMethodOptions.fromJson(new bare.createInstance(any,null,request),"options",refactoringParams.options);
    }
    static fromRefactoringParams : new(refactoringParams : EditGetRefactoringParams,request : any) => ExtractMethodOptions;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("returnType",this.returnType);
        result.set("createGetter",this.createGetter);
        result.set("name",this.name);
        result.set("parameters",this.parameters.map((value : any) =>  {
            return value.toJson();
        }).toList());
        result.set("extractAll",this.extractAll);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExtractMethodOptions)) {
            return this.returnType == other.returnType && this.createGetter == other.createGetter && this.name == other.name && listEqual(this.parameters,other.parameters,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            }) && this.extractAll == other.extractAll;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.returnType).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.createGetter.hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.name).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.parameters.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.extractAll.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExtractMethodFeedback {
    export type Constructors = RefactoringFeedback.Constructors | 'ExtractMethodFeedback';
    export type Interface = Omit<ExtractMethodFeedback, Constructors>;
}
@DartClass
export class ExtractMethodFeedback extends RefactoringFeedback {
    _offset : number;

    _length : number;

    _returnType : string;

    _names : core.DartList<string>;

    _canCreateGetter : boolean;

    _parameters : core.DartList<any>;

    _offsets : core.DartList<number>;

    _lengths : core.DartList<number>;

    get offset() : number {
        return this._offset;
    }
    set offset(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offset = value;
    }
    get length() : number {
        return this._length;
    }
    set length(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._length = value;
    }
    get returnType() : string {
        return this._returnType;
    }
    set returnType(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._returnType = value;
    }
    get names() : core.DartList<string> {
        return this._names;
    }
    set names(value : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._names = value;
    }
    get canCreateGetter() : boolean {
        return this._canCreateGetter;
    }
    set canCreateGetter(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._canCreateGetter = value;
    }
    get parameters() : core.DartList<any> {
        return this._parameters;
    }
    set parameters(value : core.DartList<any>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._parameters = value;
    }
    get offsets() : core.DartList<number> {
        return this._offsets;
    }
    set offsets(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offsets = value;
    }
    get lengths() : core.DartList<number> {
        return this._lengths;
    }
    set lengths(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._lengths = value;
    }
    constructor(offset : number,length : number,returnType : string,names : core.DartList<string>,canCreateGetter : boolean,parameters : core.DartList<any>,offsets : core.DartList<number>,lengths : core.DartList<number>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExtractMethodFeedback(offset : number,length : number,returnType : string,names : core.DartList<string>,canCreateGetter : boolean,parameters : core.DartList<any>,offsets : core.DartList<number>,lengths : core.DartList<number>) {
        this.offset = offset;
        this.length = length;
        this.returnType = returnType;
        this.names = names;
        this.canCreateGetter = canCreateGetter;
        this.parameters = parameters;
        this.offsets = offsets;
        this.lengths = lengths;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExtractMethodFeedback {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let offset : number;
            if (json.containsKey("offset")) {
                offset = jsonDecoder.decodeInt(jsonPath + ".offset",json.get("offset"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offset");
            }
            let length : number;
            if (json.containsKey("length")) {
                length = jsonDecoder.decodeInt(jsonPath + ".length",json.get("length"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"length");
            }
            let returnType : string;
            if (json.containsKey("returnType")) {
                returnType = jsonDecoder.decodeString(jsonPath + ".returnType",json.get("returnType"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"returnType");
            }
            let names : core.DartList<string>;
            if (json.containsKey("names")) {
                names = jsonDecoder.decodeList(jsonPath + ".names",json.get("names"),jsonDecoder.decodeString);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"names");
            }
            let canCreateGetter : boolean;
            if (json.containsKey("canCreateGetter")) {
                canCreateGetter = jsonDecoder.decodeBool(jsonPath + ".canCreateGetter",json.get("canCreateGetter"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"canCreateGetter");
            }
            let parameters : core.DartList<any>;
            if (json.containsKey("parameters")) {
                parameters = jsonDecoder.decodeList(jsonPath + ".parameters",json.get("parameters"),(jsonPath : string,json : core.DartObject) =>  {
                    return new bare.createInstance(any,null,jsonDecoder,jsonPath,json);
                });
            }else {
                throw jsonDecoder.mismatch(jsonPath,"parameters");
            }
            let offsets : core.DartList<number>;
            if (json.containsKey("offsets")) {
                offsets = jsonDecoder.decodeList(jsonPath + ".offsets",json.get("offsets"),jsonDecoder.decodeInt);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offsets");
            }
            let lengths : core.DartList<number>;
            if (json.containsKey("lengths")) {
                lengths = jsonDecoder.decodeList(jsonPath + ".lengths",json.get("lengths"),jsonDecoder.decodeInt);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"lengths");
            }
            return new ExtractMethodFeedback(offset,length,returnType,names,canCreateGetter,parameters,offsets,lengths);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"extractMethod feedback",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExtractMethodFeedback;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("offset",this.offset);
        result.set("length",this.length);
        result.set("returnType",this.returnType);
        result.set("names",this.names);
        result.set("canCreateGetter",this.canCreateGetter);
        result.set("parameters",this.parameters.map((value : any) =>  {
            return value.toJson();
        }).toList());
        result.set("offsets",this.offsets);
        result.set("lengths",this.lengths);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExtractMethodFeedback)) {
            return this.offset == other.offset && this.length == other.length && this.returnType == other.returnType && listEqual(this.names,other.names,(a : string,b : string) =>  {
                return a == b;
            }) && this.canCreateGetter == other.canCreateGetter && listEqual(this.parameters,other.parameters,(a : any,b : any) =>  {
                return op(Op.EQUALS,a,b);
            }) && listEqual(this.offsets,other.offsets,(a : number,b : number) =>  {
                return a == b;
            }) && listEqual(this.lengths,other.lengths,(a : number,b : number) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.offset).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartInt(this.length).hashCode);
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.returnType).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.names.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.canCreateGetter.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.parameters.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.offsets.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.lengths.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExtractLocalVariableOptions {
    export type Constructors = RefactoringOptions.Constructors | 'ExtractLocalVariableOptions';
    export type Interface = Omit<ExtractLocalVariableOptions, Constructors>;
}
@DartClass
export class ExtractLocalVariableOptions extends RefactoringOptions {
    _name : string;

    _extractAll : boolean;

    get name() : string {
        return this._name;
    }
    set name(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._name = value;
    }
    get extractAll() : boolean {
        return this._extractAll;
    }
    set extractAll(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._extractAll = value;
    }
    constructor(name : string,extractAll : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExtractLocalVariableOptions(name : string,extractAll : boolean) {
        this.name = name;
        this.extractAll = extractAll;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExtractLocalVariableOptions {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let name : string;
            if (json.containsKey("name")) {
                name = jsonDecoder.decodeString(jsonPath + ".name",json.get("name"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"name");
            }
            let extractAll : boolean;
            if (json.containsKey("extractAll")) {
                extractAll = jsonDecoder.decodeBool(jsonPath + ".extractAll",json.get("extractAll"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"extractAll");
            }
            return new ExtractLocalVariableOptions(name,extractAll);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"extractLocalVariable options",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExtractLocalVariableOptions;

    @namedFactory
    static $fromRefactoringParams(refactoringParams : EditGetRefactoringParams,request : any) : ExtractLocalVariableOptions {
        return new ExtractLocalVariableOptions.fromJson(new bare.createInstance(any,null,request),"options",refactoringParams.options);
    }
    static fromRefactoringParams : new(refactoringParams : EditGetRefactoringParams,request : any) => ExtractLocalVariableOptions;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("name",this.name);
        result.set("extractAll",this.extractAll);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExtractLocalVariableOptions)) {
            return this.name == other.name && this.extractAll == other.extractAll;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.name).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.extractAll.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ExtractLocalVariableFeedback {
    export type Constructors = RefactoringFeedback.Constructors | 'ExtractLocalVariableFeedback';
    export type Interface = Omit<ExtractLocalVariableFeedback, Constructors>;
}
@DartClass
export class ExtractLocalVariableFeedback extends RefactoringFeedback {
    _coveringExpressionOffsets : core.DartList<number>;

    _coveringExpressionLengths : core.DartList<number>;

    _names : core.DartList<string>;

    _offsets : core.DartList<number>;

    _lengths : core.DartList<number>;

    get coveringExpressionOffsets() : core.DartList<number> {
        return this._coveringExpressionOffsets;
    }
    set coveringExpressionOffsets(value : core.DartList<number>) {
        this._coveringExpressionOffsets = value;
    }
    get coveringExpressionLengths() : core.DartList<number> {
        return this._coveringExpressionLengths;
    }
    set coveringExpressionLengths(value : core.DartList<number>) {
        this._coveringExpressionLengths = value;
    }
    get names() : core.DartList<string> {
        return this._names;
    }
    set names(value : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._names = value;
    }
    get offsets() : core.DartList<number> {
        return this._offsets;
    }
    set offsets(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._offsets = value;
    }
    get lengths() : core.DartList<number> {
        return this._lengths;
    }
    set lengths(value : core.DartList<number>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._lengths = value;
    }
    constructor(names : core.DartList<string>,offsets : core.DartList<number>,lengths : core.DartList<number>,_namedArguments? : {coveringExpressionOffsets? : core.DartList<number>,coveringExpressionLengths? : core.DartList<number>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExtractLocalVariableFeedback(names : core.DartList<string>,offsets : core.DartList<number>,lengths : core.DartList<number>,_namedArguments? : {coveringExpressionOffsets? : core.DartList<number>,coveringExpressionLengths? : core.DartList<number>}) {
        let {coveringExpressionOffsets,coveringExpressionLengths} = Object.assign({
        }, _namedArguments );
        this.coveringExpressionOffsets = coveringExpressionOffsets;
        this.coveringExpressionLengths = coveringExpressionLengths;
        this.names = names;
        this.offsets = offsets;
        this.lengths = lengths;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : ExtractLocalVariableFeedback {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let coveringExpressionOffsets : core.DartList<number>;
            if (json.containsKey("coveringExpressionOffsets")) {
                coveringExpressionOffsets = jsonDecoder.decodeList(jsonPath + ".coveringExpressionOffsets",json.get("coveringExpressionOffsets"),jsonDecoder.decodeInt);
            }
            let coveringExpressionLengths : core.DartList<number>;
            if (json.containsKey("coveringExpressionLengths")) {
                coveringExpressionLengths = jsonDecoder.decodeList(jsonPath + ".coveringExpressionLengths",json.get("coveringExpressionLengths"),jsonDecoder.decodeInt);
            }
            let names : core.DartList<string>;
            if (json.containsKey("names")) {
                names = jsonDecoder.decodeList(jsonPath + ".names",json.get("names"),jsonDecoder.decodeString);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"names");
            }
            let offsets : core.DartList<number>;
            if (json.containsKey("offsets")) {
                offsets = jsonDecoder.decodeList(jsonPath + ".offsets",json.get("offsets"),jsonDecoder.decodeInt);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"offsets");
            }
            let lengths : core.DartList<number>;
            if (json.containsKey("lengths")) {
                lengths = jsonDecoder.decodeList(jsonPath + ".lengths",json.get("lengths"),jsonDecoder.decodeInt);
            }else {
                throw jsonDecoder.mismatch(jsonPath,"lengths");
            }
            return new ExtractLocalVariableFeedback(names,offsets,lengths,{
                coveringExpressionOffsets : coveringExpressionOffsets,coveringExpressionLengths : coveringExpressionLengths});
        }else {
            throw jsonDecoder.mismatch(jsonPath,"extractLocalVariable feedback",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => ExtractLocalVariableFeedback;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        if (this.coveringExpressionOffsets != null) {
            result.set("coveringExpressionOffsets",this.coveringExpressionOffsets);
        }
        if (this.coveringExpressionLengths != null) {
            result.set("coveringExpressionLengths",this.coveringExpressionLengths);
        }
        result.set("names",this.names);
        result.set("offsets",this.offsets);
        result.set("lengths",this.lengths);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ExtractLocalVariableFeedback)) {
            return listEqual(this.coveringExpressionOffsets,other.coveringExpressionOffsets,(a : number,b : number) =>  {
                return a == b;
            }) && listEqual(this.coveringExpressionLengths,other.coveringExpressionLengths,(a : number,b : number) =>  {
                return a == b;
            }) && listEqual(this.names,other.names,(a : string,b : string) =>  {
                return a == b;
            }) && listEqual(this.offsets,other.offsets,(a : number,b : number) =>  {
                return a == b;
            }) && listEqual(this.lengths,other.lengths,(a : number,b : number) =>  {
                return a == b;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,this.coveringExpressionOffsets.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.coveringExpressionLengths.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.names.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.offsets.hashCode);
        hash = JenkinsSmiHash.combine(hash,this.lengths.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export namespace ConvertMethodToGetterOptions {
    export type Constructors = RefactoringOptions.Constructors | 'ConvertMethodToGetterOptions';
    export type Interface = Omit<ConvertMethodToGetterOptions, Constructors>;
}
@DartClass
@Implements(any)
export class ConvertMethodToGetterOptions extends RefactoringOptions implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ConvertMethodToGetterOptions)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 27952290;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConvertMethodToGetterOptions() {
    }
}

export namespace ConvertMethodToGetterFeedback {
    export type Constructors = RefactoringFeedback.Constructors | 'ConvertMethodToGetterFeedback';
    export type Interface = Omit<ConvertMethodToGetterFeedback, Constructors>;
}
@DartClass
@Implements(any)
export class ConvertMethodToGetterFeedback extends RefactoringFeedback implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ConvertMethodToGetterFeedback)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 165291526;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConvertMethodToGetterFeedback() {
    }
}

export namespace ConvertGetterToMethodOptions {
    export type Constructors = RefactoringOptions.Constructors | 'ConvertGetterToMethodOptions';
    export type Interface = Omit<ConvertGetterToMethodOptions, Constructors>;
}
@DartClass
@Implements(any)
export class ConvertGetterToMethodOptions extends RefactoringOptions implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ConvertGetterToMethodOptions)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 488848400;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConvertGetterToMethodOptions() {
    }
}

export namespace ConvertGetterToMethodFeedback {
    export type Constructors = RefactoringFeedback.Constructors | 'ConvertGetterToMethodFeedback';
    export type Interface = Omit<ConvertGetterToMethodFeedback, Constructors>;
}
@DartClass
@Implements(any)
export class ConvertGetterToMethodFeedback extends RefactoringFeedback implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ConvertGetterToMethodFeedback)) {
            return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return 616032599;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConvertGetterToMethodFeedback() {
    }
}

export namespace RenameOptions {
    export type Constructors = RefactoringOptions.Constructors | 'RenameOptions';
    export type Interface = Omit<RenameOptions, Constructors>;
}
@DartClass
export class RenameOptions extends RefactoringOptions {
    _newName : string;

    get newName() : string {
        return this._newName;
    }
    set newName(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._newName = value;
    }
    constructor(newName : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenameOptions(newName : string) {
        this.newName = newName;
    }
    @namedFactory
    static $fromJson(jsonDecoder : any,jsonPath : string,json : core.DartObject) : RenameOptions {
        if (op(Op.EQUALS,json,null)) {
            json = new core.DartMap.literal([
            ]);
        }
        if (is(json, core.DartMap<any,any>)) {
            let newName : string;
            if (json.containsKey("newName")) {
                newName = jsonDecoder.decodeString(jsonPath + ".newName",json.get("newName"));
            }else {
                throw jsonDecoder.mismatch(jsonPath,"newName");
            }
            return new RenameOptions(newName);
        }else {
            throw jsonDecoder.mismatch(jsonPath,"rename options",json);
        }
    }
    static fromJson : new(jsonDecoder : any,jsonPath : string,json : core.DartObject) => RenameOptions;

    @namedFactory
    static $fromRefactoringParams(refactoringParams : EditGetRefactoringParams,request : any) : RenameOptions {
        return new RenameOptions.fromJson(new bare.createInstance(any,null,request),"options",refactoringParams.options);
    }
    static fromRefactoringParams : new(refactoringParams : EditGetRefactoringParams,request : any) => RenameOptions;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toJson() : core.DartMap<string,any> {
        let result : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        result.set("newName",this.newName);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return convert.properties.JSON.encode(this.toJson());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, RenameOptions)) {
            return this.newName == other.newName;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.newName).hashCode);
        return JenkinsSmiHash.finish(hash);
    }
}

export class properties {
}
