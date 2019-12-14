/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/bazel.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "@dart2ts.packages/path/lib/src/context";
import * as collection from "@dart2ts/dart/core";

export namespace BazelFileUriResolver {
    export type Constructors = 'BazelFileUriResolver';
    export type Interface = Omit<BazelFileUriResolver, Constructors>;
}
@DartClass
export class BazelFileUriResolver extends any {
    workspace : BazelWorkspace;

    constructor(workspace : BazelWorkspace) {
    }
    @defaultConstructor
    BazelFileUriResolver(workspace : BazelWorkspace) {
        this.workspace = workspace;
        super.DartObject(workspace.provider);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        if (!ResourceUriResolver.isFileUri(uri)) {
            return null;
        }
        let path : string = provider.pathContext.fromUri(uri);
        let file : any = this.workspace.findFile(path);
        if (file != null) {
            return file.createSource((actualUri || uri));
        }
        return null;
    }
}

export namespace BazelPackageUriResolver {
    export type Constructors = 'BazelPackageUriResolver';
    export type Interface = Omit<BazelPackageUriResolver, Constructors>;
}
@DartClass
export class BazelPackageUriResolver extends any {
    _workspace : BazelWorkspace;

    _context : lib4.Context;

    _sourceCache : core.DartMap<lib3.Uri,any>;

