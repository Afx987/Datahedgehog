/** Library asset:datahedgehog_monitor/lib/lib/collection/collection.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as _internal from "@dart2ts/dart/_internal";
import * as math from "@dart2ts/dart/math";

export var _defaultCompare : <K>() => <T>(a : K,b : K) => number = <K>() : <T>(a : K,b : K) => number =>  {
    let compare : core.DartObject = core.DartComparable.compare.bind(core.DartComparable);
    if (is(compare, <T>(a : K,b : K) => number)) {
        return compare;
    }
    return _dynamicCompare;
};
export var _dynamicCompare : (a : any,b : any) => number = (a : any,b : any) : number =>  {
    return core.DartComparable.compare(a,b);
};
export var _defaultHashCode : (a : any) => number = (a : any) : number =>  {
    return a.hashCode;
};
export var _isToStringVisiting : (o : core.DartObject) => boolean = (o : core.DartObject) : boolean =>  {
    for(let i : number = 0; i < properties._toStringVisiting.length; i++){
        if (core.identical(o,properties._toStringVisiting[i])) return true;
    }
    return false;
};
export var _iterablePartsToStrings : (iterable : core.DartIterable<any>,parts : core.DartList<any>) => void = (iterable : core.DartIterable<any>,parts : core.DartList<any>) : void =>  {
    let LENGTH_LIMIT : number = 80;
    let HEAD_COUNT : number = 3;
    let TAIL_COUNT : number = 2;
    let MAX_COUNT : number = 100;
    let OVERHEAD : number = 2;
    let ELLIPSIS_SIZE : number = 3;
    let length : number = 0;
    let count : number = 0;
    let it : core.DartIterator<any> = iterable.iterator;
    while (length < LENGTH_LIMIT || count < HEAD_COUNT){
        if (!it.moveNext()) return;
        let next : string = `${it.current}`;
        parts.add(next);
        length += new core.DartString(next).length + OVERHEAD;
        count++;
    }
    let penultimateString : string;
    let ultimateString : string;
    let penultimate = null;
    let ultimate = null;
    if (!it.moveNext()) {
        if (count <= HEAD_COUNT + TAIL_COUNT) return;
        ultimateString = parts.removeLast();
        penultimateString = parts.removeLast();
    }else {
        penultimate = it.current;
        count++;
        if (!it.moveNext()) {
            if (count <= HEAD_COUNT + 1) {
                parts.add(`${penultimate}`);
                return;
            }
            ultimateString = `${penultimate}`;
            penultimateString = parts.removeLast();
            length += new core.DartString(ultimateString).length + OVERHEAD;
        }else {
            ultimate = it.current;
            count++;
            /* TODO (AssertStatementImpl) : assert (count < MAX_COUNT); */;
            while (it.moveNext()){
                penultimate = ultimate;
                ultimate = it.current;
                count++;
                if (count > MAX_COUNT) {
                    while (length > LENGTH_LIMIT - ELLIPSIS_SIZE - OVERHEAD && count > HEAD_COUNT){
                        length -= op(Op.PLUS,parts.removeLast().length,OVERHEAD);
                        count--;
                    }
                    parts.add("...");
                    return;
                }
            }
            penultimateString = `${penultimate}`;
            ultimateString = `${ultimate}`;
            length += new core.DartString(ultimateString).length + new core.DartString(penultimateString).length + 2 * OVERHEAD;
        }
    }
    let elision : string = null;
    if (count > parts.length + TAIL_COUNT) {
        elision = "...";
        length += ELLIPSIS_SIZE + OVERHEAD;
    }
    while (length > LENGTH_LIMIT && parts.length > HEAD_COUNT){
        length -= op(Op.PLUS,parts.removeLast().length,OVERHEAD);
        if (elision == null) {
            elision = "...";
            length += ELLIPSIS_SIZE + OVERHEAD;
        }
    }
    if (elision != null) {
        parts.add(elision);
    }
    parts.add(penultimateString);
    parts.add(ultimateString);
};
export var _defaultEquals : (a : any,b : any) => boolean = (a : any,b : any) : boolean =>  {
    return op(Op.EQUALS,a,b);
};
export namespace LinkedHashSet {
    export type Constructors = never;
    export type Interface<E> = Omit<LinkedHashSet<E>, Constructors>;
}
@DartClass
@Implements(HashSet)
export class LinkedHashSet<E> implements HashSet.Interface<E> {
    constructor(_namedArguments? : {equals? : <E>(e1 : E,e2 : E) => boolean,hashCode? : <E>(e : E) => number,isValidKey? : <E>(potentialKey : any) => boolean}) {
    }
    @defaultFactory
    static $LinkedHashSet<E>(_namedArguments? : {equals? : <E>(e1 : E,e2 : E) => boolean,hashCode? : <E>(e : E) => number,isValidKey? : <E>(potentialKey : any) => boolean}) : LinkedHashSet<E> {
        let {equals,hashCode,isValidKey} = Object.assign({
        }, _namedArguments );
    }
    @namedFactory
    static $identity<E>() : LinkedHashSet<E> {
    }
    static identity : new<E>() => LinkedHashSet<E>;

    @namedFactory
    static $from<E>(elements : core.DartIterable<any>) : LinkedHashSet<E> {
        let result : LinkedHashSet<E> = new LinkedHashSet<E>();
        for(let element of elements) {
            let e : E = element as core.DartObject;
            result.add(e);
        }
        return result;
    }
    static from : new<E>(elements : core.DartIterable<any>) => LinkedHashSet<E>;

    @Abstract
    forEach(action : <E>(element : E) => void) : void{ throw 'abstract'}
    @AbstractProperty
    get iterator() : core.DartIterator<E>{ throw 'abstract'}
}

export namespace HashMap {
    export type Constructors = never;
    export type Interface<K,V> = Omit<HashMap<K,V>, Constructors>;
}
@DartClass
@Implements(core.DartMap)
export class HashMap<K,V> implements core.DartMap.Interface<K,V> {
    constructor(_namedArguments? : {equals? : <K,V>(key1 : K,key2 : K) => boolean,hashCode? : <K,V>(key : K) => number,isValidKey? : <K,V>(potentialKey : any) => boolean}) {
    }
    @defaultFactory
    static $HashMap<K,V>(_namedArguments? : {equals? : <K,V>(key1 : K,key2 : K) => boolean,hashCode? : <K,V>(key : K) => number,isValidKey? : <K,V>(potentialKey : any) => boolean}) : HashMap<K,V> {
        let {equals,hashCode,isValidKey} = Object.assign({
        }, _namedArguments );
    }
    @namedFactory
    static $identity<K,V>() : HashMap<K,V> {
    }
    static identity : new<K,V>() => HashMap<K,V>;

    @namedFactory
    static $from<K,V>(other : core.DartMap<any,any>) : HashMap<K,V> {
        let result : HashMap<K,V> = new HashMap<K,V>();
        other.forEach((k : any,v : any) =>  {
            op(Op.INDEX_ASSIGN,result,k as core.DartObject,v as core.DartObject);
        });
        return result;
    }
    static from : new<K,V>(other : core.DartMap<any,any>) => HashMap<K,V>;

    @namedFactory
    static $fromIterable<K,V>(iterable : core.DartIterable<any>,_namedArguments? : {key? : <K,V>(element : any) => K,value? : <K,V>(element : any) => V}) : HashMap<K,V> {
        let {key,value} = Object.assign({
        }, _namedArguments );
        let map : HashMap<K,V> = new HashMap<K,V>();
        Maps._fillMapWithMappedIterable(map,iterable,key,value);
        return map;
    }
    static fromIterable : new<K,V>(iterable : core.DartIterable<any>,_namedArguments? : {key? : <K,V>(element : any) => K,value? : <K,V>(element : any) => V}) => HashMap<K,V>;

    @namedFactory
    static $fromIterables<K,V>(keys : core.DartIterable<K>,values : core.DartIterable<V>) : HashMap<K,V> {
        let map : HashMap<K,V> = new HashMap<K,V>();
        Maps._fillMapWithIterables(map,keys,values);
        return map;
    }
    static fromIterables : new<K,V>(keys : core.DartIterable<K>,values : core.DartIterable<V>) => HashMap<K,V>;

}

export namespace _SplayTreeValueIterable {
    export type Constructors = _internal.EfficientLengthIterable.Constructors | '_SplayTreeValueIterable';
    export type Interface<K,V> = Omit<_SplayTreeValueIterable<K,V>, Constructors>;
}
@DartClass
export class _SplayTreeValueIterable<K,V> extends _internal.EfficientLengthIterable<V> {
    _map : SplayTreeMap<K,V>;

    constructor(_map : SplayTreeMap<K,V>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SplayTreeValueIterable(_map : SplayTreeMap<K,V>) {
        this._map = _map;
    }
    get length() : number {
        return this._map._count;
    }
    get isEmpty() : boolean {
        return this._map._count == 0;
    }
    get iterator() : core.DartIterator<V> {
        return new _SplayTreeValueIterator<K,V>(this._map);
    }
}

export namespace HashSet {
    export type Constructors = never;
    export type Interface<E> = Omit<HashSet<E>, Constructors>;
}
@DartClass
@Implements(core.DartSet)
export class HashSet<E> implements core.DartSet.Interface<E> {
    constructor(_namedArguments? : {equals? : <E>(e1 : E,e2 : E) => boolean,hashCode? : <E>(e : E) => number,isValidKey? : <E>(potentialKey : any) => boolean}) {
    }
    @defaultFactory
    static $HashSet<E>(_namedArguments? : {equals? : <E>(e1 : E,e2 : E) => boolean,hashCode? : <E>(e : E) => number,isValidKey? : <E>(potentialKey : any) => boolean}) : HashSet<E> {
        let {equals,hashCode,isValidKey} = Object.assign({
        }, _namedArguments );
    }
    @namedFactory
    static $identity<E>() : HashSet<E> {
    }
    static identity : new<E>() => HashSet<E>;

    @namedFactory
    static $from<E>(elements : core.DartIterable<any>) : HashSet<E> {
        let result : HashSet<E> = new HashSet<E>();
        for(let e of elements) {
            let element : E = e as core.DartObject;
            result.add(element);
        }
        return result;
    }
    static from : new<E>(elements : core.DartIterable<any>) => HashSet<E>;

    @AbstractProperty
    get iterator() : core.DartIterator<E>{ throw 'abstract'}
}

export namespace HasNextIterator {
    export type Constructors = 'HasNextIterator';
    export type Interface<E> = Omit<HasNextIterator<E>, Constructors>;
}
@DartClass
export class HasNextIterator<E> {
    private static __$_HAS_NEXT_AND_NEXT_IN_CURRENT : number;
    static get _HAS_NEXT_AND_NEXT_IN_CURRENT() : number { 
        if (this.__$_HAS_NEXT_AND_NEXT_IN_CURRENT===undefined) {
            this.__$_HAS_NEXT_AND_NEXT_IN_CURRENT = 0;
        }
        return this.__$_HAS_NEXT_AND_NEXT_IN_CURRENT;
    }

    private static __$_NO_NEXT : number;
    static get _NO_NEXT() : number { 
        if (this.__$_NO_NEXT===undefined) {
            this.__$_NO_NEXT = 1;
        }
        return this.__$_NO_NEXT;
    }

    private static __$_NOT_MOVED_YET : number;
    static get _NOT_MOVED_YET() : number { 
        if (this.__$_NOT_MOVED_YET===undefined) {
            this.__$_NOT_MOVED_YET = 2;
        }
        return this.__$_NOT_MOVED_YET;
    }

    _iterator : core.DartIterator<E>;

    _state : number;

    constructor(_iterator : core.DartIterator<E>) {
    }
    @defaultConstructor
    HasNextIterator(_iterator : core.DartIterator<E>) {
        this._state = HasNextIterator._NOT_MOVED_YET;
        this._iterator = _iterator;
    }
    get hasNext() : boolean {
        if (this._state == HasNextIterator._NOT_MOVED_YET) this._move();
        return this._state == HasNextIterator._HAS_NEXT_AND_NEXT_IN_CURRENT;
    }
    next() : E {
        if (!this.hasNext) throw new core.StateError("No more elements");
        /* TODO (AssertStatementImpl) : assert (_state == _HAS_NEXT_AND_NEXT_IN_CURRENT); */;
        let result : E = this._iterator.current;
        this._move();
        return result;
    }
    _move() : void {
        if (this._iterator.moveNext()) {
            this._state = HasNextIterator._HAS_NEXT_AND_NEXT_IN_CURRENT;
        }else {
            this._state = HasNextIterator._NO_NEXT;
        }
    }
}

export namespace LinkedHashMap {
    export type Constructors = never;
    export type Interface<K,V> = Omit<LinkedHashMap<K,V>, Constructors>;
}
@DartClass
@Implements(HashMap)
export class LinkedHashMap<K,V> implements HashMap.Interface<K,V> {
    constructor(_namedArguments? : {equals? : <K,V>(key1 : K,key2 : K) => boolean,hashCode? : <K,V>(key : K) => number,isValidKey? : <K,V>(potentialKey : any) => boolean}) {
    }
    @defaultFactory
    static $LinkedHashMap<K,V>(_namedArguments? : {equals? : <K,V>(key1 : K,key2 : K) => boolean,hashCode? : <K,V>(key : K) => number,isValidKey? : <K,V>(potentialKey : any) => boolean}) : LinkedHashMap<K,V> {
        let {equals,hashCode,isValidKey} = Object.assign({
        }, _namedArguments );
    }
    @namedFactory
    static $identity<K,V>() : LinkedHashMap<K,V> {
    }
    static identity : new<K,V>() => LinkedHashMap<K,V>;

    @namedFactory
    static $from<K,V>(other : core.DartMap<any,any>) : LinkedHashMap<K,V> {
        let result : LinkedHashMap<K,V> = new LinkedHashMap<K,V>();
        other.forEach((k : any,v : any) =>  {
            op(Op.INDEX_ASSIGN,result,k as core.DartObject,v as core.DartObject);
        });
        return result;
    }
    static from : new<K,V>(other : core.DartMap<any,any>) => LinkedHashMap<K,V>;

