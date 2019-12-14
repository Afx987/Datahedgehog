/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/engine.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts.packages/path/lib/src/context";
import * as lib5 from "@dart2ts.packages/path/lib/path";
import * as typed_data from "@dart2ts/dart/typed_data";

export namespace AnalysisContext {
    export type Constructors = 'AnalysisContext';
    export type Interface = Omit<AnalysisContext, Constructors>;
}
@DartClass
export class AnalysisContext {
    private static __$EMPTY_LIST : core.DartList<AnalysisContext>;
    static get EMPTY_LIST() : core.DartList<AnalysisContext> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<AnalysisContext>();
        }
        return this.__$EMPTY_LIST;
    }

    fileResolverProvider : any;

    @AbstractProperty
    get analysisOptions() : AnalysisOptions{ throw 'abstract'}
    set analysisOptions(options : AnalysisOptions){ throw 'abstract'}
    set analysisPriorityOrder(sources : core.DartList<any>){ throw 'abstract'}
    @AbstractProperty
    get declaredVariables() : any{ throw 'abstract'}
    @AbstractProperty
    get htmlSources() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get implicitAnalysisEvents() : async.DartStream<ImplicitAnalysisEvent>{ throw 'abstract'}
    @AbstractProperty
    get isDisposed() : boolean{ throw 'abstract'}
    @AbstractProperty
    get launchableClientLibrarySources() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get launchableServerLibrarySources() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get librarySources() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get name() : string{ throw 'abstract'}
    set name(name : string){ throw 'abstract'}
    @AbstractProperty
    get onSourcesChanged() : async.DartStream<SourcesChangedEvent>{ throw 'abstract'}
    @AbstractProperty
    get sourceFactory() : any{ throw 'abstract'}
    set sourceFactory(factory : any){ throw 'abstract'}
    @AbstractProperty
    get sources() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get typeProvider() : any{ throw 'abstract'}
    @AbstractProperty
    get typeSystem() : any{ throw 'abstract'}
    @Abstract
    addListener(listener : AnalysisListener) : void{ throw 'abstract'}
    @Abstract
    applyAnalysisDelta(delta : AnalysisDelta) : void{ throw 'abstract'}
    @Abstract
    applyChanges(changeSet : ChangeSet) : void{ throw 'abstract'}
    @Abstract
    computeDocumentationComment(element : any) : string{ throw 'abstract'}
    @Abstract
    computeErrors(source : any) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    computeKindOf(source : any) : any{ throw 'abstract'}
    @Abstract
    computeLibraryElement(source : any) : any{ throw 'abstract'}
    @Abstract
    computeLineInfo(source : any) : any{ throw 'abstract'}
    @Abstract
    computeResolvedCompilationUnitAsync(source : any,librarySource : any) : any{ throw 'abstract'}
    @Abstract
    computeResult(target : any,result : any) : core.DartObject{ throw 'abstract'}
    @Abstract
    dispose() : void{ throw 'abstract'}
    @Abstract
    exists(source : any) : boolean{ throw 'abstract'}
    @Abstract
    getCompilationUnitElement(unitSource : any,librarySource : any) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    getConfigurationData(key : any) : core.DartObject{ throw 'abstract'}
    @Abstract
    getContents(source : any) : any{ throw 'abstract'}
    @Abstract
    getElement(location : any) : any{ throw 'abstract'}
    @Abstract
    getErrors(source : any) : AnalysisErrorInfo{ throw 'abstract'}
    @Abstract
    getHtmlFilesReferencing(source : any) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    getKindOf(source : any) : any{ throw 'abstract'}
    @Abstract
    getLibrariesContaining(source : any) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    getLibrariesDependingOn(librarySource : any) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    getLibrariesReferencedFromHtml(htmlSource : any) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    getLibraryElement(source : any) : any{ throw 'abstract'}
    @Abstract
    getLineInfo(source : any) : any{ throw 'abstract'}
    @Abstract
    getModificationStamp(source : any) : number{ throw 'abstract'}
    @Abstract
    getResolvedCompilationUnit(unitSource : any,library : any) : any{ throw 'abstract'}
    @Abstract
    getResolvedCompilationUnit2(unitSource : any,librarySource : any) : any{ throw 'abstract'}
    @Abstract
    getResult(target : any,result : any) : core.DartObject{ throw 'abstract'}
    @Abstract
    getSourcesWithFullName(path : string) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    invalidateLibraryHints(librarySource : any) : void{ throw 'abstract'}
    @Abstract
    isClientLibrary(librarySource : any) : boolean{ throw 'abstract'}
    @Abstract
    isServerLibrary(librarySource : any) : boolean{ throw 'abstract'}
    @Abstract
    onResultChanged(descriptor : any) : async.DartStream<ResultChangedEvent<any>>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    onResultComputed(descriptor : any) : async.DartStream<ComputedResult<any>>{ throw 'abstract'}
    @Abstract
    parseCompilationUnit(source : any) : any{ throw 'abstract'}
    @Abstract
    parseHtmlDocument(source : any) : any{ throw 'abstract'}
    @Abstract
    performAnalysisTask() : AnalysisResult{ throw 'abstract'}
    @Abstract
    removeListener(listener : AnalysisListener) : void{ throw 'abstract'}
    @Abstract
    resolveCompilationUnit(unitSource : any,library : any) : any{ throw 'abstract'}
    @Abstract
    resolveCompilationUnit2(unitSource : any,librarySource : any) : any{ throw 'abstract'}
    @Abstract
    setChangedContents(source : any,contents : string,offset : number,oldLength : number,newLength : number) : void{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    setConfigurationData(key : any,data : core.DartObject) : void{ throw 'abstract'}
    @Abstract
    setContents(source : any,contents : string) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AnalysisContext() {
    }
}

export namespace AnalysisDelta {
    export type Constructors = 'AnalysisDelta';
    export type Interface = Omit<AnalysisDelta, Constructors>;
}
@DartClass
export class AnalysisDelta {
    _analysisMap : core.DartHashMap<any,AnalysisLevel>;

    get addedSources() : core.DartList<any> {
        let result : core.DartList<any> = new core.DartList<any>();
        this._analysisMap.forEach((source : any,level : AnalysisLevel) =>  {
            if (level != AnalysisLevel.NONE) {
                result.add(source);
            }
        });
        return result;
    }
    get analysisLevels() : core.DartMap<any,AnalysisLevel> {
        return this._analysisMap;
    }
    setAnalysisLevel(source : any,level : AnalysisLevel) : void {
        op(Op.INDEX_ASSIGN,this._analysisMap,source,level);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let needsSeparator : boolean = this._appendSources(buffer,false,AnalysisLevel.ALL);
        needsSeparator = this._appendSources(buffer,needsSeparator,AnalysisLevel.RESOLVED);
        this._appendSources(buffer,needsSeparator,AnalysisLevel.NONE);
        return buffer.toString();
    }
    _appendSources(buffer : core.DartStringBuffer,needsSeparator : boolean,level : AnalysisLevel) : boolean {
        let first : boolean = true;
        this._analysisMap.forEach((source : any,sourceLevel : AnalysisLevel) =>  {
            if (op(Op.EQUALS,sourceLevel,level)) {
                if (first) {
                    first = false;
                    if (needsSeparator) {
                        buffer.write("; ");
                    }
                    buffer.write(level);
                    buffer.write(" ");
                }else {
                    buffer.write(", ");
                }
                buffer.write(source.fullName);
            }
        });
        return needsSeparator || !first;
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisDelta() {
        this._analysisMap = new core.DartHashMap<any,AnalysisLevel>();
    }
}

export namespace AnalysisEngine {
    export type Constructors = '_';
    export type Interface = Omit<AnalysisEngine, Constructors>;
}
@DartClass
export class AnalysisEngine {
    private static __$SUFFIX_DART : string;
    static get SUFFIX_DART() : string { 
        if (this.__$SUFFIX_DART===undefined) {
            this.__$SUFFIX_DART = "dart";
        }
        return this.__$SUFFIX_DART;
    }

