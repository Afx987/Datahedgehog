/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/engine_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisOptionsImplTest);
        defineReflectiveTests(SourcesChangedEventTest);
    });
};
export namespace AnalysisOptionsImplTest {
    export type Constructors = 'AnalysisOptionsImplTest';
    export type Interface = Omit<AnalysisOptionsImplTest, Constructors>;
}
@DartClass
export class AnalysisOptionsImplTest {
    test_resetToDefaults() {
        let defaultOptions : any = new bare.createInstance(any,null);
        let modifiedOptions : any = new bare.createInstance(any,null);
        modifiedOptions.dart2jsHint = true;
        modifiedOptions.disableCacheFlushing = true;
        modifiedOptions.enableAssertInitializer = true;
        modifiedOptions.enableLazyAssignmentOperators = true;
        modifiedOptions.enableStrictCallChecks = true;
        modifiedOptions.enableSuperMixins = true;
        modifiedOptions.enableTiming = true;
        modifiedOptions.enableUriInPartOf = true;
        modifiedOptions.errorProcessors = new core.DartList.literal(null);
        modifiedOptions.excludePatterns = new core.DartList.literal('a');
        modifiedOptions.generateImplicitErrors = false;
        modifiedOptions.generateSdkErrors = true;
        modifiedOptions.hint = false;
        modifiedOptions.incremental = true;
        modifiedOptions.incrementalApi = true;
        modifiedOptions.incrementalValidation = true;
        modifiedOptions.lint = true;
        modifiedOptions.lintRules = new core.DartList.literal(null);
        modifiedOptions.patchPaths = new core.DartMap.literal([
            ['dart:core',new core.DartList.literal('/dart_core.patch.dart')]]);
        modifiedOptions.preserveComments = false;
        modifiedOptions.strongMode = true;
        modifiedOptions.trackCacheDependencies = false;
        modifiedOptions.resetToDefaults();
        expect(modifiedOptions.dart2jsHint,defaultOptions.dart2jsHint);
        expect(modifiedOptions.disableCacheFlushing,defaultOptions.disableCacheFlushing);
        expect(modifiedOptions.enableAssertInitializer,defaultOptions.enableAssertInitializer);
        expect(modifiedOptions.enableLazyAssignmentOperators,defaultOptions.enableLazyAssignmentOperators);
        expect(modifiedOptions.enableStrictCallChecks,defaultOptions.enableStrictCallChecks);
        expect(modifiedOptions.enableSuperMixins,defaultOptions.enableSuperMixins);
        expect(modifiedOptions.enableTiming,defaultOptions.enableTiming);
        expect(modifiedOptions.enableUriInPartOf,defaultOptions.enableUriInPartOf);
        expect(modifiedOptions.errorProcessors,defaultOptions.errorProcessors);
        expect(modifiedOptions.excludePatterns,defaultOptions.excludePatterns);
        expect(modifiedOptions.generateImplicitErrors,defaultOptions.generateImplicitErrors);
        expect(modifiedOptions.generateSdkErrors,defaultOptions.generateSdkErrors);
        expect(modifiedOptions.hint,defaultOptions.hint);
        expect(modifiedOptions.incremental,defaultOptions.incremental);
        expect(modifiedOptions.incrementalApi,defaultOptions.incrementalApi);
        expect(modifiedOptions.incrementalValidation,defaultOptions.incrementalValidation);
        expect(modifiedOptions.lint,defaultOptions.lint);
        expect(modifiedOptions.lintRules,defaultOptions.lintRules);
        expect(modifiedOptions.patchPaths,defaultOptions.patchPaths);
        expect(modifiedOptions.preserveComments,defaultOptions.preserveComments);
        expect(modifiedOptions.strongMode,defaultOptions.strongMode);
        expect(modifiedOptions.trackCacheDependencies,defaultOptions.trackCacheDependencies);
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisOptionsImplTest() {
    }
}

export namespace AnalyzedSourcesListener {
    export type Constructors = 'AnalyzedSourcesListener';
    export type Interface = Omit<AnalyzedSourcesListener, Constructors>;
}
@DartClass
export class AnalyzedSourcesListener {
    actualEvents : core.DartList<any>;

