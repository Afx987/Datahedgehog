/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/context/builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "@dart2ts.packages/path/lib/src/context";

export namespace ContextBuilder {
    export type Constructors = 'ContextBuilder';
    export type Interface = Omit<ContextBuilder, Constructors>;
}
@DartClass
export class ContextBuilder {
    private static __$onCreateAnalysisDriver : Function;
    static get onCreateAnalysisDriver() : Function { 
        if (this.__$onCreateAnalysisDriver===undefined) {
            this.__$onCreateAnalysisDriver = null;
        }
        return this.__$onCreateAnalysisDriver;
    }
    static set onCreateAnalysisDriver(__$value : Function)  { 
        this.__$onCreateAnalysisDriver = __$value;
    }

    resourceProvider : any;

    sdkManager : any;

    contentCache : any;

    builderOptions : ContextBuilderOptions;

    packageResolverProvider : any;

    fileResolverProvider : any;

    analysisDriverScheduler : any;

    performanceLog : any;

    byteStore : any;

    fileContentOverlay : any;

    constructor(resourceProvider : any,sdkManager : any,contentCache : any,_namedArguments? : {options? : ContextBuilderOptions}) {
    }
    @defaultConstructor
    ContextBuilder(resourceProvider : any,sdkManager : any,contentCache : any,_namedArguments? : {options? : ContextBuilderOptions}) {
        let {options} = Object.assign({
        }, _namedArguments );
        this.builderOptions = (options || new ContextBuilderOptions());
        this.resourceProvider = resourceProvider;
        this.sdkManager = sdkManager;
        this.contentCache = contentCache;
    }
    buildContext(path : string) : any {
        let context : any = AnalysisEngine.instance.createAnalysisContext();
        let options : any = this.getAnalysisOptions(path);
        context.contentCache = this.contentCache;
        context.sourceFactory = this.createSourceFactory(path,options);
        context.analysisOptions = options;
        context.name = path;
        this.declareVariables(context);
        return context;
    }
    buildDriver(contextRoot : any) : any {
        let path : string = contextRoot.root;
        let options : any = this.getAnalysisOptions(path);
        let sf = this.createSourceFactory(path,options);
        let driver : any = new bare.createInstance(any,null,this.analysisDriverScheduler,this.performanceLog,this.resourceProvider,this.byteStore,this.fileContentOverlay,contextRoot,sf,options);
        if (ContextBuilder.onCreateAnalysisDriver != null) {
            ContextBuilder.onCreateAnalysisDriver(driver,this.analysisDriverScheduler,this.performanceLog,this.resourceProvider,this.byteStore,this.fileContentOverlay,path,sf,options);
        }
        this.declareVariablesInDriver(driver);
        return driver;
    }
    convertPackagesToMap(packages : any) : core.DartMap<string,core.DartList<any>> {
        let folderMap : core.DartMap<string,core.DartList<any>> = new core.DartHashMap<string,core.DartList<any>>();
        if (packages != null && packages != Packages.noPackages) {
            packages.asMap().forEach((packageName : string,uri : lib4.Uri) =>  {
                let path : string = this.resourceProvider.pathContext.fromUri(uri);
                op(Op.INDEX_ASSIGN,folderMap,packageName,new core.DartList.literal(this.resourceProvider.getFolder(path)));
            });
        }
        return folderMap;
    }
    createDefaultOptions() : any {
        let defaultOptions : any = this.builderOptions.defaultOptions;
        if (op(Op.EQUALS,defaultOptions,null)) {
            return new bare.createInstance(any,null);
        }
        return new bare.createInstance(any,null,defaultOptions);
    }
    createPackageMap(rootDirectoryPath : string) : any {
        let filePath : string = this.builderOptions.defaultPackageFilePath;
        if (filePath != null) {
            let configFile : any = this.resourceProvider.getFile(filePath);
            let bytes : core.DartList<number> = configFile.readAsBytesSync();
            let map : core.DartMap<string,lib4.Uri> = parse(bytes,configFile.toUri());
            this.resolveSymbolicLinks(map);
            return new bare.createInstance(any,null,map);
        }
        let directoryPath : string = this.builderOptions.defaultPackagesDirectoryPath;
        if (directoryPath != null) {
            let folder : any = this.resourceProvider.getFolder(directoryPath);
            return this.getPackagesFromFolder(folder);
        }
        return this.findPackagesFromFile(rootDirectoryPath);
    }
    createSourceFactory(rootPath : string,options : any) : any {
        let workspace : any = this.createWorkspace(rootPath);
        let sdk : any = this.findSdk(workspace.packageMap,options);
        return workspace.createSourceFactory(sdk);
    }
    createWorkspace(rootPath : string) : any {
        if (this._hasPackageFileInPath(rootPath)) {
            return _BasicWorkspace.find(this.resourceProvider,rootPath,this);
        }
        let workspace : any = BazelWorkspace.find(this.resourceProvider,rootPath);
        workspace = ( workspace ) || ( GnWorkspace.find(this.resourceProvider,rootPath) );
        return (workspace || _BasicWorkspace.find(this.resourceProvider,rootPath,this));
    }
    declareVariables(context : any) : void {
        let variables : core.DartMap<string,string> = this.builderOptions.declaredVariables;
        if (variables != null && variables.isNotEmpty) {
            let contextVariables : any = context.declaredVariables;
            variables.forEach((variableName : string,value : string) =>  {
                contextVariables.define(variableName,value);
            });
        }
    }
    declareVariablesInDriver(driver : any) : void {
        let variables : core.DartMap<string,string> = this.builderOptions.declaredVariables;
        if (variables != null && variables.isNotEmpty) {
            let contextVariables : any = driver.declaredVariables;
            variables.forEach((variableName : string,value : string) =>  {
                contextVariables.define(variableName,value);
            });
        }
    }
    findPackagesFromFile(path : string) : any {
        let location : any = this._findPackagesLocation(path);
        if (is(location, any)) {
            let fileBytes : core.DartList<number> = location.readAsBytesSync();
            let map : core.DartMap<string,lib4.Uri> = parse(fileBytes,this.resourceProvider.pathContext.toUri(location.path));
            this.resolveSymbolicLinks(map);
            return new bare.createInstance(any,null,map);
        }else if (is(location, any)) {
            return this.getPackagesFromFolder(location);
        }
        return Packages.noPackages;
    }
    findSdk(packageMap : core.DartMap<string,core.DartList<any>>,analysisOptions : any) : any {
        let summaryPath : string = this.builderOptions.dartSdkSummaryPath;
        if (summaryPath != null) {
            return new bare.createInstance(any,null,summaryPath,analysisOptions.strongMode,{
                resourceProvider : this.resourceProvider});
        }else if (packageMap != null) {
            let extFinder : any = new bare.createInstance(any,null,packageMap);
            let extFilePaths : core.DartList<string> = extFinder.extensionFilePaths;
            let locator : EmbedderYamlLocator = new EmbedderYamlLocator(packageMap);
            let embedderYamls : core.DartMap<any,any> = locator.embedderYamls;
            let embedderSdk : any = new bare.createInstance(any,null,this.resourceProvider,embedderYamls);
            if (op(Op.GT,embedderSdk.sdkLibraries.length,0)) {
                let paths : core.DartList<string> = new core.DartList.literal<string>();
                for(let folder of embedderYamls.keys) {
                    paths.add(folder.getChildAssumingFile(EmbedderYamlLocator.EMBEDDER_FILE_NAME).path);
                }
                paths.addAll(extFilePaths);
                let description : any = new bare.createInstance(any,null,paths,analysisOptions);
                let dartSdk : any = this.sdkManager.getSdk(description,() =>  {
                    if (extFilePaths.isNotEmpty) {
                        embedderSdk.addExtensions(extFinder.urlMappings);
                    }
                    embedderSdk.analysisOptions = analysisOptions;
                    embedderSdk.useSummary = this.sdkManager.canUseSummaries;
                    return embedderSdk;
                });
                return dartSdk;
            }else if (extFilePaths != null && extFilePaths.isNotEmpty) {
                let sdkPath : string = this.sdkManager.defaultSdkDirectory;
                let paths : core.DartList<string> = new core.DartList.literal<string>(sdkPath);
                paths.addAll(extFilePaths);
                let description : any = new bare.createInstance(any,null,paths,analysisOptions);
                return this.sdkManager.getSdk(description,() =>  {
                    let sdk : any = new bare.createInstance(any,null,this.resourceProvider,this.resourceProvider.getFolder(sdkPath));
                    if (extFilePaths.isNotEmpty) {
                        sdk.addExtensions(extFinder.urlMappings);
                    }
                    sdk.analysisOptions = analysisOptions;
                    sdk.useSummary = this.sdkManager.canUseSummaries;
                    return sdk;
                });
            }
        }
        let sdkPath : string = this.sdkManager.defaultSdkDirectory;
        let description : any = new bare.createInstance(any,null,new core.DartList.literal<string>(sdkPath),analysisOptions);
        return this.sdkManager.getSdk(description,() =>  {
            let sdk : any = new bare.createInstance(any,null,this.resourceProvider,this.resourceProvider.getFolder(sdkPath),analysisOptions.strongMode);
            sdk.analysisOptions = analysisOptions;
            sdk.useSummary = this.sdkManager.canUseSummaries;
            return sdk;
        });
    }
    getAnalysisOptions(path : string,_namedArguments? : {verbosePrint? : (text : string) => void}) : any {
        let {verbosePrint} = Object.assign({
        }, _namedArguments );
        var verbose : (text : string) => void = (text : string) : void =>  {
            if (verbosePrint != null) {
                verbosePrint(text);
            }
        };
        let workspace : any = this.createWorkspace(path);
        let sourceFactory : any = workspace.createSourceFactory(null);
        let optionsProvider : any = new bare.createInstance(any,null,sourceFactory);
        let options : any = this.createDefaultOptions();
        let optionsFile : any = this.getOptionsFile(path);
        let optionMap : core.DartMap<string,any>;
        if (optionsFile != null) {
            try {
                optionMap = optionsProvider.getOptionsFromFile(optionsFile);
                verbose(`Loaded analysis options from ${optionsFile.path}`);
            } catch (__error__) {

                {
                    let e = __error__;
                    verbose(`Exception: ${e}\n  when loading ${optionsFile.path}`);
                }
            }
        }else {
            let source : any;
            if (this.builderOptions.packageDefaultAnalysisOptions) {
                if (workspace.hasFlutterDependency) {
                    source = sourceFactory.forUri(flutterAnalysisOptionsPath);
                }
                if (op(Op.EQUALS,source,null) || !source.exists()) {
                    source = sourceFactory.forUri(bazelAnalysisOptionsPath);
                }
                if (source != null && source.exists()) {
                    try {
                        optionMap = optionsProvider.getOptionsFromSource(source);
                        verbose(`Loaded analysis options from ${source.fullName}`);
                    } catch (__error__) {

                        {
                            let e = __error__;
                            verbose(`Exception: ${e}\n  when loading ${source.fullName}`);
                        }
                    }
                }
            }
        }
        if (optionMap != null) {
            applyToAnalysisOptions(options,optionMap);
            if (this.builderOptions.argResults != null) {
                applyAnalysisOptionFlags(options,this.builderOptions.argResults,{
                    verbosePrint : verbosePrint});
                if (options.lint && options.lintRules.isEmpty) {
                    options.lintRules = Registry.ruleRegistry.defaultRules;
                    verbose('Using default lint rules');
                }
            }
        }else {
            verbose('Using default analysis options');
        }
        return options;
    }
    getOptionsFile(path : string) : any {
        let filePath : string = this.builderOptions.defaultAnalysisOptionsFilePath;
        if (filePath != null) {
            return this.resourceProvider.getFile(filePath);
        }
        let root : any = this.resourceProvider.getFolder(path);
        for(let folder : any = root; folder != null; folder = folder.parent){
            let file : any = folder.getChildAssumingFile(AnalysisEngine.ANALYSIS_OPTIONS_FILE);
            if (file.exists) {
                return file;
            }
            file = folder.getChildAssumingFile(AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE);
            if (file.exists) {
                return file;
            }
        }
        return null;
    }
    getPackagesFromFolder(folder : any) : any {
        let pathContext : lib5.Context = this.resourceProvider.pathContext;
        let map : core.DartMap<string,lib4.Uri> = new core.DartHashMap<string,lib4.Uri>();
        for(let child of folder.getChildren()) {
            if (is(child, any)) {
                let packageName : string = pathContext.basename(child.path);
                let folderPath : string = this.resolveSymbolicLink(child);
                let uriPath : string = pathContext.join(folderPath,'.');
                op(Op.INDEX_ASSIGN,map,packageName,pathContext.toUri(uriPath));
            }
        }
        return new bare.createInstance(any,null,map);
    }
    resolveSymbolicLink(folder : any) : string {
        try {
            return folder.resolveSymbolicLinksSync().path;
        } catch (__error__) {

            if (is(__error__,any)){
                return folder.path;
            }
        }
    }
    resolveSymbolicLinks(map : core.DartMap<string,lib4.Uri>) : void {
        let pathContext : lib5.Context = this.resourceProvider.pathContext;
        for(let packageName of map.keys) {
            let folder : any = this.resourceProvider.getFolder(pathContext.fromUri(map.get(packageName)));
            let folderPath : string = this.resolveSymbolicLink(folder);
            let uriPath : string = pathContext.join(folderPath,'.');
            map.set(packageName,pathContext.toUri(uriPath));
        }
    }
    _findPackagesLocation(path : string) : any {
        let folder : any = this.resourceProvider.getFolder(path);
        if (!folder.exists) {
            return null;
        }
        var checkForConfigFile : (folder : any) => any = (folder : any) : any =>  {
            let file : any = folder.getChildAssumingFile('.packages');
            if (file.exists) {
                return file;
            }
            return null;
        };
        let packagesCfgFile : any = checkForConfigFile(folder);
        if (packagesCfgFile != null) {
            return packagesCfgFile;
        }
        let packagesDir : any = folder.getChildAssumingFolder("packages");
        if (packagesDir.exists) {
            return packagesDir;
        }
        let parentDir : any = folder.parent;
        while (parentDir != null){
            packagesCfgFile = checkForConfigFile(parentDir);
            if (packagesCfgFile != null) {
                return packagesCfgFile;
            }
            parentDir = parentDir.parent;
        }
        return null;
    }
    _hasPackageFileInPath(rootPath : string) : boolean {
        let folder : any = this.resourceProvider.getFolder(rootPath);
        while (folder != null){
            let file : any = folder.getChildAssumingFile('.packages');
            if (file.exists) {
                return true;
            }
            folder = folder.parent;
        }
        return false;
    }
}

