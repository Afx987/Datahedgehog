/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/file_state.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as convert from "@dart2ts/dart/convert";

export namespace FileContentOverlay {
    export type Constructors = 'FileContentOverlay';
    export type Interface = Omit<FileContentOverlay, Constructors>;
}
@DartClass
export class FileContentOverlay {
    _map;

    [OperatorMethods.INDEX](path : string) : string {
        return op(Op.INDEX,this._map,path);
    }
    [OperatorMethods.INDEX_EQ](path : string,content : string) : void {
        if (content == null) {
            this._map.remove(path);
        }else {
            op(Op.INDEX_ASSIGN,this._map,path,content);
        }
    }
    constructor() {
    }
    @defaultConstructor
    FileContentOverlay() {
        this._map = new core.DartMap.literal([
        ]);
    }
}

export namespace FileState {
    export type Constructors = '_' | '_external';
    export type Interface = Omit<FileState, Constructors>;
}
@DartClass
export class FileState {
    private static __$USE_FASTA_PARSER : boolean;
    static get USE_FASTA_PARSER() : boolean { 
        if (this.__$USE_FASTA_PARSER===undefined) {
            this.__$USE_FASTA_PARSER = false;
        }
        return this.__$USE_FASTA_PARSER;
    }

    _fsState : FileSystemState;

    path : string;

    uri : lib3.Uri;

    source : any;

    isInExternalSummaries : boolean;

    _exists : boolean;

    _contentBytes : core.DartList<number>;

    _content : string;

    _contentHash : string;

    _lineInfo : any;

    _definedTopLevelNames : core.DartSet<string>;

    _definedClassMemberNames : core.DartSet<string>;

    _referencedNames : core.DartSet<string>;

    _unlinked : any;

    _apiSignature : core.DartList<number>;

    _importedFiles : core.DartList<FileState>;

    _exportedFiles : core.DartList<FileState>;

    _partedFiles : core.DartList<FileState>;

    _exportFilters : core.DartList<any>;

    _directReferencedFiles : core.DartSet<FileState>;

    _transitiveFiles : core.DartSet<FileState>;

    _transitiveSignature : string;

    _topLevelDeclarations : core.DartMap<string,any>;

    _exportedTopLevelDeclarations : core.DartMap<string,any>;

    hasErrorOrWarning : boolean;

    @namedConstructor
    _(_fsState : FileSystemState,path : string,uri : lib3.Uri,source : any) {
        this._directReferencedFiles = new core.DartSet<FileState>();
        this.hasErrorOrWarning = false;
        this.isInExternalSummaries = false;
        this._fsState = _fsState;
        this.path = path;
        this.uri = uri;
        this.source = source;
    }
    static _ : new(_fsState : FileSystemState,path : string,uri : lib3.Uri,source : any) => FileState;

    @namedConstructor
    _external(_fsState : FileSystemState,uri : lib3.Uri) {
        this._directReferencedFiles = new core.DartSet<FileState>();
        this.hasErrorOrWarning = false;
        this.isInExternalSummaries = true;
        this.path = null;
        this.source = null;
        this._fsState = _fsState;
        this.uri = uri;
        this._apiSignature = new typed_data.Uint8List(16);
    }
    static _external : new(_fsState : FileSystemState,uri : lib3.Uri) => FileState;