    analyzedSources : core.DartList<any>;

    expectAnalyzed(source : any) : void {
        expect(this.analyzedSources,contains(source));
    }
    expectNotAnalyzed(source : any) : void {
        expect(this.analyzedSources,isNot(contains(source)));
    }
    onData(event : any) : void {
        this.actualEvents.add(event);
        if (event.isAnalyzed) {
            this.analyzedSources.add(event.source);
        }else {
            this.analyzedSources.remove(event.source);
        }
    }
    constructor() {
    }
    @defaultConstructor
    AnalyzedSourcesListener() {
        this.actualEvents = new core.DartList.literal<any>();
        this.analyzedSources = new core.DartList.literal<any>();
    }
}

export namespace CompilationUnitMock {
    export type Constructors = 'CompilationUnitMock';
    export type Interface = Omit<CompilationUnitMock, Constructors>;
}
@DartClass
@Implements(any)
export class CompilationUnitMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilationUnitMock() {
    }
}

export namespace MockSourceFactory {
    export type Constructors = 'MockSourceFactory';
    export type Interface = Omit<MockSourceFactory, Constructors>;
}
@DartClass
export class MockSourceFactory extends any {
    constructor() {
    }
    @defaultConstructor
    MockSourceFactory() {
        super.DartObject(new core.DartList.literal());
    }
    resolveUri(containingSource : any,containedUri : string) : any {
        throw new core.UnimplementedError();
    }
}

export namespace SourcesChangedEventTest {
    export type Constructors = 'SourcesChangedEventTest';
    export type Interface = Omit<SourcesChangedEventTest, Constructors>;
}
@DartClass
export class SourcesChangedEventTest {
    test_added() : void {
        let source = new bare.createInstance(any,null,'','/test.dart');
        let changeSet = new bare.createInstance(any,null);
        changeSet.addedSource(source);
        let event = new bare.createInstance(any,null,changeSet);
        SourcesChangedEventTest.assertEvent(event,{
            wereSourcesAdded : true});
    }
    test_changedContent() : void {
        let source = new bare.createInstance(any,null,'','/test.dart');
        let changeSet = new bare.createInstance(any,null);
        changeSet.changedContent(source,'library A;');
        let event = new bare.createInstance(any,null,changeSet);
        SourcesChangedEventTest.assertEvent(event,{
            changedSources : new core.DartList.literal(source)});
    }
    test_changedContent2() : void {
        let source = new bare.createInstance(any,null,'','/test.dart');
        let event = new bare.createInstance(any,null,source,'library A;');
        SourcesChangedEventTest.assertEvent(event,{
            changedSources : new core.DartList.literal(source)});
    }
    test_changedRange() : void {
        let source = new bare.createInstance(any,null,'','/test.dart');
        let changeSet = new bare.createInstance(any,null);
        changeSet.changedRange(source,'library A;',0,0,13);
        let event = new bare.createInstance(any,null,changeSet);
        SourcesChangedEventTest.assertEvent(event,{
            changedSources : new core.DartList.literal(source)});
    }
    test_changedRange2() : void {
        let source = new bare.createInstance(any,null,'','/test.dart');
        let event = new bare.createInstance(any,null,source,'library A;',0,0,13);
        SourcesChangedEventTest.assertEvent(event,{
            changedSources : new core.DartList.literal(source)});
    }
    test_changedSources() : void {
        let source = new bare.createInstance(any,null,'','/test.dart');
        let changeSet = new bare.createInstance(any,null);
        changeSet.changedSource(source);
        let event = new bare.createInstance(any,null,changeSet);
        SourcesChangedEventTest.assertEvent(event,{
            changedSources : new core.DartList.literal(source)});
    }
    test_empty() : void {
        let changeSet = new bare.createInstance(any,null);
        let event = new bare.createInstance(any,null,changeSet);
        SourcesChangedEventTest.assertEvent(event);
    }
    test_removed() : void {
        let source = new bare.createInstance(any,null,'','/test.dart');
        let changeSet = new bare.createInstance(any,null);
        changeSet.removedSource(source);
        let event = new bare.createInstance(any,null,changeSet);
        SourcesChangedEventTest.assertEvent(event,{
            wereSourcesRemoved : true});
    }
    static assertEvent(event : any,_namedArguments? : {wereSourcesAdded? : boolean,changedSources? : core.DartList<any>,wereSourcesRemoved? : boolean}) : void {
        let {wereSourcesAdded,changedSources,wereSourcesRemoved} = Object.assign({
            "wereSourcesAdded" : false,
            "changedSources" : Source.EMPTY_LIST,
            "wereSourcesRemoved" : false}, _namedArguments );
        expect(event.wereSourcesAdded,wereSourcesAdded);
        expect(event.changedSources,changedSources);
        expect(event.wereSourcesRemoved,wereSourcesRemoved);
    }
    constructor() {
    }
    @defaultConstructor
    SourcesChangedEventTest() {
    }
}

