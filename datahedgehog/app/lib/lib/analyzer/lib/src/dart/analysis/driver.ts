/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/driver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as collection from "@dart2ts/dart/core";
import * as lib5 from "@dart2ts.packages/analyzer/lib/src/lint/registry";
import * as lib6 from "@dart2ts/dart/uri";

export namespace AnalysisDriver {
    export type Constructors = 'AnalysisDriver';
    export type Interface = Omit<AnalysisDriver, Constructors>;
}
@DartClass
@Implements(AnalysisDriverGeneric)
export class AnalysisDriver implements AnalysisDriverGeneric.Interface {
    private static __$DATA_VERSION : number;
    static get DATA_VERSION() : number { 
        if (this.__$DATA_VERSION===undefined) {
            this.__$DATA_VERSION = 34;
        }
        return this.__$DATA_VERSION;
    }

    private static __$allowedNumberOfContextsToWrite : number;
    static get allowedNumberOfContextsToWrite() : number { 
        if (this.__$allowedNumberOfContextsToWrite===undefined) {
            this.__$allowedNumberOfContextsToWrite = 10;
        }
        return this.__$allowedNumberOfContextsToWrite;
    }
    static set allowedNumberOfContextsToWrite(__$value : number)  { 
        this.__$allowedNumberOfContextsToWrite = __$value;
    }

    _scheduler : AnalysisDriverScheduler;

    _logger : any;

    _resourceProvider : any;

    _byteStore : any;

    _externalSummaries : any;

    _contentOverlay : any;

    _analysisOptions : any;

    _sdkBundle : any;

    _sourceFactory : any;

    declaredVariables : any;

    contextRoot : any;

    _salt : typed_data.Uint32List;

    _priorityFiles;

    _requestedFiles;

    _definingClassMemberNameTasks;

    _referencingNameTasks;

    _topLevelNameDeclarationsTasks;

    _indexRequestedFiles;

    _unitElementSignatureRequests;

    _unitElementRequestedFiles;

    _requestedParts;

    _partsToAnalyze;

    _resultController;

    _onResults : async.DartStream<AnalysisResult>;

    _lastProducedSignatures : core.DartMap<string,string>;

    _priorityResults : core.DartMap<string,AnalysisResult>;

    _exceptionController : async.DartStreamController<ExceptionResult>;

    _search : any;

    _testView : AnalysisDriverTestView;

    _fsState : any;

    _fileTracker : any;

    disableChangesAndCacheAllResults : boolean;

    _allCachedResults : core.DartMap<string,AnalysisResult>;