    private static __$SUFFIX_HTM : string;
    static get SUFFIX_HTM() : string { 
        if (this.__$SUFFIX_HTM===undefined) {
            this.__$SUFFIX_HTM = "htm";
        }
        return this.__$SUFFIX_HTM;
    }

    private static __$SUFFIX_HTML : string;
    static get SUFFIX_HTML() : string { 
        if (this.__$SUFFIX_HTML===undefined) {
            this.__$SUFFIX_HTML = "html";
        }
        return this.__$SUFFIX_HTML;
    }

    private static __$ANALYSIS_OPTIONS_FILE : string;
    static get ANALYSIS_OPTIONS_FILE() : string { 
        if (this.__$ANALYSIS_OPTIONS_FILE===undefined) {
            this.__$ANALYSIS_OPTIONS_FILE = '.analysis_options';
        }
        return this.__$ANALYSIS_OPTIONS_FILE;
    }

    private static __$ANALYSIS_OPTIONS_YAML_FILE : string;
    static get ANALYSIS_OPTIONS_YAML_FILE() : string { 
        if (this.__$ANALYSIS_OPTIONS_YAML_FILE===undefined) {
            this.__$ANALYSIS_OPTIONS_YAML_FILE = 'analysis_options.yaml';
        }
        return this.__$ANALYSIS_OPTIONS_YAML_FILE;
    }

    private static __$instance : AnalysisEngine;
    static get instance() : AnalysisEngine { 
        if (this.__$instance===undefined) {
            this.__$instance = new AnalysisEngine._();
        }
        return this.__$instance;
    }
    static set instance(__$value : AnalysisEngine)  { 
        this.__$instance = __$value;
    }

    _logger : Logger;

    enginePlugin : any;

    _instrumentationService : any;

    partitionManager : any;

    _taskManager : any;

    @namedConstructor
    _() {
        this._logger = Logger.NULL;
        this.enginePlugin = new bare.createInstance(any,null);
        this._instrumentationService = InstrumentationService.NULL_SERVICE;
        this.partitionManager = new bare.createInstance(any,null);
    }
    static _ : new() => AnalysisEngine;

