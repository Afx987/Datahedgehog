/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/edit/edit_domain.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analyzer/lib/error/error";

export namespace EditDomainHandler {
    export type Constructors = 'EditDomainHandler';
    export type Interface = Omit<EditDomainHandler, Constructors>;
}
@DartClass
export class EditDomainHandler extends any {
    searchEngine : any;

    refactoringManager : _RefactoringManager;

    constructor(server : any) {
    }
    @defaultConstructor
    EditDomainHandler(server : any) {
        super.DartObject(server);
        this.searchEngine = server.searchEngine;
        this._newRefactoringManager();
    }
    format(request : any) : any {
        let params : any = new bare.createInstance(any,null,request);
        let file : string = params.file;
        let unformattedSource : string;
        try {
            let source : any = server.resourceProvider.getFile(file).createSource();
            if (server.options.enableNewAnalysisDriver) {
                unformattedSource = op(Op.INDEX,server.fileContentOverlay,file);
            }else {
                unformattedSource = server.overlayState.getContents(source);
            }
            unformattedSource = ( unformattedSource ) || ( source.contents.data );
        } catch (__error__) {

            {
                let e = __error__;
                return new bare.createInstance(any,null,request);
            }
        }
        let start : number = params.selectionOffset;
        let length : number = params.selectionLength;
        if (start == 0 && length == 0) {
            start = null;
            length = null;
        }
        let code : any = new bare.createInstance(any,null,unformattedSource,{
            uri : null,isCompilationUnit : true,selectionStart : start,selectionLength : length});
        let formatter : any = new bare.createInstance(any,null,{
            pageWidth : params.lineLength});
        let formattedResult : any;
        try {
            formattedResult = formatter.formatSource(code);
        } catch (__error__) {

            if (is(__error__,any)){
                return new bare.createInstance(any,null,request);
            }
        }
        let formattedSource : string = formattedResult.text;
        let edits : core.DartList<any> = new core.DartList.literal<any>();
        if (formattedSource != unformattedSource) {
            let edit : any = new bare.createInstance(any,null,0,new core.DartString(unformattedSource).length,formattedSource);
            edits.add(edit);
        }
        let newStart : number = formattedResult.selectionStart;
        let newLength : number = formattedResult.selectionLength;
        if (newStart == null) {
            newStart = 0;
        }
        if (newLength == null) {
            newLength = 0;
        }
        return new bare.createInstance(any,null,edits,newStart,newLength).toResponse(request.id);
    }
    getAssists(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params : any = new bare.createInstance(any,null,request);
            let file : string = params.file;
            let offset : number = params.offset;
            let length : number = params.length;
            let changes : core.DartList<any> = new core.DartList.literal<any>();
            let pluginFutures : core.DartMap<any,async.Future<any>>;
            let requestParams : any = new bare.createInstance(any,null,file,offset,length);
            let driver : any = server.getAnalysisDriver(file);
            if (op(Op.EQUALS,driver,null)) {
                pluginFutures = new core.DartMap.literal([
                ]);
            }else {
                pluginFutures = server.pluginManager.broadcastRequest(requestParams,{
                    contextRoot : driver.contextRoot});
            }
            let result : any = await server.getAnalysisResult(file);
            if (result != null) {
                let unit : any = result.unit;
                let compilationUnitElement : any = resolutionMap.elementDeclaredByCompilationUnit(unit);
                let dartAssistContext : any = new _DartAssistContextForValues(compilationUnitElement.source,offset,length,driver,new bare.createInstance(any,null,driver),unit);
                try {
                    let processor : any = new bare.createInstance(any,null,dartAssistContext);
                    let assists : core.DartList<any> = await processor.compute();
                    for(let assist of assists) {
                        changes.add(assist.change);
                    }
                } catch (__error__) {

                    {
                        let _ = __error__;
                    }
                }
            }
            let responses : core.DartList<any> = await waitForResponses(pluginFutures,{
                requestParameters : requestParams});
            let converter : any = new bare.createInstance(any,null);
            let pluginChanges : core.DartList<any> = new core.DartList.literal<any>();
            for(let response of responses) {
                let result : any = new bare.createInstance(any,"fromResponse",response);
                pluginChanges.addAll(result.assists);
            }
            pluginChanges.sort((first : any,second : any) =>  {
                return first.priority.compareTo(second.priority);
            });
            changes.addAll(pluginChanges.map(converter.convertPrioritizedSourceChange));
            server.sendResponse(new bare.createInstance(any,null,changes).toResponse(request.id));
        } )());
    }

    getFixes(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,request);
            let file : string = params.file;
            let offset : number = params.offset;
            let errorFixesList : core.DartList<any> = new core.DartList.literal<any>();
            let pluginFutures : core.DartMap<any,async.Future<any>>;
            let requestParams : any = new bare.createInstance(any,null,file,offset);
            let driver : any = server.getAnalysisDriver(file);
            if (op(Op.EQUALS,driver,null)) {
                pluginFutures = new core.DartMap.literal([
                ]);
            }else {
                pluginFutures = server.pluginManager.broadcastRequest(requestParams,{
                    contextRoot : driver.contextRoot});
            }
            let result : any = await server.getAnalysisResult(file);
            if (result != null) {
                let unit : any = result.unit;
                let lineInfo : any = result.lineInfo;
                let requestLine : number = lineInfo.getLocation(offset).lineNumber;
                for(let error of result.errors) {
                    let errorLine : number = lineInfo.getLocation(error.offset).lineNumber;
                    if (errorLine == requestLine) {
                        let context = new _DartFixContextImpl(server.resourceProvider,result.driver,new bare.createInstance(any,null,driver),unit,error);
                        let fixes : core.DartList<any> = await new bare.createInstance(any,null).internalComputeFixes(context);
                        if (fixes.isNotEmpty) {
                            fixes.sort(Fix.SORT_BY_RELEVANCE);
                            let serverError : any = newAnalysisError_fromEngine(lineInfo,error);
                            let errorFixes : any = new bare.createInstance(any,null,serverError);
                            errorFixesList.add(errorFixes);
                            fixes.forEach((fix : any) =>  {
                                errorFixes.fixes.add(fix.change);
                            });
                        }
                    }
                }
            }
            let responses : core.DartList<any> = await waitForResponses(pluginFutures,{
                requestParameters : requestParams});
            let converter : any = new bare.createInstance(any,null);
            for(let response of responses) {
                let result : any = new bare.createInstance(any,"fromResponse",response);
                errorFixesList.addAll(result.fixes.map(converter.convertAnalysisErrorFixes));
            }
            server.sendResponse(new bare.createInstance(any,null,errorFixesList).toResponse(request.id));
        } )());
    }

    getStatementCompletion(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,request);
            let change : any;
            let result : any = await server.getAnalysisResult(params.file);
            if (result != null) {
                let unit : any = result.unit;
                let unitElement : any = resolutionMap.elementDeclaredByCompilationUnit(unit);
                if (unitElement.context != null) {
                    let context : any = new bare.createInstance(any,null,params.file,result.lineInfo,params.offset,unit,unitElement,result.errors);
                    let processor : any = new bare.createInstance(any,null,context);
                    let completion : any = await processor.compute();
                    change = completion.change;
                }
            }
            if (op(Op.EQUALS,change,null)) {
                change = new bare.createInstance(any,null,"",{
                    edits : new core.DartList.literal()});
            }
            let response : any = new bare.createInstance(any,null,change,false).toResponse(request.id);
            server.sendResponse(response);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRequest(request : any) : any {
        try {
            let requestName : string = request.method;
            if (requestName == EDIT_FORMAT) {
                return this.format(request);
            }else if (requestName == EDIT_GET_ASSISTS) {
                this.getAssists(request);
                return Response.DELAYED_RESPONSE;
            }else if (requestName == EDIT_GET_AVAILABLE_REFACTORINGS) {
                return this._getAvailableRefactorings(request);
            }else if (requestName == EDIT_GET_FIXES) {
                this.getFixes(request);
                return Response.DELAYED_RESPONSE;
            }else if (requestName == EDIT_GET_REFACTORING) {
                return this._getRefactoring(request);
            }else if (requestName == EDIT_ORGANIZE_DIRECTIVES) {
                this.organizeDirectives(request);
                return Response.DELAYED_RESPONSE;
            }else if (requestName == EDIT_SORT_MEMBERS) {
                this.sortMembers(request);
                return Response.DELAYED_RESPONSE;
            }else if (requestName == EDIT_GET_STATEMENT_COMPLETION) {
                this.getStatementCompletion(request);
                return Response.DELAYED_RESPONSE;
            }
        } catch (__error__) {

            if (is(__error__,any)){
                let exception : any = __error__;
                return exception.response;
            }
        }
        return null;
    }
    organizeDirectives(request : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,request);
            let file : string = params.file;
            if (!lib3.AnalysisEngine.isDartFileName(file)) {
                server.sendResponse(new bare.createInstance(any,null,request,file));
                return;
            }
            let fileStamp : number;
            let code : string;
            let unit : any;
            let errors : core.DartList<any>;
            if (server.options.enableNewAnalysisDriver) {
                let result : any = await server.getAnalysisResult(file);
                if (op(Op.EQUALS,result,null)) {
                    server.sendResponse(new bare.createInstance(any,null,request,file));
                    return;
                }
                fileStamp = -1;
                code = result.content;
                unit = result.unit;
                errors = result.errors;
            }else {
                unit = await server.getResolvedCompilationUnit(file);
                if (op(Op.EQUALS,unit,null)) {
                    server.sendResponse(new bare.createInstance(any,null,request,file));
                    return;
                }
                let compilationUnitElement : any = resolutionMap.elementDeclaredByCompilationUnit(unit);
                let context : any = compilationUnitElement.context;
                let source : any = compilationUnitElement.source;
                errors = context.computeErrors(source);
                fileStamp = context.getModificationStamp(source);
                code = context.getContents(source).data;
            }
            let numScanParseErrors : number = EditDomainHandler._getNumberOfScanParseErrors(errors);
            if (numScanParseErrors != 0) {
                server.sendResponse(new bare.createInstance(any,null,request,`File has ${numScanParseErrors} scan/parse errors.`));
                return;
            }
            let sorter : any = new bare.createInstance(any,null,code,unit,errors);
            let edits : core.DartList<any> = sorter.organize();
            let fileEdit : any = new bare.createInstance(any,null,file,fileStamp,{
                edits : edits});
            server.sendResponse(new bare.createInstance(any,null,fileEdit).toResponse(request.id));
        } )());
    }

    sortMembers(request : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,request);
            let file : string = params.file;
            if (!lib3.AnalysisEngine.isDartFileName(file)) {
                server.sendResponse(new bare.createInstance(any,null,request));
                return;
            }
            let fileStamp : number;
            let code : string;
            let unit : any;
            let errors : core.DartList<any>;
            if (server.options.enableNewAnalysisDriver) {
                let driver : any = server.getAnalysisDriver(file);
                let result : any = await ((_19_)=>(!!_19_)?_19_.parseFile(file):null)(driver);
                if (op(Op.EQUALS,result,null)) {
                    server.sendResponse(new bare.createInstance(any,null,request,file));
                    return;
                }
                fileStamp = -1;
                code = result.content;
                unit = result.unit;
                errors = result.errors;
            }else {
                let contextSource : any = server.getContextSourcePair(file);
                let context : any = contextSource.context;
                let source : any = contextSource.source;
                if (op(Op.EQUALS,context,null) || op(Op.EQUALS,source,null)) {
                    server.sendResponse(new bare.createInstance(any,null,request));
                    return;
                }
                fileStamp = context.getModificationStamp(source);
                code = context.getContents(source).data;
                try {
                    unit = context.parseCompilationUnit(source);
                } catch (__error__) {

                    {
                        let e = __error__;
                        server.sendResponse(new bare.createInstance(any,null,request));
                        return;
                    }
                }
                errors = context.getErrors(source).errors;
            }
            let numScanParseErrors : number = EditDomainHandler._getNumberOfScanParseErrors(errors);
            if (numScanParseErrors != 0) {
                server.sendResponse(new bare.createInstance(any,null,request,numScanParseErrors));
                return;
            }
            let sorter : any = new bare.createInstance(any,null,code,unit);
            let edits : core.DartList<any> = sorter.sort();
            let fileEdit : any = new bare.createInstance(any,null,file,fileStamp,{
                edits : edits});
            server.sendResponse(new bare.createInstance(any,null,fileEdit).toResponse(request.id));
        } )());
    }

    _getAvailableRefactorings(request : any) : any {
        this._getAvailableRefactoringsImpl(request);
        return Response.DELAYED_RESPONSE;
    }
    _getAvailableRefactoringsImpl(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,request);
            let file : string = params.file;
            let offset : number = params.offset;
            let length : number = params.length;
            let kinds : core.DartList<any> = new core.DartList.literal<any>();
            if (length != 0) {
                kinds.add(RefactoringKind.EXTRACT_LOCAL_VARIABLE);
                kinds.add(RefactoringKind.EXTRACT_METHOD);
            }
            {
                let element : any = await server.getElementAtOffset(file,offset);
                if (element != null) {
                    if (is(element, any)) {
                        let refactoring : any = new bare.createInstance(any,null,this.searchEngine,server.getAstProvider(file),element);
                        let status : any = await refactoring.checkInitialConditions();
                        if (!status.hasFatalError) {
                            kinds.add(RefactoringKind.CONVERT_METHOD_TO_GETTER);
                        }
                    }
                    {
                        let renameRefactoring : any = new bare.createInstance(any,null,this.searchEngine,server.getAstProvider(file),element);
                        if (renameRefactoring != null) {
                            kinds.add(RefactoringKind.RENAME);
                        }
                    }
                }
            }
            let result = new bare.createInstance(any,null,kinds);
            server.sendResponse(result.toResponse(request.id));
        } )());
    }

    _getRefactoring(request : any) : any {
        if (this.refactoringManager.hasPendingRequest) {
            this.refactoringManager.cancel();
            this._newRefactoringManager();
        }
        this.refactoringManager.getRefactoring(request);
        return Response.DELAYED_RESPONSE;
    }
    _newRefactoringManager() : void {
        this.refactoringManager = new _RefactoringManager(server,this.searchEngine);
    }
    static _getNumberOfScanParseErrors(errors : core.DartList<any>) : number {
        let numScanParseErrors : number = 0;
        for(let error of errors) {
            if (is(error.errorCode, any) || is(error.errorCode, any)) {
                numScanParseErrors++;
            }
        }
        return numScanParseErrors;
    }
}

