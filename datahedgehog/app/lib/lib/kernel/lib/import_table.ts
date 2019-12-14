/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/import_table.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./ast";
import * as lib4 from "./visitor";
import * as lib5 from "@dart2ts.packages/path/lib/path";

export namespace ImportTable {
    export type Constructors = 'ImportTable';
    export type Interface = Omit<ImportTable, Constructors>;
}
@DartClass
export class ImportTable {
    @Abstract
    getImportIndex(library : lib3.Library) : number{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ImportTable() {
    }
}

export namespace ProgramImportTable {
    export type Constructors = 'ProgramImportTable';
    export type Interface = Omit<ProgramImportTable, Constructors>;
}
@DartClass
@Implements(ImportTable)
export class ProgramImportTable implements ImportTable.Interface {
    _libraryIndex : core.DartMap<lib3.Library,number>;

    constructor(program : lib3.Program) {
    }
    @defaultConstructor
    ProgramImportTable(program : lib3.Program) {
        this._libraryIndex = new core.DartMap.literal([
        ]);
        for(let i : number = 0; i < program.libraries.length; ++i){
            this._libraryIndex.set(program.libraries[i],i);
        }
    }
    getImportIndex(library : lib3.Library) : number {
        return (this._libraryIndex.get(library) || -1);
    }
}

export namespace LibraryImportTable {
    export type Constructors = 'empty';
    export type Interface = Omit<LibraryImportTable, Constructors>;
}
@DartClass
@Implements(ImportTable)
export class LibraryImportTable implements ImportTable.Interface {
    _importPaths : core.DartList<string>;

    _importedLibraries : core.DartList<lib3.Library>;

    _libraryIndex : core.DartMap<lib3.Library,number>;

    constructor(lib : lib3.Library) {
    }
    @defaultFactory
    static $LibraryImportTable(lib : lib3.Library) : LibraryImportTable {
        return new _ImportTableBuilder(lib).build();
    }
    @namedConstructor
    empty() {
        this._importPaths = new core.DartList.literal<string>();
        this._importedLibraries = new core.DartList.literal<lib3.Library>();
        this._libraryIndex = new core.DartMap.literal([
        ]);
    }
    static empty : new() => LibraryImportTable;

    get importPaths() : core.DartList<string> {
        return this._importPaths;
    }
    get importedLibraries() : core.DartList<lib3.Library> {
        return this._importedLibraries;
    }
    addImport(target : lib3.Library,importPath : string) : number {
        let index : number = this._libraryIndex.get(target);
        if (index != null) return index;
        index = this._importPaths.length;
        this._importPaths.add(importPath);
        this._importedLibraries.add(target);
        this._libraryIndex.set(target,index);
        return index;
    }
    getImportIndex(library : lib3.Library) : number {
        return (this._libraryIndex.get(library) || -1);
    }
    getImportPath(library : lib3.Library) : string {
        return this._importPaths[this.getImportIndex(library)];
    }
}

export namespace _ImportTableBuilder {
    export type Constructors = lib4.RecursiveVisitor.Constructors | '_ImportTableBuilder';
    export type Interface = Omit<_ImportTableBuilder, Constructors>;
}
@DartClass
export class _ImportTableBuilder extends lib4.RecursiveVisitor<any> {
    table : LibraryImportTable;

    referenceLibrary : lib3.Library;

    build() : LibraryImportTable {
        this.referenceLibrary.accept(this);
        return this.table;
    }
    constructor(referenceLibrary : lib3.Library) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ImportTableBuilder(referenceLibrary : lib3.Library) {
        this.table = new LibraryImportTable.empty();
        this.referenceLibrary = referenceLibrary;
        this.table.addImport(this.referenceLibrary,'');
    }
    addLibraryImport(target : lib3.Library) : void {
        if (op(Op.EQUALS,target,this.referenceLibrary)) return;
        let referenceUri = this.referenceLibrary.importUri;
        let targetUri = target.importUri;
        if (op(Op.EQUALS,targetUri,null)) {
            throw `${referenceUri} cannot refer to library without an import URI`;
        }
        if (targetUri.scheme == 'file' && referenceUri.scheme == 'file') {
            let targetDirectory = lib5.dirname(targetUri.path);
            let currentDirectory = lib5.dirname(referenceUri.path);
            let relativeDirectory = lib5.relative(targetDirectory,{
                from : currentDirectory});
            let filename = lib5.basename(targetUri.path);
            this.table.addImport(target,`${relativeDirectory}/${filename}`);
        }else if (targetUri.scheme == 'file') {
            throw `${referenceUri} cannot refer to application library ${targetUri}`;
        }else {
            this.table.addImport(target,target.importUri.toString());
        }
    }
    visitClassReference(node : lib3.Class) {
        this.addLibraryImport(node.enclosingLibrary);
    }
    defaultMemberReference(node : lib3.Member) {
        this.addLibraryImport(node.enclosingLibrary);
    }
    visitName(name : lib3.Name) {
        if (name.library != null) {
            this.addLibraryImport(name.library);
        }
    }
}

export class properties {
}