export namespace ContextBuilderOptions {
    export type Constructors = 'ContextBuilderOptions';
    export type Interface = Omit<ContextBuilderOptions, Constructors>;
}
@DartClass
export class ContextBuilderOptions {
    argResults : any;

    dartSdkSummaryPath : string;

    defaultAnalysisOptionsFilePath : string;

    declaredVariables : core.DartMap<string,string>;

    defaultOptions : any;

    defaultPackageFilePath : string;

    defaultPackagesDirectoryPath : string;

    packageDefaultAnalysisOptions : boolean;

    constructor() {
    }
    @defaultConstructor
    ContextBuilderOptions() {
        this.packageDefaultAnalysisOptions = true;
    }
}

export namespace EmbedderYamlLocator {
    export type Constructors = 'EmbedderYamlLocator';
    export type Interface = Omit<EmbedderYamlLocator, Constructors>;
}
@DartClass
export class EmbedderYamlLocator {
    private static __$EMBEDDER_FILE_NAME : string;
    static get EMBEDDER_FILE_NAME() : string { 
        if (this.__$EMBEDDER_FILE_NAME===undefined) {
            this.__$EMBEDDER_FILE_NAME = '_embedder.yaml';
        }
        return this.__$EMBEDDER_FILE_NAME;
    }