    constructor(workspace : BazelWorkspace) {
    }
    @defaultConstructor
    BazelPackageUriResolver(workspace : BazelWorkspace) {
        this._sourceCache = new core.DartHashMap<lib3.Uri,any>();
        this._workspace = workspace;
        this._context = workspace.provider.pathContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        return this._sourceCache.putIfAbsent(uri,() =>  {
            if (uri.scheme != 'package') {
                return null;
            }
            let uriPath : string = uri.path;
            let slash : number = new core.DartString(uriPath).indexOf('/');
            if (slash < 1) {
                return null;
            }
            let packageName : string = new core.DartString(uriPath).substring(0,slash);
            let fileUriPart : string = new core.DartString(uriPath).substring(slash + 1);
            let filePath : string = new core.DartString(fileUriPart).replaceAll('/',this._context.separator);
            if (new core.DartString(packageName).indexOf('.') == -1) {
                let path : string = this._context.join(this._workspace.root,'third_party','dart',packageName,'lib',filePath);
                let file : any = this._workspace.findFile(path);
                return ((_256_)=>(!!_256_)?_256_.createSource(uri):null)(file);
            }else {
                let packagePath : string = new core.DartString(packageName).replaceAll('.',this._context.separator);
                let path : string = this._context.join(this._workspace.root,packagePath,'lib',filePath);
                let file : any = this._workspace.findFile(path);
                return ((_257_)=>(!!_257_)?_257_.createSource(uri):null)(file);
            }
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreAbsolute(source : any) : lib3.Uri {
        let context : lib4.Context = this._workspace.provider.pathContext;
        let path : string = source.fullName;
        var restore : (root : string,path : string) => lib3.Uri = (root : string,path : string) : lib3.Uri =>  {
            if (root != null && context.isWithin(root,path)) {
                let relative : string = context.relative(path,{
                    from : root});
                let components : core.DartList<string> = context.split(relative);
                if (components.length > 4 && components[0] == 'third_party' && components[1] == 'dart' && components[3] == 'lib') {
                    let packageName : string = components[2];
                    let pathInLib : string = components.skip(4).join('/');
                    return lib3.Uri.parse(`package:${packageName}/${pathInLib}`);
                }else {
                    for(let i : number = 2; i < components.length - 1; i++){
                        let component : string = components[i];
                        if (component == 'lib') {
                            let packageName : string = components.getRange(0,i).join('.');
                            let pathInLib : string = components.skip(i + 1).join('/');
                            return lib3.Uri.parse(`package:${packageName}/${pathInLib}`);
                        }
                    }
                }
            }
            return null;
        };
        for(let root of new core.DartList.literal(this._workspace.bin,this._workspace.genfiles,this._workspace.readonly,this._workspace.root)) {
            let uri : lib3.Uri = restore(root,path);
            if (uri != null) {
                return uri;
            }
        }
        return null;
    }
}

export namespace BazelWorkspace {
    export type Constructors = '_';
    export type Interface = Omit<BazelWorkspace, Constructors>;
}
@DartClass
export class BazelWorkspace extends any {
    private static __$_WORKSPACE : string;
    static get _WORKSPACE() : string { 
        if (this.__$_WORKSPACE===undefined) {
            this.__$_WORKSPACE = 'WORKSPACE';
        }
        return this.__$_WORKSPACE;
    }

    private static __$_READONLY : string;
    static get _READONLY() : string { 
        if (this.__$_READONLY===undefined) {
            this.__$_READONLY = 'READONLY';
        }
        return this.__$_READONLY;
    }

    private static __$defaultSymlinkPrefix;
    static get defaultSymlinkPrefix() { 
        if (this.__$defaultSymlinkPrefix===undefined) {
            this.__$defaultSymlinkPrefix = 'bazel';
        }
        return this.__$defaultSymlinkPrefix;
    }

    provider : any;

    root : string;

    readonly : string;

    bin : string;

    genfiles : string;

    @namedConstructor
    _(provider : any,root : string,readonly : string,bin : string,genfiles : string) {
        this.provider = provider;
        this.root = root;
        this.readonly = readonly;
        this.bin = bin;
        this.genfiles = genfiles;
    }
    static _ : new(provider : any,root : string,readonly : string,bin : string,genfiles : string) => BazelWorkspace;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packageMap() : core.DartMap<string,core.DartList<any>> {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packageUriResolver() : any {
        return new BazelPackageUriResolver(this);
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
        resolvers.add(new BazelFileUriResolver(this));
        return new bare.createInstance(any,null,resolvers,null,this.provider);
    }
    findFile(absolutePath : string) : any {
        let context : lib4.Context = this.provider.pathContext;
        try {
            let relative : string = context.relative(absolutePath,{
                from : this.root});
            if (this.genfiles != null) {
                let file : any = this.provider.getFile(context.join(this.genfiles,relative));
                if (file.exists) {
                    return file;
                }
            }
            if (this.bin != null) {
                let file : any = this.provider.getFile(context.join(this.bin,relative));
                if (file.exists) {
                    return file;
                }
            }
            let writableFile : any = this.provider.getFile(absolutePath);
            if (writableFile.exists) {
                return writableFile;
            }
            if (this.readonly != null) {
                let file : any = this.provider.getFile(context.join(this.readonly,relative));
                if (file.exists) {
                    return file;
                }
            }
            return writableFile;
        } catch (__error__) {

            {
                let _ = __error__;
                return null;
            }
        }
    }
    static find(provider : any,path : string) : BazelWorkspace {
        let context : lib4.Context = provider.pathContext;
        if (!context.isAbsolute(path)) {
            throw new core.ArgumentError(`not absolute: ${path}`);
        }
        path = context.normalize(path);
        let folder : any = provider.getFolder(path);
        while (true){
            let parent : any = folder.parent;
            if (op(Op.EQUALS,parent,null)) {
                return null;
            }
            let readonlyFolder : any = parent.getChildAssumingFolder(BazelWorkspace._READONLY);
            if (readonlyFolder.exists) {
                let root : string = folder.path;
                let readonlyRoot : string = context.join(readonlyFolder.path,folder.shortName);
                if (provider.getFolder(readonlyRoot).exists) {
                    let symlinkPrefix : string = BazelWorkspace._findSymlinkPrefix(provider,root);
                    if (symlinkPrefix != null) {
                        return new BazelWorkspace._(provider,root,readonlyRoot,context.join(root,`${symlinkPrefix}-bin`),context.join(root,`${symlinkPrefix}-genfiles`));
                    }
                }
            }
            if (folder.getChildAssumingFile(BazelWorkspace._WORKSPACE).exists) {
                let root : string = folder.path;
                let symlinkPrefix : string = BazelWorkspace._findSymlinkPrefix(provider,root);
                if (symlinkPrefix == null) {
                    return null;
                }
                return new BazelWorkspace._(provider,root,null,context.join(root,`${symlinkPrefix}-bin`),context.join(root,`${symlinkPrefix}-genfiles`));
            }
            folder = parent;
        }
    }
    static _findSymlinkPrefix(provider : any,root : string) : string {
        let context : lib4.Context = provider.pathContext;
        if (provider.getFolder(context.join(root,'blaze-genfiles')).exists) {
            return 'blaze';
        }
        if (provider.getFolder(context.join(root,'bazel-genfiles')).exists) {
            return 'bazel';
        }
        return BazelWorkspace.defaultSymlinkPrefix;
    }
}

export class properties {
}
