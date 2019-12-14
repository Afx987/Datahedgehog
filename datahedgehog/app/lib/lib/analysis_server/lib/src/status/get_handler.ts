/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/status/get_handler.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as collection from "@dart2ts/dart/core";
import * as convert from "@dart2ts/dart/convert";
import * as math from "@dart2ts/dart/math";
import * as lib7 from "@dart2ts/dart/uri";

export namespace AbstractGetHandler {
    export type Constructors = 'AbstractGetHandler';
    export type Interface = Omit<AbstractGetHandler, Constructors>;
}
@DartClass
export class AbstractGetHandler {
    @Abstract
    handleGetRequest(request : io.HttpRequest) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AbstractGetHandler() {
    }
}

export namespace ElementCounter {
    export type Constructors = 'ElementCounter';
    export type Interface = Omit<ElementCounter, Constructors>;
}
@DartClass
export class ElementCounter extends any {
    counts : core.DartMap<core.Type,number>;

    elementsWithDocs : number;

    totalDocSpan : number;

    visit(element : any) : void {
        let comment : string = element.documentationComment;
        if (comment != null) {
            ++this.elementsWithDocs;
            this.totalDocSpan += new core.DartString(comment).length;
        }
        let type : core.Type = element.runtimeType;
        if (this.counts.get(type) == null) {
            this.counts.set(type,1);
        }else {
            this.counts.get(type)++;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassElement(element : any) {
        this.visit(element);
        super.visitClassElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnitElement(element : any) {
        this.visit(element);
        super.visitCompilationUnitElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorElement(element : any) {
        this.visit(element);
        super.visitConstructorElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExportElement(element : any) {
        this.visit(element);
        super.visitExportElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldElement(element : any) {
        this.visit(element);
        super.visitFieldElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldFormalParameterElement(element : any) {
        this.visit(element);
        super.visitFieldFormalParameterElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionElement(element : any) {
        this.visit(element);
        super.visitFunctionElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAliasElement(element : any) {
        this.visit(element);
        super.visitFunctionTypeAliasElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitImportElement(element : any) {
        this.visit(element);
        super.visitImportElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLabelElement(element : any) {
        this.visit(element);
        super.visitLabelElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryElement(element : any) {
        this.visit(element);
        super.visitLibraryElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLocalVariableElement(element : any) {
        this.visit(element);
        super.visitLocalVariableElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodElement(element : any) {
        this.visit(element);
        super.visitMethodElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMultiplyDefinedElement(element : any) {
        this.visit(element);
        super.visitMultiplyDefinedElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitParameterElement(element : any) {
        this.visit(element);
        super.visitParameterElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixElement(element : any) {
        this.visit(element);
        super.visitPrefixElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccessorElement(element : any) {
        this.visit(element);
        super.visitPropertyAccessorElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableElement(element : any) {
        this.visit(element);
        super.visitTopLevelVariableElement(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeParameterElement(element : any) {
        this.visit(element);
        super.visitTypeParameterElement(element);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementCounter() {
        this.counts = new core.DartHashMap<core.Type,number>();
        this.elementsWithDocs = 0;
        this.totalDocSpan = 0;
    }
}

export namespace GetHandler {
    export type Constructors = 'GetHandler';
    export type Interface = Omit<GetHandler, Constructors>;
}
@DartClass
@Implements(AbstractGetHandler)
export class GetHandler implements AbstractGetHandler.Interface {
    private static __$ANALYSIS_PERFORMANCE_PATH : string;
    static get ANALYSIS_PERFORMANCE_PATH() : string { 
        if (this.__$ANALYSIS_PERFORMANCE_PATH===undefined) {
            this.__$ANALYSIS_PERFORMANCE_PATH = '/perf/analysis';
        }
        return this.__$ANALYSIS_PERFORMANCE_PATH;
    }

    private static __$AST_PATH : string;
    static get AST_PATH() : string { 
        if (this.__$AST_PATH===undefined) {
            this.__$AST_PATH = '/ast';
        }
        return this.__$AST_PATH;
    }

    private static __$CACHE_ENTRY_PATH : string;
    static get CACHE_ENTRY_PATH() : string { 
        if (this.__$CACHE_ENTRY_PATH===undefined) {
            this.__$CACHE_ENTRY_PATH = '/cache_entry';
        }
        return this.__$CACHE_ENTRY_PATH;
    }

    private static __$CACHE_STATE_PATH : string;
    static get CACHE_STATE_PATH() : string { 
        if (this.__$CACHE_STATE_PATH===undefined) {
            this.__$CACHE_STATE_PATH = '/cache_state';
        }
        return this.__$CACHE_STATE_PATH;
    }

    private static __$COMPLETION_PATH : string;
    static get COMPLETION_PATH() : string { 
        if (this.__$COMPLETION_PATH===undefined) {
            this.__$COMPLETION_PATH = '/completion';
        }
        return this.__$COMPLETION_PATH;
    }

    private static __$COMMUNICATION_PERFORMANCE_PATH : string;
    static get COMMUNICATION_PERFORMANCE_PATH() : string { 
        if (this.__$COMMUNICATION_PERFORMANCE_PATH===undefined) {
            this.__$COMMUNICATION_PERFORMANCE_PATH = '/perf/communication';
        }
        return this.__$COMMUNICATION_PERFORMANCE_PATH;
    }

    private static __$CONTEXT_DIAGNOSTICS_PATH : string;
    static get CONTEXT_DIAGNOSTICS_PATH() : string { 
        if (this.__$CONTEXT_DIAGNOSTICS_PATH===undefined) {
            this.__$CONTEXT_DIAGNOSTICS_PATH = '/diagnostic/context';
        }
        return this.__$CONTEXT_DIAGNOSTICS_PATH;
    }

    private static __$CONTEXT_VALIDATION_DIAGNOSTICS_PATH : string;
    static get CONTEXT_VALIDATION_DIAGNOSTICS_PATH() : string { 
        if (this.__$CONTEXT_VALIDATION_DIAGNOSTICS_PATH===undefined) {
            this.__$CONTEXT_VALIDATION_DIAGNOSTICS_PATH = '/diagnostic/contextValidation';
        }
        return this.__$CONTEXT_VALIDATION_DIAGNOSTICS_PATH;
    }

    private static __$CONTEXT_PATH : string;
    static get CONTEXT_PATH() : string { 
        if (this.__$CONTEXT_PATH===undefined) {
            this.__$CONTEXT_PATH = '/context';
        }
        return this.__$CONTEXT_PATH;
    }

    private static __$DIAGNOSTIC_PATH : string;
    static get DIAGNOSTIC_PATH() : string { 
        if (this.__$DIAGNOSTIC_PATH===undefined) {
            this.__$DIAGNOSTIC_PATH = '/diagnostic';
        }
        return this.__$DIAGNOSTIC_PATH;
    }

    private static __$ELEMENT_PATH : string;
    static get ELEMENT_PATH() : string { 
        if (this.__$ELEMENT_PATH===undefined) {
            this.__$ELEMENT_PATH = '/element';
        }
        return this.__$ELEMENT_PATH;
    }

    private static __$MEMORY_USE_PATH : string;
    static get MEMORY_USE_PATH() : string { 
        if (this.__$MEMORY_USE_PATH===undefined) {
            this.__$MEMORY_USE_PATH = '/memoryUse';
        }
        return this.__$MEMORY_USE_PATH;
    }

    private static __$OVERLAY_PATH : string;
    static get OVERLAY_PATH() : string { 
        if (this.__$OVERLAY_PATH===undefined) {
            this.__$OVERLAY_PATH = '/overlay';
        }
        return this.__$OVERLAY_PATH;
    }

    private static __$OVERLAYS_PATH : string;
    static get OVERLAYS_PATH() : string { 
        if (this.__$OVERLAYS_PATH===undefined) {
            this.__$OVERLAYS_PATH = '/overlays';
        }
        return this.__$OVERLAYS_PATH;
    }

    private static __$STATUS_PATH : string;
    static get STATUS_PATH() : string { 
        if (this.__$STATUS_PATH===undefined) {
            this.__$STATUS_PATH = '/status';
        }
        return this.__$STATUS_PATH;
    }

    private static __$CONTEXT_QUERY_PARAM : string;
    static get CONTEXT_QUERY_PARAM() : string { 
        if (this.__$CONTEXT_QUERY_PARAM===undefined) {
            this.__$CONTEXT_QUERY_PARAM = 'context';
        }
        return this.__$CONTEXT_QUERY_PARAM;
    }

    private static __$DESCRIPTOR_QUERY_PARAM : string;
    static get DESCRIPTOR_QUERY_PARAM() : string { 
        if (this.__$DESCRIPTOR_QUERY_PARAM===undefined) {
            this.__$DESCRIPTOR_QUERY_PARAM = 'descriptor';
        }
        return this.__$DESCRIPTOR_QUERY_PARAM;
    }

    private static __$INDEX_ELEMENT_NAME : string;
    static get INDEX_ELEMENT_NAME() : string { 
        if (this.__$INDEX_ELEMENT_NAME===undefined) {
            this.__$INDEX_ELEMENT_NAME = 'name';
        }
        return this.__$INDEX_ELEMENT_NAME;
    }

    private static __$PATH_PARAM : string;
    static get PATH_PARAM() : string { 
        if (this.__$PATH_PARAM===undefined) {
            this.__$PATH_PARAM = 'path';
        }
        return this.__$PATH_PARAM;
    }

    private static __$SOURCE_QUERY_PARAM : string;
    static get SOURCE_QUERY_PARAM() : string { 
        if (this.__$SOURCE_QUERY_PARAM===undefined) {
            this.__$SOURCE_QUERY_PARAM = 'entry';
        }
        return this.__$SOURCE_QUERY_PARAM;
    }

    private static __$STATE_QUERY_PARAM : string;
    static get STATE_QUERY_PARAM() : string { 
        if (this.__$STATE_QUERY_PARAM===undefined) {
            this.__$STATE_QUERY_PARAM = 'state';
        }
        return this.__$STATE_QUERY_PARAM;
    }

    private static __$_htmlContent : io.ContentType;
    static get _htmlContent() : io.ContentType { 
        if (this.__$_htmlContent===undefined) {
            this.__$_htmlContent = new io.ContentType("text","html",{
                charset : "utf-8"});
        }
        return this.__$_htmlContent;
    }
    static set _htmlContent(__$value : io.ContentType)  { 
        this.__$_htmlContent = __$value;
    }

    _diagnosticCallAverage : any;

    _server : any;

    _printBuffer : core.DartList<string>;

    _overlayContents : core.DartMap<string,string>;

    _diagnosticHandler : any;

    constructor(_server : any,_printBuffer : core.DartList<string>) {
    }
    @defaultConstructor
    GetHandler(_server : any,_printBuffer : core.DartList<string>) {
        this._diagnosticCallAverage = new bare.createInstance(any,null);
        this._overlayContents = new core.DartMap.literal([
        ]);
        this._server = _server;
        this._printBuffer = _printBuffer;
    }
    get diagnosticHandler() : any {
        if (op(Op.EQUALS,this._diagnosticHandler,null)) {
            this._diagnosticHandler = new bare.createInstance(any,null,this._server.analysisServer);
        }
        return this._diagnosticHandler;
    }
    get _completionDomainHandler() : any {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return null;
        }
        return analysisServer.handlers.firstWhere((h : any) =>  {
            return is(h, any);
        },{
            orElse : () =>  {
                return null;
            }});
    }
    handleGetRequest(request : io.HttpRequest) : void {
        let path : string = request.uri.path;
        if (path == '/' || path == GetHandler.STATUS_PATH) {
            this._returnServerStatus(request);
        }else if (path == GetHandler.ANALYSIS_PERFORMANCE_PATH) {
            this._returnAnalysisPerformance(request);
        }else if (path == GetHandler.AST_PATH) {
            this._returnAst(request);
        }else if (path == GetHandler.CACHE_STATE_PATH) {
            this._returnCacheState(request);
        }else if (path == GetHandler.CACHE_ENTRY_PATH) {
            this._returnCacheEntry(request);
        }else if (path == GetHandler.COMPLETION_PATH) {
            this._returnCompletionInfo(request);
        }else if (path == GetHandler.COMMUNICATION_PERFORMANCE_PATH) {
            this._returnCommunicationPerformance(request);
        }else if (path == GetHandler.CONTEXT_DIAGNOSTICS_PATH) {
            this._returnContextDiagnostics(request);
        }else if (path == GetHandler.CONTEXT_VALIDATION_DIAGNOSTICS_PATH) {
            this._returnContextValidationDiagnostics(request);
        }else if (path == GetHandler.CONTEXT_PATH) {
            this._returnContextInfo(request);
        }else if (path == GetHandler.DIAGNOSTIC_PATH) {
            this._returnDiagnosticInfo(request);
        }else if (path == GetHandler.ELEMENT_PATH) {
            this._returnElement(request);
        }else if (path == GetHandler.MEMORY_USE_PATH) {
            this._returnMemoryUsage(request);
        }else if (path == GetHandler.OVERLAY_PATH) {
            this._returnOverlayContents(request);
        }else if (path == GetHandler.OVERLAYS_PATH) {
            this._returnOverlaysInfo(request);
        }else {
            this._returnUnknownRequest(request);
        }
    }
    _encodeSdkDescriptor(descriptor : any) : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write(descriptor.options.signature.join(','));
        for(let path of descriptor.paths) {
            buffer.write('+');
            buffer.write(path);
        }
        return buffer.toString();
    }
    _findFolder(analysisServer : any,contextFilter : string) : any {
        return analysisServer.folderMap.keys.firstWhere((folder : any) =>  {
            return op(Op.EQUALS,folder.path,contextFilter);
        },{
            orElse : () =>  {
                return null;
            }});
    }
    _getAnyAst(entry : any) : any {
        let unit : any = entry.getValue(PARSED_UNIT);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT1);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT2);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT3);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT4);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT5);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT6);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT7);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT8);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT9);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT10);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT11);
        if (unit != null) {
            return unit;
        }
        unit = entry.getValue(RESOLVED_UNIT12);
        if (unit != null) {
            return unit;
        }
        return entry.getValue(RESOLVED_UNIT);
    }
    _getExpectedResults(entry : any) : core.DartList<any> {
        let target : any = entry.target;
        let results : core.DartSet<any> = entry.nonInvalidResults.toSet();
        if (is(target, any)) {
            let name : string = target.shortName;
            results.add(CONTENT);
            results.add(LINE_INFO);
            results.add(MODIFICATION_TIME);
            if (AnalysisEngine.isDartFileName(name)) {
                results.add(BUILD_DIRECTIVES_ERRORS);
                results.add(BUILD_LIBRARY_ERRORS);
                results.add(CONTAINING_LIBRARIES);
                results.add(DART_ERRORS);
                results.add(EXPLICITLY_IMPORTED_LIBRARIES);
                results.add(EXPORT_SOURCE_CLOSURE);
                results.add(EXPORTED_LIBRARIES);
                results.add(IMPORTED_LIBRARIES);
                results.add(INCLUDED_PARTS);
                results.add(IS_LAUNCHABLE);
                results.add(LIBRARY_ELEMENT1);
                results.add(LIBRARY_ELEMENT2);
                results.add(LIBRARY_ELEMENT3);
                results.add(LIBRARY_ELEMENT4);
                results.add(LIBRARY_ELEMENT5);
                results.add(LIBRARY_ELEMENT6);
                results.add(LIBRARY_ELEMENT);
                results.add(LIBRARY_ERRORS_READY);
                results.add(PARSE_ERRORS);
                results.add(PARSED_UNIT);
                results.add(SCAN_ERRORS);
                results.add(SOURCE_KIND);
                results.add(TOKEN_STREAM);
                results.add(UNITS);
            }else if (AnalysisEngine.isHtmlFileName(name)) {
                results.add(DART_SCRIPTS);
                results.add(HTML_DOCUMENT);
                results.add(HTML_DOCUMENT_ERRORS);
                results.add(HTML_ERRORS);
                results.add(REFERENCED_LIBRARIES);
            }else if (AnalysisEngine.isAnalysisOptionsFileName(name)) {
                results.add(ANALYSIS_OPTIONS_ERRORS);
            }
        }else if (is(target, any)) {
            results.add(COMPILATION_UNIT_CONSTANTS);
            results.add(COMPILATION_UNIT_ELEMENT);
            results.add(HINTS);
            results.add(LINTS);
            results.add(INFERABLE_STATIC_VARIABLES_IN_UNIT);
            results.add(LIBRARY_UNIT_ERRORS);
            results.add(RESOLVE_DIRECTIVES_ERRORS);
            results.add(RESOLVE_TYPE_NAMES_ERRORS);
            results.add(RESOLVE_TYPE_BOUNDS_ERRORS);
            results.add(RESOLVE_UNIT_ERRORS);
            results.add(RESOLVED_UNIT1);
            results.add(RESOLVED_UNIT2);
            results.add(RESOLVED_UNIT3);
            results.add(RESOLVED_UNIT4);
            results.add(RESOLVED_UNIT5);
            results.add(RESOLVED_UNIT6);
            results.add(RESOLVED_UNIT7);
            results.add(RESOLVED_UNIT8);
            results.add(RESOLVED_UNIT9);
            results.add(RESOLVED_UNIT10);
            results.add(RESOLVED_UNIT11);
            results.add(RESOLVED_UNIT12);
            results.add(RESOLVED_UNIT);
            results.add(STRONG_MODE_ERRORS);
            results.add(USED_IMPORTED_ELEMENTS);
            results.add(USED_LOCAL_ELEMENTS);
            results.add(VARIABLE_REFERENCE_ERRORS);
            results.add(VERIFY_ERRORS);
        }else if (is(target, any)) {
            results.add(CONSTANT_DEPENDENCIES);
            results.add(CONSTANT_VALUE);
            if (is(target, any)) {
                results.add(INFERABLE_STATIC_VARIABLE_DEPENDENCIES);
                results.add(INFERRED_STATIC_VARIABLE);
            }
        }else if (is(target, any)) {
            results.add(TYPE_PROVIDER);
        }
        return results.toList();
    }
    _getSdkContext(analysisServer : any,contextFilter : string) : any {
        let manager : any = analysisServer.sdkManager;
        let descriptors : core.DartList<any> = manager.sdkDescriptors;
        for(let descriptor of descriptors) {
            if (contextFilter == this._encodeSdkDescriptor(descriptor)) {
                return ((t)=>(!!t)?t.context:null)(manager.getSdk(descriptor,() =>  {
                    return null;
                }));
            }
        }
        return null;
    }
    _hasException(context : any) : boolean {
        if (op(Op.EQUALS,context,null)) {
            return false;
        }
        let iterator : any = context.analysisCache.iterator();
        while (iterator.moveNext()){
            let entry : any = iterator.value;
            if (op(Op.EQUALS,entry,null) || entry.exception != null) {
                return true;
            }
        }
        return false;
    }
    _keyForValue(folderMap : core.DartMap<any,any>,context : any) : any {
        for(let folder of folderMap.keys) {
            if (op(Op.EQUALS,folderMap.get(folder),context)) {
                return folder;
            }
        }
        return null;
    }
    _returnAnalysisPerformance(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server is not running');
        }
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Analysis Performance',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write('<h3>Analysis Performance</h3>');
                this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
                    buffer.write('<p><b>Performance tag data</b></p>');
                    buffer.write('<table style="border-collapse: separate; border-spacing: 10px 5px;">');
                    this._writeRow(buffer,new core.DartList.literal('Time (in ms)','Percent','Tag name'),{
                        header : true});
                    let tags : core.DartList<any> = PerformanceTag.all.toList();
                    tags.remove(ServerPerformanceStatistics.idle);
                    tags.sort((a : any,b : any) =>  {
                        return op(Op.MINUS,b.elapsedMs,a.elapsedMs);
                    });
                    let totalTagTime : number = 0;
                    tags.forEach((tag : any) =>  {
                        totalTagTime += tag.elapsedMs;
                    });
                    var writeRow : (tag : any) => void = (tag : any) : void =>  {
                        let percent : double = op(Op.DIVIDE,(op(Op.TIMES,tag.elapsedMs,100)),totalTagTime);
                        let percentStr : string = `${new core.DartDouble(percent).toStringAsFixed(2)}%`;
                        this._writeRow(buffer,new core.DartList.literal(tag.elapsedMs,percentStr,tag.label),{
                            classes : new core.DartList.literal("right","right",null)});
                    };
                    tags.forEach(writeRow);
                    buffer.write('</table>');
                    var incrementCount : (counts : core.DartMap<string,number>,key : string) => void = (counts : core.DartMap<string,number>,key : string) : void =>  {
                        let count : number = counts.get(key);
                        if (count == null) {
                            count = 1;
                        }else {
                            count++;
                        }
                        counts.set(key,count);
                    };
                    let countedTargets : core.DartSet<any> = new core.DartHashSet<any>();
                    let sourceTypeCounts : core.DartMap<string,number> = new core.DartHashMap<string,number>();
                    let typeCounts : core.DartMap<string,number> = new core.DartHashMap<string,number>();
                    let explicitSourceCount : number = 0;
                    let explicitLineInfoCount : number = 0;
                    let explicitLineCount : number = 0;
                    let implicitSourceCount : number = 0;
                    let implicitLineInfoCount : number = 0;
                    let implicitLineCount : number = 0;
                    for(let context of analysisServer.analysisContexts) {
                        let explicitSources : core.DartSet<any> = new core.DartHashSet<any>();
                        let implicitSources : core.DartSet<any> = new core.DartHashSet<any>();
                        let cache : any = context.analysisCache;
                        let iterator : any = cache.iterator();
                        while (iterator.moveNext()){
                            let target : any = iterator.key;
                            if (countedTargets.add(target)) {
                                if (is(target, any)) {
                                    let name : string = target.fullName;
                                    let sourceName : string;
                                    if (AnalysisEngine.isDartFileName(name)) {
                                        if (iterator.value.explicitlyAdded) {
                                            explicitSources.add(target);
                                            sourceName = 'Dart file (explicit)';
                                        }else {
                                            implicitSources.add(target);
                                            sourceName = 'Dart file (implicit)';
                                        }
                                    }else if (AnalysisEngine.isHtmlFileName(name)) {
                                        if (iterator.value.explicitlyAdded) {
                                            sourceName = 'Html file (explicit)';
                                        }else {
                                            sourceName = 'Html file (implicit)';
                                        }
                                    }else {
                                        if (iterator.value.explicitlyAdded) {
                                            sourceName = 'Unknown file (explicit)';
                                        }else {
                                            sourceName = 'Unknown file (implicit)';
                                        }
                                    }
                                    incrementCount(sourceTypeCounts,sourceName);
                                }else if (is(target, any)) {
                                    incrementCount(typeCounts,'ConstantEvaluationTarget');
                                }else {
                                    let typeName : string = target.runtimeType.toString();
                                    incrementCount(typeCounts,typeName);
                                }
                            }
                        }
                        var lineCount : (sources : core.DartSet<any>,explicit : boolean) => number = (sources : core.DartSet<any>,explicit : boolean) : number =>  {
                            return sources.fold(0,(previousTotal : number,source : any) =>  {
                                let lineInfo : any = context.getLineInfo(source);
                                if (is(lineInfo, any)) {
                                    if (explicit) {
                                        explicitLineInfoCount++;
                                    }else {
                                        implicitLineInfoCount++;
                                    }
                                    return previousTotal + lineInfo.lineCount;
                                }else {
                                    return previousTotal;
                                }
                            });
                        };
                        explicitSourceCount += explicitSources.length;
                        explicitLineCount += lineCount(explicitSources,true);
                        implicitSourceCount += implicitSources.length;
                        implicitLineCount += lineCount(implicitSources,false);
                    }
                    let sourceTypeNames : core.DartList<string> = sourceTypeCounts.keys.toList();
                    sourceTypeNames.sort();
                    let typeNames : core.DartList<string> = typeCounts.keys.toList();
                    typeNames.sort();
                    buffer.write('<p><b>Target counts</b></p>');
                    buffer.write('<table style="border-collapse: separate; border-spacing: 10px 5px;">');
                    this._writeRow(buffer,new core.DartList.literal('Target','Count'),{
                        header : true});
                    for(let sourceTypeName of sourceTypeNames) {
                        this._writeRow(buffer,new core.DartList.literal(sourceTypeName,op(Op.INDEX,sourceTypeCounts,sourceTypeName)),{
                            classes : new core.DartList.literal(null,"right")});
                    }
                    for(let typeName of typeNames) {
                        this._writeRow(buffer,new core.DartList.literal(typeName,op(Op.INDEX,typeCounts,typeName)),{
                            classes : new core.DartList.literal(null,"right")});
                    }
                    buffer.write('</table>');
                    buffer.write('<p><b>Line counts</b></p>');
                    buffer.write('<table style="border-collapse: separate; border-spacing: 10px 5px;">');
                    this._writeRow(buffer,new core.DartList.literal('Kind','Lines of Code','Source Counts'),{
                        header : true});
                    this._writeRow(buffer,new core.DartList.literal('Explicit',new core.DartInt(explicitLineCount).toString(),`${explicitLineInfoCount} / ${explicitSourceCount}`),{
                        classes : new core.DartList.literal(null,"right")});
                    this._writeRow(buffer,new core.DartList.literal('Implicit',new core.DartInt(implicitLineCount).toString(),`${implicitLineInfoCount} / ${implicitSourceCount}`),{
                        classes : new core.DartList.literal(null,"right")});
                    this._writeRow(buffer,new core.DartList.literal('Total',new core.DartInt((explicitLineCount + implicitLineCount)).toString(),`${explicitLineInfoCount + implicitLineInfoCount} / ${explicitSourceCount + implicitSourceCount}`),{
                        classes : new core.DartList.literal(null,"right")});
                    buffer.write('</table>');
                    let recomputedCounts : core.DartMap<any,number> = CacheEntry.recomputedCounts;
                    let descriptors : core.DartList<any> = recomputedCounts.keys.toList();
                    descriptors.sort(ResultDescriptor.SORT_BY_NAME);
                    buffer.write('<p><b>Results computed after being flushed</b></p>');
                    buffer.write('<table style="border-collapse: separate; border-spacing: 10px 5px;">');
                    this._writeRow(buffer,new core.DartList.literal('Result','Count'),{
                        header : true});
                    for(let descriptor of descriptors) {
                        this._writeRow(buffer,new core.DartList.literal(descriptor.name,recomputedCounts.get(descriptor)),{
                            classes : new core.DartList.literal(null,"right")});
                    }
                    buffer.write('</table>');
                    {
                        buffer.write('<p><b>Cache consistency statistics</b></p>');
                        buffer.write('<table style="border-collapse: separate; border-spacing: 10px 5px;">');
                        this._writeRow(buffer,new core.DartList.literal('Name','Count'),{
                            header : true});
                        this._writeRow(buffer,new core.DartList.literal('Changed',PerformanceStatistics.cacheConsistencyValidationStatistics.numOfChanged),{
                            classes : new core.DartList.literal(null,"right")});
                        this._writeRow(buffer,new core.DartList.literal('Removed',PerformanceStatistics.cacheConsistencyValidationStatistics.numOfRemoved),{
                            classes : new core.DartList.literal(null,"right")});
                        buffer.write('</table>');
                    }
                },(buffer : core.DartStringBuffer) =>  {
                    buffer.write('<p><b>Task performance data</b></p>');
                    buffer.write('<table style="border-collapse: separate; border-spacing: 10px 5px;">');
                    this._writeRow(buffer,new core.DartList.literal('Task Name','Count','Total Time (in ms)','Average Time (in ms)'),{
                        header : true});
                    let countMap : core.DartMap<core.Type,number> = AnalysisTask.countMap;
                    let stopwatchMap : core.DartMap<core.Type,core.DartStopwatch> = AnalysisTask.stopwatchMap;
                    let taskClasses : core.DartList<core.Type> = stopwatchMap.keys.toList();
                    taskClasses.sort((first : core.Type,second : core.Type) =>  {
                        return new core.DartString(first.toString()).compareTo(second.toString());
                    });
                    let totalTaskTime : number = 0;
                    taskClasses.forEach((taskClass : core.Type) =>  {
                        let count : number = countMap.get(taskClass);
                        if (count == null) {
                            count = 0;
                        }
                        let taskTime : number = stopwatchMap.get(taskClass).elapsedMilliseconds;
                        totalTaskTime += taskTime;
                        this._writeRow(buffer,new core.DartList.literal(taskClass.toString(),count,taskTime,count <= 0 ? '-' : new core.DartDouble((taskTime / count)).toStringAsFixed(3)),{
                            classes : new core.DartList.literal(null,"right","right","right")});
                    });
                    this._writeRow(buffer,new core.DartList.literal('Total','-',totalTaskTime,'-'),{
                        classes : new core.DartList.literal(null,"right","right","right")});
                    buffer.write('</table>');
                });
            });
        });
    }
    _returnAst(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server not running');
        }
        let contextFilter : string = request.uri.queryParameters.get(GetHandler.CONTEXT_QUERY_PARAM);
        if (contextFilter == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.CONTEXT_QUERY_PARAM} required`);
        }
        let folder : any = this._findFolder(analysisServer,contextFilter);
        if (op(Op.EQUALS,folder,null)) {
            return this._returnFailure(request,`Invalid context: ${contextFilter}`);
        }
        let sourceUri : string = request.uri.queryParameters.get(GetHandler.SOURCE_QUERY_PARAM);
        if (sourceUri == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.SOURCE_QUERY_PARAM} required`);
        }
        let context : any = op(Op.INDEX,analysisServer.folderMap,folder);
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - AST Structure',new core.DartList.literal(`Context: ${contextFilter}`,`File: ${sourceUri}`),(HttpResponse : any) =>  {
                let source : any = context.sourceFactory.forUri(sourceUri);
                if (op(Op.EQUALS,source,null)) {
                    buffer.write('<p>Not found.</p>');
                    return;
                }
                let libraries : core.DartList<any> = context.getLibrariesContaining(source);
                for(let library of libraries) {
                    let target : any = new bare.createInstance(any,null,library,source);
                    let entry : any = context.analysisCache.get(target);
                    buffer.write(`<b>${target}</b><br>`);
                    if (op(Op.EQUALS,entry,null)) {
                        buffer.write('<p>Not found.</p>');
                        continue;
                    }
                    let ast : any = this._getAnyAst(entry);
                    if (op(Op.EQUALS,ast,null)) {
                        buffer.write('<p>null</p>');
                        continue;
                    }
                    let writer : any = new bare.createInstance(any,null,buffer);
                    ast.accept(writer);
                    if (writer.exceptions.isNotEmpty) {
                        buffer.write('<h3>Exceptions while creating page</h3>');
                        for(let exception of writer.exceptions) {
                            this._writeException(buffer,exception);
                        }
                    }
                }
            });
        });
    }
    _returnCacheEntry(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server not running');
        }
        let contextFilter : string = request.uri.queryParameters.get(GetHandler.CONTEXT_QUERY_PARAM);
        if (contextFilter == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.CONTEXT_QUERY_PARAM} required`);
        }
        let context : any = null;
        let folder : any = this._findFolder(analysisServer,contextFilter);
        if (op(Op.EQUALS,folder,null)) {
            context = this._getSdkContext(analysisServer,contextFilter);
            if (op(Op.EQUALS,context,null)) {
                return this._returnFailure(request,`Invalid context: ${contextFilter}`);
            }
            return this._returnFailure(request,`Cannot view cache entries from an SDK context: ${contextFilter}`);
        }else {
            context = op(Op.INDEX,analysisServer.folderMap,folder);
        }
        let sourceUri : string = request.uri.queryParameters.get(GetHandler.SOURCE_QUERY_PARAM);
        if (sourceUri == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.SOURCE_QUERY_PARAM} required`);
        }
        let allContexts : core.DartList<any> = new core.DartList.literal<any>();
        let entryMap : core.DartMap<any,core.DartList<any>> = new core.DartHashMap<any,core.DartList<any>>();
        let invalidKeysBuffer : core.DartStringBuffer = new core.DartStringBuffer();
        analysisServer.folderMap.forEach((folder : any,context : any) =>  {
            let source : any = context.sourceFactory.forUri(sourceUri);
            if (source != null) {
                let iterator : any = (context as any).analysisCache.iterator();
                while (iterator.moveNext()){
                    if (op(Op.EQUALS,source,iterator.key.source)) {
                        if (!allContexts.contains(folder)) {
                            allContexts.add(folder);
                        }
                        let entries : core.DartList<any> = op(Op.INDEX,entryMap,folder);
                        if (entries == null) {
                            entries = new core.DartList.literal<any>();
                            op(Op.INDEX_ASSIGN,entryMap,folder,entries);
                        }
                        let value : any = iterator.value;
                        if (op(Op.EQUALS,value,null)) {
                            if (invalidKeysBuffer.isNotEmpty) {
                                invalidKeysBuffer.write(', ');
                            }
                            invalidKeysBuffer.write(iterator.key.toString());
                        }else {
                            entries.add(value);
                        }
                    }
                }
            }
        });
        allContexts.sort((firstFolder : any,secondFolder : any) =>  {
            return firstFolder.path.compareTo(secondFolder.path);
        });
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Cache Entry',new core.DartList.literal(`Context: ${contextFilter}`,`File: ${sourceUri}`),(HttpResponse : any) =>  {
                if (invalidKeysBuffer.isNotEmpty) {
                    buffer.write('<h3>Targets with null Entries</h3><p>');
                    buffer.write(invalidKeysBuffer.toString());
                    buffer.write('</p>');
                }
                let entries : core.DartList<any> = op(Op.INDEX,entryMap,folder);
                buffer.write('<h3>Analyzing Contexts</h3><p>');
                let first : boolean = true;
                allContexts.forEach((folder : any) =>  {
                    if (first) {
                        first = false;
                    }else {
                        buffer.write('<br>');
                    }
                    let analyzingContext : any = op(Op.INDEX,analysisServer.folderMap,folder);
                    if (op(Op.EQUALS,analyzingContext,context)) {
                        buffer.write(folder.path);
                    }else {
                        buffer.write(GetHandler.makeLink(GetHandler.CACHE_ENTRY_PATH,new core.DartMap.literal([
                            [GetHandler.CONTEXT_QUERY_PARAM,folder.path],
                            [GetHandler.SOURCE_QUERY_PARAM,sourceUri]]),convert.properties.HTML_ESCAPE.convert(folder.path)));
                    }
                    if (entries == null) {
                        buffer.write(' (file does not exist)');
                    }else {
                        let sourceEntry : any = entries.firstWhere((entry : any) =>  {
                            return is(entry.target, any);
                        });
                        if (op(Op.EQUALS,sourceEntry,null)) {
                            buffer.write(' (missing source entry)');
                        }else if (sourceEntry.explicitlyAdded) {
                            buffer.write(' (explicit)');
                        }else {
                            buffer.write(' (implicit)');
                        }
                    }
                });
                buffer.write('</p>');
                if (entries == null) {
                    buffer.write('<p>Not being analyzed in this context.</p>');
                    return;
                }
                for(let entry of entries) {
                    let linkParameters : core.DartMap<string,string> = new core.DartMap.literal([
                        [GetHandler.CONTEXT_QUERY_PARAM,contextFilter],
                        [GetHandler.SOURCE_QUERY_PARAM,sourceUri]]);
                    let results : core.DartList<any> = this._getExpectedResults(entry);
                    results.sort(ResultDescriptor.SORT_BY_NAME);
                    buffer.write('<h3>');
                    buffer.write(convert.properties.HTML_ESCAPE.convert(entry.target.toString()));
                    buffer.write('</h3>');
                    buffer.write('<p>time</p><blockquote><p>Value</p><blockquote>');
                    buffer.write(entry.modificationTime);
                    buffer.write('</blockquote></blockquote>');
                    for(let result of results) {
                        let data : any = entry.getResultData(result);
                        let state : any = entry.getState(result);
                        let descriptorName : string = convert.properties.HTML_ESCAPE.convert(result.toString());
                        let descriptorState : string = convert.properties.HTML_ESCAPE.convert(state.toString());
                        buffer.write(`<p>${descriptorName} (${descriptorState})</p><blockquote>`);
                        if (op(Op.EQUALS,state,CacheState.VALID)) {
                            buffer.write('<p>Value</p><blockquote>');
                            try {
                                this._writeValueAsHtml(buffer,entry.getValue(result),linkParameters);
                            } catch (__error__) {

                                {
                                    let exception = __error__;
                                    buffer.write(`(${convert.properties.HTML_ESCAPE.convert(exception.toString())})`);
                                }
                            }
                            buffer.write('</blockquote>');
                        }
                        this._writeTargetedResults(buffer,'Depends on',data.dependedOnResults);
                        this._writeTargetedResults(buffer,'Depended on by',data.dependentResults);
                        buffer.write('</blockquote>');
                    }
                    if (entry.exception != null) {
                        buffer.write('<dt>exception</dt><dd>');
                        this._writeException(buffer,entry.exception);
                        buffer.write('</dd>');
                    }
                }
            });
        });
    }
    _returnCacheState(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server not running');
        }
        let contextFilter : string = request.uri.queryParameters.get(GetHandler.CONTEXT_QUERY_PARAM);
        if (contextFilter == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.CONTEXT_QUERY_PARAM} required`);
        }
        let stateQueryParam : string = request.uri.queryParameters.get(GetHandler.STATE_QUERY_PARAM);
        if (stateQueryParam == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.STATE_QUERY_PARAM} required`);
        }
        let stateFilter : any = null;
        for(let value of CacheState.values) {
            if (value.toString() == stateQueryParam) {
                stateFilter = value;
            }
        }
        if (op(Op.EQUALS,stateFilter,null)) {
            return this._returnFailure(request,`Query parameter ${GetHandler.STATE_QUERY_PARAM} is invalid`);
        }
        let descriptorFilter : string = request.uri.queryParameters.get(GetHandler.DESCRIPTOR_QUERY_PARAM);
        if (descriptorFilter == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.DESCRIPTOR_QUERY_PARAM} required`);
        }
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Cache Search',new core.DartList.literal(`Context: ${contextFilter}`,`Descriptor: ${convert.properties.HTML_ESCAPE.convert(descriptorFilter)}`,`State: ${convert.properties.HTML_ESCAPE.convert(stateQueryParam)}`),(buffer : core.DartStringBuffer) =>  {
                buffer.write('<p>Cache search is not yet implemented.</p>');
            });
        });
    }
    _returnCommunicationPerformance(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server is not running');
        }
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Communication Performance',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write('<h3>Communication Performance</h3>');
                this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
                    let perf : any = analysisServer.performanceDuringStartup;
                    let requestCount : number = perf.requestCount;
                    let averageLatency : number = requestCount > 0 ? (op(Op.DIVIDE,perf.requestLatency,requestCount)).round() : 0;
                    let maximumLatency : number = perf.maxLatency;
                    let slowRequestPercent : number = requestCount > 0 ? (op(Op.DIVIDE,op(Op.TIMES,perf.slowRequestCount,100),requestCount)).round() : 0;
                    buffer.write('<h4>Startup</h4>');
                    buffer.write('<table>');
                    this._writeRow(buffer,new core.DartList.literal(requestCount,'requests'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(averageLatency,'ms average latency'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(maximumLatency,'ms maximum latency'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(slowRequestPercent,'% > 150 ms latency'),{
                        classes : new core.DartList.literal("right",null)});
                    if (analysisServer.performanceAfterStartup != null) {
                        let startupTime : number = op(Op.MINUS,analysisServer.performanceAfterStartup.startTime,perf.startTime);
                        this._writeRow(buffer,new core.DartList.literal(startupTime,'ms for initial analysis to complete'));
                    }
                    buffer.write('</table>');
                },(buffer : core.DartStringBuffer) =>  {
                    let perf : any = analysisServer.performanceAfterStartup;
                    if (op(Op.EQUALS,perf,null)) {
                        return;
                    }
                    let requestCount : number = perf.requestCount;
                    let averageLatency : number = requestCount > 0 ? op(Op.DIVIDE,(op(Op.DIVIDE,op(Op.TIMES,perf.requestLatency,10),requestCount)).round(),10) : 0;
                    let maximumLatency : number = perf.maxLatency;
                    let slowRequestPercent : number = requestCount > 0 ? (op(Op.DIVIDE,op(Op.TIMES,perf.slowRequestCount,100),requestCount)).round() : 0;
                    buffer.write('<h4>Current</h4>');
                    buffer.write('<table>');
                    this._writeRow(buffer,new core.DartList.literal(requestCount,'requests'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(averageLatency,'ms average latency'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(maximumLatency,'ms maximum latency'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(slowRequestPercent,'% > 150 ms latency'),{
                        classes : new core.DartList.literal("right",null)});
                    buffer.write('</table>');
                });
            });
        });
    }
    _returnCompletionInfo(request : io.HttpRequest) : void {
        let value : string = request.requestedUri.queryParameters.get('index');
        let index : number = value != null ? core.DartInt.parse(value,{
            onError : (_ : any) =>  {
                return 0;
            }}) : 0;
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Completion Stats',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                this._writeCompletionPerformanceDetail(buffer,index);
                this._writeCompletionPerformanceList(buffer);
            });
        });
    }
    _returnContextDiagnostics(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server is not running');
        }
        let contextFilter : string = request.uri.queryParameters.get(GetHandler.CONTEXT_QUERY_PARAM);
        if (contextFilter == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.CONTEXT_QUERY_PARAM} required`);
        }
        let context : any = null;
        let folder : any = this._findFolder(analysisServer,contextFilter);
        if (op(Op.EQUALS,folder,null)) {
            context = this._getSdkContext(analysisServer,contextFilter);
            if (op(Op.EQUALS,context,null)) {
                return this._returnFailure(request,`Invalid context: ${contextFilter}`);
            }
        }else {
            context = op(Op.INDEX,analysisServer.folderMap,folder);
        }
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Context Diagnostics',new core.DartList.literal(`Context: ${contextFilter}`),(buffer : core.DartStringBuffer) =>  {
                this._writeContextDiagnostics(buffer,context,contextFilter);
            });
        });
    }
    _returnContextInfo(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server not running');
        }
        let contextFilter : string = request.uri.queryParameters.get(GetHandler.CONTEXT_QUERY_PARAM);
        if (contextFilter == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.CONTEXT_QUERY_PARAM} required`);
        }
        let context : any = null;
        let folder : any = this._findFolder(analysisServer,contextFilter);
        if (op(Op.EQUALS,folder,null)) {
            context = this._getSdkContext(analysisServer,contextFilter);
            if (op(Op.EQUALS,context,null)) {
                return this._returnFailure(request,`Invalid context: ${contextFilter}`);
            }
        }else {
            context = op(Op.INDEX,analysisServer.folderMap,folder);
        }
        let priorityNames : core.DartList<string> = new core.DartList.literal<string>();
        let explicitNames : core.DartList<string> = new core.DartList.literal<string>();
        let implicitNames : core.DartList<string> = new core.DartList.literal<string>();
        let links : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        let exceptions : core.DartList<any> = new core.DartList.literal<any>();
        context.prioritySources.forEach((source : any) =>  {
            priorityNames.add(source.fullName);
        });
        let iterator : any = context.analysisCache.iterator({
            context : context});
        while (iterator.moveNext()){
            let target : any = iterator.key;
            if (is(target, any)) {
                let entry : any = iterator.value;
                let sourceName : string = target.fullName;
                if (!links.containsKey(sourceName)) {
                    let exception : any = entry.exception;
                    if (exception != null) {
                        exceptions.add(exception);
                    }
                    let link : string = GetHandler.makeLink(GetHandler.CACHE_ENTRY_PATH,new core.DartMap.literal([
                        [GetHandler.CONTEXT_QUERY_PARAM,contextFilter],
                        [GetHandler.SOURCE_QUERY_PARAM,target.uri.toString()]]),sourceName,exception != null);
                    if (entry.explicitlyAdded) {
                        explicitNames.add(sourceName);
                    }else {
                        implicitNames.add(sourceName);
                    }
                    op(Op.INDEX_ASSIGN,links,sourceName,link);
                }
            }
        }
        explicitNames.sort();
        implicitNames.sort();
        this._overlayContents.clear();
        context.visitContentCache((fullName : string,stamp : number,contents : string) =>  {
            this._overlayContents.set(fullName,contents);
        });
        var _writeFiles : (buffer : core.DartStringBuffer,title : string,fileNames : core.DartList<string>) => void = (buffer : core.DartStringBuffer,title : string,fileNames : core.DartList<string>) : void =>  {
            buffer.write(`<h3>${title}</h3>`);
            if (fileNames == null || fileNames.isEmpty) {
                buffer.write('<p>None</p>');
            }else {
                buffer.write('<p><table style="width: 100%">');
                for(let fileName of fileNames) {
                    buffer.write('<tr><td>');
                    buffer.write(op(Op.INDEX,links,fileName));
                    buffer.write('</td><td>');
                    if (this._overlayContents.containsKey(fileName)) {
                        buffer.write(GetHandler.makeLink(GetHandler.OVERLAY_PATH,new core.DartMap.literal([
                            [GetHandler.PATH_PARAM,fileName]]),'overlay'));
                    }
                    buffer.write('</td></tr>');
                }
                buffer.write('</table></p>');
            }
        };
        var writeOptions : (buffer : core.DartStringBuffer,options : any,_namedArguments? : {writeAdditionalOptions? : (buffer : core.DartStringBuffer) => void}) => void = (buffer : core.DartStringBuffer,options : any,_namedArguments? : {writeAdditionalOptions? : (buffer : core.DartStringBuffer) => void}) : void =>  {
            let {writeAdditionalOptions} = Object.assign({
            }, _namedArguments );
            if (op(Op.EQUALS,options,null)) {
                buffer.write('<p>No option information available.</p>');
                return;
            }
            buffer.write('<p>');
            this._writeOption(buffer,'Analyze functon bodies',options.analyzeFunctionBodies);
            this._writeOption(buffer,'Enable strict call checks',options.enableStrictCallChecks);
            this._writeOption(buffer,'Enable super mixins',options.enableSuperMixins);
            this._writeOption(buffer,'Generate dart2js hints',options.dart2jsHint);
            this._writeOption(buffer,'Generate errors in implicit files',options.generateImplicitErrors);
            this._writeOption(buffer,'Generate errors in SDK files',options.generateSdkErrors);
            this._writeOption(buffer,'Generate hints',options.hint);
            this._writeOption(buffer,'Incremental resolution',options.incremental);
            this._writeOption(buffer,'Incremental resolution with API changes',options.incrementalApi);
            this._writeOption(buffer,'Preserve comments',options.preserveComments);
            this._writeOption(buffer,'Strong mode',options.strongMode);
            this._writeOption(buffer,'Strong mode hints',options.strongModeHints);
            if (writeAdditionalOptions != null) {
                writeAdditionalOptions(buffer);
            }
            buffer.write('</p>');
        };
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Context',new core.DartList.literal(`Context: ${contextFilter}`),(buffer : core.DartStringBuffer) =>  {
                buffer.write('<h3>Configuration</h3>');
                this._writeColumns(buffer,new core.DartList.literal<(buffer : core.DartStringBuffer) => void>((buffer : core.DartStringBuffer) =>  {
                    buffer.write('<p><b>Context Options</b></p>');
                    writeOptions(buffer,context.analysisOptions);
                },(buffer : core.DartStringBuffer) =>  {
                    buffer.write('<p><b>SDK Context Options</b></p>');
                    let sdk : any = ((t)=>(!!t)?t.dartSdk:null)(((t)=>(!!t)?t.sourceFactory:null)(context));
                    writeOptions(buffer,((t)=>(!!t)?t.analysisOptions:null)(((t)=>(!!t)?t.context:null)(sdk)),{
                        writeAdditionalOptions : (buffer : core.DartStringBuffer) =>  {
                            if (is(sdk, any)) {
                                this._writeOption(buffer,'Use summaries',sdk.useSummary);
                            }
                        }});
                },(buffer : core.DartStringBuffer) =>  {
                    let lints : core.DartList<any> = context.analysisOptions.lintRules;
                    buffer.write('<p><b>Lints</b></p>');
                    if (lints.isEmpty) {
                        buffer.write('<p>none</p>');
                    }else {
                        for(let lint of lints) {
                            buffer.write('<p>');
                            buffer.write(lint.runtimeType);
                            buffer.write('</p>');
                        }
                    }
                    let errorProcessors : core.DartList<any> = context.analysisOptions.errorProcessors;
                    let processorCount : number = (((t)=>(!!t)?t.length:null)(errorProcessors) || 0);
                    buffer.write(`<p><b>Error Processor count</b>: ${processorCount}</p>`);
                }));
                let sourceFactory : any = context.sourceFactory;
                if (is(sourceFactory, any)) {
                    buffer.write('<h3>Resolvers</h3>');
                    for(let resolver of sourceFactory.resolvers) {
                        buffer.write('<p>');
                        buffer.write(resolver.runtimeType);
                        if (is(resolver, any)) {
                            let sdk : any = resolver.dartSdk;
                            buffer.write(' (sdk = ');
                            buffer.write(sdk.runtimeType);
                            if (is(sdk, any)) {
                                buffer.write(' (path = ');
                                buffer.write(sdk.directory.path);
                                buffer.write(')');
                            }else if (is(sdk, any)) {
                                buffer.write(' (map = ');
                                this._writeMapOfStringToString(buffer,sdk.urlMappings);
                                buffer.write(')');
                            }
                            buffer.write(')');
                        }else if (is(resolver, any)) {
                            buffer.write(' (map = ');
                            this._writeMapOfStringToString(buffer,resolver.urlMappings);
                            buffer.write(')');
                        }
                        buffer.write('</p>');
                    }
                }
                _writeFiles(buffer,`Priority Files (${priorityNames.length})`,priorityNames);
                _writeFiles(buffer,`Explicitly Analyzed Files (${explicitNames.length})`,explicitNames);
                _writeFiles(buffer,`Implicitly Analyzed Files (${implicitNames.length})`,implicitNames);
                buffer.write('<h3>Exceptions</h3>');
                if (exceptions.isEmpty) {
                    buffer.write('<p>none</p>');
                }else {
                    exceptions.forEach((exception : any) =>  {
                        this._writeException(buffer,exception);
                    });
                }
                buffer.write('<h3>Targets Without Entries</h3>');
                let foundEntry : boolean = false;
                let iterator : any = context.analysisCache.iterator({
                    context : context});
                while (iterator.moveNext()){
                    if (op(Op.EQUALS,iterator.value,null)) {
                        foundEntry = true;
                        buffer.write('<p>');
                        buffer.write(iterator.key.toString());
                        buffer.write(' (');
                        buffer.write(iterator.key.runtimeType.toString());
                        buffer.write(')</p>');
                    }
                }
                if (!foundEntry) {
                    buffer.write('<p>none</p>');
                }
            });
        });
    }
    _returnContextValidationDiagnostics(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server is not running');
        }
        let contextFilter : string = request.uri.queryParameters.get(GetHandler.CONTEXT_QUERY_PARAM);
        if (contextFilter == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.CONTEXT_QUERY_PARAM} required`);
        }
        let context : any = null;
        let folder : any = this._findFolder(analysisServer,contextFilter);
        if (op(Op.EQUALS,folder,null)) {
            context = this._getSdkContext(analysisServer,contextFilter);
            if (op(Op.EQUALS,context,null)) {
                return this._returnFailure(request,`Invalid context: ${contextFilter}`);
            }
        }else {
            context = op(Op.INDEX,analysisServer.folderMap,folder);
        }
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Context Validation Diagnostics',new core.DartList.literal(`Context: ${contextFilter}`),(buffer : core.DartStringBuffer) =>  {
                this._writeContextValidationDiagnostics(buffer,context);
            });
        });
    }
    _returnDiagnosticInfo(request : io.HttpRequest) : void {
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Diagnostic info',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                this._writeDiagnosticStatus(buffer);
            });
        });
    }
    _returnElement(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server not running');
        }
        let contextFilter : string = request.uri.queryParameters.get(GetHandler.CONTEXT_QUERY_PARAM);
        if (contextFilter == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.CONTEXT_QUERY_PARAM} required`);
        }
        let folder : any = this._findFolder(analysisServer,contextFilter);
        if (op(Op.EQUALS,folder,null)) {
            return this._returnFailure(request,`Invalid context: ${contextFilter}`);
        }
        let sourceUri : string = request.uri.queryParameters.get(GetHandler.SOURCE_QUERY_PARAM);
        if (sourceUri == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.SOURCE_QUERY_PARAM} required`);
        }
        let context : any = op(Op.INDEX,analysisServer.folderMap,folder);
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Element Model',new core.DartList.literal(`Context: ${contextFilter}`,`File: ${sourceUri}`),(buffer : core.DartStringBuffer) =>  {
                let source : any = context.sourceFactory.forUri(sourceUri);
                if (op(Op.EQUALS,source,null)) {
                    buffer.write('<p>Not found.</p>');
                    return;
                }
                let entry : any = context.analysisCache.get(source);
                if (op(Op.EQUALS,entry,null)) {
                    buffer.write('<p>Not found.</p>');
                    return;
                }
                let element : any = entry.getValue(LIBRARY_ELEMENT);
                if (op(Op.EQUALS,element,null)) {
                    buffer.write('<p>null</p>');
                    return;
                }
                element.accept(new bare.createInstance(any,null,buffer));
            });
        });
    }
    _returnFailure(request : io.HttpRequest,message : string) : void {
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Failure',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write(convert.properties.HTML_ESCAPE.convert(message));
            });
        });
    }
    _returnMemoryUsage(request : io.HttpRequest) : void {
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Memory Use',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                let server : any = this._server.analysisServer;
                let data : any = new bare.createInstance(any,null);
                data.processAnalysisServer(server);
                let instances : core.DartMap<core.Type,core.DartSet<any>> = data.instances;
                let instanceTypes : core.DartList<core.Type> = instances.keys.toList();
                instanceTypes.sort((left : core.Type,right : core.Type) =>  {
                    return new core.DartString(left.toString()).compareTo(right.toString());
                });
                let ownerMap : core.DartMap<core.Type,core.DartSet<any>> = data.ownerMap;
                let ownerTypes : core.DartList<core.Type> = ownerMap.keys.toList();
                ownerTypes.sort((left : core.Type,right : core.Type) =>  {
                    return new core.DartString(left.toString()).compareTo(right.toString());
                });
                this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
                    buffer.write('<h3>Instance Counts (reachable from contexts)</h3>');
                    buffer.write('<table>');
                    this._writeRow(buffer,new core.DartList.literal('Count','Class name'),{
                        header : true});
                    instanceTypes.forEach((type : core.Type) =>  {
                        this._writeRow(buffer,new core.DartList.literal(instances.get(type).length,type),{
                            classes : new core.DartList.literal('right',null)});
                    });
                    buffer.write('</table>');
                    buffer.write('<h3>Ownership (which classes of objects hold on to others)</h3>');
                    buffer.write('<table>');
                    this._writeRow(buffer,new core.DartList.literal('Referenced Type','Referencing Types'),{
                        header : true});
                    ownerTypes.forEach((type : core.Type) =>  {
                        let referencingTypes : core.DartList<string> = ownerMap.get(type).map((type : core.Type) =>  {
                            return type.toString();
                        }).toList();
                        referencingTypes.sort();
                        this._writeRow(buffer,new core.DartList.literal(type,referencingTypes.join('<br>')));
                    });
                    buffer.write('</table>');
                    buffer.write('<h3>Other Data</h3>');
                    buffer.write('<p>');
                    buffer.write(data.uniqueTargetedResults.length);
                    buffer.write(' non-equal TargetedResults</p>');
                    buffer.write('<p>');
                    buffer.write(data.uniqueLSUs.length);
                    buffer.write(' non-equal LibrarySpecificUnits</p>');
                    let count : number = data.mismatchedTargets.length;
                    buffer.write('<p>');
                    buffer.write(count);
                    buffer.write(' mismatched targets</p>');
                    if (count < 100) {
                        for(let target of data.mismatchedTargets) {
                            buffer.write(target);
                            buffer.write('<br>');
                        }
                    }
                },(buffer : core.DartStringBuffer) =>  {
                    var writeCountMap : (title : string,counts : core.DartMap<core.Type,number>) => void = (title : string,counts : core.DartMap<core.Type,number>) : void =>  {
                        let classNames : core.DartList<core.Type> = counts.keys.toList();
                        classNames.sort((left : core.Type,right : core.Type) =>  {
                            return new core.DartString(left.toString()).compareTo(right.toString());
                        });
                        buffer.write(`<h3>${title}</h3>`);
                        buffer.write('<table>');
                        this._writeRow(buffer,new core.DartList.literal('Count','Class name'),{
                            header : true});
                        classNames.forEach((type : core.Type) =>  {
                            this._writeRow(buffer,new core.DartList.literal(counts.get(type),type),{
                                classes : new core.DartList.literal('right',null)});
                        });
                        buffer.write('</table>');
                    };
                    writeCountMap('Directly Held AST Nodes',data.directNodeCounts);
                    writeCountMap('Indirectly Held AST Nodes',data.indirectNodeCounts);
                    writeCountMap('Directly Held Elements',data.elementCounts);
                });
            });
        });
    }
    _returnOverlayContents(request : io.HttpRequest) : void {
        let path : string = request.requestedUri.queryParameters.get(GetHandler.PATH_PARAM);
        if (path == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler.PATH_PARAM} required`);
        }
        let contents : string = this._overlayContents.get(path);
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Overlay',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write(`<pre>${convert.properties.HTML_ESCAPE.convert(contents)}</pre>`);
            });
        });
    }
    _returnOverlaysInfo(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server is not running');
        }
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Overlays',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write('<table border="1">');
                this._overlayContents.clear();
                let overlayState : any = analysisServer.overlayState;
                overlayState.accept((fullName : string,stamp : number,contents : string) =>  {
                    buffer.write('<tr>');
                    let link : string = GetHandler.makeLink(GetHandler.OVERLAY_PATH,new core.DartMap.literal([
                        [GetHandler.PATH_PARAM,fullName]]),fullName);
                    let time : core.DartDateTime = new core.DartDateTime.fromMillisecondsSinceEpoch(stamp);
                    this._writeRow(buffer,new core.DartList.literal(link,time));
                    this._overlayContents.set(fullName,contents);
                });
                let count : number = this._overlayContents.length;
                buffer.write(`<tr><td colspan="2">Total: ${count} entries.</td></tr>`);
                buffer.write('</table>');
            });
        });
    }
    _returnServerStatus(request : io.HttpRequest) : void {
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server - Status',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                if (this._writeServerStatus(buffer)) {
                    this._writeAnalysisStatus(buffer);
                    this._writeEditStatus(buffer);
                    this._writeExecutionStatus(buffer);
                    this._writePluginStatus(buffer);
                    this._writeRecentOutput(buffer);
                }
            });
        });
    }
    _returnUnknownRequest(request : io.HttpRequest) : void {
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write('<h3>Unknown page: ');
                buffer.write(request.uri.path);
                buffer.write('</h3>');
                buffer.write(`        <p>\n        You have reached an un-recognized page. If you reached this page by\n        following a link from a status page, please report the broken link to\n        the Dart analyzer team:\n        <a>https://github.com/dart-lang/sdk/issues/new</a>.\n        </p><p>\n        If you mistyped the URL, you can correct it or return to\n        ${GetHandler.makeLink(GetHandler.STATUS_PATH,new core.DartMap.literal([
                ]),'the main status page')}.\n        </p>`);
            });
        });
    }
    _twoDigit(value : number) : string {
        if (value < 10) {
            return `0${value}`;
        }
        return new core.DartInt(value).toString();
    }
    _writeAnalysisStatus(buffer : core.DartStringBuffer) : void {
        let analysisServer : any = this._server.analysisServer;
        let folderMap : core.DartMap<any,any> = analysisServer.folderMap;
        let folders : core.DartList<any> = folderMap.keys.toList();
        folders.sort((first : any,second : any) =>  {
            return first.shortName.compareTo(second.shortName);
        });
        let operationQueue : any = analysisServer.operationQueue;
        buffer.write('<h3>Analysis Domain</h3>');
        this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
            if (operationQueue.isEmpty) {
                buffer.write('<p>Status: Done analyzing</p>');
            }else {
                let operation : any = operationQueue.peek();
                if (is(operation, any)) {
                    let folder : any = this._keyForValue(folderMap,operation.context);
                    if (op(Op.EQUALS,folder,null)) {
                        buffer.write('<p>Status: Analyzing in unmapped context</p>');
                    }else {
                        buffer.write(`<p>Status: Analyzing in ${folder.path}</p>`);
                    }
                }else {
                    buffer.write('<p>Status: Analyzing</p>');
                }
            }
            buffer.write('<p>Using package resolver provider: ');
            buffer.write(this._server.packageResolverProvider != null);
            buffer.write('</p>');
            buffer.write('<p>');
            buffer.write(GetHandler.makeLink(GetHandler.OVERLAYS_PATH,new core.DartMap.literal([
            ]),'All overlay information'));
            buffer.write('</p>');
            buffer.write('<p><b>Analysis Contexts</b></p>');
            buffer.write('<p>');
            let first : boolean = true;
            folders.forEach((folder : any) =>  {
                if (first) {
                    first = false;
                }else {
                    buffer.write('<br>');
                }
                let key : string = folder.shortName;
                buffer.write(GetHandler.makeLink(GetHandler.CONTEXT_PATH,new core.DartMap.literal([
                    [GetHandler.CONTEXT_QUERY_PARAM,folder.path]]),key,this._hasException(folderMap.get(folder))));
                buffer.write(' <small><b>[');
                buffer.write(GetHandler.makeLink(GetHandler.CONTEXT_DIAGNOSTICS_PATH,new core.DartMap.literal([
                    [GetHandler.CONTEXT_QUERY_PARAM,folder.path]]),'diagnostics'));
                buffer.write(']</b></small>');
                if (!folder.getChild('.packages').exists) {
                    buffer.write(' <small>[no .packages file]</small>');
                }
            });
            buffer.write('</p>');
            buffer.write('<p><b>SDK Contexts</b></p>');
            buffer.write('<p>');
            first = true;
            let manager : any = analysisServer.sdkManager;
            let descriptors : core.DartList<any> = manager.sdkDescriptors;
            if (descriptors.isEmpty) {
                buffer.write('none');
            }else {
                let sdkMap : core.DartMap<string,any> = new core.DartMap.literal([
                ]);
                for(let descriptor of descriptors) {
                    sdkMap.set(descriptor.toString(),descriptor);
                }
                let descriptorNames : core.DartList<string> = sdkMap.keys.toList();
                descriptorNames.sort();
                for(let name of descriptorNames) {
                    if (first) {
                        first = false;
                    }else {
                        buffer.write('<br>');
                    }
                    let descriptor : any = sdkMap.get(name);
                    let contextId : string = this._encodeSdkDescriptor(descriptor);
                    buffer.write(GetHandler.makeLink(GetHandler.CONTEXT_PATH,new core.DartMap.literal([
                        [GetHandler.CONTEXT_QUERY_PARAM,contextId]]),name,this._hasException(((t)=>(!!t)?t.context:null)(manager.getSdk(descriptor,() =>  {
                        return null;
                    })))));
                    buffer.write(' <small><b>[');
                    buffer.write(GetHandler.makeLink(GetHandler.CONTEXT_DIAGNOSTICS_PATH,new core.DartMap.literal([
                        [GetHandler.CONTEXT_QUERY_PARAM,contextId]]),'diagnostics'));
                    buffer.write(']</b></small>');
                }
            }
            buffer.write('</p>');
            let freq : number = AnalysisServer.performOperationDelayFrequency;
            let delay : string = freq > 0 ? `1 ms every ${freq} ms` : 'off';
            buffer.write('<p><b>Performance Data</b></p>');
            buffer.write(`<p>Perform operation delay: ${delay}</p>`);
            buffer.write('<p>');
            buffer.write(GetHandler.makeLink(GetHandler.ANALYSIS_PERFORMANCE_PATH,new core.DartMap.literal([
            ]),'Task data'));
            buffer.write('</p>');
        },(buffer : core.DartStringBuffer) =>  {
            this._writeSubscriptionMap(buffer,AnalysisService.VALUES,analysisServer.analysisServices);
        });
    }
    _writeColumns(buffer : core.DartStringBuffer,columns : core.DartList<(buffer : core.DartStringBuffer) => void>) : void {
        buffer.write('<table class="column"><tr class="column"><td class="column">');
        let count : number = columns.length;
        for(let i : number = 0; i < count; i++){
            if (i > 0) {
                buffer.write('</td><td class="column">');
            }
            (columns[i])(buffer);
        }
        buffer.write('</td></tr></table>');
    }
    _writeCompletionPerformanceDetail(buffer : core.DartStringBuffer,index : number) : void {
        let handler : any = this._completionDomainHandler;
        let performance : any;
        if (handler != null) {
            let list : core.DartList<any> = handler.performanceList;
            if (list != null && list.isNotEmpty) {
                performance = list[math.max(0,math.min(list.length - 1,index))];
            }
        }
        if (op(Op.EQUALS,performance,null)) {
            buffer.write('<h3>Completion Performance Detail</h3>');
            buffer.write('<p>No completions yet</p>');
            return;
        }
        buffer.write('<h3>Completion Performance Detail</h3>');
        buffer.write(`<p>${performance.startTimeAndMs} for ${performance.source}`);
        buffer.write('<table>');
        this._writeRow(buffer,new core.DartList.literal('Elapsed','','Operation'),{
            header : true});
        performance.operations.forEach((op : any) =>  {
            let elapsed : string = op.elapsed != null ? op.elapsed.toString() : '???';
            this._writeRow(buffer,new core.DartList.literal(elapsed,'&nbsp;&nbsp;',op.name));
        });
        buffer.write('</table>');
        buffer.write('<p><b>Compute Cache Performance</b>: ');
        if (op(Op.EQUALS,handler.computeCachePerformance,null)) {
            buffer.write('none');
        }else {
            let elapsed : number = handler.computeCachePerformance.elapsedInMilliseconds;
            let source : any = handler.computeCachePerformance.source;
            buffer.write(` ${elapsed} ms for ${source}`);
        }
        buffer.write('</p>');
    }
    _writeCompletionPerformanceList(buffer : core.DartStringBuffer) : void {
        let handler : any = this._completionDomainHandler;
        buffer.write('<h3>Completion Performance List</h3>');
        if (op(Op.EQUALS,handler,null)) {
            return;
        }
        buffer.write('<table>');
        this._writeRow(buffer,new core.DartList.literal('Start Time','','First (ms)','','Complete (ms)','','# Notifications','','# Suggestions','','Snippet'),{
            header : true});
        let index : number = 0;
        for(let performance of handler.performanceList) {
            let link : string = GetHandler.makeLink(GetHandler.COMPLETION_PATH,new core.DartMap.literal([
                ['index',`${index}`]]),`${performance.startTimeAndMs}`);
            this._writeRow(buffer,new core.DartList.literal(link,'&nbsp;&nbsp;',performance.firstNotificationInMilliseconds,'&nbsp;&nbsp;',performance.elapsedInMilliseconds,'&nbsp;&nbsp;',performance.notificationCount,'&nbsp;&nbsp;',performance.suggestionCount,'&nbsp;&nbsp;',convert.properties.HTML_ESCAPE.convert(performance.snippet)));
            ++index;
        }
        buffer.write('</table>');
        buffer.write('      <p><strong>First (ms)</strong> - the number of milliseconds\n        from when completion received the request until the first notification\n        with completion results was queued for sending back to the client.\n      <p><strong>Complete (ms)</strong> - the number of milliseconds\n        from when completion received the request until the final notification\n        with completion results was queued for sending back to the client.\n      <p><strong># Notifications</strong> - the total number of notifications\n        sent to the client with completion results for this request.\n      <p><strong># Suggestions</strong> - the number of suggestions\n        sent to the client in the first notification, followed by a comma,\n        followed by the number of suggestions send to the client\n        in the last notification. If there is only one notification,\n        then there will be only one number in this column.');
    }
    _writeContextDiagnostics(buffer : core.DartStringBuffer,context : any,contextFilter : string) : void {
        let driver : any = (context as any).driver;
        let workItems : core.DartList<any> = ((t)=>(!!t)?t.workItems:null)(driver.currentWorkOrder);
        buffer.write('<p>');
        buffer.write(GetHandler.makeLink(GetHandler.CONTEXT_VALIDATION_DIAGNOSTICS_PATH,new core.DartMap.literal([
            [GetHandler.CONTEXT_QUERY_PARAM,contextFilter]]),'Run validation'));
        buffer.write('</p>');
        buffer.write('<h3>Most Recently Perfomed Tasks</h3>');
        AnalysisTask.LAST_TASKS.forEach((description : string) =>  {
            buffer.write('<p>');
            buffer.write(description);
            buffer.write('</p>');
        });
        var writeWorkItem : (buffer : core.DartStringBuffer,item : any) => void = (buffer : core.DartStringBuffer,item : any) : void =>  {
            if (op(Op.EQUALS,item,null)) {
                buffer.write('none');
            }else {
                buffer.write(((t)=>(!!t)?t.name:null)(item.descriptor));
                buffer.write(' computing ');
                buffer.write(((t)=>(!!t)?t.name:null)(item.spawningResult));
                buffer.write(' for ');
                buffer.write(item.target);
            }
        };
        buffer.write('<h3>Work Items</h3>');
        buffer.write('<p><b>Current:</b> ');
        writeWorkItem(buffer,((t)=>(!!t)?t.current:null)(driver.currentWorkOrder));
        buffer.write('</p>');
        if (workItems != null) {
            workItems.reversed.forEach((item : any) =>  {
                buffer.write('<p>');
                writeWorkItem(buffer,item);
                buffer.write('</p>');
            });
        }
    }
    _writeContextValidationDiagnostics(buffer : core.DartStringBuffer,context : any) : void {
        let stopwatch : core.DartStopwatch = new core.DartStopwatch();
        stopwatch.start();
        let results : any = new bare.createInstance(any,null,context);
        stopwatch.stop();
        buffer.write('<h3>Validation Results</h3>');
        buffer.write('<p>Re-analysis took ');
        buffer.write(stopwatch.elapsedMilliseconds);
        buffer.write(' ms</p>');
        results.writeOn(buffer);
    }
    _writeDiagnosticStatus(buffer : core.DartStringBuffer) : void {
        let request = new bare.createInstance(any,null).toRequest('0');
        let stopwatch = new core.DartStopwatch();
        stopwatch.start();
        let response = this.diagnosticHandler.handleRequest(request);
        stopwatch.stop();
        let elapsedMs : number = stopwatch.elapsedMilliseconds;
        this._diagnosticCallAverage.addSample(elapsedMs);
        buffer.write('<h3>Timing</h3>');
        buffer.write('<p>getDiagnostic (last call): ');
        buffer.write(elapsedMs);
        buffer.write(' (ms)</p>');
        buffer.write('<p>getDiagnostic (rolling average): ');
        buffer.write(this._diagnosticCallAverage.value);
        buffer.write(' (ms)</p>&nbsp;');
        let json : core.DartMap<any,any> = op(Op.INDEX,response.toJson(),Response.RESULT);
        let contexts : core.DartList<any> = json.get('contexts');
        contexts.sort((first : any,second : any) =>  {
            return op(Op.INDEX,first,'name').compareTo(op(Op.INDEX,second,'name'));
        });
        let libraries : core.DartSet<any> = new core.DartHashSet<any>();
        let sdkCounter : ElementCounter = new ElementCounter();
        for(let context of contexts) {
            buffer.write('<p><h3>');
            buffer.write(op(Op.INDEX,context,'name'));
            buffer.write('</h3></p>');
            buffer.write('<p>explicitFileCount: ');
            buffer.write(op(Op.INDEX,context,'explicitFileCount'));
            buffer.write('</p>');
            buffer.write('<p>implicitFileCount: ');
            buffer.write(op(Op.INDEX,context,'implicitFileCount'));
            buffer.write('</p>');
            buffer.write('<p>workItemQueueLength: ');
            buffer.write(op(Op.INDEX,context,'workItemQueueLength'));
            buffer.write('</p>');
            let server : any = this._server.analysisServer;
            if (server != null) {
                let folder : any = this._findFolder(server,op(Op.INDEX,context,'name'));
                let ac : any = op(Op.INDEX,this._server.analysisServer.folderMap,folder);
                let counter : ElementCounter = new ElementCounter();
                for(let source of ac.librarySources) {
                    let libraryElement : any = ac.getLibraryElement(source);
                    if (libraries.add(libraryElement)) {
                        if (libraryElement != null) {
                            if (libraryElement.isInSdk) {
                                libraryElement.accept(sdkCounter);
                            }else {
                                libraryElement.accept(counter);
                            }
                        }
                    }
                }
                buffer.write('<p>element count: ');
                buffer.write(counter.counts.values.fold(0,(prev : number,element : number) =>  {
                    return prev + element;
                }));
                buffer.write('</p>');
                buffer.write('<p>  (w/docs): ');
                buffer.write(counter.elementsWithDocs);
                buffer.write('</p>');
                buffer.write('<p>total doc span: ');
                buffer.write(counter.totalDocSpan);
                buffer.write('</p>');
            }
        }
        buffer.write('<p><h3>');
        buffer.write('SDK');
        buffer.write('</h3></p>');
        buffer.write('<p>element count: ');
        buffer.write(sdkCounter.counts.values.fold(0,(prev : number,element : number) =>  {
            return prev + element;
        }));
        buffer.write('</p>');
        buffer.write('<p>  (w/docs): ');
        buffer.write(sdkCounter.elementsWithDocs);
        buffer.write('</p>');
        buffer.write('<p>total doc span: ');
        buffer.write(sdkCounter.totalDocSpan);
        buffer.write('</p>');
    }
    _writeEditStatus(buffer : core.DartStringBuffer) : void {
        buffer.write('<h3>Edit Domain</h3>');
        this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
            buffer.write('<p><b>Performance Data</b></p>');
            buffer.write('<p>');
            buffer.write(GetHandler.makeLink(GetHandler.COMPLETION_PATH,new core.DartMap.literal([
            ]),'Completion data'));
            buffer.write('</p>');
        },(buffer : core.DartStringBuffer) =>  {
        });
    }
    _writeException(buffer : core.DartStringBuffer,caughtException : any,_namedArguments? : {isCause? : boolean}) : void {
        let {isCause} = Object.assign({
            "isCause" : false}, _namedArguments );
        let exception : core.DartObject = caughtException.exception;
        if (is(exception, any)) {
            buffer.write('<p>');
            if (isCause) {
                buffer.write('Caused by ');
            }
            buffer.write(exception.message);
            buffer.write('</p>');
            this._writeStackTrace(buffer,caughtException.stackTrace);
            let cause : any = exception.cause;
            if (cause != null) {
                buffer.write('<blockquote>');
                this._writeException(buffer,cause,{
                    isCause : true});
                buffer.write('</blockquote>');
            }
        }else {
            buffer.write('<p>');
            if (isCause) {
                buffer.write('Caused by ');
            }
            buffer.write(exception.toString());
            buffer.write('<p>');
            this._writeStackTrace(buffer,caughtException.stackTrace);
        }
    }
    _writeExecutionStatus(buffer : core.DartStringBuffer) : void {
        let analysisServer : any = this._server.analysisServer;
        let handler : any = analysisServer.handlers.firstWhere((handler : any) =>  {
            return is(handler, any);
        },{
            orElse : () =>  {
                return null;
            }});
        let services : core.DartSet<any> = new core.DartSet<any>();
        if (handler.onFileAnalyzed != null) {
            services.add(ExecutionService.LAUNCH_DATA);
        }
        if (handler != null) {
            buffer.write('<h3>Execution Domain</h3>');
            this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
                this._writeSubscriptionList(buffer,ExecutionService.VALUES,services);
            },(buffer : core.DartStringBuffer) =>  {
            });
        }
    }
    _writeListItem(buffer : core.DartStringBuffer,writer : () => any) : void {
        buffer.write('<li>');
        writer();
        buffer.write('</li>');
    }
    _writeListOfStrings(buffer : core.DartStringBuffer,listName : string,items : core.DartIterable<string>) : void {
        let itemList : core.DartList<string> = items.toList();
        itemList.sort((a : string,b : string) =>  {
            a = new core.DartString(a).toLowerCase();
            b = new core.DartString(b).toLowerCase();
            return new core.DartString(a).compareTo(b);
        });
        buffer.write(`List "${listName}" containing ${itemList.length} entries:`);
        buffer.write('<ul>');
        for(let member of itemList) {
            this._writeListItem(buffer,() =>  {
                buffer.write(member);
            });
        }
        buffer.write('</ul>');
    }
    _writeMapOfStringToString(buffer : core.DartStringBuffer,map : core.DartMap<string,string>) : void {
        let keys : core.DartList<string> = map.keys.toList();
        keys.sort();
        let length : number = keys.length;
        buffer.write('{');
        for(let i : number = 0; i < length; i++){
            buffer.write('<br>');
            let key : string = keys[i];
            if (i > 0) {
                buffer.write(', ');
            }
            buffer.write(key);
            buffer.write(' = ');
            buffer.write(map.get(key));
        }
        buffer.write('<br>}');
    }
    _writeOption(buffer : core.DartStringBuffer,name : string,value : core.DartObject,_namedArguments? : {last? : boolean}) : void {
        let {last} = Object.assign({
            "last" : false}, _namedArguments );
        buffer.write(name);
        buffer.write(' = ');
        buffer.write(value.toString());
        if (!last) {
            buffer.write('<br>');
        }
    }
    _writePage(buffer : core.DartStringBuffer,title : string,subtitles : core.DartList<string>,body : (buffer : core.DartStringBuffer) => void) : void {
        let now : core.DartDateTime = new core.DartDateTime.now();
        let date : string = `${now.month}/${now.day}/${now.year}`;
        let time : string = `${now.hour}:${this._twoDigit(now.minute)}:${this._twoDigit(now.second)}.${now.millisecond}`;
        buffer.write('<!DOCTYPE html>');
        buffer.write('<html>');
        buffer.write('<head>');
        buffer.write('<meta charset="utf-8">');
        buffer.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
        buffer.write(`<title>${title}</title>`);
        buffer.write('<style>');
        buffer.write('a {color: #0000DD; text-decoration: none;}');
        buffer.write('a:link.error {background-color: #FFEEEE;}');
        buffer.write('a:visited.error {background-color: #FFEEEE;}');
        buffer.write('a:hover.error {background-color: #FFEEEE;}');
        buffer.write('a:active.error {background-color: #FFEEEE;}');
        buffer.write('h3 {background-color: #DDDDDD; margin-top: 0em; margin-bottom: 0em;}');
        buffer.write('p {margin-top: 0.5em; margin-bottom: 0.5em;}');
        buffer.write('p.commentary {margin-top: 1em; margin-bottom: 1em; margin-left: 2em; font-style: italic;}');
        buffer.write('table.column {border: 0px solid black; width: 100%; table-layout: fixed;}');
        buffer.write('td.column {vertical-align: top; width: 50%;}');
        buffer.write('td.right {text-align: right;}');
        buffer.write('th {text-align: left; vertical-align:top;}');
        buffer.write('tr {vertical-align:top;}');
        buffer.write('</style>');
        buffer.write('</head>');
        buffer.write('<body>');
        buffer.write(`<h2>${title} <small><small>(as of ${time} on ${date})</small></small></h2>`);
        if (subtitles != null && subtitles.isNotEmpty) {
            buffer.write('<blockquote>');
            let first : boolean = true;
            for(let subtitle of subtitles) {
                if (first) {
                    first = false;
                }else {
                    buffer.write('<br>');
                }
                buffer.write('<b>');
                buffer.write(subtitle);
                buffer.write('</b>');
            }
            buffer.write('</blockquote>');
        }
        try {
            body(buffer);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                buffer.write('<h3>Exception while creating page</h3>');
                this._writeException(buffer,new bare.createInstance(any,null,exception,stackTrace));
            }
        }
        buffer.write('</body>');
        buffer.write('</html>');
    }
    _writePluginStatus(buffer : core.DartStringBuffer) : void {
        var writePlugin : (plugin : any) => void = (plugin : any) : void =>  {
            buffer.write(plugin.uniqueIdentifier);
            buffer.write(' (');
            buffer.write(plugin.runtimeType);
            buffer.write(')<br>');
        };
        buffer.write('<h3>Plugin Status</h3><p>');
        writePlugin(AnalysisEngine.instance.enginePlugin);
        writePlugin(this._server.serverPlugin);
        for(let plugin of this._server.analysisServer.userDefinedPlugins) {
            writePlugin(plugin);
        }
        buffer.write('<p>');
    }
    _writeRecentOutput(buffer : core.DartStringBuffer) : void {
        buffer.write('<h3>Recent Output</h3>');
        let output : string = convert.properties.HTML_ESCAPE.convert(this._printBuffer.join('\n'));
        if (new core.DartString(output).isEmpty) {
            buffer.write('<i>none</i>');
        }else {
            buffer.write('<pre>');
            buffer.write(output);
            buffer.write('</pre>');
        }
    }
    _writeResponse(request : io.HttpRequest,writePage : (buffer : core.DartStringBuffer) => void) : void {
        let response : io.HttpResponse = request.response;
        response.statusCode = io.HttpStatus.OK;
        response.headers.contentType = GetHandler._htmlContent;
        try {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            try {
                writePage(buffer);
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    buffer.clear();
                    this._writePage(buffer,'Internal Exception',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                        this._writeException(buffer,new bare.createInstance(any,null,exception,stackTrace));
                    });
                }
            }
            response.write(buffer.toString());
        } finally {
            response.close();
        }
    }
    _writeRow(buffer : core.DartStringBuffer,columns : core.DartList<core.DartObject>,_namedArguments? : {header? : boolean,classes? : core.DartList<string>}) : void {
        let {header,classes} = Object.assign({
            "header" : false}, _namedArguments );
        buffer.write('<tr>');
        let count : number = columns.length;
        let maxClassIndex : number = classes == null ? 0 : classes.length - 1;
        for(let i : number = 0; i < count; i++){
            let classAttribute : string = '';
            if (classes != null) {
                let className : string = classes[math.min(i,maxClassIndex)];
                if (className != null) {
                    classAttribute = ` class="${className}"`;
                }
            }
            if (header) {
                buffer.write(`<th${classAttribute}>`);
            }else {
                buffer.write(`<td${classAttribute}>`);
            }
            buffer.write(columns[i]);
            if (header) {
                buffer.write('</th>');
            }else {
                buffer.write('</td>');
            }
        }
        buffer.write('</tr>');
    }
    _writeServerStatus(buffer : core.DartStringBuffer) : boolean {
        let analysisServer : any = this._server.analysisServer;
        let services : core.DartSet<any> = analysisServer.serverServices;
        buffer.write('<h3>Server Domain</h3>');
        this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
            if (op(Op.EQUALS,analysisServer,null)) {
                buffer.write('Status: <span style="color:red">Not running</span>');
                return;
            }
            buffer.write('<p>');
            buffer.write('Status: Running<br>');
            buffer.write('New analysis driver: ');
            buffer.write(analysisServer.options.enableNewAnalysisDriver);
            buffer.write('<br>');
            buffer.write('Instrumentation: ');
            if (AnalysisEngine.instance.instrumentationService.isActive) {
                buffer.write('<span style="color:red">Active</span>');
            }else {
                buffer.write('Inactive');
            }
            buffer.write('<br>');
            buffer.write('Server version: ');
            buffer.write(AnalysisServer.VERSION);
            buffer.write('<br>');
            buffer.write('SDK: ');
            buffer.write(io.Platform.version);
            buffer.write('<br>');
            buffer.write('Process ID: ');
            buffer.write(io.properties.pid);
            buffer.write('</p>');
            buffer.write('<p><b>Performance Data</b></p>');
            buffer.write('<p>');
            buffer.write(GetHandler.makeLink(GetHandler.COMMUNICATION_PERFORMANCE_PATH,new core.DartMap.literal([
            ]),'Communication performance'));
            buffer.write('</p>');
            buffer.write('<p>');
            buffer.write(GetHandler.makeLink(GetHandler.DIAGNOSTIC_PATH,new core.DartMap.literal([
            ]),'General diagnostics'));
            buffer.write('</p>');
            buffer.write('<p>');
            buffer.write(GetHandler.makeLink(GetHandler.MEMORY_USE_PATH,new core.DartMap.literal([
            ]),'Memory usage'));
            buffer.write(' <small>(long running)</small></p>');
        },(buffer : core.DartStringBuffer) =>  {
            this._writeSubscriptionList(buffer,ServerService.VALUES,services);
        });
        return analysisServer != null;
    }
    _writeStackTrace(buffer : core.DartStringBuffer,stackTrace : core.DartStackTrace) : void {
        if (stackTrace != null) {
            let trace : string = new core.DartString(stackTrace.toString()).replaceAll('#','<br>#');
            if (new core.DartString(trace).startsWith('<br>#')) {
                trace = new core.DartString(trace).substring(4);
            }
            buffer.write('<p>');
            buffer.write(trace);
            buffer.write('</p>');
        }
    }
    _writeSubscriptionInList(buffer : core.DartStringBuffer,service : any,subscribedServices : core.DartSet<any>) : void {
        if (subscribedServices.contains(service)) {
            buffer.write('<code>+ </code>');
        }else {
            buffer.write('<code>- </code>');
        }
        buffer.write(service.name);
        buffer.write('<br>');
    }
    _writeSubscriptionInMap(buffer : core.DartStringBuffer,service : any,subscribedPaths : core.DartSet<string>) : void {
        buffer.write('<p>');
        buffer.write(service.name);
        buffer.write('</p>');
        if (op(Op.EQUALS,subscribedPaths,null) || subscribedPaths.isEmpty) {
            buffer.write('none');
        }else {
            let paths : core.DartList<string> = subscribedPaths.toList();
            paths.sort();
            for(let path of paths) {
                buffer.write('<p>');
                buffer.write(path);
                buffer.write('</p>');
            }
        }
    }
    _writeSubscriptionList(buffer : core.DartStringBuffer,allServices : core.DartList<any>,subscribedServices : core.DartSet<any>) : void {
        buffer.write('<p><b>Subscriptions</b></p>');
        buffer.write('<p>');
        for(let service of allServices) {
            this._writeSubscriptionInList(buffer,service,subscribedServices);
        }
        buffer.write('</p>');
    }
    _writeSubscriptionMap(buffer : core.DartStringBuffer,allServices : core.DartList<any>,subscribedServices : core.DartMap<any,core.DartSet<string>>) : void {
        buffer.write('<p><b>Subscriptions</b></p>');
        for(let service of allServices) {
            this._writeSubscriptionInMap(buffer,service,subscribedServices.get(service));
        }
    }
    _writeTargetedResults(buffer : core.DartStringBuffer,title : string,results : core.DartIterable<any>) : void {
        let sortedResults : core.DartList<any> = results.toList();
        sortedResults.sort((first : any,second : any) =>  {
            let nameOrder : number = new core.DartString(first.result.toString()).compareTo(second.result.toString());
            if (nameOrder != 0) {
                return nameOrder;
            }
            return new core.DartString(first.target.toString()).compareTo(second.target.toString());
        });
        buffer.write('<p>');
        buffer.write(title);
        buffer.write('</p><blockquote>');
        if (results.isEmpty) {
            buffer.write('nothing');
        }else {
            for(let result of sortedResults) {
                buffer.write('<p>');
                buffer.write(result.result.toString());
                buffer.write(' of ');
                buffer.write(result.target.toString());
                buffer.write('<p>');
            }
        }
        buffer.write('</blockquote>');
    }
    _writeTwoColumns(buffer : core.DartStringBuffer,leftColumn : (buffer : core.DartStringBuffer) => void,rightColumn : (buffer : core.DartStringBuffer) => void) : void {
        buffer.write('<table class="column"><tr class="column"><td class="column">');
        leftColumn(buffer);
        buffer.write('</td><td class="column">');
        rightColumn(buffer);
        buffer.write('</td></tr></table>');
    }
    _writeValueAsHtml(buffer : core.DartStringBuffer,value : core.DartObject,linkParameters : core.DartMap<string,string>) : void {
        if (op(Op.EQUALS,value,null)) {
            buffer.write('<i>null</i>');
        }else if (is(value, "string")) {
            buffer.write(`<pre>${convert.properties.HTML_ESCAPE.convert(value)}</pre>`);
        }else if (is(value, core.DartList<any>)) {
            buffer.write(`List containing ${value.length} entries`);
            buffer.write('<ul>');
            for(let entry of value) {
                this._writeListItem(buffer,() =>  {
                    this._writeValueAsHtml(buffer,entry,linkParameters);
                });
            }
            buffer.write('</ul>');
        }else if (is(value, any)) {
            let link : string = GetHandler.makeLink(GetHandler.AST_PATH,linkParameters,value.runtimeType.toString());
            buffer.write(`<i>${link}</i>`);
        }else if (is(value, any)) {
            let link : string = GetHandler.makeLink(GetHandler.ELEMENT_PATH,linkParameters,value.runtimeType.toString());
            buffer.write(`<i>${link}</i>`);
        }else if (is(value, any)) {
            buffer.write('<ul>');
            this._writeListItem(buffer,() =>  {
                let elements : core.DartHashSet<any> = value.elements;
                buffer.write(`List "elements" containing ${elements.length} entries`);
                buffer.write('<ul>');
                for(let element of elements) {
                    this._writeListItem(buffer,() =>  {
                        let elementStr : string = convert.properties.HTML_ESCAPE.convert(element.toString());
                        buffer.write(`<i>${element.runtimeType}</i>  ${elementStr}`);
                    });
                }
                buffer.write('</ul>');
            });
            this._writeListItem(buffer,() =>  {
                this._writeListOfStrings(buffer,'members',value.members);
            });
            this._writeListItem(buffer,() =>  {
                this._writeListOfStrings(buffer,'readMembers',value.readMembers);
            });
            buffer.write('</ul>');
        }else {
            buffer.write(convert.properties.HTML_ESCAPE.convert(value.toString()));
            buffer.write(` <i>(${value.runtimeType.toString()})</i>`);
        }
    }
    static makeLink(path : string,params : core.DartMap<string,string>,innerHtml : string,hasError? : boolean) : string {
        hasError = hasError || false;
        let uri : lib7.Uri = new lib7.Uri({
            path : path,queryParameters : params});
        let href : string = convert.properties.HTML_ESCAPE.convert(uri.toString());
        let classAttribute : string = hasError ? ' class="error"' : '';
        return `<a href="${href}"${classAttribute}>${innerHtml}</a>`;
    }
}

export class properties {
}
