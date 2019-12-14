/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/incremental/file_state.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as typed_data from "@dart2ts/dart/typed_data";

export namespace FileState {
    export type Constructors = '_';
    export type Interface = Omit<FileState, Constructors>;
}
@DartClass
export class FileState {
    _fsState : FileSystemState;

    uri : lib3.Uri;

    fileUri : lib3.Uri;

    _exists : boolean;

    _content : core.DartList<number>;

    _contentHash : core.DartList<number>;

    _exports : core.DartList<NamespaceExport>;

    _importedLibraries : core.DartList<FileState>;

    _exportedLibraries : core.DartList<FileState>;

    _partFiles : core.DartList<FileState>;

    _directReferencedFiles : core.DartSet<FileState>;

    _directReferencedLibraries : core.DartList<FileState>;

    @namedConstructor
    _(_fsState : FileSystemState,uri : lib3.Uri,fileUri : lib3.Uri) {
        this._directReferencedFiles = new core.DartSet<FileState>();
        this._directReferencedLibraries = new core.DartList.literal<FileState>();
        this._fsState = _fsState;
        this.uri = uri;
        this.fileUri = fileUri;
    }
    static _ : new(_fsState : FileSystemState,uri : lib3.Uri,fileUri : lib3.Uri) => FileState;

    get content() : core.DartList<number> {
        return this._content;
    }
    get contentHash() : core.DartList<number> {
        return this._contentHash;
    }
    get directReferencedLibraries() : core.DartList<FileState> {
        return this._directReferencedLibraries;
    }
    get exists() : boolean {
        return this._exists;
    }
    get exportedLibraries() : core.DartList<FileState> {
        return this._exportedLibraries;
    }
    get exports() : core.DartList<NamespaceExport> {
        return this._exports;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.uri.hashCode;
    }
    get importedLibraries() : core.DartList<FileState> {
        return this._importedLibraries;
    }
    get partFiles() : core.DartList<FileState> {
        return this._partFiles;
    }
    get topologicalOrder() : core.DartList<LibraryCycle> {
        let libraryWalker = new _LibraryWalker();
        libraryWalker.walk(libraryWalker.getNode(this));
        return libraryWalker.topologicallySortedCycles;
    }
    get transitiveFiles() : core.DartSet<FileState> {
        let transitiveFiles = new core.DartSet<FileState>();
        var appendReferenced : (file : FileState) => void = (file : FileState) : void =>  {
            if (transitiveFiles.add(file)) {
                file._directReferencedFiles.forEach(appendReferenced);
            }
        };
        appendReferenced(this);
        return transitiveFiles;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, FileState) && op(Op.EQUALS,other.uri,this.uri);
    }
    refresh() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                let entry : any = this._fsState.fileSystem.entityForUri(this.fileUri);
                this._content = await entry.readAsBytes();
                this._exists = true;
            } catch (__error__) {

                {
                    let _ = __error__;
                    this._content = new typed_data.Uint8List(0);
                    this._exists = false;
                }
            }
            this._contentHash = md5.convert(this._content).bytes;
            let scannerResults : any = this._scan();
            let listener = new _DirectiveListenerWithNative();
            new bare.createInstance(any,null,listener).parseUnit(scannerResults.tokens);
            this._importedLibraries = new core.DartList.literal<FileState>();
            this._exportedLibraries = new core.DartList.literal<FileState>();
            this._partFiles = new core.DartList.literal<FileState>();
            this._exports = new core.DartList.literal<NamespaceExport>();
            {
                let coreFile : FileState = await this._getFileForRelativeUri('dart:core');
                if (coreFile != null) {
                    this._importedLibraries.add(coreFile);
                }
            }
            for(let import_ of listener.imports) {
                let file : FileState = await this._getFileForRelativeUri(import_.uri);
                if (file != null) {
                    this._importedLibraries.add(file);
                }
            }
            await this._addVmTargetImportsForCore();
            for(let export_ of listener.exports) {
                let file : FileState = await this._getFileForRelativeUri(export_.uri);
                if (file != null) {
                    this._exportedLibraries.add(file);
                    this._exports.add(new NamespaceExport(file,export_.combinators));
                }
            }
            for(let uri of listener.parts) {
                let file : FileState = await this._getFileForRelativeUri(uri);
                if (file != null) {
                    this._partFiles.add(file);
                }
            }
            this._directReferencedFiles = ((_) : core.DartSet<FileState> =>  {
                {
                    _.addAll(this._importedLibraries);
                    _.addAll(this._exportedLibraries);
                    _.addAll(this._partFiles);
                    return _;
                }
            })(new core.DartSet<FileState>());
            this._directReferencedLibraries = (((_) : core.DartSet<FileState> =>  {
                {
                    _.addAll(this._importedLibraries);
                    _.addAll(this._exportedLibraries);
                    return _;
                }
            })(new core.DartSet<FileState>())).toList();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (this.uri.scheme == 'file') return this.uri.path;
        return this.uri.toString();
    }
    _addVmTargetImportsForCore() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.uri.toString() != 'dart:core') return;
            for(let uri of new bare.createInstance(any,null,null).extraRequiredLibraries) {
                let file : FileState = await this._getFileForRelativeUri(uri);
                if (file != null) {
                    this._importedLibraries.add(file);
                }
            }
        } )());
    }

    _getFileForRelativeUri(relativeUri : string) : async.Future<FileState> { 
        return new async.Future.fromPromise(( async () =>  {
            if (new core.DartString(relativeUri).isEmpty) return null;
            let absoluteUri : lib3.Uri;
            try {
                absoluteUri = resolveRelativeUri(this.uri,lib3.Uri.parse(relativeUri));
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                    return null;
                }
            }
            return await this._fsState.getFile(absoluteUri);
        } )());
    }

    _scan() : any {
        let zeroTerminatedBytes = new typed_data.Uint8List(this._content.length + 1);
        zeroTerminatedBytes.setRange(0,this._content.length,this._content);
        return scan(zeroTerminatedBytes);
    }
}