    get instrumentationService() : any {
        return this._instrumentationService;
    }
    set instrumentationService(service : any) {
        if (op(Op.EQUALS,service,null)) {
            this._instrumentationService = InstrumentationService.NULL_SERVICE;
        }else {
            this._instrumentationService = service;
        }
    }
    get logger() : Logger {
        return this._logger;
    }
    set logger(logger : Logger) {
        this._logger = (logger || Logger.NULL);
    }
    get requiredPlugins() : core.DartList<any> {
        return new core.DartList.literal<any>(this.enginePlugin);
    }
    get taskManager() : any {
        if (op(Op.EQUALS,this._taskManager,null)) {
            this._taskManager = new bare.createInstance(any,null);
            this._initializeTaskMap();
            this._initializeResults();
        }
        return this._taskManager;
    }
    clearCaches() : void {
        this.partitionManager.clearCache();
    }
    createAnalysisContext() : AnalysisContext {
        return new bare.createInstance(any,null);
    }
    processRequiredPlugins() : void {
        if (op(Op.EQUALS,this.enginePlugin.workManagerFactoryExtensionPoint,null)) {
            let manager : any = new bare.createInstance(any,null);
            manager.processPlugins(this.requiredPlugins);
        }
    }
    _initializeResults() : void {
        this._taskManager.addGeneralResult(DART_ERRORS);
    }
    _initializeTaskMap() : void {
        this._taskManager.addTaskDescriptor(GetContentTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(BuildCompilationUnitElementTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(BuildDirectiveElementsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(BuildEnumMemberElementsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(BuildExportNamespaceTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(BuildLibraryElementTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(BuildPublicNamespaceTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(BuildSourceExportClosureTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(BuildTypeProviderTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ComputeConstantDependenciesTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ComputeConstantValueTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ComputeInferableStaticVariableDependenciesTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ComputeLibraryCycleTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ComputeRequiredConstantsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ContainingLibrariesTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(DartErrorsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(EvaluateUnitConstantsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(GatherUsedImportedElementsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(GatherUsedLocalElementsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(GenerateHintsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(GenerateLintsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(InferInstanceMembersInUnitTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(InferStaticVariableTypesInUnitTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(InferStaticVariableTypeTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(LibraryErrorsReadyTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(LibraryUnitErrorsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ParseDartTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(PartiallyResolveUnitReferencesTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ReadyLibraryElement2Task.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ReadyLibraryElement5Task.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ReadyLibraryElement7Task.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ReadyResolvedUnitTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolveConstantExpressionTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolveDirectiveElementsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolvedUnit7InLibraryClosureTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolvedUnit7InLibraryTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolveInstanceFieldsInUnitTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolveLibraryReferencesTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolveLibraryTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolveLibraryTypeNamesTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolveTopLevelLibraryTypeBoundsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolveTopLevelUnitTypeBoundsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolveUnitTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolveUnitTypeNamesTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ResolveVariableReferencesTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ScanDartTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(StrongModeVerifyUnitTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(VerifyUnitTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(DartScriptsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(HtmlErrorsTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ParseHtmlTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(ParseYamlTask.DESCRIPTOR);
        this._taskManager.addTaskDescriptor(GenerateOptionsErrorsTask.DESCRIPTOR);
    }
    static isAnalysisOptionsFileName(fileName : string,context? : lib4.Context) : boolean {
        if (fileName == null) {
            return false;
        }
        let basename : string = ((context || lib5.properties.posix)).basename(fileName);
        return basename == AnalysisEngine.ANALYSIS_OPTIONS_FILE || basename == AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE;
    }
    static isDartFileName(fileName : string) : boolean {
        if (fileName == null) {
            return false;
        }
        let extension : string = FileNameUtilities.getExtension(fileName).toLowerCase();
        return extension == AnalysisEngine.SUFFIX_DART;
    }
    static isHtmlFileName(fileName : string) : boolean {
        if (fileName == null) {
            return false;
        }
        let extension : string = FileNameUtilities.getExtension(fileName).toLowerCase();
        return extension == AnalysisEngine.SUFFIX_HTML || extension == AnalysisEngine.SUFFIX_HTM;
    }
}

export namespace AnalysisErrorInfo {
    export type Constructors = 'AnalysisErrorInfo';
    export type Interface = Omit<AnalysisErrorInfo, Constructors>;
}
@DartClass
export class AnalysisErrorInfo {
    @AbstractProperty
    get errors() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get lineInfo() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AnalysisErrorInfo() {
    }
}

export namespace AnalysisErrorInfoImpl {
    export type Constructors = 'AnalysisErrorInfoImpl';
    export type Interface = Omit<AnalysisErrorInfoImpl, Constructors>;
}
@DartClass
@Implements(AnalysisErrorInfo)
export class AnalysisErrorInfoImpl implements AnalysisErrorInfo.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    errors : core.DartList<any>;

    lineInfo : any;

    constructor(errors : core.DartList<any>,lineInfo : any) {
    }
    @defaultConstructor
    AnalysisErrorInfoImpl(errors : core.DartList<any>,lineInfo : any) {
        this.errors = errors;
        this.lineInfo = lineInfo;
    }
}

export namespace AnalysisLevel {
    export type Constructors = 'AnalysisLevel';
    export type Interface = Omit<AnalysisLevel, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class AnalysisLevel implements core.DartComparable.Interface<AnalysisLevel> {
    private static __$ALL : AnalysisLevel;
    static get ALL() : AnalysisLevel { 
        if (this.__$ALL===undefined) {
            this.__$ALL = new AnalysisLevel('ALL',0);
        }
        return this.__$ALL;
    }

    private static __$ERRORS : AnalysisLevel;
    static get ERRORS() : AnalysisLevel { 
        if (this.__$ERRORS===undefined) {
            this.__$ERRORS = new AnalysisLevel('ERRORS',1);
        }
        return this.__$ERRORS;
    }

    private static __$RESOLVED : AnalysisLevel;
    static get RESOLVED() : AnalysisLevel { 
        if (this.__$RESOLVED===undefined) {
            this.__$RESOLVED = new AnalysisLevel('RESOLVED',2);
        }
        return this.__$RESOLVED;
    }

    private static __$NONE : AnalysisLevel;
    static get NONE() : AnalysisLevel { 
        if (this.__$NONE===undefined) {
            this.__$NONE = new AnalysisLevel('NONE',3);
        }
        return this.__$NONE;
    }

    private static __$values : core.DartList<AnalysisLevel>;
    static get values() : core.DartList<AnalysisLevel> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(AnalysisLevel.ALL,AnalysisLevel.ERRORS,AnalysisLevel.RESOLVED,AnalysisLevel.NONE);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    constructor(name : string,ordinal : number) {
    }
    @defaultConstructor
    AnalysisLevel(name : string,ordinal : number) {
        this.name = name;
        this.ordinal = ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : AnalysisLevel) : number {
        return this.ordinal - other.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace AnalysisListener {
    export type Constructors = 'AnalysisListener';
    export type Interface = Omit<AnalysisListener, Constructors>;
}
@DartClass
export class AnalysisListener {
    @Abstract
    aboutToPerformTask(context : AnalysisContext,taskDescription : string) : void{ throw 'abstract'}
    @Abstract
    computedErrors(context : AnalysisContext,source : any,errors : core.DartList<any>,lineInfo : any) : void{ throw 'abstract'}
    @Abstract
    excludedSource(context : AnalysisContext,source : any) : void{ throw 'abstract'}
    @Abstract
    includedSource(context : AnalysisContext,source : any) : void{ throw 'abstract'}
    @Abstract
    parsedDart(context : AnalysisContext,source : any,unit : any) : void{ throw 'abstract'}
    @Abstract
    resolvedDart(context : AnalysisContext,source : any,unit : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AnalysisListener() {
    }
}

export namespace AnalysisNotScheduledError {
    export type Constructors = 'AnalysisNotScheduledError';
    export type Interface = Omit<AnalysisNotScheduledError, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class AnalysisNotScheduledError implements core.Exception.Interface {
    constructor() {
    }
    @defaultConstructor
    AnalysisNotScheduledError() {
    }
}

export namespace AnalysisOptions {
    export type Constructors = 'AnalysisOptions';
    export type Interface = Omit<AnalysisOptions, Constructors>;
}
@DartClass
export class AnalysisOptions {
    private static __$signatureLength : number;
    static get signatureLength() : number { 
        if (this.__$signatureLength===undefined) {
            this.__$signatureLength = 4;
        }
        return this.__$signatureLength;
    }

    @AbstractProperty
    get analyzeFunctionBodiesPredicate() : (source : any) => boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get cacheSize() : number{ throw 'abstract'}
    @AbstractProperty
    get dart2jsHint() : boolean{ throw 'abstract'}
    @AbstractProperty
    get disableCacheFlushing() : boolean{ throw 'abstract'}
    @AbstractProperty
    get enableAssertInitializer() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get enableAssertMessage() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get enableAsync() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get enableConditionalDirectives() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    get enableGenericMethods() : boolean {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get enableInitializingFormalAccess() : boolean{ throw 'abstract'}
    @AbstractProperty
    get enableLazyAssignmentOperators() : boolean{ throw 'abstract'}
    @AbstractProperty
    get enableStrictCallChecks() : boolean{ throw 'abstract'}
    @AbstractProperty
    get enableSuperMixins() : boolean{ throw 'abstract'}
    @AbstractProperty
    get enableTiming() : boolean{ throw 'abstract'}
    @AbstractProperty
    get enableUriInPartOf() : boolean{ throw 'abstract'}
    @AbstractProperty
    get errorProcessors() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get excludePatterns() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get generateImplicitErrors() : boolean{ throw 'abstract'}
    @AbstractProperty
    get generateSdkErrors() : boolean{ throw 'abstract'}
    @AbstractProperty
    get hint() : boolean{ throw 'abstract'}
    @AbstractProperty
    get incremental() : boolean{ throw 'abstract'}
    @AbstractProperty
    get incrementalApi() : boolean{ throw 'abstract'}
    @AbstractProperty
    get incrementalValidation() : boolean{ throw 'abstract'}
    @AbstractProperty
    get lint() : boolean{ throw 'abstract'}
    @AbstractProperty
    get lintRules() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get patchPaths() : core.DartMap<string,core.DartList<string>>{ throw 'abstract'}
    @AbstractProperty
    get preserveComments() : boolean{ throw 'abstract'}
    @AbstractProperty
    get signature() : typed_data.Uint32List{ throw 'abstract'}
    @AbstractProperty
    get strongMode() : boolean{ throw 'abstract'}
    @AbstractProperty
    get trackCacheDependencies() : boolean{ throw 'abstract'}
    @Abstract
    resetToDefaults() : void{ throw 'abstract'}
    @Abstract
    setCrossContextOptionsFrom(options : AnalysisOptions) : void{ throw 'abstract'}
    static signaturesEqual(a : typed_data.Uint32List,b : typed_data.Uint32List) : boolean {
        /* TODO (AssertStatementImpl) : assert (a.length == signatureLength); */;
        /* TODO (AssertStatementImpl) : assert (b.length == signatureLength); */;
        if (a.length != b.length) {
            return false;
        }
        for(let i : number = 0; i < a.length; i++){
            if (op(Op.INDEX,a,i) != op(Op.INDEX,b,i)) {
                return false;
            }
        }
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisOptions() {
    }
}

export namespace AnalysisOptionsImpl {
    export type Constructors = 'AnalysisOptionsImpl' | 'from';
    export type Interface = Omit<AnalysisOptionsImpl, Constructors>;
}
@DartClass
@Implements(AnalysisOptions)
export class AnalysisOptionsImpl implements AnalysisOptions.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    private static __$DEFAULT_CACHE_SIZE : number;
    static get DEFAULT_CACHE_SIZE() : number { 
        if (this.__$DEFAULT_CACHE_SIZE===undefined) {
            this.__$DEFAULT_CACHE_SIZE = 64;
        }
        return this.__$DEFAULT_CACHE_SIZE;
    }

    private static __$NONNULLABLE_TYPES : core.DartList<string>;
    static get NONNULLABLE_TYPES() : core.DartList<string> { 
        if (this.__$NONNULLABLE_TYPES===undefined) {
            this.__$NONNULLABLE_TYPES = new core.DartList.literal<string>();
        }
        return this.__$NONNULLABLE_TYPES;
    }

    _analyzeFunctionBodiesPredicate : (source : any) => boolean;

    _signature : typed_data.Uint32List;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    cacheSize : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dart2jsHint : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enableAssertInitializer : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enableLazyAssignmentOperators : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enableStrictCallChecks : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enableSuperMixins : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enableTiming : boolean;

    _errorProcessors : core.DartList<any>;

    _excludePatterns : core.DartList<string>;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enableUriInPartOf : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    generateImplicitErrors : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    generateSdkErrors : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hint : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    incremental : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    incrementalApi : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    incrementalValidation : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lint : boolean;

    _lintRules : core.DartList<any>;

    patchPaths : core.DartMap<string,core.DartList<string>>;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    preserveComments : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    strongMode : boolean;

    strongModeHints : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    trackCacheDependencies : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    disableCacheFlushing : boolean;

    implicitCasts : boolean;

    nonnullableTypes : core.DartList<string>;

    implicitDynamic : boolean;

    constructor() {
    }
    @defaultConstructor
    AnalysisOptionsImpl() {
        this._analyzeFunctionBodiesPredicate = AnalysisOptionsImpl._analyzeAllFunctionBodies.bind(this);
        this.cacheSize = 64;
        this.dart2jsHint = false;
        this.enableAssertInitializer = false;
        this.enableLazyAssignmentOperators = false;
        this.enableStrictCallChecks = false;
        this.enableSuperMixins = false;
        this.enableTiming = false;
        this.enableUriInPartOf = true;
        this.generateImplicitErrors = true;
        this.generateSdkErrors = false;
        this.hint = true;
        this.incremental = false;
        this.incrementalApi = false;
        this.incrementalValidation = false;
        this.lint = false;
        this.patchPaths = new core.DartMap.literal([
        ]);
        this.preserveComments = true;
        this.strongMode = false;
        this.strongModeHints = false;
        this.trackCacheDependencies = true;
        this.disableCacheFlushing = false;
        this.implicitCasts = true;
        this.nonnullableTypes = AnalysisOptionsImpl.NONNULLABLE_TYPES;
        this.implicitDynamic = true;
    }
    @namedConstructor
    from(options : AnalysisOptions) {
        this._analyzeFunctionBodiesPredicate = AnalysisOptionsImpl._analyzeAllFunctionBodies.bind(this);
        this.cacheSize = 64;
        this.dart2jsHint = false;
        this.enableAssertInitializer = false;
        this.enableLazyAssignmentOperators = false;
        this.enableStrictCallChecks = false;
        this.enableSuperMixins = false;
        this.enableTiming = false;
        this.enableUriInPartOf = true;
        this.generateImplicitErrors = true;
        this.generateSdkErrors = false;
        this.hint = true;
        this.incremental = false;
        this.incrementalApi = false;
        this.incrementalValidation = false;
        this.lint = false;
        this.patchPaths = new core.DartMap.literal([
        ]);
        this.preserveComments = true;
        this.strongMode = false;
        this.strongModeHints = false;
        this.trackCacheDependencies = true;
        this.disableCacheFlushing = false;
        this.implicitCasts = true;
        this.nonnullableTypes = AnalysisOptionsImpl.NONNULLABLE_TYPES;
        this.implicitDynamic = true;
        this.analyzeFunctionBodiesPredicate = options.analyzeFunctionBodiesPredicate;
        this.dart2jsHint = options.dart2jsHint;
        this.enableAssertInitializer = options.enableAssertInitializer;
        this.enableStrictCallChecks = options.enableStrictCallChecks;
        this.enableLazyAssignmentOperators = options.enableLazyAssignmentOperators;
        this.enableSuperMixins = options.enableSuperMixins;
        this.enableTiming = options.enableTiming;
        this.errorProcessors = options.errorProcessors;
        this.excludePatterns = options.excludePatterns;
        this.generateImplicitErrors = options.generateImplicitErrors;
        this.generateSdkErrors = options.generateSdkErrors;
        this.hint = options.hint;
        this.incremental = options.incremental;
        this.incrementalApi = options.incrementalApi;
        this.incrementalValidation = options.incrementalValidation;
        this.lint = options.lint;
        this.lintRules = options.lintRules;
        this.preserveComments = options.preserveComments;
        this.strongMode = options.strongMode;
        if (is(options, AnalysisOptionsImpl)) {
            this.strongModeHints = options.strongModeHints;
            this.implicitCasts = options.implicitCasts;
            this.nonnullableTypes = options.nonnullableTypes;
            this.implicitDynamic = options.implicitDynamic;
        }
        this.trackCacheDependencies = options.trackCacheDependencies;
        this.disableCacheFlushing = options.disableCacheFlushing;
        this.patchPaths = options.patchPaths;
    }
    static from : new(options : AnalysisOptions) => AnalysisOptionsImpl;

    get analyzeFunctionBodies() : boolean {
        if (core.identical(this.analyzeFunctionBodiesPredicate,AnalysisOptionsImpl._analyzeAllFunctionBodies.bind(this))) {
            return true;
        }else if (core.identical(this.analyzeFunctionBodiesPredicate,AnalysisOptionsImpl._analyzeNoFunctionBodies.bind(this))) {
            return false;
        }else {
            throw new core.StateError('analyzeFunctionBodiesPredicate in use');
        }
    }
    set analyzeFunctionBodies(value : boolean) {
        if (value) {
            this.analyzeFunctionBodiesPredicate = AnalysisOptionsImpl._analyzeAllFunctionBodies.bind(this);
        }else {
            this.analyzeFunctionBodiesPredicate = AnalysisOptionsImpl._analyzeNoFunctionBodies.bind(this);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get analyzeFunctionBodiesPredicate() : (source : any) => boolean {
        return this._analyzeFunctionBodiesPredicate;
    }
    set analyzeFunctionBodiesPredicate(value : (source : any) => boolean) {
        if (op(Op.EQUALS,value,null)) {
            throw new core.ArgumentError.notNull('analyzeFunctionBodiesPredicate');
        }
        this._analyzeFunctionBodiesPredicate = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    get enableAssertMessage() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    set enableAssertMessage(enable : boolean) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableAsync() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    set enableAsync(enable : boolean) {
    }
    get enableConditionalDirectives() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    set enableConditionalDirectives(_ : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    get enableGenericMethods() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    set enableGenericMethods(enable : boolean) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableInitializingFormalAccess() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    set enableInitializingFormalAccess(enable : boolean) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorProcessors() : core.DartList<any> {
        return this._errorProcessors = ( this._errorProcessors ) || ( new core.DartList.literal<any>() );
    }
    set errorProcessors(processors : core.DartList<any>) {
        this._errorProcessors = processors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get excludePatterns() : core.DartList<string> {
        return this._excludePatterns = ( this._excludePatterns ) || ( new core.DartList.literal<string>() );
    }
    set excludePatterns(patterns : core.DartList<string>) {
        this._excludePatterns = patterns;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lintRules() : core.DartList<any> {
        return this._lintRules = ( this._lintRules ) || ( new core.DartList.literal<any>() );
    }
    set lintRules(rules : core.DartList<any>) {
        this._lintRules = rules;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get signature() : typed_data.Uint32List {
        if (op(Op.EQUALS,this._signature,null)) {
            let buffer : any = new bare.createInstance(any,null);
            buffer.addBool(this.enableAssertInitializer);
            buffer.addBool(this.enableLazyAssignmentOperators);
            buffer.addBool(this.enableStrictCallChecks);
            buffer.addBool(this.enableSuperMixins);
            buffer.addBool(this.enableUriInPartOf);
            buffer.addBool(this.implicitCasts);
            buffer.addBool(this.implicitDynamic);
            buffer.addBool(this.strongMode);
            buffer.addBool(this.strongModeHints);
            buffer.addInt(this.errorProcessors.length);
            for(let processor of this.errorProcessors) {
                buffer.addString(processor.description);
            }
            buffer.addInt(this.lintRules.length);
            for(let lintRule of this.lintRules) {
                buffer.addString(lintRule.lintCode.uniqueName);
            }
            let bytes : core.DartList<number> = buffer.toByteList();
            this._signature = new typed_data.Uint8List.fromList(bytes).buffer.asUint32List();
        }
        return this._signature;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resetToDefaults() : void {
        this.dart2jsHint = false;
        this.disableCacheFlushing = false;
        this.enableAssertInitializer = false;
        this.enableLazyAssignmentOperators = false;
        this.enableStrictCallChecks = false;
        this.enableSuperMixins = false;
        this.enableTiming = false;
        this.enableUriInPartOf = true;
        this._errorProcessors = null;
        this._excludePatterns = null;
        this.generateImplicitErrors = true;
        this.generateSdkErrors = false;
        this.hint = true;
        this.implicitCasts = true;
        this.implicitDynamic = true;
        this.incremental = false;
        this.incrementalApi = false;
        this.incrementalValidation = false;
        this.lint = false;
        this._lintRules = null;
        this.nonnullableTypes = AnalysisOptionsImpl.NONNULLABLE_TYPES;
        this.patchPaths = new core.DartMap.literal([
        ]);
        this.preserveComments = true;
        this.strongMode = false;
        this.strongModeHints = false;
        this.trackCacheDependencies = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setCrossContextOptionsFrom(options : AnalysisOptions) : void {
        this.enableLazyAssignmentOperators = options.enableLazyAssignmentOperators;
        this.enableStrictCallChecks = options.enableStrictCallChecks;
        this.enableSuperMixins = options.enableSuperMixins;
        this.strongMode = options.strongMode;
        if (is(options, AnalysisOptionsImpl)) {
            this.strongModeHints = options.strongModeHints;
        }
    }
    static _analyzeAllFunctionBodies(_ : any) : boolean {
        return true;
    }
    static _analyzeNoFunctionBodies(_ : any) : boolean {
        return false;
    }
}

export namespace AnalysisResult {
    export type Constructors = 'AnalysisResult';
    export type Interface = Omit<AnalysisResult, Constructors>;
}
@DartClass
export class AnalysisResult {
    _notices : core.DartList<ChangeNotice>;

    getTime : number;

    taskClassName : string;

    performTime : number;

    constructor(_notices : core.DartList<ChangeNotice>,getTime : number,taskClassName : string,performTime : number) {
    }
    @defaultConstructor
    AnalysisResult(_notices : core.DartList<ChangeNotice>,getTime : number,taskClassName : string,performTime : number) {
        this._notices = _notices;
        this.getTime = getTime;
        this.taskClassName = taskClassName;
        this.performTime = performTime;
    }
    get changeNotices() : core.DartList<ChangeNotice> {
        return this._notices;
    }
    get hasMoreWork() : boolean {
        return this._notices != null;
    }
}

export namespace CacheConsistencyValidationStatistics {
    export type Constructors = 'CacheConsistencyValidationStatistics';
    export type Interface = Omit<CacheConsistencyValidationStatistics, Constructors>;
}
@DartClass
export class CacheConsistencyValidationStatistics {
    numOfChanged : number;

    numOfRemoved : number;

    reset() : void {
        this.numOfChanged = 0;
        this.numOfRemoved = 0;
    }
    constructor() {
    }
    @defaultConstructor
    CacheConsistencyValidationStatistics() {
        this.numOfChanged = 0;
        this.numOfRemoved = 0;
    }
}

export namespace CacheConsistencyValidator {
    export type Constructors = 'CacheConsistencyValidator';
    export type Interface = Omit<CacheConsistencyValidator, Constructors>;
}
@DartClass
export class CacheConsistencyValidator {
    @Abstract
    getSourcesToComputeModificationTimes() : core.DartList<any>{ throw 'abstract'}
    @Abstract
    sourceModificationTimesComputed(sources : core.DartList<any>,times : core.DartList<number>) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    CacheConsistencyValidator() {
    }
}

export namespace CacheState {
    export type Constructors = 'CacheState';
    export type Interface = Omit<CacheState, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class CacheState implements core.DartComparable.Interface<CacheState> {
    private static __$ERROR : CacheState;
    static get ERROR() : CacheState { 
        if (this.__$ERROR===undefined) {
            this.__$ERROR = new CacheState('ERROR',0);
        }
        return this.__$ERROR;
    }

    private static __$FLUSHED : CacheState;
    static get FLUSHED() : CacheState { 
        if (this.__$FLUSHED===undefined) {
            this.__$FLUSHED = new CacheState('FLUSHED',1);
        }
        return this.__$FLUSHED;
    }

    private static __$IN_PROCESS : CacheState;
    static get IN_PROCESS() : CacheState { 
        if (this.__$IN_PROCESS===undefined) {
            this.__$IN_PROCESS = new CacheState('IN_PROCESS',2);
        }
        return this.__$IN_PROCESS;
    }

    private static __$INVALID : CacheState;
    static get INVALID() : CacheState { 
        if (this.__$INVALID===undefined) {
            this.__$INVALID = new CacheState('INVALID',3);
        }
        return this.__$INVALID;
    }

    private static __$VALID : CacheState;
    static get VALID() : CacheState { 
        if (this.__$VALID===undefined) {
            this.__$VALID = new CacheState('VALID',4);
        }
        return this.__$VALID;
    }

    private static __$values : core.DartList<CacheState>;
    static get values() : core.DartList<CacheState> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(CacheState.ERROR,CacheState.FLUSHED,CacheState.IN_PROCESS,CacheState.INVALID,CacheState.VALID);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    constructor(name : string,ordinal : number) {
    }
    @defaultConstructor
    CacheState(name : string,ordinal : number) {
        this.name = name;
        this.ordinal = ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : CacheState) : number {
        return this.ordinal - other.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace ChangeNotice {
    export type Constructors = 'ChangeNotice';
    export type Interface = Omit<ChangeNotice, Constructors>;
}
@DartClass
@Implements(AnalysisErrorInfo)
export class ChangeNotice implements AnalysisErrorInfo.Interface {
    @AbstractProperty
    get parsedDartUnit() : any{ throw 'abstract'}
    @AbstractProperty
    get resolvedDartUnit() : any{ throw 'abstract'}
    @AbstractProperty
    get source() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ChangeNotice() {
    }
}

export namespace ChangeNoticeImpl {
    export type Constructors = 'ChangeNoticeImpl';
    export type Interface = Omit<ChangeNoticeImpl, Constructors>;
}
@DartClass
@Implements(ChangeNotice)
export class ChangeNoticeImpl implements ChangeNotice.Interface {
    private static __$EMPTY_LIST : core.DartList<ChangeNoticeImpl>;
    static get EMPTY_LIST() : core.DartList<ChangeNoticeImpl> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<ChangeNoticeImpl>();
        }
        return this.__$EMPTY_LIST;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    source : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parsedDartUnit : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolvedDartUnit : any;

    _errors : core.DartList<any>;

    _lineInfo : any;

    constructor(source : any) {
    }
    @defaultConstructor
    ChangeNoticeImpl(source : any) {
        this.source = source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errors() : core.DartList<any> {
        return this._errors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lineInfo() : any {
        return this._lineInfo;
    }
    setErrors(errors : core.DartList<any>,lineInfo : any) : void {
        this._errors = errors;
        this._lineInfo = lineInfo;
        if (op(Op.EQUALS,lineInfo,null)) {
            AnalysisEngine.instance.logger.logInformation(`No line info: ${this.source}`,new bare.createInstance(any,null,new bare.createInstance(any,null),null));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Changes for ${this.source.fullName}`;
    }
}

export namespace ChangeSet {
    export type Constructors = 'ChangeSet';
    export type Interface = Omit<ChangeSet, Constructors>;
}
@DartClass
export class ChangeSet {
    addedSources : core.DartList<any>;

    changedSources : core.DartList<any>;

    _changedContent : core.DartHashMap<any,string>;

    changedRanges : core.DartHashMap<any,ChangeSet_ContentChange>;

    removedSources : core.DartList<any>;

    removedContainers : core.DartList<any>;

    get changedContents() : core.DartMap<any,string> {
        return this._changedContent;
    }
    get isEmpty() : boolean {
        return this.addedSources.isEmpty && this.changedSources.isEmpty && this._changedContent.isEmpty && this.changedRanges.isEmpty && this.removedSources.isEmpty && this.removedContainers.isEmpty;
    }
    addedSource(source : any) : void {
        this.addedSources.add(source);
    }
    changedContent(source : any,contents : string) : void {
        op(Op.INDEX_ASSIGN,this._changedContent,source,contents);
    }
    changedRange(source : any,contents : string,offset : number,oldLength : number,newLength : number) : void {
        op(Op.INDEX_ASSIGN,this.changedRanges,source,new ChangeSet_ContentChange(contents,offset,oldLength,newLength));
    }
    changedSource(source : any) : void {
        this.changedSources.add(source);
    }
    removedContainer(container : any) : void {
        if (container != null) {
            this.removedContainers.add(container);
        }
    }
    removedSource(source : any) : void {
        if (source != null) {
            this.removedSources.add(source);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let needsSeparator : boolean = this._appendSources(buffer,this.addedSources,false,"addedSources");
        needsSeparator = this._appendSources(buffer,this.changedSources,needsSeparator,"changedSources");
        needsSeparator = this._appendSources2(buffer,this._changedContent,needsSeparator,"changedContent");
        needsSeparator = this._appendSources2(buffer,this.changedRanges,needsSeparator,"changedRanges");
        needsSeparator = this._appendSources(buffer,this.removedSources,needsSeparator,"removedSources");
        let count : number = this.removedContainers.length;
        if (count > 0) {
            if (this.removedSources.isEmpty) {
                if (needsSeparator) {
                    buffer.write("; ");
                }
                buffer.write("removed: from ");
                buffer.write(count);
                buffer.write(" containers");
            }else {
                buffer.write(", and more from ");
                buffer.write(count);
                buffer.write(" containers");
            }
        }
        return buffer.toString();
    }
    _appendSources(buffer : core.DartStringBuffer,sources : core.DartList<any>,needsSeparator : boolean,label : string) : boolean {
        if (sources.isEmpty) {
            return needsSeparator;
        }
        if (needsSeparator) {
            buffer.write("; ");
        }
        buffer.write(label);
        let prefix : string = " ";
        for(let source of sources) {
            buffer.write(prefix);
            buffer.write(source.fullName);
            prefix = ", ";
        }
        return true;
    }
    _appendSources2(buffer : core.DartStringBuffer,sources : core.DartHashMap<any,any>,needsSeparator : boolean,label : string) : boolean {
        if (sources.isEmpty) {
            return needsSeparator;
        }
        if (needsSeparator) {
            buffer.write("; ");
        }
        buffer.write(label);
        let prefix : string = " ";
        for(let source of sources.keys.toSet()) {
            buffer.write(prefix);
            buffer.write(source.fullName);
            prefix = ", ";
        }
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    ChangeSet() {
        this.addedSources = new core.DartList<any>();
        this.changedSources = new core.DartList<any>();
        this._changedContent = new core.DartHashMap<any,string>();
        this.changedRanges = new core.DartHashMap<any,ChangeSet_ContentChange>();
        this.removedSources = new core.DartList<any>();
        this.removedContainers = new core.DartList<any>();
    }
}

export namespace ChangeSet_ContentChange {
    export type Constructors = 'ChangeSet_ContentChange';
    export type Interface = Omit<ChangeSet_ContentChange, Constructors>;
}
@DartClass
export class ChangeSet_ContentChange {
    contents : string;

    offset : number;

    oldLength : number;

    newLength : number;

    constructor(contents : string,offset : number,oldLength : number,newLength : number) {
    }
    @defaultConstructor
    ChangeSet_ContentChange(contents : string,offset : number,oldLength : number,newLength : number) {
        this.contents = contents;
        this.offset = offset;
        this.oldLength = oldLength;
        this.newLength = newLength;
    }
}

export namespace ComputedResult {
    export type Constructors = 'ComputedResult';
    export type Interface<V> = Omit<ComputedResult<V>, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class ComputedResult<V> {
    context : AnalysisContext;

    descriptor : any;

    target : any;

    value : V;

    constructor(context : AnalysisContext,descriptor : any,target : any,value : V) {
    }
    @defaultConstructor
    ComputedResult(context : AnalysisContext,descriptor : any,target : any,value : V) {
        this.context = context;
        this.descriptor = descriptor;
        this.target = target;
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Computed ${this.descriptor} of ${this.target} in ${this.context}`;
    }
}

export namespace ImplicitAnalysisEvent {
    export type Constructors = 'ImplicitAnalysisEvent';
    export type Interface = Omit<ImplicitAnalysisEvent, Constructors>;
}
@DartClass
export class ImplicitAnalysisEvent {
    source : any;

    isAnalyzed : boolean;

    constructor(source : any,isAnalyzed : boolean) {
    }
    @defaultConstructor
    ImplicitAnalysisEvent(source : any,isAnalyzed : boolean) {
        this.source = source;
        this.isAnalyzed = isAnalyzed;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.isAnalyzed ? '' : 'not '}analyzing ${this.source.fullName}`;
    }
}

export namespace InternalAnalysisContext {
    export type Constructors = 'InternalAnalysisContext';
    export type Interface = Omit<InternalAnalysisContext, Constructors>;
}
@DartClass
@Implements(AnalysisContext)
export class InternalAnalysisContext implements AnalysisContext.Interface {
    resultProvider : any;

    @AbstractProperty
    get analysisCache() : any{ throw 'abstract'}
    @AbstractProperty
    get cacheConsistencyValidator() : CacheConsistencyValidator{ throw 'abstract'}
    set contentCache(value : any){ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get embedderYamlLocator() : any{ throw 'abstract'}
    @AbstractProperty
    get explicitTargets() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get isActive() : boolean{ throw 'abstract'}
    set isActive(value : boolean){ throw 'abstract'}
    @AbstractProperty
    get onResultInvalidated() : any{ throw 'abstract'}
    @AbstractProperty
    get prioritySources() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get priorityTargets() : core.DartList<any>{ throw 'abstract'}
    @AbstractProperty
    get privateAnalysisCachePartition() : any{ throw 'abstract'}
    set typeProvider(typeProvider : any){ throw 'abstract'}
    @AbstractProperty
    get workManagers() : core.DartList<any>{ throw 'abstract'}
    @Abstract
    aboutToComputeResult(entry : any,result : any) : boolean{ throw 'abstract'}
    @Abstract
    computeExportedLibraries(source : any) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    computeImportedLibraries(source : any) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    ensureResolvedDartUnits(source : any) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    getCacheEntry(target : any) : any{ throw 'abstract'}
    @Abstract
    getContextFor(source : any) : InternalAnalysisContext{ throw 'abstract'}
    @Abstract
    getNotice(source : any) : ChangeNoticeImpl{ throw 'abstract'}
    @Abstract
    getPublicNamespace(library : any) : any{ throw 'abstract'}
    @Abstract
    handleContentsChanged(source : any,originalContents : string,newContents : string,notify : boolean) : boolean{ throw 'abstract'}
    @Abstract
    recordLibraryElements(elementMap : core.DartMap<any,any>) : void{ throw 'abstract'}
    @Abstract
    shouldErrorsBeAnalyzed(source : any) : boolean{ throw 'abstract'}
    @Abstract
    test_flushAstStructures(source : any) : void{ throw 'abstract'}
    @Abstract
    visitContentCache(visitor : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    InternalAnalysisContext() {
    }
}

export namespace Logger {
    export type Constructors = 'Logger';
    export type Interface = Omit<Logger, Constructors>;
}
@DartClass
export class Logger {
    private static __$NULL : Logger;
    static get NULL() : Logger { 
        if (this.__$NULL===undefined) {
            this.__$NULL = new NullLogger();
        }
        return this.__$NULL;
    }
    static set NULL(__$value : Logger)  { 
        this.__$NULL = __$value;
    }

    @Abstract
    logError(message : string,exception? : any) : void{ throw 'abstract'}
    @Abstract
    logInformation(message : string,exception? : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Logger() {
    }
}

export namespace NullLogger {
    export type Constructors = 'NullLogger';
    export type Interface = Omit<NullLogger, Constructors>;
}
@DartClass
@Implements(Logger)
export class NullLogger implements Logger.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logError(message : string,exception? : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logInformation(message : string,exception? : any) : void {
    }
    constructor() {
    }
    @defaultConstructor
    NullLogger() {
    }
}

export namespace ObsoleteSourceAnalysisException {
    export type Constructors = 'ObsoleteSourceAnalysisException';
    export type Interface = Omit<ObsoleteSourceAnalysisException, Constructors>;
}
@DartClass
export class ObsoleteSourceAnalysisException extends any {
    _source : any;

    constructor(source : any) {
    }
    @defaultConstructor
    ObsoleteSourceAnalysisException(source : any) {
        super.DartObject(`The source '${source.fullName}' was removed while it was being analyzed`);
        this._source = source;
    }
    get source() : any {
        return this._source;
    }
}

export namespace PerformanceStatistics {
    export type Constructors = 'PerformanceStatistics';
    export type Interface = Omit<PerformanceStatistics, Constructors>;
}
@DartClass
export class PerformanceStatistics {
    private static __$io : any;
    static get io() : any { 
        if (this.__$io===undefined) {
            this.__$io = new bare.createInstance(any,null,'io');
        }
        return this.__$io;
    }
    static set io(__$value : any)  { 
        this.__$io = __$value;
    }

    private static __$scan : any;
    static get scan() : any { 
        if (this.__$scan===undefined) {
            this.__$scan = new bare.createInstance(any,null,'scan');
        }
        return this.__$scan;
    }
    static set scan(__$value : any)  { 
        this.__$scan = __$value;
    }

    private static __$parse : any;
    static get parse() : any { 
        if (this.__$parse===undefined) {
            this.__$parse = new bare.createInstance(any,null,'parse');
        }
        return this.__$parse;
    }
    static set parse(__$value : any)  { 
        this.__$parse = __$value;
    }

    private static __$resolve : any;
    static get resolve() : any { 
        if (this.__$resolve===undefined) {
            this.__$resolve = new bare.createInstance(any,null,'resolve');
        }
        return this.__$resolve;
    }
    static set resolve(__$value : any)  { 
        this.__$resolve = __$value;
    }

    private static __$errors : any;
    static get errors() : any { 
        if (this.__$errors===undefined) {
            this.__$errors = new bare.createInstance(any,null,'errors');
        }
        return this.__$errors;
    }
    static set errors(__$value : any)  { 
        this.__$errors = __$value;
    }

    private static __$hints : any;
    static get hints() : any { 
        if (this.__$hints===undefined) {
            this.__$hints = new bare.createInstance(any,null,'hints');
        }
        return this.__$hints;
    }
    static set hints(__$value : any)  { 
        this.__$hints = __$value;
    }

    private static __$lint : any;
    static get lint() : any { 
        if (this.__$lint===undefined) {
            this.__$lint = new bare.createInstance(any,null,'lint');
        }
        return this.__$lint;
    }
    static set lint(__$value : any)  { 
        this.__$lint = __$value;
    }

    private static __$cycles : any;
    static get cycles() : any { 
        if (this.__$cycles===undefined) {
            this.__$cycles = new bare.createInstance(any,null,'cycles');
        }
        return this.__$cycles;
    }
    static set cycles(__$value : any)  { 
        this.__$cycles = __$value;
    }

    private static __$performAnalysis : any;
    static get performAnalysis() : any { 
        if (this.__$performAnalysis===undefined) {
            this.__$performAnalysis = new bare.createInstance(any,null,'performAnalysis');
        }
        return this.__$performAnalysis;
    }
    static set performAnalysis(__$value : any)  { 
        this.__$performAnalysis = __$value;
    }

    private static __$analysisTaskVisitor : any;
    static get analysisTaskVisitor() : any { 
        if (this.__$analysisTaskVisitor===undefined) {
            this.__$analysisTaskVisitor = new bare.createInstance(any,null,'analysisTaskVisitor');
        }
        return this.__$analysisTaskVisitor;
    }
    static set analysisTaskVisitor(__$value : any)  { 
        this.__$analysisTaskVisitor = __$value;
    }

    private static __$nextTask;
    static get nextTask() { 
        if (this.__$nextTask===undefined) {
            this.__$nextTask = new bare.createInstance(any,null,'nextAnalysisTask');
        }
        return this.__$nextTask;
    }
    static set nextTask(__$value : any)  { 
        this.__$nextTask = __$value;
    }

    private static __$incrementalAnalysis : any;
    static get incrementalAnalysis() : any { 
        if (this.__$incrementalAnalysis===undefined) {
            this.__$incrementalAnalysis = new bare.createInstance(any,null,'incrementalAnalysis');
        }
        return this.__$incrementalAnalysis;
    }
    static set incrementalAnalysis(__$value : any)  { 
        this.__$incrementalAnalysis = __$value;
    }

    private static __$summary : any;
    static get summary() : any { 
        if (this.__$summary===undefined) {
            this.__$summary = new bare.createInstance(any,null,'summary');
        }
        return this.__$summary;
    }
    static set summary(__$value : any)  { 
        this.__$summary = __$value;
    }

    private static __$cacheConsistencyValidationStatistics : CacheConsistencyValidationStatistics;
    static get cacheConsistencyValidationStatistics() : CacheConsistencyValidationStatistics { 
        if (this.__$cacheConsistencyValidationStatistics===undefined) {
            this.__$cacheConsistencyValidationStatistics = new CacheConsistencyValidationStatistics();
        }
        return this.__$cacheConsistencyValidationStatistics;
    }
    static set cacheConsistencyValidationStatistics(__$value : CacheConsistencyValidationStatistics)  { 
        this.__$cacheConsistencyValidationStatistics = __$value;
    }

    constructor() {
    }
    @defaultConstructor
    PerformanceStatistics() {
    }
}

export namespace ResolutionEraser {
    export type Constructors = 'ResolutionEraser';
    export type Interface = Omit<ResolutionEraser, Constructors>;
}
@DartClass
export class ResolutionEraser extends any {
    eraseDeclarations : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAssignmentExpression(node : any) : core.DartObject {
        node.staticElement = null;
        node.propagatedElement = null;
        return super.visitAssignmentExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBinaryExpression(node : any) : core.DartObject {
        node.staticElement = null;
        node.propagatedElement = null;
        return super.visitBinaryExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitBreakStatement(node : any) : core.DartObject {
        node.target = null;
        return super.visitBreakStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnit(node : any) : core.DartObject {
        if (this.eraseDeclarations) {
            node.element = null;
        }
        return super.visitCompilationUnit(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorDeclaration(node : any) : core.DartObject {
        if (this.eraseDeclarations) {
            node.element = null;
        }
        return super.visitConstructorDeclaration(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorName(node : any) : core.DartObject {
        node.staticElement = null;
        return super.visitConstructorName(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContinueStatement(node : any) : core.DartObject {
        node.target = null;
        return super.visitContinueStatement(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirective(node : any) : core.DartObject {
        if (this.eraseDeclarations) {
            node.element = null;
        }
        return super.visitDirective(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitExpression(node : any) : core.DartObject {
        node.staticType = null;
        node.propagatedType = null;
        return super.visitExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : core.DartObject {
        if (this.eraseDeclarations) {
            node.element = null;
        }
        return super.visitFunctionExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpressionInvocation(node : any) : core.DartObject {
        node.staticElement = null;
        node.propagatedElement = null;
        return super.visitFunctionExpressionInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIndexExpression(node : any) : core.DartObject {
        node.staticElement = null;
        node.propagatedElement = null;
        return super.visitIndexExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInstanceCreationExpression(node : any) : core.DartObject {
        node.staticElement = null;
        return super.visitInstanceCreationExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPostfixExpression(node : any) : core.DartObject {
        node.staticElement = null;
        node.propagatedElement = null;
        return super.visitPostfixExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPrefixExpression(node : any) : core.DartObject {
        node.staticElement = null;
        node.propagatedElement = null;
        return super.visitPrefixExpression(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingConstructorInvocation(node : any) : core.DartObject {
        node.staticElement = null;
        return super.visitRedirectingConstructorInvocation(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        if (this.eraseDeclarations || !node.inDeclarationContext()) {
            node.staticElement = null;
        }
        node.propagatedElement = null;
        return super.visitSimpleIdentifier(node);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperConstructorInvocation(node : any) : core.DartObject {
        node.staticElement = null;
        return super.visitSuperConstructorInvocation(node);
    }
    static erase(node : any,_namedArguments? : {eraseDeclarations? : boolean}) : void {
        let {eraseDeclarations} = Object.assign({
            "eraseDeclarations" : true}, _namedArguments );
        let eraser : ResolutionEraser = new ResolutionEraser();
        eraser.eraseDeclarations = eraseDeclarations;
        node.accept(eraser);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResolutionEraser() {
        this.eraseDeclarations = true;
    }
}

export namespace ResultChangedEvent {
    export type Constructors = 'ResultChangedEvent';
    export type Interface<V> = Omit<ResultChangedEvent<V>, Constructors>;
}
@DartClass
export class ResultChangedEvent<V> {
    context : AnalysisContext;

    target : any;

    descriptor : any;

    value : V;

    _wasComputed : boolean;

    constructor(context : AnalysisContext,target : any,descriptor : any,value : V,_wasComputed : boolean) {
    }
    @defaultConstructor
    ResultChangedEvent(context : AnalysisContext,target : any,descriptor : any,value : V,_wasComputed : boolean) {
        this.context = context;
        this.target = target;
        this.descriptor = descriptor;
        this.value = value;
        this._wasComputed = _wasComputed;
    }
    get wasComputed() : boolean {
        return this._wasComputed;
    }
    get wasInvalidated() : boolean {
        return !this._wasComputed;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let operation : string = this._wasComputed ? 'Computed' : 'Invalidated';
        return `${operation} ${this.descriptor} of ${this.target} in ${this.context}`;
    }
}

export namespace SourcesChangedEvent {
    export type Constructors = 'SourcesChangedEvent';
    export type Interface = Omit<SourcesChangedEvent, Constructors>;
}
@DartClass
export class SourcesChangedEvent {
    _changeSet : ChangeSet;

    constructor(changeSet : ChangeSet) {
    }
    @defaultConstructor
    SourcesChangedEvent(changeSet : ChangeSet) {
        this._changeSet = changeSet;
    }
    @namedFactory
    static $changedContent(source : any,contents : string) : SourcesChangedEvent {
        let changeSet : ChangeSet = new ChangeSet();
        changeSet.changedContent(source,contents);
        return new SourcesChangedEvent(changeSet);
    }
    static changedContent : new(source : any,contents : string) => SourcesChangedEvent;

    @namedFactory
    static $changedRange(source : any,contents : string,offset : number,oldLength : number,newLength : number) : SourcesChangedEvent {
        let changeSet : ChangeSet = new ChangeSet();
        changeSet.changedRange(source,contents,offset,oldLength,newLength);
        return new SourcesChangedEvent(changeSet);
    }
    static changedRange : new(source : any,contents : string,offset : number,oldLength : number,newLength : number) => SourcesChangedEvent;

    get changedSources() : core.DartIterable<any> {
        let changedSources : core.DartList<any> = new core.DartList.from(this._changeSet.changedSources);
        changedSources.addAll(this._changeSet.changedContents.keys);
        changedSources.addAll(this._changeSet.changedRanges.keys);
        return changedSources;
    }
    get wereSourcesAdded() : boolean {
        return this._changeSet.addedSources.length > 0;
    }
    get wereSourcesRemoved() : boolean {
        return this._changeSet.removedSources.length > 0 || this._changeSet.removedContainers.length > 0;
    }
}

export class properties {
}
