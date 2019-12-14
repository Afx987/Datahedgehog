/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/library_index.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./ast";
import * as lib4 from "@dart2ts/dart/uri";

export namespace LibraryIndex {
    export type Constructors = 'LibraryIndex' | 'byUri' | 'coreLibraries' | 'all';
    export type Interface = Omit<LibraryIndex, Constructors>;
}
@DartClass
export class LibraryIndex {
    private static __$getterPrefix : string;
    static get getterPrefix() : string { 
        if (this.__$getterPrefix===undefined) {
            this.__$getterPrefix = 'get:';
        }
        return this.__$getterPrefix;
    }

    private static __$setterPrefix : string;
    static get setterPrefix() : string { 
        if (this.__$setterPrefix===undefined) {
            this.__$setterPrefix = 'set:';
        }
        return this.__$setterPrefix;
    }

    private static __$topLevel : string;
    static get topLevel() : string { 
        if (this.__$topLevel===undefined) {
            this.__$topLevel = '::';
        }
        return this.__$topLevel;
    }

    _libraries : core.DartMap<string,_ClassTable>;

    constructor(program : lib3.Program,libraryUris : core.DartIterable<string>) {
    }
    @defaultConstructor
    LibraryIndex(program : lib3.Program,libraryUris : core.DartIterable<string>) {
        this._libraries = new core.DartMap.literal([
        ]);
        let libraryUriSet = libraryUris.toSet();
        for(let library of program.libraries) {
            let uri = `${library.importUri}`;
            if (libraryUriSet.contains(uri)) {
                this._libraries.set(uri,new _ClassTable(library));
            }
        }
    }
    @namedConstructor
    byUri(program : lib3.Program,libraryUris : core.DartIterable<lib4.Uri>) {
        this._libraries = new core.DartMap.literal([
        ]);
        this.LibraryIndex(program,libraryUris.map((uri : any) =>  {
            return `${uri}`;
        }));
    }
    static byUri : new(program : lib3.Program,libraryUris : core.DartIterable<lib4.Uri>) => LibraryIndex;

    @namedConstructor
    coreLibraries(program : lib3.Program) {
        this._libraries = new core.DartMap.literal([
        ]);
        for(let library of program.libraries) {
            if (library.importUri.scheme == 'dart') {
                this._libraries.set(`${library.importUri}`,new _ClassTable(library));
            }
        }
    }
    static coreLibraries : new(program : lib3.Program) => LibraryIndex;

    @namedConstructor
    all(program : lib3.Program) {
        this._libraries = new core.DartMap.literal([
        ]);
        for(let library of program.libraries) {
            this._libraries.set(`${library.importUri}`,new _ClassTable(library));
        }
    }
    static all : new(program : lib3.Program) => LibraryIndex;

    _getLibraryIndex(uri : string) : _ClassTable {
        let libraryIndex : _ClassTable = this._libraries.get(uri);
        if (op(Op.EQUALS,libraryIndex,null)) {
            throw `The library '${uri}' has not been indexed`;
        }
        return libraryIndex;
    }
    getLibrary(uri : string) : lib3.Library {
        return this._getLibraryIndex(uri).library;
    }
    tryGetLibrary(uri : string) : lib3.Library {
        return ((t)=>(!!t)?t.library:null)(this._libraries.get(uri));
    }
    containsLibrary(uri : string) : boolean {
        return this._libraries.containsKey(uri);
    }
    getClass(library : string,className : string) : lib3.Class {
        return this._getLibraryIndex(library).getClass(className);
    }
    tryGetClass(library : string,className : string) : lib3.Class {
        return ((_691_)=>(!!_691_)?_691_.tryGetClass(className):null)(this._libraries.get(library));
    }
    getMember(library : string,className : string,memberName : string) : lib3.Member {
        return this._getLibraryIndex(library).getMember(className,memberName);
    }
    tryGetMember(library : string,className : string,memberName : string) : lib3.Member {
        return ((_692_)=>(!!_692_)?_692_.tryGetMember(className,memberName):null)(this._libraries.get(library));
    }
    getTopLevelMember(library : string,memberName : string) : lib3.Member {
        return this.getMember(library,LibraryIndex.topLevel,memberName);
    }
    tryGetTopLevelMember(library : string,className : string,memberName : string) : lib3.Member {
        return this.tryGetMember(library,LibraryIndex.topLevel,memberName);
    }
}