    constructor(_scheduler : AnalysisDriverScheduler,logger : any,_resourceProvider : any,_byteStore : any,_contentOverlay : any,contextRoot : any,sourceFactory : any,_analysisOptions : any,_namedArguments? : {sdkBundle? : any,disableChangesAndCacheAllResults? : boolean,externalSummaries? : any}) {
    }
    @defaultConstructor
    AnalysisDriver(_scheduler : AnalysisDriverScheduler,logger : any,_resourceProvider : any,_byteStore : any,_contentOverlay : any,contextRoot : any,sourceFactory : any,_analysisOptions : any,_namedArguments? : {sdkBundle? : any,disableChangesAndCacheAllResults? : boolean,externalSummaries? : any}) {
        let {sdkBundle,disableChangesAndCacheAllResults,externalSummaries} = Object.assign({
            "disableChangesAndCacheAllResults" : false}, _namedArguments );
        this.declaredVariables = new bare.createInstance(any,null);
        this._salt = new typed_data.Uint32List(1 + AnalysisOptions.signatureLength);
        this._priorityFiles = new core.DartLinkedHashSet<string>();
        this._requestedFiles = new core.DartMap.literal([
        ]);
        this._definingClassMemberNameTasks = new core.DartList.literal<_FilesDefiningClassMemberNameTask>();
        this._referencingNameTasks = new core.DartList.literal<_FilesReferencingNameTask>();
        this._topLevelNameDeclarationsTasks = new core.DartList.literal<_TopLevelNameDeclarationsTask>();
        this._indexRequestedFiles = new core.DartMap.literal([
        ]);
        this._unitElementSignatureRequests = new core.DartMap.literal([
        ]);
        this._unitElementRequestedFiles = new core.DartMap.literal([
        ]);
        this._requestedParts = new core.DartMap.literal([
        ]);
        this._partsToAnalyze = new core.DartLinkedHashSet<string>();
        this._resultController = new async.DartStreamController<AnalysisResult>();
        this._lastProducedSignatures = new core.DartMap.literal([
        ]);
        this._priorityResults = new core.DartMap.literal([
        ]);
        this._exceptionController = new async.DartStreamController<ExceptionResult>();
        this._allCachedResults = new core.DartMap.literal([
        ]);
        this._logger = logger;
        this._sourceFactory = sourceFactory.clone();
        this._sdkBundle = sdkBundle;
        this._externalSummaries = externalSummaries;
        this._scheduler = _scheduler;
        this._resourceProvider = _resourceProvider;
        this._byteStore = _byteStore;
        this._contentOverlay = _contentOverlay;
        this.contextRoot = contextRoot;
        this._analysisOptions = _analysisOptions;
        this.disableChangesAndCacheAllResults = disableChangesAndCacheAllResults;
        this._onResults = this._resultController.stream.asBroadcastStream();
        this._testView = new AnalysisDriverTestView(this);
        this._createFileTracker();
        this._scheduler.add(this);
        this._search = new bare.createInstance(any,null,this);
    }
    get addedFiles() : core.DartSet<string> {
        return this._fileTracker.addedFiles;
    }
    get analysisOptions() : any {
        return this._analysisOptions;
    }
    get exceptions() : async.DartStream<ExceptionResult> {
        return this._exceptionController.stream;
    }
    get fsState() : any {
        return this._fsState;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasFilesToAnalyze() : boolean {
        return this._fileTracker.hasChangedFiles || this._requestedFiles.isNotEmpty || this._requestedParts.isNotEmpty || this._fileTracker.hasPendingFiles || this._partsToAnalyze.isNotEmpty;
    }
    get knownFiles() : core.DartSet<string> {
        return this._fsState.knownFilePaths;
    }
    get name() : string {
        return (((t)=>(!!t)?t.root:null)(this.contextRoot) || '');
    }
    get numberOfFilesToAnalyze() : number {
        return this._fileTracker.numberOfPendingFiles;
    }
    get priorityFiles() : core.DartList<string> {
        return this._priorityFiles.toList({
            growable : false});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set priorityFiles(priorityPaths : core.DartList<string>) {
        this._priorityResults.keys.toSet().difference(priorityPaths.toSet()).forEach(this._priorityResults.remove.bind(this._priorityResults));
        this._priorityFiles.clear();
        this._priorityFiles.addAll(priorityPaths);
        this._scheduler.notify(this);
    }
    get results() : async.DartStream<AnalysisResult> {
        return this._onResults;
    }
    get search() : any {
        return this._search;
    }
    get sourceFactory() : any {
        return this._sourceFactory;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    get test() : AnalysisDriverTestView {
        return this._testView;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get workPriority() : AnalysisDriverPriority {
        if (this._requestedFiles.isNotEmpty) {
            return AnalysisDriverPriority.interactive;
        }
        if (this._definingClassMemberNameTasks.isNotEmpty || this._referencingNameTasks.isNotEmpty) {
            return AnalysisDriverPriority.interactive;
        }
        if (this._indexRequestedFiles.isNotEmpty) {
            return AnalysisDriverPriority.interactive;
        }
        if (this._unitElementSignatureRequests.isNotEmpty) {
            return AnalysisDriverPriority.interactive;
        }
        if (this._unitElementRequestedFiles.isNotEmpty) {
            return AnalysisDriverPriority.interactive;
        }
        if (this._topLevelNameDeclarationsTasks.isNotEmpty) {
            return AnalysisDriverPriority.interactive;
        }
        if (this._priorityFiles.isNotEmpty) {
            for(let path of this._priorityFiles) {
                if (this._fileTracker.isFilePending(path)) {
                    return AnalysisDriverPriority.priority;
                }
            }
        }
        if (this._fileTracker.hasChangedFiles) {
            return AnalysisDriverPriority.changedFiles;
        }
        if (this._fileTracker.hasPendingChangedFiles) {
            return AnalysisDriverPriority.generalChanged;
        }
        if (this._fileTracker.hasPendingImportFiles) {
            return AnalysisDriverPriority.generalImportChanged;
        }
        if (this._fileTracker.hasPendingErrorFiles) {
            return AnalysisDriverPriority.generalWithErrors;
        }
        if (this._fileTracker.hasPendingFiles) {
            return AnalysisDriverPriority.general;
        }
        if (this._requestedParts.isNotEmpty || this._partsToAnalyze.isNotEmpty) {
            return AnalysisDriverPriority.general;
        }
        return AnalysisDriverPriority.nothing;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addFile(path : string) : void {
        if (!this._fsState.hasUri(path)) {
            return;
        }
        if (AnalysisEngine.isDartFileName(path)) {
            this._fileTracker.addFile(path);
        }
    }
    changeFile(path : string) : void {
        this._throwIfChangesAreNotAllowed();
        this._fileTracker.changeFile(path);
        this._priorityResults.clear();
    }
    configure(_namedArguments? : {analysisOptions? : any,sourceFactory? : any}) : void {
        let {analysisOptions,sourceFactory} = Object.assign({
        }, _namedArguments );
        if (analysisOptions != null) {
            this._analysisOptions = analysisOptions;
        }
        if (sourceFactory != null) {
            this._sourceFactory = sourceFactory;
        }
        let addedFiles : core.DartIterable<string> = this._fileTracker.addedFiles;
        this._createFileTracker();
        this._fileTracker.addFiles(addedFiles);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : void {
        this._scheduler.remove(this);
    }
    getErrors(path : string) : async.Future<ErrorsResult> { 
        return new async.Future.fromPromise(( async () =>  {
            let analysisResult : AnalysisResult = this._computeAnalysisResult(path);
            analysisResult = ( analysisResult ) || ( await this.getResult(path) );
            if (op(Op.EQUALS,analysisResult,null)) {
                return null;
            }
            return new ErrorsResult(path,analysisResult.uri,analysisResult.lineInfo,analysisResult.errors);
        } )());
    }

    getFilesDefiningClassMemberName(name : string) : async.Future<core.DartList<string>> {
        let task = new _FilesDefiningClassMemberNameTask(this,name);
        this._definingClassMemberNameTasks.add(task);
        this._scheduler.notify(this);
        return task.completer.future;
    }
    getFilesReferencingName(name : string) : async.Future<core.DartList<string>> {
        let task = new _FilesReferencingNameTask(this,name);
        this._referencingNameTasks.add(task);
        this._scheduler.notify(this);
        return task.completer.future;
    }
    getIndex(path : string) : async.Future<any> {
        if (!this._fsState.hasUri(path)) {
            return new async.Future.value();
        }
        let completer = new async.DartCompleter<any>();
        this._indexRequestedFiles.putIfAbsent(path,() =>  {
            return new core.DartList.literal<async.DartCompleter<any>>();
        }).add(completer);
        this._scheduler.notify(this);
        return completer.future;
    }
    getLibraryByUri(uri : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this._externalSummaries != null && this._externalSummaries.hasUnlinkedUnit(uri)) {
                return LibraryContext.resynthesizeLibraryElement(this.analysisOptions,this.declaredVariables,this.sourceFactory,this._externalSummaries,uri);
            }
            let source : any = this.sourceFactory.resolveUri(null,uri);
            let unitResult : UnitElementResult = await this.getUnitElement(source.fullName);
            return unitResult.element.library;
        } )());
    }

    getResolvedUnitKeyByPath(path : string) : any {
        let signature : any = this.getUnitKeyByPath(path);
        let file = this.fsState.getFileForPath(path);
        signature.addString(file.contentHash);
        return signature;
    }
    getResult(path : string) : async.Future<AnalysisResult> {
        if (!this._fsState.hasUri(path)) {
            return new async.Future.value();
        }
        {
            let result : AnalysisResult = this._priorityResults.get(path);
            if (this.disableChangesAndCacheAllResults) {
                result = ( result ) || ( this._allCachedResults.get(path) );
            }
            if (result != null) {
                return new async.Future.value(result);
            }
        }
        let completer = new async.DartCompleter<AnalysisResult>();
        this._requestedFiles.putIfAbsent(path,() =>  {
            return new core.DartList.literal<async.DartCompleter<AnalysisResult>>();
        }).add(completer);
        this._scheduler.notify(this);
        return completer.future;
    }
    getSourceKind(path : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (AnalysisEngine.isDartFileName(path)) {
                let file : any = this._fsState.getFileForPath(path);
                return file.isPart ? SourceKind.PART : SourceKind.LIBRARY;
            }
            return null;
        } )());
    }

    getTopLevelNameDeclarations(name : string) : async.Future<core.DartList<any>> {
        let task = new _TopLevelNameDeclarationsTask(this,name);
        this._topLevelNameDeclarationsTasks.add(task);
        this._scheduler.notify(this);
        return task.completer.future;
    }
    getUnitElement(path : string) : async.Future<UnitElementResult> {
        if (!this._fsState.hasUri(path)) {
            return new async.Future.value();
        }
        let completer = new async.DartCompleter<UnitElementResult>();
        this._unitElementRequestedFiles.putIfAbsent(path,() =>  {
            return new core.DartList.literal<async.DartCompleter<UnitElementResult>>();
        }).add(completer);
        this._scheduler.notify(this);
        return completer.future;
    }
    getUnitElementSignature(path : string) : async.Future<string> {
        if (!this._fsState.hasUri(path)) {
            return new async.Future.value();
        }
        let completer = new async.DartCompleter<string>();
        this._unitElementSignatureRequests.putIfAbsent(path,() =>  {
            return new core.DartList.literal<async.DartCompleter<string>>();
        }).add(completer);
        this._scheduler.notify(this);
        return completer.future;
    }
    getUnitKeyByPath(path : string) : any {
        let file = this.fsState.getFileForPath(path);
        let signature : any = new bare.createInstance(any,null);
        signature.addUint32List(this._salt);
        signature.addString(file.transitiveSignature);
        return signature;
    }
    parseFile(path : string) : async.Future<ParseResult> { 
        return new async.Future.fromPromise(( async () =>  {
            let file : any = this._fileTracker.verifyApiSignature(path);
            let listener : any = new bare.createInstance(any,null);
            let unit : any = file.parse(listener);
            return new ParseResult(file.path,file.uri,file.content,unit.lineInfo,unit,listener.errors);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performWork() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this._fileTracker.verifyChangedFilesIfNeeded()) {
                return;
            }
            if (this._requestedFiles.isNotEmpty) {
                let path : string = this._requestedFiles.keys.first;
                try {
                    let result : AnalysisResult = this._computeAnalysisResult(path,{
                        withUnit : true});
                    if (op(Op.EQUALS,result,null)) {
                        this._requestedParts.putIfAbsent(path,() =>  {
                            return new core.DartList.literal();
                        }).addAll(this._requestedFiles.remove(path));
                        return;
                    }
                    this._requestedFiles.remove(path).forEach((completer : any) =>  {
                        completer.complete(result);
                    });
                    this._fileTracker.fileWasAnalyzed(path);
                    this._resultController.add(result);
                } catch (__error__) {

                    {
                        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let exception = __error__;
                        this._fileTracker.fileWasAnalyzed(path);
                        this._requestedFiles.remove(path).forEach((completer : any) =>  {
                            completer.completeError(exception,stackTrace);
                        });
                    }
                }
                return;
            }
            if (this._indexRequestedFiles.isNotEmpty) {
                let path : string = this._indexRequestedFiles.keys.first;
                let index : any = this._computeIndex(path);
                this._indexRequestedFiles.remove(path).forEach((completer : any) =>  {
                    completer.complete(index);
                });
                return;
            }
            if (this._unitElementSignatureRequests.isNotEmpty) {
                let path : string = this._unitElementSignatureRequests.keys.first;
                let signature : string = this._computeUnitElementSignature(path);
                this._unitElementSignatureRequests.remove(path).forEach((completer : any) =>  {
                    completer.complete(signature);
                });
                return;
            }
            if (this._unitElementRequestedFiles.isNotEmpty) {
                let path : string = this._unitElementRequestedFiles.keys.first;
                let result : UnitElementResult = this._computeUnitElement(path);
                this._unitElementRequestedFiles.remove(path).forEach((completer : any) =>  {
                    completer.complete(result);
                });
                return;
            }
            if (this._definingClassMemberNameTasks.isNotEmpty) {
                let task : _FilesDefiningClassMemberNameTask = this._definingClassMemberNameTasks.first;
                let isDone : boolean = await task.perform();
                if (isDone) {
                    this._definingClassMemberNameTasks.remove(task);
                }
                return;
            }
            if (this._referencingNameTasks.isNotEmpty) {
                let task : _FilesReferencingNameTask = this._referencingNameTasks.first;
                let isDone : boolean = await task.perform();
                if (isDone) {
                    this._referencingNameTasks.remove(task);
                }
                return;
            }
            if (this._topLevelNameDeclarationsTasks.isNotEmpty) {
                let task : _TopLevelNameDeclarationsTask = this._topLevelNameDeclarationsTasks.first;
                let isDone : boolean = await task.perform();
                if (isDone) {
                    this._topLevelNameDeclarationsTasks.remove(task);
                }
                return;
            }
            if (this._priorityFiles.isNotEmpty) {
                for(let path of this._priorityFiles) {
                    if (this._fileTracker.isFilePending(path)) {
                        try {
                            let result : AnalysisResult = this._computeAnalysisResult(path,{
                                withUnit : true});
                            if (op(Op.EQUALS,result,null)) {
                                this._partsToAnalyze.add(path);
                            }else {
                                this._resultController.add(result);
                            }
                        } catch (__error__) {

                            {
                                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                                let exception = __error__;
                                this._reportException(path,exception,stackTrace);
                            }
                        } finally {
                            this._fileTracker.fileWasAnalyzed(path);
                        }
                        return;
                    }
                }
            }
            if (this._fileTracker.hasPendingFiles) {
                let path : string = this._fileTracker.anyPendingFile;
                try {
                    let result : AnalysisResult = this._computeAnalysisResult(path,{
                        withUnit : false,skipIfSameSignature : true});
                    if (op(Op.EQUALS,result,null)) {
                        this._partsToAnalyze.add(path);
                    }else if (op(Op.EQUALS,result,AnalysisResult._UNCHANGED)) {
                    }else {
                        this._resultController.add(result);
                        this._lastProducedSignatures.set(result.path,result._signature);
                    }
                } catch (__error__) {

                    {
                        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let exception = __error__;
                        this._reportException(path,exception,stackTrace);
                    }
                } finally {
                    this._fileTracker.fileWasAnalyzed(path);
                }
                return;
            }
            if (this._requestedParts.isNotEmpty) {
                let path : string = this._requestedParts.keys.first;
                try {
                    let result : AnalysisResult = this._computeAnalysisResult(path,{
                        withUnit : true,asIsIfPartWithoutLibrary : true});
                    this._requestedParts.remove(path).forEach((completer : any) =>  {
                        completer.complete(result);
                    });
                    this._partsToAnalyze.remove(path);
                    this._resultController.add(result);
                } catch (__error__) {

                    {
                        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let exception = __error__;
                        this._partsToAnalyze.remove(path);
                        this._requestedParts.remove(path).forEach((completer : any) =>  {
                            completer.completeError(exception,stackTrace);
                        });
                    }
                }
                return;
            }
            if (this._partsToAnalyze.isNotEmpty) {
                let path : string = this._partsToAnalyze.first;
                this._partsToAnalyze.remove(path);
                try {
                    let result : AnalysisResult = this._computeAnalysisResult(path,{
                        withUnit : this._priorityFiles.contains(path),asIsIfPartWithoutLibrary : true});
                    this._resultController.add(result);
                } catch (__error__) {

                    {
                        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let exception = __error__;
                        this._reportException(path,exception,stackTrace);
                    }
                }
                return;
            }
        } )());
    }

    removeFile(path : string) : void {
        this._throwIfChangesAreNotAllowed();
        this._fileTracker.removeFile(path);
        this._priorityResults.clear();
    }
    _changeHook() : void {
        this._priorityResults.clear();
        this._scheduler.notify(this);
    }
    _computeAnalysisResult(path : string,_namedArguments? : {withUnit? : boolean,asIsIfPartWithoutLibrary? : boolean,skipIfSameSignature? : boolean}) : AnalysisResult {
        let {withUnit,asIsIfPartWithoutLibrary,skipIfSameSignature} = Object.assign({
            "withUnit" : false,
            "asIsIfPartWithoutLibrary" : false,
            "skipIfSameSignature" : false}, _namedArguments );
        let file : any = this._fsState.getFileForPath(path);
        let library : any = file.isPart ? file.library : file;
        if (op(Op.EQUALS,library,null)) {
            if (asIsIfPartWithoutLibrary) {
                library = file;
            }else {
                return null;
            }
        }
        let signature : string = this._getResolvedUnitSignature(library,file);
        let key : string = this._getResolvedUnitKey(signature);
        if (skipIfSameSignature) {
            /* TODO (AssertStatementImpl) : assert (!withUnit); */;
            if (this._lastProducedSignatures.get(path) == signature) {
                return AnalysisResult._UNCHANGED;
            }
        }
        if (!withUnit) {
            let bytes : core.DartList<number> = this._byteStore.get(key);
            if (bytes != null) {
                return this._getAnalysisResultFromBytes(file,signature,bytes);
            }
        }
        return this._logger.run(`Compute analysis result for ${path}`,() =>  {
            try {
                let libraryContext : any = this._createLibraryContext(library);
                try {
                    this._testView.numOfAnalyzedLibraries++;
                    let analyzer : any = new bare.createInstance(any,null,this.analysisOptions,this.declaredVariables,this.sourceFactory,this._fsState,libraryContext.store,library);
                    let results : core.DartMap<any,any> = analyzer.analyze();
                    let bytes : core.DartList<number>;
                    let resolvedUnit : any;
                    for(let unitFile of results.keys) {
                        let unitResult : any = results.get(unitFile);
                        let unitBytes : core.DartList<number> = this._serializeResolvedUnit(unitResult.unit,unitResult.errors);
                        let unitSignature : string = this._getResolvedUnitSignature(library,unitFile);
                        let unitKey : string = this._getResolvedUnitKey(unitSignature);
                        this._byteStore.put(unitKey,unitBytes);
                        if (op(Op.EQUALS,unitFile,file)) {
                            bytes = unitBytes;
                            resolvedUnit = unitResult.unit;
                        }
                        if (this.disableChangesAndCacheAllResults) {
                            let result : AnalysisResult = this._getAnalysisResultFromBytes(unitFile,unitSignature,unitBytes,{
                                content : unitFile.content,resolvedUnit : unitResult.unit});
                            this._allCachedResults.set(unitFile.path,result);
                        }
                    }
                    this._logger.writeln('Computed new analysis result.');
                    let result : AnalysisResult = this._getAnalysisResultFromBytes(file,signature,bytes,{
                        content : withUnit ? file.content : null,resolvedUnit : withUnit ? resolvedUnit : null});
                    if (withUnit && this._priorityFiles.contains(path)) {
                        this._priorityResults.set(path,result);
                    }
                    return result;
                } finally {
                    libraryContext.dispose();
                }
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    let contextKey : string = this._storeExceptionContext(path,library,exception,stackTrace);
                    throw new _ExceptionState(exception,stackTrace,contextKey);
                }
            }
        });
    }
    _computeIndex(path : string) : any {
        let analysisResult : AnalysisResult = this._computeAnalysisResult(path,{
            withUnit : false,asIsIfPartWithoutLibrary : true});
        return analysisResult._index;
    }
    _computeUnitElement(path : string) : UnitElementResult {
        let file : any = this._fsState.getFileForPath(path);
        let library : any = (file.library || file);
        let libraryContext : any = this._createLibraryContext(library);
        try {
            let element : any = libraryContext.computeUnitElement(library.source,file.source);
            let signature : string = library.transitiveSignature;
            return new UnitElementResult(path,signature,element);
        } finally {
            libraryContext.dispose();
        }
    }
    _computeUnitElementSignature(path : string) : string {
        let file : any = this._fsState.getFileForPath(path);
        let library : any = (file.library || file);
        return library.transitiveSignature;
    }
    _createFileTracker() : void {
        this._fillSalt();
        this._fsState = new bare.createInstance(any,null,this._logger,this._byteStore,this._contentOverlay,this._resourceProvider,this.sourceFactory,this.analysisOptions,this._salt,{
            externalSummaries : this._externalSummaries});
        this._fileTracker = new bare.createInstance(any,null,this._logger,this._fsState,this._changeHook.bind(this));
    }
    _createLibraryContext(library : any) : any {
        this._testView.numOfCreatedLibraryContexts++;
        return new bare.createInstance(any,null,library,this._logger,this._sdkBundle,this._byteStore,this._analysisOptions,this.declaredVariables,this._sourceFactory,this._externalSummaries,this.fsState);
    }
    _fillSalt() : void {
        op(Op.INDEX_ASSIGN,this._salt,0,AnalysisDriver.DATA_VERSION);
        let crossContextOptions : core.DartList<number> = this._analysisOptions.signature;
        /* TODO (AssertStatementImpl) : assert (crossContextOptions.length == AnalysisOptions.signatureLength); */;
        for(let i : number = 0; i < crossContextOptions.length; i++){
            op(Op.INDEX_ASSIGN,this._salt,i + 1,crossContextOptions[i]);
        }
    }
    _getAnalysisResultFromBytes(file : any,signature : string,bytes : core.DartList<number>,_namedArguments? : {content? : string,resolvedUnit? : any}) : AnalysisResult {
        let {content,resolvedUnit} = Object.assign({
        }, _namedArguments );
        let unit = new bare.createInstance(any,null,bytes);
        let errors : core.DartList<any> = this._getErrorsFromSerialized(file,unit.errors);
        this._updateHasErrorOrWarningFlag(file,errors);
        return new AnalysisResult(this,this._sourceFactory,file.path,file.uri,file.exists,content,file.lineInfo,signature,resolvedUnit,errors,unit.index);
    }
    _getErrorsFromSerialized(file : any,serialized : core.DartList<any>) : core.DartList<any> {
        return serialized.map((error : any) =>  {
            let errorName : string = error.uniqueName;
            let errorCode : any = (errorCodeByUniqueName(errorName) || this._lintCodeByUniqueName(errorName));
            if (op(Op.EQUALS,errorCode,null)) {
                throw new core.StateError(`No ErrorCode for ${errorName} in ${file}`);
            }
            return new bare.createInstance(any,null,file.source,error.offset,error.length,errorCode,error.message,error.correction.isEmpty ? null : error.correction);
        }).toList();
    }
    _getResolvedUnitKey(signature : string) : string {
        return `${signature}.resolved`;
    }
    _getResolvedUnitSignature(library : any,file : any) : string {
        let signature : any = new bare.createInstance(any,null);
        signature.addUint32List(this._salt);
        signature.addString(library.transitiveSignature);
        signature.addString(file.contentHash);
        return signature.toHex();
    }
    _lintCodeByUniqueName(errorName : string) : any {
        let lintPrefix : string = 'LintCode.';
        if (new core.DartString(errorName).startsWith(lintPrefix)) {
            let lintName : string = new core.DartString(errorName).substring(new core.DartString(lintPrefix).length);
            return ((t)=>(!!t)?t.lintCode:null)(lib5.Registry.ruleRegistry.getRule(lintName));
        }
        let lintPrefixOld : string = '_LintCode.';
        if (new core.DartString(errorName).startsWith(lintPrefixOld)) {
            let lintName : string = new core.DartString(errorName).substring(new core.DartString(lintPrefixOld).length);
            return ((t)=>(!!t)?t.lintCode:null)(lib5.Registry.ruleRegistry.getRule(lintName));
        }
        return null;
    }
    _reportException(path : string,exception : any,stackTrace : core.DartStackTrace) : void {
        let contextKey : string = null;
        if (is(exception, _ExceptionState)) {
            let state = exception as _ExceptionState;
            exception = state.exception;
            stackTrace = state.stackTrace;
            contextKey = state.contextKey;
        }
        let caught : any = new bare.createInstance(any,null,exception,stackTrace);
        this._exceptionController.add(new ExceptionResult(path,caught,contextKey));
    }
    _serializeResolvedUnit(resolvedUnit : any,errors : core.DartList<any>) : core.DartList<number> {
        let index : any = indexUnit(resolvedUnit);
        return new bare.createInstance(any,null,{
            errors : errors.map((error : any) =>  {
                return new bare.createInstance(any,null,{
                    offset : error.offset,length : error.length,uniqueName : error.errorCode.uniqueName,message : error.message,correction : error.correction});
            }).toList(),index : index}).toBuffer();
    }
    _storeExceptionContext(path : string,libraryFile : any,exception : any,stackTrace : core.DartStackTrace) : string {
        if (AnalysisDriver.allowedNumberOfContextsToWrite <= 0) {
            return null;
        }else {
            AnalysisDriver.allowedNumberOfContextsToWrite--;
        }
        try {
            let contextFiles : core.DartList<any> = libraryFile.transitiveFiles.map((file : any) =>  {
                return new bare.createInstance(any,null,{
                    path : file.path,content : file.content});
            }).toList();
            contextFiles.sort((a : any,b : any) =>  {
                return a.path.compareTo(b.path);
            });
            let contextBuilder : any = new bare.createInstance(any,null,{
                path : path,exception : exception.toString(),stackTrace : stackTrace.toString(),files : contextFiles});
            let bytes : core.DartList<number> = contextBuilder.toBuffer();
            var _twoDigits : (n : number) => string = (n : number) : string =>  {
                if (n >= 10) return `${n}`;
                return `0${n}`;
            };
            var _threeDigits : (n : number) => string = (n : number) : string =>  {
                if (n >= 100) return `${n}`;
                if (n >= 10) return `0${n}`;
                return `00${n}`;
            };
            let time : core.DartDateTime = new core.DartDateTime.now();
            let m : string = _twoDigits(time.month);
            let d : string = _twoDigits(time.day);
            let h : string = _twoDigits(time.hour);
            let min : string = _twoDigits(time.minute);
            let sec : string = _twoDigits(time.second);
            let ms : string = _threeDigits(time.millisecond);
            let key : string = `exception_${time.year}${m}${d}` + `_${h}${min}${sec}` + `_${ms}`;
            this._byteStore.put(key,bytes);
            return key;
        } catch (__error__) {

            {
                let _ = __error__;
                return null;
            }
        }
    }
    _throwIfChangesAreNotAllowed() : void {
        if (this.disableChangesAndCacheAllResults) {
            throw new core.StateError('Changing files is not allowed for this driver.');
        }
    }
    _updateHasErrorOrWarningFlag(file : any,errors : core.DartList<any>) : void {
        for(let error of errors) {
            let severity : any = error.errorCode.errorSeverity;
            if (op(Op.EQUALS,severity,ErrorSeverity.ERROR) || op(Op.EQUALS,severity,ErrorSeverity.WARNING)) {
                file.hasErrorOrWarning = true;
                return;
            }
        }
        file.hasErrorOrWarning = false;
    }
}

