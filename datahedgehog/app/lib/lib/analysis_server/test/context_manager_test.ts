/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/context_manager_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as lib4 from "./mocks";
import * as lib5 from "./mock_sdk";
import * as collection from "@dart2ts/dart/core";
import * as lib7 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AbstractContextManagerTest);
        defineReflectiveTests(ContextManagerWithNewOptionsTest);
        defineReflectiveTests(ContextManagerWithOldOptionsTest);
    });
};
export namespace ContextManagerTest {
    export type Constructors = 'ContextManagerTest';
    export type Interface = Omit<ContextManagerTest, Constructors>;
}
@DartClass
export class ContextManagerTest {
    private static __$BIN_NAME : string;
    static get BIN_NAME() : string { 
        if (this.__$BIN_NAME===undefined) {
            this.__$BIN_NAME = 'bin';
        }
        return this.__$BIN_NAME;
    }

    private static __$EXAMPLE_NAME : string;
    static get EXAMPLE_NAME() : string { 
        if (this.__$EXAMPLE_NAME===undefined) {
            this.__$EXAMPLE_NAME = 'example';
        }
        return this.__$EXAMPLE_NAME;
    }

    private static __$LIB_NAME : string;
    static get LIB_NAME() : string { 
        if (this.__$LIB_NAME===undefined) {
            this.__$LIB_NAME = 'lib';
        }
        return this.__$LIB_NAME;
    }

    private static __$SRC_NAME : string;
    static get SRC_NAME() : string { 
        if (this.__$SRC_NAME===undefined) {
            this.__$SRC_NAME = 'src';
        }
        return this.__$SRC_NAME;
    }

    private static __$TEST_NAME : string;
    static get TEST_NAME() : string { 
        if (this.__$TEST_NAME===undefined) {
            this.__$TEST_NAME = 'test';
        }
        return this.__$TEST_NAME;
    }

    manager : any;

    callbacks : TestContextManagerCallbacks;

    resourceProvider : any;

    packageMapProvider : lib4.MockPackageMapProvider;

    packageResolver : any;

    projPath : string;

    missing_required_param : any;

    missing_return : any;

    invalid_assignment_error : any;

    unused_local_variable : any;

    get analysisFilesGlobs() : core.DartList<any> {
        let patterns : core.DartList<string> = new core.DartList.literal<string>(`**/*.${AnalysisEngine.SUFFIX_DART}`,`**/*.${AnalysisEngine.SUFFIX_HTML}`,`**/*.${AnalysisEngine.SUFFIX_HTM}`,`**/${AnalysisEngine.ANALYSIS_OPTIONS_FILE}`,`**/${AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE}`);
        return patterns.map((pattern : any) =>  {
            return new bare.createInstance(any,null,lib3.properties.posix.separator,pattern);
        }).toList();
    }
    get analysisOptions() : any {
        return this.callbacks.analysisOptions;
    }
    get enableAnalysisDriver() : boolean {
        return false;
    }
    get errorProcessors() : core.DartList<any> {
        return this.analysisOptions.errorProcessors;
    }
    get lints() : core.DartList<any> {
        return this.analysisOptions.lintRules;
    }
    get sourceFactory() : any {
        return this.callbacks.sourceFactory;
    }
    get _currentPackageMap() : core.DartMap<string,core.DartList<any>> {
        return this._packageMap(this.projPath);
    }
    deleteFile(pathComponents : core.DartList<string>) : void {
        let filePath : string = lib3.properties.posix.joinAll(pathComponents);
        this.resourceProvider.deleteFile(filePath);
    }
    getProcessor(error : any) : any {
        return op(Op.EQUALS,this.callbacks.currentDriver,null) ? ErrorProcessor.getProcessor(this.callbacks.currentContext.analysisOptions,error) : this.errorProcessors.firstWhere((p : any) =>  {
            return p.appliesTo(error);
        },{
            orElse : () =>  {
                return null;
            }});
    }
    newFile(pathComponents : core.DartList<string>,content? : string) : string {
        content = content || '';
        let filePath : string = lib3.properties.posix.joinAll(pathComponents);
        this.resourceProvider.newFile(filePath,content);
        return filePath;
    }
    newFileFromBytes(pathComponents : core.DartList<string>,bytes : core.DartList<number>) : string {
        let filePath : string = lib3.properties.posix.joinAll(pathComponents);
        this.resourceProvider.newFileWithBytes(filePath,bytes);
        return filePath;
    }
    newFolder(pathComponents : core.DartList<string>) : string {
        let folderPath : string = lib3.properties.posix.joinAll(pathComponents);
        this.resourceProvider.newFolder(folderPath);
        return folderPath;
    }
    processRequiredPlugins() : void {
        let plugins : core.DartList<any> = new core.DartList.literal<any>();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(plugins);
        registerLintRules();
    }
    providePackageResolver(folder : any) : any {
        return this.packageResolver;
    }
    setUp() : void {
        this.processRequiredPlugins();
        this.resourceProvider = new bare.createInstance(any,null);
        this.resourceProvider.newFolder(this.projPath);
        this.packageMapProvider = new lib4.MockPackageMapProvider();
        new lib5.MockSdk({
            generateSummaryFiles : true,resourceProvider : this.resourceProvider});
        let sdkManager : any = new bare.createInstance(any,null,'/',true);
        this.manager = new bare.createInstance(any,null,this.resourceProvider,sdkManager,this.providePackageResolver.bind(this),this.packageMapProvider,this.analysisFilesGlobs,InstrumentationService.NULL_SERVICE,new bare.createInstance(any,null),this.enableAnalysisDriver);
        let logger : any = new bare.createInstance(any,null,new bare.createInstance(any,null));
        let scheduler : any = new bare.createInstance(any,null,logger);
        this.callbacks = new TestContextManagerCallbacks(this.resourceProvider,sdkManager,logger,scheduler);
        this.manager.callbacks = this.callbacks;
    }
    _checkPackageRoot(path : string,expectation : any) : void {
    }
    _packageMap(contextPath : string) : core.DartMap<string,core.DartList<any>> {
        let folder : any = this.resourceProvider.getFolder(contextPath);
        if (this.enableAnalysisDriver) {
            let info : any = this.manager.getContextInfoFor(folder);
            return ((t)=>(!!t)?t.packageMap:null)(info.analysisDriver.sourceFactory);
        }else {
            return ((t)=>(!!t)?t.packageMap:null)(((t)=>(!!t)?t.sourceFactory:null)(op(Op.INDEX,this.manager.folderMap,folder)));
        }
    }
    constructor() {
    }
    @defaultConstructor
    ContextManagerTest() {
        this.packageResolver = null;
        this.projPath = '/my/proj';
        this.missing_required_param = new bare.createInstance(any,null,new TestSource(),0,1,HintCode.MISSING_REQUIRED_PARAM,new core.DartList.literal(new core.DartList.literal('x')));
        this.missing_return = new bare.createInstance(any,null,new TestSource(),0,1,HintCode.MISSING_RETURN,new core.DartList.literal(new core.DartList.literal('x')));
        this.invalid_assignment_error = new bare.createInstance(any,null,new TestSource(),0,1,HintCode.INVALID_ASSIGNMENT,new core.DartList.literal(new core.DartList.literal('x'),new core.DartList.literal('y')));
        this.unused_local_variable = new bare.createInstance(any,null,new TestSource(),0,1,HintCode.UNUSED_LOCAL_VARIABLE,new core.DartList.literal(new core.DartList.literal('x')));
    }
}

export namespace TestContextManagerCallbacks {
    export type Constructors = 'TestContextManagerCallbacks';
    export type Interface = Omit<TestContextManagerCallbacks, Constructors>;
}
@DartClass
export class TestContextManagerCallbacks extends any {
    now : number;

    currentContext : any;

    currentDriver : any;

    driverMap : core.DartMap<string,any>;

    currentContextTimestamps : core.DartMap<string,number>;

    currentContextFilePaths : core.DartMap<string,core.DartMap<string,number>>;

    currentContextSources : core.DartMap<string,core.DartSet<any>>;

    resourceProvider : any;

    sdkManager : any;

    logger : any;

    scheduler : any;

    lastFlushedFiles : core.DartList<string>;

    watchEvents : core.DartList<any>;