    get apiSignature() : core.DartList<number> {
        return this._apiSignature;
    }
    get content() : string {
        return this._content;
    }
    get contentHash() : string {
        return this._contentHash;
    }
    get definedClassMemberNames() : core.DartSet<string> {
        return this._definedClassMemberNames;
    }
    get definedTopLevelNames() : core.DartSet<string> {
        return this._definedTopLevelNames;
    }
    get directReferencedFiles() : core.DartSet<FileState> {
        return this._directReferencedFiles;
    }
    get exists() : boolean {
        return this._exists;
    }
    get exportedFiles() : core.DartList<FileState> {
        return this._exportedFiles;
    }
    get exportedTopLevelDeclarations() : core.DartMap<string,any> {
        if (this._exportedTopLevelDeclarations == null) {
            this._exportedTopLevelDeclarations = new core.DartMap.literal([
            ]);
            let seenLibraries : core.DartSet<FileState> = new core.DartSet<FileState>();
            var computeExported : (library : FileState) => core.DartMap<string,any> = (library : FileState) : core.DartMap<string,any> =>  {
                let declarations = new core.DartMap.literal([
                ]);
                if (seenLibraries.add(library)) {
                    for(let i : number = 0; i < library._exportedFiles.length; i++){
                        let exported : core.DartMap<string,any> = computeExported(library._exportedFiles[i]);
                        for(let t of exported.values) {
                            if (library._exportFilters[i].accepts(t.name)) {
                                declarations.set(t.name,t);
                            }
                        }
                    }
                    declarations.addAll(library.topLevelDeclarations);
                    for(let part of library.partedFiles) {
                        declarations.addAll(part.topLevelDeclarations);
                    }
                    seenLibraries.remove(library);
                }
                return declarations;
            };
            this._exportedTopLevelDeclarations = computeExported(this);
        }
        return this._exportedTopLevelDeclarations;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.uri.hashCode;
    }
    get importedFiles() : core.DartList<FileState> {
        return this._importedFiles;
    }
    get isPart() : boolean {
        return op(Op.EQUALS,this._unlinked.libraryNameOffset,0) && this._unlinked.isPartOf;
    }
    get library() : FileState {
        let libraries : core.DartList<FileState> = this._fsState._partToLibraries.get(this);
        if (libraries == null || libraries.isEmpty) {
            return null;
        }else {
            return libraries.first;
        }
    }
    get lineInfo() : any {
        return this._lineInfo;
    }
    get partedFiles() : core.DartList<FileState> {
        return this._partedFiles;
    }
    get referencedNames() : core.DartSet<string> {
        return this._referencedNames;
    }
    get topLevelDeclarations() : core.DartMap<string,any> {
        if (this._topLevelDeclarations == null) {
            this._topLevelDeclarations = new core.DartMap.literal([
            ]);
            var addDeclaration : (kind : any,name : string) => void = (kind : any,name : string) : void =>  {
                if (!new core.DartString(name).startsWith('_')) {
                    this._topLevelDeclarations.set(name,new bare.createInstance(any,null,kind,name));
                }
            };
            for(let type of this.unlinked.classes) {
                addDeclaration(TopLevelDeclarationKind.type,type.name);
            }
            for(let type of this.unlinked.enums) {
                addDeclaration(TopLevelDeclarationKind.type,type.name);
            }
            for(let type of this.unlinked.typedefs) {
                addDeclaration(TopLevelDeclarationKind.type,type.name);
            }
            let addedVariableNames : core.DartSet<string> = new core.DartSet<string>();
            for(let executable of this.unlinked.executables) {
                let name : string = executable.name;
                if (op(Op.EQUALS,executable.kind,UnlinkedExecutableKind.functionOrMethod)) {
                    addDeclaration(TopLevelDeclarationKind.function,name);
                }else if (op(Op.EQUALS,executable.kind,UnlinkedExecutableKind.getter) || op(Op.EQUALS,executable.kind,UnlinkedExecutableKind.setter)) {
                    if (op(Op.EQUALS,executable.kind,UnlinkedExecutableKind.setter)) {
                        name = new core.DartString(name).substring(0,new core.DartString(name).length - 1);
                    }
                    if (addedVariableNames.add(name)) {
                        addDeclaration(TopLevelDeclarationKind.variable,name);
                    }
                }
            }
            for(let variable of this.unlinked.variables) {
                let name : string = variable.name;
                if (addedVariableNames.add(name)) {
                    addDeclaration(TopLevelDeclarationKind.variable,name);
                }
            }
        }
        return this._topLevelDeclarations;
    }
    get transitiveFiles() : core.DartSet<FileState> {
        if (op(Op.EQUALS,this._transitiveFiles,null)) {
            this._transitiveFiles = new core.DartSet<FileState>();
            var appendReferenced : (file : FileState) => void = (file : FileState) : void =>  {
                if (this._transitiveFiles.add(file)) {
                    file._directReferencedFiles.forEach(appendReferenced);
                }
            };
            appendReferenced(this);
        }
        return this._transitiveFiles;
    }
    get transitiveSignature() : string {
        if (this._transitiveSignature == null) {
            let signature : any = new bare.createInstance(any,null);
            signature.addUint32List(this._fsState._salt);
            signature.addInt(this.transitiveFiles.length);
            this.transitiveFiles.map((file : any) =>  {
                return file.apiSignature;
            }).forEach(signature.addBytes);
            signature.addString(this.uri.toString());
            this._transitiveSignature = signature.toHex();
        }
        return this._transitiveSignature;
    }
    get unlinked() : any {
        return this._unlinked;
    }
    get uriStr() : string {
        return this.uri.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, FileState) && op(Op.EQUALS,other.uri,this.uri);
    }
    parse(errorListener : any) : any {
        let analysisOptions : any = this._fsState._analysisOptions;
        if (FileState.USE_FASTA_PARSER) {
            try {
                let scanResult : any = null /*topLevl*/.scan(this._contentBytes,{
                    includeComments : true,scanGenericMethodComments : analysisOptions.strongMode});
                let astBuilder = new bare.createInstance(any,null,new bare.createInstance(any,null,errorListener,this.source),null,null,new _FastaElementStoreProxy(),new bare.createInstance(any,"top",{
                    isModifiable : true}),this.uri);
                astBuilder.parseGenericMethodComments = analysisOptions.strongMode;
                let parser = new bare.createInstance(any,null,astBuilder);
                astBuilder.parser = parser;
                parser.parseUnit(scanResult.tokens);
                let unit = astBuilder.pop() as any;
                let lineInfo : any = new bare.createInstance(any,null,scanResult.lineStarts);
                unit.lineInfo = lineInfo;
                return unit;
            } catch (__error__) {

                {
                    let st : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    core.print(e);
                    core.print(st);
                    /* TODO (RethrowExpressionImpl): rethrow */;
                }
            }
        }else {
            let reader : any = new bare.createInstance(any,null,this.content);
            let scanner : any = new bare.createInstance(any,null,this.source,reader,errorListener);
            scanner.scanGenericMethodComments = analysisOptions.strongMode;
            let token : any = scanner.tokenize();
            let lineInfo : any = new bare.createInstance(any,null,scanner.lineStarts);
            let parser : any = new bare.createInstance(any,null,this.source,errorListener);
            parser.enableAssertInitializer = analysisOptions.enableAssertInitializer;
            parser.parseGenericMethodComments = analysisOptions.strongMode;
            let unit : any = parser.parseCompilationUnit(token);
            unit.lineInfo = lineInfo;
            return unit;
        }
    }
    refresh() : boolean {
        try {
            this._content = op(Op.INDEX,this._fsState._contentOverlay,this.path);
            this._content = ( this._content ) || ( this._fsState._resourceProvider.getFile(this.path).readAsStringSync() );
            this._exists = true;
        } catch (__error__) {

            {
                let _ = __error__;
                this._content = '';
                this._exists = false;
            }
        }
        if (FileState.USE_FASTA_PARSER) {
            let bytes = convert.properties.UTF8.encode(this._content);
            this._contentBytes = new typed_data.Uint8List(bytes.length + 1);
            this._contentBytes.setRange(0,bytes.length,bytes);
            this._contentBytes[this._contentBytes.length - 1] = 0;
        }
        let contentBytes : core.DartList<number> = convert.properties.UTF8.encode(this._content);
        {
            let hashBytes : core.DartList<number> = md5.convert(contentBytes).bytes;
            this._contentHash = hex.encode(hashBytes);
        }
        let unlinkedKey : string;
        {
            let signature : any = new bare.createInstance(any,null);
            signature.addUint32List(this._fsState._salt);
            signature.addInt(contentBytes.length);
            signature.addString(this._contentHash);
            unlinkedKey = `${signature.toHex()}.unlinked`;
        }
        let bytes : core.DartList<number>;
        {
            bytes = this._fsState._byteStore.get(unlinkedKey);
            if (bytes == null) {
                let unit : any = this.parse(AnalysisErrorListener.NULL_LISTENER);
                this._fsState._logger.run(`Create unlinked for ${this.path}`,() =>  {
                    let unlinkedUnit : any = serializeAstUnlinked(unit);
                    let referencedNames : core.DartList<string> = computeReferencedNames(unit).toList();
                    let definedNames : any = computeDefinedNames(unit);
                    bytes = new bare.createInstance(any,null,{
                        unit : unlinkedUnit,definedTopLevelNames : definedNames.topLevelNames.toList(),definedClassMemberNames : definedNames.classMemberNames.toList(),referencedNames : referencedNames}).toBuffer();
                    this._fsState._byteStore.put(unlinkedKey,bytes);
                });
            }
        }
        let driverUnlinkedUnit = new bare.createInstance(any,null,bytes);
        this._definedTopLevelNames = driverUnlinkedUnit.definedTopLevelNames.toSet();
        this._definedClassMemberNames = driverUnlinkedUnit.definedClassMemberNames.toSet();
        this._referencedNames = driverUnlinkedUnit.referencedNames.toSet();
        this._unlinked = driverUnlinkedUnit.unit;
        this._lineInfo = new bare.createInstance(any,null,this._unlinked.lineStarts);
        this._topLevelDeclarations = null;
        let newApiSignature : core.DartList<number> = new typed_data.Uint8List.fromList(this._unlinked.apiSignature);
        let apiSignatureChanged : boolean = this._apiSignature != null && !FileState._equalByteLists(this._apiSignature,newApiSignature);
        this._apiSignature = newApiSignature;
        if (apiSignatureChanged) {
            for(let file of this._fsState._uriToFile.values) {
                if (file._transitiveFiles != null && file._transitiveFiles.contains(this)) {
                    file._transitiveSignature = null;
                }
                file._exportedTopLevelDeclarations = null;
            }
        }
        if (this._partedFiles != null) {
            for(let part of this._partedFiles) {
                ((_60_)=>(!!_60_)?_60_.remove(this):null)(this._fsState._partToLibraries.get(part));
            }
        }
        this._importedFiles = new core.DartList.literal<FileState>();
        this._exportedFiles = new core.DartList.literal<FileState>();
        this._partedFiles = new core.DartList.literal<FileState>();
        this._exportFilters = new core.DartList.literal<any>();
        for(let import of this._unlinked.imports) {
            let uri : string = import.isImplicit ? 'dart:core' : import.uri;
            let file : FileState = this._fileForRelativeUri(uri);
            this._importedFiles.add(file);
        }
        for(let export of this._unlinked.publicNamespace.exports) {
            let uri : string = export.uri;
            let file : FileState = this._fileForRelativeUri(uri);
            this._exportedFiles.add(file);
            this._exportFilters.add(new bare.createInstance(any,null,export.combinators));
        }
        for(let uri of this._unlinked.publicNamespace.parts) {
            let file : FileState = this._fileForRelativeUri(uri);
            this._partedFiles.add(file);
            this._fsState._partToLibraries.putIfAbsent(file,() =>  {
                return new core.DartList.literal<FileState>();
            }).add(this);
        }
        let oldDirectReferencedFiles : core.DartSet<FileState> = this._directReferencedFiles;
        this._directReferencedFiles = ((_) : core.DartSet<FileState> =>  {
            {
                _.addAll(this._importedFiles);
                _.addAll(this._exportedFiles);
                _.addAll(this._partedFiles);
                return _;
            }
        })(new core.DartSet<FileState>());
        if (this._directReferencedFiles.length != oldDirectReferencedFiles.length || !this._directReferencedFiles.containsAll(oldDirectReferencedFiles)) {
            for(let file of this._fsState._uriToFile.values) {
                if (file._transitiveFiles != null && file._transitiveFiles.contains(this)) {
                    file._transitiveFiles = null;
                }
            }
        }
        return apiSignatureChanged;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.path;
    }
    _fileForRelativeUri(relativeUri : string) : FileState {
        if (new core.DartString(relativeUri).isEmpty) {
            return this._fsState.unresolvedFile;
        }
        let absoluteUri : lib3.Uri;
        try {
            absoluteUri = resolveRelativeUri(this.uri,lib3.Uri.parse(relativeUri));
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                return this._fsState.unresolvedFile;
            }
        }
        return this._fsState.getFileForUri(absoluteUri);
    }
    static _equalByteLists(a : core.DartList<number>,b : core.DartList<number>) : boolean {
        if (a == null) {
            return b == null;
        }else if (b == null) {
            return false;
        }
        if (a.length != b.length) {
            return false;
        }
        for(let i : number = 0; i < a.length; i++){
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
}

export namespace FileSystemState {
    export type Constructors = 'FileSystemState';
    export type Interface = Omit<FileSystemState, Constructors>;
}
@DartClass
export class FileSystemState {
    _logger : any;

    _resourceProvider : any;

    _byteStore : any;

    _contentOverlay : FileContentOverlay;

    _sourceFactory : any;

    _analysisOptions : any;

    _salt : typed_data.Uint32List;

    externalSummaries : any;

    _uriToFile : core.DartMap<lib3.Uri,FileState>;

    knownFilePaths : core.DartSet<string>;

    _addedKnownFiles : core.DartSet<string>;

    _knownFilesSetChangesDelay : core.DartDuration;

    _knownFilesSetChangesTimer : async.DartTimer;

    _knownFilesSetChangesController : async.DartStreamController<KnownFilesSetChange>;

    _hasUriForPath : core.DartMap<string,boolean>;

    _pathToFiles : core.DartMap<string,core.DartList<FileState>>;

    _pathToCanonicalFile : core.DartMap<string,FileState>;

    _partToLibraries : core.DartMap<FileState,core.DartList<FileState>>;

    _unresolvedFile : FileState;

    _testView : FileSystemStateTestView;

    constructor(_logger : any,_byteStore : any,_contentOverlay : FileContentOverlay,_resourceProvider : any,_sourceFactory : any,_analysisOptions : any,_salt : typed_data.Uint32List,_namedArguments? : {externalSummaries? : any}) {
    }
    @defaultConstructor
    FileSystemState(_logger : any,_byteStore : any,_contentOverlay : FileContentOverlay,_resourceProvider : any,_sourceFactory : any,_analysisOptions : any,_salt : typed_data.Uint32List,_namedArguments? : {externalSummaries? : any}) {
        let {externalSummaries} = Object.assign({
        }, _namedArguments );
        this._uriToFile = new core.DartMap.literal([
        ]);
        this.knownFilePaths = new core.DartSet<string>();
        this._addedKnownFiles = new core.DartSet<string>();
        this._knownFilesSetChangesController = new async.DartStreamController<KnownFilesSetChange>();
        this._hasUriForPath = new core.DartMap.literal([
        ]);
        this._pathToFiles = new core.DartMap.literal([
        ]);
        this._pathToCanonicalFile = new core.DartMap.literal([
        ]);
        this._partToLibraries = new core.DartMap.literal([
        ]);
        this._logger = _logger;
        this._byteStore = _byteStore;
        this._contentOverlay = _contentOverlay;
        this._resourceProvider = _resourceProvider;
        this._sourceFactory = _sourceFactory;
        this._analysisOptions = _analysisOptions;
        this._salt = _salt;
        this.externalSummaries = externalSummaries;
        this._testView = new FileSystemStateTestView(this);
    }
    get knownFiles() : core.DartList<FileState> {
        return this._pathToFiles.values.map((files : any) =>  {
            return files.first;
        }).toList();
    }
    get knownFilesSetChanges() : async.DartStream<KnownFilesSetChange> {
        return this._knownFilesSetChangesController.stream;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    get test() : FileSystemStateTestView {
        return this._testView;
    }
    get unresolvedFile() : FileState {
        if (op(Op.EQUALS,this._unresolvedFile,null)) {
            this._unresolvedFile = new FileState._(this,null,null,null);
            this._unresolvedFile.refresh();
        }
        return this._unresolvedFile;
    }
    getFileForPath(path : string) : FileState {
        let file : FileState = this._pathToCanonicalFile.get(path);
        if (op(Op.EQUALS,file,null)) {
            let resource : any = this._resourceProvider.getFile(path);
            let fileSource : any = resource.createSource();
            let uri : lib3.Uri = this._sourceFactory.restoreUri(fileSource);
            file = this._uriToFile.get(uri);
            if (file != null) {
                this._pathToCanonicalFile.set(path,file);
                return file;
            }
            let uriSource : any = new bare.createInstance(any,null,resource,uri);
            file = new FileState._(this,path,uri,uriSource);
            this._uriToFile.set(uri,file);
            this._addFileWithPath(path,file);
            this._pathToCanonicalFile.set(path,file);
            file.refresh();
        }
        return file;
    }
    getFileForUri(uri : lib3.Uri) : FileState {
        let file : FileState = this._uriToFile.get(uri);
        if (op(Op.EQUALS,file,null)) {
            if (this.externalSummaries != null) {
                let uriStr : string = uri.toString();
                if (this.externalSummaries.hasUnlinkedUnit(uriStr)) {
                    file = new FileState._external(this,uri);
                    this._uriToFile.set(uri,file);
                    return file;
                }
            }
            let uriSource : any = this._sourceFactory.resolveUri(null,uri.toString());
            if (op(Op.EQUALS,uriSource,null)) {
                this._uriToFile.set(uri,this.unresolvedFile);
                return this.unresolvedFile;
            }
            let path : string = uriSource.fullName;
            let resource : any = this._resourceProvider.getFile(path);
            let source : any = new bare.createInstance(any,null,resource,uri);
            file = new FileState._(this,path,uri,source);
            this._uriToFile.set(uri,file);
            this._addFileWithPath(path,file);
            file.refresh();
        }
        return file;
    }
    getFilesForPath(path : string) : core.DartList<FileState> {
        let canonicalFile : FileState = this.getFileForPath(path);
        let allFiles : core.DartList<FileState> = this._pathToFiles.get(path).toList();
        if (allFiles.length == 1) {
            return allFiles;
        }
        return ((_) : core.DartList<FileState> =>  {
            {
                _.remove(canonicalFile);
                _.insert(0,canonicalFile);
                return _;
            }
        })(allFiles);
    }
    hasUri(path : string) : boolean {
        let flag : boolean = this._hasUriForPath.get(path);
        if (flag == null) {
            let resource : any = this._resourceProvider.getFile(path);
            let fileSource : any = resource.createSource();
            let uri : lib3.Uri = this._sourceFactory.restoreUri(fileSource);
            let uriSource : any = this._sourceFactory.forUri2(uri);
            flag = op(Op.EQUALS,uriSource.fullName,path);
            this._hasUriForPath.set(path,flag);
        }
        return flag;
    }
    removeFile(path : string) : void {
        this._uriToFile.clear();
        this.knownFilePaths.clear();
        this._pathToFiles.clear();
        this._pathToCanonicalFile.clear();
        this._partToLibraries.clear();
    }
    _addFileWithPath(path : string,file : FileState) : void {
        let files = this._pathToFiles.get(path);
        if (files == null) {
            this.knownFilePaths.add(path);
            files = new core.DartList.literal<FileState>();
            this._pathToFiles.set(path,files);
            this._addedKnownFiles.add(path);
            this._scheduleKnownFilesSetChange();
        }
        files.add(file);
    }
    _scheduleKnownFilesSetChange() : void {
        let delay : core.DartDuration = (this._knownFilesSetChangesDelay || new core.DartDuration({
            seconds : 1}));
        this._knownFilesSetChangesTimer = ( this._knownFilesSetChangesTimer ) || ( new async.DartTimer(delay,() =>  {
            let addedFiles : core.DartSet<string> = this._addedKnownFiles.toSet();
            let removedFiles : core.DartSet<string> = new core.DartSet<string>();
            this._knownFilesSetChangesController.add(new KnownFilesSetChange(addedFiles,removedFiles));
            this._addedKnownFiles.clear();
            this._knownFilesSetChangesTimer = null;
        }) );
    }
}

export namespace FileSystemStateTestView {
    export type Constructors = 'FileSystemStateTestView';
    export type Interface = Omit<FileSystemStateTestView, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
        arguments : [],namedArguments : {
        }}})