    @namedFactory
    static $fromIterable<K,V>(iterable : core.DartIterable<any>,_namedArguments? : {key? : <K,V>(element : any) => K,value? : <K,V>(element : any) => V}) : LinkedHashMap<K,V> {
        let {key,value} = Object.assign({
        }, _namedArguments );
        let map : LinkedHashMap<K,V> = new LinkedHashMap<K,V>();
        Maps._fillMapWithMappedIterable(map,iterable,key,value);
        return map;
    }
    static fromIterable : new<K,V>(iterable : core.DartIterable<any>,_namedArguments? : {key? : <K,V>(element : any) => K,value? : <K,V>(element : any) => V}) => LinkedHashMap<K,V>;

    @namedFactory
    static $fromIterables<K,V>(keys : core.DartIterable<K>,values : core.DartIterable<V>) : LinkedHashMap<K,V> {
        let map : LinkedHashMap<K,V> = new LinkedHashMap<K,V>();
        Maps._fillMapWithIterables(map,keys,values);
        return map;
    }
    static fromIterables : new<K,V>(keys : core.DartIterable<K>,values : core.DartIterable<V>) => LinkedHashMap<K,V>;

}

export namespace IterableMixin {
    export type Constructors = 'IterableMixin';
    export type Interface<E> = Omit<IterableMixin<E>, Constructors>;
}
@DartClass
@Implements(core.DartIterable)
export class IterableMixin<E> implements core.DartIterable.Interface<E> {
    map<T>(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        return new _internal.MappedIterable<E,T>(this,f);
    }
    where(f : <E>(element : E) => boolean) : core.DartIterable<E> {
        return new _internal.WhereIterable<E>(this,f);
    }
    expand<T>(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        return new _internal.ExpandIterable<E,T>(this,f);
    }
    contains(element : core.DartObject) : boolean {
        for(let e of this) {
            if (op(Op.EQUALS,e,element)) return true;
        }
        return false;
    }
    forEach(f : <E>(element : E) => void) : void {
        for(let element of this) f(element);
    }
    reduce(combine : <E>(value : E,element : E) => E) : E {
        let iterator : core.DartIterator<E> = this.iterator;
        if (!iterator.moveNext()) {
            throw _internal.IterableElementError.noElement();
        }
        let value : E = iterator.current;
        while (iterator.moveNext()){
            value = combine(value,iterator.current);
        }
        return value;
    }
    fold<T>(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        let value = initialValue;
        for(let element of this) value = combine(value,element);
        return value;
    }
    every(f : <E>(element : E) => boolean) : boolean {
        for(let element of this) {
            if (!f(element)) return false;
        }
        return true;
    }
    join(separator? : string) : string {
        separator = separator || "";
        let iterator : core.DartIterator<E> = this.iterator;
        if (!iterator.moveNext()) return "";
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        if (separator == null || separator == "") {
            do{
                buffer.write(`${iterator.current}`);
            } while (iterator.moveNext());
        }else {
            buffer.write(`${iterator.current}`);
            while (iterator.moveNext()){
                buffer.write(separator);
                buffer.write(`${iterator.current}`);
            }
        }
        return buffer.toString();
    }
    any(f : <E>(element : E) => boolean) : boolean {
        for(let element of this) {
            if (f(element)) return true;
        }
        return false;
    }
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        return new core.DartList.from(this,{
            growable : growable});
    }
    toSet() : core.DartSet<E> {
        return new core.DartSet.from(this);
    }
    get length() : number {
        /* TODO (AssertStatementImpl) : assert (this is! EfficientLengthIterable); */;
        let count : number = 0;
        let it : core.DartIterator<any> = this.iterator;
        while (it.moveNext()){
            count++;
        }
        return count;
    }
    get isEmpty() : boolean {
        return !this.iterator.moveNext();
    }
    get isNotEmpty() : boolean {
        return !this.isEmpty;
    }
    take(count : number) : core.DartIterable<E> {
        return new _internal.TakeIterable<E>(this,count);
    }
    takeWhile(test : <E>(value : E) => boolean) : core.DartIterable<E> {
        return new _internal.TakeWhileIterable<E>(this,test);
    }
    skip(count : number) : core.DartIterable<E> {
        return new _internal.SkipIterable<E>(this,count);
    }
    skipWhile(test : <E>(value : E) => boolean) : core.DartIterable<E> {
        return new _internal.SkipWhileIterable<E>(this,test);
    }
    get first() : E {
        let it : core.DartIterator<E> = this.iterator;
        if (!it.moveNext()) {
            throw _internal.IterableElementError.noElement();
        }
        return it.current;
    }
    get last() : E {
        let it : core.DartIterator<E> = this.iterator;
        if (!it.moveNext()) {
            throw _internal.IterableElementError.noElement();
        }
        let result : E;
        do{
            result = it.current;
        } while (it.moveNext());
        return result;
    }
    get single() : E {
        let it : core.DartIterator<E> = this.iterator;
        if (!it.moveNext()) throw _internal.IterableElementError.noElement();
        let result : E = it.current;
        if (it.moveNext()) throw _internal.IterableElementError.tooMany();
        return result;
    }
    firstWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        for(let element of this) {
            if (test(element)) return element;
        }
        if (orElse != null) return orElse();
        throw _internal.IterableElementError.noElement();
    }
    lastWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        let result : E = null;
        let foundMatching : boolean = false;
        for(let element of this) {
            if (test(element)) {
                result = element;
                foundMatching = true;
            }
        }
        if (foundMatching) return result;
        if (orElse != null) return orElse();
        throw _internal.IterableElementError.noElement();
    }
    singleWhere(test : <E>(value : E) => boolean) : E {
        let result : E = null;
        let foundMatching : boolean = false;
        for(let element of this) {
            if (test(element)) {
                if (foundMatching) {
                    throw _internal.IterableElementError.tooMany();
                }
                result = element;
                foundMatching = true;
            }
        }
        if (foundMatching) return result;
        throw _internal.IterableElementError.noElement();
    }
    elementAt(index : number) : E {
        if (isNot(index, "number")) throw new core.ArgumentError.notNull("index");
        core.RangeError.checkNotNegative(index,"index");
        let elementIndex : number = 0;
        for(let element of this) {
            if (index == elementIndex) return element;
            elementIndex++;
        }
        throw new core.RangeError.index(index,this,"index",null,elementIndex);
    }
    toString() : string {
        return IterableBase.iterableToShortString(this,'(',')');
    }
    constructor() {
    }
    @defaultConstructor
    IterableMixin() {
    }
}

export namespace LinkedList {
    export type Constructors = core.DartIterable.Constructors | 'LinkedList';
    export type Interface<E extends LinkedListEntry<E>> = Omit<LinkedList<E extends LinkedListEntry<E>>, Constructors>;
}
@DartClass
export class LinkedList<E extends LinkedListEntry<E>> extends core.DartIterable<E> {
    _modificationCount : number;

    _length : number;

    _first : E;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LinkedList() {
        this._modificationCount = 0;
        this._length = 0;
    }
    addFirst(entry : E) : void {
        this._insertBefore(this._first,entry,{
            updateFirst : true});
        this._first = entry;
    }
    add(entry : E) : void {
        this._insertBefore(this._first,entry,{
            updateFirst : false});
    }
    addAll(entries : core.DartIterable<E>) : void {
        entries.forEach(this.add.bind(this));
    }
    remove(entry : E) : boolean {
        if (entry._list != this) return false;
        this._unlink(entry);
        return true;
    }
    get iterator() : core.DartIterator<E> {
        return new _LinkedListIterator<E>(this);
    }
    get length() : number {
        return this._length;
    }
    clear() : void {
        this._modificationCount++;
        if (this.isEmpty) return;
        let next : E = this._first;
        do{
            let entry : E = next;
            next = entry._next;
            entry._next = entry._previous = entry._list = null;
        } while (!core.identical(next,this._first));
        this._first = null;
        this._length = 0;
    }
    get first() : E {
        if (this.isEmpty) {
            throw new core.StateError('No such element');
        }
        return this._first;
    }
    get last() : E {
        if (this.isEmpty) {
            throw new core.StateError('No such element');
        }
        return this._first._previous;
    }
    get single() : E {
        if (this.isEmpty) {
            throw new core.StateError('No such element');
        }
        if (this._length > 1) {
            throw new core.StateError('Too many elements');
        }
        return this._first;
    }
    forEach(action : <E extends LinkedListEntry<E>>(entry : E) => void) : void {
        let modificationCount : number = this._modificationCount;
        if (this.isEmpty) return;
        let current : E = this._first;
        do{
            action(current);
            if (modificationCount != this._modificationCount) {
                throw new core.ConcurrentModificationError(this);
            }
            current = current._next;
        } while (!core.identical(current,this._first));
    }
    get isEmpty() : boolean {
        return this._length == 0;
    }
    _insertBefore(entry : E,newEntry : E,_namedArguments? : {updateFirst? : boolean}) : void {
        let {updateFirst} = Object.assign({
        }, _namedArguments );
        if (newEntry.list != null) {
            throw new core.StateError('LinkedListEntry is already in a LinkedList');
        }
        this._modificationCount++;
        newEntry._list = this;
        if (this.isEmpty) {
            /* TODO (AssertStatementImpl) : assert (entry == null); */;
            newEntry._previous = newEntry._next = newEntry;
            this._first = newEntry;
            this._length++;
            return;
        }
        let predecessor : E = entry._previous;
        let successor : E = entry;
        newEntry._previous = predecessor;
        newEntry._next = successor;
        predecessor._next = newEntry;
        successor._previous = newEntry;
        if (updateFirst && core.identical(entry,this._first)) {
            this._first = newEntry;
        }
        this._length++;
    }
    _unlink(entry : E) : void {
        this._modificationCount++;
        entry._next._previous = entry._previous;
        let next : E = entry._previous._next = entry._next;
        this._length--;
        entry._list = entry._next = entry._previous = null;
        if (this.isEmpty) {
            this._first = null;
        }else if (core.identical(entry,this._first)) {
            this._first = next;
        }
    }
}

export namespace _LinkedListIterator {
    export type Constructors = '_LinkedListIterator';
    export type Interface<E extends LinkedListEntry<E>> = Omit<_LinkedListIterator<E extends LinkedListEntry<E>>, Constructors>;
}
@DartClass
@Implements(core.DartIterator)
export class _LinkedListIterator<E extends LinkedListEntry<E>> implements core.DartIterator.Interface<E> {
    _list : LinkedList<E>;

    _modificationCount : number;

    _current : E;

    _next : LinkedListEntry<E>;

    _visitedFirst : boolean;

    constructor(list : LinkedList<E>) {
    }
    @defaultConstructor
    _LinkedListIterator(list : LinkedList<E>) {
        this._list = list;
        this._modificationCount = list._modificationCount;
        this._next = list._first;
        this._visitedFirst = false;
    }
    get current() : E {
        return this._current;
    }
    moveNext() : boolean {
        if (this._modificationCount != this._list._modificationCount) {
            throw new core.ConcurrentModificationError(this);
        }
        if (this._list.isEmpty || (this._visitedFirst && core.identical(this._next,this._list.first))) {
            this._current = null;
            return false;
        }
        this._visitedFirst = true;
        this._current = this._next;
        this._next = this._next._next;
        return true;
    }
}

export namespace LinkedListEntry {
    export type Constructors = 'LinkedListEntry';
    export type Interface<E extends LinkedListEntry<E>> = Omit<LinkedListEntry<E extends LinkedListEntry<E>>, Constructors>;
}
@DartClass
export class LinkedListEntry<E extends LinkedListEntry<E>> {
    _list : LinkedList<E>;

    _next : E;

    _previous : E;

    get list() : LinkedList<E> {
        return this._list;
    }
    unlink() : void {
        this._list._unlink(this);
    }
    get next() : E {
        if (op(Op.EQUALS,this._list,null) || core.identical(this._list.first,this._next)) return null;
        return this._next;
    }
    get previous() : E {
        if (op(Op.EQUALS,this._list,null) || core.identical(this,this._list.first)) return null;
        return this._previous;
    }
    insertAfter(entry : E) : void {
        this._list._insertBefore(this._next,entry,{
            updateFirst : false});
    }
    insertBefore(entry : E) : void {
        this._list._insertBefore(this as any,entry,{
            updateFirst : true});
    }
    constructor() {
    }
    @defaultConstructor
    LinkedListEntry() {
    }
}

export namespace UnmodifiableListView {
    export type Constructors = _internal.UnmodifiableListBase.Constructors | 'UnmodifiableListView';
    export type Interface<E> = Omit<UnmodifiableListView<E>, Constructors>;
}
@DartClass
export class UnmodifiableListView<E> extends _internal.UnmodifiableListBase<E> {
    _source : core.DartIterable<E>;