export namespace AnalysisDriverGeneric {
    export type Constructors = 'AnalysisDriverGeneric';
    export type Interface = Omit<AnalysisDriverGeneric, Constructors>;
}
@DartClass
export class AnalysisDriverGeneric {
    @AbstractProperty
    get hasFilesToAnalyze() : boolean{ throw 'abstract'}
    set priorityFiles(priorityPaths : core.DartList<string>){ throw 'abstract'}
    @AbstractProperty
    get workPriority() : AnalysisDriverPriority{ throw 'abstract'}
    @Abstract
    addFile(path : string) : void{ throw 'abstract'}
    @Abstract
    dispose() : void{ throw 'abstract'}
    @Abstract
    performWork() : async.Future<core.Null>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AnalysisDriverGeneric() {
    }
}

export enum AnalysisDriverPriority {
    nothing,
    general,
    generalWithErrors,
    generalImportChanged,
    generalChanged,
    changedFiles,
    priority,
    interactive
}

export namespace AnalysisDriverScheduler {
    export type Constructors = 'AnalysisDriverScheduler';
    export type Interface = Omit<AnalysisDriverScheduler, Constructors>;
}
@DartClass
export class AnalysisDriverScheduler {
    private static __$_MS_BEFORE_PUMPING_EVENT_QUEUE : number;
    static get _MS_BEFORE_PUMPING_EVENT_QUEUE() : number { 
        if (this.__$_MS_BEFORE_PUMPING_EVENT_QUEUE===undefined) {
            this.__$_MS_BEFORE_PUMPING_EVENT_QUEUE = 2;
        }
        return this.__$_MS_BEFORE_PUMPING_EVENT_QUEUE;
    }

