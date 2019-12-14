/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/index/index.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/collection/lib/src/algorithms";
import * as lib4 from "@dart2ts/dart/uri";

export var createMemoryIndex : () => Index = () : Index =>  {
    return new Index._();
};
export var _findFirstOccurrence : (sortedList : core.DartList<number>,value : number) => number = (sortedList : core.DartList<number>,value : number) : number =>  {
    let i : number = lib3.binarySearch(sortedList,value);
    if (i == -1) {
        return -1;
    }
    while (i > 0 && sortedList[i - 1] == value){
        i--;
    }
    return i;
};
export namespace Index {
    export type Constructors = '_';
    export type Interface = Omit<Index, Constructors>;
}
@DartClass
export class Index {
    _contextIndexMap : core.DartMap<any,_ContextIndex>;

    @namedConstructor
    _() {
        this._contextIndexMap = new core.DartMap.literal([
        ]);
    }
    static _ : new() => Index;

    getDefinedNames(regExp : core.DartRegExp,kind : any) : async.Future<core.DartList<Location>> {
        return this._mergeLocations((index : _ContextIndex) =>  {
            return index.getDefinedNames(regExp,kind);
        });
    }
    getRelations(element : any,kind : any) : async.Future<core.DartList<Location>> {
        return this._mergeLocations((index : _ContextIndex) =>  {
            return index.getRelations(element,kind);
        });
    }
    getUnresolvedMemberReferences(name : string) : async.Future<core.DartList<Location>> {
        return this._mergeLocations((index : _ContextIndex) =>  {
            return index.getUnresolvedMemberReferences(name);
        });
    }
    indexDeclarations(unit : any) : void {
        if (op(Op.EQUALS,unit,null)) {
            return;
        }
        let compilationUnitElement : any = resolutionMap.elementDeclaredByCompilationUnit(unit);
        if (op(Op.EQUALS,((t)=>(!!t)?t.library:null)(compilationUnitElement),null)) {
            return;
        }
        let context : any = compilationUnitElement.context;
        this._getContextIndex(context).indexDeclarations(unit);
    }
    indexUnit(unit : any) : void {
        if (op(Op.EQUALS,unit,null)) {
            return;
        }
        let compilationUnitElement : any = resolutionMap.elementDeclaredByCompilationUnit(unit);
        if (op(Op.EQUALS,((t)=>(!!t)?t.library:null)(compilationUnitElement),null)) {
            return;
        }
        let context : any = compilationUnitElement.context;
        this._getContextIndex(context).indexUnit(unit);
    }
    removeContext(context : any) : void {
        this._contextIndexMap.remove(context);
    }
    removeUnit(context : any,librarySource : any,unitSource : any) : void {
        ((_36_)=>(!!_36_)?_36_.removeUnit(librarySource,unitSource):null)(this._contextIndexMap.get(context));
    }
    stop() : void {
    }
    _getContextIndex(context : any) : _ContextIndex {
        return this._contextIndexMap.putIfAbsent(context,() =>  {
            return new _ContextIndex(context);
        });
    }
    _mergeLocations(callback : (index : _ContextIndex) => async.Future<core.DartList<Location>>) : async.Future<core.DartList<Location>> { 
        return new async.Future.fromPromise(( async () =>  {
            let locations : core.DartList<Location> = new core.DartList.literal<Location>();
            for(let index of this._contextIndexMap.values) {
                let contextLocations : core.DartList<Location> = await callback(index);
                locations.addAll(contextLocations);
            }
            return locations;
        } )());
    }

}

export namespace Location {
    export type Constructors = 'Location';
    export type Interface = Omit<Location, Constructors>;
}
@DartClass
export class Location {
    context : any;

    libraryUri : string;

    unitUri : string;

    kind : any;

    offset : number;

    length : number;

    isQualified : boolean;

    isResolved : boolean;

