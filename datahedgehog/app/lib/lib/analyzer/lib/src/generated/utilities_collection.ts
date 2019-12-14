/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/utilities_collection.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as math from "@dart2ts/dart/math";

export var listsEqual : (a : core.DartList<any>,b : core.DartList<any>) => boolean = (a : core.DartList<any>,b : core.DartList<any>) : boolean =>  {
    if (core.identical(a,b)) {
        return true;
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
};
export namespace BooleanArray {
    export type Constructors = 'BooleanArray';
    export type Interface = Omit<BooleanArray, Constructors>;
}
@DartClass
export class BooleanArray {
    static get(array : number,index : number) : boolean {
        BooleanArray._checkIndex(index);
        return (array & (1 << index)) > 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    static getEnum<E extends any>(array : number,index : any) : boolean {
        return BooleanArray.get(array,index.ordinal);
    }
    static set(array : number,index : number,value : boolean) : number {
        BooleanArray._checkIndex(index);
        if (value) {
            return array | (1 << index);
        }else {
            return array & ~(1 << index);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    static setEnum<E extends any>(array : number,index : any,value : boolean) : number {
        return BooleanArray.set(array,index.ordinal,value);
    }
    static _checkIndex(index : number) : void {
        if (index < 0 || index > 30) {
            throw new core.RangeError(`Index not between 0 and 30: ${index}`);
        }
    }
    constructor() {
    }
    @defaultConstructor
    BooleanArray() {
    }
}

export namespace DirectedGraph {
    export type Constructors = 'DirectedGraph';
    export type Interface<N> = Omit<DirectedGraph<N>, Constructors>;
}
@DartClass
export class DirectedGraph<N> {
    _edges : core.DartHashMap<N,core.DartHashSet<N>>;

    get isEmpty() : boolean {
        return this._edges.isEmpty;
    }
    get nodeCount() : number {
        return this._edges.length;
    }
    get nodes() : core.DartSet<N> {
        return this._edges.keys.toSet();
    }
    addEdge(head : N,tail : N) : void {
        if (op(Op.EQUALS,op(Op.INDEX,this._edges,tail),null)) {
            op(Op.INDEX_ASSIGN,this._edges,tail,new core.DartHashSet<N>());
        }
        let tails : core.DartHashSet<N> = op(Op.INDEX,this._edges,head);
        if (op(Op.EQUALS,tails,null)) {
            tails = new core.DartHashSet<N>();
            op(Op.INDEX_ASSIGN,this._edges,head,tails);
        }
        tails.add(tail);
    }
    addNode(node : N) : void {
        let tails : core.DartHashSet<N> = op(Op.INDEX,this._edges,node);
        if (op(Op.EQUALS,tails,null)) {
            op(Op.INDEX_ASSIGN,this._edges,node,new core.DartHashSet<N>());
        }
    }
    computeTopologicalSort() : core.DartList<core.DartList<N>> {
        let finder : DirectedGraph_SccFinder<N> = new DirectedGraph_SccFinder<N>(this);
        return finder.computeTopologicalSort();
    }
    containsPath(source : N,destination : N) : boolean {
        let nodesVisited : core.DartHashSet<N> = new core.DartHashSet<N>();
        return this._containsPathInternal(source,destination,nodesVisited);
    }
    findCycleContaining(node : N) : core.DartList<N> {
        if (op(Op.EQUALS,node,null)) {
            throw new core.ArgumentError();
        }
        let finder : DirectedGraph_SccFinder<N> = new DirectedGraph_SccFinder<N>(this);
        return finder.componentContaining(node);
    }
    getTails(head : N) : core.DartSet<N> {
        let tails : core.DartHashSet<N> = op(Op.INDEX,this._edges,head);
        if (op(Op.EQUALS,tails,null)) {
            return new core.DartHashSet<N>();
        }
        return tails;
    }
    removeAllNodes(nodes : core.DartList<N>) : void {
        for(let node of nodes) {
            this.removeNode(node);
        }
    }
    removeEdge(head : N,tail : N) : void {
        let tails : core.DartHashSet<N> = op(Op.INDEX,this._edges,head);
        if (tails != null) {
            tails.remove(tail);
        }
    }
    removeNode(node : N) : void {
        this._edges.remove(node);
        for(let tails of this._edges.values) {
            tails.remove(node);
        }
    }
    removeSink() : N {
        let sink : N = this._findSink();
        if (op(Op.EQUALS,sink,null)) {
            return null;
        }
        this.removeNode(sink);
        return sink;
    }
    _containsPathInternal(source : N,destination : N,nodesVisited : core.DartHashSet<N>) : boolean {
        if (core.identical(source,destination)) {
            return true;
        }
        let tails : core.DartHashSet<N> = op(Op.INDEX,this._edges,source);
        if (tails != null) {
            nodesVisited.add(source);
            for(let tail of tails) {
                if (!nodesVisited.contains(tail)) {
                    if (this._containsPathInternal(tail,destination,nodesVisited)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    _findSink() : N {
        for(let key of this._edges.keys) {
            if (op(Op.INDEX,this._edges,key).isEmpty) return key;
        }
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    DirectedGraph() {
        this._edges = new core.DartHashMap<N,core.DartHashSet<N>>();
    }
}

export namespace DirectedGraph_NodeInfo {
    export type Constructors = 'DirectedGraph_NodeInfo';
    export type Interface<N> = Omit<DirectedGraph_NodeInfo<N>, Constructors>;
}
@DartClass
export class DirectedGraph_NodeInfo<N> {
    index : number;

    lowlink : number;

    onStack : boolean;

    component : core.DartList<N>;

    constructor(depth : number) {
    }
    @defaultConstructor
    DirectedGraph_NodeInfo(depth : number) {
        this.index = 0;
        this.lowlink = 0;
        this.onStack = false;
        this.index = depth;
        this.lowlink = depth;
        this.onStack = false;
    }
}

export namespace DirectedGraph_SccFinder {
    export type Constructors = 'DirectedGraph_SccFinder';
    export type Interface<N> = Omit<DirectedGraph_SccFinder<N>, Constructors>;
}
@DartClass
export class DirectedGraph_SccFinder<N> {
    _graph : DirectedGraph<N>;

    _index : number;

    _stack : core.DartList<N>;

    _nodeMap : core.DartHashMap<N,DirectedGraph_NodeInfo<N>>;

    _allComponents : core.DartList<core.DartList<N>>;

    constructor(_graph : DirectedGraph<N>) {
    }
    @defaultConstructor
    DirectedGraph_SccFinder(_graph : DirectedGraph<N>) {
        this._index = 0;
        this._stack = new core.DartList<N>();
        this._nodeMap = new core.DartHashMap<N,DirectedGraph_NodeInfo<N>>();
        this._allComponents = new core.DartList<core.DartList<N>>();
        super.DartObject();
        this._graph = _graph;
    }
    componentContaining(node : N) : core.DartList<N> {
        return this._strongConnect(node).component;
    }
    computeTopologicalSort() : core.DartList<core.DartList<N>> {
        for(let node of this._graph._edges.keys.toSet()) {
            let nodeInfo : DirectedGraph_NodeInfo<N> = op(Op.INDEX,this._nodeMap,node);
            if (op(Op.EQUALS,nodeInfo,null)) {
                this._strongConnect(node);
            }
        }
        return this._allComponents;
    }
    _pop() : N {
        let node : N = this._stack.removeAt(this._stack.length - 1);
        op(Op.INDEX,this._nodeMap,node).onStack = false;
        return node;
    }
    _push(node : N) : void {
        op(Op.INDEX,this._nodeMap,node).onStack = true;
        this._stack.add(node);
    }
    _strongConnect(v : N) : DirectedGraph_NodeInfo<N> {
        let vInfo : DirectedGraph_NodeInfo<N> = new DirectedGraph_NodeInfo<N>(this._index++);
        op(Op.INDEX_ASSIGN,this._nodeMap,v,vInfo);
        this._push(v);
        let tails : core.DartHashSet<N> = op(Op.INDEX,this._graph._edges,v);
        if (tails != null) {
            for(let w of tails) {
                let wInfo : DirectedGraph_NodeInfo<N> = op(Op.INDEX,this._nodeMap,w);
                if (op(Op.EQUALS,wInfo,null)) {
                    wInfo = this._strongConnect(w);
                    vInfo.lowlink = math.min(vInfo.lowlink,wInfo.lowlink);
                }else if (wInfo.onStack) {
                    vInfo.lowlink = math.min(vInfo.lowlink,wInfo.index);
                }
            }
        }
        if (vInfo.lowlink == vInfo.index) {
            let component : core.DartList<N> = new core.DartList<N>();
            let w : N;
            do{
                w = this._pop();
                component.add(w);
                op(Op.INDEX,this._nodeMap,w).component = component;
            } while (!core.identical(w,v));
            this._allComponents.add(component);
        }
        return vInfo;
    }
}

export namespace MapIterator {
    export type Constructors = 'MapIterator';
    export type Interface<K,V> = Omit<MapIterator<K,V>, Constructors>;
}
@DartClass
export class MapIterator<K,V> {
    @AbstractProperty
    get key() : K{ throw 'abstract'}
    @AbstractProperty
    get value() : V{ throw 'abstract'}
    set value(newValue : V){ throw 'abstract'}
    @Abstract
    moveNext() : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    MapIterator() {
    }
}

export namespace MultipleMapIterator {
    export type Constructors = 'MultipleMapIterator';
    export type Interface<K,V> = Omit<MultipleMapIterator<K,V>, Constructors>;
}
@DartClass
@Implements(MapIterator)
export class MultipleMapIterator<K,V> implements MapIterator.Interface<K,V> {
    _iterators : core.DartList<MapIterator<K,V>>;

    _iteratorIndex : number;

    _currentIterator : MapIterator<K,V>;

    constructor(maps : core.DartList<core.DartMap<K,V>>) {
    }
    @defaultConstructor
    MultipleMapIterator(maps : core.DartList<core.DartMap<K,V>>) {
        this._iteratorIndex = -1;
        let count : number = maps.length;
        this._iterators = new core.DartList<MapIterator<K,V>>(count);
        for(let i : number = 0; i < count; i++){
            this._iterators[i] = new SingleMapIterator<K,V>(maps[i]);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get key() : K {
        if (op(Op.EQUALS,this._currentIterator,null)) {
            throw new core.StateError('No element');
        }
        return this._currentIterator.key;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : V {
        if (op(Op.EQUALS,this._currentIterator,null)) {
            throw new core.StateError('No element');
        }
        return this._currentIterator.value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set value(newValue : V) {
        if (op(Op.EQUALS,this._currentIterator,null)) {
            throw new core.StateError('No element');
        }
        this._currentIterator.value = newValue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveNext() : boolean {
        if (this._iteratorIndex < 0) {
            if (this._iterators.length == 0) {
                this._currentIterator = null;
                return false;
            }
            if (this._advanceToNextIterator()) {
                return true;
            }else {
                this._currentIterator = null;
                return false;
            }
        }
        if (this._currentIterator.moveNext()) {
            return true;
        }else if (this._advanceToNextIterator()) {
            return true;
        }else {
            this._currentIterator = null;
            return false;
        }
    }
    _advanceToNextIterator() : boolean {
        this._iteratorIndex++;
        while (this._iteratorIndex < this._iterators.length){
            let iterator : MapIterator<K,V> = this._iterators[this._iteratorIndex];
            if (iterator.moveNext()) {
                this._currentIterator = iterator;
                return true;
            }
            this._iteratorIndex++;
        }
        return false;
    }
}

export namespace SingleMapIterator {
    export type Constructors = 'SingleMapIterator';
    export type Interface<K,V> = Omit<SingleMapIterator<K,V>, Constructors>;
}
@DartClass
@Implements(MapIterator)
export class SingleMapIterator<K,V> implements MapIterator.Interface<K,V> {
    _map : core.DartMap<K,V>;

    _keyIterator : core.DartIterator<K>;

    _currentKey : K;

    _currentValue : V;

    constructor(_map : core.DartMap<K,V>) {
    }
    @defaultConstructor
    SingleMapIterator(_map : core.DartMap<K,V>) {
        this._map = _map;
        this._keyIterator = this._map.keys.iterator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get key() : K {
        if (op(Op.EQUALS,this._currentKey,null)) {
            throw new core.StateError('No element');
        }
        return this._currentKey;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : V {
        if (op(Op.EQUALS,this._currentKey,null)) {
            throw new core.StateError('No element');
        }
        if (op(Op.EQUALS,this._currentValue,null)) {
            this._currentValue = this._map.get(this._currentKey);
        }
        return this._currentValue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set value(newValue : V) {
        if (op(Op.EQUALS,this._currentKey,null)) {
            throw new core.StateError('No element');
        }
        this._currentValue = newValue;
        this._map.set(this._currentKey,newValue);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveNext() : boolean {
        if (this._keyIterator.moveNext()) {
            this._currentKey = this._keyIterator.current;
            this._currentValue = null;
            return true;
        }else {
            this._currentKey = null;
            return false;
        }
    }
    static forMap(map : core.DartMap<any,any>) : SingleMapIterator<any,any> {
        return new SingleMapIterator<any,any>(map);
    }
}

export namespace TokenMap {
    export type Constructors = 'TokenMap';
    export type Interface = Omit<TokenMap, Constructors>;
}
@DartClass
export class TokenMap {
    _map : core.DartHashMap<any,any>;

    get(key : any) : any {
        return op(Op.INDEX,this._map,key);
    }
    put(key : any,value : any) : void {
        op(Op.INDEX_ASSIGN,this._map,key,value);
    }
    constructor() {
    }
    @defaultConstructor
    TokenMap() {
        this._map = new core.DartHashMap<any,any>();
    }
}

export class properties {
}