    private static __$_NUMBER_OF_EVENT_QUEUE_PUMPINGS : number;
    static get _NUMBER_OF_EVENT_QUEUE_PUMPINGS() : number { 
        if (this.__$_NUMBER_OF_EVENT_QUEUE_PUMPINGS===undefined) {
            this.__$_NUMBER_OF_EVENT_QUEUE_PUMPINGS = 128;
        }
        return this.__$_NUMBER_OF_EVENT_QUEUE_PUMPINGS;
    }

    _logger : any;

    driverWatcher : DriverWatcher;

    _drivers : core.DartList<AnalysisDriverGeneric>;

    _hasWork : any;

    _statusSupport : any;

    _started : boolean;

    constructor(_logger : any,_namedArguments? : {driverWatcher? : DriverWatcher}) {
    }
    @defaultConstructor
    AnalysisDriverScheduler(_logger : any,_namedArguments? : {driverWatcher? : DriverWatcher}) {
        let {driverWatcher} = Object.assign({
        }, _namedArguments );
        this._drivers = new core.DartList.literal();
        this._hasWork = new bare.createInstance(any,null);
        this._statusSupport = new bare.createInstance(any,null);
        this._started = false;
        this._logger = _logger;
        this.driverWatcher = driverWatcher;
    }
    get isAnalyzing() : boolean {
        return this._hasFilesToAnalyze;
    }
    get status() : async.DartStream<any> {
        return this._statusSupport.stream;
    }
    get _hasFilesToAnalyze() : boolean {
        for(let driver of this._drivers) {
            if (driver.hasFilesToAnalyze) {
                return true;
            }
        }
        return false;
    }
    add(driver : AnalysisDriverGeneric) : void {
        this._drivers.add(driver);
        this._hasWork.notify();
        if (is(driver, AnalysisDriver)) {
            ((_57_)=>(!!_57_)?_57_.addedDriver(driver,driver.contextRoot):null)(this.driverWatcher);
        }
    }
    notify(driver : AnalysisDriverGeneric) : void {
        this._hasWork.notify();
        this._statusSupport.preTransitionToAnalyzing();
    }
    remove(driver : AnalysisDriverGeneric) : void {
        if (is(driver, AnalysisDriver)) {
            ((_58_)=>(!!_58_)?_58_.removedDriver(driver):null)(this.driverWatcher);
        }
        this._drivers.remove(driver);
        this._hasWork.notify();
    }
    start() : void {
        if (this._started) {
            throw new core.StateError('The scheduler has already been started.');
        }
        this._started = true;
        this._run();
    }
    waitForIdle() : async.Future<core.Null> {
        return this._statusSupport.waitForIdle();
    }
    _run() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let timer : core.DartStopwatch = ((_) : core.DartStopwatch =>  {
                {
                    _.start();
                    return _;
                }
            })(new core.DartStopwatch());
            let analysisSection : any;
            while (true){
                if (timer.elapsedMilliseconds > AnalysisDriverScheduler._MS_BEFORE_PUMPING_EVENT_QUEUE) {
                    await AnalysisDriverScheduler._pumpEventQueue(AnalysisDriverScheduler._NUMBER_OF_EVENT_QUEUE_PUMPINGS);
                    timer.reset();
                }
                await this._hasWork.signal;
                if (this._hasFilesToAnalyze) {
                    this._statusSupport.transitionToAnalyzing();
                    analysisSection = ( analysisSection ) || ( this._logger.enter('Analyzing') );
                }
                let bestDriver : AnalysisDriverGeneric;
                let bestPriority : AnalysisDriverPriority = AnalysisDriverPriority.nothing;
                for(let driver of this._drivers) {
                    let priority : AnalysisDriverPriority = driver.workPriority;
                    if (priority.index > bestPriority.index) {
                        bestDriver = driver;
                        bestPriority = priority;
                    }
                }
                if (!this._hasFilesToAnalyze) {
                    this._statusSupport.transitionToIdle();
                    ((_59_)=>(!!_59_)?_59_.exit():null)(analysisSection);
                    analysisSection = null;
                }
                if (op(Op.EQUALS,bestPriority,AnalysisDriverPriority.nothing)) {
                    continue;
                }
                await bestDriver.performWork();
                this._hasWork.notify();
            }
        } )());
    }

    static _pumpEventQueue(times : number) : async.Future<any> {
        if (times == 0) {
            return new async.Future.value();
        }
        return new async.Future.delayed(core.DartDuration.ZERO,() =>  {
            return AnalysisDriverScheduler._pumpEventQueue(times - 1);
        });
    }
}