    constructor(source : core.DartIterable<E>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnmodifiableListView(source : core.DartIterable<E>) {
        this._source = source;
    }
    get length() : number {
        return this._source.length;
    }
    [OperatorMethods.INDEX](index : number) : E {
        return this._source.elementAt(index);
    }
}

export namespace ListMixin {
    export type Constructors = 'ListMixin';
    export type Interface<E> = Omit<ListMixin<E>, Constructors>;
}
@DartClass
@Implements(core.DartList)
export class ListMixin<E> implements core.DartList.Interface<E> {
    get iterator() : core.DartIterator<E> {
        return new _internal.ListIterator<E>(this);
    }
    elementAt(index : number) : E {
        return this[index];
    }
    forEach(action : <E>(element : E) => void) : void {
        let length : number = this.length;
        for(let i : number = 0; i < length; i++){
            action(this[i]);
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
    }
    get isEmpty() : boolean {
        return this.length == 0;
    }
    get isNotEmpty() : boolean {
        return !this.isEmpty;
    }
    get first() : E {
        if (this.length == 0) throw _internal.IterableElementError.noElement();
        return this[0];
    }
    get last() : E {
        if (this.length == 0) throw _internal.IterableElementError.noElement();
        return this[this.length - 1];
    }
    get single() : E {
        if (this.length == 0) throw _internal.IterableElementError.noElement();
        if (this.length > 1) throw _internal.IterableElementError.tooMany();
        return this[0];
    }
    contains(element : core.DartObject) : boolean {
        let length : number = this.length;
        for(let i : number = 0; i < this.length; i++){
            if (op(Op.EQUALS,this[i],element)) return true;
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        return false;
    }
    every(test : <E>(element : E) => boolean) : boolean {
        let length : number = this.length;
        for(let i : number = 0; i < length; i++){
            if (!test(this[i])) return false;
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        return true;
    }
    any(test : <E>(element : E) => boolean) : boolean {
        let length : number = this.length;
        for(let i : number = 0; i < length; i++){
            if (test(this[i])) return true;
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        return false;
    }
    firstWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        let length : number = this.length;
        for(let i : number = 0; i < length; i++){
            let element : E = this[i];
            if (test(element)) return element;
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        if (orElse != null) return orElse();
        throw _internal.IterableElementError.noElement();
    }
    lastWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        let length : number = this.length;
        for(let i : number = length - 1; i >= 0; i--){
            let element : E = this[i];
            if (test(element)) return element;
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        if (orElse != null) return orElse();
        throw _internal.IterableElementError.noElement();
    }
    singleWhere(test : <E>(element : E) => boolean) : E {
        let length : number = this.length;
        let match : E = null;
        let matchFound : boolean = false;
        for(let i : number = 0; i < length; i++){
            let element : E = this[i];
            if (test(element)) {
                if (matchFound) {
                    throw _internal.IterableElementError.tooMany();
                }
                matchFound = true;
                match = element;
            }
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        if (matchFound) return match;
        throw _internal.IterableElementError.noElement();
    }
    join(separator? : string) : string {
        separator = separator || "";
        if (this.length == 0) return "";
        let buffer : core.DartStringBuffer = ((_) : core.DartStringBuffer =>  {
            {
                _.writeAll(this,separator);
                return _;
            }
        })(new core.DartStringBuffer());
        return buffer.toString();
    }
    where(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        return new _internal.WhereIterable<E>(this,test);
    }
    map<T>(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        return new _internal.MappedListIterable<E,T>(this,f);
    }
    expand<T>(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        return new _internal.ExpandIterable<E,T>(this,f);
    }
    reduce(combine : <E>(previousValue : E,element : E) => E) : E {
        let length : number = this.length;
        if (length == 0) throw _internal.IterableElementError.noElement();
        let value : E = this[0];
        for(let i : number = 1; i < length; i++){
            value = combine(value,this[i]);
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        return value;
    }
    fold<T>(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        let value = initialValue;
        let length : number = this.length;
        for(let i : number = 0; i < length; i++){
            value = combine(value,this[i]);
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        return value;
    }
    skip(count : number) : core.DartIterable<E> {
        return new _internal.SubListIterable<E>(this,count,null);
    }
    skipWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        return new _internal.SkipWhileIterable<E>(this,test);
    }
    take(count : number) : core.DartIterable<E> {
        return new _internal.SubListIterable<E>(this,0,count);
    }
    takeWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        return new _internal.TakeWhileIterable<E>(this,test);
    }
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        let result : core.DartList<E>;
        if (growable) {
            result = ((_) : core.DartList<E> =>  {
                {
                    _.length = this.length;
                    return _;
                }
            })(new core.DartList<E>());
        }else {
            result = new core.DartList<E>(this.length);
        }
        for(let i : number = 0; i < this.length; i++){
            result[i] = this[i];
        }
        return result;
    }
    toSet() : core.DartSet<E> {
        let result : core.DartSet<E> = new core.DartSet<E>();
        for(let i : number = 0; i < this.length; i++){
            result.add(this[i]);
        }
        return result;
    }
    add(element : E) : void {
        this[this.length++] = element;
    }
    addAll(iterable : core.DartIterable<E>) : void {
        let i : number = this.length;
        for(let element of iterable) {
            /* TODO (AssertStatementImpl) : assert (this.length == i || (throw new ConcurrentModificationError(this))); */;
            this.length = i + 1;
            this[i] = element;
            i++;
        }
    }
    remove(element : core.DartObject) : boolean {
        for(let i : number = 0; i < this.length; i++){
            if (op(Op.EQUALS,this[i],element)) {
                this.setRange(i,this.length - 1,this,i + 1);
                this.length -= 1;
                return true;
            }
        }
        return false;
    }
    removeWhere(test : <E>(element : E) => boolean) : void {
        this._filter(test,false);
    }
    retainWhere(test : <E>(element : E) => boolean) : void {
        this._filter(test,true);
    }
    _filter(test : <E>(element : any) => boolean,retainMatching : boolean) : void {
        let retained : core.DartList<E> = new core.DartList.literal<E>();
        let length : number = this.length;
        for(let i : number = 0; i < length; i++){
            let element = this[i];
            if (test(element) == retainMatching) {
                retained.add(element);
            }
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        if (retained.length != this.length) {
            this.setRange(0,retained.length,retained);
            this.length = retained.length;
        }
    }
    clear() : void {
        this.length = 0;
    }
    removeLast() : E {
        if (this.length == 0) {
            throw _internal.IterableElementError.noElement();
        }
        let result : E = this[this.length - 1];
        this.length--;
        return result;
    }
    sort(compare? : <E>(a : E,b : E) => number) : void {
        _internal.Sort.sort(this,(compare || ListMixin._compareAny.bind(this)));
    }
    static _compareAny(a : any,b : any) : number {
        return core.DartComparable.compare(a,b);
    }
    shuffle(random? : math.Random) : void {
        if (op(Op.EQUALS,random,null)) random = new math.Random();
        let length : number = this.length;
        while (length > 1){
            let pos : number = random.nextInt(length);
            length -= 1;
            let tmp = this[length];
            this[length] = this[pos];
            this[pos] = tmp;
        }
    }
    asMap() : core.DartMap<number,E> {
        return new _internal.ListMapView<E>(this);
    }
    sublist(start : number,end? : number) : core.DartList<E> {
        let listLength : number = this.length;
        if (end == null) end = listLength;
        core.RangeError.checkValidRange(start,end,listLength);
        let length : number = end - start;
        let result : core.DartList<E> = ((_) : core.DartList<E> =>  {
            {
                _.length = length;
                return _;
            }
        })(new core.DartList<E>());
        for(let i : number = 0; i < length; i++){
            result[i] = this[start + i];
        }
        return result;
    }
    getRange(start : number,end : number) : core.DartIterable<E> {
        core.RangeError.checkValidRange(start,end,this.length);
        return new _internal.SubListIterable<E>(this,start,end);
    }
    removeRange(start : number,end : number) : void {
        core.RangeError.checkValidRange(start,end,this.length);
        let length : number = end - start;
        this.setRange(start,this.length - length,this,end);
        this.length -= length;
    }
    fillRange(start : number,end : number,fill? : E) : void {
        core.RangeError.checkValidRange(start,end,this.length);
        for(let i : number = start; i < end; i++){
            this[i] = fill;
        }
    }
    setRange(start : number,end : number,iterable : core.DartIterable<E>,skipCount? : number) : void {
        skipCount = skipCount || 0;
        core.RangeError.checkValidRange(start,end,this.length);
        let length : number = end - start;
        if (length == 0) return;
        core.RangeError.checkNotNegative(skipCount,"skipCount");
        let otherList : core.DartList<E>;
        let otherStart : number;
        if (is(iterable, core.DartList<E>)) {
            otherList = iterable;
            otherStart = skipCount;
        }else {
            otherList = iterable.skip(skipCount).toList({
                growable : false});
            otherStart = 0;
        }
        if (otherStart + length > otherList.length) {
            throw _internal.IterableElementError.tooFew();
        }
        if (otherStart < start) {
            for(let i : number = length - 1; i >= 0; i--){
                this[start + i] = otherList[otherStart + i];
            }
        }else {
            for(let i : number = 0; i < length; i++){
                this[start + i] = otherList[otherStart + i];
            }
        }
    }
    replaceRange(start : number,end : number,newContents : core.DartIterable<E>) : void {
        core.RangeError.checkValidRange(start,end,this.length);
        if (isNot(newContents, _internal.EfficientLengthIterable<any>)) {
            newContents = newContents.toList();
        }
        let removeLength : number = end - start;
        let insertLength : number = newContents.length;
        if (removeLength >= insertLength) {
            let delta : number = removeLength - insertLength;
            let insertEnd : number = start + insertLength;
            let newLength : number = this.length - delta;
            this.setRange(start,insertEnd,newContents);
            if (delta != 0) {
                this.setRange(insertEnd,newLength,this,end);
                this.length = newLength;
            }
        }else {
            let delta : number = insertLength - removeLength;
            let newLength : number = this.length + delta;
            let insertEnd : number = start + insertLength;
            this.length = newLength;
            this.setRange(insertEnd,newLength,this,end);
            this.setRange(start,insertEnd,newContents);
        }
    }
    indexOf(element : core.DartObject,startIndex? : number) : number {
        startIndex = startIndex || 0;
        if (startIndex >= this.length) {
            return -1;
        }
        if (startIndex < 0) {
            startIndex = 0;
        }
        for(let i : number = startIndex; i < this.length; i++){
            if (op(Op.EQUALS,this[i],element)) {
                return i;
            }
        }
        return -1;
    }
    lastIndexOf(element : core.DartObject,startIndex? : number) : number {
        if (startIndex == null) {
            startIndex = this.length - 1;
        }else {
            if (startIndex < 0) {
                return -1;
            }
            if (startIndex >= this.length) {
                startIndex = this.length - 1;
            }
        }
        for(let i : number = startIndex; i >= 0; i--){
            if (op(Op.EQUALS,this[i],element)) {
                return i;
            }
        }
        return -1;
    }
    insert(index : number,element : E) : void {
        core.RangeError.checkValueInInterval(index,0,this.length,"index");
        if (index == this.length) {
            this.add(element);
            return;
        }
        if (isNot(index, "number")) throw new core.ArgumentError(index);
        this.length++;
        this.setRange(index + 1,this.length,this,index);
        this[index] = element;
    }
    removeAt(index : number) : E {
        let result : E = this[index];
        this.setRange(index,this.length - 1,this,index + 1);
        this.length--;
        return result;
    }
    insertAll(index : number,iterable : core.DartIterable<E>) : void {
        core.RangeError.checkValueInInterval(index,0,this.length,"index");
        if (isNot(iterable, _internal.EfficientLengthIterable<any>) || core.identical(iterable,this)) {
            iterable = iterable.toList();
        }
        let insertionLength : number = iterable.length;
        this.length += insertionLength;
        if (iterable.length != insertionLength) {
            this.length -= insertionLength;
            throw new core.ConcurrentModificationError(iterable);
        }
        this.setRange(index + insertionLength,this.length,this,index);
        this.setAll(index,iterable);
    }
    setAll(index : number,iterable : core.DartIterable<E>) : void {
        if (is(iterable, core.DartList<any>)) {
            this.setRange(index,index + iterable.length,iterable);
        }else {
            for(let element of iterable) {
                this[index++] = element;
            }
        }
    }
    get reversed() : core.DartIterable<E> {
        return new _internal.ReversedListIterable<E>(this);
    }
    toString() : string {
        return IterableBase.iterableToFullString(this,'[',']');
    }
    constructor() {
    }
    @defaultConstructor
    ListMixin() {
    }
}

export namespace MapMixin {
    export type Constructors = 'MapMixin';
    export type Interface<K,V> = Omit<MapMixin<K,V>, Constructors>;
}
@DartClass
@Implements(core.DartMap)
export class MapMixin<K,V> implements core.DartMap.Interface<K,V> {
    @AbstractProperty
    get keys() : core.DartIterable<K>{ throw 'abstract'}
    @Abstract
    [OperatorMethods.INDEX](key : core.DartObject) : V{ throw 'abstract'}
    @Abstract
    [OperatorMethods.INDEX_EQ](key : K,value : V){ throw 'abstract'}
    @Abstract
    remove(key : core.DartObject) : V{ throw 'abstract'}
    @Abstract
    clear() : void{ throw 'abstract'}
    forEach(action : <K,V>(key : K,value : V) => void) : void {
        for(let key of this.keys) {
            action(key,op(Op.INDEX,this,key));
        }
    }
    addAll(other : core.DartMap<K,V>) : void {
        for(let key of other.keys) {
            op(Op.INDEX_ASSIGN,this,key,other.get(key));
        }
    }
    containsValue(value : core.DartObject) : boolean {
        for(let key of this.keys) {
            if (op(Op.EQUALS,op(Op.INDEX,this,key),value)) return true;
        }
        return false;
    }
    putIfAbsent(key : K,ifAbsent : <K,V>() => V) : V {
        if (this.containsKey(key)) {
            return op(Op.INDEX,this,key);
        }
        return op(Op.INDEX_ASSIGN,this,key,ifAbsent());
    }
    containsKey(key : core.DartObject) : boolean {
        return this.keys.contains(key);
    }
    get length() : number {
        return this.keys.length;
    }
    get isEmpty() : boolean {
        return this.keys.isEmpty;
    }
    get isNotEmpty() : boolean {
        return this.keys.isNotEmpty;
    }
    get values() : core.DartIterable<V> {
        return new _MapBaseValueIterable<K,V>(this);
    }
    toString() : string {
        return Maps.mapToString(this);
    }
    constructor() {
    }
    @defaultConstructor
    MapMixin() {
    }
}

export namespace _MapBaseValueIterable {
    export type Constructors = _internal.EfficientLengthIterable.Constructors | '_MapBaseValueIterable';
    export type Interface<K,V> = Omit<_MapBaseValueIterable<K,V>, Constructors>;
}
@DartClass
export class _MapBaseValueIterable<K,V> extends _internal.EfficientLengthIterable<V> {
    _map : core.DartMap<K,V>;

    constructor(_map : core.DartMap<K,V>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MapBaseValueIterable(_map : core.DartMap<K,V>) {
        this._map = _map;
    }
    get length() : number {
        return this._map.length;
    }
    get isEmpty() : boolean {
        return this._map.isEmpty;
    }
    get isNotEmpty() : boolean {
        return this._map.isNotEmpty;
    }
    get first() : V {
        return this._map.get(this._map.keys.first);
    }
    get single() : V {
        return this._map.get(this._map.keys.single);
    }
    get last() : V {
        return this._map.get(this._map.keys.last);
    }
    get iterator() : core.DartIterator<V> {
        return new _MapBaseValueIterator<K,V>(this._map);
    }
}

export namespace _MapBaseValueIterator {
    export type Constructors = '_MapBaseValueIterator';
    export type Interface<K,V> = Omit<_MapBaseValueIterator<K,V>, Constructors>;
}
@DartClass
@Implements(core.DartIterator)
export class _MapBaseValueIterator<K,V> implements core.DartIterator.Interface<V> {
    _keys : core.DartIterator<K>;

    _map : core.DartMap<K,V>;

    _current : V;

    constructor(map : core.DartMap<K,V>) {
    }
    @defaultConstructor
    _MapBaseValueIterator(map : core.DartMap<K,V>) {
        this._current = null;
        this._map = map;
        this._keys = map.keys.iterator;
    }
    moveNext() : boolean {
        if (this._keys.moveNext()) {
            this._current = this._map.get(this._keys.current);
            return true;
        }
        this._current = null;
        return false;
    }
    get current() : V {
        return this._current;
    }
}

export namespace _UnmodifiableMapMixin {
    export type Constructors = '_UnmodifiableMapMixin';
    export type Interface<K,V> = Omit<_UnmodifiableMapMixin<K,V>, Constructors>;
}
@DartClass
@Implements(core.DartMap)
export class _UnmodifiableMapMixin<K,V> implements core.DartMap.Interface<K,V> {
    [OperatorMethods.INDEX_EQ](key : K,value : V) : void {
        throw new core.UnsupportedError("Cannot modify unmodifiable map");
    }
    addAll(other : core.DartMap<K,V>) : void {
        throw new core.UnsupportedError("Cannot modify unmodifiable map");
    }
    clear() : void {
        throw new core.UnsupportedError("Cannot modify unmodifiable map");
    }
    remove(key : core.DartObject) : V {
        throw new core.UnsupportedError("Cannot modify unmodifiable map");
    }
    putIfAbsent(key : K,ifAbsent : <K,V>() => V) : V {
        throw new core.UnsupportedError("Cannot modify unmodifiable map");
    }
    constructor() {
    }
    @defaultConstructor
    _UnmodifiableMapMixin() {
    }
}

export namespace MapView {
    export type Constructors = 'MapView';
    export type Interface<K,V> = Omit<MapView<K,V>, Constructors>;
}
@DartClass
@Implements(core.DartMap)
export class MapView<K,V> implements core.DartMap.Interface<K,V> {
    _map : core.DartMap<K,V>;

    constructor(map : core.DartMap<K,V>) {
    }
    @defaultConstructor
    MapView(map : core.DartMap<K,V>) {
        this._map = map;
    }
    [OperatorMethods.INDEX](key : core.DartObject) : V {
        return this._map.get(key);
    }
    [OperatorMethods.INDEX_EQ](key : K,value : V) : void {
        this._map.set(key,value);
    }
    addAll(other : core.DartMap<K,V>) : void {
        this._map.addAll(other);
    }
    clear() : void {
        this._map.clear();
    }
    putIfAbsent(key : K,ifAbsent : <K,V>() => V) : V {
        return this._map.putIfAbsent(key,ifAbsent);
    }
    containsKey(key : core.DartObject) : boolean {
        return this._map.containsKey(key);
    }
    containsValue(value : core.DartObject) : boolean {
        return this._map.containsValue(value);
    }
    forEach(action : <K,V>(key : K,value : V) => void) : void {
        this._map.forEach(action);
    }
    get isEmpty() : boolean {
        return this._map.isEmpty;
    }
    get isNotEmpty() : boolean {
        return this._map.isNotEmpty;
    }
    get length() : number {
        return this._map.length;
    }
    get keys() : core.DartIterable<K> {
        return this._map.keys;
    }
    remove(key : core.DartObject) : V {
        return this._map.remove(key);
    }
    toString() : string {
        return this._map.toString();
    }
    get values() : core.DartIterable<V> {
        return this._map.values;
    }
}

export namespace Maps {
    export type Constructors = 'Maps';
    export type Interface = Omit<Maps, Constructors>;
}
@DartClass
export class Maps {
    static containsValue(map : core.DartMap<any,any>,value : core.DartObject) : boolean {
        for(let v of map.values) {
            if (op(Op.EQUALS,v,value)) {
                return true;
            }
        }
        return false;
    }
    static containsKey(map : core.DartMap<any,any>,key : core.DartObject) : boolean {
        for(let k of map.keys) {
            if (op(Op.EQUALS,k,key)) {
                return true;
            }
        }
        return false;
    }
    static putIfAbsent(map : core.DartMap<any,any>,key : any,ifAbsent : () => any) {
        if (map.containsKey(key)) {
            return map.get(key);
        }
        let v = ifAbsent();
        map.set(key,v);
        return v;
    }
    static clear(map : core.DartMap<any,any>) {
        for(let k of map.keys.toList()) {
            map.remove(k);
        }
    }
    static forEach(map : core.DartMap<any,any>,f : (key : any,value : any) => void) {
        for(let k of map.keys) {
            f(k,map.get(k));
        }
    }
    static getValues(map : core.DartMap<any,any>) : core.DartIterable<any> {
        return map.keys.map((key : any) =>  {
            return map.get(key);
        });
    }
    static length(map : core.DartMap<any,any>) : number {
        return map.keys.length;
    }
    static isEmpty(map : core.DartMap<any,any>) : boolean {
        return map.keys.isEmpty;
    }
    static isNotEmpty(map : core.DartMap<any,any>) : boolean {
        return map.keys.isNotEmpty;
    }
    static mapToString(m : core.DartMap<any,any>) : string {
        if (_isToStringVisiting(m)) {
            return '{...}';
        }
        let result = new core.DartStringBuffer();
        try {
            properties._toStringVisiting.add(m);
            result.write('{');
            let first : boolean = true;
            m.forEach((k : any,v : any) =>  {
                if (!first) {
                    result.write(', ');
                }
                first = false;
                result.write(k);
                result.write(': ');
                result.write(v);
            });
            result.write('}');
        } finally {
            /* TODO (AssertStatementImpl) : assert (identical(_toStringVisiting.last, m)); */;
            properties._toStringVisiting.removeLast();
        }
        return result.toString();
    }
    static _id(x : any) {
        return x;
    }
    static _fillMapWithMappedIterable(map : core.DartMap<any,any>,iterable : core.DartIterable<any>,key : (element : any) => any,value : (element : any) => any) : void {
        if (op(Op.EQUALS,key,null)) key = Maps._id.bind(this);
        if (op(Op.EQUALS,value,null)) value = Maps._id.bind(this);
        for(let element of iterable) {
            map.set(key(element),value(element));
        }
    }
    static _fillMapWithIterables(map : core.DartMap<any,any>,keys : core.DartIterable<any>,values : core.DartIterable<any>) : void {
        let keyIterator : core.DartIterator<any> = keys.iterator;
        let valueIterator : core.DartIterator<any> = values.iterator;
        let hasNextKey : boolean = keyIterator.moveNext();
        let hasNextValue : boolean = valueIterator.moveNext();
        while (hasNextKey && hasNextValue){
            map.set(keyIterator.current,valueIterator.current);
            hasNextKey = keyIterator.moveNext();
            hasNextValue = valueIterator.moveNext();
        }
        if (hasNextKey || hasNextValue) {
            throw new core.ArgumentError("Iterables do not have same length.");
        }
    }
    constructor() {
    }
    @defaultConstructor
    Maps() {
    }
}

export namespace _SplayTreeNode {
    export type Constructors = '_SplayTreeNode';
    export type Interface<K> = Omit<_SplayTreeNode<K>, Constructors>;
}
@DartClass
export class _SplayTreeNode<K> {
    key : K;

    left : _SplayTreeNode<K>;

    right : _SplayTreeNode<K>;

    constructor(key : K) {
    }
    @defaultConstructor
    _SplayTreeNode(key : K) {
        this.key = key;
    }
}

export namespace _DoubleLink {
    export type Constructors = '_DoubleLink';
    export type Interface<Link extends _DoubleLink<Link>> = Omit<_DoubleLink<Link extends _DoubleLink<Link>>, Constructors>;
}
@DartClass
export class _DoubleLink<Link extends _DoubleLink<Link>> {
    _previousLink : Link;

    _nextLink : Link;

    _link(previous : Link,next : Link) : void {
        this._nextLink = next;
        this._previousLink = previous;
        if (previous != null) previous._nextLink = this;
        if (next != null) next._previousLink = this;
    }
    _unlink() : void {
        if (this._previousLink != null) this._previousLink._nextLink = this._nextLink;
        if (this._nextLink != null) this._nextLink._previousLink = this._previousLink;
        this._nextLink = null;
        this._previousLink = null;
    }
    constructor() {
    }
    @defaultConstructor
    _DoubleLink() {
    }
}

export namespace _SplayTreeKeyIterable {
    export type Constructors = _internal.EfficientLengthIterable.Constructors | '_SplayTreeKeyIterable';
    export type Interface<K> = Omit<_SplayTreeKeyIterable<K>, Constructors>;
}
@DartClass
export class _SplayTreeKeyIterable<K> extends _internal.EfficientLengthIterable<K> {
    _tree : _SplayTree<K,_SplayTreeNode<K>>;

    constructor(_tree : _SplayTree<K,_SplayTreeNode<K>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SplayTreeKeyIterable(_tree : _SplayTree<K,_SplayTreeNode<K>>) {
        this._tree = _tree;
    }
    get length() : number {
        return this._tree._count;
    }
    get isEmpty() : boolean {
        return this._tree._count == 0;
    }
    get iterator() : core.DartIterator<K> {
        return new _SplayTreeKeyIterator<K>(this._tree);
    }
    toSet() : core.DartSet<K> {
        let set : SplayTreeSet<K> = new SplayTreeSet<K>(this._tree._comparator,this._tree._validKey);
        set._count = this._tree._count;
        set._root = set._copyNode(this._tree._root);
        return set;
    }
}

export namespace _SplayTreeIterator {
    export type Constructors = '_SplayTreeIterator' | 'startAt';
    export type Interface<K,T> = Omit<_SplayTreeIterator<K,T>, Constructors>;
}
@DartClass
@Implements(core.DartIterator)
export class _SplayTreeIterator<K,T> implements core.DartIterator.Interface<T> {
    _tree : _SplayTree<K,_SplayTreeNode<K>>;

    _workList : core.DartList<_SplayTreeNode<K>>;

    _modificationCount : number;

    _splayCount : number;

    _currentNode : _SplayTreeNode<K>;

    constructor(tree : _SplayTree<K,_SplayTreeNode<K>>) {
    }
    @defaultConstructor
    _SplayTreeIterator(tree : _SplayTree<K,_SplayTreeNode<K>>) {
        this._workList = new core.DartList.literal<_SplayTreeNode<K>>();
        this._tree = tree;
        this._modificationCount = tree._modificationCount;
        this._splayCount = tree._splayCount;
        this._findLeftMostDescendent(tree._root);
    }
    @namedConstructor
    startAt(tree : _SplayTree<K,_SplayTreeNode<K>>,startKey : K) {
        this._workList = new core.DartList.literal<_SplayTreeNode<K>>();
        this._tree = tree;
        this._modificationCount = tree._modificationCount;
        if (op(Op.EQUALS,tree._root,null)) return;
        let compare : number = tree._splay(startKey);
        this._splayCount = tree._splayCount;
        if (compare < 0) {
            this._findLeftMostDescendent(tree._root.right);
        }else {
            this._workList.add(tree._root);
        }
    }
    static startAt : new<K,T>(tree : _SplayTree<K,_SplayTreeNode<K>>,startKey : K) => _SplayTreeIterator<K,T>;

    get current() : T {
        if (op(Op.EQUALS,this._currentNode,null)) return null;
        return this._getValue(this._currentNode);
    }
    _findLeftMostDescendent(node : _SplayTreeNode<K>) : void {
        while (node != null){
            this._workList.add(node);
            node = node.left;
        }
    }
    _rebuildWorkList(currentNode : _SplayTreeNode<K>) : void {
        /* TODO (AssertStatementImpl) : assert (!_workList.isEmpty); */;
        this._workList.clear();
        if (op(Op.EQUALS,currentNode,null)) {
            this._findLeftMostDescendent(this._tree._root);
        }else {
            this._tree._splay(currentNode.key);
            this._findLeftMostDescendent(this._tree._root.right);
            /* TODO (AssertStatementImpl) : assert (!_workList.isEmpty); */;
        }
    }
    moveNext() : boolean {
        if (this._modificationCount != this._tree._modificationCount) {
            throw new core.ConcurrentModificationError(this._tree);
        }
        if (this._workList.isEmpty) {
            this._currentNode = null;
            return false;
        }
        if (this._tree._splayCount != this._splayCount && this._currentNode != null) {
            this._rebuildWorkList(this._currentNode);
        }
        this._currentNode = this._workList.removeLast();
        this._findLeftMostDescendent(this._currentNode.right);
        return true;
    }
    @Abstract
    _getValue(node : _SplayTreeNode<K>) : T{ throw 'abstract'}
}

export namespace ListQueue {
    export type Constructors = _internal.ListIterable.Constructors | 'ListQueue';
    export type Interface<E> = Omit<ListQueue<E>, Constructors>;
}
@DartClass
@Implements(Queue)
export class ListQueue<E> extends _internal.ListIterable<E> implements Queue.Interface<E> {
    private static __$_INITIAL_CAPACITY : number;
    static get _INITIAL_CAPACITY() : number { 
        if (this.__$_INITIAL_CAPACITY===undefined) {
            this.__$_INITIAL_CAPACITY = 8;
        }
        return this.__$_INITIAL_CAPACITY;
    }

    _table : core.DartList<E>;

    _head : number;

    _tail : number;

    _modificationCount : number;

    constructor(initialCapacity? : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListQueue(initialCapacity? : number) {
        this._modificationCount = 0;
        this._head = 0;
        this._tail = 0;
        if (initialCapacity == null || initialCapacity < ListQueue._INITIAL_CAPACITY) {
            initialCapacity = ListQueue._INITIAL_CAPACITY;
        }else if (!ListQueue._isPowerOf2(initialCapacity)) {
            initialCapacity = ListQueue._nextPowerOf2(initialCapacity);
        }
        /* TODO (AssertStatementImpl) : assert (_isPowerOf2(initialCapacity)); */;
        this._table = new core.DartList<E>(initialCapacity);
    }
    @namedFactory
    static $from<E>(elements : core.DartIterable<any>) : ListQueue<E> {
        if (is(elements, core.DartList<any>)) {
            let length : number = elements.length;
            let queue : ListQueue<E> = new ListQueue<E>(length + 1);
            /* TODO (AssertStatementImpl) : assert (queue._table.length > length); */;
            for(let i : number = 0; i < length; i++){
                queue._table[i] = elements[i] as core.DartObject;
            }
            queue._tail = length;
            return queue;
        }else {
            let capacity : number = ListQueue._INITIAL_CAPACITY;
            if (is(elements, _internal.EfficientLengthIterable<any>)) {
                capacity = elements.length;
            }
            let result : ListQueue<E> = new ListQueue<E>(capacity);
            for(let element of elements) {
                result.addLast(element as core.DartObject);
            }
            return result;
        }
    }
    static from : new<E>(elements : core.DartIterable<any>) => ListQueue<E>;

    get iterator() : core.DartIterator<E> {
        return new _ListQueueIterator<E>(this);
    }
    forEach(action : <E>(element : E) => void) : void {
        let modificationCount : number = this._modificationCount;
        for(let i : number = this._head; i != this._tail; i = (i + 1) & (this._table.length - 1)){
            action(this._table[i]);
            this._checkModification(modificationCount);
        }
    }
    get isEmpty() : boolean {
        return this._head == this._tail;
    }
    get length() : number {
        return (this._tail - this._head) & (this._table.length - 1);
    }
    get first() : E {
        if (this._head == this._tail) throw _internal.IterableElementError.noElement();
        return this._table[this._head];
    }
    get last() : E {
        if (this._head == this._tail) throw _internal.IterableElementError.noElement();
        return this._table[(this._tail - 1) & (this._table.length - 1)];
    }
    get single() : E {
        if (this._head == this._tail) throw _internal.IterableElementError.noElement();
        if (this.length > 1) throw _internal.IterableElementError.tooMany();
        return this._table[this._head];
    }
    elementAt(index : number) : E {
        core.RangeError.checkValidIndex(index,this);
        return this._table[(this._head + index) & (this._table.length - 1)];
    }
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        let list : core.DartList<E>;
        if (growable) {
            list = ((_) : core.DartList<E> =>  {
                {
                    _.length = this.length;
                    return _;
                }
            })(new core.DartList<E>());
        }else {
            list = new core.DartList<E>(this.length);
        }
        this._writeToList(list);
        return list;
    }
    add(value : E) : void {
        this._add(value);
    }
    addAll(elements : core.DartIterable<E>) : void {
        if (is(elements, core.DartList<E>)) {
            let list : core.DartList<E> = elements;
            let addCount : number = list.length;
            let length : number = this.length;
            if (length + addCount >= this._table.length) {
                this._preGrow(length + addCount);
                this._table.setRange(length,length + addCount,list,0);
                this._tail += addCount;
            }else {
                let endSpace : number = this._table.length - this._tail;
                if (addCount < endSpace) {
                    this._table.setRange(this._tail,this._tail + addCount,list,0);
                    this._tail += addCount;
                }else {
                    let preSpace : number = addCount - endSpace;
                    this._table.setRange(this._tail,this._tail + endSpace,list,0);
                    this._table.setRange(0,preSpace,list,endSpace);
                    this._tail = preSpace;
                }
            }
            this._modificationCount++;
        }else {
            for(let element of elements) this._add(element);
        }
    }
    remove(value : core.DartObject) : boolean {
        for(let i : number = this._head; i != this._tail; i = (i + 1) & (this._table.length - 1)){
            let element : E = this._table[i];
            if (op(Op.EQUALS,element,value)) {
                this._remove(i);
                this._modificationCount++;
                return true;
            }
        }
        return false;
    }
    _filterWhere(test : <E>(element : E) => boolean,removeMatching : boolean) : void {
        let modificationCount : number = this._modificationCount;
        let i : number = this._head;
        while (i != this._tail){
            let element : E = this._table[i];
            let remove : boolean = core.identical(removeMatching,test(element));
            this._checkModification(modificationCount);
            if (remove) {
                i = this._remove(i);
                modificationCount = ++this._modificationCount;
            }else {
                i = (i + 1) & (this._table.length - 1);
            }
        }
    }
    removeWhere(test : <E>(element : E) => boolean) : void {
        this._filterWhere(test,true);
    }
    retainWhere(test : <E>(element : E) => boolean) : void {
        this._filterWhere(test,false);
    }
    clear() : void {
        if (this._head != this._tail) {
            for(let i : number = this._head; i != this._tail; i = (i + 1) & (this._table.length - 1)){
                this._table[i] = null;
            }
            this._head = this._tail = 0;
            this._modificationCount++;
        }
    }
    toString() : string {
        return IterableBase.iterableToFullString(this,"{","}");
    }
    addLast(value : E) : void {
        this._add(value);
    }
    addFirst(value : E) : void {
        this._head = (this._head - 1) & (this._table.length - 1);
        this._table[this._head] = value;
        if (this._head == this._tail) this._grow();
        this._modificationCount++;
    }
    removeFirst() : E {
        if (this._head == this._tail) throw _internal.IterableElementError.noElement();
        this._modificationCount++;
        let result : E = this._table[this._head];
        this._table[this._head] = null;
        this._head = (this._head + 1) & (this._table.length - 1);
        return result;
    }
    removeLast() : E {
        if (this._head == this._tail) throw _internal.IterableElementError.noElement();
        this._modificationCount++;
        this._tail = (this._tail - 1) & (this._table.length - 1);
        let result : E = this._table[this._tail];
        this._table[this._tail] = null;
        return result;
    }
    static _isPowerOf2(number : number) : boolean {
        return (number & (number - 1)) == 0;
    }
    static _nextPowerOf2(number : number) : number {
        /* TODO (AssertStatementImpl) : assert (number > 0); */;
        number = (number << 1) - 1;
        for(; ; ){
            let nextNumber : number = number & (number - 1);
            if (nextNumber == 0) return number;
            number = nextNumber;
        }
    }
    _checkModification(expectedModificationCount : number) : void {
        if (expectedModificationCount != this._modificationCount) {
            throw new core.ConcurrentModificationError(this);
        }
    }
    _add(element : E) : void {
        this._table[this._tail] = element;
        this._tail = (this._tail + 1) & (this._table.length - 1);
        if (this._head == this._tail) this._grow();
        this._modificationCount++;
    }
    _remove(offset : number) : number {
        let mask : number = this._table.length - 1;
        let startDistance : number = (offset - this._head) & mask;
        let endDistance : number = (this._tail - offset) & mask;
        if (startDistance < endDistance) {
            let i : number = offset;
            while (i != this._head){
                let prevOffset : number = (i - 1) & mask;
                this._table[i] = this._table[prevOffset];
                i = prevOffset;
            }
            this._table[this._head] = null;
            this._head = (this._head + 1) & mask;
            return (offset + 1) & mask;
        }else {
            this._tail = (this._tail - 1) & mask;
            let i : number = offset;
            while (i != this._tail){
                let nextOffset : number = (i + 1) & mask;
                this._table[i] = this._table[nextOffset];
                i = nextOffset;
            }
            this._table[this._tail] = null;
            return offset;
        }
    }
    _grow() : void {
        let newTable : core.DartList<E> = new core.DartList<E>(this._table.length * 2);
        let split : number = this._table.length - this._head;
        newTable.setRange(0,split,this._table,this._head);
        newTable.setRange(split,split + this._head,this._table,0);
        this._head = 0;
        this._tail = this._table.length;
        this._table = newTable;
    }
    _writeToList(target : core.DartList<E>) : number {
        /* TODO (AssertStatementImpl) : assert (target.length >= length); */;
        if (this._head <= this._tail) {
            let length : number = this._tail - this._head;
            target.setRange(0,length,this._table,this._head);
            return length;
        }else {
            let firstPartSize : number = this._table.length - this._head;
            target.setRange(0,firstPartSize,this._table,this._head);
            target.setRange(firstPartSize,firstPartSize + this._tail,this._table,0);
            return this._tail + firstPartSize;
        }
    }
    _preGrow(newElementCount : number) : void {
        /* TODO (AssertStatementImpl) : assert (newElementCount >= length); */;
        newElementCount += newElementCount >> 1;
        let newCapacity : number = ListQueue._nextPowerOf2(newElementCount);
        let newTable : core.DartList<E> = new core.DartList<E>(newCapacity);
        this._tail = this._writeToList(newTable);
        this._table = newTable;
        this._head = 0;
    }
}

export namespace IterableBase {
    export type Constructors = core.DartIterable.Constructors | 'IterableBase';
    export type Interface<E> = Omit<IterableBase<E>, Constructors>;
}
@DartClass
export class IterableBase<E> extends core.DartIterable<E> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IterableBase() {
    }
    static iterableToShortString(iterable : core.DartIterable<any>,leftDelimiter? : string,rightDelimiter? : string) : string {
        leftDelimiter = leftDelimiter || '(';
        rightDelimiter = rightDelimiter || ')';
        if (_isToStringVisiting(iterable)) {
            if (leftDelimiter == "(" && rightDelimiter == ")") {
                return "(...)";
            }
            return `${leftDelimiter}...${rightDelimiter}`;
        }
        let parts : core.DartList<any> = new core.DartList.literal();
        properties._toStringVisiting.add(iterable);
        try {
            _iterablePartsToStrings(iterable,parts);
        } finally {
            /* TODO (AssertStatementImpl) : assert (identical(_toStringVisiting.last, iterable)); */;
            properties._toStringVisiting.removeLast();
        }
        return (((_) : core.DartStringBuffer =>  {
            {
                _.writeAll(parts,", ");
                _.write(rightDelimiter);
                return _;
            }
        })(new core.DartStringBuffer(leftDelimiter))).toString();
    }
    static iterableToFullString(iterable : core.DartIterable<any>,leftDelimiter? : string,rightDelimiter? : string) : string {
        leftDelimiter = leftDelimiter || '(';
        rightDelimiter = rightDelimiter || ')';
        if (_isToStringVisiting(iterable)) {
            return `${leftDelimiter}...${rightDelimiter}`;
        }
        let buffer : core.DartStringBuffer = new core.DartStringBuffer(leftDelimiter);
        properties._toStringVisiting.add(iterable);
        try {
            buffer.writeAll(iterable,", ");
        } finally {
            /* TODO (AssertStatementImpl) : assert (identical(_toStringVisiting.last, iterable)); */;
            properties._toStringVisiting.removeLast();
        }
        buffer.write(rightDelimiter);
        return buffer.toString();
    }
}

export namespace DoubleLinkedQueue {
    export type Constructors = core.DartIterable.Constructors | 'DoubleLinkedQueue';
    export type Interface<E> = Omit<DoubleLinkedQueue<E>, Constructors>;
}
@DartClass
@Implements(Queue)
export class DoubleLinkedQueue<E> extends core.DartIterable<E> implements Queue.Interface<E> {
    _sentinel : _DoubleLinkedQueueSentinel<E>;

    _elementCount : number;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoubleLinkedQueue() {
        this._elementCount = 0;
        this._sentinel = new _DoubleLinkedQueueSentinel<E>(this);
    }
    @namedFactory
    static $from<E>(elements : core.DartIterable<any>) : DoubleLinkedQueue<E> {
        let list : Queue<E> = new DoubleLinkedQueue<E>();
        for(let e of elements) {
            let element : E = e as core.DartObject;
            list.addLast(element);
        }
        return list;
    }
    static from : new<E>(elements : core.DartIterable<any>) => DoubleLinkedQueue<E>;

    get length() : number {
        return this._elementCount;
    }
    addLast(value : E) : void {
        this._sentinel._prepend(value);
        this._elementCount++;
    }
    addFirst(value : E) : void {
        this._sentinel._append(value);
        this._elementCount++;
    }
    add(value : E) : void {
        this._sentinel._prepend(value);
        this._elementCount++;
    }
    addAll(iterable : core.DartIterable<E>) : void {
        for(let value of iterable) {
            this._sentinel._prepend(value);
            this._elementCount++;
        }
    }
    removeLast() : E {
        let lastEntry : _DoubleLinkedQueueEntry<E> = this._sentinel._previousLink;
        let result : E = lastEntry._remove();
        this._elementCount--;
        return result;
    }
    removeFirst() : E {
        let firstEntry : _DoubleLinkedQueueEntry<E> = this._sentinel._nextLink;
        let result : E = firstEntry._remove();
        this._elementCount--;
        return result;
    }
    remove(o : core.DartObject) : boolean {
        let entry : _DoubleLinkedQueueEntry<E> = this._sentinel._nextLink;
        while (!core.identical(entry,this._sentinel)){
            let equals : boolean = (op(Op.EQUALS,entry._element,o));
            if (!core.identical(this,entry._queue)) {
                throw new core.ConcurrentModificationError(this);
            }
            if (equals) {
                entry._remove();
                this._elementCount--;
                return true;
            }
            entry = entry._nextLink;
        }
        return false;
    }
    _filter(test : <E>(element : E) => boolean,removeMatching : boolean) : void {
        let entry : _DoubleLinkedQueueEntry<E> = this._sentinel._nextLink;
        while (!core.identical(entry,this._sentinel)){
            let matches : boolean = test(entry._element);
            if (!core.identical(this,entry._queue)) {
                throw new core.ConcurrentModificationError(this);
            }
            let next : _DoubleLinkedQueueEntry<E> = entry._nextLink;
            if (core.identical(removeMatching,matches)) {
                entry._remove();
                this._elementCount--;
            }
            entry = next;
        }
    }
    removeWhere(test : <E>(element : E) => boolean) : void {
        this._filter(test,true);
    }
    retainWhere(test : <E>(element : E) => boolean) : void {
        this._filter(test,false);
    }
    get first() : E {
        let firstEntry : _DoubleLinkedQueueEntry<E> = this._sentinel._nextLink;
        return firstEntry._element;
    }
    get last() : E {
        let lastEntry : _DoubleLinkedQueueEntry<E> = this._sentinel._previousLink;
        return lastEntry._element;
    }
    get single() : E {
        if (core.identical(this._sentinel._nextLink,this._sentinel._previousLink)) {
            let entry : _DoubleLinkedQueueEntry<E> = this._sentinel._nextLink;
            return entry._element;
        }
        throw _internal.IterableElementError.tooMany();
    }
    firstEntry() : DoubleLinkedQueueEntry<E> {
        return this._sentinel.nextEntry();
    }
    lastEntry() : DoubleLinkedQueueEntry<E> {
        return this._sentinel.previousEntry();
    }
    get isEmpty() : boolean {
        return (core.identical(this._sentinel._nextLink,this._sentinel));
    }
    clear() : void {
        this._sentinel._nextLink = this._sentinel;
        this._sentinel._previousLink = this._sentinel;
        this._elementCount = 0;
    }
    forEachEntry(action : <E>(element : DoubleLinkedQueueEntry<E>) => void) : void {
        let entry : _DoubleLinkedQueueEntry<E> = this._sentinel._nextLink;
        while (!core.identical(entry,this._sentinel)){
            let element : _DoubleLinkedQueueElement<E> = entry;
            let next : _DoubleLinkedQueueEntry<E> = element._nextLink;
            action(element);
            if (core.identical(this,entry._queue)) {
                next = entry._nextLink;
            }else if (!core.identical(this,next._queue)) {
                throw new core.ConcurrentModificationError(this);
            }
            entry = next;
        }
    }
    get iterator() : _DoubleLinkedQueueIterator<E> {
        return new _DoubleLinkedQueueIterator<E>(this._sentinel);
    }
    toString() : string {
        return IterableBase.iterableToFullString(this,'{','}');
    }
}

export namespace _DoubleLinkedQueueIterator {
    export type Constructors = '_DoubleLinkedQueueIterator';
    export type Interface<E> = Omit<_DoubleLinkedQueueIterator<E>, Constructors>;
}
@DartClass
@Implements(core.DartIterator)
export class _DoubleLinkedQueueIterator<E> implements core.DartIterator.Interface<E> {
    _sentinel : _DoubleLinkedQueueSentinel<E>;

    _nextEntry : _DoubleLinkedQueueEntry<E>;

    _current : E;

    constructor(sentinel : _DoubleLinkedQueueSentinel<E>) {
    }
    @defaultConstructor
    _DoubleLinkedQueueIterator(sentinel : _DoubleLinkedQueueSentinel<E>) {
        this._nextEntry = null;
        this._sentinel = sentinel;
        this._nextEntry = sentinel._nextLink;
    }
    moveNext() : boolean {
        if (core.identical(this._nextEntry,this._sentinel)) {
            this._current = null;
            this._nextEntry = null;
            this._sentinel = null;
            return false;
        }
        let elementEntry : _DoubleLinkedQueueElement<E> = this._nextEntry;
        if (!core.identical(this._sentinel._queue,elementEntry._queue)) {
            throw new core.ConcurrentModificationError(this._sentinel._queue);
        }
        this._current = elementEntry._element;
        this._nextEntry = elementEntry._nextLink;
        return true;
    }
    get current() : E {
        return this._current;
    }
}

export namespace _TypeTest {
    export type Constructors = '_TypeTest';
    export type Interface<T> = Omit<_TypeTest<T>, Constructors>;
}
@DartClass
export class _TypeTest<T> {
    test(v : any) : boolean {
        return is(v, T);
    }
    constructor() {
    }
    @defaultConstructor
    _TypeTest() {
    }
}

export namespace _ListQueueIterator {
    export type Constructors = '_ListQueueIterator';
    export type Interface<E> = Omit<_ListQueueIterator<E>, Constructors>;
}
@DartClass
@Implements(core.DartIterator)
export class _ListQueueIterator<E> implements core.DartIterator.Interface<E> {
    _queue : ListQueue<E>;

    _end : number;

    _modificationCount : number;

    _position : number;

    _current : E;

    constructor(queue : ListQueue<E>) {
    }
    @defaultConstructor
    _ListQueueIterator(queue : ListQueue<E>) {
        this._queue = queue;
        this._end = queue._tail;
        this._modificationCount = queue._modificationCount;
        this._position = queue._head;
    }
    get current() : E {
        return this._current;
    }
    moveNext() : boolean {
        this._queue._checkModification(this._modificationCount);
        if (this._position == this._end) {
            this._current = null;
            return false;
        }
        this._current = this._queue._table[this._position];
        this._position = (this._position + 1) & (this._queue._table.length - 1);
        return true;
    }
}

export namespace SetMixin {
    export type Constructors = 'SetMixin';
    export type Interface<E> = Omit<SetMixin<E>, Constructors>;
}
@DartClass
@Implements(core.DartSet)
export class SetMixin<E> implements core.DartSet.Interface<E> {
    @Abstract
    add(element : E) : boolean{ throw 'abstract'}
    @Abstract
    contains(element : core.DartObject) : boolean{ throw 'abstract'}
    @Abstract
    lookup(element : core.DartObject) : E{ throw 'abstract'}
    @Abstract
    remove(element : core.DartObject) : boolean{ throw 'abstract'}
    @AbstractProperty
    get iterator() : core.DartIterator<E>{ throw 'abstract'}
    @Abstract
    toSet() : core.DartSet<E>{ throw 'abstract'}
    @AbstractProperty
    get length() : number{ throw 'abstract'}
    get isEmpty() : boolean {
        return this.length == 0;
    }
    get isNotEmpty() : boolean {
        return this.length != 0;
    }
    clear() : void {
        this.removeAll(this.toList());
    }
    addAll(elements : core.DartIterable<E>) : void {
        for(let element of elements) this.add(element);
    }
    removeAll(elements : core.DartIterable<core.DartObject>) : void {
        for(let element of elements) this.remove(element);
    }
    retainAll(elements : core.DartIterable<core.DartObject>) : void {
        let toRemove : core.DartSet<E> = this.toSet();
        for(let o of elements) {
            toRemove.remove(o);
        }
        this.removeAll(toRemove);
    }
    removeWhere(test : <E>(element : E) => boolean) : void {
        let toRemove : core.DartList<any> = new core.DartList.literal();
        for(let element of this) {
            if (test(element)) toRemove.add(element);
        }
        this.removeAll(toRemove);
    }
    retainWhere(test : <E>(element : E) => boolean) : void {
        let toRemove : core.DartList<any> = new core.DartList.literal();
        for(let element of this) {
            if (!test(element)) toRemove.add(element);
        }
        this.removeAll(toRemove);
    }
    containsAll(other : core.DartIterable<core.DartObject>) : boolean {
        for(let o of other) {
            if (!this.contains(o)) return false;
        }
        return true;
    }
    union(other : core.DartSet<E>) : core.DartSet<E> {
        return ((_) : core.DartSet<E> =>  {
            {
                _.addAll(other);
                return _;
            }
        })(this.toSet());
    }
    intersection(other : core.DartSet<core.DartObject>) : core.DartSet<E> {
        let result : core.DartSet<E> = this.toSet();
        for(let element of this) {
            if (!other.contains(element)) result.remove(element);
        }
        return result;
    }
    difference(other : core.DartSet<core.DartObject>) : core.DartSet<E> {
        let result : core.DartSet<E> = this.toSet();
        for(let element of this) {
            if (other.contains(element)) result.remove(element);
        }
        return result;
    }
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        let result : core.DartList<E> = growable ? (((_) : core.DartList<E> =>  {
            {
                _.length = this.length;
                return _;
            }
        })(new core.DartList<E>())) : new core.DartList<E>(this.length);
        let i : number = 0;
        for(let element of this) result[i++] = element;
        return result;
    }
    map<T>(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        return new _internal.EfficientLengthMappedIterable<E,T>(this,f);
    }
    get single() : E {
        if (this.length > 1) throw _internal.IterableElementError.tooMany();
        let it : core.DartIterator<E> = this.iterator;
        if (!it.moveNext()) throw _internal.IterableElementError.noElement();
        let result : E = it.current;
        return result;
    }
    toString() : string {
        return IterableBase.iterableToFullString(this,'{','}');
    }
    where(f : <E>(element : E) => boolean) : core.DartIterable<E> {
        return new _internal.WhereIterable<E>(this,f);
    }
    expand<T>(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        return new _internal.ExpandIterable<E,T>(this,f);
    }
    forEach(f : <E>(element : E) => void) : void {
        for(let element of this) f(element);
    }
    reduce(combine : <E>(value : E,element : E) => E) : E {
        let iterator : core.DartIterator<E> = this.iterator;
        if (!iterator.moveNext()) {
            throw _internal.IterableElementError.noElement();
        }
        let value : E = iterator.current;
        while (iterator.moveNext()){
            value = combine(value,iterator.current);
        }
        return value;
    }
    fold<T>(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        let value = initialValue;
        for(let element of this) value = combine(value,element);
        return value;
    }
    every(f : <E>(element : E) => boolean) : boolean {
        for(let element of this) {
            if (!f(element)) return false;
        }
        return true;
    }
    join(separator? : string) : string {
        separator = separator || "";
        let iterator : core.DartIterator<E> = this.iterator;
        if (!iterator.moveNext()) return "";
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        if (separator == null || separator == "") {
            do{
                buffer.write(`${iterator.current}`);
            } while (iterator.moveNext());
        }else {
            buffer.write(`${iterator.current}`);
            while (iterator.moveNext()){
                buffer.write(separator);
                buffer.write(`${iterator.current}`);
            }
        }
        return buffer.toString();
    }
    any(test : <E>(element : E) => boolean) : boolean {
        for(let element of this) {
            if (test(element)) return true;
        }
        return false;
    }
    take(n : number) : core.DartIterable<E> {
        return new _internal.TakeIterable<E>(this,n);
    }
    takeWhile(test : <E>(value : E) => boolean) : core.DartIterable<E> {
        return new _internal.TakeWhileIterable<E>(this,test);
    }
    skip(n : number) : core.DartIterable<E> {
        return new _internal.SkipIterable<E>(this,n);
    }
    skipWhile(test : <E>(value : E) => boolean) : core.DartIterable<E> {
        return new _internal.SkipWhileIterable<E>(this,test);
    }
    get first() : E {
        let it : core.DartIterator<E> = this.iterator;
        if (!it.moveNext()) {
            throw _internal.IterableElementError.noElement();
        }
        return it.current;
    }
    get last() : E {
        let it : core.DartIterator<E> = this.iterator;
        if (!it.moveNext()) {
            throw _internal.IterableElementError.noElement();
        }
        let result : E;
        do{
            result = it.current;
        } while (it.moveNext());
        return result;
    }
    firstWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        for(let element of this) {
            if (test(element)) return element;
        }
        if (orElse != null) return orElse();
        throw _internal.IterableElementError.noElement();
    }
    lastWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        let result : E = null;
        let foundMatching : boolean = false;
        for(let element of this) {
            if (test(element)) {
                result = element;
                foundMatching = true;
            }
        }
        if (foundMatching) return result;
        if (orElse != null) return orElse();
        throw _internal.IterableElementError.noElement();
    }
    singleWhere(test : <E>(value : E) => boolean) : E {
        let result : E = null;
        let foundMatching : boolean = false;
        for(let element of this) {
            if (test(element)) {
                if (foundMatching) {
                    throw _internal.IterableElementError.tooMany();
                }
                result = element;
                foundMatching = true;
            }
        }
        if (foundMatching) return result;
        throw _internal.IterableElementError.noElement();
    }
    elementAt(index : number) : E {
        if (isNot(index, "number")) throw new core.ArgumentError.notNull("index");
        core.RangeError.checkNotNegative(index,"index");
        let elementIndex : number = 0;
        for(let element of this) {
            if (index == elementIndex) return element;
            elementIndex++;
        }
        throw new core.RangeError.index(index,this,"index",null,elementIndex);
    }
    constructor() {
    }
    @defaultConstructor
    SetMixin() {
    }
}

export namespace _SplayTree {
    export type Constructors = '_SplayTree';
    export type Interface<K,Node extends _SplayTreeNode<K>> = Omit<_SplayTree<K,Node extends _SplayTreeNode<K>>, Constructors>;
}
@DartClass
export class _SplayTree<K,Node extends _SplayTreeNode<K>> {
    @AbstractProperty
    get _root() : Node{ throw 'abstract'}
    set _root(newValue : Node){ throw 'abstract'}
    @AbstractProperty
    get _dummy() : Node{ throw 'abstract'}
    _count : number;

    _modificationCount : number;

    _splayCount : number;

    @AbstractProperty
    get _comparator() : <T>(a : K,b : K) => number{ throw 'abstract'}
    @AbstractProperty
    get _validKey() : <T>(value : any) => boolean{ throw 'abstract'}
    @Abstract
    _compare(key1 : K,key2 : K) : number{ throw 'abstract'}
    _splay(key : K) : number {
        if (op(Op.EQUALS,this._root,null)) return -1;
        let left : Node = this._dummy;
        let right : Node = this._dummy;
        let current : Node = this._root;
        let comp : number;
        while (true){
            comp = this._compare(current.key,key);
            if (comp > 0) {
                if (op(Op.EQUALS,current.left,null)) break;
                comp = this._compare(current.left.key,key);
                if (comp > 0) {
                    let tmp : _SplayTreeNode<K> = current.left;
                    current.left = tmp.right;
                    tmp.right = current;
                    current = tmp;
                    if (op(Op.EQUALS,current.left,null)) break;
                }
                right.left = current;
                right = current;
                current = current.left;
            }else if (comp < 0) {
                if (op(Op.EQUALS,current.right,null)) break;
                comp = this._compare(current.right.key,key);
                if (comp < 0) {
                    let tmp : Node = current.right;
                    current.right = tmp.left;
                    tmp.left = current;
                    current = tmp;
                    if (op(Op.EQUALS,current.right,null)) break;
                }
                left.right = current;
                left = current;
                current = current.right;
            }else {
                break;
            }
        }
        left.right = current.left;
        right.left = current.right;
        current.left = this._dummy.right;
        current.right = this._dummy.left;
        this._root = current;
        this._dummy.right = null;
        this._dummy.left = null;
        this._splayCount++;
        return comp;
    }
    _splayMin(node : Node) : Node {
        let current : Node = node;
        while (current.left != null){
            let left : Node = current.left;
            current.left = left.right;
            left.right = current;
            current = left;
        }
        return current;
    }
    _splayMax(node : Node) : Node {
        let current : Node = node;
        while (current.right != null){
            let right : Node = current.right;
            current.right = right.left;
            right.left = current;
            current = right;
        }
        return current;
    }
    _remove(key : K) : Node {
        if (op(Op.EQUALS,this._root,null)) return null;
        let comp : number = this._splay(key);
        if (comp != 0) return null;
        let result : Node = this._root;
        this._count--;
        if (op(Op.EQUALS,this._root.left,null)) {
            this._root = this._root.right;
        }else {
            let right : Node = this._root.right;
            this._root = this._splayMax(this._root.left);
            this._root.right = right;
        }
        this._modificationCount++;
        return result;
    }
    _addNewRoot(node : Node,comp : number) : void {
        this._count++;
        this._modificationCount++;
        if (op(Op.EQUALS,this._root,null)) {
            this._root = node;
            return;
        }
        if (comp < 0) {
            node.left = this._root;
            node.right = this._root.right;
            this._root.right = null;
        }else {
            node.right = this._root;
            node.left = this._root.left;
            this._root.left = null;
        }
        this._root = node;
    }
    get _first() : Node {
        if (op(Op.EQUALS,this._root,null)) return null;
        this._root = this._splayMin(this._root);
        return this._root;
    }
    get _last() : Node {
        if (op(Op.EQUALS,this._root,null)) return null;
        this._root = this._splayMax(this._root);
        return this._root;
    }
    _clear() : void {
        this._root = null;
        this._count = 0;
        this._modificationCount++;
    }
    constructor() {
    }
    @defaultConstructor
    _SplayTree() {
        this._count = 0;
        this._modificationCount = 0;
        this._splayCount = 0;
    }
}

export namespace ListBase {
    export type Constructors = 'ListBase';
    export type Interface<E> = Omit<ListBase<E>, Constructors>;
}
@DartClass
@With(ListMixin)
export class ListBase<E> extends core.DartObject implements ListMixin.Interface<E> {
    @Abstract
    elementAt(index : number) : E {
        throw 'from mixin';
    }
    @Abstract
    forEach(action : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    contains(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    every(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    any(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(element : E) => boolean) : E {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    where(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(previousValue : E,element : E) => E) : E {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    toSet() : core.DartSet<E> {
        throw 'from mixin';
    }
    @Abstract
    add(element : E) : void {
        throw 'from mixin';
    }
    @Abstract
    addAll(iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    remove(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    removeWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    retainWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    _filter(test : <E>(element : any) => boolean,retainMatching : boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    clear() : void {
        throw 'from mixin';
    }
    @Abstract
    removeLast() : E {
        throw 'from mixin';
    }
    @Abstract
    sort(compare? : <E>(a : E,b : E) => number) : void {
        throw 'from mixin';
    }
    @Abstract
    _compareAny(a : any,b : any) : number {
        throw 'from mixin';
    }
    @Abstract
    shuffle(random? : math.Random) : void {
        throw 'from mixin';
    }
    @Abstract
    asMap() : core.DartMap<number,E> {
        throw 'from mixin';
    }
    @Abstract
    sublist(start : number,end? : number) : core.DartList<E> {
        throw 'from mixin';
    }
    @Abstract
    getRange(start : number,end : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    removeRange(start : number,end : number) : void {
        throw 'from mixin';
    }
    @Abstract
    fillRange(start : number,end : number,fill? : E) : void {
        throw 'from mixin';
    }
    @Abstract
    setRange(start : number,end : number,iterable : core.DartIterable<E>,skipCount? : number) : void {
        skipCount = skipCount || 0;
        throw 'from mixin';
    }
    @Abstract
    replaceRange(start : number,end : number,newContents : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    indexOf(element : core.DartObject,startIndex? : number) : number {
        startIndex = startIndex || 0;
        throw 'from mixin';
    }
    @Abstract
    lastIndexOf(element : core.DartObject,startIndex? : number) : number {
        throw 'from mixin';
    }
    @Abstract
    insert(index : number,element : E) : void {
        throw 'from mixin';
    }
    @Abstract
    removeAt(index : number) : E {
        throw 'from mixin';
    }
    @Abstract
    insertAll(index : number,iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    setAll(index : number,iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    static listToString(list : core.DartList<any>) : string {
        return IterableBase.iterableToFullString(list,'[',']');
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListBase() {
    }
}

export namespace Queue {
    export type Constructors = never;
    export type Interface<E> = Omit<Queue<E>, Constructors>;
}
@DartClass
@Implements(_internal.EfficientLengthIterable)
export class Queue<E> implements _internal.EfficientLengthIterable.Interface<E> {
    constructor() {
    }
    @defaultFactory
    static $Queue<E>() : Queue<E> {
        return new ListQueue<E>();
    }
    @namedFactory
    static $from<E>(elements : core.DartIterable<any>) : Queue<E> {
        return new ListQueue.from(elements);
    }
    static from : new<E>(elements : core.DartIterable<any>) => Queue<E>;

    @Abstract
    removeFirst() : E{ throw 'abstract'}
    @Abstract
    removeLast() : E{ throw 'abstract'}
    @Abstract
    addFirst(value : E) : void{ throw 'abstract'}
    @Abstract
    addLast(value : E) : void{ throw 'abstract'}
    @Abstract
    add(value : E) : void{ throw 'abstract'}
    @Abstract
    remove(value : core.DartObject) : boolean{ throw 'abstract'}
    @Abstract
    addAll(iterable : core.DartIterable<E>) : void{ throw 'abstract'}
    @Abstract
    removeWhere(test : <E>(element : E) => boolean) : void{ throw 'abstract'}
    @Abstract
    retainWhere(test : <E>(element : E) => boolean) : void{ throw 'abstract'}
    @Abstract
    clear() : void{ throw 'abstract'}
}

export namespace SetBase {
    export type Constructors = SetMixin.Constructors | 'SetBase';
    export type Interface<E> = Omit<SetBase<E>, Constructors>;
}
@DartClass
export class SetBase<E> extends SetMixin<E> {
    static setToString(set : core.DartSet<any>) : string {
        return IterableBase.iterableToFullString(set,'{','}');
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetBase() {
    }
}

export namespace SplayTreeSet {
    export type Constructors = _SplayTree.Constructors | 'SplayTreeSet';
    export type Interface<E> = Omit<SplayTreeSet<E>, Constructors>;
}
@DartClass
@With(IterableMixin,SetMixin)
export class SplayTreeSet<E> extends _SplayTree<E,_SplayTreeNode<E>> implements IterableMixin.Interface<E>,SetMixin.Interface<E> {
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    where(f : <E>(element : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    forEach(f : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(value : E,element : E) => E) : E {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    every(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    any(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(value : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(value : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(value : E) => boolean) : E {
        throw 'from mixin';
    }
    @Abstract
    elementAt(index : number) : E {
        throw 'from mixin';
    }
    @Abstract
    removeWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    retainWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    containsAll(other : core.DartIterable<core.DartObject>) : boolean {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    where(f : <E>(element : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    forEach(f : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(value : E,element : E) => E) : E {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    every(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    any(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    take(n : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(value : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    skip(n : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(value : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(value : E) => boolean) : E {
        throw 'from mixin';
    }
    @Abstract
    elementAt(index : number) : E {
        throw 'from mixin';
    }
    _root : _SplayTreeNode<E>;

    _dummy : _SplayTreeNode<E>;

    _comparator : <T>(a : E,b : E) => number;

    _validKey : <T>(value : any) => boolean;

    constructor(compare? : <E>(key1 : E,key2 : E) => number,isValidKey? : <E>(potentialKey : any) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SplayTreeSet(compare? : <E>(key1 : E,key2 : E) => number,isValidKey? : <E>(potentialKey : any) => boolean) {
        this._dummy = new _SplayTreeNode<E>(null);
        this._comparator = (compare || _defaultCompare());
        this._validKey = (isValidKey || ((v : any) =>  {
            return is(v, E);
        }));
    }
    @namedFactory
    static $from<E>(elements : core.DartIterable<any>,compare? : <E>(key1 : E,key2 : E) => number,isValidKey? : <E>(potentialKey : any) => boolean) : SplayTreeSet<E> {
        let result : SplayTreeSet<E> = new SplayTreeSet<E>(compare,isValidKey);
        for(let element of elements) {
            let e : E = element as core.DartObject;
            result.add(e);
        }
        return result;
    }
    static from : new<E>(elements : core.DartIterable<any>,compare : <E>(key1 : E,key2 : E) => number,isValidKey : <E>(potentialKey : any) => boolean) => SplayTreeSet<E>;

    _compare(e1 : E,e2 : E) : number {
        return this._comparator(e1,e2);
    }
    get iterator() : core.DartIterator<E> {
        return new _SplayTreeKeyIterator<E>(this);
    }
    get length() : number {
        return this._count;
    }
    get isEmpty() : boolean {
        return op(Op.EQUALS,this._root,null);
    }
    get isNotEmpty() : boolean {
        return this._root != null;
    }
    get first() : E {
        if (this._count == 0) throw _internal.IterableElementError.noElement();
        return this._first.key;
    }
    get last() : E {
        if (this._count == 0) throw _internal.IterableElementError.noElement();
        return this._last.key;
    }
    get single() : E {
        if (this._count == 0) throw _internal.IterableElementError.noElement();
        if (this._count > 1) throw _internal.IterableElementError.tooMany();
        return this._root.key;
    }
    contains(object : core.DartObject) : boolean {
        return this._validKey(object) && this._splay(object as any) == 0;
    }
    add(element : E) : boolean {
        let compare : number = this._splay(element);
        if (compare == 0) return false;
        this._addNewRoot(new _SplayTreeNode<any>(element),compare);
        return true;
    }
    remove(object : core.DartObject) : boolean {
        if (!this._validKey(object)) return false;
        return this._remove(object as any) != null;
    }
    addAll(elements : core.DartIterable<E>) : void {
        for(let element of elements) {
            let compare : number = this._splay(element);
            if (compare != 0) {
                this._addNewRoot(new _SplayTreeNode<any>(element),compare);
            }
        }
    }
    removeAll(elements : core.DartIterable<core.DartObject>) : void {
        for(let element of elements) {
            if (this._validKey(element)) this._remove(element as any);
        }
    }
    retainAll(elements : core.DartIterable<core.DartObject>) : void {
        let retainSet : SplayTreeSet<E> = new SplayTreeSet<E>(this._comparator,this._validKey);
        let modificationCount : number = this._modificationCount;
        for(let object of elements) {
            if (modificationCount != this._modificationCount) {
                throw new core.ConcurrentModificationError(this);
            }
            if (this._validKey(object) && this._splay(object as any) == 0) {
                retainSet.add(this._root.key);
            }
        }
        if (retainSet._count != this._count) {
            this._root = retainSet._root;
            this._count = retainSet._count;
            this._modificationCount++;
        }
    }
    lookup(object : core.DartObject) : E {
        if (!this._validKey(object)) return null;
        let comp : number = this._splay(object as any);
        if (comp != 0) return null;
        return this._root.key;
    }
    intersection(other : core.DartSet<core.DartObject>) : core.DartSet<E> {
        let result : core.DartSet<E> = new SplayTreeSet<E>(this._comparator,this._validKey);
        for(let element of this) {
            if (other.contains(element)) result.add(element);
        }
        return result;
    }
    difference(other : core.DartSet<core.DartObject>) : core.DartSet<E> {
        let result : core.DartSet<E> = new SplayTreeSet<E>(this._comparator,this._validKey);
        for(let element of this) {
            if (!other.contains(element)) result.add(element);
        }
        return result;
    }
    union(other : core.DartSet<E>) : core.DartSet<E> {
        return ((_) : SplayTreeSet<E> =>  {
            {
                _.addAll(other);
                return _;
            }
        })(this._clone());
    }
    _clone() : SplayTreeSet<E> {
        let set = new SplayTreeSet<E>(this._comparator,this._validKey);
        set._count = this._count;
        set._root = this._copyNode(this._root);
        return set;
    }
    _copyNode(node : _SplayTreeNode<E>) : _SplayTreeNode<E> {
        if (op(Op.EQUALS,node,null)) return null;
        return ((_) : _SplayTreeNode<E> =>  {
            {
                _.left = this._copyNode(node.left);
                _.right = this._copyNode(node.right);
                return _;
            }
        })(new _SplayTreeNode<E>(node.key));
    }
    clear() : void {
        this._clear();
    }
    toSet() : core.DartSet<E> {
        return this._clone();
    }
    toString() : string {
        return IterableBase.iterableToFullString(this,'{','}');
    }
}

export namespace SplayTreeMap {
    export type Constructors = _SplayTree.Constructors | 'SplayTreeMap' | '_internal';
    export type Interface<K,V> = Omit<SplayTreeMap<K,V>, Constructors>;
}
@DartClass
@Implements(core.DartMap)
export class SplayTreeMap<K,V> extends _SplayTree<K,_SplayTreeMapNode<K,V>> implements core.DartMap.Interface<K,V> {
    _root : _SplayTreeMapNode<K,V>;

    _dummy : _SplayTreeMapNode<K,V>;

    _comparator : <T>(a : K,b : K) => number;

    _validKey : <T>(value : any) => boolean;

    constructor(compare? : <K,V>(key1 : K,key2 : K) => number,isValidKey? : <K,V>(potentialKey : any) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SplayTreeMap(compare? : <K,V>(key1 : K,key2 : K) => number,isValidKey? : <K,V>(potentialKey : any) => boolean) {
        this._dummy = new _SplayTreeMapNode<K,V>(null,null);
        this._comparator = (compare || _defaultCompare());
        this._validKey = (isValidKey || ((v : any) =>  {
            return is(v, K);
        }));
    }
    @namedFactory
    static $from<K,V>(other : core.DartMap<any,any>,compare? : <K,V>(key1 : K,key2 : K) => number,isValidKey? : <K,V>(potentialKey : any) => boolean) : SplayTreeMap<K,V> {
        let result : SplayTreeMap<K,V> = new SplayTreeMap<K,V>(compare,isValidKey);
        other.forEach((k : any,v : any) =>  {
            op(Op.INDEX_ASSIGN,result,k as core.DartObject,v as core.DartObject);
        });
        return result;
    }
    static from : new<K,V>(other : core.DartMap<any,any>,compare : <K,V>(key1 : K,key2 : K) => number,isValidKey : <K,V>(potentialKey : any) => boolean) => SplayTreeMap<K,V>;

    @namedFactory
    static $fromIterable<K,V>(iterable : core.DartIterable<any>,_namedArguments? : {key? : <K,V>(element : any) => K,value? : <K,V>(element : any) => V,compare? : <K,V>(key1 : K,key2 : K) => number,isValidKey? : <K,V>(potentialKey : any) => boolean}) : SplayTreeMap<K,V> {
        let {key,value,compare,isValidKey} = Object.assign({
        }, _namedArguments );
        let map : SplayTreeMap<K,V> = new SplayTreeMap<K,V>(compare,isValidKey);
        Maps._fillMapWithMappedIterable(map,iterable,key,value);
        return map;
    }
    static fromIterable : new<K,V>(iterable : core.DartIterable<any>,_namedArguments? : {key? : <K,V>(element : any) => K,value? : <K,V>(element : any) => V,compare? : <K,V>(key1 : K,key2 : K) => number,isValidKey? : <K,V>(potentialKey : any) => boolean}) => SplayTreeMap<K,V>;

    @namedFactory
    static $fromIterables<K,V>(keys : core.DartIterable<K>,values : core.DartIterable<V>,compare? : <K,V>(key1 : K,key2 : K) => number,isValidKey? : <K,V>(potentialKey : any) => boolean) : SplayTreeMap<K,V> {
        let map : SplayTreeMap<K,V> = new SplayTreeMap<K,V>(compare,isValidKey);
        Maps._fillMapWithIterables(map,keys,values);
        return map;
    }
    static fromIterables : new<K,V>(keys : core.DartIterable<K>,values : core.DartIterable<V>,compare : <K,V>(key1 : K,key2 : K) => number,isValidKey : <K,V>(potentialKey : any) => boolean) => SplayTreeMap<K,V>;

    _compare(key1 : K,key2 : K) : number {
        return this._comparator(key1,key2);
    }
    @namedConstructor
    _internal() {
        this._dummy = new _SplayTreeMapNode<K,V>(null,null);
    }
    static _internal : new<K,V>() => SplayTreeMap<K,V>;

    [OperatorMethods.INDEX](key : core.DartObject) : V {
        if (!this._validKey(key)) return null;
        if (this._root != null) {
            let comp : number = this._splay(key as any);
            if (comp == 0) {
                return this._root.value;
            }
        }
        return null;
    }
    remove(key : core.DartObject) : V {
        if (!this._validKey(key)) return null;
        let mapRoot : _SplayTreeMapNode<K,V> = this._remove(key as any);
        if (mapRoot != null) return mapRoot.value;
        return null;
    }
    [OperatorMethods.INDEX_EQ](key : K,value : V) : void {
        if (op(Op.EQUALS,key,null)) throw new core.ArgumentError(key);
        let comp : number = this._splay(key);
        if (comp == 0) {
            this._root.value = value;
            return;
        }
        this._addNewRoot(new _SplayTreeMapNode<any,any>(key,value),comp);
    }
    putIfAbsent(key : K,ifAbsent : <K,V>() => V) : V {
        if (op(Op.EQUALS,key,null)) throw new core.ArgumentError(key);
        let comp : number = this._splay(key);
        if (comp == 0) {
            return this._root.value;
        }
        let modificationCount : number = this._modificationCount;
        let splayCount : number = this._splayCount;
        let value : V = ifAbsent();
        if (modificationCount != this._modificationCount) {
            throw new core.ConcurrentModificationError(this);
        }
        if (splayCount != this._splayCount) {
            comp = this._splay(key);
            /* TODO (AssertStatementImpl) : assert (comp != 0); */;
        }
        this._addNewRoot(new _SplayTreeMapNode<any,any>(key,value),comp);
        return value;
    }
    addAll(other : core.DartMap<K,V>) : void {
        other.forEach((key : K,value : V) =>  {
            op(Op.INDEX_ASSIGN,this,key,value);
        });
    }
    get isEmpty() : boolean {
        return (op(Op.EQUALS,this._root,null));
    }
    get isNotEmpty() : boolean {
        return !this.isEmpty;
    }
    forEach(f : <K,V>(key : K,value : V) => void) : void {
        let nodes : core.DartIterator<_SplayTreeNode<K>> = new _SplayTreeNodeIterator<K>(this);
        while (nodes.moveNext()){
            let node : _SplayTreeMapNode<K,V> = nodes.current;
            f(node.key,node.value);
        }
    }
    get length() : number {
        return this._count;
    }
    clear() : void {
        this._clear();
    }
    containsKey(key : core.DartObject) : boolean {
        return this._validKey(key) && this._splay(key as any) == 0;
    }
    containsValue(value : core.DartObject) : boolean {
        let found : boolean = false;
        let initialSplayCount : number = this._splayCount;
        var visit : (node : _SplayTreeMapNode<any,any>) => boolean = (node : _SplayTreeMapNode<any,any>) : boolean =>  {
            while (node != null){
                if (op(Op.EQUALS,node.value,value)) return true;
                if (initialSplayCount != this._splayCount) {
                    throw new core.ConcurrentModificationError(this);
                }
                if (node.right != null && visit(node.right)) return true;
                node = node.left;
            }
            return false;
        };
        return visit(this._root);
    }
    get keys() : core.DartIterable<K> {
        return new _SplayTreeKeyIterable<K>(this);
    }
    get values() : core.DartIterable<V> {
        return new _SplayTreeValueIterable<K,V>(this);
    }
    toString() : string {
        return Maps.mapToString(this);
    }
    firstKey() : K {
        if (op(Op.EQUALS,this._root,null)) return null;
        return this._first.key;
    }
    lastKey() : K {
        if (op(Op.EQUALS,this._root,null)) return null;
        return this._last.key;
    }
    lastKeyBefore(key : K) : K {
        if (op(Op.EQUALS,key,null)) throw new core.ArgumentError(key);
        if (op(Op.EQUALS,this._root,null)) return null;
        let comp : number = this._splay(key);
        if (comp < 0) return this._root.key;
        let node : _SplayTreeNode<K> = this._root.left;
        if (op(Op.EQUALS,node,null)) return null;
        while (node.right != null){
            node = node.right;
        }
        return node.key;
    }
    firstKeyAfter(key : K) : K {
        if (op(Op.EQUALS,key,null)) throw new core.ArgumentError(key);
        if (op(Op.EQUALS,this._root,null)) return null;
        let comp : number = this._splay(key);
        if (comp > 0) return this._root.key;
        let node : _SplayTreeNode<K> = this._root.right;
        if (op(Op.EQUALS,node,null)) return null;
        while (node.left != null){
            node = node.left;
        }
        return node.key;
    }
}

export namespace DoubleLinkedQueueEntry {
    export type Constructors = _DoubleLink.Constructors | 'DoubleLinkedQueueEntry';
    export type Interface<E> = Omit<DoubleLinkedQueueEntry<E>, Constructors>;
}
@DartClass
export class DoubleLinkedQueueEntry<E> extends _DoubleLink<DoubleLinkedQueueEntry<E>> {
    element : E;

    constructor(element : E) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoubleLinkedQueueEntry(element : E) {
        this.element = element;
    }
    append(e : E) : void {
        new DoubleLinkedQueueEntry<E>(e)._link(this,this._nextLink);
    }
    prepend(e : E) : void {
        new DoubleLinkedQueueEntry<E>(e)._link(this._previousLink,this);
    }
    remove() : E {
        this._unlink();
        return this.element;
    }
    previousEntry() : DoubleLinkedQueueEntry<E> {
        return this._previousLink;
    }
    nextEntry() : DoubleLinkedQueueEntry<E> {
        return this._nextLink;
    }
}

export namespace _SplayTreeKeyIterator {
    export type Constructors = _SplayTreeIterator.Constructors | '_SplayTreeKeyIterator';
    export type Interface<K> = Omit<_SplayTreeKeyIterator<K>, Constructors>;
}
@DartClass
export class _SplayTreeKeyIterator<K> extends _SplayTreeIterator<K,K> {
    constructor(map : _SplayTree<K,_SplayTreeNode<K>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SplayTreeKeyIterator(map : _SplayTree<K,_SplayTreeNode<K>>) {
        super._SplayTreeIterator(map);
    }
    _getValue(node : _SplayTreeNode<K>) : K {
        return node.key;
    }
}

export namespace _SplayTreeValueIterator {
    export type Constructors = _SplayTreeIterator.Constructors | '_SplayTreeValueIterator';
    export type Interface<K,V> = Omit<_SplayTreeValueIterator<K,V>, Constructors>;
}
@DartClass
export class _SplayTreeValueIterator<K,V> extends _SplayTreeIterator<K,V> {
    constructor(map : SplayTreeMap<K,V>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SplayTreeValueIterator(map : SplayTreeMap<K,V>) {
        super._SplayTreeIterator(map);
    }
    _getValue(node : _SplayTreeNode<K>) : V {
        let mapNode : _SplayTreeMapNode<K,V> = node as any;
        return mapNode.value;
    }
}

export namespace _SplayTreeNodeIterator {
    export type Constructors = _SplayTreeIterator.Constructors | '_SplayTreeNodeIterator' | 'startAt';
    export type Interface<K> = Omit<_SplayTreeNodeIterator<K>, Constructors>;
}
@DartClass
export class _SplayTreeNodeIterator<K> extends _SplayTreeIterator<K,_SplayTreeNode<K>> {
    constructor(tree : _SplayTree<K,_SplayTreeNode<K>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SplayTreeNodeIterator(tree : _SplayTree<K,_SplayTreeNode<K>>) {
        super._SplayTreeIterator(tree);
    }
    @namedConstructor
    startAt(tree : _SplayTree<K,_SplayTreeNode<K>>,startKey : K) {
        super.startAt(tree,startKey);
    }
    static startAt : new<K>(tree : _SplayTree<K,_SplayTreeNode<K>>,startKey : K) => _SplayTreeNodeIterator<K>;

    _getValue(node : _SplayTreeNode<K>) : _SplayTreeNode<K> {
        return node;
    }
}

export namespace _SplayTreeMapNode {
    export type Constructors = _SplayTreeNode.Constructors | '_SplayTreeMapNode';
    export type Interface<K,V> = Omit<_SplayTreeMapNode<K,V>, Constructors>;
}
@DartClass
export class _SplayTreeMapNode<K,V> extends _SplayTreeNode<K> {
    value : V;

    constructor(key : K,value : V) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SplayTreeMapNode(key : K,value : V) {
        super._SplayTreeNode(key);
        this.value = value;
    }
}

export namespace _DoubleLinkedQueueEntry {
    export type Constructors = DoubleLinkedQueueEntry.Constructors | '_DoubleLinkedQueueEntry';
    export type Interface<E> = Omit<_DoubleLinkedQueueEntry<E>, Constructors>;
}
@DartClass
export class _DoubleLinkedQueueEntry<E> extends DoubleLinkedQueueEntry<E> {
    _queue : DoubleLinkedQueue<E>;

    constructor(element : E,_queue : DoubleLinkedQueue<E>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DoubleLinkedQueueEntry(element : E,_queue : DoubleLinkedQueue<E>) {
        super.DoubleLinkedQueueEntry(element);
        this._queue = _queue;
    }
    @Abstract
    _asNonSentinelEntry() : DoubleLinkedQueueEntry<E>{ throw 'abstract'}
    _append(e : E) : void {
        new _DoubleLinkedQueueElement<E>(e,this._queue)._link(this,this._nextLink);
    }
    _prepend(e : E) : void {
        new _DoubleLinkedQueueElement<E>(e,this._queue)._link(this._previousLink,this);
    }
    @Abstract
    _remove() : E{ throw 'abstract'}
    get _element() : E {
        return this.element;
    }
    nextEntry() : DoubleLinkedQueueEntry<E> {
        let entry : _DoubleLinkedQueueEntry<E> = this._nextLink as any;
        return entry._asNonSentinelEntry();
    }
    previousEntry() : DoubleLinkedQueueEntry<E> {
        let entry : _DoubleLinkedQueueEntry<E> = this._previousLink as any;
        return entry._asNonSentinelEntry();
    }
}

export namespace _HashSetBase {
    export type Constructors = SetBase.Constructors | '_HashSetBase';
    export type Interface<E> = Omit<_HashSetBase<E>, Constructors>;
}
@DartClass
export class _HashSetBase<E> extends SetBase<E> {
    difference(other : core.DartSet<core.DartObject>) : core.DartSet<E> {
        let result : core.DartSet<E> = this._newSet();
        for(let element of this) {
            if (!other.contains(element)) result.add(element);
        }
        return result;
    }
    intersection(other : core.DartSet<core.DartObject>) : core.DartSet<E> {
        let result : core.DartSet<E> = this._newSet();
        for(let element of this) {
            if (other.contains(element)) result.add(element);
        }
        return result;
    }
    @Abstract
    _newSet() : core.DartSet<E>{ throw 'abstract'}
    toSet() : core.DartSet<E> {
        return ((_) : core.DartSet<E> =>  {
            {
                _.addAll(this);
                return _;
            }
        })(this._newSet());
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HashSetBase() {
    }
}

export namespace _DoubleLinkedQueueSentinel {
    export type Constructors = _DoubleLinkedQueueEntry.Constructors | '_DoubleLinkedQueueSentinel';
    export type Interface<E> = Omit<_DoubleLinkedQueueSentinel<E>, Constructors>;
}
@DartClass
export class _DoubleLinkedQueueSentinel<E> extends _DoubleLinkedQueueEntry<E> {
    constructor(queue : DoubleLinkedQueue<E>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DoubleLinkedQueueSentinel(queue : DoubleLinkedQueue<E>) {
        super._DoubleLinkedQueueEntry(null,queue);
        this._previousLink = this;
        this._nextLink = this;
    }
    _asNonSentinelEntry() : DoubleLinkedQueueEntry<E> {
        return null;
    }
    _remove() : E {
        throw _internal.IterableElementError.noElement();
    }
    get _element() : E {
        throw _internal.IterableElementError.noElement();
    }
}

export namespace _DoubleLinkedQueueElement {
    export type Constructors = _DoubleLinkedQueueEntry.Constructors | '_DoubleLinkedQueueElement';
    export type Interface<E> = Omit<_DoubleLinkedQueueElement<E>, Constructors>;
}
@DartClass
export class _DoubleLinkedQueueElement<E> extends _DoubleLinkedQueueEntry<E> {
    constructor(element : E,queue : DoubleLinkedQueue<E>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DoubleLinkedQueueElement(element : E,queue : DoubleLinkedQueue<E>) {
        super._DoubleLinkedQueueEntry(element,queue);
    }
    append(e : E) : void {
        this._append(e);
        if (this._queue != null) this._queue._elementCount++;
    }
    prepend(e : E) : void {
        this._prepend(e);
        if (this._queue != null) this._queue._elementCount++;
    }
    _remove() : E {
        this._queue = null;
        this._unlink();
        return this.element;
    }
    remove() : E {
        if (this._queue != null) this._queue._elementCount--;
        return this._remove();
    }
    _asNonSentinelEntry() : _DoubleLinkedQueueElement<E> {
        return this;
    }
}

export class properties {
    private static __$_toStringVisiting : core.DartList<any>;
    static get _toStringVisiting() : core.DartList<any> { 
        if (this.__$_toStringVisiting===undefined) {
            this.__$_toStringVisiting = new core.DartList.literal();
        }
        return this.__$_toStringVisiting;
    }
    static set _toStringVisiting(__$value : core.DartList<any>)  { 
        this.__$_toStringVisiting = __$value;
    }

}