export namespace _DartAssistContextForValues {
    export type Constructors = '_DartAssistContextForValues';
    export type Interface = Omit<_DartAssistContextForValues, Constructors>;
}
@DartClass
@Implements(any)
export class _DartAssistContextForValues implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    source : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectionOffset : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectionLength : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    analysisDriver : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    astProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unit : any;

    constructor(source : any,selectionOffset : number,selectionLength : number,analysisDriver : any,astProvider : any,unit : any) {
    }
    @defaultConstructor
    _DartAssistContextForValues(source : any,selectionOffset : number,selectionLength : number,analysisDriver : any,astProvider : any,unit : any) {
        this.source = source;
        this.selectionOffset = selectionOffset;
        this.selectionLength = selectionLength;
        this.analysisDriver = analysisDriver;
        this.astProvider = astProvider;
        this.unit = unit;
    }
}

export namespace _DartFixContextImpl {
    export type Constructors = '_DartFixContextImpl';
    export type Interface = Omit<_DartFixContextImpl, Constructors>;
}
@DartClass
@Implements(any)
export class _DartFixContextImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resourceProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    analysisDriver : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    astProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unit : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    error : any;

    constructor(resourceProvider : any,analysisDriver : any,astProvider : any,unit : any,error : any) {
    }
    @defaultConstructor
    _DartFixContextImpl(resourceProvider : any,analysisDriver : any,astProvider : any,unit : any,error : any) {
        this.resourceProvider = resourceProvider;
        this.analysisDriver = analysisDriver;
        this.astProvider = astProvider;
        this.unit = unit;
        this.error = error;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get getTopLevelDeclarations() : any {
        return this.analysisDriver.getTopLevelNameDeclarations;
    }
}