export namespace FileSystemState {
    export type Constructors = 'FileSystemState';
    export type Interface = Omit<FileSystemState, Constructors>;
}
@DartClass
export class FileSystemState {
    fileSystem : any;

    uriTranslator : any;

    _fileSystemView : _FileSystemView;

    _uriToFile : core.DartMap<lib3.Uri,FileState>;

    _fileUriToFile : core.DartMap<lib3.Uri,FileState>;

    constructor(fileSystem : any,uriTranslator : any) {
    }
    @defaultConstructor
    FileSystemState(fileSystem : any,uriTranslator : any) {
        this._uriToFile = new core.DartMap.literal([
        ]);
        this._fileUriToFile = new core.DartMap.literal([
        ]);
        this.fileSystem = fileSystem;
        this.uriTranslator = uriTranslator;
    }
    get fileSystemView() : any {
        return this._fileSystemView = ( this._fileSystemView ) || ( new _FileSystemView(this) );
    }
    getFile(absoluteUri : lib3.Uri) : async.Future<FileState> { 
        return new async.Future.fromPromise(( async () =>  {
            let fileUri : lib3.Uri;
            if (absoluteUri.isScheme('file')) {
                fileUri = absoluteUri;
            }else {
                fileUri = this.uriTranslator.translate(absoluteUri);
                if (op(Op.EQUALS,fileUri,null)) return null;
            }
            let file : FileState = this._uriToFile.get(absoluteUri);
            if (op(Op.EQUALS,file,null)) {
                file = new FileState._(this,absoluteUri,fileUri);
                this._uriToFile.set(absoluteUri,file);
                this._fileUriToFile.set(fileUri,file);
                await file.refresh();
            }
            return file;
        } )());
    }

}

export namespace LibraryCycle {
    export type Constructors = 'LibraryCycle';
    export type Interface = Omit<LibraryCycle, Constructors>;
}
@DartClass
export class LibraryCycle {
    libraries : core.DartList<FileState>;

