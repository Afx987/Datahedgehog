/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/gn.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "@dart2ts.packages/path/lib/src/context";

export namespace GnWorkspace {
    export type Constructors = '_';
    export type Interface = Omit<GnWorkspace, Constructors>;
}
@DartClass
export class GnWorkspace extends any {
    private static __$_jiriRootName : string;
    static get _jiriRootName() : string { 
        if (this.__$_jiriRootName===undefined) {
            this.__$_jiriRootName = '.jiri_root';
        }
        return this.__$_jiriRootName;
    }

    provider : any;

    root : string;

    _packagesFilePaths : core.DartList<string>;

    _packageMap : core.DartMap<string,core.DartList<any>>;

    _packages : any;

    @namedConstructor
    _(provider : any,root : string,_packagesFilePaths : core.DartList<string>) {
        this.provider = provider;
        this.root = root;
        this._packagesFilePaths = _packagesFilePaths;
    }
    static _ : new(provider : any,root : string,_packagesFilePaths : core.DartList<string>) => GnWorkspace;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packageMap() : core.DartMap<string,core.DartList<any>> {
        return this._packageMap = ( this._packageMap ) || ( this._convertPackagesToMap(this.packages) );
    }
    get packages() : any {
        return this._packages = ( this._packages ) || ( this._createPackages() );
    }
    _convertPackagesToMap(packages : any) : core.DartMap<string,core.DartList<any>> {
        let folderMap : core.DartMap<string,core.DartList<any>> = new core.DartHashMap<string,core.DartList<any>>();
        if (packages != null && packages != Packages.noPackages) {
            packages.asMap().forEach((packageName : string,uri : lib4.Uri) =>  {
                let path : string = this.provider.pathContext.fromUri(uri);
                op(Op.INDEX_ASSIGN,folderMap,packageName,new core.DartList.literal(this.provider.getFolder(path)));
            });
        }
        return folderMap;
    }
    _createPackages() : any {
        let map : core.DartMap<string,lib4.Uri> = this._packagesFilePaths.map((path : string) =>  {
            let configFile : any = this.provider.getFile(path);
            let bytes : core.DartList<number> = configFile.readAsBytesSync();
            return parse(bytes,configFile.toUri());
        }).reduce((mapOne : any,mapTwo : any) =>  {
            mapOne.addAll(mapTwo);
            return mapOne;
        });
        this._resolveSymbolicLinks(map);
        return new bare.createInstance(any,null,map);
    }
    _resolveSymbolicLink(folder : any) : string {
        try {
            return folder.resolveSymbolicLinksSync().path;
        } catch (__error__) {

            if (is(__error__,any)){
                return folder.path;
            }
        }
    }
    _resolveSymbolicLinks(map : core.DartMap<string,lib4.Uri>) : void {
        let pathContext : lib5.Context = this.provider.pathContext;
        for(let packageName of map.keys) {
            let folder : any = this.provider.getFolder(pathContext.fromUri(map.get(packageName)));
            let folderPath : string = this._resolveSymbolicLink(folder);
            let uriPath : string = pathContext.join(folderPath,'.');
            map.set(packageName,pathContext.toUri(uriPath));
        }
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
    findFile(absolutePath : string) : any {
        try {
            let writableFile : any = this.provider.getFile(absolutePath);
            if (writableFile.exists) {
                return writableFile;
            }
        } catch (__error__) {

            {
                let _ = __error__;
            }
        }
        return null;
    }
    static _findPackagesFile(provider : any,root : string,path : string,_namedArguments? : {forHost? : any}) : core.DartList<string> {
        let {forHost} = Object.assign({
            "forHost" : false}, _namedArguments );
        let pathContext : lib5.Context = provider.pathContext;
        let sourceDirectory : string = pathContext.relative(path,{
            from : root});
        let outDirectory : any = provider.getFolder(pathContext.join(root,'out'));
        if (!outDirectory.exists) {
            return new core.DartList.literal<string>();
        }
        outDirectory = outDirectory.getChildren().where((resource : any) =>  {
            return is(resource, any);
        }).map((resource : any) =>  {
            return resource as any;
        }).firstWhere((folder : any) =>  {
            let baseName : string = pathContext.basename(folder.path);
            return new core.DartString(baseName).startsWith('debug') || new core.DartString(baseName).startsWith('release');
        },{
            orElse : () =>  {
                return null;
            }});
        if (op(Op.EQUALS,outDirectory,null)) {
            return new core.DartList.literal<string>();
        }
        if (forHost) {
            outDirectory = outDirectory.getChildren().where((resource : any) =>  {
                return is(resource, any);
            }).map((resource : any) =>  {
                return resource as any;
            }).firstWhere((folder : any) =>  {
                return new core.DartString(pathContext.basename(folder.path)).startsWith('host');
            },{
                orElse : () =>  {
                    return null;
                }});
        }
        if (op(Op.EQUALS,outDirectory,null)) {
            return new core.DartList.literal<string>();
        }
        let genDir : any = outDirectory.getChildAssumingFolder(pathContext.join('gen',sourceDirectory));
        if (!genDir.exists) {
            return new core.DartList.literal<string>();
        }
        return genDir.getChildren().where((resource : any) =>  {
            return is(resource, any);
        }).map((resource : any) =>  {
            return resource as any;
        }).where((file : any) =>  {
            return pathContext.extension(file.path) == '.packages';
        }).map((file : any) =>  {
            return file.path;
        }).toList();
    }
    static find(provider : any,path : string) : GnWorkspace {
        let context : lib5.Context = provider.pathContext;
        if (!context.isAbsolute(path)) {
            throw new core.ArgumentError(`Not an absolute path: ${path}`);
        }
        path = context.normalize(path);
        let folder : any = provider.getFolder(path);
        while (true){
            let parent : any = folder.parent;
            if (op(Op.EQUALS,parent,null)) {
                return null;
            }
            if (folder.getChildAssumingFolder(GnWorkspace._jiriRootName).exists) {
                let root : string = folder.path;
                let packagesFiles : core.DartList<string> = GnWorkspace._findPackagesFile(provider,root,path,{
                    forHost : false});
                if (packagesFiles.isEmpty) {
                    packagesFiles = GnWorkspace._findPackagesFile(provider,root,path,{
                        forHost : true});
                }
                if (packagesFiles.isEmpty) {
                    return null;
                }
                return new GnWorkspace._(provider,path,packagesFiles);
            }
            folder = parent;
        }
    }
}

export class properties {
}