export namespace _RefactoringManager {
    export type Constructors = '_RefactoringManager';
    export type Interface = Omit<_RefactoringManager, Constructors>;
}
@DartClass
export class _RefactoringManager {
    private static __$EMPTY_PROBLEM_LIST : core.DartList<any>;
    static get EMPTY_PROBLEM_LIST() : core.DartList<any> { 
        if (this.__$EMPTY_PROBLEM_LIST===undefined) {
            this.__$EMPTY_PROBLEM_LIST = new core.DartList.literal<any>();
        }
        return this.__$EMPTY_PROBLEM_LIST;
    }

    server : any;

    searchEngine : any;

    subscriptionToReset : async.DartStreamSubscription<any>;

    kind : any;

    file : string;

    offset : number;

    length : number;

    refactoring : any;

    feedback : any;

    initStatus : any;

    optionsStatus : any;

    finalStatus : any;

    request : any;

    result : any;

    constructor(server : any,searchEngine : any) {
    }
    @defaultConstructor
    _RefactoringManager(server : any,searchEngine : any) {
        this.server = server;
        this.searchEngine = searchEngine;
        this._reset();
    }
    get hasPendingRequest() : boolean {
        return this.request != null;
    }
    get _hasFatalError() : boolean {
        return this.initStatus.hasFatalError || this.optionsStatus.hasFatalError || this.finalStatus.hasFatalError;
    }
    get _requiresOptions() : boolean {
        return is(this.refactoring, any) || is(this.refactoring, any) || is(this.refactoring, any) || is(this.refactoring, any) || is(this.refactoring, any);
    }
    cancel() : void {
        if (this.request != null) {
            this.server.sendResponse(new bare.createInstance(any,null,this.request));
            this.request = null;
        }
        this._reset();
    }
    getRefactoring(_request : any) : void {
        this.request = _request;
        this.result = new bare.createInstance(any,null,_RefactoringManager.EMPTY_PROBLEM_LIST,_RefactoringManager.EMPTY_PROBLEM_LIST,_RefactoringManager.EMPTY_PROBLEM_LIST);
        let params = new bare.createInstance(any,null,_request);
        async.runZoned(() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            await this._init(params.kind,params.file,params.offset,params.length);
            if (this.initStatus.hasFatalError) {
                this.feedback = null;
                this._sendResultResponse();
                return;
            }
            if (this._requiresOptions) {
                if (op(Op.EQUALS,params.options,null)) {
                    this.optionsStatus = new bare.createInstance(any,null);
                    this._sendResultResponse();
                    return;
                }
                this.optionsStatus = this._setOptions(params);
                if (this._hasFatalError) {
                    this._sendResultResponse();
                    return;
                }
            }
            if (params.validateOnly) {
                this.finalStatus = new bare.createInstance(any,null);
                this._sendResultResponse();
                return;
            }
            if (properties.test_simulateRefactoringException_final) {
                throw 'A simulated refactoring exception - final.';
            }
            this.finalStatus = await this.refactoring.checkFinalConditions();
            this._checkForReset_afterFinalConditions();
            if (this._hasFatalError) {
                this._sendResultResponse();
                return;
            }
            if (properties.test_simulateRefactoringException_change) {
                throw 'A simulated refactoring exception - change.';
            }
            this.result.change = await this.refactoring.createChange();
            this.result.potentialEdits = nullIfEmpty(this.refactoring.potentialEditIds);
            this._checkForReset_afterCreateChange();
            this._sendResultResponse();
        })()),{
            onError : (exception : any,stackTrace : any) =>  {
                if (is(exception, _ResetError)) {
                    this.cancel();
                }else {
                    this.server.instrumentationService.logException(exception,stackTrace);
                    this.server.sendResponse(new bare.createInstance(any,null,_request,exception,stackTrace));
                }
                this._reset();
            }});
    }
    _analyzeForRefactoring(file : string,kind : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.server.options.enableNewAnalysisDriver) {
                return;
            }
            if (op(Op.EQUALS,kind,RefactoringKind.EXTRACT_LOCAL_VARIABLE) || op(Op.EQUALS,kind,RefactoringKind.INLINE_LOCAL_VARIABLE)) {
                let pair : any = this.server.getContextSourcePair(file);
                let context : any = pair.context;
                let source : any = pair.source;
                if (context != null && source != null) {
                    if (op(Op.EQUALS,context.computeResult(source,SOURCE_KIND),SourceKind.LIBRARY)) {
                        await context.computeResolvedCompilationUnitAsync(source,source);
                        return;
                    }
                }
            }
            await this.server.onAnalysisComplete;
        } )());
    }

    _checkForReset_afterCreateChange() : void {
        if (properties.test_simulateRefactoringReset_afterCreateChange) {
            this._reset();
        }
        if (op(Op.EQUALS,this.refactoring,null)) {
            throw new _ResetError();
        }
    }
    _checkForReset_afterFinalConditions() : void {
        if (properties.test_simulateRefactoringReset_afterFinalConditions) {
            this._reset();
        }
        if (op(Op.EQUALS,this.refactoring,null)) {
            throw new _ResetError();
        }
    }
    _checkForReset_afterInitialConditions() : void {
        if (properties.test_simulateRefactoringReset_afterInitialConditions) {
            this._reset();
        }
        if (op(Op.EQUALS,this.refactoring,null)) {
            throw new _ResetError();
        }
    }
    _init(kind : any,file : string,offset : number,length : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._analyzeForRefactoring(file,kind);
            if (op(Op.EQUALS,this.kind,kind) && this.file == file && this.offset == offset && this.length == length) {
                return;
            }
            this._reset();
            this.kind = kind;
            this.file = file;
            this.offset = offset;
            this.length = length;
            if (properties.test_simulateRefactoringException_init) {
                throw 'A simulated refactoring exception - init.';
            }
            if (op(Op.EQUALS,kind,RefactoringKind.CONVERT_GETTER_TO_METHOD)) {
                let element : any = await this.server.getElementAtOffset(file,offset);
                if (element != null) {
                    if (is(element, any)) {
                        this._resetOnAnalysisStarted();
                        this.refactoring = new bare.createInstance(any,null,this.searchEngine,this.server.getAstProvider(file),element);
                    }
                }
            }
            if (op(Op.EQUALS,kind,RefactoringKind.CONVERT_METHOD_TO_GETTER)) {
                let element : any = await this.server.getElementAtOffset(file,offset);
                if (element != null) {
                    if (is(element, any)) {
                        this._resetOnAnalysisStarted();
                        this.refactoring = new bare.createInstance(any,null,this.searchEngine,this.server.getAstProvider(file),element);
                    }
                }
            }
            if (op(Op.EQUALS,kind,RefactoringKind.EXTRACT_LOCAL_VARIABLE)) {
                let unit : any = await this.server.getResolvedCompilationUnit(file);
                if (unit != null) {
                    this._resetOnFileResolutionChanged(file);
                    this.refactoring = new bare.createInstance(any,null,unit,offset,length);
                    this.feedback = new bare.createInstance(any,null,new core.DartList.literal<string>(),new core.DartList.literal<number>(),new core.DartList.literal<number>(),{
                        coveringExpressionOffsets : new core.DartList.literal<number>(),coveringExpressionLengths : new core.DartList.literal<number>()});
                }
            }
            if (op(Op.EQUALS,kind,RefactoringKind.EXTRACT_METHOD)) {
                let unit : any = await this.server.getResolvedCompilationUnit(file);
                if (unit != null) {
                    this._resetOnAnalysisStarted();
                    this.refactoring = new bare.createInstance(any,null,this.searchEngine,unit,offset,length);
                    this.feedback = new bare.createInstance(any,null,offset,length,'',new core.DartList.literal<string>(),false,new core.DartList.literal<any>(),new core.DartList.literal<number>(),new core.DartList.literal<number>());
                }
            }
            if (op(Op.EQUALS,kind,RefactoringKind.INLINE_LOCAL_VARIABLE)) {
                let unit : any = await this.server.getResolvedCompilationUnit(file);
                if (unit != null) {
                    this._resetOnFileResolutionChanged(file);
                    this.refactoring = new bare.createInstance(any,null,this.searchEngine,this.server.getAstProvider(file),unit,offset);
                }
            }
            if (op(Op.EQUALS,kind,RefactoringKind.INLINE_METHOD)) {
                let unit : any = await this.server.getResolvedCompilationUnit(file);
                if (unit != null) {
                    this._resetOnAnalysisStarted();
                    this.refactoring = new bare.createInstance(any,null,this.searchEngine,this.server.getAstProvider(file),unit,offset);
                }
            }
            if (op(Op.EQUALS,kind,RefactoringKind.MOVE_FILE)) {
                this._resetOnAnalysisStarted();
                let contextSource : any = this.server.getContextSourcePair(file);
                let context : any = contextSource.context;
                let source : any = contextSource.source;
                this.refactoring = new bare.createInstance(any,null,this.server.resourceProvider,this.searchEngine,context,source,file);
            }
            if (op(Op.EQUALS,kind,RefactoringKind.RENAME)) {
                let node : any = await this.server.getNodeAtOffset(file,offset);
                let element : any = this.server.getElementOfNode(node);
                if (node != null && element != null) {
                    if (is(element, any)) {
                        element = (element as any).field;
                    }
                    if (is(node.parent, any) && is(node.parent.parent, any)) {
                        let constructor : any = node.parent.parent;
                        node = constructor;
                        element = constructor.staticElement;
                    }
                    this._resetOnAnalysisStarted();
                    this.refactoring = new bare.createInstance(any,null,this.searchEngine,this.server.getAstProvider(file),element);
                    this.feedback = new bare.createInstance(any,null,node.offset,node.length,'kind','oldName');
                }
            }
            if (op(Op.EQUALS,this.refactoring,null)) {
                this.initStatus = new bare.createInstance(any,null,'Unable to create a refactoring');
                return;
            }
            this.initStatus = await this.refactoring.checkInitialConditions();
            this._checkForReset_afterInitialConditions();
            if (is(this.refactoring, any)) {
                let refactoring : any = this.refactoring;
                let feedback : any = this.feedback;
                feedback.names = refactoring.names;
                feedback.offsets = refactoring.offsets;
                feedback.lengths = refactoring.lengths;
                feedback.coveringExpressionOffsets = refactoring.coveringExpressionOffsets;
                feedback.coveringExpressionLengths = refactoring.coveringExpressionLengths;
            }
            if (is(this.refactoring, any)) {
                let refactoring : any = this.refactoring;
                let feedback : any = this.feedback;
                feedback.canCreateGetter = refactoring.canCreateGetter;
                feedback.returnType = refactoring.returnType;
                feedback.names = refactoring.names;
                feedback.parameters = refactoring.parameters;
                feedback.offsets = refactoring.offsets;
                feedback.lengths = refactoring.lengths;
            }
            if (is(this.refactoring, any)) {
                let refactoring : any = this.refactoring;
                if (!this.initStatus.hasFatalError) {
                    this.feedback = new bare.createInstance(any,null,refactoring.variableName,refactoring.referenceCount);
                }
            }
            if (is(this.refactoring, any)) {
                let refactoring : any = this.refactoring;
                if (!this.initStatus.hasFatalError) {
                    this.feedback = new bare.createInstance(any,null,refactoring.methodName,refactoring.isDeclaration,{
                        className : refactoring.className});
                }
            }
            if (is(this.refactoring, any)) {
                let refactoring : any = this.refactoring;
                let feedback : any = this.feedback;
                feedback.elementKindName = refactoring.elementKindName;
                feedback.oldName = refactoring.oldName;
            }
        } )());
    }

    _reset() : void {
        properties.test_resetCount++;
        this.kind = null;
        this.offset = null;
        this.length = null;
        this.refactoring = null;
        this.feedback = null;
        this.initStatus = new bare.createInstance(any,null);
        this.optionsStatus = new bare.createInstance(any,null);
        this.finalStatus = new bare.createInstance(any,null);
        ((_20_)=>(!!_20_)?_20_.cancel():null)(this.subscriptionToReset);
        this.subscriptionToReset = null;
    }
    _resetOnAnalysisStarted() : void {
        ((_21_)=>(!!_21_)?_21_.cancel():null)(this.subscriptionToReset);
        this.subscriptionToReset = this.server.onAnalysisStarted.listen((_ : any) =>  {
            return this._reset();
        });
    }
    _resetOnFileResolutionChanged(file : string) : void {
        if (this.server.options.enableNewAnalysisDriver) {
            return;
        }
        ((_22_)=>(!!_22_)?_22_.cancel():null)(this.subscriptionToReset);
        this.subscriptionToReset = ((_23_)=>(!!_23_)?_23_.listen((event : any) =>  {
            let targetSource : any = event.target.source;
            if (op(Op.EQUALS,((t)=>(!!t)?t.fullName:null)(targetSource),file)) {
                this._reset();
            }
        }):null)(((_24_)=>(!!_24_)?_24_.onResultChanged(RESOLVED_UNIT):null)(this.server.getAnalysisContext(file)));
    }
    _sendResultResponse() : void {
        if (op(Op.EQUALS,this.request,null)) {
            return;
        }
        this.result.feedback = this.feedback;
        this.result.initialProblems = this.initStatus.problems;
        this.result.optionsProblems = this.optionsStatus.problems;
        this.result.finalProblems = this.finalStatus.problems;
        this.server.sendResponse(this.result.toResponse(this.request.id));
        this.request = null;
        this.result = null;
    }
    _setOptions(params : any) : any {
        if (is(this.refactoring, any)) {
            let extractRefactoring : any = this.refactoring;
            let extractOptions : any = params.options;
            extractRefactoring.name = extractOptions.name;
            extractRefactoring.extractAll = extractOptions.extractAll;
            return extractRefactoring.checkName();
        }
        if (is(this.refactoring, any)) {
            let extractRefactoring : any = this.refactoring;
            let extractOptions : any = params.options;
            extractRefactoring.createGetter = extractOptions.createGetter;
            extractRefactoring.extractAll = extractOptions.extractAll;
            extractRefactoring.name = extractOptions.name;
            if (extractOptions.parameters != null) {
                extractRefactoring.parameters = extractOptions.parameters;
            }
            extractRefactoring.returnType = extractOptions.returnType;
            return extractRefactoring.checkName();
        }
        if (is(this.refactoring, any)) {
            let inlineRefactoring : any = this.refactoring;
            let inlineOptions : any = params.options;
            inlineRefactoring.deleteSource = inlineOptions.deleteSource;
            inlineRefactoring.inlineAll = inlineOptions.inlineAll;
            return new bare.createInstance(any,null);
        }
        if (is(this.refactoring, any)) {
            let moveRefactoring : any = this.refactoring;
            let moveOptions : any = params.options;
            moveRefactoring.newFile = moveOptions.newFile;
            return new bare.createInstance(any,null);
        }
        if (is(this.refactoring, any)) {
            let renameRefactoring : any = this.refactoring;
            let renameOptions : any = params.options;
            renameRefactoring.newName = renameOptions.newName;
            return renameRefactoring.checkNewName();
        }
        return new bare.createInstance(any,null);
    }
}

