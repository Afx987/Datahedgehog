/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/context_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts.packages/path/lib/src/context";
import * as convert from "@dart2ts/dart/convert";
import * as lib6 from "@dart2ts/dart/uri";

export namespace ContextInfo {
    export type Constructors = 'ContextInfo' | '_root';
    export type Interface = Omit<ContextInfo, Constructors>;
}
@DartClass
export class ContextInfo {
    folder : any;

    pathFilter : any;

    children : core.DartList<ContextInfo>;

    packageRoot : string;

    parent : ContextInfo;

    packageDescriptionPath : string;

    disposition : FolderDisposition;

    _dependencies : core.DartSet<string>;

    analysisDriver : any;

    context : any;

    sources : core.DartMap<string,any>;

    constructor(contextManager : ContextManagerImpl,parent : ContextInfo,folder : any,packagespecFile : any,packageRoot : string,disposition : FolderDisposition) {
    }
    @defaultConstructor
    ContextInfo(contextManager : ContextManagerImpl,parent : ContextInfo,folder : any,packagespecFile : any,packageRoot : string,disposition : FolderDisposition) {
        this.children = new core.DartList.literal<ContextInfo>();
        this._dependencies = new core.DartSet<string>();
        this.sources = new core.DartHashMap<string,any>();
        this.folder = folder;
        this.pathFilter = new bare.createInstance(any,null,folder.path,null,contextManager.resourceProvider.pathContext);
        this.parent = parent;
        this.packageRoot = packageRoot;
        this.disposition = disposition;
        this.packageDescriptionPath = packagespecFile.path;
        this.parent.children.add(this);
    }
    @namedConstructor
    _root() {
        this.children = new core.DartList.literal<ContextInfo>();
        this._dependencies = new core.DartSet<string>();
        this.sources = new core.DartHashMap<string,any>();
        this.folder = null;
        this.pathFilter = null;
        this.packageRoot = null;
        this.disposition = null;
    }
    static _root : new() => ContextInfo;

    get descendants() : core.DartIterable<ContextInfo> { 
        return core.iter<ContextInfo>(()=>(function*()  {
            for(let child of this.children) {
                yield child;
                yield* child.descendants;
            }
        }).call(this));
    }

    get isTopLevel() : boolean {
        return op(Op.EQUALS,this.parent.parent,null);
    }
    excludes(path : string) : boolean {
        return this.children.any((child : any) =>  {
            return child.folder.contains(path);
        });
    }
    excludesResource(resource : any) : boolean {
        return this.excludes(resource.path);
    }
    findChildInfoFor(path : string) : ContextInfo {
        for(let info of this.children) {
            if (info.folder.isOrContains(path)) {
                return info;
            }
        }
        return null;
    }
    hasDependency(path : string) : boolean {
        return this._dependencies.contains(path);
    }
    ignored(path : string) : boolean {
        return this.pathFilter.ignored(path);
    }
    isPathToPackageDescription(path : string) : boolean {
        return path == this.packageDescriptionPath;
    }
    setDependencies(newDependencies : core.DartIterable<string>) : void {
        this._dependencies = newDependencies.toSet();
    }
    _managesOrHasChildThatManages(path : string) : boolean {
        if (op(Op.EQUALS,this.parent,null)) {
            for(let child of this.children) {
                if (child._managesOrHasChildThatManages(path)) {
                    return true;
                }
            }
            return false;
        }else {
            if (!this.folder.isOrContains(path)) {
                return false;
            }
            for(let child of this.children) {
                if (child._managesOrHasChildThatManages(path)) {
                    return true;
                }
            }
            return !this.pathFilter.ignored(path);
        }
    }
}

export namespace ContextManager {
    export type Constructors = 'ContextManager';
    export type Interface = Omit<ContextManager, Constructors>;
}
@DartClass
export class ContextManager {
    @AbstractProperty
    get analysisContexts() : core.DartIterable<any>{ throw 'abstract'}
    @AbstractProperty
    get callbacks() : ContextManagerCallbacks{ throw 'abstract'}
    set callbacks(value : ContextManagerCallbacks){ throw 'abstract'}
    @AbstractProperty
    get driverMap() : core.DartMap<any,any>{ throw 'abstract'}
    @AbstractProperty
    get excludedPaths() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get folderMap() : core.DartMap<any,any>{ throw 'abstract'}
    @AbstractProperty
    get includedPaths() : core.DartList<string>{ throw 'abstract'}
    @Abstract
    contextsInAnalysisRoot(analysisRoot : any) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    getContextFolderFor(path : string) : any{ throw 'abstract'}
    @Abstract
    getContextFor(path : string) : any{ throw 'abstract'}
    @Abstract
    getDriverFor(path : string) : any{ throw 'abstract'}
    @Abstract
    getDriversInAnalysisRoot(analysisRoot : any) : core.DartList<any>{ throw 'abstract'}
    @Abstract
    isIgnored(path : string) : boolean{ throw 'abstract'}
    @Abstract
    isInAnalysisRoot(path : string) : boolean{ throw 'abstract'}
    @Abstract
    refresh(roots : core.DartList<any>) : void{ throw 'abstract'}
    @Abstract
    setRoots(includedPaths : core.DartList<string>,excludedPaths : core.DartList<string>,packageRoots : core.DartMap<string,string>) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ContextManager() {
    }
}

export namespace ContextManagerCallbacks {
    export type Constructors = 'ContextManagerCallbacks';
    export type Interface = Omit<ContextManagerCallbacks, Constructors>;
}
@DartClass
export class ContextManagerCallbacks {
    @Abstract
    addAnalysisDriver(folder : any,contextRoot : any,options : any) : any{ throw 'abstract'}
    @Abstract
    addContext(folder : any,options : any) : any{ throw 'abstract'}
    @Abstract
    applyChangesToContext(contextFolder : any,changeSet : any) : void{ throw 'abstract'}
    @Abstract
    applyFileRemoved(driver : any,file : string) : void{ throw 'abstract'}
    @Abstract
    broadcastWatchEvent(event : any) : void{ throw 'abstract'}
    @Abstract
    computingPackageMap(computing : boolean) : void{ throw 'abstract'}
    @Abstract
    createContextBuilder(folder : any,options : any) : any{ throw 'abstract'}
    @Abstract
    moveContext(from : any,to : any) : void{ throw 'abstract'}
    @Abstract
    removeContext(folder : any,flushedFiles : core.DartList<string>) : void{ throw 'abstract'}
    @Abstract
    updateContextPackageUriResolver(context : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ContextManagerCallbacks() {
    }
}

export namespace ContextManagerImpl {
    export type Constructors = 'ContextManagerImpl';
    export type Interface = Omit<ContextManagerImpl, Constructors>;
}
@DartClass
@Implements(ContextManager)
export class ContextManagerImpl implements ContextManager.Interface {
    private static __$DOC_DIR_NAME : string;
    static get DOC_DIR_NAME() : string { 
        if (this.__$DOC_DIR_NAME===undefined) {
            this.__$DOC_DIR_NAME = 'doc';
        }
        return this.__$DOC_DIR_NAME;
    }