export namespace AnalysisDriverTestView {
    export type Constructors = 'AnalysisDriverTestView';
    export type Interface = Omit<AnalysisDriverTestView, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
        arguments : [],namedArguments : {
        }}})
export class AnalysisDriverTestView {
    driver : AnalysisDriver;

    numOfCreatedLibraryContexts : number;

    numOfAnalyzedLibraries : number;

    constructor(driver : AnalysisDriver) {
    }
    @defaultConstructor
    AnalysisDriverTestView(driver : AnalysisDriver) {
        this.numOfCreatedLibraryContexts = 0;
        this.numOfAnalyzedLibraries = 0;
        this.driver = driver;
    }
    get fileTracker() : any {
        return this.driver._fileTracker;
    }
    get priorityResults() : core.DartMap<string,AnalysisResult> {
        return this.driver._priorityResults;
    }
    getSummaryStore(libraryPath : string) : any {
        let library : any = this.driver.fsState.getFileForPath(libraryPath);
        let libraryContext : any = this.driver._createLibraryContext(library);
        try {
            return libraryContext.store;
        } finally {
            libraryContext.dispose();
        }
    }
}

export namespace AnalysisResult {
    export type Constructors = 'AnalysisResult';
    export type Interface = Omit<AnalysisResult, Constructors>;
}
@DartClass
export class AnalysisResult {
    private static __$_UNCHANGED;
    static get _UNCHANGED() { 
        if (this.__$_UNCHANGED===undefined) {
            this.__$_UNCHANGED = new AnalysisResult(null,null,null,null,null,null,null,null,null,null,null);
        }
        return this.__$_UNCHANGED;
    }
    static set _UNCHANGED(__$value : any)  { 
        this.__$_UNCHANGED = __$value;
    }

