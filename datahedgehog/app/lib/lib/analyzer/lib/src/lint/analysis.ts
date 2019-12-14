/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/lint/analysis.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";
import * as collection from "@dart2ts/dart/core";
import * as lib6 from "@dart2ts.packages/path/lib/path";

export var createSource : (sourceUri : lib3.Uri) => any = (sourceUri : lib3.Uri) : any =>  {
    return PhysicalResourceProvider.INSTANCE.getFile(sourceUri.toFilePath()).createSource(sourceUri);
};
export var printAndFail : (message : string,_namedArguments? : {exitCode? : number}) => void = (message : string,_namedArguments? : {exitCode? : number}) : void =>  {
    let {exitCode} = Object.assign({
        "exitCode" : 15}, _namedArguments );
    core.print(message);
    io.exit(exitCode);
};
export var _buildAnalyzerOptions : (options : DriverOptions) => any = (options : DriverOptions) : any =>  {
    let analysisOptions : any = new bare.createInstance(any,null);
    analysisOptions.strongMode = options.strongMode;
    analysisOptions.hint = false;
    analysisOptions.lint = options.enableLints;
    analysisOptions.generateSdkErrors = options.showSdkWarnings;
    analysisOptions.enableAssertInitializer = options.enableAssertInitializer;
    analysisOptions.enableTiming = options.enableTiming;
    return analysisOptions;
};
export namespace DriverOptions {
    export type Constructors = 'DriverOptions';
    export type Interface = Omit<DriverOptions, Constructors>;
}
@DartClass
export class DriverOptions {
    cacheSize : number;

    dartSdkPath : string;

    enableAssertInitializer : boolean;

    enableLints : boolean;

    enableTiming : boolean;

    packageConfigPath : string;

    packageRootPath : string;

    showSdkWarnings : boolean;

    strongMode : boolean;

    mockSdk : any;

    visitTransitiveClosure : boolean;

    constructor() {
    }
    @defaultConstructor
    DriverOptions() {
        this.cacheSize = 512;
        this.enableAssertInitializer = false;
        this.enableLints = true;
        this.enableTiming = false;
        this.showSdkWarnings = false;
        this.strongMode = true;
        this.visitTransitiveClosure = false;
    }
}

export namespace LintDriver {
    export type Constructors = 'LintDriver';
    export type Interface = Omit<LintDriver, Constructors>;
}
@DartClass
export class LintDriver {
    _sourcesAnalyzed : core.DartSet<any>;

    options : any;

    constructor(options : any) {
    }
    @defaultConstructor
    LintDriver(options : any) {
        this._sourcesAnalyzed = new core.DartHashSet<any>();
        this.options = options;
        this._processPlugins();
    }
    get numSourcesAnalyzed() : number {
        return this._sourcesAnalyzed.length;
    }
    get resolvers() : core.DartList<any> {
        let resourceProvider : any = PhysicalResourceProvider.INSTANCE;
        let builder : any = new bare.createInstance(any,null,resourceProvider,null,null);
        let sdk : any = (this.options.mockSdk || new bare.createInstance(any,null,resourceProvider,resourceProvider.getFolder(this.sdkDir)));
        let resolvers : core.DartList<any> = new core.DartList.literal(new bare.createInstance(any,null,sdk));
        if (this.options.packageRootPath != null) {
            try {
                (builder as any).builderOptions.defaultPackagesDirectoryPath = this.options.packageRootPath;
            } catch (__error__) {

                {
                    let _ = __error__;
                    (builder as any).defaultPackagesDirectoryPath = this.options.packageRootPath;
                }
            }
            let packageMap : core.DartMap<string,core.DartList<any>> = builder.convertPackagesToMap(builder.createPackageMap(null));
            resolvers.add(new bare.createInstance(any,null,resourceProvider,packageMap));
        }
        resolvers.add(new bare.createInstance(any,null,resourceProvider));
        return resolvers;
    }
    get sdkDir() : string {
        return (this.options.dartSdkPath || getSdkPath());
    }
    analyze(files : core.DartIterable<io.File>) : core.DartList<any> {
        let context : any = AnalysisEngine.instance.createAnalysisContext();
        context.analysisOptions = _buildAnalyzerOptions(this.options);
        this.registerLinters(context);
        let packages : any = this._getPackageConfig();
        context.sourceFactory = new bare.createInstance(any,null,this.resolvers,packages);
        AnalysisEngine.instance.logger = new StdLogger();
        let sources : core.DartList<any> = new core.DartList.literal();
        let changeSet : any = new bare.createInstance(any,null);
        for(let file of files) {
            let sourceFile : any = PhysicalResourceProvider.INSTANCE.getFile(lib6.normalize(file.absolute.path));
            let source : any = sourceFile.createSource();
            let uri : lib3.Uri = context.sourceFactory.restoreUri(source);
            if (uri != null) {
                source = sourceFile.createSource(uri);
            }
            sources.add(source);
            changeSet.addedSource(source);
        }
        context.applyChanges(changeSet);
        let project = new bare.createInstance(any,null,context,sources);
        Registry.ruleRegistry.forEach((lint : any) =>  {
            if (is(lint, any)) {
                (lint as any).visit(project);
            }
        });
        let errors : core.DartList<any> = new core.DartList.literal();
        for(let source of sources) {
            context.computeErrors(source);
            errors.add(context.getErrors(source));
            this._sourcesAnalyzed.add(source);
        }
        if (this.options.visitTransitiveClosure) {
            for(let librarySource of context.librarySources) {
                for(let source of this._getAllUnitSources(context,librarySource)) {
                    if (!this._sourcesAnalyzed.contains(source)) {
                        context.computeErrors(source);
                        errors.add(context.getErrors(source));
                        this._sourcesAnalyzed.add(source);
                    }
                }
            }
        }
        return errors;
    }
    registerLinters(context : any) : void {
        if (this.options.enableLints) {
            setLints(context,((_352_)=>(!!_352_)?_352_.toList({
                growable : false}):null)(this.options.enabledLints));
        }
    }
    _getAllUnitSources(context : any,librarySource : any) : core.DartIterable<any> {
        let result : core.DartList<any> = new core.DartList.literal<any>(librarySource);
        result.addAll(context.getLibraryElement(librarySource).parts.map((e : any) =>  {
            return e.source;
        }));
        return result;
    }
    _getPackageConfig() : any {
        if (this.options.packageConfigPath != null) {
            let packageConfigPath : string = this.options.packageConfigPath;
            let fileUri : lib3.Uri = new lib3.Uri.file(packageConfigPath);
            try {
                let configFile : io.File = new io.File.fromUri(fileUri).absolute;
                let bytes : core.DartList<number> = configFile.readAsBytesSync();
                let map : core.DartMap<string,lib3.Uri> = null /*topLevl*/.parse(bytes,configFile.uri);
                return new bare.createInstance(any,null,map);
            } catch (__error__) {

                {
                    let e = __error__;
                    printAndFail(`Unable to read package config data from ${packageConfigPath}: ${e}`);
                }
            }
        }
        return null;
    }
    _processPlugins() : void {
        let plugins : core.DartList<any> = new core.DartList.literal<any>();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(plugins);
    }
}

export namespace StdLogger {
    export type Constructors = 'StdLogger';
    export type Interface = Omit<StdLogger, Constructors>;
}
@DartClass
export class StdLogger extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logError(message : string,exception? : any) : void {
        return errorSink.writeln(message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logInformation(message : string,exception? : any) : void {
        return outSink.writeln(message);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StdLogger() {
    }
}

export class properties {
}