export namespace _ClassTable {
    export type Constructors = '_ClassTable';
    export type Interface = Omit<_ClassTable, Constructors>;
}
@DartClass
export class _ClassTable {
    library : lib3.Library;

    _classes : core.DartMap<string,_MemberTable>;

    constructor(library : lib3.Library) {
    }
    @defaultConstructor
    _ClassTable(library : lib3.Library) {
        this.library = library;
    }
    get classes() : core.DartMap<string,_MemberTable> {
        if (this._classes == null) {
            this._classes = new core.DartMap.literal([
            ]);
            this._classes.set(LibraryIndex.topLevel,new _MemberTable.topLevel(this));
            for(let class_ of this.library.classes) {
                this._classes.set(class_.name,new _MemberTable(this,class_));
            }
        }
        return this._classes;
    }
    get containerName() : string {
        return this.library.isExternal ? `external library '${this.library.importUri}'` : `library '${this.library.importUri}'`;
    }
    _getClassIndex(name : string) : _MemberTable {
        let indexer = this.classes.get(name);
        if (op(Op.EQUALS,indexer,null)) {
            throw `Class '${name}' not found in ${this.containerName}`;
        }
        return indexer;
    }
    getClass(name : string) : lib3.Class {
        return this._getClassIndex(name).class_;
    }
    tryGetClass(name : string) : lib3.Class {
        return ((t)=>(!!t)?t.class_:null)(this.classes.get(name));
    }
    getMember(className : string,memberName : string) : lib3.Member {
        return this._getClassIndex(className).getMember(memberName);
    }
    tryGetMember(className : string,memberName : string) : lib3.Member {
        return ((_693_)=>(!!_693_)?_693_.tryGetMember(memberName):null)(this.classes.get(className));
    }
}

export namespace _MemberTable {
    export type Constructors = '_MemberTable' | 'topLevel';
    export type Interface = Omit<_MemberTable, Constructors>;
}
@DartClass
export class _MemberTable {
    parent : _ClassTable;

    class_ : lib3.Class;

    _members : core.DartMap<string,lib3.Member>;

    get library() : lib3.Library {
        return this.parent.library;
    }
    constructor(parent : _ClassTable,class_ : lib3.Class) {
    }
    @defaultConstructor
    _MemberTable(parent : _ClassTable,class_ : lib3.Class) {
        this.parent = parent;
        this.class_ = class_;
    }
    @namedConstructor
    topLevel(parent : _ClassTable) {
        this.class_ = null;
        this.parent = parent;
    }
    static topLevel : new(parent : _ClassTable) => _MemberTable;

    get members() : core.DartMap<string,lib3.Member> {
        if (this._members == null) {
            this._members = new core.DartMap.literal([
            ]);
            if (this.class_ != null) {
                this.class_.procedures.forEach(this.addMember.bind(this));
                this.class_.fields.forEach(this.addMember.bind(this));
                this.class_.constructors.forEach(this.addMember.bind(this));
            }else {
                this.library.procedures.forEach(this.addMember.bind(this));
                this.library.fields.forEach(this.addMember.bind(this));
            }
        }
        return this._members;
    }
    getDisambiguatedName(member : lib3.Member) : string {
        if (is(member, lib3.Procedure)) {
            if (member.isGetter) return LibraryIndex.getterPrefix + member.name.name;
            if (member.isSetter) return LibraryIndex.setterPrefix + member.name.name;
        }
        return member.name.name;
    }
    addMember(member : lib3.Member) : void {
        if (member.name.isPrivate && member.name.library != this.library) {
            return;
        }
        this._members.set(this.getDisambiguatedName(member),member);
    }
    get containerName() : string {
        if (op(Op.EQUALS,this.class_,null)) {
            return `top-level of ${this.parent.containerName}`;
        }else {
            return `class '${this.class_.name}' in ${this.parent.containerName}`;
        }
    }
    getMember(name : string) : lib3.Member {
        let member = this.members.get(name);
        if (op(Op.EQUALS,member,null)) {
            let message : string = `A member with disambiguated name '${name}' was not found ` + `in ${this.containerName}`;
            let getter = LibraryIndex.getterPrefix + name;
            let setter = LibraryIndex.setterPrefix + name;
            if (this.members.get(getter) != null || this.members.get(setter) != null) {
                throw `${message}. Did you mean '${getter}' or '${setter}'?`;
            }
            throw message;
        }
        return member;
    }
    tryGetMember(name : string) : lib3.Member {
        return this.members.get(name);
    }
}

export class properties {
}