    driver : AnalysisDriver;

    sourceFactory : any;

    path : string;

    uri : lib6.Uri;

    exists : boolean;

    content : string;

    lineInfo : any;

    _signature : string;

    unit : any;

    errors : core.DartList<any>;

    _index : any;

    constructor(driver : AnalysisDriver,sourceFactory : any,path : string,uri : lib6.Uri,exists : boolean,content : string,lineInfo : any,_signature : string,unit : any,errors : core.DartList<any>,_index : any) {
    }
    @defaultConstructor
    AnalysisResult(driver : AnalysisDriver,sourceFactory : any,path : string,uri : lib6.Uri,exists : boolean,content : string,lineInfo : any,_signature : string,unit : any,errors : core.DartList<any>,_index : any) {
        this.driver = driver;
        this.sourceFactory = sourceFactory;
        this.path = path;
        this.uri = uri;
        this.exists = exists;
        this.content = content;
        this.lineInfo = lineInfo;
        this._signature = _signature;
        this.unit = unit;
        this.errors = errors;
        this._index = _index;
    }
}

export namespace DriverWatcher {
    export type Constructors = 'DriverWatcher';
    export type Interface = Omit<DriverWatcher, Constructors>;
}
@DartClass
export class DriverWatcher {
    @Abstract
    addedDriver(driver : AnalysisDriver,contextRoot : any) : void{ throw 'abstract'}
    @Abstract
    removedDriver(driver : AnalysisDriver) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DriverWatcher() {
    }
}