export namespace SourcesChangedListener {
    export type Constructors = 'SourcesChangedListener';
    export type Interface = Omit<SourcesChangedListener, Constructors>;
}
@DartClass
export class SourcesChangedListener {
    actualEvents : core.DartList<any>;

    assertEvent(_namedArguments? : {wereSourcesAdded? : boolean,changedSources? : core.DartList<any>,wereSourcesRemovedOrDeleted? : boolean}) : void {
        let {wereSourcesAdded,changedSources,wereSourcesRemovedOrDeleted} = Object.assign({
            "wereSourcesAdded" : false,
            "changedSources" : Source.EMPTY_LIST,
            "wereSourcesRemovedOrDeleted" : false}, _namedArguments );
        if (this.actualEvents.isEmpty) {
            fail('Expected event but found none');
        }
        let actual : any = this.actualEvents.removeAt(0);
        SourcesChangedEventTest.assertEvent(actual,{
            wereSourcesAdded : wereSourcesAdded,changedSources : changedSources,wereSourcesRemoved : wereSourcesRemovedOrDeleted});
    }
    assertNoMoreEvents() : void {
        expect(this.actualEvents,new core.DartList.literal());
    }
    onData(event : any) : void {
        this.actualEvents.add(event);
    }
    constructor() {
    }
    @defaultConstructor
    SourcesChangedListener() {
        this.actualEvents = new core.DartList.literal();
    }
}

