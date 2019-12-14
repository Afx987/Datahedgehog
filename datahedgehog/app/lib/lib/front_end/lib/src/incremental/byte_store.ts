/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/incremental/byte_store.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ByteStore {
    export type Constructors = 'ByteStore';
    export type Interface = Omit<ByteStore, Constructors>;
}
@DartClass
export class ByteStore {
    @Abstract
    get(key : string) : core.DartList<number>{ throw 'abstract'}
    @Abstract
    put(key : string,bytes : core.DartList<number>) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ByteStore() {
    }
}

export namespace MemoryByteStore {
    export type Constructors = 'MemoryByteStore';
    export type Interface = Omit<MemoryByteStore, Constructors>;
}
@DartClass
@Implements(ByteStore)
export class MemoryByteStore implements ByteStore.Interface {
    _map : core.DartMap<string,core.DartList<number>>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(key : string) : core.DartList<number> {
        return this._map.get(key);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    put(key : string,bytes : core.DartList<number>) : void {
        this._map.set(key,bytes);
    }
    constructor() {
    }
    @defaultConstructor
    MemoryByteStore() {
        this._map = new core.DartMap.literal([
        ]);
    }
}

export namespace MemoryCachingByteStore {
    export type Constructors = 'MemoryCachingByteStore';
    export type Interface = Omit<MemoryCachingByteStore, Constructors>;
}
@DartClass
@Implements(ByteStore)
export class MemoryCachingByteStore implements ByteStore.Interface {
    _store : ByteStore;

    _maxSizeBytes : number;

    _map;

    _currentSizeBytes : number;

    constructor(_store : ByteStore,_maxSizeBytes : number) {
    }
    @defaultConstructor
    MemoryCachingByteStore(_store : ByteStore,_maxSizeBytes : number) {
        this._map = new core.DartLinkedHashMap<string,core.DartList<number>>();
        this._currentSizeBytes = 0;
        this._store = _store;
        this._maxSizeBytes = _maxSizeBytes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(key : string) : core.DartList<number> {
        let bytes : core.DartList<number> = this._map.remove(key);
        if (bytes == null) {
            bytes = this._store.get(key);
            if (bytes != null) {
                op(Op.INDEX_ASSIGN,this._map,key,bytes);
                this._currentSizeBytes += bytes.length;
                this._evict();
            }
        }else {
            op(Op.INDEX_ASSIGN,this._map,key,bytes);
        }
        return bytes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    put(key : string,bytes : core.DartList<number>) : void {
        this._store.put(key,bytes);
        this._currentSizeBytes -= (((t)=>(!!t)?t.length:null)(op(Op.INDEX,this._map,key)) || 0);
        op(Op.INDEX_ASSIGN,this._map,key,bytes);
        this._currentSizeBytes += bytes.length;
        this._evict();
    }
    _evict() : void {
        while (this._currentSizeBytes > this._maxSizeBytes){
            if (this._map.isEmpty) {
                /* TODO (AssertStatementImpl) : assert (false); */;
                this._currentSizeBytes = 0;
                break;
            }
            let key : string = this._map.keys.first;
            let bytes : core.DartList<number> = this._map.remove(key);
            this._currentSizeBytes -= bytes.length;
        }
    }
}

export namespace NullByteStore {
    export type Constructors = 'NullByteStore';
    export type Interface = Omit<NullByteStore, Constructors>;
}
@DartClass
@Implements(ByteStore)
export class NullByteStore implements ByteStore.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get(key : string) : core.DartList<number> {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    put(key : string,bytes : core.DartList<number>) : void {
    }
    constructor() {
    }
    @defaultConstructor
    NullByteStore() {
    }
}

export class properties {
}
