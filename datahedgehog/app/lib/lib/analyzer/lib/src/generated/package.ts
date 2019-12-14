/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/package.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace DependencyFinder {
    export type Constructors = 'DependencyFinder';
    export type Interface = Omit<DependencyFinder, Constructors>;
}
@DartClass
export class DependencyFinder {
    private static __$pubspecName : string;
    static get pubspecName() : string { 
        if (this.__$pubspecName===undefined) {
            this.__$pubspecName = 'pubspec.yaml';
        }
        return this.__$pubspecName;
    }

    resourceProvider : any;

    dependencyMap : core.DartMap<string,core.DartList<string>>;

    constructor(resourceProvider : any) {
    }
    @defaultConstructor
    DependencyFinder(resourceProvider : any) {
        this.dependencyMap = new core.DartHashMap<string,core.DartList<string>>();
        this.resourceProvider = resourceProvider;
    }
    transitiveDependenciesFor(packageMap : core.DartMap<string,core.DartList<any>>,packagePath : string) : core.DartList<string> {
        let processedPackages : core.DartSet<string> = new core.DartHashSet<string>();
        let processedPaths : core.DartSet<string> = new core.DartHashSet<string>();
        var process : (packageName : string) => void = (packageName : string) : void =>  {
            if (processedPackages.add(packageName)) {
                let folderList : core.DartList<any> = packageMap.get(packageName);
                if (folderList == null || folderList.isEmpty) {
                    throw new core.StateError(`No mapping for package "${packageName}"`);
                }
                let packagePath : string = folderList[0].path;
                processedPaths.add(packagePath);
                let dependencies : core.DartList<string> = this._dependenciesFor(packagePath);
                for(let dependency of dependencies) {
                    process(dependency);
                }
            }
        };
        let dependencies : core.DartList<string> = this._dependenciesFor(packagePath);
        dependencies.forEach(process);
        processedPaths.remove(packagePath);
        let transitiveDependencies : core.DartList<string> = processedPaths.toList();
        transitiveDependencies.sort();
        return transitiveDependencies;
    }
    _collectDependencies(dependencies : core.DartHashSet<string>,yamlMap : any) : void {
        if (is(yamlMap, core.DartMap<any,any>)) {
            for(let key of yamlMap.keys) {
                if (is(key, "string")) {
                    dependencies.add(key);
                }
            }
        }
    }
    _dependenciesFor(packagePath : string) : core.DartList<string> {
        return this.dependencyMap.putIfAbsent(packagePath,() =>  {
            let dependencies : core.DartSet<string> = new core.DartHashSet<string>();
            let yamlNode : any = this._readPubspec(packagePath);
            if (is(yamlNode, any)) {
                this._collectDependencies(dependencies,op(Op.INDEX,yamlNode,'dependencies'));
            }
            return dependencies.toList();
        });
    }
    _readPubspec(directoryPath : string) : any {
        try {
            let yamlFile : any = this.resourceProvider.getFolder(directoryPath).getChildAssumingFile(DependencyFinder.pubspecName);
            let yamlContent : string = yamlFile.readAsStringSync();
            return loadYamlNode(yamlContent);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                throw new bare.createInstance(any,null,`Missing ${DependencyFinder.pubspecName} in ${directoryPath}`,new bare.createInstance(any,null,exception,stackTrace));
            }
        }
    }
}

export namespace PackageDescription {
    export type Constructors = 'PackageDescription';
    export type Interface = Omit<PackageDescription, Constructors>;
}
@DartClass
export class PackageDescription {
    id : string;

    sdk : any;

    options : any;

    constructor(id : string,sdk : any,options : any) {
    }
    @defaultConstructor
    PackageDescription(id : string,sdk : any,options : any) {
        this.id = id;
        this.sdk = sdk;
        this.options = options;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hashCode : number = 0;
        for(let value of this.options.signature) {
            hashCode = JenkinsSmiHash.combine(hashCode,value);
        }
        hashCode = JenkinsSmiHash.combine(hashCode,new core.DartString(this.id).hashCode);
        hashCode = JenkinsSmiHash.combine(hashCode,this.sdk.hashCode);
        return JenkinsSmiHash.finish(hashCode);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, PackageDescription) && op(Op.EQUALS,other.sdk,this.sdk) && AnalysisOptions.signaturesEqual(other.options.signature,this.options.signature) && other.id == this.id;
    }
}

export namespace PackageManager {
    export type Constructors = 'PackageManager';
    export type Interface = Omit<PackageManager, Constructors>;
}
@DartClass
export class PackageManager {
    resourceProvider : any;

    contextMap : core.DartMap<PackageDescription,any>;

    constructor(resourceProvider : any) {
    }
    @defaultConstructor
    PackageManager(resourceProvider : any) {
        this.contextMap = new core.DartHashMap<PackageDescription,any>();
        this.resourceProvider = resourceProvider;
    }
    getContext(packagePath : string,packages : any,resolver : any,options : any) : any {
        let sdk : any = resolver.dartSdk;
        let packageMap : core.DartMap<string,core.DartList<any>> = new bare.createInstance(any,null,this.resourceProvider,null,null).convertPackagesToMap(packages);
        let description : PackageDescription = new PackageDescription(this._buildId(packagePath,packageMap),sdk,options);
        return this.contextMap.putIfAbsent(description,() =>  {
            let context : any = AnalysisEngine.instance.createAnalysisContext();
            context.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal<any>(resolver,new bare.createInstance(any,null,this.resourceProvider,packageMap),new bare.createInstance(any,null,this.resourceProvider)),packages,this.resourceProvider);
            context.analysisOptions = options;
            return context;
        });
    }
    _buildId(packagePath : string,packageMap : core.DartMap<string,core.DartList<any>>) : string {
        let finder : DependencyFinder = new DependencyFinder(this.resourceProvider);
        let dependencies : core.DartList<string> = finder.transitiveDependenciesFor(packageMap,packagePath);
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write(packagePath);
        for(let dependency of dependencies) {
            buffer.write(';');
            buffer.write(dependency);
        }
        return buffer.toString();
    }
}

export class properties {
}