    constructor(context : any,libraryUri : string,unitUri : string,kind : any,offset : number,length : number,isQualified : boolean,isResolved : boolean) {
    }
    @defaultConstructor
    Location(context : any,libraryUri : string,unitUri : string,kind : any,offset : number,length : number,isQualified : boolean,isResolved : boolean) {
        this.context = context;
        this.libraryUri = libraryUri;
        this.unitUri = unitUri;
        this.kind = kind;
        this.offset = offset;
        this.length = length;
        this.isQualified = isQualified;
        this.isResolved = isResolved;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Location{librarySourceUri: ${this.libraryUri}, ` + `unitSourceUri: ${this.unitUri}, offset: ${this.offset}, length: ${this.length}, ` + `isQualified: ${this.isQualified}}, isResolved: ${this.isResolved}}`;
    }
}

export namespace PackageIndexId {
    export type Constructors = 'PackageIndexId';
    export type Interface = Omit<PackageIndexId, Constructors>;
}
@DartClass
export class PackageIndexId {
    constructor() {
    }
    @defaultConstructor
    PackageIndexId() {
    }
}

export namespace PackageIndexStore {
    export type Constructors = 'PackageIndexStore';
    export type Interface = Omit<PackageIndexStore, Constructors>;
}
@DartClass
export class PackageIndexStore {
    @Abstract
    getIds() : async.Future<core.DartIterable<PackageIndexId>>{ throw 'abstract'}
    @Abstract
    getIndex(id : PackageIndexId) : async.Future<any>{ throw 'abstract'}
    @Abstract
    putIndex(unitLibraryUri : string,unitUnitUri : string,indexBuilder : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PackageIndexStore() {
    }
}

export namespace _ContextIndex {
    export type Constructors = '_ContextIndex';
    export type Interface = Omit<_ContextIndex, Constructors>;
}
@DartClass
export class _ContextIndex {
    context : any;

    indexMap : core.DartMap<string,any>;

    constructor(context : any) {
    }
    @defaultConstructor
    _ContextIndex(context : any) {
        this.indexMap = new core.DartMap.literal([
        ]);
        this.context = context;
    }
    getDefinedNames(regExp : core.DartRegExp,kind : any) : async.Future<core.DartList<Location>> { 
        return new async.Future.fromPromise(( async () =>  {
            return this._mergeLocations((requester : _PackageIndexRequester) =>  {
                return requester.getDefinedNames(this.context,regExp,kind);
            });
        } )());
    }

    getRelations(element : any,kind : any) : async.Future<core.DartList<Location>> {
        return this._mergeLocations((requester : _PackageIndexRequester) =>  {
            return requester.getRelations(this.context,element,kind);
        });
    }
    getUnresolvedMemberReferences(name : string) : async.Future<core.DartList<Location>> { 
        return new async.Future.fromPromise(( async () =>  {
            return this._mergeLocations((requester : _PackageIndexRequester) =>  {
                return requester.getUnresolvedMemberReferences(this.context,name);
            });
        } )());
    }

    indexDeclarations(unit : any) : void {
        let key : string = this._getUnitKeyForElement(unit.element);
        if (!this.indexMap.containsKey(key)) {
            let assembler : any = new bare.createInstance(any,null);
            assembler.indexDeclarations(unit);
            this._putUnitIndexBuilder(key,assembler);
        }
    }
    indexUnit(unit : any) : void {
        let key : string = this._getUnitKeyForElement(unit.element);
        let assembler : any = new bare.createInstance(any,null);
        assembler.indexUnit(unit);
        this._putUnitIndexBuilder(key,assembler);
    }
    removeUnit(librarySource : any,unitSource : any) : void {
        let key : string = this._getUnitKeyForSource(librarySource,unitSource);
        this.indexMap.remove(key);
    }
    _getUnitKeyForElement(unitElement : any) : string {
        let librarySource : any = unitElement.library.source;
        let unitSource : any = unitElement.source;
        return this._getUnitKeyForSource(librarySource,unitSource);
    }
    _getUnitKeyForSource(librarySource : any,unitSource : any) : string {
        let unitLibraryUri : string = librarySource.uri.toString();
        let unitUnitUri : string = unitSource.uri.toString();
        return `${unitLibraryUri};${unitUnitUri}`;
    }
    _mergeLocations(callback : (requester : _PackageIndexRequester) => core.DartList<Location>) : async.Future<core.DartList<Location>> { 
        return new async.Future.fromPromise(( async () =>  {
            let locations : core.DartList<Location> = new core.DartList.literal<Location>();
            for(let index of this.indexMap.values) {
                let requester : _PackageIndexRequester = new _PackageIndexRequester(index);
                let indexLocations : core.DartList<Location> = callback(requester);
                locations.addAll(indexLocations);
            }
            return locations;
        } )());
    }

    _putUnitIndexBuilder(key : string,assembler : any) : void {
        let indexBuilder : any = assembler.assemble();
        let indexBytes : core.DartList<number> = indexBuilder.toBuffer();
        let index : any = new bare.createInstance(any,null,indexBytes);
        this.indexMap.set(key,index);
    }
}

export namespace _PackageIndexRequester {
    export type Constructors = '_PackageIndexRequester';
    export type Interface = Omit<_PackageIndexRequester, Constructors>;
}
@DartClass
export class _PackageIndexRequester {
    index : any;

    constructor(index : any) {
    }
    @defaultConstructor
    _PackageIndexRequester(index : any) {
        this.index = index;
    }
    findElementId(element : any) : number {
        let info : any = new bare.createInstance(any,null,element);
        element = info.element;
        let unitId : number = this.getUnitId(element);
        if (unitId == -1) {
            return -1;
        }
        let unitMemberId : number = this.getElementUnitMemberId(element);
        if (unitMemberId == -1) {
            return -1;
        }
        let classMemberId : number = this.getElementClassMemberId(element);
        if (classMemberId == -1) {
            return -1;
        }
        let parameterId : number = this.getElementParameterId(element);
        if (parameterId == -1) {
            return -1;
        }
        let elementId : number = _findFirstOccurrence(this.index.elementNameUnitMemberIds,unitMemberId);
        if (elementId == -1) {
            return -1;
        }
        for(; elementId < this.index.elementNameUnitMemberIds.length && op(Op.EQUALS,op(Op.INDEX,this.index.elementNameUnitMemberIds,elementId),unitMemberId); elementId++){
            if (op(Op.EQUALS,op(Op.INDEX,this.index.elementUnits,elementId),unitId) && op(Op.EQUALS,op(Op.INDEX,this.index.elementNameClassMemberIds,elementId),classMemberId) && op(Op.EQUALS,op(Op.INDEX,this.index.elementNameParameterIds,elementId),parameterId) && op(Op.EQUALS,op(Op.INDEX,this.index.elementKinds,elementId),info.kind)) {
                return elementId;
            }
        }
        return -1;
    }
    getDefinedNames(context : any,regExp : core.DartRegExp,kind : any) : core.DartList<Location> {
        let locations : core.DartList<Location> = new core.DartList.literal<Location>();
        for(let unitIndex of this.index.units) {
            let requester : _UnitIndexRequester = new _UnitIndexRequester(this,unitIndex);
            let unitLocations : core.DartList<Location> = requester.getDefinedNames(context,regExp,kind);
            locations.addAll(unitLocations);
        }
        return locations;
    }
    getElementClassMemberId(element : any) : number {
        for(; element != null; element = element.enclosingElement){
            if (is(element.enclosingElement, any)) {
                return this.getStringId(element.name);
            }
        }
        return this.getStringId(PackageIndexAssembler.NULL_STRING);
    }
    getElementParameterId(element : any) : number {
        for(; element != null; element = element.enclosingElement){
            if (is(element, any)) {
                return this.getStringId(element.name);
            }
        }
        return this.getStringId(PackageIndexAssembler.NULL_STRING);
    }
    getElementUnitMemberId(element : any) : number {
        for(; element != null; element = element.enclosingElement){
            if (is(element.enclosingElement, any)) {
                return this.getStringId(element.name);
            }
        }
        return this.getStringId(PackageIndexAssembler.NULL_STRING);
    }
    getRelations(context : any,element : any,kind : any) : core.DartList<Location> {
        let elementId : number = this.findElementId(element);
        if (elementId == -1) {
            return new core.DartList.literal<Location>();
        }
        let locations : core.DartList<Location> = new core.DartList.literal<Location>();
        for(let unitIndex of this.index.units) {
            let requester : _UnitIndexRequester = new _UnitIndexRequester(this,unitIndex);
            let unitLocations : core.DartList<Location> = requester.getRelations(context,elementId,kind);
            locations.addAll(unitLocations);
        }
        return locations;
    }
    getStringId(str : string) : number {
        return lib3.binarySearch(this.index.strings,str);
    }
    getUnitId(element : any) : number {
        let unitElement : any = PackageIndexAssembler.getUnitElement(element);
        let libraryUriId : number = this.getUriId(unitElement.library.source.uri);
        if (libraryUriId == -1) {
            return -1;
        }
        let unitUriId : number = this.getUriId(unitElement.source.uri);
        if (unitUriId == -1) {
            return -1;
        }
        for(let i : number = 0; i < this.index.unitLibraryUris.length; i++){
            if (op(Op.EQUALS,op(Op.INDEX,this.index.unitLibraryUris,i),libraryUriId) && op(Op.EQUALS,op(Op.INDEX,this.index.unitUnitUris,i),unitUriId)) {
                return i;
            }
        }
        return -1;
    }
    getUnitLibraryUri(unit : number) : string {
        let id : number = op(Op.INDEX,this.index.unitLibraryUris,unit);
        return op(Op.INDEX,this.index.strings,id);
    }
    getUnitUnitUri(unit : number) : string {
        let id : number = op(Op.INDEX,this.index.unitUnitUris,unit);
        return op(Op.INDEX,this.index.strings,id);
    }
    getUnresolvedMemberReferences(context : any,name : string) : core.DartList<Location> {
        let locations : core.DartList<Location> = new core.DartList.literal<Location>();
        for(let unitIndex of this.index.units) {
            let requester : _UnitIndexRequester = new _UnitIndexRequester(this,unitIndex);
            let unitLocations : core.DartList<Location> = requester.getUnresolvedMemberReferences(context,name);
            locations.addAll(unitLocations);
        }
        return locations;
    }
    getUriId(uri : lib4.Uri) : number {
        let str : string = uri.toString();
        return this.getStringId(str);
    }
}

export namespace _UnitIndexRequester {
    export type Constructors = '_UnitIndexRequester';
    export type Interface = Omit<_UnitIndexRequester, Constructors>;
}
@DartClass
export class _UnitIndexRequester {
    packageRequester : _PackageIndexRequester;

    unitIndex : any;

    constructor(packageRequester : _PackageIndexRequester,unitIndex : any) {
    }
    @defaultConstructor
    _UnitIndexRequester(packageRequester : _PackageIndexRequester,unitIndex : any) {
        this.packageRequester = packageRequester;
        this.unitIndex = unitIndex;
    }
    getDefinedNames(context : any,regExp : core.DartRegExp,kind : any) : core.DartList<Location> {
        let locations : core.DartList<Location> = new core.DartList.literal<Location>();
        let unitLibraryUri : string = null;
        let unitUnitUri : string = null;
        for(let i : number = 0; i < this.unitIndex.definedNames.length; i++){
            if (op(Op.EQUALS,op(Op.INDEX,this.unitIndex.definedNameKinds,i),kind)) {
                let nameIndex : number = op(Op.INDEX,this.unitIndex.definedNames,i);
                let name : string = op(Op.INDEX,this.packageRequester.index.strings,nameIndex);
                if (regExp.matchAsPrefix(name) != null) {
                    unitLibraryUri = ( unitLibraryUri ) || ( this.packageRequester.getUnitLibraryUri(this.unitIndex.unit) );
                    unitUnitUri = ( unitUnitUri ) || ( this.packageRequester.getUnitUnitUri(this.unitIndex.unit) );
                    locations.add(new Location(context,unitLibraryUri,unitUnitUri,null,op(Op.INDEX,this.unitIndex.definedNameOffsets,i),new core.DartString(name).length,false,true));
                }
            }
        }
        return locations;
    }
    getRelations(context : any,elementId : number,kind : any) : core.DartList<Location> {
        let i : number = _findFirstOccurrence(this.unitIndex.usedElements,elementId);
        if (i == -1) {
            return new core.DartList.literal<Location>();
        }
        let locations : core.DartList<Location> = new core.DartList.literal<Location>();
        let unitLibraryUri : string = null;
        let unitUnitUri : string = null;
        for(; i < this.unitIndex.usedElements.length && op(Op.EQUALS,op(Op.INDEX,this.unitIndex.usedElements,i),elementId); i++){
            if (op(Op.EQUALS,op(Op.INDEX,this.unitIndex.usedElementKinds,i),kind)) {
                unitLibraryUri = ( unitLibraryUri ) || ( this.packageRequester.getUnitLibraryUri(this.unitIndex.unit) );
                unitUnitUri = ( unitUnitUri ) || ( this.packageRequester.getUnitUnitUri(this.unitIndex.unit) );
                locations.add(new Location(context,unitLibraryUri,unitUnitUri,kind,op(Op.INDEX,this.unitIndex.usedElementOffsets,i),op(Op.INDEX,this.unitIndex.usedElementLengths,i),op(Op.INDEX,this.unitIndex.usedElementIsQualifiedFlags,i),true));
            }
        }
        return locations;
    }
    getUnresolvedMemberReferences(context : any,name : string) : core.DartList<Location> {
        let nameId : number = this.packageRequester.getStringId(name);
        if (nameId == -1) {
            return new core.DartList.literal<Location>();
        }
        let i : number = _findFirstOccurrence(this.unitIndex.usedNames,nameId);
        if (i == -1) {
            return new core.DartList.literal<Location>();
        }
        let locations : core.DartList<Location> = new core.DartList.literal<Location>();
        let unitLibraryUri : string = null;
        let unitUnitUri : string = null;
        for(; i < this.unitIndex.usedNames.length && op(Op.EQUALS,op(Op.INDEX,this.unitIndex.usedNames,i),nameId); i++){
            unitLibraryUri = ( unitLibraryUri ) || ( this.packageRequester.getUnitLibraryUri(this.unitIndex.unit) );
            unitUnitUri = ( unitUnitUri ) || ( this.packageRequester.getUnitUnitUri(this.unitIndex.unit) );
            locations.add(new Location(context,unitLibraryUri,unitUnitUri,op(Op.INDEX,this.unitIndex.usedNameKinds,i),op(Op.INDEX,this.unitIndex.usedNameOffsets,i),new core.DartString(name).length,op(Op.INDEX,this.unitIndex.usedNameIsQualifiedFlags,i),false));
        }
        return locations;
    }
}

export class properties {
}
