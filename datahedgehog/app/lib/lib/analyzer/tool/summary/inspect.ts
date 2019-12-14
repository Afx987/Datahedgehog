/** Library asset:datahedgehog_monitor/lib/lib/analyzer/tool/summary/inspect.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as mirrors from "@dart2ts/dart/mirrors";
import * as convert from "@dart2ts/dart/convert";
import * as lib6 from "@dart2ts/dart/uri";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    let argParser : any = ((_) : any =>  {
        {
            addFlag('raw');
            return _;
        }
    })(new bare.createInstance(any,null));
    let argResults : any = argParser.parse(args);
    if (argResults.rest.length != 1) {
        core.print(argParser.usage);
        io.properties.exitCode = 1;
        return;
    }
    let path : string = op(Op.INDEX,argResults.rest,0);
    let bytes : core.DartList<number> = new io.File(path).readAsBytesSync();
    let bundle : any = new bare.createInstance(any,null,bytes);
    let inspector : SummaryInspector = new SummaryInspector(op(Op.INDEX,argResults,'raw'));
    core.print(inspector.dumpPackageBundle(bundle).join('\n'));
};
export var isEnum : (obj : core.DartObject) => boolean = (obj : core.DartObject) : boolean =>  {
    return properties._isEnumCache.putIfAbsent(obj.runtimeType,() =>  {
        return mirrors.reflect(obj).type.isEnum;
    });
};
export namespace BrokenEntity {
    export type Constructors = 'BrokenEntity';
    export type Interface = Omit<BrokenEntity, Constructors>;
}
@DartClass
@Implements(DecodedEntity)
export class BrokenEntity implements DecodedEntity.Interface {
    opener : string;

    parts : core.DartMap<string,DecodedEntity>;

    closer : string;

    constructor(opener : string,parts : core.DartMap<string,DecodedEntity>,closer : string) {
    }
    @defaultConstructor
    BrokenEntity(opener : string,parts : core.DartMap<string,DecodedEntity>,closer : string) {
        this.opener = opener;
        this.parts = parts;
        this.closer = closer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLines() : core.DartList<string> {
        let result : core.DartList<string> = new core.DartList.literal<string>(this.opener);
        let first : boolean = true;
        for(let key of this.parts.keys) {
            if (first) {
                first = false;
            }else {
                result[result.length - 1] += ',';
            }
            let subResult : core.DartList<string> = this.parts.get(key).getLines();
            subResult[0] = `${key}: ${subResult[0]}`;
            result.addAll(subResult.map((s : string) =>  {
                return `  ${s}`;
            }));
        }
        result.add(this.closer);
        return result;
    }
}

export namespace DecodedEntity {
    export type Constructors = never;
    export type Interface = Omit<DecodedEntity, Constructors>;
}
@DartClass
export class DecodedEntity {
    @namedFactory
    static $group(opener : string,parts : core.DartMap<string,DecodedEntity>,closer : string,forceKeys : boolean) : DecodedEntity {
        var bailout : () => DecodedEntity = () : DecodedEntity =>  {
            return new BrokenEntity(opener,parts,closer);
        };
        let short : string = opener;
        let first : boolean = true;
        for(let key of parts.keys) {
            if (first) {
                first = false;
            }else {
                short += ', ';
            }
            let value : DecodedEntity = parts.get(key);
            if (forceKeys) {
                short += `${key}: `;
            }
            if (is(value, UnbrokenEntity)) {
                short += value._s;
            }else {
                return bailout();
            }
            if (new core.DartString(short).length > properties.MAX_LINE_LENGTH) {
                return bailout();
            }
        }
        return new DecodedEntity.short(short + closer);
    }
    static group : new(opener : string,parts : core.DartMap<string,DecodedEntity>,closer : string,forceKeys : boolean) => DecodedEntity;

    @namedFactory
    static $short(s : string) : DecodedEntity {
        return new UnbrokenEntity(s);
    }
    static short : new(s : string) => DecodedEntity;

    @Abstract
    getLines() : core.DartList<string>{ throw 'abstract'}
}

export namespace LibraryWrapper {
    export type Constructors = 'LibraryWrapper';
    export type Interface = Omit<LibraryWrapper, Constructors>;
}
@DartClass
export class LibraryWrapper {
    _linked : any;

    _unlinked : core.DartList<any>;

    constructor(_linked : any,_unlinked : core.DartList<any>) {
    }
    @defaultConstructor
    LibraryWrapper(_linked : any,_unlinked : core.DartList<any>) {
        this._linked = _linked;
        this._unlinked = _unlinked;
    }
}

export namespace ReferenceWrapper {
    export type Constructors = 'ReferenceWrapper';
    export type Interface = Omit<ReferenceWrapper, Constructors>;
}
@DartClass
export class ReferenceWrapper {
    _linked : any;

    _unlinked : any;

    constructor(_linked : any,_unlinked : any) {
    }
    @defaultConstructor
    ReferenceWrapper(_linked : any,_unlinked : any) {
        this._linked = _linked;
        this._unlinked = _unlinked;
    }
    get name() : string {
        if (this._linked != null && this._linked.name.isNotEmpty) {
            return this._linked.name;
        }else if (this._unlinked != null && this._unlinked.name.isNotEmpty) {
            return this._unlinked.name;
        }else {
            return '???';
        }
    }
}

export namespace SummaryInspector {
    export type Constructors = 'SummaryInspector';
    export type Interface = Omit<SummaryInspector, Constructors>;
}
@DartClass
export class SummaryInspector {
    _dependencies : core.DartList<any>;

    _references : core.DartList<ReferenceWrapper>;

    raw : boolean;

    constructor(raw : boolean) {
    }
    @defaultConstructor
    SummaryInspector(raw : boolean) {
        this.raw = raw;
    }
    decode(obj : core.DartObject,key : string) : DecodedEntity {
        if (!this.raw && is(obj, any)) {
            return this.decodePackageBundle(obj);
        }
        if (is(obj, LibraryWrapper)) {
            return this.decodeLibrary(obj);
        }
        if (is(obj, UnitWrapper)) {
            return this.decodeUnit(obj);
        }
        if (is(obj, ReferenceWrapper)) {
            return this.decodeReference(obj);
        }
        if (is(obj, DecodedEntity)) {
            return obj;
        }
        if (is(obj, any)) {
            let map : core.DartMap<string,core.DartObject> = obj.toMap();
            return this.decodeMap(map);
        }else if (is(obj, core.DartList<any>)) {
            let parts : core.DartMap<string,DecodedEntity> = new core.DartMap.literal([
            ]);
            for(let i : number = 0; i < obj.length; i++){
                parts.set(new core.DartInt(i).toString(),this.decode(obj[i],key));
            }
            return new DecodedEntity.group('[',parts,']',false);
        }else if (is(obj, "string")) {
            return new DecodedEntity.short(convert.properties.JSON.encode(obj));
        }else if (isEnum(obj)) {
            return new DecodedEntity.short(new core.DartString(obj.toString()).split('.')[1]);
        }else if (is(obj, "number") && key == 'dependency' && this._dependencies != null && obj < this._dependencies.length) {
            return new DecodedEntity.short(`${obj} (${this._dependencies[obj].uri})`);
        }else if (is(obj, "number") && key == 'reference' && this._references != null && obj < this._references.length) {
            return new DecodedEntity.short(`${obj} (${this._references[obj].name})`);
        }else {
            return new DecodedEntity.short(obj.toString());
        }
    }
    decodeLibrary(obj : LibraryWrapper) : DecodedEntity {
        try {
            let linked : any = obj._linked;
            let unlinked : core.DartList<any> = obj._unlinked;
            this._dependencies = linked.dependencies;
            let result : core.DartMap<string,core.DartObject> = linked.toMap();
            result.remove('units');
            result.set('defining compilation unit',new UnitWrapper(op(Op.INDEX,linked.units,0),unlinked[0]));
            for(let i : number = 1; i < linked.units.length; i++){
                let partUri : string = op(Op.INDEX,unlinked[0].publicNamespace.parts,i - 1);
                result.set(`part ${convert.properties.JSON.encode(partUri)}`,new UnitWrapper(op(Op.INDEX,linked.units,i),unlinked[i]));
            }
            return this.decodeMap(result);
        } finally {
            this._dependencies = null;
        }
    }
    decodeMap(map : core.DartMap<string,core.DartObject>) : DecodedEntity {
        let parts : core.DartMap<string,DecodedEntity> = new core.DartMap.literal([
        ]);
        map = this.reorderMap(map);
        map.forEach((key : string,value : core.DartObject) =>  {
            if (is(value, "string") && new core.DartString(value).isEmpty) {
                return;
            }
            if (isEnum(value) && op(Op.EQUALS,(value as any).index,0)) {
                return;
            }
            if (is(value, "number") && value == 0) {
                return;
            }
            if (is(value, "boolean") && value == false) {
                return;
            }
            if (op(Op.EQUALS,value,null)) {
                return;
            }
            if (is(value, core.DartList<any>)) {
                if (value.isEmpty) {
                    return;
                }
                let entity : DecodedEntity = this.decode(value,key);
                if (is(entity, BrokenEntity)) {
                    for(let i : number = 0; i < value.length; i++){
                        parts.set(`${key}[${i}]`,this.decode(value[i],key));
                    }
                    return;
                }else {
                    parts.set(key,entity);
                }
            }
            parts.set(key,this.decode(value,key));
        });
        return new DecodedEntity.group('{',parts,'}',true);
    }
    decodePackageBundle(bundle : any) : DecodedEntity {
        let units : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        let seenUnits : core.DartSet<string> = new core.DartSet<string>();
        for(let i : number = 0; i < bundle.unlinkedUnits.length; i++){
            units.set(op(Op.INDEX,bundle.unlinkedUnitUris,i),op(Op.INDEX,bundle.unlinkedUnits,i));
        }
        let restOfMap : core.DartMap<string,core.DartObject> = bundle.toMap();
        let result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        result.set('version',new DecodedEntity.short(`${bundle.majorVersion}.${bundle.minorVersion}`));
        restOfMap.remove('majorVersion');
        restOfMap.remove('minorVersion');
        result.set('linkedLibraryUris',restOfMap.get('linkedLibraryUris'));
        result.set('unlinkedUnitUris',restOfMap.get('unlinkedUnitUris'));
        for(let i : number = 0; i < bundle.linkedLibraries.length; i++){
            let libraryUriString : string = op(Op.INDEX,bundle.linkedLibraryUris,i);
            let libraryUri : lib6.Uri = lib6.Uri.parse(libraryUriString);
            let unlinkedDefiningUnit : any = units.get(libraryUriString);
            seenUnits.add(libraryUriString);
            let libraryUnits : core.DartList<any> = new core.DartList.literal<any>(unlinkedDefiningUnit);
            let linkedLibrary : any = op(Op.INDEX,bundle.linkedLibraries,i);
            for(let j : number = 1; j < linkedLibrary.units.length; j++){
                let partUriString : string = resolveRelativeUri(libraryUri,lib6.Uri.parse(op(Op.INDEX,unlinkedDefiningUnit.publicNamespace.parts,j - 1))).toString();
                libraryUnits.add(units.get(partUriString));
                seenUnits.add(partUriString);
            }
            result.set(`library ${convert.properties.JSON.encode(libraryUriString)}`,new LibraryWrapper(linkedLibrary,libraryUnits));
        }
        for(let uriString of units.keys) {
            if (seenUnits.contains(uriString)) {
                continue;
            }
            result.set(`orphan unit ${convert.properties.JSON.encode(uriString)}`,new UnitWrapper(null,units.get(uriString)));
        }
        restOfMap.remove('linkedLibraries');
        restOfMap.remove('linkedLibraryUris');
        restOfMap.remove('unlinkedUnits');
        restOfMap.remove('unlinkedUnitUris');
        result.addAll(restOfMap);
        return this.decodeMap(result);
    }
    decodeReference(obj : ReferenceWrapper) : DecodedEntity {
        let result : core.DartMap<string,core.DartObject> = obj._unlinked != null ? obj._unlinked.toMap() : new core.DartMap.literal([
            ['linkedOnly',true]]);
        if (obj._linked != null) {
            this.mergeMaps(result,obj._linked.toMap());
        }
        return this.decodeMap(result);
    }
    decodeUnit(obj : UnitWrapper) : DecodedEntity {
        try {
            let linked : any = obj._linked;
            let unlinked : any = (obj._unlinked || new bare.createInstance(any,null));
            let unlinkedMap : core.DartMap<string,core.DartObject> = unlinked.toMap();
            let linkedMap : core.DartMap<string,core.DartObject> = linked != null ? linked.toMap() : new core.DartMap.literal([
            ]);
            let result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
            ]);
            let references : core.DartList<ReferenceWrapper> = new core.DartList.literal<ReferenceWrapper>();
            let numReferences : number = linked != null ? linked.references.length : unlinked.references.length;
            for(let i : number = 0; i < numReferences; i++){
                references.add(new ReferenceWrapper(linked != null ? op(Op.INDEX,linked.references,i) : null,i < unlinked.references.length ? op(Op.INDEX,unlinked.references,i) : null));
            }
            result.set('references',references);
            this._references = references;
            unlinkedMap.remove('references');
            linkedMap.remove('references');
            linkedMap.forEach((key : string,value : core.DartObject) =>  {
                result.set(`linked ${key}`,value);
            });
            unlinkedMap.forEach((key : string,value : core.DartObject) =>  {
                result.set(key,value);
            });
            return this.decodeMap(result);
        } finally {
            this._references = null;
        }
    }
    dumpPackageBundle(bundle : any) : core.DartList<string> {
        let decoded : DecodedEntity = this.decode(bundle,'PackageBundle');
        return decoded.getLines();
    }
    mergeMaps(result : core.DartMap<string,core.DartObject>,other : core.DartMap<string,core.DartObject>) : void {
        other.forEach((key : string,value : core.DartObject) =>  {
            if (is(value, "string") && new core.DartString(value).isEmpty) {
                return;
            }
            if (result.containsKey(key)) {
                let oldValue : core.DartObject = result.get(key);
                if (is(oldValue, "string") && new core.DartString(oldValue).isEmpty) {
                    result.set(key,value);
                }else {
                    throw new core.Exception(`Duplicate values for ${key}: ${oldValue} and ${value}`);
                }
            }else {
                result.set(key,value);
            }
        });
    }
    reorderMap(map : core.DartMap<string,core.DartObject>) : core.DartMap<string,core.DartObject> {
        let result : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        if (map.containsKey('name')) {
            result.set('name',map.get('name'));
        }
        result.addAll(map);
        return result;
    }
}

export namespace UnbrokenEntity {
    export type Constructors = 'UnbrokenEntity';
    export type Interface = Omit<UnbrokenEntity, Constructors>;
}
@DartClass
@Implements(DecodedEntity)
export class UnbrokenEntity implements DecodedEntity.Interface {
    _s : string;

    constructor(_s : string) {
    }
    @defaultConstructor
    UnbrokenEntity(_s : string) {
        this._s = _s;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLines() : core.DartList<string> {
        return new core.DartList.literal<string>(this._s);
    }
}

export namespace UnitWrapper {
    export type Constructors = 'UnitWrapper';
    export type Interface = Omit<UnitWrapper, Constructors>;
}
@DartClass
export class UnitWrapper {
    _linked : any;

    _unlinked : any;

    constructor(_linked : any,_unlinked : any) {
    }
    @defaultConstructor
    UnitWrapper(_linked : any,_unlinked : any) {
        this._linked = _linked;
        this._unlinked = _unlinked;
    }
}

export class properties {
    private static __$MAX_LINE_LENGTH : number;
    static get MAX_LINE_LENGTH() : number { 
        if (this.__$MAX_LINE_LENGTH===undefined) {
            this.__$MAX_LINE_LENGTH = 80;
        }
        return this.__$MAX_LINE_LENGTH;
    }
    static set MAX_LINE_LENGTH(__$value : number)  { 
        this.__$MAX_LINE_LENGTH = __$value;
    }

    private static __$_isEnumCache : core.DartMap<core.Type,boolean>;
    static get _isEnumCache() : core.DartMap<core.Type,boolean> { 
        if (this.__$_isEnumCache===undefined) {
            this.__$_isEnumCache = new core.DartMap.literal([
            ]);
        }
        return this.__$_isEnumCache;
    }
    static set _isEnumCache(__$value : core.DartMap<core.Type,boolean>)  { 
        this.__$_isEnumCache = __$value;
    }

}
