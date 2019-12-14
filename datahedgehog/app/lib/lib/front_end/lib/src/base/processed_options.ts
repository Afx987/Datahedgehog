/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/processed_options.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace ProcessedOptions {
    export type Constructors = 'ProcessedOptions';
    export type Interface = Omit<ProcessedOptions, Constructors>;
}
@DartClass
export class ProcessedOptions {
    _raw : any;

    _packages : core.DartMap<string,lib3.Uri>;

    _uriTranslator : any;

    _sdkSummaryProgram : any;

    _inputSummariesPrograms : core.DartList<any>;

    _sdkRoot : lib3.Uri;

    get sdkRoot() : lib3.Uri {
        return this._sdkRoot = ( this._sdkRoot ) || ( this._normalizeSdkRoot() );
    }
    constructor(rawOptions : any) {
    }
    @defaultConstructor
    ProcessedOptions(rawOptions : any) {
        this._raw = rawOptions;
    }
    get logger() : any {
        return this._raw.logger;
    }
    get byteStore() : any {
        return this._raw.byteStore;
    }
    validateOptions() : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            let fs = this._raw.fileSystem;
            let root = this._raw.sdkRoot;
            var _report : (msg : string) => boolean = (msg : string) : boolean =>  {
                this._raw.onError(new bare.createInstance(any,null,msg));
                return false;
            };
            if (root != null && !await fs.entityForUri(root).exists()) {
                return _report(`SDK root directory not found: ${this._raw.sdkRoot}`);
            }
            let summary = this._raw.sdkSummary;
            if (summary != null && !await fs.entityForUri(summary).exists()) {
                return _report(`SDK summary not found: ${this._raw.sdkSummary}`);
            }
            return true;
        } )());
    }

    get compileSdk() : boolean {
        return this._raw.compileSdk;
    }
    get fileSystem() : any {
        /* TODO (AssertStatementImpl) : assert (_raw.multiRoots.isEmpty); */;
        return this._raw.fileSystem;
    }
    get strongMode() : boolean {
        return this._raw.strongMode;
    }
    get sdkSummaryProgram() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (op(Op.EQUALS,this._sdkSummaryProgram,null)) {
                if (op(Op.EQUALS,this._raw.sdkSummary,null)) return null;
                this._sdkSummaryProgram = await this._loadProgram(this._raw.sdkSummary);
            }
            return this._sdkSummaryProgram;
        } )());
    }

    get inputSummariesPrograms() : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this._inputSummariesPrograms == null) {
                let uris = this._raw.inputSummaries;
                if (op(Op.EQUALS,uris,null) || uris.isEmpty) return new core.DartList.literal<any>();
                this._inputSummariesPrograms = await async.Future.wait(uris.map(this._loadProgram.bind(this)));
            }
            return this._inputSummariesPrograms;
        } )());
    }

    _loadProgram(uri : lib3.Uri) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let bytes = await this.fileSystem.entityForUri(uri).readAsBytes();
            return ((_) : any =>  {
                {
                    unbindCanonicalNames();
                    return _;
                }
            })(loadProgramFromBytes(bytes));
        } )());
    }

    getUriTranslator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (op(Op.EQUALS,this._uriTranslator,null)) {
                await this._getPackages();
                this._uriTranslator = new bare.createInstance(any,null,this._packages,this._raw.dartLibraries);
                this._uriTranslator.dartLibraries.addAll(this._raw.dartLibraries);
            }
            return this._uriTranslator;
        } )());
    }

    _getPackages() : async.Future<core.DartMap<string,lib3.Uri>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this._packages == null) {
                if (op(Op.EQUALS,this._raw.packagesFileUri,null)) {
                    throw new core.UnimplementedError();
                }else if (this._raw.packagesFileUri.path.isEmpty) {
                    this._packages = new core.DartMap.literal([
                    ]);
                }else {
                    let contents = await this.fileSystem.entityForUri(this._raw.packagesFileUri).readAsBytes();
                    this._packages = null /*topLevl*/.parse(contents,this._raw.packagesFileUri);
                }
            }
            return this._packages;
        } )());
    }

    _normalizeSdkRoot() : lib3.Uri {
        /* TODO (AssertStatementImpl) : assert (_raw.sdkSummary == null); */;
        if (op(Op.EQUALS,this._raw.sdkRoot,null)) {
            throw new core.UnimplementedError();
        }
        let root = this._raw.sdkRoot;
        if (!root.path.endsWith('/')) {
            root = root.replace({
                path : this._sdkRoot.path + '/'});
        }
        return root;
    }
}

export class properties {
}