export namespace _ResetError {
    export type Constructors = '_ResetError';
    export type Interface = Omit<_ResetError, Constructors>;
}
@DartClass
export class _ResetError {
    constructor() {
    }
    @defaultConstructor
    _ResetError() {
    }
}

export class properties {
    private static __$test_resetCount : number;
    static get test_resetCount() : number { 
        if (this.__$test_resetCount===undefined) {
            this.__$test_resetCount = 0;
        }
        return this.__$test_resetCount;
    }
    static set test_resetCount(__$value : number)  { 
        this.__$test_resetCount = __$value;
    }

    private static __$test_simulateRefactoringException_change : boolean;
    static get test_simulateRefactoringException_change() : boolean { 
        if (this.__$test_simulateRefactoringException_change===undefined) {
            this.__$test_simulateRefactoringException_change = false;
        }
        return this.__$test_simulateRefactoringException_change;
    }
    static set test_simulateRefactoringException_change(__$value : boolean)  { 
        this.__$test_simulateRefactoringException_change = __$value;
    }

    private static __$test_simulateRefactoringException_final : boolean;
    static get test_simulateRefactoringException_final() : boolean { 
        if (this.__$test_simulateRefactoringException_final===undefined) {
            this.__$test_simulateRefactoringException_final = false;
        }
        return this.__$test_simulateRefactoringException_final;
    }
    static set test_simulateRefactoringException_final(__$value : boolean)  { 
        this.__$test_simulateRefactoringException_final = __$value;
    }