    constructor(resourceProvider : any,sdkManager : any,logger : any,scheduler : any) {
    }
    @defaultConstructor
    TestContextManagerCallbacks(resourceProvider : any,sdkManager : any,logger : any,scheduler : any) {
        this.now = 0;
        this.driverMap = new core.DartMap.literal([
        ]);
        this.currentContextTimestamps = new core.DartMap.literal([
        ]);
        this.currentContextFilePaths = new core.DartMap.literal([
        ]);
        this.currentContextSources = new core.DartMap.literal([
        ]);
        this.watchEvents = new core.DartList.literal<any>();
        this.resourceProvider = resourceProvider;
        this.sdkManager = sdkManager;
        this.logger = logger;
        this.scheduler = scheduler;
    }
    get analysisOptions() : any {
        return op(Op.EQUALS,this.currentDriver,null) ? this.currentContext.analysisOptions : this.currentDriver.analysisOptions;
    }
    get currentContextRoots() : core.DartIterable<string> {
        return this.currentContextTimestamps.keys;
    }
    get currentFilePaths() : core.DartIterable<string> {
        if (op(Op.EQUALS,this.currentDriver,null)) {
            if (op(Op.EQUALS,this.currentContext,null)) {
                return new core.DartList.literal<string>();
            }
            let fileMap : core.DartMap<string,number> = this.currentContextFilePaths.get(this.currentContext.name);
            if (fileMap == null) {
                return new core.DartList.literal<string>();
            }
            return fileMap.keys;
        }
        return this.currentDriver.addedFiles;
    }
    get sourceFactory() : any {
        return op(Op.EQUALS,this.currentDriver,null) ? this.currentContext.sourceFactory : this.currentDriver.sourceFactory;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addAnalysisDriver(folder : any,contextRoot : any,options : any) : any {
        let path : string = folder.path;
        expect(this.currentContextRoots,isNot(contains(path)));
        expect(contextRoot,isNotNull);
        expect(contextRoot.root,path);
        this.currentContextTimestamps.set(path,this.now);
        let builder : any = this.createContextBuilder(folder,options,{
            useSummaries : true});
        let context : any = builder.buildContext(folder.path);
        let sourceFactory : any = context.sourceFactory;
        let analysisOptions : any = context.analysisOptions;
        context.dispose();
        this.currentDriver = new bare.createInstance(any,null,this.scheduler,this.logger,this.resourceProvider,new bare.createInstance(any,null),new bare.createInstance(any,null),contextRoot,sourceFactory,analysisOptions);
        this.driverMap.set(path,this.currentDriver);
        this.currentDriver.exceptions.listen((result : any) =>  {
            AnalysisEngine.instance.logger.logError(`Analysis failed: ${result.path}`,result.exception);
        });
        return this.currentDriver;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addContext(folder : any,options : any) : any {
        let path : string = folder.path;
        expect(this.currentContextRoots,isNot(contains(path)));
        this.currentContextTimestamps.set(path,this.now);
        this.currentContextFilePaths.set(path,new core.DartMap.literal([
        ]));
        this.currentContextSources.set(path,new core.DartHashSet<any>());
        let builder : any = this.createContextBuilder(folder,options);
        this.currentContext = builder.buildContext(path);
        this.currentContext.name = path;
        return this.currentContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyChangesToContext(contextFolder : any,changeSet : any) : void {
        let driver : any = this.driverMap.get(contextFolder.path);
        if (driver != null) {
            changeSet.addedSources.forEach((source : any) =>  {
                driver.addFile(source.fullName);
            });
            changeSet.changedSources.forEach((source : any) =>  {
                driver.changeFile(source.fullName);
            });
            changeSet.removedSources.forEach((source : any) =>  {
                driver.removeFile(source.fullName);
            });
        }else {
            let filePaths : core.DartMap<string,number> = this.currentContextFilePaths.get(contextFolder.path);
            let sources : core.DartSet<any> = this.currentContextSources.get(contextFolder.path);
            for(let source of changeSet.addedSources) {
                expect(filePaths,isNot(contains(source.fullName)));
                filePaths.set(source.fullName,this.now);
                sources.add(source);
            }
            for(let source of changeSet.removedSources) {
                expect(filePaths,contains(source.fullName));
                filePaths.remove(source.fullName);
                sources.remove(source);
            }
            for(let source of changeSet.changedSources) {
                expect(filePaths,contains(source.fullName));
                filePaths.set(source.fullName,this.now);
            }
            this.currentContext.applyChanges(changeSet);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyFileRemoved(driver : any,file : string) : void {
        driver.removeFile(file);
    }
    assertContextFiles(contextPath : string,expectedFiles : core.DartList<string>) : void {
        expect(this.getCurrentFilePaths(contextPath),unorderedEquals(expectedFiles));
    }
    assertContextPaths(expected : core.DartList<string>) : void {
        expect(this.currentContextRoots,unorderedEquals(expected));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    broadcastWatchEvent(event : any) : void {
        this.watchEvents.add(event);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computingPackageMap(computing : boolean) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContextBuilder(folder : any,options : any,_namedArguments? : {useSummaries? : boolean}) : any {
        let {useSummaries} = Object.assign({
            "useSummaries" : false}, _namedArguments );
        let builderOptions : any = new bare.createInstance(any,null);
        builderOptions.defaultOptions = options;
        let builder : any = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,new bare.createInstance(any,null),{
            options : builderOptions});
        return builder;
    }
    currentFileSources(contextPath : string) : core.DartIterable<any> {
        if (op(Op.EQUALS,this.currentDriver,null)) {
            if (op(Op.EQUALS,this.currentContext,null)) {
                return new core.DartList.literal<any>();
            }
            let sources : core.DartSet<any> = this.currentContextSources.get(contextPath);
            return (sources || new core.DartList.literal<any>());
        }
        let driver : any = this.driverMap.get(contextPath);
        let sourceFactory : any = driver.sourceFactory;
        return driver.addedFiles.map((path : string) =>  {
            let file : any = this.resourceProvider.getFile(path);
            let source : any = file.createSource();
            let uri : lib7.Uri = sourceFactory.restoreUri(source);
            return file.createSource(uri);
        });
    }
    getCurrentFilePaths(contextPath : string) : core.DartIterable<string> {
        if (op(Op.EQUALS,this.currentDriver,null)) {
            if (op(Op.EQUALS,this.currentContext,null)) {
                return new core.DartList.literal<string>();
            }
            let fileMap : core.DartMap<string,number> = this.currentContextFilePaths.get(contextPath);
            if (fileMap == null) {
                return new core.DartList.literal<string>();
            }
            return fileMap.keys;
        }
        return this.driverMap.get(contextPath).addedFiles;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveContext(from : any,to : any) : void {
        let path : string = from.path;
        let path2 : string = to.path;
        expect(this.currentContextFilePaths,contains(path));
        expect(this.currentContextTimestamps,contains(path));
        expect(this.currentContextSources,contains(path));
        expect(this.currentContextFilePaths,isNot(contains(path2)));
        expect(this.currentContextTimestamps,isNot(contains(path2)));
        expect(this.currentContextSources,isNot(contains(path2)));
        this.currentContextFilePaths.set(path2,this.currentContextFilePaths.remove(path));
        this.currentContextTimestamps.set(path2,this.currentContextTimestamps.remove(path));
        this.currentContextSources.set(path2,this.currentContextSources.remove(path));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeContext(folder : any,flushedFiles : core.DartList<string>) : void {
        let path : string = folder.path;
        expect(this.currentContextRoots,contains(path));
        this.currentContextTimestamps.remove(path);
        this.currentContextFilePaths.remove(path);
        this.currentContextSources.remove(path);
        this.lastFlushedFiles = flushedFiles;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateContextPackageUriResolver(context : any) : void {
    }
}

export namespace TestSource {
    export type Constructors = 'TestSource';
    export type Interface = Omit<TestSource, Constructors>;
}
@DartClass
@Implements(any)
export class TestSource implements any.Interface {
    constructor() {
    }
    @defaultConstructor
    TestSource() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export namespace TestUriResolver {
    export type Constructors = 'TestUriResolver';
    export type Interface = Omit<TestUriResolver, Constructors>;
}
@DartClass
export class TestUriResolver extends any {
    uriMap : core.DartMap<lib7.Uri,any>;

    constructor(uriMap : core.DartMap<lib7.Uri,any>) {
    }
    @defaultConstructor
    TestUriResolver(uriMap : core.DartMap<lib7.Uri,any>) {
        this.uriMap = uriMap;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib7.Uri,actualUri? : lib7.Uri) : any {
        return this.uriMap.get(uri);
    }
}

export namespace AbstractContextManagerTest {
    export type Constructors = ContextManagerTest.Constructors | 'AbstractContextManagerTest';
    export type Interface = Omit<AbstractContextManagerTest, Constructors>;
}
@DartClass
export class AbstractContextManagerTest extends ContextManagerTest {
    get enableAnalysisDriver() : boolean {
        return true;
    }
    test_contextsInAnalysisRoot_nestedContext() : void {
        let subProjPath : string = lib3.properties.posix.join(this.projPath,'subproj');
        let subProjFolder : any = this.resourceProvider.newFolder(subProjPath);
        this.resourceProvider.newFile(lib3.properties.posix.join(subProjPath,'pubspec.yaml'),'contents');
        let subProjFilePath : string = lib3.properties.posix.join(subProjPath,'file.dart');
        this.resourceProvider.newFile(subProjFilePath,'contents');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        let projectFolder : any = this.resourceProvider.getFolder(this.projPath);
        let projContextInfo : any = this.manager.getContextInfoFor(projectFolder);
        expect(projContextInfo,isNotNull);
        expect(projContextInfo.folder,projectFolder);
        let subProjContextInfo : any = this.manager.getContextInfoFor(subProjFolder);
        expect(subProjContextInfo,isNotNull);
        expect(subProjContextInfo.folder,subProjFolder);
        if (this.enableAnalysisDriver) {
            expect(projContextInfo.analysisDriver,isNot(equals(subProjContextInfo.analysisDriver)));
            let drivers : core.DartList<any> = this.manager.getDriversInAnalysisRoot(projectFolder);
            expect(drivers,isNotNull);
            expect(drivers,hasLength(2));
            expect(drivers,contains(projContextInfo.analysisDriver));
            expect(drivers,contains(subProjContextInfo.analysisDriver));
        }else {
            expect(projContextInfo.context != subProjContextInfo.context,isTrue);
            let contexts : core.DartList<any> = this.manager.contextsInAnalysisRoot(projectFolder);
            expect(contexts,hasLength(2));
            expect(contexts,contains(projContextInfo.context));
            expect(contexts,contains(subProjContextInfo.context));
        }
    }
    test_embedder_added() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            fail('NoSuchMethodError');
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            this.newFile(new core.DartList.literal(libPath,'nope.dart'));
            let embedderPath : string = this.newFolder(new core.DartList.literal(this.projPath,'embedder'));
            this.newFile(new core.DartList.literal(embedderPath,'entry.dart'));
            let embedderSrcPath : string = this.newFolder(new core.DartList.literal(this.projPath,'embedder','src'));
            this.newFile(new core.DartList.literal(embedderSrcPath,'part.dart'));
            this.newFile(new core.DartList.literal(libPath,'_embedder.yaml'),'embedded_libs:\n  "dart:foobar": "../embedder/entry.dart"\n  "dart:typed_data": "../embedder/src/part"\n  ');
            let projectFolder : any = this.resourceProvider.newFolder(this.projPath);
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            await lib4.pumpEventQueue();
            if (this.enableAnalysisDriver) {
                let drivers : core.DartList<any> = this.manager.getDriversInAnalysisRoot(projectFolder);
                expect(drivers,isNotNull);
                expect(drivers,hasLength(1));
            }else {
                let contexts : core.DartList<any> = this.manager.contextsInAnalysisRoot(projectFolder);
                expect(contexts,isNotNull);
                expect(contexts,hasLength(1));
            }
            expect(this.sourceFactory.forUri('dart:typed_data'),isNull);
            this.newFile(new core.DartList.literal(this.projPath,'.packages'),'test_pack:lib/');
            await lib4.pumpEventQueue();
            if (this.enableAnalysisDriver) {
                let drivers : core.DartList<any> = this.manager.getDriversInAnalysisRoot(projectFolder);
                expect(drivers,isNotNull);
                expect(drivers,hasLength(1));
            }else {
                let contexts : core.DartList<any> = this.manager.contextsInAnalysisRoot(projectFolder);
                expect(contexts,isNotNull);
                expect(contexts,hasLength(1));
            }
            expect(this.sourceFactory.forUri('dart:typed_data'),isNotNull);
        } )());
    }

    test_embedder_packagespec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            this.newFile(new core.DartList.literal(libPath,'nope.dart'));
            let sdkExtPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext'));
            this.newFile(new core.DartList.literal(sdkExtPath,'entry.dart'));
            let sdkExtSrcPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext','src'));
            this.newFile(new core.DartList.literal(sdkExtSrcPath,'part.dart'));
            this.newFile(new core.DartList.literal(libPath,'_embedder.yaml'),'embedded_libs:\n  "dart:foobar": "../sdk_ext/entry.dart"\n  "dart:typed_data": "../sdk_ext/src/part"\n  ');
            this.newFile(new core.DartList.literal(this.projPath,'.packages'),'test_pack:lib/');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            await lib4.pumpEventQueue();
            let contexts = this.manager.contextsInAnalysisRoot(this.resourceProvider.newFolder(this.projPath));
            expect(contexts,isNotNull);
            expect(contexts.length,equals(1));
            let source = this.sourceFactory.forUri('dart:foobar');
            expect(source,isNotNull);
            expect(source.fullName,'/my/proj/sdk_ext/entry.dart');
            expect(this.sourceFactory.forUri('dart:core'),isNull);
            expect(this.sourceFactory.forUri('dart:typed_data'),isNotNull);
        } )());
    }

    test_ignoreFilesInPackagesFolder() {
        let pubspecPath : string = lib3.properties.posix.join(this.projPath,'pubspec.yaml');
        this.resourceProvider.newFile(pubspecPath,'pubspec');
        let filePath1 : string = lib3.properties.posix.join(this.projPath,'packages','file1.dart');
        this.resourceProvider.newFile(filePath1,'contents');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentFilePaths,isEmpty);
        let filePath2 : string = lib3.properties.posix.join(this.projPath,'packages','file2.dart');
        this.resourceProvider.newFile(filePath2,'contents');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(this.callbacks.currentFilePaths,isEmpty);
        });
    }
    test_isInAnalysisRoot_excluded() : void {
        let project : string = '/project';
        let excludedFolder : string = `${project}/excluded`;
        this.resourceProvider.newFolder(project);
        this.resourceProvider.newFolder(excludedFolder);
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(excludedFolder),new core.DartMap.literal([
        ]));
        expect(this.manager.isInAnalysisRoot(`${excludedFolder}/test.dart`),isFalse);
    }
    test_isInAnalysisRoot_inNestedContext() : void {
        let subProjPath : string = lib3.properties.posix.join(this.projPath,'subproj');
        let subProjFolder : any = this.resourceProvider.newFolder(subProjPath);
        this.resourceProvider.newFile(lib3.properties.posix.join(subProjPath,'pubspec.yaml'),'contents');
        let subProjFilePath : string = lib3.properties.posix.join(subProjPath,'file.dart');
        this.resourceProvider.newFile(subProjFilePath,'contents');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        let subProjContextInfo : any = this.manager.getContextInfoFor(subProjFolder);
        expect(subProjContextInfo,isNotNull);
        expect(subProjContextInfo.folder,subProjFolder);
        expect(this.manager.isInAnalysisRoot(subProjFilePath),isTrue);
    }
    test_isInAnalysisRoot_inRoot() : void {
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.manager.isInAnalysisRoot(`${this.projPath}/test.dart`),isTrue);
    }
    test_isInAnalysisRoot_notInRoot() : void {
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.manager.isInAnalysisRoot('/test.dart'),isFalse);
    }
    test_path_filter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let root : any = this.resourceProvider.newFolder(this.projPath);
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            expect(this.callbacks.currentFilePaths,isEmpty);
            let rootInfo : any = this.manager.getContextInfoFor(root);
            this.manager.setIgnorePatternsForContext(rootInfo,new core.DartList.literal('sdk_ext/**','lib/ignoreme.dart'));
            this.newFile(new core.DartList.literal(this.projPath,ContextManagerImpl.PUBSPEC_NAME));
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            this.newFile(new core.DartList.literal(libPath,'ignoreme.dart'));
            let sdkExtPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext'));
            this.newFile(new core.DartList.literal(sdkExtPath,'entry.dart'));
            let sdkExtSrcPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext','src'));
            this.newFile(new core.DartList.literal(sdkExtSrcPath,'part.dart'));
            await lib4.pumpEventQueue();
            let filePaths : core.DartIterable<string> = this.callbacks.currentFilePaths;
            expect(filePaths,hasLength(1));
            expect(filePaths,contains('/my/proj/lib/main.dart'));
        } )());
    }

    test_refresh_folder_with_packagespec() {
        let packagespecFile : string = lib3.properties.posix.join(this.projPath,'.packages');
        this.resourceProvider.newFile(packagespecFile,'');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(this.projPath)));
            this.callbacks.now++;
            this.manager.refresh(null);
            return lib4.pumpEventQueue().then((_ : any) =>  {
                expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(this.projPath)));
                expect(this.callbacks.currentContextTimestamps.get(this.projPath),this.callbacks.now);
            });
        });
    }
    test_refresh_folder_with_packagespec_subfolders() {
        let subdir1Path : string = lib3.properties.posix.join(this.projPath,'subdir1');
        let subdir2Path : string = lib3.properties.posix.join(this.projPath,'subdir2');
        let packagespec1Path : string = lib3.properties.posix.join(subdir1Path,'.packages');
        let packagespec2Path : string = lib3.properties.posix.join(subdir2Path,'.packages');
        this.resourceProvider.newFile(packagespec1Path,'');
        this.resourceProvider.newFile(packagespec2Path,'');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(subdir1Path,subdir2Path,this.projPath)));
            this.callbacks.now++;
            this.manager.refresh(null);
            return lib4.pumpEventQueue().then((_ : any) =>  {
                expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(subdir1Path,subdir2Path,this.projPath)));
                expect(this.callbacks.currentContextTimestamps.get(this.projPath),this.callbacks.now);
                expect(this.callbacks.currentContextTimestamps.get(subdir1Path),this.callbacks.now);
                expect(this.callbacks.currentContextTimestamps.get(subdir2Path),this.callbacks.now);
            });
        });
    }
    test_refresh_folder_with_pubspec() {
        let pubspecPath : string = lib3.properties.posix.join(this.projPath,'pubspec.yaml');
        this.resourceProvider.newFile(pubspecPath,'pubspec');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(this.projPath)));
            this.callbacks.now++;
            this.manager.refresh(null);
            return lib4.pumpEventQueue().then((_ : any) =>  {
                expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(this.projPath)));
                expect(this.callbacks.currentContextTimestamps.get(this.projPath),this.callbacks.now);
            });
        });
    }
    test_refresh_folder_with_pubspec_subfolders() {
        let subdir1Path : string = lib3.properties.posix.join(this.projPath,'subdir1');
        let subdir2Path : string = lib3.properties.posix.join(this.projPath,'subdir2');
        let pubspec1Path : string = lib3.properties.posix.join(subdir1Path,'pubspec.yaml');
        let pubspec2Path : string = lib3.properties.posix.join(subdir2Path,'pubspec.yaml');
        this.resourceProvider.newFile(pubspec1Path,'pubspec');
        this.resourceProvider.newFile(pubspec2Path,'pubspec');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(subdir1Path,subdir2Path,this.projPath)));
            this.callbacks.now++;
            this.manager.refresh(null);
            return lib4.pumpEventQueue().then((_ : any) =>  {
                expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(subdir1Path,subdir2Path,this.projPath)));
                expect(this.callbacks.currentContextTimestamps.get(this.projPath),this.callbacks.now);
                expect(this.callbacks.currentContextTimestamps.get(subdir1Path),this.callbacks.now);
                expect(this.callbacks.currentContextTimestamps.get(subdir2Path),this.callbacks.now);
            });
        });
    }
    test_refresh_oneContext() {
        let pubspecPath : string = lib3.properties.posix.join(this.projPath,'pubspec.yaml');
        this.resourceProvider.newFile(pubspecPath,'pubspec1');
        let proj2Path : string = '/my/proj2';
        this.resourceProvider.newFolder(proj2Path);
        let pubspec2Path : string = lib3.properties.posix.join(proj2Path,'pubspec.yaml');
        this.resourceProvider.newFile(pubspec2Path,'pubspec2');
        let roots : core.DartList<string> = new core.DartList.literal<string>(this.projPath,proj2Path);
        this.manager.setRoots(roots,new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(this.callbacks.currentContextRoots,unorderedEquals(roots));
            let then : number = this.callbacks.now;
            this.callbacks.now++;
            this.manager.refresh(new core.DartList.literal(this.resourceProvider.getResource(proj2Path)));
            return lib4.pumpEventQueue().then((_ : any) =>  {
                expect(this.callbacks.currentContextRoots,unorderedEquals(roots));
                expect(this.callbacks.currentContextTimestamps.get(this.projPath),then);
                expect(this.callbacks.currentContextTimestamps.get(proj2Path),this.callbacks.now);
            });
        });
    }
    test_sdk_ext_packagespec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            this.newFile(new core.DartList.literal(libPath,'nope.dart'));
            let sdkExtPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext'));
            this.newFile(new core.DartList.literal(sdkExtPath,'entry.dart'));
            let sdkExtSrcPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext','src'));
            this.newFile(new core.DartList.literal(sdkExtSrcPath,'part.dart'));
            this.newFile(new core.DartList.literal(libPath,'_sdkext'),'{\n  "dart:foobar": "../sdk_ext/entry.dart"\n}\n');
            this.newFile(new core.DartList.literal(this.projPath,'.packages'),'test_pack:lib/');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            let contexts = this.manager.contextsInAnalysisRoot(this.resourceProvider.newFolder(this.projPath));
            expect(contexts,isNotNull);
            expect(contexts.length,equals(1));
            let source = this.sourceFactory.forUri('dart:foobar');
            expect(source.fullName,equals('/my/proj/sdk_ext/entry.dart'));
        } )());
    }

    test_setRoots_addFolderWithDartFile() : void {
        let filePath : string = lib3.properties.posix.join(this.projPath,'foo.dart');
        this.resourceProvider.newFile(filePath,'contents');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        let filePaths : core.DartIterable<string> = this.callbacks.currentFilePaths;
        expect(filePaths,hasLength(1));
        expect(filePaths,contains(filePath));
        if (this.enableAnalysisDriver) {
            let drivers : core.DartList<any> = this.manager.getDriversInAnalysisRoot(this.resourceProvider.newFolder(this.projPath));
            expect(drivers,hasLength(1));
            expect(drivers[0],isNotNull);
        }else {
            let contextsInAnalysisRoot : core.DartList<any> = this.manager.contextsInAnalysisRoot(this.resourceProvider.newFolder(this.projPath));
            expect(contextsInAnalysisRoot,hasLength(1));
            expect(contextsInAnalysisRoot[0],isNotNull);
        }
        let result : any = this.sourceFactory.forUri('dart:async');
        expect(result,isNotNull);
    }
    test_setRoots_addFolderWithDartFileInSubfolder() : void {
        let filePath : string = lib3.properties.posix.join(this.projPath,'foo','bar.dart');
        this.resourceProvider.newFile(filePath,'contents');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        let filePaths : core.DartIterable<string> = this.callbacks.currentFilePaths;
        expect(filePaths,hasLength(1));
        expect(filePaths,contains(filePath));
    }
    test_setRoots_addFolderWithDummyLink() : void {
        let filePath : string = lib3.properties.posix.join(this.projPath,'foo.dart');
        this.resourceProvider.newDummyLink(filePath);
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentFilePaths,isEmpty);
    }
    test_setRoots_addFolderWithNestedPackageSpec() : void {
        let examplePath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.EXAMPLE_NAME));
        let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
        this.newFile(new core.DartList.literal(this.projPath,ContextManagerImpl.PACKAGE_SPEC_NAME));
        this.newFile(new core.DartList.literal(libPath,'main.dart'));
        this.newFile(new core.DartList.literal(examplePath,ContextManagerImpl.PACKAGE_SPEC_NAME));
        this.newFile(new core.DartList.literal(examplePath,'example.dart'));
        this.packageMapProvider.packageMap.set('proj',new core.DartList.literal<any>(this.resourceProvider.getResource(libPath)));
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentContextRoots,hasLength(2));
        expect(this.callbacks.currentContextRoots,contains(this.projPath));
        let projSources : core.DartIterable<any> = this.callbacks.currentFileSources(this.projPath);
        expect(projSources,hasLength(1));
        expect(projSources.first.uri.toString(),'file:///my/proj/lib/main.dart');
        expect(this.callbacks.currentContextRoots,contains(examplePath));
        let exampleSources : core.DartIterable<any> = this.callbacks.currentFileSources(examplePath);
        expect(exampleSources,hasLength(1));
        expect(exampleSources.first.uri.toString(),'file:///my/proj/example/example.dart');
    }
    test_setRoots_addFolderWithNestedPubspec() : void {
        let examplePath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.EXAMPLE_NAME));
        let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
        this.newFile(new core.DartList.literal(this.projPath,ContextManagerImpl.PUBSPEC_NAME));
        this.newFile(new core.DartList.literal(this.projPath,ContextManagerImpl.PACKAGE_SPEC_NAME),'proj:lib/');
        this.newFile(new core.DartList.literal(libPath,'main.dart'));
        this.newFile(new core.DartList.literal(examplePath,ContextManagerImpl.PUBSPEC_NAME));
        this.newFile(new core.DartList.literal(examplePath,'example.dart'));
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentContextRoots,hasLength(2));
        expect(this.callbacks.currentContextRoots,contains(this.projPath));
        let projSources : core.DartIterable<any> = this.callbacks.currentFileSources(this.projPath);
        expect(projSources,hasLength(1));
        expect(projSources.first.uri.toString(),'package:proj/main.dart');
        expect(this.callbacks.currentContextRoots,contains(examplePath));
        let exampleSources : core.DartIterable<any> = this.callbacks.currentFileSources(examplePath);
        expect(exampleSources,hasLength(1));
        expect(exampleSources.first.uri.toString(),'file:///my/proj/example/example.dart');
    }
    test_setRoots_addFolderWithoutPubspec() : void {
        this.packageMapProvider.packageMap = null;
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(this.projPath)));
        expect(this.callbacks.currentFilePaths,hasLength(0));
    }
    test_setRoots_addFolderWithPackagespec() : void {
        let packagespecPath : string = lib3.properties.posix.join(this.projPath,'.packages');
        this.resourceProvider.newFile(packagespecPath,'unittest:file:///home/somebody/.pub/cache/unittest-0.9.9/lib/');
        let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
        let mainFile : any = this.resourceProvider.newFile(lib3.properties.posix.join(libPath,'main.dart'),'');
        let source : any = mainFile.createSource();
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(this.projPath)));
        expect(this.callbacks.currentFilePaths,hasLength(1));
        let resolvedSource : any = this.sourceFactory.resolveUri(source,'package:unittest/unittest.dart');
        expect(resolvedSource,isNotNull);
        expect(resolvedSource.fullName,equals('/home/somebody/.pub/cache/unittest-0.9.9/lib/unittest.dart'));
    }
    test_setRoots_addFolderWithPackagespecAndPackageRoot() : void {
        let packagespecPath : string = lib3.properties.posix.join(this.projPath,'.packages');
        this.resourceProvider.newFile(packagespecPath,'unittest:file:///home/somebody/.pub/cache/unittest-0.9.9/lib/');
        let packageRootPath : string = '/package/root/';
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            [this.projPath,packageRootPath]]));
        expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(this.projPath)));
        this._checkPackageRoot(this.projPath,packageRootPath);
    }
    test_setRoots_addFolderWithPubspec() : void {
        let pubspecPath : string = lib3.properties.posix.join(this.projPath,'pubspec.yaml');
        this.resourceProvider.newFile(pubspecPath,'pubspec');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(this.projPath)));
        expect(this.callbacks.currentFilePaths,hasLength(0));
    }
    test_setRoots_addFolderWithPubspec_andPackagespec() : void {
        let pubspecPath : string = lib3.properties.posix.join(this.projPath,'pubspec.yaml');
        let packagespecPath : string = lib3.properties.posix.join(this.projPath,'.packages');
        this.resourceProvider.newFile(pubspecPath,'pubspec');
        this.resourceProvider.newFile(packagespecPath,'');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(this.projPath));
    }
    test_setRoots_addFolderWithPubspecAndLib() : void {
        let binPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.BIN_NAME));
        let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
        let srcPath : string = this.newFolder(new core.DartList.literal(libPath,ContextManagerTest.SRC_NAME));
        let testPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.TEST_NAME));
        this.newFile(new core.DartList.literal(this.projPath,ContextManagerImpl.PUBSPEC_NAME));
        this.newFile(new core.DartList.literal(this.projPath,ContextManagerImpl.PACKAGE_SPEC_NAME),'proj:lib/');
        let appPath : string = this.newFile(new core.DartList.literal(binPath,'app.dart'));
        this.newFile(new core.DartList.literal(libPath,'main.dart'));
        this.newFile(new core.DartList.literal(srcPath,'internal.dart'));
        let testFilePath : string = this.newFile(new core.DartList.literal(testPath,'main_test.dart'));
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        let sources : core.DartIterable<any> = this.callbacks.currentFileSources(this.projPath);
        expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(this.projPath)));
        expect(sources,hasLength(4));
        let uris : core.DartList<string> = sources.map((source : any) =>  {
            return source.uri.toString();
        }).toList();
        expect(uris,contains(`file://${appPath}`));
        expect(uris,contains('package:proj/main.dart'));
        expect(uris,contains('package:proj/src/internal.dart'));
        expect(uris,contains(`file://${testFilePath}`));
    }
    test_setRoots_addFolderWithPubspecAndPackagespecFolders() : void {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let subProjectA : string = `${root}/sub/aaa`;
        let subProjectB : string = `${root}/sub/sub2/bbb`;
        let subProjectA_file : string = `${subProjectA}/bin/a.dart`;
        let subProjectB_file : string = `${subProjectB}/bin/b.dart`;
        this.resourceProvider.newFile(`${subProjectA}/pubspec.yaml`,'pubspec');
        this.resourceProvider.newFile(`${subProjectB}/pubspec.yaml`,'pubspec');
        this.resourceProvider.newFile(`${subProjectA}/.packages`,'');
        this.resourceProvider.newFile(`${subProjectB}/.packages`,'');
        this.resourceProvider.newFile(rootFile,'library root;');
        this.resourceProvider.newFile(subProjectA_file,'library a;');
        this.resourceProvider.newFile(subProjectB_file,'library b;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root,subProjectA,subProjectB));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.callbacks.assertContextFiles(subProjectA,new core.DartList.literal(subProjectA_file));
        this.callbacks.assertContextFiles(subProjectB,new core.DartList.literal(subProjectB_file));
    }
    test_setRoots_addFolderWithPubspecFolders() : void {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let projectA : string = `${root}/sub/aaa`;
        let projectALib : string = `${root}/sub/aaa/lib`;
        let subProjectA_file : string = `${projectA}/bin/a.dart`;
        let projectB : string = `${root}/sub/sub2/bbb`;
        let projectBLib : string = `${root}/sub/sub2/bbb/lib`;
        let subProjectB_file : string = `${projectB}/bin/b.dart`;
        this.newFile(new core.DartList.literal(projectA,ContextManagerImpl.PUBSPEC_NAME));
        this.newFile(new core.DartList.literal(projectA,ContextManagerImpl.PACKAGE_SPEC_NAME),'foo:lib/');
        this.newFile(new core.DartList.literal(projectB,ContextManagerImpl.PUBSPEC_NAME));
        this.newFile(new core.DartList.literal(projectB,ContextManagerImpl.PACKAGE_SPEC_NAME),'bar:lib/');
        this.resourceProvider.newFile(rootFile,'library root;');
        this.resourceProvider.newFile(subProjectA_file,'library a;');
        this.resourceProvider.newFile(subProjectB_file,'library b;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root,projectA,projectB));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.callbacks.assertContextFiles(projectA,new core.DartList.literal(subProjectA_file));
        this.callbacks.assertContextFiles(projectB,new core.DartList.literal(subProjectB_file));
        expect(this._packageMap(root),isEmpty);
        expect(this._packageMap(projectA),equals(new core.DartMap.literal([
            ['foo',new core.DartList.literal(this.resourceProvider.getFolder(projectALib))]])));
        expect(this._packageMap(projectB),equals(new core.DartMap.literal([
            ['bar',new core.DartList.literal(this.resourceProvider.getFolder(projectBLib))]])));
    }
    test_setRoots_addPackageRoot() : void {
        let packagePathFoo : string = '/package1/foo';
        let packageRootPath : string = '/package2/foo';
        this.newFile(new core.DartList.literal(this.projPath,ContextManagerImpl.PACKAGE_SPEC_NAME),'foo:file:///package1/foo');
        let packageFolder : any = this.resourceProvider.newFolder(packagePathFoo);
        let includedPaths : core.DartList<string> = new core.DartList.literal<string>(this.projPath);
        let excludedPaths : core.DartList<string> = new core.DartList.literal<string>();
        this.manager.setRoots(includedPaths,excludedPaths,new core.DartMap.literal([
        ]));
        expect(this._currentPackageMap,equals(new core.DartMap.literal([
            ['foo',new core.DartList.literal(packageFolder)]])));
        this.manager.setRoots(includedPaths,excludedPaths,new core.DartMap.literal([
            [this.projPath,packageRootPath]]));
        this._checkPackageRoot(this.projPath,equals(packageRootPath));
    }
    test_setRoots_changePackageRoot() : void {
        let packageRootPath1 : string = '/package1';
        let packageRootPath2 : string = '/package2';
        let includedPaths : core.DartList<string> = new core.DartList.literal<string>(this.projPath);
        let excludedPaths : core.DartList<string> = new core.DartList.literal<string>();
        this.manager.setRoots(includedPaths,excludedPaths,new core.DartMap.literal([
            [this.projPath,packageRootPath1]]));
        this._checkPackageRoot(this.projPath,equals(packageRootPath1));
        this.manager.setRoots(includedPaths,excludedPaths,new core.DartMap.literal([
            [this.projPath,packageRootPath2]]));
        this._checkPackageRoot(this.projPath,equals(packageRootPath2));
    }
    test_setRoots_exclude_newRoot_withExcludedFile() : void {
        let project : string = '/project';
        let file1 : string = `${project}/file1.dart`;
        let file2 : string = `${project}/file2.dart`;
        this.resourceProvider.newFile(file1,'// 1');
        this.resourceProvider.newFile(file2,'// 2');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(file1),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file2));
    }
    test_setRoots_exclude_newRoot_withExcludedFolder() : void {
        let project : string = '/project';
        let folderA : string = `${project}/aaa`;
        let folderB : string = `${project}/bbb`;
        let fileA : string = `${folderA}/a.dart`;
        let fileB : string = `${folderB}/b.dart`;
        this.resourceProvider.newFile(fileA,'library a;');
        this.resourceProvider.newFile(fileB,'library b;');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(folderB),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
    }
    test_setRoots_exclude_sameRoot_addExcludedFile() : void {
        let project : string = '/project';
        let file1 : string = `${project}/file1.dart`;
        let file2 : string = `${project}/file2.dart`;
        this.resourceProvider.newFile(file1,'// 1');
        this.resourceProvider.newFile(file2,'// 2');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1,file2));
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(file2),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1));
    }
    test_setRoots_exclude_sameRoot_addExcludedFolder() : void {
        let project : string = '/project';
        let folderA : string = `${project}/aaa`;
        let folderB : string = `${project}/bbb`;
        let fileA : string = `${folderA}/a.dart`;
        let fileB : string = `${folderB}/b.dart`;
        this.resourceProvider.newFile(fileA,'library a;');
        this.resourceProvider.newFile(fileB,'library b;');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA,fileB));
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(folderB),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
    }
    test_setRoots_exclude_sameRoot_removeExcludedFile() : void {
        let project : string = '/project';
        let file1 : string = `${project}/file1.dart`;
        let file2 : string = `${project}/file2.dart`;
        this.resourceProvider.newFile(file1,'// 1');
        this.resourceProvider.newFile(file2,'// 2');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(file2),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1));
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1,file2));
    }
    test_setRoots_exclude_sameRoot_removeExcludedFile_inFolder() : void {
        let project : string = '/project';
        let file1 : string = `${project}/bin/file1.dart`;
        let file2 : string = `${project}/bin/file2.dart`;
        this.resourceProvider.newFile(file1,'// 1');
        this.resourceProvider.newFile(file2,'// 2');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(file2),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1));
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(file1,file2));
    }
    test_setRoots_exclude_sameRoot_removeExcludedFolder() : void {
        let project : string = '/project';
        let folderA : string = `${project}/aaa`;
        let folderB : string = `${project}/bbb`;
        let fileA : string = `${folderA}/a.dart`;
        let fileB : string = `${folderB}/b.dart`;
        this.resourceProvider.newFile(fileA,'library a;');
        this.resourceProvider.newFile(fileB,'library b;');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(folderB),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA,fileB));
    }
    test_setRoots_ignoreDocFolder() : void {
        let project : string = '/project';
        let fileA : string = `${project}/foo.dart`;
        let fileB : string = `${project}/lib/doc/bar.dart`;
        let fileC : string = `${project}/doc/bar.dart`;
        this.resourceProvider.newFile(fileA,'');
        this.resourceProvider.newFile(fileB,'');
        this.resourceProvider.newFile(fileC,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA,fileB));
    }
    test_setRoots_nested_includedByOuter_innerFirst() : void {
        let project : string = '/project';
        let projectPubspec : string = `${project}/pubspec.yaml`;
        let example : string = `${project}/example`;
        let examplePubspec : string = `${example}/pubspec.yaml`;
        this.resourceProvider.newFile(projectPubspec,'name: project');
        this.resourceProvider.newFile(examplePubspec,'name: example');
        this.manager.setRoots(new core.DartList.literal<string>(example,project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        {
            let rootInfo : any = this.manager.rootInfo;
            expect(rootInfo.children,hasLength(1));
            {
                let projectInfo : any = op(Op.INDEX,rootInfo.children,0);
                expect(projectInfo.folder.path,project);
                expect(projectInfo.children,hasLength(1));
                {
                    let exampleInfo : any = op(Op.INDEX,projectInfo.children,0);
                    expect(exampleInfo.folder.path,example);
                    expect(exampleInfo.children,isEmpty);
                }
            }
        }
        expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(project,example)));
    }
    test_setRoots_nested_includedByOuter_outerPubspec() : void {
        let project : string = '/project';
        let projectPubspec : string = `${project}/pubspec.yaml`;
        let example : string = `${project}/example`;
        this.resourceProvider.newFile(projectPubspec,'name: project');
        this.resourceProvider.newFolder(example);
        this.manager.setRoots(new core.DartList.literal<string>(project,example),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        {
            let rootInfo : any = this.manager.rootInfo;
            expect(rootInfo.children,hasLength(1));
            {
                let projectInfo : any = op(Op.INDEX,rootInfo.children,0);
                expect(projectInfo.folder.path,project);
                expect(projectInfo.children,isEmpty);
            }
        }
        expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(project)));
    }
    test_setRoots_nested_includedByOuter_twoPubspecs() : void {
        let project : string = '/project';
        let projectPubspec : string = `${project}/pubspec.yaml`;
        let example : string = `${project}/example`;
        let examplePubspec : string = `${example}/pubspec.yaml`;
        this.resourceProvider.newFile(projectPubspec,'name: project');
        this.resourceProvider.newFile(examplePubspec,'name: example');
        this.manager.setRoots(new core.DartList.literal<string>(project,example),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        {
            let rootInfo : any = this.manager.rootInfo;
            expect(rootInfo.children,hasLength(1));
            {
                let projectInfo : any = op(Op.INDEX,rootInfo.children,0);
                expect(projectInfo.folder.path,project);
                expect(projectInfo.children,hasLength(1));
                {
                    let exampleInfo : any = op(Op.INDEX,projectInfo.children,0);
                    expect(exampleInfo.folder.path,example);
                    expect(exampleInfo.children,isEmpty);
                }
            }
        }
        expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(project,example)));
    }
    test_setRoots_newFolderWithPackageRoot() : void {
        let packageRootPath : string = '/package';
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            [this.projPath,packageRootPath]]));
        this._checkPackageRoot(this.projPath,equals(packageRootPath));
    }
    test_setRoots_newlyAddedFoldersGetProperPackageMap() : void {
        let packagePath : string = '/package/foo';
        this.newFile(new core.DartList.literal(this.projPath,ContextManagerImpl.PACKAGE_SPEC_NAME),'foo:file:///package/foo');
        let packageFolder : any = this.resourceProvider.newFolder(packagePath);
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this._currentPackageMap,equals(new core.DartMap.literal([
            ['foo',new core.DartList.literal(packageFolder)]])));
    }
    test_setRoots_noContext_excludedFolder() : void {
        let project : string = '/project';
        let excludedFolder : string = `${project}/excluded`;
        let excludedPubspec : string = `${excludedFolder}/pubspec.yaml`;
        this.resourceProvider.newFile(excludedPubspec,'name: ignore-me');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(excludedFolder),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
    }
    test_setRoots_noContext_inDotFolder() : void {
        let pubspecPath : string = lib3.properties.posix.join(this.projPath,'.pub','pubspec.yaml');
        this.resourceProvider.newFile(pubspecPath,'name: test');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentContextRoots,hasLength(1));
        expect(this.callbacks.currentContextRoots,contains(this.projPath));
        expect(this.callbacks.currentFilePaths,hasLength(0));
    }
    test_setRoots_noContext_inPackagesFolder() : void {
        let pubspecPath : string = lib3.properties.posix.join(this.projPath,'packages','pubspec.yaml');
        this.resourceProvider.newFile(pubspecPath,'name: test');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentContextRoots,hasLength(1));
        expect(this.callbacks.currentContextRoots,contains(this.projPath));
        expect(this.callbacks.currentFilePaths,hasLength(0));
    }
    test_setRoots_packageResolver() : void {
        let filePath : string = lib3.properties.posix.join(this.projPath,'lib','foo.dart');
        this.newFile(new core.DartList.literal(this.projPath,ContextManagerImpl.PACKAGE_SPEC_NAME),'foo:lib/');
        this.resourceProvider.newFile(filePath,'contents');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        if (this.enableAnalysisDriver) {
            let drivers = this.manager.getDriversInAnalysisRoot(this.resourceProvider.newFolder(this.projPath));
            expect(drivers,hasLength(1));
            expect(op(Op.INDEX,drivers,0),isNotNull);
        }else {
            let contextsInAnalysisRoot : core.DartList<any> = this.manager.contextsInAnalysisRoot(this.resourceProvider.newFolder(this.projPath));
            expect(contextsInAnalysisRoot,hasLength(1));
            expect(contextsInAnalysisRoot[0],isNotNull);
        }
        let result : any = this.sourceFactory.forUri('package:foo/foo.dart');
        expect(result.fullName,filePath);
    }
    test_setRoots_pathContainsDotFile() : void {
        let project : string = '/project';
        let fileA : string = `${project}/foo.dart`;
        let fileB : string = `${project}/.pub/bar.dart`;
        this.resourceProvider.newFile(fileA,'');
        this.resourceProvider.newFile(fileB,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
    }
    test_setRoots_removeFolderWithoutPubspec() : void {
        this.packageMapProvider.packageMap = null;
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentContextRoots,hasLength(1));
        this.manager.setRoots(new core.DartList.literal<string>(),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentContextRoots,hasLength(0));
        expect(this.callbacks.currentFilePaths,hasLength(0));
    }
    test_setRoots_removeFolderWithPackagespec() : void {
        let pubspecPath : string = lib3.properties.posix.join(this.projPath,'.packages');
        this.resourceProvider.newFile(pubspecPath,'');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.manager.changeSubscriptions,hasLength(1));
        expect(this.callbacks.currentContextRoots,hasLength(1));
        this.manager.setRoots(new core.DartList.literal<string>(),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.manager.changeSubscriptions,hasLength(0));
        expect(this.callbacks.currentContextRoots,hasLength(0));
        expect(this.callbacks.currentFilePaths,hasLength(0));
    }
    test_setRoots_removeFolderWithPackagespecFolder() : void {
        let projectA : string = '/projectA';
        let projectB : string = '/projectB';
        let subProjectA : string = `${projectA}/sub`;
        let subProjectB : string = `${projectB}/sub`;
        let projectA_file : string = `${projectA}/a.dart`;
        let projectB_file : string = `${projectB}/a.dart`;
        let subProjectA_pubspec : string = `${subProjectA}/.packages`;
        let subProjectB_pubspec : string = `${subProjectB}/.packages`;
        let subProjectA_file : string = `${subProjectA}/bin/sub_a.dart`;
        let subProjectB_file : string = `${subProjectB}/bin/sub_b.dart`;
        this.resourceProvider.newFile(projectA_file,'// a');
        this.resourceProvider.newFile(projectB_file,'// b');
        this.resourceProvider.newFile(subProjectA_pubspec,'');
        this.resourceProvider.newFile(subProjectB_pubspec,'');
        this.resourceProvider.newFile(subProjectA_file,'// sub-a');
        this.resourceProvider.newFile(subProjectB_file,'// sub-b');
        this.manager.setRoots(new core.DartList.literal<string>(projectA,projectB),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(projectA,subProjectA,projectB,subProjectB));
        this.callbacks.assertContextFiles(projectA,new core.DartList.literal(projectA_file));
        this.callbacks.assertContextFiles(projectB,new core.DartList.literal(projectB_file));
        this.callbacks.assertContextFiles(subProjectA,new core.DartList.literal(subProjectA_file));
        this.callbacks.assertContextFiles(subProjectB,new core.DartList.literal(subProjectB_file));
        this.manager.setRoots(new core.DartList.literal<string>(projectA),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(projectA,subProjectA));
        this.callbacks.assertContextFiles(projectA,new core.DartList.literal(projectA_file));
        this.callbacks.assertContextFiles(subProjectA,new core.DartList.literal(subProjectA_file));
    }
    test_setRoots_removeFolderWithPubspec() : void {
        let pubspecPath : string = lib3.properties.posix.join(this.projPath,'pubspec.yaml');
        this.resourceProvider.newFile(pubspecPath,'pubspec');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentContextRoots,hasLength(1));
        this.manager.setRoots(new core.DartList.literal<string>(),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentContextRoots,hasLength(0));
        expect(this.callbacks.currentFilePaths,hasLength(0));
    }
    test_setRoots_removeFolderWithPubspecFolder() : void {
        let projectA : string = '/projectA';
        let projectB : string = '/projectB';
        let subProjectA : string = `${projectA}/sub`;
        let subProjectB : string = `${projectB}/sub`;
        let projectA_file : string = `${projectA}/a.dart`;
        let projectB_file : string = `${projectB}/a.dart`;
        let subProjectA_pubspec : string = `${subProjectA}/pubspec.yaml`;
        let subProjectB_pubspec : string = `${subProjectB}/pubspec.yaml`;
        let subProjectA_file : string = `${subProjectA}/bin/sub_a.dart`;
        let subProjectB_file : string = `${subProjectB}/bin/sub_b.dart`;
        this.resourceProvider.newFile(projectA_file,'// a');
        this.resourceProvider.newFile(projectB_file,'// b');
        this.resourceProvider.newFile(subProjectA_pubspec,'pubspec');
        this.resourceProvider.newFile(subProjectB_pubspec,'pubspec');
        this.resourceProvider.newFile(subProjectA_file,'// sub-a');
        this.resourceProvider.newFile(subProjectB_file,'// sub-b');
        this.manager.setRoots(new core.DartList.literal<string>(projectA,projectB),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(projectA,subProjectA,projectB,subProjectB));
        this.callbacks.assertContextFiles(projectA,new core.DartList.literal(projectA_file));
        this.callbacks.assertContextFiles(projectB,new core.DartList.literal(projectB_file));
        this.callbacks.assertContextFiles(subProjectA,new core.DartList.literal(subProjectA_file));
        this.callbacks.assertContextFiles(subProjectB,new core.DartList.literal(subProjectB_file));
        this.manager.setRoots(new core.DartList.literal<string>(projectA),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(projectA,subProjectA));
        this.callbacks.assertContextFiles(projectA,new core.DartList.literal(projectA_file));
        this.callbacks.assertContextFiles(subProjectA,new core.DartList.literal(subProjectA_file));
    }
    test_setRoots_removePackageRoot() : void {
        let packagePathFoo : string = '/package1/foo';
        let packageRootPath : string = '/package2/foo';
        let packageFolder : any = this.resourceProvider.newFolder(packagePathFoo);
        this.newFile(new core.DartList.literal(this.projPath,ContextManagerImpl.PACKAGE_SPEC_NAME),'foo:file:///package1/foo');
        let includedPaths : core.DartList<string> = new core.DartList.literal<string>(this.projPath);
        let excludedPaths : core.DartList<string> = new core.DartList.literal<string>();
        this.manager.setRoots(includedPaths,excludedPaths,new core.DartMap.literal([
            [this.projPath,packageRootPath]]));
        this._checkPackageRoot(this.projPath,equals(packageRootPath));
        this.manager.setRoots(includedPaths,excludedPaths,new core.DartMap.literal([
        ]));
        expect(this._currentPackageMap,equals(new core.DartMap.literal([
            ['foo',new core.DartList.literal(packageFolder)]])));
    }
    test_setRoots_rootPathContainsDotFile() : void {
        let project : string = '/.pub/project';
        let fileA : string = `${project}/foo.dart`;
        this.resourceProvider.newFile(fileA,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
    }
    test_watch_addDummyLink() {
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentFilePaths,isEmpty);
        let filePath : string = lib3.properties.posix.join(this.projPath,'foo.dart');
        this.resourceProvider.newDummyLink(filePath);
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(this.callbacks.currentFilePaths,isEmpty);
        });
    }
    test_watch_addFile() {
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentFilePaths,hasLength(0));
        let filePath : string = lib3.properties.posix.join(this.projPath,'foo.dart');
        this.resourceProvider.newFile(filePath,'contents');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            let filePaths : core.DartIterable<string> = this.callbacks.currentFilePaths;
            expect(filePaths,hasLength(1));
            expect(filePaths,contains(filePath));
        });
    }
    test_watch_addFile_excluded() {
        let project : string = '/project';
        let folderA : string = `${project}/aaa`;
        let folderB : string = `${project}/bbb`;
        let fileA : string = `${folderA}/a.dart`;
        let fileB : string = `${folderB}/b.dart`;
        this.resourceProvider.newFile(fileA,'library a;');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(folderB),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
        this.resourceProvider.newFile(fileB,'library b;');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(project));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
        });
    }
    test_watch_addFile_inDocFolder_inner() {
        let project : string = '/project';
        let fileA : string = `${project}/a.dart`;
        let fileB : string = `${project}/lib/doc/b.dart`;
        this.resourceProvider.newFile(fileA,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
        this.resourceProvider.newFile(fileB,'');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(project));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA,fileB));
        });
    }
    test_watch_addFile_inDocFolder_topLevel() {
        let project : string = '/project';
        let fileA : string = `${project}/a.dart`;
        let fileB : string = `${project}/doc/b.dart`;
        this.resourceProvider.newFile(fileA,'');
        this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(project));
        this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
        this.resourceProvider.newFile(fileB,'');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(project));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
        });
    }
    test_watch_addFile_pathContainsDotFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let project : string = '/project';
            let fileA : string = `${project}/foo.dart`;
            let fileB : string = `${project}/.pub/bar.dart`;
            this.resourceProvider.newFile(fileA,'');
            this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.callbacks.assertContextPaths(new core.DartList.literal(project));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
            this.resourceProvider.newFile(fileB,'');
            await lib4.pumpEventQueue();
            this.callbacks.assertContextPaths(new core.DartList.literal(project));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
        } )());
    }

    test_watch_addFile_rootPathContainsDotFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let project : string = '/.pub/project';
            let fileA : string = `${project}/foo.dart`;
            let fileB : string = `${project}/bar/baz.dart`;
            this.resourceProvider.newFile(fileA,'');
            this.manager.setRoots(new core.DartList.literal<string>(project),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.callbacks.assertContextPaths(new core.DartList.literal(project));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA));
            this.resourceProvider.newFile(fileB,'');
            await lib4.pumpEventQueue();
            this.callbacks.assertContextPaths(new core.DartList.literal(project));
            this.callbacks.assertContextFiles(project,new core.DartList.literal(fileA,fileB));
        } )());
    }

    test_watch_addFileInSubfolder() {
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        expect(this.callbacks.currentFilePaths,hasLength(0));
        let filePath : string = lib3.properties.posix.join(this.projPath,'foo','bar.dart');
        this.resourceProvider.newFile(filePath,'contents');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            let filePaths : core.DartIterable<string> = this.callbacks.currentFilePaths;
            expect(filePaths,hasLength(1));
            expect(filePaths,contains(filePath));
        });
    }
    test_watch_addPackagespec_toRoot() {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let rootPackagespec : string = `${root}/.packages`;
        this.resourceProvider.newFile(rootFile,'library root;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.resourceProvider.newFile(rootPackagespec,'');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root));
            this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        });
    }
    test_watch_addPackagespec_toSubFolder() {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let subProject : string = `${root}/sub/aaa`;
        let subPubspec : string = `${subProject}/.packages`;
        let subFile : string = `${subProject}/bin/a.dart`;
        this.resourceProvider.newFile(rootFile,'library root;');
        this.resourceProvider.newFile(subFile,'library a;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile,subFile));
        this.resourceProvider.newFile(subPubspec,'');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
            this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
            this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        });
    }
    test_watch_addPackagespec_toSubFolder_ofSubFolder() {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let subProject : string = `${root}/sub`;
        let subPubspec : string = `${subProject}/.packages`;
        let subFile : string = `${subProject}/bin/sub.dart`;
        let subSubPubspec : string = `${subProject}/subsub/.packages`;
        this.resourceProvider.newFile(rootFile,'library root;');
        this.resourceProvider.newFile(subPubspec,'');
        this.resourceProvider.newFile(subFile,'library sub;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        this.resourceProvider.newFile(subSubPubspec,'');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
            this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
            this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        });
    }
    test_watch_addPackagespec_toSubFolder_withPubspec() {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let subProject : string = `${root}/sub/aaa`;
        let subPackagespec : string = `${subProject}/.packages`;
        let subPubspec : string = `${subProject}/pubspec.yaml`;
        let subFile : string = `${subProject}/bin/a.dart`;
        this.resourceProvider.newFile(subPubspec,'pubspec');
        this.resourceProvider.newFile(rootFile,'library root;');
        this.resourceProvider.newFile(subFile,'library a;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        this.resourceProvider.newFile(subPackagespec,'');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
            this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
            this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        });
    }
    test_watch_addPubspec_toRoot() {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let rootPubspec : string = `${root}/pubspec.yaml`;
        this.resourceProvider.newFile(rootFile,'library root;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.resourceProvider.newFile(rootPubspec,'pubspec');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root));
            this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        });
    }
    test_watch_addPubspec_toSubFolder() {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let subProject : string = `${root}/sub/aaa`;
        let subPubspec : string = `${subProject}/pubspec.yaml`;
        let subFile : string = `${subProject}/bin/a.dart`;
        this.resourceProvider.newFile(rootFile,'library root;');
        this.resourceProvider.newFile(subFile,'library a;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile,subFile));
        this.resourceProvider.newFile(subPubspec,'pubspec');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
            this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
            this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        });
    }
    test_watch_addPubspec_toSubFolder_ofSubFolder() {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let subProject : string = `${root}/sub`;
        let subPubspec : string = `${subProject}/pubspec.yaml`;
        let subFile : string = `${subProject}/bin/sub.dart`;
        let subSubPubspec : string = `${subProject}/subsub/pubspec.yaml`;
        this.resourceProvider.newFile(rootFile,'library root;');
        this.resourceProvider.newFile(subPubspec,'pubspec');
        this.resourceProvider.newFile(subFile,'library sub;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        this.resourceProvider.newFile(subSubPubspec,'pubspec');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
            this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
            this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        });
    }
    test_watch_deleteFile() {
        let filePath : string = lib3.properties.posix.join(this.projPath,'foo.dart');
        let file : any = this.resourceProvider.newFile(filePath,'contents');
        let projFolder : any = file.parent;
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        let filePaths : core.DartIterable<string> = this.callbacks.currentFilePaths;
        expect(filePaths,hasLength(1));
        expect(filePaths,contains(filePath));
        expect(file.exists,isTrue);
        expect(projFolder.exists,isTrue);
        this.resourceProvider.deleteFile(filePath);
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(file.exists,isFalse);
            expect(projFolder.exists,isTrue);
            return expect(this.callbacks.currentFilePaths,hasLength(0));
        });
    }
    test_watch_deleteFolder() {
        let filePath : string = lib3.properties.posix.join(this.projPath,'foo.dart');
        let file : any = this.resourceProvider.newFile(filePath,'contents');
        let projFolder : any = file.parent;
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        let filePaths : core.DartIterable<string> = this.callbacks.currentFilePaths;
        expect(filePaths,hasLength(1));
        expect(filePaths,contains(filePath));
        expect(file.exists,isTrue);
        expect(projFolder.exists,isTrue);
        this.resourceProvider.deleteFolder(this.projPath);
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(file.exists,isFalse);
            expect(projFolder.exists,isFalse);
            return expect(this.callbacks.currentFilePaths,hasLength(0));
        });
    }
    test_watch_deletePackagespec_fromRoot() {
        let root : string = '/root';
        let rootPubspec : string = `${root}/.packages`;
        let rootFile : string = `${root}/root.dart`;
        this.resourceProvider.newFile(rootPubspec,'');
        this.resourceProvider.newFile(rootFile,'library root;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.resourceProvider.deleteFile(rootPubspec);
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root));
            this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        });
    }
    test_watch_deletePackagespec_fromSubFolder() {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let subProject : string = `${root}/sub/aaa`;
        let subPubspec : string = `${subProject}/.packages`;
        let subFile : string = `${subProject}/bin/a.dart`;
        this.resourceProvider.newFile(subPubspec,'');
        this.resourceProvider.newFile(rootFile,'library root;');
        this.resourceProvider.newFile(subFile,'library a;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        this.resourceProvider.deleteFile(subPubspec);
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root));
            this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile,subFile));
        });
    }
    test_watch_deletePackagespec_fromSubFolder_withPubspec() {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let subProject : string = `${root}/sub/aaa`;
        let subPackagespec : string = `${subProject}/.packages`;
        let subPubspec : string = `${subProject}/pubspec.yaml`;
        let subFile : string = `${subProject}/bin/a.dart`;
        this.resourceProvider.newFile(subPackagespec,'');
        this.resourceProvider.newFile(subPubspec,'pubspec');
        this.resourceProvider.newFile(rootFile,'library root;');
        this.resourceProvider.newFile(subFile,'library a;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        this.resourceProvider.deleteFile(subPackagespec);
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
            this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        });
    }
    test_watch_deletePubspec_fromRoot() {
        let root : string = '/root';
        let rootPubspec : string = `${root}/pubspec.yaml`;
        let rootFile : string = `${root}/root.dart`;
        this.resourceProvider.newFile(rootPubspec,'pubspec');
        this.resourceProvider.newFile(rootFile,'library root;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.resourceProvider.deleteFile(rootPubspec);
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root));
            this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        });
    }
    test_watch_deletePubspec_fromSubFolder() {
        let root : string = '/root';
        let rootFile : string = `${root}/root.dart`;
        let subProject : string = `${root}/sub/aaa`;
        let subPubspec : string = `${subProject}/pubspec.yaml`;
        let subFile : string = `${subProject}/bin/a.dart`;
        this.resourceProvider.newFile(subPubspec,'pubspec');
        this.resourceProvider.newFile(rootFile,'library root;');
        this.resourceProvider.newFile(subFile,'library a;');
        this.manager.setRoots(new core.DartList.literal<string>(root),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        this.callbacks.assertContextPaths(new core.DartList.literal(root,subProject));
        this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile));
        this.callbacks.assertContextFiles(subProject,new core.DartList.literal(subFile));
        this.resourceProvider.deleteFile(subPubspec);
        return lib4.pumpEventQueue().then((_ : any) =>  {
            this.callbacks.assertContextPaths(new core.DartList.literal(root));
            this.callbacks.assertContextFiles(root,new core.DartList.literal(rootFile,subFile));
        });
    }
    test_watch_modifyFile() {
        let filePath : string = lib3.properties.posix.join(this.projPath,'foo.dart');
        this.resourceProvider.newFile(filePath,'contents');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        if (this.enableAnalysisDriver) {
            let filePaths : core.DartIterable<string> = this.callbacks.currentFilePaths;
            expect(filePaths,hasLength(1));
            expect(filePaths,contains(filePath));
        }else {
            let filePaths : core.DartMap<string,number> = this.callbacks.currentContextFilePaths.get(this.projPath);
            expect(filePaths,hasLength(1));
            expect(filePaths,contains(filePath));
            expect(filePaths.get(filePath),equals(this.callbacks.now));
        }
        this.callbacks.now++;
        this.resourceProvider.modifyFile(filePath,'new contents');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            if (this.enableAnalysisDriver) {
                return null;
            }
            let filePaths : core.DartMap<string,number> = this.callbacks.currentContextFilePaths.get(this.projPath);
            return expect(filePaths.get(filePath),equals(this.callbacks.now));
        });
    }
    test_watch_modifyPackageMapDependency_fail() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let dependencyPath : string = lib3.properties.posix.join(this.projPath,'dep');
            this.resourceProvider.newFile(dependencyPath,'contents');
            this.packageMapProvider.dependencies.add(dependencyPath);
            let dartFilePath : string = lib3.properties.posix.join(this.projPath,'main.dart');
            this.resourceProvider.newFile(dartFilePath,'contents');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            expect(this._currentPackageMap,isEmpty);
            this.packageMapProvider.packageMap = null;
            this.resourceProvider.modifyFile(dependencyPath,'new contents');
            await lib4.pumpEventQueue();
            expect(this._currentPackageMap,isEmpty);
        } )());
    }

    test_watch_modifyPackagespec() {
        let packagesPath : string = `${this.projPath}/.packages`;
        let filePath : string = `${this.projPath}/bin/main.dart`;
        this.resourceProvider.newFile(packagesPath,'');
        this.resourceProvider.newFile(filePath,'library main;');
        this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        let filePaths : core.DartIterable<string> = this.callbacks.currentFilePaths;
        expect(filePaths,hasLength(1));
        expect(filePaths,contains(filePath));
        expect(this._currentPackageMap,isEmpty);
        this.callbacks.now++;
        this.resourceProvider.modifyFile(packagesPath,'main:./lib/');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(this._currentPackageMap.keys,unorderedEquals(new core.DartList.literal('main')));
        });
    }
    _checkPackageRoot(path : string,expectation : any) : void {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractContextManagerTest() {
    }
}

