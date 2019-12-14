/** Library asset:datahedgehog_monitor/lib/lib/foundation/basic_types.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace BitField {
    export type Constructors = 'BitField' | 'filled';
    export type Interface<T extends any> = Omit<BitField<T extends any>, Constructors>;
}
@DartClass
export class BitField<T extends any> {
    constructor(_length : number) {
    }
    @defaultConstructor
    BitField(_length : number) {
        this._bits = BitField._allZeros;
        this._bits = value ? BitField._allOnes : BitField._allZeros;
        this.assert = assert;
        this._length = _length;
    }
     : any;

     : any;

    _bits;

    @namedConstructor
    filled(_length : number,value : boolean) {
        this._bits = BitField._allZeros;
        this._bits = value ? BitField._allOnes : BitField._allZeros;
        this.assert = assert;
        this._length = _length;
    }
    static filled : new<T extends any>(_length : number,value : boolean) => BitField<T>;

     : any;

     : any;

    _bits;

    _length : number;

    _bits : number;

    private static __$_smiBits : number;
    static get _smiBits() : number { 
        if (this.__$_smiBits===undefined) {
            this.__$_smiBits = 62;
        }
        return this.__$_smiBits;
    }

    private static __$_allZeros : number;
    static get _allZeros() : number { 
        if (this.__$_allZeros===undefined) {
            this.__$_allZeros = 0;
        }
        return this.__$_allZeros;
    }

    private static __$_allOnes : number;
    static get _allOnes() : number { 
        if (this.__$_allOnes===undefined) {
            this.__$_allOnes = properties.kMaxUnsignedSMI;
        }
        return this.__$_allOnes;
    }

    [OperatorMethods.INDEX](index : T) : boolean {
        /* TODO (AssertStatementImpl) : assert (index.index < _length); */;
        return op(Op.GT,(op(Op.BITAND,this._bits,1 << index.index)),0);
    }
    [OperatorMethods.INDEX_EQ](index : T,value : boolean) : void {
        /* TODO (AssertStatementImpl) : assert (index.index < _length); */;
        if (value) this._bits = op(Op.BITOR,this._bits,(1 << index.index));else this._bits = op(Op.BITAND,this._bits,~(1 << index.index));
    }
    reset(value? : boolean) : void {
        value = value || false;
        this._bits = value ? BitField._allOnes : BitField._allZeros;
    }
}

export namespace CachingIterable {
    export type Constructors = core.DartIterableBase.Constructors | 'CachingIterable';
    export type Interface<E> = Omit<CachingIterable<E>, Constructors>;
}
@DartClass
export class CachingIterable<E> extends core.DartIterableBase<E> {
    constructor(_prefillIterator : core.DartIterator<E>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CachingIterable(_prefillIterator : core.DartIterator<E>) {
        this._results = new core.DartList.literal<E>();
        this._prefillIterator = _prefillIterator;
    }
    _prefillIterator : core.DartIterator<E>;

    _results : core.DartList<E>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterator() : core.DartIterator<E> {
        return _LazyListIterator(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    map<T>(f : <T,E>(e : E) => T) : core.DartIterable<T> {
        return CachingIterable(super.map(f).iterator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    where(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        return CachingIterable(super.where(test).iterator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    expand<T>(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        return CachingIterable(super.expand(f).iterator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    take(count : number) : core.DartIterable<E> {
        return CachingIterable(super.take(count).iterator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    takeWhile(test : <E>(value : E) => boolean) : core.DartIterable<E> {
        return CachingIterable(super.takeWhile(test).iterator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    skip(count : number) : core.DartIterable<E> {
        return CachingIterable(super.skip(count).iterator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    skipWhile(test : <E>(value : E) => boolean) : core.DartIterable<E> {
        return CachingIterable(super.skipWhile(test).iterator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        this._precacheEntireList();
        return this._results.length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        this._precacheEntireList();
        return op(Op.LT,core.DartList<E>,E);
        op(Op.GT,,.from(this._results,{
            growable : growable}));
    }
    _precacheEntireList() : void {
        while (this._fillNext()){
        }
    }
    _fillNext() : boolean {
        if (!this._prefillIterator.moveNext()) return false;
        this._results.add(this._prefillIterator.current);
        return true;
    }
}

export namespace _LazyListIterator {
    export type Constructors = '_LazyListIterator';
    export type Interface<E> = Omit<_LazyListIterator<E>, Constructors>;
}
@DartClass
@Implements(core.DartIterator)
export class _LazyListIterator<E> implements core.DartIterator.Interface<E> {
    constructor(_owner : CachingIterable<E>) {
    }
    @defaultConstructor
    _LazyListIterator(_owner : CachingIterable<E>) {
        this._index = -1;
        this._owner = _owner;
    }
    _owner : CachingIterable<E>;

    _index : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get current() : E {
        /* TODO (AssertStatementImpl) : assert (_index >= 0); */;
        if (this._index < 0 || this._index == this._owner._results.length) return null;
        return this._owner._results[this._index];
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveNext() : boolean {
        if (this._index >= this._owner._results.length) return false;
        this._index += 1;
        if (this._index == this._owner._results.length) return this._owner._fillNext();
        return true;
    }
}

export namespace Factory {
    export type Constructors = 'Factory';
    export type Interface<T> = Omit<Factory<T>, Constructors>;
}
@DartClass
export class Factory<T> {
    constructor(constructor : <T>() => T) {
    }
    @defaultConstructor
    Factory(constructor : <T>() => T) {
        this.assert = assert;
        this.constructor = constructor;
    }
     : any;

    constructor : <T>() => T;

    get type() : core.Type {
        return T;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Factory(type: ${this.type})`;
    }
}

export class properties {
    private static __$kMaxUnsignedSMI : number;
    static get kMaxUnsignedSMI() : number { 
        if (this.__$kMaxUnsignedSMI===undefined) {
            this.__$kMaxUnsignedSMI = 4611686018427387903;
        }
        return this.__$kMaxUnsignedSMI;
    }
    static set kMaxUnsignedSMI(__$value : number)  { 
        this.__$kMaxUnsignedSMI = __$value;
    }

}
