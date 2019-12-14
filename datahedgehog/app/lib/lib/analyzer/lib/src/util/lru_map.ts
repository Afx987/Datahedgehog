/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/util/lru_map.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace LRUMap {
    export type Constructors = 'LRUMap';
    export type Interface<K,V> = Omit<LRUMap<K,V>, Constructors>;
}
@DartClass
export class LRUMap<K,V> {
    _map : core.DartLinkedHashMap<K,V>;

    _maxSize : number;

    _handler : <K,V>(key : any,value : any) => any;

    constructor(_maxSize : number,_handler? : <K,V>(key : any,value : any) => any) {
    }
    @defaultConstructor
    LRUMap(_maxSize : number,_handler? : <K,V>(key : any,value : any) => any) {
        this._map = new core.DartLinkedHashMap<K,V>();
        this._maxSize = _maxSize;
        this._handler = _handler;
    }
    get(key : K) : V {
        let value : V = this._map.remove(key);
        if (value != null) {
            op(Op.INDEX_ASSIGN,this._map,key,value);
        }
        return value;
    }
    put(key : K,value : V) : void {
        this._map.remove(key);
        op(Op.INDEX_ASSIGN,this._map,key,value);
        if (this._map.length > this._maxSize) {
            let evictedKey : K = this._map.keys.first;
            let evictedValue : V = this._map.remove(evictedKey);
            if (this._handler != null) {
                this._handler(evictedKey,evictedValue);
            }
        }
    }
    remove(key : K) : void {
        this._map.remove(key);
    }
}

export class properties {
}