export class FileSystemStateTestView {
    state : FileSystemState;

    constructor(state : FileSystemState) {
    }
    @defaultConstructor
    FileSystemStateTestView(state : FileSystemState) {
        this.state = state;
    }
    get filesWithoutTransitiveFiles() : core.DartSet<FileState> {
        return this.state._uriToFile.values.where((f : any) =>  {
            return op(Op.EQUALS,f._transitiveFiles,null);
        }).toSet();
    }
    get filesWithoutTransitiveSignature() : core.DartSet<FileState> {
        return this.state._uriToFile.values.where((f : any) =>  {
            return f._transitiveSignature == null;
        }).toSet();
    }
    set knownFilesDelay(value : core.DartDuration) {
        this.state._knownFilesSetChangesDelay = value;
    }
}

export namespace KnownFilesSetChange {
    export type Constructors = 'KnownFilesSetChange';
    export type Interface = Omit<KnownFilesSetChange, Constructors>;
}
@DartClass
export class KnownFilesSetChange {
    added : core.DartSet<string>;

    removed : core.DartSet<string>;

    constructor(added : core.DartSet<string>,removed : core.DartSet<string>) {
    }
    @defaultConstructor
    KnownFilesSetChange(added : core.DartSet<string>,removed : core.DartSet<string>) {
        this.added = added;
        this.removed = removed;
    }
}