    private static __$LIB_DIR_NAME : string;
    static get LIB_DIR_NAME() : string { 
        if (this.__$LIB_DIR_NAME===undefined) {
            this.__$LIB_DIR_NAME = 'lib';
        }
        return this.__$LIB_DIR_NAME;
    }

    private static __$PACKAGES_NAME : string;
    static get PACKAGES_NAME() : string { 
        if (this.__$PACKAGES_NAME===undefined) {
            this.__$PACKAGES_NAME = 'packages';
        }
        return this.__$PACKAGES_NAME;
    }

    private static __$PUBSPEC_NAME : string;
    static get PUBSPEC_NAME() : string { 
        if (this.__$PUBSPEC_NAME===undefined) {
            this.__$PUBSPEC_NAME = 'pubspec.yaml';
        }
        return this.__$PUBSPEC_NAME;
    }

    private static __$PACKAGE_SPEC_NAME : string;
    static get PACKAGE_SPEC_NAME() : string { 
        if (this.__$PACKAGE_SPEC_NAME===undefined) {
            this.__$PACKAGE_SPEC_NAME = '.packages';
        }
        return this.__$PACKAGE_SPEC_NAME;
    }

    private static __$_EMBEDDED_LIB_MAP_KEY : string;
    static get _EMBEDDED_LIB_MAP_KEY() : string { 
        if (this.__$_EMBEDDED_LIB_MAP_KEY===undefined) {
            this.__$_EMBEDDED_LIB_MAP_KEY = 'embedded_libs';
        }
        return this.__$_EMBEDDED_LIB_MAP_KEY;
    }

    resourceProvider : any;

    sdkManager : any;

    absolutePathContext : any;

    pathContext : lib4.Context;

    excludedPaths : core.DartList<string>;

    includedPaths : core.DartList<string>;

    packageRoots : core.DartMap<string,string>;

    normalizedPackageRoots : core.DartMap<string,string>;

    packageResolverProvider : any;

    _packageMapProvider : any;

    analyzedFilesGlobs : core.DartList<any>;

    defaultContextOptions : any;

    _instrumentationService : any;

    enableNewAnalysisDriver : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    callbacks : ContextManagerCallbacks;

    rootInfo : ContextInfo;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    driverMap : core.DartMap<any,any>;

    _folderMap : core.DartMap<any,any>;

    changeSubscriptions : core.DartMap<any,async.DartStreamSubscription<any>>;