export namespace ErrorsResult {
    export type Constructors = 'ErrorsResult';
    export type Interface = Omit<ErrorsResult, Constructors>;
}
@DartClass
export class ErrorsResult {
    path : string;

    uri : lib6.Uri;

    lineInfo : any;

    errors : core.DartList<any>;

    constructor(path : string,uri : lib6.Uri,lineInfo : any,errors : core.DartList<any>) {
    }
    @defaultConstructor
    ErrorsResult(path : string,uri : lib6.Uri,lineInfo : any,errors : core.DartList<any>) {
        this.path = path;
        this.uri = uri;
        this.lineInfo = lineInfo;
        this.errors = errors;
    }
}

export namespace ExceptionResult {
    export type Constructors = 'ExceptionResult';
    export type Interface = Omit<ExceptionResult, Constructors>;
}
@DartClass
export class ExceptionResult {
    path : string;

    exception : any;

    contextKey : string;

    constructor(path : string,exception : any,contextKey : string) {
    }
    @defaultConstructor
    ExceptionResult(path : string,exception : any,contextKey : string) {
        this.path = path;
        this.exception = exception;
        this.contextKey = contextKey;
    }
}

export namespace ParseResult {
    export type Constructors = 'ParseResult';
    export type Interface = Omit<ParseResult, Constructors>;
}
@DartClass
export class ParseResult {
    path : string;

    uri : lib6.Uri;

    content : string;

    lineInfo : any;

    unit : any;

    errors : core.DartList<any>;

    constructor(path : string,uri : lib6.Uri,content : string,lineInfo : any,unit : any,errors : core.DartList<any>) {
    }
    @defaultConstructor
    ParseResult(path : string,uri : lib6.Uri,content : string,lineInfo : any,unit : any,errors : core.DartList<any>) {
        this.path = path;
        this.uri = uri;
        this.content = content;
        this.lineInfo = lineInfo;
        this.unit = unit;
        this.errors = errors;
    }
}

export namespace UnitElementResult {
    export type Constructors = 'UnitElementResult';
    export type Interface = Omit<UnitElementResult, Constructors>;
}
@DartClass
export class UnitElementResult {
    path : string;

    signature : string;

    element : any;

    constructor(path : string,signature : string,element : any) {
    }
    @defaultConstructor
    UnitElementResult(path : string,signature : string,element : any) {
        this.path = path;
        this.signature = signature;
        this.element = element;
    }
}

export namespace _ExceptionState {
    export type Constructors = '_ExceptionState';
    export type Interface = Omit<_ExceptionState, Constructors>;
}
@DartClass
export class _ExceptionState {
    exception;

    stackTrace : core.DartStackTrace;

    contextKey : string;