    embedderYamls : core.DartMap<any,any>;

    constructor(packageMap : core.DartMap<string,core.DartList<any>>) {
    }
    @defaultConstructor
    EmbedderYamlLocator(packageMap : core.DartMap<string,core.DartList<any>>) {
        this.embedderYamls = new core.DartHashMap<any,any>();
        if (packageMap != null) {
            this._processPackageMap(packageMap);
        }
    }
    addEmbedderYaml(libDir : any,embedderYaml : string) : void {
        this._processEmbedderYaml(libDir,embedderYaml);
    }
    refresh(packageMap : core.DartMap<string,core.DartList<any>>) : void {
        this.embedderYamls.clear();
        if (packageMap != null) {
            this._processPackageMap(packageMap);
        }
    }
    _processEmbedderYaml(libDir : any,embedderYaml : string) : void {
        try {
            let yaml : any = loadYaml(embedderYaml);
            if (is(yaml, any)) {
                this.embedderYamls.set(libDir,yaml);
            }
        } catch (__error__) {

            {
                let _ = __error__;
            }
        }
    }
    _processPackage(name : string,libDirs : core.DartList<any>) : void {
        for(let libDir of libDirs) {
            let embedderYaml : string = this._readEmbedderYaml(libDir);
            if (embedderYaml != null) {
                this._processEmbedderYaml(libDir,embedderYaml);
            }
        }
    }
    _processPackageMap(packageMap : core.DartMap<string,core.DartList<any>>) : void {
        packageMap.forEach(this._processPackage.bind(this));
    }
    _readEmbedderYaml(libDir : any) : string {
        let file : any = libDir.getChild(EmbedderYamlLocator.EMBEDDER_FILE_NAME);
        try {
            return file.readAsStringSync();
        } catch (__error__) {

            if (is(__error__,any)){
                return null;
            }
        }
    }
}