export namespace ContextManagerWithOptionsTest {
    export type Constructors = ContextManagerTest.Constructors | 'ContextManagerWithOptionsTest';
    export type Interface = Omit<ContextManagerWithOptionsTest, Constructors>;
}
@DartClass
export class ContextManagerWithOptionsTest extends ContextManagerTest {
    @AbstractProperty
    get optionsFileName() : string{ throw 'abstract'}
    test_analysis_options_file_delete() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'embedded_libs:\n  "dart:foobar": "../sdk_ext/entry.dart"\nanalyzer:\n  language:\n    enableStrictCallChecks: true\n  errors:\n    unused_local_variable: false\nlinter:\n  rules:\n    - camel_case_types\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            await lib4.pumpEventQueue();
            expect(this.errorProcessors,hasLength(1));
            expect(this.lints,hasLength(1));
            expect(this.analysisOptions.enableStrictCallChecks,isTrue);
            this.deleteFile(new core.DartList.literal(this.projPath,this.optionsFileName));
            await lib4.pumpEventQueue();
            expect(this.errorProcessors,isEmpty);
            expect(this.lints,isEmpty);
            expect(this.analysisOptions.enableStrictCallChecks,isFalse);
        } )());
    }

    test_analysis_options_file_delete_with_embedder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'_embedder.yaml'),'analyzer:\n  strong-mode: true\n  errors:\n    missing_return: false\nlinter:\n  rules:\n    - avoid_as\n');
            this.newFile(new core.DartList.literal(this.projPath,'.packages'),'test_pack:lib/');
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'analyzer:\n  language:\n    enableStrictCallChecks: true\n  errors:\n    unused_local_variable: false\nlinter:\n  rules:\n    - camel_case_types\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            await lib4.pumpEventQueue();
            expect(this.analysisOptions.enableStrictCallChecks,isTrue);
            expect(this.analysisOptions.strongMode,isTrue);
            expect(this.errorProcessors,hasLength(2));
            expect(this.lints,hasLength(2));
            this.deleteFile(new core.DartList.literal(this.projPath,this.optionsFileName));
            await lib4.pumpEventQueue();
            expect(this.analysisOptions.enableStrictCallChecks,isFalse);
            expect(this.lints,hasLength(1));
            expect(this.lints.first,new bare.createInstance(any,null));
            expect(this.errorProcessors,hasLength(1));
            expect(this.getProcessor(this.missing_return).severity,isNull);
        } )());
    }

    test_analysis_options_include() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            let sdkExtPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext'));
            this.newFile(new core.DartList.literal(sdkExtPath,'entry.dart'));
            let sdkExtSrcPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext','src'));
            this.newFile(new core.DartList.literal(sdkExtSrcPath,'part.dart'));
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'include: other_options.yaml\n');
            this.newFile(new core.DartList.literal(this.projPath,'other_options.yaml'),'analyzer:\n  language:\n    enableStrictCallChecks: true\n  errors:\n    unused_local_variable: false\nlinter:\n  rules:\n    - camel_case_types\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            await lib4.pumpEventQueue();
            expect(this.analysisOptions.enableStrictCallChecks,isTrue);
            expect(this.errorProcessors,hasLength(1));
            expect(this.lints,hasLength(1));
            expect(this.lints[0].name,'camel_case_types');
        } )());
    }

    test_analysis_options_include_package() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            let sdkExtPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext'));
            this.newFile(new core.DartList.literal(sdkExtPath,'entry.dart'));
            let sdkExtSrcPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext','src'));
            this.newFile(new core.DartList.literal(sdkExtSrcPath,'part.dart'));
            let booLibPosixPath : string = '/my/pkg/boo/lib';
            this.newFile(new core.DartList.literal(booLibPosixPath,'other_options.yaml'),'analyzer:\n  language:\n    enableStrictCallChecks: true\n  errors:\n    unused_local_variable: false\nlinter:\n  rules:\n    - camel_case_types\n');
            this.newFile(new core.DartList.literal(this.projPath,ContextManagerImpl.PACKAGE_SPEC_NAME),`boo:${booLibPosixPath}\n`);
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'include: package:boo/other_options.yaml\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            await lib4.pumpEventQueue();
            expect(this.analysisOptions.enableStrictCallChecks,isTrue);
            expect(this.errorProcessors,hasLength(1));
            expect(this.lints,hasLength(1));
            expect(this.lints[0].name,'camel_case_types');
        } )());
    }

    test_analysis_options_parse_failure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            let sdkExtPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext'));
            this.newFile(new core.DartList.literal(sdkExtPath,'entry.dart'));
            let sdkExtSrcPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext','src'));
            this.newFile(new core.DartList.literal(sdkExtSrcPath,'part.dart'));
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),';\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
        } )());
    }

    test_deleteRoot_hasAnalysisOptions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            await lib4.pumpEventQueue();
            this.resourceProvider.deleteFolder(this.projPath);
            await lib4.pumpEventQueue();
        } )());
    }

    test_embedder_options() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            let sdkExtPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext'));
            this.newFile(new core.DartList.literal(this.projPath,'test','test.dart'));
            this.newFile(new core.DartList.literal(sdkExtPath,'entry.dart'));
            let bytes : core.DartList<number> = new bare.createInstance(any,null,new core.DartList.literal(),null,true).build();
            this.newFileFromBytes(new core.DartList.literal(this.projPath,'sdk.ds'),bytes);
            this.newFile(new core.DartList.literal(libPath,'_embedder.yaml'),'embedded_libs:\n  "dart:foobar": "../sdk_ext/entry.dart"\nanalyzer:\n  strong-mode: true\n  language:\n    enableSuperMixins: true\n  errors:\n    missing_return: false\nlinter:\n  rules:\n    - avoid_as\n');
            this.newFile(new core.DartList.literal(this.projPath,'.packages'),'test_pack:lib/');
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'analyzer:\n  exclude:\n    - \'test/**\'\n  language:\n    enableStrictCallChecks: true\n  errors:\n    unused_local_variable: false\nlinter:\n  rules:\n    - camel_case_types\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            await lib4.pumpEventQueue();
            let contexts = this.manager.contextsInAnalysisRoot(this.resourceProvider.newFolder(this.projPath));
            expect(contexts,isNotNull);
            expect(contexts,hasLength(1));
            expect(this.analysisOptions.strongMode,isTrue);
            expect(this.analysisOptions.enableSuperMixins,isTrue);
            expect(this.analysisOptions.enableStrictCallChecks,isTrue);
            expect(this.callbacks.currentContextFilePaths.get(this.projPath).keys,unorderedEquals(new core.DartList.literal('/my/proj/sdk_ext/entry.dart',`/my/proj/${this.optionsFileName}`)));
            expect(this.errorProcessors,hasLength(2));
            expect(this.getProcessor(this.missing_return).severity,isNull);
            expect(this.getProcessor(this.unused_local_variable).severity,isNull);
            let lintNames = this.lints.map((lint : any) =>  {
                return lint.name;
            });
            expect(lintNames,unorderedEquals(new core.DartList.literal('avoid_as','camel_case_types')));
            let source = this.sourceFactory.forUri('dart:foobar');
            expect(source,isNotNull);
            expect(source.fullName,'/my/proj/sdk_ext/entry.dart');
        } )());
    }

    test_error_filter_analysis_option() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'analyzer:\n  errors:\n    unused_local_variable: ignore\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            expect(this.errorProcessors,hasLength(1));
            expect(this.getProcessor(this.unused_local_variable).severity,isNull);
        } )());
    }

    test_error_filter_analysis_option_multiple_filters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'analyzer:\n  errors:\n    invalid_assignment: ignore\n    unused_local_variable: error\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            expect(this.errorProcessors,hasLength(2));
            expect(this.getProcessor(this.invalid_assignment_error).severity,isNull);
            expect(this.getProcessor(this.unused_local_variable).severity,ErrorSeverity.ERROR);
        } )());
    }

    test_error_filter_analysis_option_synonyms() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'analyzer:\n  errors:\n    unused_local_variable: ignore\n    ambiguous_import: false\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            expect(this.errorProcessors,isNotNull);
            expect(this.errorProcessors,hasLength(2));
        } )());
    }

    test_error_filter_analysis_option_unpsecified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'analyzer:\n#  errors:\n#    unused_local_variable: ignore\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            expect(this.errorProcessors,isEmpty);
        } )());
    }

    test_optionsFile_update_strongMode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            fail('Test times out');
            let file = this.resourceProvider.newFile(`${this.projPath}/bin/test.dart`,'main() {\n  var paths = <int>[];\n  var names = <String>[];\n  paths.addAll(names.map((s) => s.length));\n}\n');
            this.resourceProvider.newFile(`${this.projPath}/${this.optionsFileName}`,'analyzer:\n  strong-mode: false\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            await lib4.pumpEventQueue();
            if (this.enableAnalysisDriver) {
                let result : any = await this.callbacks.currentDriver.getResult(file.path);
                let sdkContext : any = this.sourceFactory.dartSdk.context;
                expect(this.analysisOptions.strongMode,isFalse);
                expect(sdkContext.analysisOptions.strongMode,isFalse);
                expect(result.errors,isEmpty);
            }else {
                let context : any = this.manager.getContextFor(this.projPath);
                let testSource : any = context.getSourcesWithFullName(file.path).single;
                let sdkContext : any = this.sourceFactory.dartSdk.context;
                expect(this.analysisOptions.strongMode,isFalse);
                expect(sdkContext.analysisOptions.strongMode,isFalse);
                expect(context.computeErrors(testSource),isEmpty);
            }
            this.resourceProvider.updateFile(`${this.projPath}/${this.optionsFileName}`,'analyzer:\n  strong-mode: true\n');
            await lib4.pumpEventQueue();
            if (this.enableAnalysisDriver) {
                let result : any = await this.callbacks.currentDriver.getResult(file.path);
                let sdkContext : any = this.sourceFactory.dartSdk.context;
                expect(this.analysisOptions.strongMode,isTrue);
                expect(sdkContext.analysisOptions.strongMode,isTrue);
                expect(result.errors,isEmpty);
            }else {
                let context : any = this.manager.getContextFor(this.projPath);
                let testSource : any = context.getSourcesWithFullName(file.path).single;
                let sdkContext : any = this.sourceFactory.dartSdk.context;
                expect(this.analysisOptions.strongMode,isTrue);
                expect(sdkContext.analysisOptions.strongMode,isTrue);
                expect(context.computeErrors(testSource),isEmpty);
            }
        } )());
    }

    test_path_filter_analysis_option() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            this.newFile(new core.DartList.literal(libPath,'nope.dart'));
            let sdkExtPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext'));
            this.newFile(new core.DartList.literal(sdkExtPath,'entry.dart'));
            let sdkExtSrcPath : string = this.newFolder(new core.DartList.literal(this.projPath,'sdk_ext','src'));
            this.newFile(new core.DartList.literal(sdkExtSrcPath,'part.dart'));
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'analyzer:\n  exclude:\n    - lib/nope.dart\n    - \'sdk_ext/**\'\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            let projectFolder : any = this.resourceProvider.newFolder(this.projPath);
            if (this.enableAnalysisDriver) {
                let drivers = this.manager.getDriversInAnalysisRoot(projectFolder);
                expect(drivers,hasLength(1));
                let driver : any = op(Op.INDEX,drivers,0);
                expect(driver.addedFiles,unorderedEquals(new core.DartList.literal('/my/proj/lib/main.dart',`/my/proj/${this.optionsFileName}`)));
            }else {
                let fileTimestamps : core.DartMap<string,number> = this.callbacks.currentContextFilePaths.get(this.projPath);
                expect(fileTimestamps,isNotEmpty);
                let files : core.DartList<string> = fileTimestamps.keys.toList();
                expect(files,unorderedEquals(new core.DartList.literal('/my/proj/lib/main.dart',`/my/proj/${this.optionsFileName}`)));
            }
        } )());
    }

    test_path_filter_child_contexts_option() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            this.newFile(new core.DartList.literal(libPath,'pubspec.yaml'),'name: foobar\n');
            let otherLibPath : string = this.newFolder(new core.DartList.literal(this.projPath,'other_lib'));
            this.newFile(new core.DartList.literal(otherLibPath,'entry.dart'));
            this.newFile(new core.DartList.literal(otherLibPath,'pubspec.yaml'),'name: other_lib\n');
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'analyzer:\n  exclude:\n    - \'other_lib\'\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            let projectFolder : any = this.resourceProvider.newFolder(this.projPath);
            if (this.enableAnalysisDriver) {
                let drivers = this.manager.getDriversInAnalysisRoot(projectFolder);
                expect(drivers,hasLength(2));
                expect(op(Op.INDEX,drivers,0).name,equals('/my/proj'));
                expect(op(Op.INDEX,drivers,1).name,equals('/my/proj/lib'));
            }else {
                let contexts = this.manager.contextsInAnalysisRoot(this.resourceProvider.newFolder(this.projPath));
                expect(contexts.length,2);
                expect(op(Op.INDEX,contexts,0).name,equals('/my/proj'));
                expect(op(Op.INDEX,contexts,1).name,equals('/my/proj/lib'));
            }
        } )());
    }

    test_path_filter_recursive_wildcard_child_contexts_option() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            this.newFile(new core.DartList.literal(libPath,'pubspec.yaml'),'  name: foobar\n  ');
            let otherLibPath : string = this.newFolder(new core.DartList.literal(this.projPath,'other_lib'));
            this.newFile(new core.DartList.literal(otherLibPath,'entry.dart'));
            this.newFile(new core.DartList.literal(otherLibPath,'pubspec.yaml'),'  name: other_lib\n  ');
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'analyzer:\n  exclude:\n    - \'other_lib/**\'\n  ');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            let projectFolder : any = this.resourceProvider.newFolder(this.projPath);
            if (this.enableAnalysisDriver) {
                let drivers = this.manager.getDriversInAnalysisRoot(projectFolder);
                expect(drivers,hasLength(2));
                expect(op(Op.INDEX,drivers,0).name,equals('/my/proj'));
                expect(op(Op.INDEX,drivers,1).name,equals('/my/proj/lib'));
            }else {
                let contexts = this.manager.contextsInAnalysisRoot(projectFolder);
                expect(contexts.length,2);
                expect(op(Op.INDEX,contexts,0).name,equals('/my/proj'));
                expect(op(Op.INDEX,contexts,1).name,equals('/my/proj/lib'));
            }
        } )());
    }

    test_path_filter_wildcard_child_contexts_option() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            this.newFile(new core.DartList.literal(libPath,'pubspec.yaml'),'name: foobar\n');
            let otherLibPath : string = this.newFolder(new core.DartList.literal(this.projPath,'other_lib'));
            this.newFile(new core.DartList.literal(otherLibPath,'entry.dart'));
            this.newFile(new core.DartList.literal(otherLibPath,'pubspec.yaml'),'name: other_lib\n');
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'analyzer:\n  exclude:\n    - \'other_lib/*\'\n');
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            let projectFolder : any = this.resourceProvider.newFolder(this.projPath);
            if (this.enableAnalysisDriver) {
                let drivers = this.manager.getDriversInAnalysisRoot(projectFolder);
                expect(drivers,hasLength(2));
                expect(op(Op.INDEX,drivers,0).name,equals('/my/proj'));
                expect(op(Op.INDEX,drivers,1).name,equals('/my/proj/lib'));
            }else {
                let contexts = this.manager.contextsInAnalysisRoot(projectFolder);
                expect(contexts,hasLength(2));
                expect(op(Op.INDEX,contexts,0).name,equals('/my/proj'));
                expect(op(Op.INDEX,contexts,1).name,equals('/my/proj/lib'));
            }
        } )());
    }

    test_setRoots_nested_excludedByOuter() : void {
        let project : string = '/project';
        let projectPubspec : string = `${project}/pubspec.yaml`;
        let example : string = `${project}/example`;
        let examplePubspec : string = `${example}/pubspec.yaml`;
        this.resourceProvider.newFile(projectPubspec,'name: project');
        this.resourceProvider.newFile(examplePubspec,'name: example');
        this.newFile(new core.DartList.literal(project,this.optionsFileName),'analyzer:\n  exclude:\n    - \'example\'\n');
        this.manager.setRoots(new core.DartList.literal<string>(project,example),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        {
            let rootInfo : any = this.manager.rootInfo;
            expect(rootInfo.children,hasLength(1));
            {
                let projectInfo : any = op(Op.INDEX,rootInfo.children,0);
                expect(projectInfo.folder.path,project);
                expect(projectInfo.children,hasLength(1));
                {
                    let exampleInfo : any = op(Op.INDEX,projectInfo.children,0);
                    expect(exampleInfo.folder.path,example);
                    expect(exampleInfo.children,isEmpty);
                }
            }
        }
        expect(this.callbacks.currentContextRoots,hasLength(2));
        expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(project,example)));
    }
    test_setRoots_nested_excludedByOuter_deep() : void {
        let a : string = '/a';
        let c : string = `${a}/b/c`;
        let aPubspec : string = `${a}/pubspec.yaml`;
        let cPubspec : string = `${c}/pubspec.yaml`;
        this.resourceProvider.newFile(aPubspec,'name: aaa');
        this.resourceProvider.newFile(cPubspec,'name: ccc');
        this.newFile(new core.DartList.literal(a,this.optionsFileName),'analyzer:\n  exclude:\n    - \'b**\'\n');
        this.manager.setRoots(new core.DartList.literal<string>(a,c),new core.DartList.literal<string>(),new core.DartMap.literal([
        ]));
        {
            let rootInfo : any = this.manager.rootInfo;
            expect(rootInfo.children,hasLength(1));
            {
                let aInfo : any = op(Op.INDEX,rootInfo.children,0);
                expect(aInfo.folder.path,a);
                expect(aInfo.children,hasLength(1));
                {
                    let cInfo : any = op(Op.INDEX,aInfo.children,0);
                    expect(cInfo.folder.path,c);
                    expect(cInfo.children,isEmpty);
                }
            }
        }
        expect(this.callbacks.currentContextRoots,hasLength(2));
        expect(this.callbacks.currentContextRoots,unorderedEquals(new core.DartList.literal(a,c)));
    }
    test_strong_mode_analysis_option() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.newFile(new core.DartList.literal(this.projPath,this.optionsFileName),'analyzer:\n  strong-mode: true\n');
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            expect(this.analysisOptions.strongMode,true);
        } )());
    }

    test_watchEvents() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = this.newFolder(new core.DartList.literal(this.projPath,ContextManagerTest.LIB_NAME));
            this.manager.setRoots(new core.DartList.literal<string>(this.projPath),new core.DartList.literal<string>(),new core.DartMap.literal([
            ]));
            this.newFile(new core.DartList.literal(libPath,'main.dart'));
            await new async.Future.delayed(new core.DartDuration({
                milliseconds : 1}));
            expect(this.callbacks.watchEvents,hasLength(1));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContextManagerWithOptionsTest() {
    }
}

export namespace ContextManagerWithNewOptionsTest {
    export type Constructors = ContextManagerWithOptionsTest.Constructors | 'ContextManagerWithNewOptionsTest';
    export type Interface = Omit<ContextManagerWithNewOptionsTest, Constructors>;
}
@DartClass
export class ContextManagerWithNewOptionsTest extends ContextManagerWithOptionsTest {
    get enableAnalysisDriver() : boolean {
        return true;
    }
    get optionsFileName() : string {
        return AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContextManagerWithNewOptionsTest() {
    }
}

export namespace ContextManagerWithOldOptionsTest {
    export type Constructors = ContextManagerWithOptionsTest.Constructors | 'ContextManagerWithOldOptionsTest';
    export type Interface = Omit<ContextManagerWithOldOptionsTest, Constructors>;
}
@DartClass
export class ContextManagerWithOldOptionsTest extends ContextManagerWithOptionsTest {
    get enableAnalysisDriver() : boolean {
        return true;
    }
    get optionsFileName() : string {
        return AnalysisEngine.ANALYSIS_OPTIONS_FILE;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContextManagerWithOldOptionsTest() {
    }
}

export class properties {
}