    constructor(exception : any,stackTrace : core.DartStackTrace,contextKey : string) {
    }
    @defaultConstructor
    _ExceptionState(exception : any,stackTrace : core.DartStackTrace,contextKey : string) {
        this.exception = exception;
        this.stackTrace = stackTrace;
        this.contextKey = contextKey;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.exception}\n${this.stackTrace}`;
    }
}

export namespace _FilesDefiningClassMemberNameTask {
    export type Constructors = '_FilesDefiningClassMemberNameTask';
    export type Interface = Omit<_FilesDefiningClassMemberNameTask, Constructors>;
}
@DartClass
export class _FilesDefiningClassMemberNameTask {
    private static __$_MS_WORK_INTERVAL : number;
    static get _MS_WORK_INTERVAL() : number { 
        if (this.__$_MS_WORK_INTERVAL===undefined) {
            this.__$_MS_WORK_INTERVAL = 5;
        }
        return this.__$_MS_WORK_INTERVAL;
    }

    driver : AnalysisDriver;

    name : string;

    completer : async.DartCompleter<core.DartList<string>>;

    definingFiles : core.DartList<string>;

    checkedFiles : core.DartSet<string>;

    filesToCheck : core.DartList<string>;

    constructor(driver : AnalysisDriver,name : string) {
    }
    @defaultConstructor
    _FilesDefiningClassMemberNameTask(driver : AnalysisDriver,name : string) {
        this.completer = new async.DartCompleter<core.DartList<string>>();
        this.definingFiles = new core.DartList.literal<string>();
        this.checkedFiles = new core.DartSet<string>();
        this.filesToCheck = new core.DartList.literal<string>();
        this.driver = driver;
        this.name = name;
    }
    perform() : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            let timer : core.DartStopwatch = ((_) : core.DartStopwatch =>  {
                {
                    _.start();
                    return _;
                }
            })(new core.DartStopwatch());
            while (timer.elapsedMilliseconds < _FilesDefiningClassMemberNameTask._MS_WORK_INTERVAL){
                if (this.filesToCheck.isEmpty) {
                    let newFiles : core.DartSet<string> = this.driver.addedFiles.difference(this.checkedFiles);
                    this.filesToCheck.addAll(newFiles);
                }
                if (this.filesToCheck.isEmpty) {
                    this.completer.complete(this.definingFiles);
                    return true;
                }
                let path : string = this.filesToCheck.removeLast();
                let file : any = this.driver._fsState.getFileForPath(path);
                if (file.definedClassMemberNames.contains(this.name)) {
                    this.definingFiles.add(path);
                }
                this.checkedFiles.add(path);
            }
            return false;
        } )());
    }

}

export namespace _FilesReferencingNameTask {
    export type Constructors = '_FilesReferencingNameTask';
    export type Interface = Omit<_FilesReferencingNameTask, Constructors>;
}
@DartClass
export class _FilesReferencingNameTask {
    private static __$_MS_WORK_INTERVAL : number;
    static get _MS_WORK_INTERVAL() : number { 
        if (this.__$_MS_WORK_INTERVAL===undefined) {
            this.__$_MS_WORK_INTERVAL = 5;
        }
        return this.__$_MS_WORK_INTERVAL;
    }

    driver : AnalysisDriver;

    name : string;

    completer : async.DartCompleter<core.DartList<string>>;

    referencingFiles : core.DartList<string>;

    checkedFiles : core.DartSet<string>;

    filesToCheck : core.DartList<string>;

    constructor(driver : AnalysisDriver,name : string) {
    }
    @defaultConstructor
    _FilesReferencingNameTask(driver : AnalysisDriver,name : string) {
        this.completer = new async.DartCompleter<core.DartList<string>>();
        this.referencingFiles = new core.DartList.literal<string>();
        this.checkedFiles = new core.DartSet<string>();
        this.filesToCheck = new core.DartList.literal<string>();
        this.driver = driver;
        this.name = name;
    }
    perform() : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            let timer : core.DartStopwatch = ((_) : core.DartStopwatch =>  {
                {
                    _.start();
                    return _;
                }
            })(new core.DartStopwatch());
            while (timer.elapsedMilliseconds < _FilesReferencingNameTask._MS_WORK_INTERVAL){
                if (this.filesToCheck.isEmpty) {
                    let newFiles : core.DartSet<string> = this.driver.addedFiles.difference(this.checkedFiles);
                    this.filesToCheck.addAll(newFiles);
                }
                if (this.filesToCheck.isEmpty) {
                    this.completer.complete(this.referencingFiles);
                    return true;
                }
                let path : string = this.filesToCheck.removeLast();
                let file : any = this.driver._fsState.getFileForPath(path);
                if (file.referencedNames.contains(this.name)) {
                    this.referencingFiles.add(path);
                }
                this.checkedFiles.add(path);
            }
            return false;
        } )());
    }

}

export namespace _TopLevelNameDeclarationsTask {
    export type Constructors = '_TopLevelNameDeclarationsTask';
    export type Interface = Omit<_TopLevelNameDeclarationsTask, Constructors>;
}
@DartClass
export class _TopLevelNameDeclarationsTask {
    driver : AnalysisDriver;

    name : string;

    completer : async.DartCompleter<core.DartList<any>>;

    libraryDeclarations : core.DartList<any>;

    checkedFiles : core.DartSet<string>;

    filesToCheck : core.DartList<string>;

    constructor(driver : AnalysisDriver,name : string) {
    }
    @defaultConstructor
    _TopLevelNameDeclarationsTask(driver : AnalysisDriver,name : string) {
        this.completer = new async.DartCompleter<core.DartList<any>>();
        this.libraryDeclarations = new core.DartList.literal<any>();
        this.checkedFiles = new core.DartSet<string>();
        this.filesToCheck = new core.DartList.literal<string>();
        this.driver = driver;
        this.name = name;
    }
    perform() : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.filesToCheck.isEmpty) {
                this.filesToCheck.addAll(this.driver.addedFiles.difference(this.checkedFiles));
                this.filesToCheck.addAll(this.driver.knownFiles.difference(this.checkedFiles));
            }
            if (this.filesToCheck.isEmpty) {
                this.completer.complete(this.libraryDeclarations);
                return true;
            }
            let path : string = this.filesToCheck.removeLast();
            if (this.checkedFiles.add(path)) {
                let file : any = this.driver._fsState.getFileForPath(path);
                if (!file.isPart) {
                    let isExported : boolean = false;
                    let declaration : any = op(Op.INDEX,file.topLevelDeclarations,this.name);
                    for(let part of file.partedFiles) {
                        declaration = ( declaration ) || ( op(Op.INDEX,part.topLevelDeclarations,this.name) );
                    }
                    if (op(Op.EQUALS,declaration,null)) {
                        declaration = op(Op.INDEX,file.exportedTopLevelDeclarations,this.name);
                        isExported = true;
                    }
                    if (declaration != null) {
                        this.libraryDeclarations.add(new bare.createInstance(any,null,file.source,declaration,isExported));
                    }
                }
            }
            return false;
        } )());
    }

}

export class properties {
}