export namespace _BasicWorkspace {
    export type Constructors = '_';
    export type Interface = Omit<_BasicWorkspace, Constructors>;
}
@DartClass
export class _BasicWorkspace extends any {
    provider : any;

    root : string;

    _builder : ContextBuilder;

    _packageMap : core.DartMap<string,core.DartList<any>>;

    _packages : any;

    @namedConstructor
    _(provider : any,root : string,_builder : ContextBuilder) {
        this.provider = provider;
        this.root = root;
        this._builder = _builder;
    }
    static _ : new(provider : any,root : string,_builder : ContextBuilder) => _BasicWorkspace;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasFlutterDependency() : boolean {
        return this.packageMap.containsKey('flutter');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packageMap() : core.DartMap<string,core.DartList<any>> {
        this._packageMap = ( this._packageMap ) || ( this._builder.convertPackagesToMap(this.packages) );
        return this._packageMap;
    }
    get packages() : any {
        this._packages = ( this._packages ) || ( this._builder.createPackageMap(this.root) );
        return this._packages;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packageUriResolver() : any {
        return new bare.createInstance(any,null,this.provider,this.packageMap);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createSourceFactory(sdk : any) : any {
        let resolvers : core.DartList<any> = new core.DartList.literal<any>();
        if (sdk != null) {
            resolvers.add(new bare.createInstance(any,null,sdk));
        }
        resolvers.add(this.packageUriResolver);
        resolvers.add(new bare.createInstance(any,null,this.provider));
        return new bare.createInstance(any,null,resolvers,this.packages,this.provider);
    }
    static find(provider : any,path : string,builder : ContextBuilder) : _BasicWorkspace {
        let context : lib5.Context = provider.pathContext;
        if (!context.isAbsolute(path)) {
            throw new core.ArgumentError(`not absolute: ${path}`);
        }
        path = context.normalize(path);
        let resource : any = provider.getResource(path);
        if (is(resource, any)) {
            path = resource.parent.path;
        }
        return new _BasicWorkspace._(provider,path,builder);
    }
}

export class properties {
}