    constructor(resourceProvider : any,sdkManager : any,packageResolverProvider : any,_packageMapProvider : any,analyzedFilesGlobs : core.DartList<any>,_instrumentationService : any,defaultContextOptions : any,enableNewAnalysisDriver : boolean) {
    }
    @defaultConstructor
    ContextManagerImpl(resourceProvider : any,sdkManager : any,packageResolverProvider : any,_packageMapProvider : any,analyzedFilesGlobs : core.DartList<any>,_instrumentationService : any,defaultContextOptions : any,enableNewAnalysisDriver : boolean) {
        this.excludedPaths = new core.DartList.literal<string>();
        this.includedPaths = new core.DartList.literal<string>();
        this.packageRoots = new core.DartMap.literal([
        ]);
        this.normalizedPackageRoots = new core.DartMap.literal([
        ]);
        this.rootInfo = new ContextInfo._root();
        this.driverMap = new core.DartHashMap<any,any>();
        this._folderMap = new core.DartHashMap<any,any>();
        this.changeSubscriptions = new core.DartMap.literal([
        ]);
        this.resourceProvider = resourceProvider;
        this.sdkManager = sdkManager;
        this.packageResolverProvider = packageResolverProvider;
        this._packageMapProvider = _packageMapProvider;
        this.analyzedFilesGlobs = analyzedFilesGlobs;
        this._instrumentationService = _instrumentationService;
        this.defaultContextOptions = defaultContextOptions;
        this.enableNewAnalysisDriver = enableNewAnalysisDriver;
        this.absolutePathContext = this.resourceProvider.absolutePathContext;
        this.pathContext = this.resourceProvider.pathContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get analysisContexts() : core.DartIterable<any> {
        return this.folderMap.values;
    }
    get folderMap() : core.DartMap<any,any> {
        if (this.enableNewAnalysisDriver) {
            throw new core.StateError('Should not be used with the new analysis driver');
        }else {
            return this._folderMap;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    contextsInAnalysisRoot(analysisRoot : any) : core.DartList<any> {
        let contexts : core.DartList<any> = new core.DartList.literal<any>();
        let innermostContainingInfo : ContextInfo = this._getInnermostContextInfoFor(analysisRoot.path);
        var addContextAndDescendants : (info : ContextInfo) => void = (info : ContextInfo) : void =>  {
            contexts.add(info.context);
            info.children.forEach(addContextAndDescendants);
        };
        if (innermostContainingInfo != null) {
            if (op(Op.EQUALS,analysisRoot,innermostContainingInfo.folder)) {
                addContextAndDescendants(innermostContainingInfo);
            }else {
                for(let info of innermostContainingInfo.children) {
                    if (analysisRoot.isOrContains(info.folder.path)) {
                        addContextAndDescendants(info);
                    }
                }
            }
        }
        return contexts;
    }
    definesEmbeddedLibs(map : core.DartMap<any,any>) : boolean {
        return map.get(ContextManagerImpl._EMBEDDED_LIB_MAP_KEY) != null;
    }
    getContextFolderFor(path : string) : any {
        return ((t)=>(!!t)?t.folder:null)(this._getInnermostContextInfoFor(path));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContextFor(path : string) : any {
        return ((t)=>(!!t)?t.context:null)(this._getInnermostContextInfoFor(path));
    }
    getContextInfoFor(folder : any) : ContextInfo {
        let info : ContextInfo = this._getInnermostContextInfoFor(folder.path);
        if (info != null && op(Op.EQUALS,folder,info.folder)) {
            return info;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getDriverFor(path : string) : any {
        return ((t)=>(!!t)?t.analysisDriver:null)(this._getInnermostContextInfoFor(path));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getDriversInAnalysisRoot(analysisRoot : any) : core.DartList<any> {
        let drivers : core.DartList<any> = new core.DartList.literal<any>();
        var addContextAndDescendants : (info : ContextInfo) => void = (info : ContextInfo) : void =>  {
            drivers.add(info.analysisDriver);
            info.children.forEach(addContextAndDescendants);
        };
        let innermostContainingInfo : ContextInfo = this._getInnermostContextInfoFor(analysisRoot.path);
        if (innermostContainingInfo != null) {
            if (op(Op.EQUALS,analysisRoot,innermostContainingInfo.folder)) {
                addContextAndDescendants(innermostContainingInfo);
            }else {
                for(let info of innermostContainingInfo.children) {
                    if (analysisRoot.isOrContains(info.folder.path)) {
                        addContextAndDescendants(info);
                    }
                }
            }
        }
        return drivers;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isIgnored(path : string) : boolean {
        let info : ContextInfo = this.rootInfo;
        do{
            info = info.findChildInfoFor(path);
            if (op(Op.EQUALS,info,null)) {
                return false;
            }
            if (info.ignored(path)) {
                return true;
            }
        } while (true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isInAnalysisRoot(path : string) : boolean {
        if (this._isExcluded(path)) {
            return false;
        }
        for(let info of this.rootInfo.children) {
            if (info.folder.contains(path)) {
                return true;
            }
        }
        return false;
    }
    processOptionsForContext(info : ContextInfo,options : core.DartMap<string,core.DartObject>,_namedArguments? : {optionsRemoved? : boolean}) : void {
        let {optionsRemoved} = Object.assign({
            "optionsRemoved" : false}, _namedArguments );
        if (options == null && !optionsRemoved) {
            return;
        }
        let analysisOptions : any;
        if (optionsRemoved) {
            analysisOptions = new bare.createInstance(any,null,this.defaultContextOptions);
            options = this._toStringMap(this._getEmbeddedOptions(info));
        }else {
            analysisOptions = new bare.createInstance(any,null,info.context.analysisOptions);
            let embeddedOptions : core.DartMap<any,any> = this._getEmbeddedOptions(info);
            if (embeddedOptions != null) {
                options = this._toStringMap(new bare.createInstance(any,null).merge(embeddedOptions,options));
            }
        }
        if (options != null) {
            applyToAnalysisOptions(analysisOptions,options);
        }
        info.context.analysisOptions = analysisOptions;
        if (options == null) {
            return;
        }
        let analyzer = options.get(AnalyzerOptions.analyzer);
        if (is(analyzer, core.DartMap<any,any>)) {
            let exclude = analyzer.get(AnalyzerOptions.exclude);
            if (is(exclude, any)) {
                let excludeList : core.DartList<string> = toStringList(exclude);
                if (excludeList != null) {
                    this.setIgnorePatternsForContext(info,excludeList);
                }
            }
        }
    }
    processOptionsForDriver(info : ContextInfo,analysisOptions : any,options : core.DartMap<string,core.DartObject>) : void {
        if (options == null) {
            return;
        }
        let embeddedOptions : core.DartMap<any,any> = this._getEmbeddedOptions(info);
        if (embeddedOptions != null) {
            options = this._toStringMap(new bare.createInstance(any,null).merge(embeddedOptions,options));
        }
        applyToAnalysisOptions(analysisOptions,options);
        let analyzer = options.get(AnalyzerOptions.analyzer);
        if (is(analyzer, core.DartMap<any,any>)) {
            let exclude : any = analyzer.get(AnalyzerOptions.exclude);
            let excludeList : core.DartList<string> = toStringList(exclude);
            if (excludeList != null) {
                this.setIgnorePatternsForContext(info,excludeList);
            }
        }
    }
    readOptions(folder : any,packages : any) : core.DartMap<string,core.DartObject> {
        try {
            let packageMap : core.DartMap<string,core.DartList<any>> = new bare.createInstance(any,null,this.resourceProvider,null,null).convertPackagesToMap(packages);
            let resolvers : core.DartList<any> = new core.DartList.literal<any>(new bare.createInstance(any,null,this.resourceProvider),new bare.createInstance(any,null,this.resourceProvider,packageMap));
            let sourceFactory : any = new bare.createInstance(any,null,resolvers,packages,this.resourceProvider);
            return new bare.createInstance(any,null,sourceFactory).getOptions(folder,{
                crawlUp : true});
        } catch (__error__) {

            {
                let _ = __error__;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    refresh(roots : core.DartList<any>) : void {
        let contextInfos : core.DartList<ContextInfo> = this.rootInfo.descendants.toList();
        if (roots == null) {
            contextInfos.forEach(this._destroyContext.bind(this));
        }else {
            roots.forEach((resource : any) =>  {
                contextInfos.forEach((contextInfo : ContextInfo) =>  {
                    if (is(resource, any) && resource.isOrContains(contextInfo.folder.path)) {
                        this._destroyContext(contextInfo);
                    }
                });
            });
        }
        this.setRoots(this.includedPaths,this.excludedPaths,this.packageRoots);
    }
    setIgnorePatternsForContext(info : ContextInfo,ignorePatterns : core.DartList<string>) : void {
        info.pathFilter.setIgnorePatterns(ignorePatterns);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setRoots(includedPaths : core.DartList<string>,excludedPaths : core.DartList<string>,packageRoots : core.DartMap<string,string>) : void {
        this.packageRoots = packageRoots;
        this.normalizedPackageRoots = new core.DartMap.literal([
        ]);
        packageRoots.forEach((sourcePath : string,targetPath : string) =>  {
            let resource : any = this.resourceProvider.getResource(sourcePath);
            if (is(resource, any)) {
                this.normalizedPackageRoots.set(resource.path,targetPath);
            }
        });
        let contextInfos : core.DartList<ContextInfo> = this.rootInfo.descendants.toList();
        let includedFolders : core.DartList<any> = new core.DartList.literal<any>();
        {
            let uniqueIncludedPaths : core.DartLinkedHashSet<string> = new core.DartLinkedHashSet.from(includedPaths);
            let sortedIncludedPaths : core.DartList<string> = uniqueIncludedPaths.toList();
            sortedIncludedPaths.sort((a : any,b : any) =>  {
                return new core.DartString(a).length - new core.DartString(b).length;
            });
            for(let path of sortedIncludedPaths) {
                let resource : any = this.resourceProvider.getResource(path);
                if (is(resource, any)) {
                    includedFolders.add(resource);
                }else if (!resource.exists) {
                }else {
                    throw new core.UnimplementedError(`${path} is not a folder. ` + 'Only support for folder analysis is implemented currently.');
                }
            }
        }
        this.includedPaths = includedPaths;
        let oldExcludedPaths : core.DartList<string> = this.excludedPaths;
        this.excludedPaths = excludedPaths;
        for(let contextInfo of contextInfos) {
            let isIncluded : boolean = includedFolders.any((folder : any) =>  {
                return folder.isOrContains(contextInfo.folder.path);
            });
            if (!isIncluded) {
                this._destroyContext(contextInfo);
            }
        }
        for(let info of this.rootInfo.descendants) {
            let newPackageRoot : string = this.normalizedPackageRoots.get(info.folder.path);
            if (info.packageRoot != newPackageRoot) {
                info.packageRoot = newPackageRoot;
                this._recomputeFolderDisposition(info);
            }
        }
        for(let includedFolder of includedFolders) {
            let includedPath : string = includedFolder.path;
            let isManaged : boolean = this.rootInfo._managesOrHasChildThatManages(includedPath);
            if (!isManaged) {
                let parent : ContextInfo = this._getParentForNewContext(includedPath);
                this.changeSubscriptions.set(includedFolder,includedFolder.changes.listen(this._handleWatchEvent.bind(this)));
                this._createContexts(parent,includedFolder,excludedPaths,false);
            }
        }
        for(let info of this.rootInfo.descendants) {
            let excludedSources : core.DartMap<string,any> = new core.DartHashMap<string,any>();
            info.sources.forEach((path : string,source : any) =>  {
                if (this._isExcludedBy(excludedPaths,path) && !this._isExcludedBy(oldExcludedPaths,path)) {
                    op(Op.INDEX_ASSIGN,excludedSources,path,source);
                }
            });
            let changeSet : any = new bare.createInstance(any,null);
            excludedSources.forEach((path : string,source : any) =>  {
                info.sources.remove(path);
                changeSet.removedSource(source);
            });
            this.callbacks.applyChangesToContext(info.folder,changeSet);
        }
        for(let info of this.rootInfo.descendants) {
            let changeSet : any = new bare.createInstance(any,null);
            this._addPreviouslyExcludedSources(info,changeSet,info.folder,oldExcludedPaths);
            this.callbacks.applyChangesToContext(info.folder,changeSet);
        }
    }
    _addPreviouslyExcludedSources(info : ContextInfo,changeSet : any,folder : any,oldExcludedPaths : core.DartList<string>) : void {
        if (info.excludesResource(folder)) {
            return;
        }
        let children : core.DartList<any>;
        try {
            children = folder.getChildren();
        } catch (__error__) {

            if (is(__error__,any)){
                return;
            }
        }
        for(let child of children) {
            let path : string = child.path;
            if (info.ignored(path)) {
                continue;
            }
            if (is(child, any)) {
                if (!this._shouldFileBeAnalyzed(child)) {
                    continue;
                }
                let wasExcluded : boolean = this._isExcludedBy(oldExcludedPaths,path) && !this._isExcludedBy(this.excludedPaths,path);
                if (!wasExcluded) {
                    continue;
                }
                let source : any = ContextManagerImpl.createSourceInContext(info.context,child);
                changeSet.addedSource(source);
                info.sources.set(path,source);
            }else if (is(child, any)) {
                if (op(Op.EQUALS,child.shortName,ContextManagerImpl.PACKAGES_NAME)) {
                    continue;
                }
                this._addPreviouslyExcludedSources(info,changeSet,child,oldExcludedPaths);
            }
        }
    }
    _addSourceFiles(changeSet : any,folder : any,info : ContextInfo) : void {
        if (info.excludesResource(folder) || folder.shortName.startsWith('.') || this._isInTopLevelDocDir(info.folder.path,folder.path)) {
            return;
        }
        let children : core.DartList<any> = null;
        try {
            children = folder.getChildren();
        } catch (__error__) {

            if (is(__error__,any)){
                return;
            }
        }
        for(let child of children) {
            let path : string = child.path;
            if (this._isExcluded(path) || info.excludes(path) || info.ignored(path)) {
                continue;
            }
            if (is(child, any)) {
                if (this._shouldFileBeAnalyzed(child)) {
                    let source : any = ContextManagerImpl.createSourceInContext(info.context,child);
                    changeSet.addedSource(source);
                    info.sources.set(path,source);
                }
            }else if (is(child, any)) {
                let shortName : string = child.shortName;
                if (shortName == ContextManagerImpl.PACKAGES_NAME) {
                    continue;
                }
                this._addSourceFiles(changeSet,child,info);
            }
        }
    }
    _checkForAnalysisOptionsUpdate(path : string,info : ContextInfo,changeType : any) : void {
        if (AnalysisEngine.isAnalysisOptionsFileName(path,this.pathContext)) {
            if (this.enableNewAnalysisDriver) {
                let driver : any = info.analysisDriver;
                let contextRoot : string = info.folder.path;
                let builder : any = this.callbacks.createContextBuilder(info.folder,this.defaultContextOptions);
                let options : any = builder.getAnalysisOptions(contextRoot);
                let factory : any = builder.createSourceFactory(contextRoot,options);
                driver.configure({
                    analysisOptions : options,sourceFactory : factory});
            }else {
                let analysisContext = info.context;
                if (is(analysisContext, any)) {
                    let options : core.DartMap<string,core.DartObject> = this.readOptions(info.folder,info.disposition.packages);
                    this.processOptionsForContext(info,options,{
                        optionsRemoved : op(Op.EQUALS,changeType,ChangeType.REMOVE)});
                    analysisContext.sourceFactory = this._createSourceFactory(analysisContext,analysisContext.analysisOptions,info.folder);
                    this.callbacks.applyChangesToContext(info.folder,new bare.createInstance(any,null));
                }
            }
        }
    }
    _checkForPackagespecUpdate(path : string,info : ContextInfo,folder : any) : void {
        if (op(Op.EQUALS,this.absolutePathContext.basename(path),ContextManagerImpl.PACKAGE_SPEC_NAME)) {
            let contextRoot : string = info.folder.path;
            let builder : any = this.callbacks.createContextBuilder(info.folder,this.defaultContextOptions);
            let options : any = builder.getAnalysisOptions(contextRoot);
            let factory : any = builder.createSourceFactory(contextRoot,options);
            if (this.enableNewAnalysisDriver) {
                let driver : any = info.analysisDriver;
                driver.configure({
                    analysisOptions : options,sourceFactory : factory});
            }else {
                info.context.analysisOptions = options;
                info.context.sourceFactory = factory;
            }
        }
    }
    _computeFlushedFiles(info : ContextInfo) : core.DartList<string> {
        if (this.enableNewAnalysisDriver) {
            let flushedFiles : core.DartSet<string> = info.analysisDriver.addedFiles.toSet();
            for(let contextInfo of this.rootInfo.descendants) {
                let other : any = contextInfo.analysisDriver;
                if (other != info.analysisDriver) {
                    flushedFiles.removeAll(other.addedFiles);
                }
            }
            return flushedFiles.toList({
                growable : false});
        }else {
            let context : any = info.context;
            let flushedFiles : core.DartHashSet<string> = new core.DartHashSet<string>();
            for(let source of context.sources) {
                flushedFiles.add(source.fullName);
            }
            for(let contextInfo of this.rootInfo.descendants) {
                let contextN : any = contextInfo.context;
                if (context != contextN) {
                    for(let source of contextN.sources) {
                        flushedFiles.remove(source.fullName);
                    }
                }
            }
            return flushedFiles.toList({
                growable : false});
        }
    }
    _computeFolderDisposition(folder : any,addDependency : (path : string) => void,packagespecFile : any) : FolderDisposition {
        let packageRoot : string = this.normalizedPackageRoots.get(folder.path);
        if (packageRoot != null) {
            let packagesDirOrFile : any = new bare.createInstance(any,null,packageRoot);
            let packageMap : core.DartMap<string,core.DartList<any>> = new core.DartMap<string,core.DartList<any>>();
            if (packagesDirOrFile.isDirectory()) {
                for(let file of packagesDirOrFile.listFiles()) {
                    let path : string;
                    try {
                        path = file.getCanonicalPath();
                    } catch (__error__) {

                        {
                            let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                            let e = __error__;
                            this._instrumentationService.logException(e,s);
                            continue;
                        }
                    }
                    let res : any = this.resourceProvider.getResource(path);
                    if (is(res, any)) {
                        packageMap.set(file.getName(),new core.DartList.literal<any>(res));
                    }
                }
                return new PackageMapDisposition(packageMap,{
                    packageRoot : packageRoot});
            }else if (packagesDirOrFile.isFile()) {
                let packageSpecFile : any = this.resourceProvider.getFile(packageRoot);
                let packages : any = this._readPackagespec(packageSpecFile);
                if (packages != null) {
                    return new PackagesFileDisposition(packages);
                }
            }
            return new NoPackageFolderDisposition({
                packageRoot : packageRoot});
        }else {
            let packageMapInfo : any;
            this.callbacks.computingPackageMap(true);
            try {
                if (op(Op.EQUALS,this.absolutePathContext.basename(packagespecFile.path),ContextManagerImpl.PACKAGE_SPEC_NAME)) {
                    let packages : any = this._readPackagespec(packagespecFile);
                    return new PackagesFileDisposition(packages);
                }
                if (this.packageResolverProvider != null) {
                    let resolver : any = this.packageResolverProvider(folder);
                    if (resolver != null) {
                        return new CustomPackageResolverDisposition(resolver);
                    }
                }
                ServerPerformanceStatistics.pub.makeCurrentWhile(() =>  {
                    packageMapInfo = this._packageMapProvider.computePackageMap(folder);
                });
            } finally {
                this.callbacks.computingPackageMap(false);
            }
            for(let dependencyPath of packageMapInfo.dependencies) {
                addDependency(dependencyPath);
            }
            if (op(Op.EQUALS,packageMapInfo.packageMap,null)) {
                return new NoPackageFolderDisposition();
            }
            return new PackageMapDisposition(packageMapInfo.packageMap);
        }
    }
    _createContext(parent : ContextInfo,folder : any,excludedPaths : core.DartList<string>,packagesFile : any) : ContextInfo {
        let dependencies : core.DartList<string> = new core.DartList.literal<string>();
        let disposition : FolderDisposition = this._computeFolderDisposition(folder,dependencies.add.bind(dependencies),packagesFile);
        let info : ContextInfo = new ContextInfo(this,parent,folder,packagesFile,this.normalizedPackageRoots.get(folder.path),disposition);
        let optionMap : core.DartMap<string,core.DartObject> = this.readOptions(info.folder,disposition.packages);
        let options : any = new bare.createInstance(any,null,this.defaultContextOptions);
        applyToAnalysisOptions(options,optionMap);
        info.setDependencies(dependencies);
        if (this.enableNewAnalysisDriver) {
            let includedPath : string = folder.path;
            let containedExcludedPaths : core.DartList<string> = excludedPaths.where((excludedPath : string) =>  {
                return this.pathContext.isWithin(includedPath,excludedPath);
            }).toList();
            this.processOptionsForDriver(info,options,optionMap);
            info.analysisDriver = this.callbacks.addAnalysisDriver(folder,new bare.createInstance(any,null,folder.path,containedExcludedPaths),options);
        }else {
            info.context = this.callbacks.addContext(folder,options);
            this._folderMap.set(folder,info.context);
            info.context.name = folder.path;
            this.processOptionsForContext(info,optionMap);
        }
        return info;
    }
    _createContexts(parent : ContextInfo,folder : any,excludedPaths : core.DartList<string>,withPackageSpecOnly : boolean) : void {
        if (this._isExcluded(folder.path) || folder.shortName.startsWith('.') || op(Op.EQUALS,folder.shortName,'packages')) {
            return;
        }
        let packageSpec : any = this._findPackageSpecFile(folder);
        let createContext : boolean = packageSpec.exists || !withPackageSpecOnly;
        if (withPackageSpecOnly && packageSpec.exists && parent != null && parent.ignored(packageSpec.path)) {
            createContext = false;
        }
        if (createContext) {
            parent = this._createContext(parent,folder,excludedPaths,packageSpec);
        }
        try {
            for(let child of folder.getChildren()) {
                if (is(child, any)) {
                    if (!parent.ignored(child.path)) {
                        this._createContexts(parent,child,excludedPaths,true);
                    }
                }
            }
        } catch (__error__) {

            if (is(__error__,any)){
            }
        }
        if (createContext) {
            let changeSet : any = new bare.createInstance(any,null);
            this._addSourceFiles(changeSet,folder,parent);
            this.callbacks.applyChangesToContext(folder,changeSet);
        }
    }
    _createSourceFactory(context : any,options : any,folder : any) : any {
        let builder : any = this.callbacks.createContextBuilder(folder,options);
        return builder.createSourceFactory(folder.path,options);
    }
    _destroyContext(info : ContextInfo) : void {
        ((_8_)=>(!!_8_)?_8_.cancel():null)(this.changeSubscriptions.remove(info.folder));
        this.callbacks.removeContext(info.folder,this._computeFlushedFiles(info));
        let wasRemoved : boolean = info.parent.children.remove(info);
        /* TODO (AssertStatementImpl) : assert (wasRemoved); */;
    }
    _extractContext(oldInfo : ContextInfo,packagespecFile : any) : void {
        let newFolder : any = packagespecFile.parent;
        let newInfo : ContextInfo = this._createContext(oldInfo,newFolder,this.excludedPaths,packagespecFile);
        let extractedSources : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        oldInfo.sources.forEach((path : any,source : any) =>  {
            if (newFolder.contains(path)) {
                op(Op.INDEX_ASSIGN,extractedSources,path,source);
            }
        });
        {
            let changeSet : any = new bare.createInstance(any,null);
            extractedSources.forEach((path : any,source : any) =>  {
                newInfo.sources.set(path,source);
                changeSet.addedSource(source);
            });
            this.callbacks.applyChangesToContext(newFolder,changeSet);
        }
        {
            let changeSet : any = new bare.createInstance(any,null);
            extractedSources.forEach((path : any,source : any) =>  {
                oldInfo.sources.remove(path);
                changeSet.removedSource(source);
            });
            this.callbacks.applyChangesToContext(oldInfo.folder,changeSet);
        }
    }
    _findPackageSpecFile(folder : any) : any {
        let packageSpec : any;
        packageSpec = folder.getChild(ContextManagerImpl.PACKAGE_SPEC_NAME);
        if (op(Op.EQUALS,packageSpec,null) || !packageSpec.exists) {
            packageSpec = folder.getChild(ContextManagerImpl.PUBSPEC_NAME);
        }
        return packageSpec;
    }
    _getEmbeddedOptions(info : ContextInfo) : core.DartMap<any,any> {
        let embeddedOptions : core.DartMap<any,any> = null;
        let locator : any = info.disposition.getEmbedderLocator(this.resourceProvider);
        let maps : core.DartIterable<any> = locator.embedderYamls.values;
        if (maps.length == 1) {
            embeddedOptions = maps.first;
        }
        return embeddedOptions;
    }
    _getInnermostContextInfoFor(path : string) : ContextInfo {
        let info : ContextInfo = this.rootInfo.findChildInfoFor(path);
        if (op(Op.EQUALS,info,null)) {
            return null;
        }
        while (true){
            let childInfo : ContextInfo = info.findChildInfoFor(path);
            if (op(Op.EQUALS,childInfo,null)) {
                return info;
            }
            info = childInfo;
        }
    }
    _getParentForNewContext(path : string) : ContextInfo {
        let parent : ContextInfo = this._getInnermostContextInfoFor(path);
        if (parent != null) {
            return parent;
        }
        return this.rootInfo;
    }
    _handleWatchEvent(event : any) : void {
        this.callbacks.broadcastWatchEvent(event);
        let path : string = event.path;
        let type : any = event.type;
        let info : ContextInfo = this._getInnermostContextInfoFor(path);
        if (op(Op.EQUALS,info,null)) {
            return;
        }
        this._instrumentationService.logWatchEvent(info.folder.path,path,type.toString());
        if (info.hasDependency(path)) {
            this._recomputeFolderDisposition(info);
        }
        if (this._isExcluded(path) || this._isContainedInDotFolder(info.folder.path,path) || this._isInPackagesDir(info.folder.path,path) || this._isInTopLevelDocDir(info.folder.path,path)) {
            return;
        }
        if (info.excludes(path)) {
            return;
        }
        if (info.ignored(path)) {
            return;
        }
        switch (type) {
            case ChangeType.ADD:
                let resource : any = this.resourceProvider.getResource(path);
                let directoryPath : string = this.absolutePathContext.dirname(path);
                if (info.isTopLevel) {
                    if (info.folder.path != directoryPath) {
                        if (this._isPubspec(path)) {
                            if (!this.resourceProvider.getFile(this.absolutePathContext.append(directoryPath,ContextManagerImpl.PACKAGE_SPEC_NAME)).exists) {
                                this._extractContext(info,resource);
                                return;
                            }
                        }
                        if (this._isPackagespec(path)) {
                            if (!this.resourceProvider.getFile(this.absolutePathContext.append(directoryPath,ContextManagerImpl.PUBSPEC_NAME)).exists) {
                                this._extractContext(info,resource);
                                return;
                            }
                        }
                    }
                }
                if (is(resource, any)) {
                    let file : any = resource;
                    if (this._shouldFileBeAnalyzed(file)) {
                        if (this.enableNewAnalysisDriver) {
                            info.analysisDriver.addFile(path);
                        }else {
                            let changeSet : any = new bare.createInstance(any,null);
                            let source : any = ContextManagerImpl.createSourceInContext(info.context,file);
                            changeSet.addedSource(source);
                            this.callbacks.applyChangesToContext(info.folder,changeSet);
                            info.sources.set(path,source);
                        }
                    }
                }
                break;
            case ChangeType.REMOVE:
                if (!info.isTopLevel) {
                    let directoryPath : string = this.absolutePathContext.dirname(path);
                    if (op(Op.EQUALS,info.folder.path,directoryPath)) {
                        if (this._isPubspec(path)) {
                            if (!this.resourceProvider.getFile(this.absolutePathContext.append(directoryPath,ContextManagerImpl.PACKAGE_SPEC_NAME)).exists) {
                                this._mergeContext(info);
                                return;
                            }
                        }
                        if (this._isPackagespec(path)) {
                            if (!this.resourceProvider.getFile(this.absolutePathContext.append(directoryPath,ContextManagerImpl.PUBSPEC_NAME)).exists) {
                                this._mergeContext(info);
                                return;
                            }
                        }
                    }
                }
                if (this.enableNewAnalysisDriver) {
                    this.callbacks.applyFileRemoved(info.analysisDriver,path);
                }else {
                    let sources : core.DartList<any> = info.context.getSourcesWithFullName(path);
                    if (!sources.isEmpty) {
                        let changeSet : any = new bare.createInstance(any,null);
                        sources.forEach((source : any) =>  {
                            changeSet.removedSource(source);
                        });
                        this.callbacks.applyChangesToContext(info.folder,changeSet);
                        info.sources.remove(path);
                    }
                }
                break;
            case ChangeType.MODIFY:
                if (this.enableNewAnalysisDriver) {
                    for(let driver of this.driverMap.values) {
                        driver.changeFile(path);
                    }
                }else {
                    let sources : core.DartList<any> = info.context.getSourcesWithFullName(path);
                    if (!sources.isEmpty) {
                        let changeSet : any = new bare.createInstance(any,null);
                        sources.forEach((source : any) =>  {
                            changeSet.changedSource(source);
                        });
                        this.callbacks.applyChangesToContext(info.folder,changeSet);
                    }
                }
                break;
        }
        this._checkForPackagespecUpdate(path,info,info.folder);
        this._checkForAnalysisOptionsUpdate(path,info,type);
    }
    _isContainedInDotFolder(root : string,path : string) : boolean {
        let pathDir : string = this.absolutePathContext.dirname(path);
        let suffixPath : string = this.absolutePathContext.suffix(root,pathDir);
        if (suffixPath == null) {
            return false;
        }
        for(let pathComponent of this.absolutePathContext.split(suffixPath)) {
            if (new core.DartString(pathComponent).startsWith('.') && pathComponent != '.' && pathComponent != '..') {
                return true;
            }
        }
        return false;
    }
    _isExcluded(path : string) : boolean {
        return this._isExcludedBy(this.excludedPaths,path);
    }
    _isExcludedBy(excludedPaths : core.DartList<string>,path : string) : boolean {
        return excludedPaths.any((excludedPath : any) =>  {
            if (this.absolutePathContext.isWithin(excludedPath,path)) {
                return true;
            }
            return path == excludedPath;
        });
    }
    _isInPackagesDir(root : string,path : string) : boolean {
        let suffixPath : string = this.absolutePathContext.suffix(root,path);
        if (suffixPath == null) {
            return false;
        }
        let pathParts : core.DartList<string> = this.absolutePathContext.split(suffixPath);
        return pathParts.contains(ContextManagerImpl.PACKAGES_NAME);
    }
    _isInTopLevelDocDir(root : string,path : string) : boolean {
        let suffixPath : string = this.absolutePathContext.suffix(root,path);
        if (suffixPath == null) {
            return false;
        }
        return suffixPath == ContextManagerImpl.DOC_DIR_NAME || new core.DartString(suffixPath).startsWith(ContextManagerImpl.DOC_DIR_NAME + this.absolutePathContext.separator);
    }
    _isPackagespec(path : string) : boolean {
        return op(Op.EQUALS,this.absolutePathContext.basename(path),ContextManagerImpl.PACKAGE_SPEC_NAME);
    }
    _isPubspec(path : string) : boolean {
        return op(Op.EQUALS,this.absolutePathContext.basename(path),ContextManagerImpl.PUBSPEC_NAME);
    }
    _mergeContext(info : ContextInfo) : void {
        this._destroyContext(info);
        let parentInfo : ContextInfo = info.parent;
        if (parentInfo != null) {
            parentInfo.children.remove(info);
            let changeSet : any = new bare.createInstance(any,null);
            info.sources.forEach((path : any,source : any) =>  {
                parentInfo.sources.set(path,source);
                changeSet.addedSource(source);
            });
            this.callbacks.applyChangesToContext(parentInfo.folder,changeSet);
        }
    }
    _readPackagespec(specFile : any) : any {
        try {
            let contents : string = specFile.readAsStringSync();
            let map : core.DartMap<string,lib6.Uri> = null /*topLevl*/.parse(convert.properties.UTF8.encode(contents),new lib6.Uri.file(specFile.path));
            return new bare.createInstance(any,null,map);
        } catch (__error__) {

            {
                let _ = __error__;
                return null;
            }
        }
    }
    _recomputeFolderDisposition(info : ContextInfo) : void {
        let dependencies : core.DartList<string> = new core.DartList.literal<string>();
        info.setDependencies(dependencies);
        this._updateContextPackageUriResolver(info.folder);
    }
    _shouldFileBeAnalyzed(file : any) : boolean {
        for(let glob of this.analyzedFilesGlobs) {
            if (glob.matches(file.path)) {
                return file.exists;
            }
        }
        return false;
    }
    _toStringMap(object : core.DartObject) : core.DartMap<string,core.DartObject> {
        if (is(object, core.DartMap<any,any>)) {
            let stringMap : core.DartMap<string,core.DartObject> = new core.DartHashMap<string,core.DartObject>();
            for(let key of object.keys) {
                if (is(key, "string")) {
                    op(Op.INDEX_ASSIGN,stringMap,key,object.get(key));
                }else {
                    return null;
                }
            }
            return stringMap;
        }
        return null;
    }
    _updateContextPackageUriResolver(contextFolder : any) : void {
        if (this.enableNewAnalysisDriver) {
            let info : ContextInfo = this.getContextInfoFor(contextFolder);
            let driver : any = info.analysisDriver;
            let sourceFactory : any = this._createSourceFactory(null,driver.analysisOptions,contextFolder);
            driver.configure({
                sourceFactory : sourceFactory});
        }else {
            let context : any = this.folderMap.get(contextFolder);
            context.sourceFactory = this._createSourceFactory(context,context.analysisOptions,contextFolder);
            this.callbacks.updateContextPackageUriResolver(context);
        }
    }
    static createSourceInContext(context : any,file : any) : any {
        let source : any = file.createSource();
        if (op(Op.EQUALS,context,null)) {
            return source;
        }
        let uri : lib6.Uri = context.sourceFactory.restoreUri(source);
        return file.createSource(uri);
    }
}

export namespace ContextsChangedEvent {
    export type Constructors = 'ContextsChangedEvent';
    export type Interface = Omit<ContextsChangedEvent, Constructors>;
}
@DartClass
export class ContextsChangedEvent {
    added : core.DartList<any>;

    changed : core.DartList<any>;

    removed : core.DartList<any>;

    constructor(_namedArguments? : {added? : core.DartList<any>,changed? : core.DartList<any>,removed? : core.DartList<any>}) {
    }
    @defaultConstructor
    ContextsChangedEvent(_namedArguments? : {added? : core.DartList<any>,changed? : core.DartList<any>,removed? : core.DartList<any>}) {
        let {added,changed,removed} = Object.assign({
            "added" : AnalysisContext.EMPTY_LIST,
            "changed" : AnalysisContext.EMPTY_LIST,
            "removed" : AnalysisContext.EMPTY_LIST}, _namedArguments );
        this.added = added;
        this.changed = changed;
        this.removed = removed;
    }
}

export namespace FolderDisposition {
    export type Constructors = 'FolderDisposition';
    export type Interface = Omit<FolderDisposition, Constructors>;
}
@DartClass
export class FolderDisposition {
    @AbstractProperty
    get packageRoot() : string{ throw 'abstract'}
    @AbstractProperty
    get packages() : any{ throw 'abstract'}
    @Abstract
    createPackageUriResolvers(resourceProvider : any) : core.DartIterable<any>{ throw 'abstract'}
    @Abstract
    getEmbedderLocator(resourceProvider : any) : any{ throw 'abstract'}
    @Abstract
    getSdkExtensionFinder(resourceProvider : any) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FolderDisposition() {
    }
}

export namespace CustomPackageResolverDisposition {
    export type Constructors = FolderDisposition.Constructors | 'CustomPackageResolverDisposition';
    export type Interface = Omit<CustomPackageResolverDisposition, Constructors>;
}
@DartClass
export class CustomPackageResolverDisposition extends FolderDisposition {
    resolver : any;

    constructor(resolver : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CustomPackageResolverDisposition(resolver : any) {
        this.resolver = resolver;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packageRoot() : string {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packages() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createPackageUriResolvers(resourceProvider : any) : core.DartIterable<any> {
        return new core.DartList.literal<any>(this.resolver);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getEmbedderLocator(resourceProvider : any) : any {
        return new bare.createInstance(any,null,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSdkExtensionFinder(resourceProvider : any) : any {
        return new bare.createInstance(any,null,null);
    }
}

export namespace NoPackageFolderDisposition {
    export type Constructors = FolderDisposition.Constructors | 'NoPackageFolderDisposition';
    export type Interface = Omit<NoPackageFolderDisposition, Constructors>;
}
@DartClass
export class NoPackageFolderDisposition extends FolderDisposition {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    packageRoot : string;

    constructor(_namedArguments? : {packageRoot? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NoPackageFolderDisposition(_namedArguments? : {packageRoot? : string}) {
        let {packageRoot} = Object.assign({
        }, _namedArguments );
        this.packageRoot = packageRoot;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packages() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createPackageUriResolvers(resourceProvider : any) : core.DartIterable<any> {
        return new core.DartList.literal<any>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getEmbedderLocator(resourceProvider : any) : any {
        return new bare.createInstance(any,null,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSdkExtensionFinder(resourceProvider : any) : any {
        return new bare.createInstance(any,null,null);
    }
}

export namespace PackageMapDisposition {
    export type Constructors = FolderDisposition.Constructors | 'PackageMapDisposition';
    export type Interface = Omit<PackageMapDisposition, Constructors>;
}
@DartClass
export class PackageMapDisposition extends FolderDisposition {
    packageMap : core.DartMap<string,core.DartList<any>>;

    _embedderLocator : any;

    _sdkExtensionFinder : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    packageRoot : string;

    constructor(packageMap : core.DartMap<string,core.DartList<any>>,_namedArguments? : {packageRoot? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PackageMapDisposition(packageMap : core.DartMap<string,core.DartList<any>>,_namedArguments? : {packageRoot? : string}) {
        let {packageRoot} = Object.assign({
        }, _namedArguments );
        this.packageMap = packageMap;
        this.packageRoot = packageRoot;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packages() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createPackageUriResolvers(resourceProvider : any) : core.DartIterable<any> {
        return new core.DartList.literal<any>(new bare.createInstance(any,null,this.packageMap),new bare.createInstance(any,null,resourceProvider,this.packageMap));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getEmbedderLocator(resourceProvider : any) : any {
        if (op(Op.EQUALS,this._embedderLocator,null)) {
            this._embedderLocator = new bare.createInstance(any,null,this.packageMap);
        }
        return this._embedderLocator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSdkExtensionFinder(resourceProvider : any) : any {
        return this._sdkExtensionFinder = ( this._sdkExtensionFinder ) || ( new bare.createInstance(any,null,this.packageMap) );
    }
}

export namespace PackagesFileDisposition {
    export type Constructors = FolderDisposition.Constructors | 'PackagesFileDisposition';
    export type Interface = Omit<PackagesFileDisposition, Constructors>;
}
@DartClass
export class PackagesFileDisposition extends FolderDisposition {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    packages : any;

    packageMap : core.DartMap<string,core.DartList<any>>;

    _embedderLocator : any;

    _sdkExtensionFinder : any;

    constructor(packages : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PackagesFileDisposition(packages : any) {
        this.packages = packages;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packageRoot() : string {
        return null;
    }
    buildPackageMap(resourceProvider : any) : core.DartMap<string,core.DartList<any>> {
        if (this.packageMap == null) {
            this.packageMap = new core.DartMap.literal([
            ]);
            if (this.packages != null) {
                this.packages.asMap().forEach((name : string,uri : lib6.Uri) =>  {
                    if (uri.scheme == 'file' || uri.scheme == '') {
                        let path = resourceProvider.pathContext.fromUri(uri);
                        this.packageMap.set(name,new core.DartList.literal<any>(resourceProvider.getFolder(path)));
                    }
                });
            }
        }
        return this.packageMap;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createPackageUriResolvers(resourceProvider : any) : core.DartIterable<any> {
        if (this.packages != null) {
            let packageMap : core.DartMap<string,core.DartList<any>> = this.buildPackageMap(resourceProvider);
            return new core.DartList.literal<any>(new bare.createInstance(any,null,packageMap));
        }else {
            return new core.DartList.literal<any>();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getEmbedderLocator(resourceProvider : any) : any {
        if (op(Op.EQUALS,this._embedderLocator,null)) {
            this._embedderLocator = new bare.createInstance(any,null,this.buildPackageMap(resourceProvider));
        }
        return this._embedderLocator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSdkExtensionFinder(resourceProvider : any) : any {
        return this._sdkExtensionFinder = ( this._sdkExtensionFinder ) || ( new bare.createInstance(any,null,this.buildPackageMap(resourceProvider)) );
    }
}

export class properties {
}