    private static __$test_simulateRefactoringException_init : boolean;
    static get test_simulateRefactoringException_init() : boolean { 
        if (this.__$test_simulateRefactoringException_init===undefined) {
            this.__$test_simulateRefactoringException_init = false;
        }
        return this.__$test_simulateRefactoringException_init;
    }
    static set test_simulateRefactoringException_init(__$value : boolean)  { 
        this.__$test_simulateRefactoringException_init = __$value;
    }

    private static __$test_simulateRefactoringReset_afterCreateChange : boolean;
    static get test_simulateRefactoringReset_afterCreateChange() : boolean { 
        if (this.__$test_simulateRefactoringReset_afterCreateChange===undefined) {
            this.__$test_simulateRefactoringReset_afterCreateChange = false;
        }
        return this.__$test_simulateRefactoringReset_afterCreateChange;
    }
    static set test_simulateRefactoringReset_afterCreateChange(__$value : boolean)  { 
        this.__$test_simulateRefactoringReset_afterCreateChange = __$value;
    }

    private static __$test_simulateRefactoringReset_afterFinalConditions : boolean;
    static get test_simulateRefactoringReset_afterFinalConditions() : boolean { 
        if (this.__$test_simulateRefactoringReset_afterFinalConditions===undefined) {
            this.__$test_simulateRefactoringReset_afterFinalConditions = false;
        }
        return this.__$test_simulateRefactoringReset_afterFinalConditions;
    }
    static set test_simulateRefactoringReset_afterFinalConditions(__$value : boolean)  { 
        this.__$test_simulateRefactoringReset_afterFinalConditions = __$value;
    }

    private static __$test_simulateRefactoringReset_afterInitialConditions : boolean;
    static get test_simulateRefactoringReset_afterInitialConditions() : boolean { 
        if (this.__$test_simulateRefactoringReset_afterInitialConditions===undefined) {
            this.__$test_simulateRefactoringReset_afterInitialConditions = false;
        }
        return this.__$test_simulateRefactoringReset_afterInitialConditions;
    }
    static set test_simulateRefactoringReset_afterInitialConditions(__$value : boolean)  { 
        this.__$test_simulateRefactoringReset_afterInitialConditions = __$value;
    }

}