export namespace _FastaElementProxy {
    export type Constructors = '_FastaElementProxy';
    export type Interface = Omit<_FastaElementProxy, Constructors>;
}
@DartClass
@Implements(any)
export class _FastaElementProxy implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rawType : any;

    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    _FastaElementProxy() {
        this.rawType = new _FastaInterfaceTypeProxy();
    }
}

export namespace _FastaElementStoreProxy {
    export type Constructors = '_FastaElementStoreProxy';
    export type Interface = Omit<_FastaElementStoreProxy, Constructors>;
}
@DartClass
@Implements(any)
export class _FastaElementStoreProxy implements any.Interface {
    _elements;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.INDEX](builder : any) : _FastaElementProxy {
        return this._elements.putIfAbsent(builder,() =>  {
            return new _FastaElementProxy();
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    _FastaElementStoreProxy() {
        this._elements = new core.DartMap.literal([
        ]);
    }
}

export namespace _FastaInterfaceTypeProxy {
    export type Constructors = '_FastaInterfaceTypeProxy';
    export type Interface = Omit<_FastaInterfaceTypeProxy, Constructors>;
}
@DartClass
@Implements(any)
export class _FastaInterfaceTypeProxy implements any.Interface {
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    _FastaInterfaceTypeProxy() {
    }
}

export class properties {
}
