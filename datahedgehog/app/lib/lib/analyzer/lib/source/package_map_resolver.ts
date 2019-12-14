/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/source/package_map_resolver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "@dart2ts.packages/path/lib/src/context";
import * as lib5 from "@dart2ts.packages/path/lib/path";

export namespace PackageMapUriResolver {
    export type Constructors = 'PackageMapUriResolver';
    export type Interface = Omit<PackageMapUriResolver, Constructors>;
}
@DartClass
export class PackageMapUriResolver extends any {
    private static __$PACKAGE_SCHEME : string;
    static get PACKAGE_SCHEME() : string { 
        if (this.__$PACKAGE_SCHEME===undefined) {
            this.__$PACKAGE_SCHEME = "package";
        }
        return this.__$PACKAGE_SCHEME;
    }

    packageMap : core.DartMap<string,core.DartList<any>>;

    resourceProvider : any;

    constructor(resourceProvider : any,packageMap : core.DartMap<string,core.DartList<any>>) {
    }
    @defaultConstructor
    PackageMapUriResolver(resourceProvider : any,packageMap : core.DartMap<string,core.DartList<any>>) {
        this.resourceProvider = resourceProvider;
        this.packageMap = packageMap;
        null /*topLevl*/.notNull(this.resourceProvider);
        null /*topLevl*/.notNull(this.packageMap);
        this.packageMap.forEach((name : any,folders : any) =>  {
            if (folders.length != 1) {
                throw new core.ArgumentError('Exactly one folder must be specified for a package.' + `Found ${name} = ${folders}`);
            }
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        if (!PackageMapUriResolver.isPackageUri(uri)) {
            return null;
        }
        let path : string = uri.path;
        let index : number = new core.DartString(path).indexOf('/');
        if (index == -1 || index == 0) {
            return null;
        }
        let pkgName : string = new core.DartString(path).substring(0,index);
        let relPath : string = new core.DartString(path).substring(index + 1);
        let packageDirs : core.DartList<any> = this.packageMap.get(pkgName);
        if (packageDirs != null) {
            let packageDir : any = packageDirs.single;
            let file : any = packageDir.getChildAssumingFile(relPath);
            return file.createSource(uri);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreAbsolute(source : any) : lib3.Uri {
        let sourcePath : string = source.fullName;
        let pathContext : lib4.Context = this.resourceProvider.pathContext;
        for(let pkgName of this.packageMap.keys) {
            let pkgFolder : any = this.packageMap.get(pkgName)[0];
            let pkgFolderPath : string = pkgFolder.path;
            if (new core.DartString(sourcePath).startsWith(pkgFolderPath + pathContext.separator)) {
                let relPath : string = new core.DartString(sourcePath).substring(new core.DartString(pkgFolderPath).length + 1);
                let relPathComponents : core.DartList<string> = pathContext.split(relPath);
                let relUriPath : string = lib5.properties.posix.joinAll(relPathComponents);
                return lib3.Uri.parse(`${PackageMapUriResolver.PACKAGE_SCHEME}:${pkgName}/${relUriPath}`);
            }
        }
        return null;
    }
    static isPackageUri(uri : lib3.Uri) : boolean {
        return uri.scheme == PackageMapUriResolver.PACKAGE_SCHEME;
    }
}

export class properties {
}