export namespace TestAnalysisContext {
    export type Constructors = 'TestAnalysisContext';
    export type Interface = Omit<TestAnalysisContext, Constructors>;
}
@DartClass
@Implements(any)
export class TestAnalysisContext implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onResultInvalidated : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resultProvider : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get analysisCache() : any {
        fail("Unexpected invocation of analysisCache");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get analysisOptions() : any {
        fail("Unexpected invocation of getAnalysisOptions");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set analysisOptions(options : any) {
        fail("Unexpected invocation of setAnalysisOptions");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set analysisPriorityOrder(sources : core.DartList<any>) {
        fail("Unexpected invocation of setAnalysisPriorityOrder");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get cacheConsistencyValidator() : any {
        fail("Unexpected invocation of cacheConsistencyValidator");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set contentCache(value : any) {
        fail("Unexpected invocation of setContentCache");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get declaredVariables() : any {
        fail("Unexpected invocation of getDeclaredVariables");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get embedderYamlLocator() : any {
        fail("Unexpected invocation of get embedderYamlLocator");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get explicitTargets() : core.DartList<any> {
        fail("Unexpected invocation of visitCacheItems");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fileResolverProvider() : any {
        fail("Unexpected invocation of fileResolverProvider");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set fileResolverProvider(resolverProvider : any) {
        fail("Unexpected invocation of fileResolverProvider");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get htmlSources() : core.DartList<any> {
        fail("Unexpected invocation of getHtmlSources");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get implicitAnalysisEvents() : async.DartStream<any> {
        fail("Unexpected invocation of analyzedSources");
        return null;
    }
    get isActive() : boolean {
        fail("Unexpected invocation of isActive");
        return false;
    }
    set isActive(isActive : boolean) {
        fail("Unexpected invocation of isActive");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDisposed() : boolean {
        fail("Unexpected invocation of isDisposed");
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get launchableClientLibrarySources() : core.DartList<any> {
        fail("Unexpected invocation of getLaunchableClientLibrarySources");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get launchableServerLibrarySources() : core.DartList<any> {
        fail("Unexpected invocation of getLaunchableServerLibrarySources");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get librarySources() : core.DartList<any> {
        fail("Unexpected invocation of getLibrarySources");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        fail("Unexpected invocation of name");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set name(value : string) {
        fail("Unexpected invocation of name");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get onSourcesChanged() : async.DartStream<any> {
        fail("Unexpected invocation of onSourcesChanged");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prioritySources() : core.DartList<any> {
        fail("Unexpected invocation of getPrioritySources");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get priorityTargets() : core.DartList<any> {
        fail("Unexpected invocation of visitCacheItems");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get privateAnalysisCachePartition() : any {
        fail("Unexpected invocation of privateAnalysisCachePartition");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sourceFactory() : any {
        fail("Unexpected invocation of getSourceFactory");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set sourceFactory(factory : any) {
        fail("Unexpected invocation of setSourceFactory");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sources() : core.DartList<any> {
        fail("Unexpected invocation of sources");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeProvider() : any {
        fail("Unexpected invocation of getTypeProvider");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeProvider(typeProvider : any) {
        fail("Unexpected invocation of set typeProvider");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeSystem() : any {
        fail("Unexpected invocation of getTypeSystem");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get workManagers() : core.DartList<any> {
        fail("Unexpected invocation of workManagers");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    aboutToComputeResult(entry : any,result : any) : boolean {
        fail("Unexpected invocation of aboutToComputeResult");
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addListener(listener : any) : void {
        fail("Unexpected invocation of addListener");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyAnalysisDelta(delta : any) : void {
        fail("Unexpected invocation of applyAnalysisDelta");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyChanges(changeSet : any) : void {
        fail("Unexpected invocation of applyChanges");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDocumentationComment(element : any) : string {
        fail("Unexpected invocation of computeDocumentationComment");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeErrors(source : any) : core.DartList<any> {
        fail("Unexpected invocation of computeErrors");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeExportedLibraries(source : any) : core.DartList<any> {
        fail("Unexpected invocation of computeExportedLibraries");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeImportedLibraries(source : any) : core.DartList<any> {
        fail("Unexpected invocation of computeImportedLibraries");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeKindOf(source : any) : any {
        fail("Unexpected invocation of computeKindOf");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeLibraryElement(source : any) : any {
        fail("Unexpected invocation of computeLibraryElement");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeLineInfo(source : any) : any {
        fail("Unexpected invocation of computeLineInfo");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeResolvedCompilationUnitAsync(source : any,librarySource : any) : any {
        fail("Unexpected invocation of getResolvedCompilationUnitFuture");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeResult(target : any,result : any) : core.DartObject {
        fail("Unexpected invocation of computeResult");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : void {
        fail("Unexpected invocation of dispose");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ensureResolvedDartUnits(source : any) : core.DartList<any> {
        fail("Unexpected invocation of ensureResolvedDartUnits");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exists(source : any) : boolean {
        fail("Unexpected invocation of exists");
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getCacheEntry(target : any) : any {
        fail("Unexpected invocation of visitCacheItems");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getCompilationUnitElement(unitSource : any,librarySource : any) : any {
        fail("Unexpected invocation of getCompilationUnitElement");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getConfigurationData(key : any) : core.DartObject {
        fail("Unexpected invocation of getConfigurationData");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContents(source : any) : any {
        fail("Unexpected invocation of getContents");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContextFor(source : any) : any {
        fail("Unexpected invocation of getContextFor");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getElement(location : any) : any {
        fail("Unexpected invocation of getElement");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getErrors(source : any) : any {
        fail("Unexpected invocation of getErrors");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getHtmlFilesReferencing(source : any) : core.DartList<any> {
        fail("Unexpected invocation of getHtmlFilesReferencing");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getKindOf(source : any) : any {
        fail("Unexpected invocation of getKindOf");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLibrariesContaining(source : any) : core.DartList<any> {
        fail("Unexpected invocation of getLibrariesContaining");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLibrariesDependingOn(librarySource : any) : core.DartList<any> {
        fail("Unexpected invocation of getLibrariesDependingOn");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLibrariesReferencedFromHtml(htmlSource : any) : core.DartList<any> {
        fail("Unexpected invocation of getLibrariesReferencedFromHtml");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLibraryElement(source : any) : any {
        fail("Unexpected invocation of getLibraryElement");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLineInfo(source : any) : any {
        fail("Unexpected invocation of getLineInfo");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getModificationStamp(source : any) : number {
        fail("Unexpected invocation of getModificationStamp");
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getNotice(source : any) : any {
        fail("Unexpected invocation of getNotice");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPublicNamespace(library : any) : any {
        fail("Unexpected invocation of getPublicNamespace");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResolvedCompilationUnit(unitSource : any,library : any) : any {
        fail("Unexpected invocation of getResolvedCompilationUnit");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResolvedCompilationUnit2(unitSource : any,librarySource : any) : any {
        fail("Unexpected invocation of getResolvedCompilationUnit");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResult(target : any,result : any) : core.DartObject {
        fail("Unexpected invocation of getResult");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSourcesWithFullName(path : string) : core.DartList<any> {
        fail("Unexpected invocation of getSourcesWithFullName");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleContentsChanged(source : any,originalContents : string,newContents : string,notify : boolean) : boolean {
        fail("Unexpected invocation of handleContentsChanged");
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    invalidateLibraryHints(librarySource : any) : void {
        fail("Unexpected invocation of invalidateLibraryHints");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isClientLibrary(librarySource : any) : boolean {
        fail("Unexpected invocation of isClientLibrary");
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isServerLibrary(librarySource : any) : boolean {
        fail("Unexpected invocation of isServerLibrary");
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onResultChanged(descriptor : any) : async.DartStream<any> {
        fail("Unexpected invocation of onResultChanged");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onResultComputed(descriptor : any) : async.DartStream<any> {
        fail("Unexpected invocation of onResultComputed");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseCompilationUnit(source : any) : any {
        fail("Unexpected invocation of parseCompilationUnit");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseHtmlDocument(source : any) : any {
        fail("Unexpected invocation of parseHtmlDocument");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performAnalysisTask() : any {
        fail("Unexpected invocation of performAnalysisTask");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    recordLibraryElements(elementMap : core.DartMap<any,any>) : void {
        fail("Unexpected invocation of recordLibraryElements");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeListener(listener : any) : void {
        fail("Unexpected invocation of removeListener");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveCompilationUnit(unitSource : any,library : any) : any {
        fail("Unexpected invocation of resolveCompilationUnit");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveCompilationUnit2(unitSource : any,librarySource : any) : any {
        fail("Unexpected invocation of resolveCompilationUnit");
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setChangedContents(source : any,contents : string,offset : number,oldLength : number,newLength : number) : void {
        fail("Unexpected invocation of setChangedContents");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setConfigurationData(key : any,data : core.DartObject) : void {
        fail("Unexpected invocation of setConfigurationData");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setContents(source : any,contents : string) : void {
        fail("Unexpected invocation of setContents");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldErrorsBeAnalyzed(source : any) : boolean {
        fail("Unexpected invocation of shouldErrorsBeAnalyzed");
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_flushAstStructures(source : any) : void {
        fail("Unexpected invocation of test_flushAstStructures");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContentCache(visitor : any) : void {
        fail("Unexpected invocation of visitContentCache");
    }
    constructor() {
    }
    @defaultConstructor
    TestAnalysisContext() {
        this.onResultInvalidated = new bare.createInstance(any,null);
    }
}

export class properties {
}