    get _isForVm() : boolean {
        return this.libraries.any((l : any) =>  {
            return new core.DartString(l.uri.toString()).endsWith('dart:_vmservice');
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (this._isForVm) {
            return '[core + vm]';
        }
        return '[' + this.libraries.join(', ') + ']';
    }
    constructor() {
    }
    @defaultConstructor
    LibraryCycle() {
        this.libraries = new core.DartList.literal<FileState>();
    }
}

export namespace NamespaceExport {
    export type Constructors = 'NamespaceExport';
    export type Interface = Omit<NamespaceExport, Constructors>;
}
@DartClass
export class NamespaceExport {
    library : FileState;

    combinators : core.DartList<any>;

    constructor(library : FileState,combinators : core.DartList<any>) {
    }
    @defaultConstructor
    NamespaceExport(library : FileState,combinators : core.DartList<any>) {
        this.library = library;
        this.combinators = combinators;
    }
    isExposed(name : string) : boolean {
        for(let combinator of this.combinators) {
            if (combinator.isShow) {
                if (!combinator.names.contains(name)) {
                    return false;
                }
            }else {
                if (combinator.names.contains(name)) {
                    return false;
                }
            }
        }
        return true;
    }
}

export namespace _DirectiveListenerWithNative {
    export type Constructors = '_DirectiveListenerWithNative';
    export type Interface = Omit<_DirectiveListenerWithNative, Constructors>;
}
@DartClass
export class _DirectiveListenerWithNative extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleNativeClause(token : any) : any {
        return skipNativeClause(token);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DirectiveListenerWithNative() {
    }
}

export namespace _FileSystemView {
    export type Constructors = '_FileSystemView';
    export type Interface = Omit<_FileSystemView, Constructors>;
}
@DartClass
@Implements(any)
export class _FileSystemView implements any.Interface {
    fsState : FileSystemState;

    constructor(fsState : FileSystemState) {
    }
    @defaultConstructor
    _FileSystemView(fsState : FileSystemState) {
        this.fsState = fsState;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    entityForUri(uri : lib3.Uri) : any {
        let file : FileState = this.fsState._fileUriToFile.get(uri);
        return new _FileSystemViewEntry(uri,file);
    }
}

export namespace _FileSystemViewEntry {
    export type Constructors = '_FileSystemViewEntry';
    export type Interface = Omit<_FileSystemViewEntry, Constructors>;
}
@DartClass
@Implements(any)
export class _FileSystemViewEntry implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uri : lib3.Uri;

    file : FileState;

    constructor(uri : lib3.Uri,file : FileState) {
    }
    @defaultConstructor
    _FileSystemViewEntry(uri : lib3.Uri,file : FileState) {
        this.uri = uri;
        this.file = file;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exists() : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            return this._shouldNotBeQueried();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lastModified() : async.Future<core.DartDateTime> { 
        return new async.Future.fromPromise(( async () =>  {
            return this._shouldNotBeQueried();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    readAsBytes() : async.Future<core.DartList<number>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (op(Op.EQUALS,this.file,null)) {
                throw new bare.createInstance(any,null,this.uri,`File ${this.uri} does not exist.`);
            }
            return this.file.content;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    readAsString() : async.Future<string> { 
        return new async.Future.fromPromise(( async () =>  {
            return this._shouldNotBeQueried();
        } )());
    }

    _shouldNotBeQueried() : any {
        throw new core.StateError('The method should not be invoked.');
    }
}

export namespace _LibraryNode {
    export type Constructors = '_LibraryNode';
    export type Interface = Omit<_LibraryNode, Constructors>;
}
@DartClass
export class _LibraryNode extends any {
    walker : _LibraryWalker;

    file : FileState;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isEvaluated : boolean;

    constructor(walker : _LibraryWalker,file : FileState) {
    }
    @defaultConstructor
    _LibraryNode(walker : _LibraryWalker,file : FileState) {
        this.isEvaluated = false;
        this.walker = walker;
        this.file = file;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : core.DartList<_LibraryNode> {
        return this.file.directReferencedLibraries.map(this.walker.getNode.bind(this.walker)).toList();
    }
}

export namespace _LibraryWalker {
    export type Constructors = '_LibraryWalker';
    export type Interface = Omit<_LibraryWalker, Constructors>;
}
@DartClass
export class _LibraryWalker extends any {
    nodesOfFiles;

    topologicallySortedCycles;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluate(v : _LibraryNode) : void {
        this.evaluateScc(new core.DartList.literal(v));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluateScc(scc : core.DartList<_LibraryNode>) : void {
        let cycle = new LibraryCycle();
        for(let node of scc) {
            node.isEvaluated = true;
            cycle.libraries.add(node.file);
        }
        this.topologicallySortedCycles.add(cycle);
    }
    getNode(file : FileState) : _LibraryNode {
        return this.nodesOfFiles.putIfAbsent(file,() =>  {
            return new _LibraryNode(this,file);
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _LibraryWalker() {
        this.nodesOfFiles = new core.DartMap.literal([
        ]);
        this.topologicallySortedCycles = new core.DartList.literal<LibraryCycle>();
    }
}

export class properties {
}
