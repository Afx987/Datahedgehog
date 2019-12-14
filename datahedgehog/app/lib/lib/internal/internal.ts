/** Library asset:datahedgehog_monitor/lib/lib/internal/internal.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as collection from "@dart2ts/dart/core";

export var makeListFixedLength : (growableList : core.DartList<any>) => core.DartList<any> = (growableList : core.DartList<any>) : core.DartList<any> =>  {
};
export var hexDigitValue : (char : number) => number = (char : number) : number =>  {
    /* TODO (AssertStatementImpl) : assert (char >= 0 && char <= 0xFFFF); */;
    let digit0 : number = 48;
    let a : number = 97;
    let f : number = 102;
    let digit : number = char ^ digit0;
    if (digit <= 9) return digit;
    let letter : number = (char | 32);
    if (a <= letter && letter <= f) return letter - (a - 10);
    return -1;
};
export var parseHexByte : (source : string,index : number) => number = (source : string,index : number) : number =>  {
    /* TODO (AssertStatementImpl) : assert (index + 2 <= source.length); */;
    let digit1 : number = hexDigitValue(new core.DartString(source).codeUnitAt(index));
    let digit2 : number = hexDigitValue(new core.DartString(source).codeUnitAt(index + 1));
    return digit1 * 16 + digit2 - (digit2 & 256);
};
export var _checkCount : (count : number) => number = (count : number) : number =>  {
    if (isNot(count, "number")) {
        throw new core.ArgumentError.value(count,"count","is not an integer");
    }
    core.RangeError.checkNotNegative(count,"count");
    return count;
};
export var printToConsole : (line : string) => void = (line : string) : void =>  {
};
export var makeFixedListUnmodifiable : (fixedLengthList : core.DartList<any>) => core.DartList<any> = (fixedLengthList : core.DartList<any>) : core.DartList<any> =>  {
};
export namespace TakeWhileIterator {
    export type Constructors = core.DartIterator.Constructors | 'TakeWhileIterator';
    export type Interface<E> = Omit<TakeWhileIterator<E>, Constructors>;
}
@DartClass
export class TakeWhileIterator<E> extends core.DartIterator<E> {
    _iterator : core.DartIterator<E>;

    _f : <E>(element : E) => boolean;

    _isFinished : boolean;

    constructor(_iterator : core.DartIterator<E>,_f : <E>(element : E) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TakeWhileIterator(_iterator : core.DartIterator<E>,_f : <E>(element : E) => boolean) {
        this._isFinished = false;
        this._iterator = _iterator;
        this._f = _f;
    }
    moveNext() : boolean {
        if (this._isFinished) return false;
        if (!this._iterator.moveNext() || !this._f(this._iterator.current)) {
            this._isFinished = true;
            return false;
        }
        return true;
    }
    get current() : E {
        if (this._isFinished) return null;
        return this._iterator.current;
    }
}

export namespace MappedIterable {
    export type Constructors = core.DartIterable.Constructors | '_';
    export type Interface<S,T> = Omit<MappedIterable<S,T>, Constructors>;
}
@DartClass
export class MappedIterable<S,T> extends core.DartIterable<T> {
    _iterable : core.DartIterable<S>;

    _f : <S,T>(value : S) => T;

    constructor(iterable : core.DartIterable<S>,function : <S,T>(value : S) => T) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $MappedIterable<S,T>(iterable : core.DartIterable<S>,function : <S,T>(value : S) => T) : MappedIterable<S,T> {
        if (is(iterable, EfficientLengthIterable<any>)) {
            return new EfficientLengthMappedIterable<S,T>(iterable,function);
        }
        return new MappedIterable._(iterable,function);
    }
    @namedConstructor
    _(_iterable : core.DartIterable<S>,_f : <S,T>(value : S) => T) {
        this._iterable = _iterable;
        this._f = _f;
    }
    static _ : new<S,T>(_iterable : core.DartIterable<S>,_f : <S,T>(value : S) => T) => MappedIterable<S,T>;

    get iterator() : core.DartIterator<T> {
        return new MappedIterator<S,T>(this._iterable.iterator,this._f);
    }
    get length() : number {
        return this._iterable.length;
    }
    get isEmpty() : boolean {
        return this._iterable.isEmpty;
    }
    get first() : T {
        return this._f(this._iterable.first);
    }
    get last() : T {
        return this._f(this._iterable.last);
    }
    get single() : T {
        return this._f(this._iterable.single);
    }
    elementAt(index : number) : T {
        return this._f(this._iterable.elementAt(index));
    }
}

export namespace MappedIterator {
    export type Constructors = core.DartIterator.Constructors | 'MappedIterator';
    export type Interface<S,T> = Omit<MappedIterator<S,T>, Constructors>;
}
@DartClass
export class MappedIterator<S,T> extends core.DartIterator<T> {
    _current : T;

    _iterator : core.DartIterator<S>;

    _f : <S,T>(value : S) => T;

    constructor(_iterator : core.DartIterator<S>,_f : <S,T>(value : S) => T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MappedIterator(_iterator : core.DartIterator<S>,_f : <S,T>(value : S) => T) {
        this._iterator = _iterator;
        this._f = _f;
    }
    moveNext() : boolean {
        if (this._iterator.moveNext()) {
            this._current = this._f(this._iterator.current);
            return true;
        }
        this._current = null;
        return false;
    }
    get current() : T {
        return this._current;
    }
}

export namespace Sort {
    export type Constructors = 'Sort';
    export type Interface = Omit<Sort, Constructors>;
}
@DartClass
export class Sort {
    private static __$_INSERTION_SORT_THRESHOLD : number;
    static get _INSERTION_SORT_THRESHOLD() : number { 
        if (this.__$_INSERTION_SORT_THRESHOLD===undefined) {
            this.__$_INSERTION_SORT_THRESHOLD = 32;
        }
        return this.__$_INSERTION_SORT_THRESHOLD;
    }

    static sort<E>(a : core.DartList<E>,compare : <E>(a : E,b : E) => number) : void {
        Sort._doSort(a,0,a.length - 1,compare);
    }
    static sortRange<E>(a : core.DartList<E>,from : number,to : number,compare : <E>(a : E,b : E) => number) : void {
        if ((from < 0) || (to > a.length) || (to < from)) {
            throw "OutOfRange";
        }
        Sort._doSort(a,from,to - 1,compare);
    }
    static _doSort<E>(a : core.DartList<E>,left : number,right : number,compare : <E>(a : E,b : E) => number) : void {
        if ((right - left) <= Sort._INSERTION_SORT_THRESHOLD) {
            Sort._insertionSort(a,left,right,compare);
        }else {
            Sort._dualPivotQuicksort(a,left,right,compare);
        }
    }
    static _insertionSort<E>(a : core.DartList<E>,left : number,right : number,compare : <E>(a : E,b : E) => number) : void {
        for(let i : number = left + 1; i <= right; i++){
            let el = a[i];
            let j : number = i;
            while ((j > left) && (compare(a[j - 1],el) > 0)){
                a[j] = a[j - 1];
                j--;
            }
            a[j] = el;
        }
    }
    static _dualPivotQuicksort<E>(a : core.DartList<E>,left : number,right : number,compare : <E>(a : E,b : E) => number) : void {
        /* TODO (AssertStatementImpl) : assert (right - left > _INSERTION_SORT_THRESHOLD); */;
        let sixth : number = op(Op.QUOTIENT,(right - left + 1),6);
        let index1 : number = left + sixth;
        let index5 : number = right - sixth;
        let index3 : number = op(Op.QUOTIENT,(left + right),2);
        let index2 : number = index3 - sixth;
        let index4 : number = index3 + sixth;
        let el1 = a[index1];
        let el2 = a[index2];
        let el3 = a[index3];
        let el4 = a[index4];
        let el5 = a[index5];
        if (compare(el1,el2) > 0) {
            let t = el1;
            el1 = el2;
            el2 = t;
        }
        if (compare(el4,el5) > 0) {
            let t = el4;
            el4 = el5;
            el5 = t;
        }
        if (compare(el1,el3) > 0) {
            let t = el1;
            el1 = el3;
            el3 = t;
        }
        if (compare(el2,el3) > 0) {
            let t = el2;
            el2 = el3;
            el3 = t;
        }
        if (compare(el1,el4) > 0) {
            let t = el1;
            el1 = el4;
            el4 = t;
        }
        if (compare(el3,el4) > 0) {
            let t = el3;
            el3 = el4;
            el4 = t;
        }
        if (compare(el2,el5) > 0) {
            let t = el2;
            el2 = el5;
            el5 = t;
        }
        if (compare(el2,el3) > 0) {
            let t = el2;
            el2 = el3;
            el3 = t;
        }
        if (compare(el4,el5) > 0) {
            let t = el4;
            el4 = el5;
            el5 = t;
        }
        let pivot1 = el2;
        let pivot2 = el4;
        a[index1] = el1;
        a[index3] = el3;
        a[index5] = el5;
        a[index2] = a[left];
        a[index4] = a[right];
        let less : number = left + 1;
        let great : number = right - 1;
        let pivots_are_equal : boolean = (compare(pivot1,pivot2) == 0);
        if (pivots_are_equal) {
            let pivot = pivot1;
            for(let k : number = less; k <= great; k++){
                let ak = a[k];
                let comp : number = compare(ak,pivot);
                if (comp == 0) continue;
                if (comp < 0) {
                    if (k != less) {
                        a[k] = a[less];
                        a[less] = ak;
                    }
                    less++;
                }else {
                    while (true){
                        comp = compare(a[great],pivot);
                        if (comp > 0) {
                            great--;
                            continue;
                        }else if (comp < 0) {
                            a[k] = a[less];
                            a[less++] = a[great];
                            a[great--] = ak;
                            break;
                        }else {
                            a[k] = a[great];
                            a[great--] = ak;
                            break;
                        }
                    }
                }
            }
        }else {
            for(let k : number = less; k <= great; k++){
                let ak = a[k];
                let comp_pivot1 : number = compare(ak,pivot1);
                if (comp_pivot1 < 0) {
                    if (k != less) {
                        a[k] = a[less];
                        a[less] = ak;
                    }
                    less++;
                }else {
                    let comp_pivot2 : number = compare(ak,pivot2);
                    if (comp_pivot2 > 0) {
                        while (true){
                            let comp : number = compare(a[great],pivot2);
                            if (comp > 0) {
                                great--;
                                if (great < k) break;
                                continue;
                            }else {
                                comp = compare(a[great],pivot1);
                                if (comp < 0) {
                                    a[k] = a[less];
                                    a[less++] = a[great];
                                    a[great--] = ak;
                                }else {
                                    a[k] = a[great];
                                    a[great--] = ak;
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }
        a[left] = a[less - 1];
        a[less - 1] = pivot1;
        a[right] = a[great + 1];
        a[great + 1] = pivot2;
        Sort._doSort(a,left,less - 2,compare);
        Sort._doSort(a,great + 2,right,compare);
        if (pivots_are_equal) {
            return;
        }
        if (less < index1 && great > index5) {
            while (compare(a[less],pivot1) == 0){
                less++;
            }
            while (compare(a[great],pivot2) == 0){
                great--;
            }
            for(let k : number = less; k <= great; k++){
                let ak = a[k];
                let comp_pivot1 : number = compare(ak,pivot1);
                if (comp_pivot1 == 0) {
                    if (k != less) {
                        a[k] = a[less];
                        a[less] = ak;
                    }
                    less++;
                }else {
                    let comp_pivot2 : number = compare(ak,pivot2);
                    if (comp_pivot2 == 0) {
                        while (true){
                            let comp : number = compare(a[great],pivot2);
                            if (comp == 0) {
                                great--;
                                if (great < k) break;
                                continue;
                            }else {
                                comp = compare(a[great],pivot1);
                                if (comp < 0) {
                                    a[k] = a[less];
                                    a[less++] = a[great];
                                    a[great--] = ak;
                                }else {
                                    a[k] = a[great];
                                    a[great--] = ak;
                                }
                                break;
                            }
                        }
                    }
                }
            }
            Sort._doSort(a,less,great,compare);
        }else {
            Sort._doSort(a,less,great,compare);
        }
    }
    constructor() {
    }
    @defaultConstructor
    Sort() {
    }
}

export namespace WhereIterable {
    export type Constructors = core.DartIterable.Constructors | 'WhereIterable';
    export type Interface<E> = Omit<WhereIterable<E>, Constructors>;
}
@DartClass
export class WhereIterable<E> extends core.DartIterable<E> {
    _iterable : core.DartIterable<E>;

    _f : <E>(element : E) => boolean;

    constructor(_iterable : core.DartIterable<E>,_f : <E>(element : E) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WhereIterable(_iterable : core.DartIterable<E>,_f : <E>(element : E) => boolean) {
        this._iterable = _iterable;
        this._f = _f;
    }
    get iterator() : core.DartIterator<E> {
        return new WhereIterator<E>(this._iterable.iterator,this._f);
    }
    map<T>(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        return new MappedIterable._(this,f);
    }
}

export namespace ExpandIterable {
    export type Constructors = core.DartIterable.Constructors | 'ExpandIterable';
    export type Interface<S,T> = Omit<ExpandIterable<S,T>, Constructors>;
}
@DartClass
export class ExpandIterable<S,T> extends core.DartIterable<T> {
    _iterable : core.DartIterable<S>;

    _f : <S,T>(sourceElement : S) => core.DartIterable<T>;

    constructor(_iterable : core.DartIterable<S>,_f : <S,T>(sourceElement : S) => core.DartIterable<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpandIterable(_iterable : core.DartIterable<S>,_f : <S,T>(sourceElement : S) => core.DartIterable<T>) {
        this._iterable = _iterable;
        this._f = _f;
    }
    get iterator() : core.DartIterator<T> {
        return new ExpandIterator<S,T>(this._iterable.iterator,this._f);
    }
}

export namespace ExpandIterator {
    export type Constructors = 'ExpandIterator';
    export type Interface<S,T> = Omit<ExpandIterator<S,T>, Constructors>;
}
@DartClass
@Implements(core.DartIterator)
export class ExpandIterator<S,T> implements core.DartIterator.Interface<T> {
    _iterator : core.DartIterator<S>;

    _f : <S,T>(sourceElement : S) => core.DartIterable<T>;

    _currentExpansion : core.DartIterator<T>;

    _current : T;

    constructor(_iterator : core.DartIterator<S>,_f : <S,T>(sourceElement : S) => core.DartIterable<T>) {
    }
    @defaultConstructor
    ExpandIterator(_iterator : core.DartIterator<S>,_f : <S,T>(sourceElement : S) => core.DartIterable<T>) {
        this._currentExpansion = new EmptyIterator<any>();
        this._iterator = _iterator;
        this._f = _f;
    }
    get current() : T {
        return this._current;
    }
    moveNext() : boolean {
        if (this._currentExpansion == null) return false;
        while (!this._currentExpansion.moveNext()){
            this._current = null;
            if (this._iterator.moveNext()) {
                this._currentExpansion = null;
                this._currentExpansion = this._f(this._iterator.current).iterator;
            }else {
                return false;
            }
        }
        this._current = this._currentExpansion.current;
        return true;
    }
}

export namespace TakeIterable {
    export type Constructors = core.DartIterable.Constructors | '_';
    export type Interface<E> = Omit<TakeIterable<E>, Constructors>;
}
@DartClass
export class TakeIterable<E> extends core.DartIterable<E> {
    _iterable : core.DartIterable<E>;

    _takeCount : number;

    constructor(iterable : core.DartIterable<E>,takeCount : number) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $TakeIterable<E>(iterable : core.DartIterable<E>,takeCount : number) : TakeIterable<E> {
        if (isNot(takeCount, "number") || takeCount < 0) {
            throw new core.ArgumentError(takeCount);
        }
        if (is(iterable, EfficientLengthIterable<any>)) {
            return new EfficientLengthTakeIterable<E>(iterable,takeCount);
        }
        return new TakeIterable._(iterable,takeCount);
    }
    @namedConstructor
    _(_iterable : core.DartIterable<E>,_takeCount : number) {
        this._iterable = _iterable;
        this._takeCount = _takeCount;
    }
    static _ : new<E>(_iterable : core.DartIterable<E>,_takeCount : number) => TakeIterable<E>;

    get iterator() : core.DartIterator<E> {
        return new TakeIterator<E>(this._iterable.iterator,this._takeCount);
    }
}

export namespace TakeIterator {
    export type Constructors = core.DartIterator.Constructors | 'TakeIterator';
    export type Interface<E> = Omit<TakeIterator<E>, Constructors>;
}
@DartClass
export class TakeIterator<E> extends core.DartIterator<E> {
    _iterator : core.DartIterator<E>;

    _remaining : number;

    constructor(_iterator : core.DartIterator<E>,_remaining : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TakeIterator(_iterator : core.DartIterator<E>,_remaining : number) {
        this._iterator = _iterator;
        this._remaining = _remaining;
        /* TODO (AssertStatementImpl) : assert (_remaining is int && _remaining >= 0); */;
    }
    moveNext() : boolean {
        this._remaining--;
        if (this._remaining >= 0) {
            return this._iterator.moveNext();
        }
        this._remaining = -1;
        return false;
    }
    get current() : E {
        if (this._remaining < 0) return null;
        return this._iterator.current;
    }
}

export namespace TakeWhileIterable {
    export type Constructors = core.DartIterable.Constructors | 'TakeWhileIterable';
    export type Interface<E> = Omit<TakeWhileIterable<E>, Constructors>;
}
@DartClass
export class TakeWhileIterable<E> extends core.DartIterable<E> {
    _iterable : core.DartIterable<E>;

    _f : <E>(element : E) => boolean;

    constructor(_iterable : core.DartIterable<E>,_f : <E>(element : E) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TakeWhileIterable(_iterable : core.DartIterable<E>,_f : <E>(element : E) => boolean) {
        this._iterable = _iterable;
        this._f = _f;
    }
    get iterator() : core.DartIterator<E> {
        return new TakeWhileIterator<E>(this._iterable.iterator,this._f);
    }
}

export namespace UnmodifiableListError {
    export type Constructors = 'UnmodifiableListError';
    export type Interface = Omit<UnmodifiableListError, Constructors>;
}
@DartClass
export class UnmodifiableListError {
    static add() : core.UnsupportedError {
        return new core.UnsupportedError("Cannot add to unmodifiable List");
    }
    static change() : core.UnsupportedError {
        return new core.UnsupportedError("Cannot change the content of an unmodifiable List");
    }
    static length() : core.UnsupportedError {
        return new core.UnsupportedError("Cannot change length of unmodifiable List");
    }
    static remove() : core.UnsupportedError {
        return new core.UnsupportedError("Cannot remove from unmodifiable List");
    }
    constructor() {
    }
    @defaultConstructor
    UnmodifiableListError() {
    }
}

export namespace SkipIterable {
    export type Constructors = core.DartIterable.Constructors | '_';
    export type Interface<E> = Omit<SkipIterable<E>, Constructors>;
}
@DartClass
export class SkipIterable<E> extends core.DartIterable<E> {
    _iterable : core.DartIterable<E>;

    _skipCount : number;

    constructor(iterable : core.DartIterable<E>,count : number) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $SkipIterable<E>(iterable : core.DartIterable<E>,count : number) : SkipIterable<E> {
        if (is(iterable, EfficientLengthIterable<any>)) {
            return new EfficientLengthSkipIterable<E>(iterable,count);
        }
        return new SkipIterable._(iterable,_checkCount(count));
    }
    @namedConstructor
    _(_iterable : core.DartIterable<E>,_skipCount : number) {
        this._iterable = _iterable;
        this._skipCount = _skipCount;
    }
    static _ : new<E>(_iterable : core.DartIterable<E>,_skipCount : number) => SkipIterable<E>;

    skip(count : number) : core.DartIterable<E> {
        return new SkipIterable._(this._iterable,this._skipCount + _checkCount(count));
    }
    get iterator() : core.DartIterator<E> {
        return new SkipIterator<E>(this._iterable.iterator,this._skipCount);
    }
}

export namespace ExternalName {
    export type Constructors = 'ExternalName';
    export type Interface = Omit<ExternalName, Constructors>;
}
@DartClass
export class ExternalName {
    name : string;

    constructor(name : string) {
    }
    @defaultConstructor
    ExternalName(name : string) {
        this.name = name;
    }
}

export namespace SkipIterator {
    export type Constructors = core.DartIterator.Constructors | 'SkipIterator';
    export type Interface<E> = Omit<SkipIterator<E>, Constructors>;
}
@DartClass
export class SkipIterator<E> extends core.DartIterator<E> {
    _iterator : core.DartIterator<E>;

    _skipCount : number;

    constructor(_iterator : core.DartIterator<E>,_skipCount : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SkipIterator(_iterator : core.DartIterator<E>,_skipCount : number) {
        this._iterator = _iterator;
        this._skipCount = _skipCount;
        /* TODO (AssertStatementImpl) : assert (_skipCount is int && _skipCount >= 0); */;
    }
    moveNext() : boolean {
        for(let i : number = 0; i < this._skipCount; i++)this._iterator.moveNext();
        this._skipCount = 0;
        return this._iterator.moveNext();
    }
    get current() : E {
        return this._iterator.current;
    }
}

export namespace SkipWhileIterable {
    export type Constructors = core.DartIterable.Constructors | 'SkipWhileIterable';
    export type Interface<E> = Omit<SkipWhileIterable<E>, Constructors>;
}
@DartClass
export class SkipWhileIterable<E> extends core.DartIterable<E> {
    _iterable : core.DartIterable<E>;

    _f : <E>(element : E) => boolean;

    constructor(_iterable : core.DartIterable<E>,_f : <E>(element : E) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SkipWhileIterable(_iterable : core.DartIterable<E>,_f : <E>(element : E) => boolean) {
        this._iterable = _iterable;
        this._f = _f;
    }
    get iterator() : core.DartIterator<E> {
        return new SkipWhileIterator<E>(this._iterable.iterator,this._f);
    }
}

export namespace SkipWhileIterator {
    export type Constructors = core.DartIterator.Constructors | 'SkipWhileIterator';
    export type Interface<E> = Omit<SkipWhileIterator<E>, Constructors>;
}
@DartClass
export class SkipWhileIterator<E> extends core.DartIterator<E> {
    _iterator : core.DartIterator<E>;

    _f : <E>(element : E) => boolean;

    _hasSkipped : boolean;

    constructor(_iterator : core.DartIterator<E>,_f : <E>(element : E) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SkipWhileIterator(_iterator : core.DartIterator<E>,_f : <E>(element : E) => boolean) {
        this._hasSkipped = false;
        this._iterator = _iterator;
        this._f = _f;
    }
    moveNext() : boolean {
        if (!this._hasSkipped) {
            this._hasSkipped = true;
            while (this._iterator.moveNext()){
                if (!this._f(this._iterator.current)) return true;
            }
        }
        return this._iterator.moveNext();
    }
    get current() : E {
        return this._iterator.current;
    }
}

export namespace Symbol {
    export type Constructors = 'Symbol' | 'unvalidated' | 'validated';
    export type Interface = Omit<Symbol, Constructors>;
}
@DartClass
@Implements(core.Symbol)
export class Symbol implements core.Symbol.Interface {
    _name : string;

    private static __$reservedWordRE : string;
    static get reservedWordRE() : string { 
        if (this.__$reservedWordRE===undefined) {
            this.__$reservedWordRE = '(?:assert|break|c(?:a(?:se|tch)|lass|on(?:st|tinue))|d(?:efault|o)|' + 'e(?:lse|num|xtends)|f(?:alse|inal(?:ly)?|or)|i[fns]|n(?:ew|ull)|' + 'ret(?:hrow|urn)|s(?:uper|witch)|t(?:h(?:is|row)|r(?:ue|y))|' + 'v(?:ar|oid)|w(?:hile|ith))';
        }
        return this.__$reservedWordRE;
    }

    private static __$publicIdentifierRE : string;
    static get publicIdentifierRE() : string { 
        if (this.__$publicIdentifierRE===undefined) {
            this.__$publicIdentifierRE = '(?!' + `${Symbol.reservedWordRE}` + '\b(?!\$))[a-zA-Z$][\w$]*';
        }
        return this.__$publicIdentifierRE;
    }

    private static __$identifierRE : string;
    static get identifierRE() : string { 
        if (this.__$identifierRE===undefined) {
            this.__$identifierRE = '(?!' + `${Symbol.reservedWordRE}` + '\b(?!\$))[a-zA-Z$_][\w$]*';
        }
        return this.__$identifierRE;
    }

    private static __$operatorRE : string;
    static get operatorRE() : string { 
        if (this.__$operatorRE===undefined) {
            this.__$operatorRE = '(?:[\-+*/%&|^]|\[\]=?|==|~/?|<[<=]?|>[>=]?|unary-)';
        }
        return this.__$operatorRE;
    }

    private static __$publicSymbolPattern : core.DartRegExp;
    static get publicSymbolPattern() : core.DartRegExp { 
        if (this.__$publicSymbolPattern===undefined) {
            this.__$publicSymbolPattern = new core.DartRegExp(`^(?:${Symbol.operatorRE}$|${Symbol.publicIdentifierRE}(?:=?$|[.](?!$)))+?$`);
        }
        return this.__$publicSymbolPattern;
    }
    static set publicSymbolPattern(__$value : core.DartRegExp)  { 
        this.__$publicSymbolPattern = __$value;
    }

    private static __$symbolPattern : core.DartRegExp;
    static get symbolPattern() : core.DartRegExp { 
        if (this.__$symbolPattern===undefined) {
            this.__$symbolPattern = new core.DartRegExp(`^(?:${Symbol.operatorRE}$|${Symbol.identifierRE}(?:=?$|[.](?!$)))+?$`);
        }
        return this.__$symbolPattern;
    }
    static set symbolPattern(__$value : core.DartRegExp)  { 
        this.__$symbolPattern = __$value;
    }

    constructor(name : string) {
    }
    @defaultConstructor
    Symbol(name : string) {
    }
    @namedConstructor
    unvalidated(_name : string) {
        this._name = _name;
    }
    static unvalidated : new(_name : string) => Symbol;

    @namedConstructor
    validated(name : string) {
        this._name = Symbol.validatePublicSymbol(name);
    }
    static validated : new(name : string) => Symbol;

    [OperatorMethods.EQUALS](other : any) : boolean {
        return is(other, Symbol) && this._name == other._name;
    }
    get hashCode() : number {
    }
    toString() {
    }
    static getName(symbol : Symbol) : string {
        return symbol._name;
    }
    static validatePublicSymbol(name : string) : string {
        if (new core.DartString(name).isEmpty || Symbol.publicSymbolPattern.hasMatch(name)) return name;
        if (new core.DartString(name).startsWith('_')) {
            throw new core.ArgumentError(`"${name}" is a private identifier`);
        }
        throw new core.ArgumentError(`"${name}" is not a valid (qualified) symbol name`);
    }
    static isValidSymbol(name : string) : boolean {
        return (new core.DartString(name).isEmpty || Symbol.symbolPattern.hasMatch(name));
    }
}

export namespace EmptyIterator {
    export type Constructors = 'EmptyIterator';
    export type Interface<E> = Omit<EmptyIterator<E>, Constructors>;
}
@DartClass
@Implements(core.DartIterator)
export class EmptyIterator<E> implements core.DartIterator.Interface<E> {
    constructor() {
    }
    @defaultConstructor
    EmptyIterator() {
    }
    moveNext() : boolean {
        return false;
    }
    get current() : E {
        return null;
    }
}

export namespace IterableElementError {
    export type Constructors = 'IterableElementError';
    export type Interface = Omit<IterableElementError, Constructors>;
}
@DartClass
export class IterableElementError {
    static noElement() : core.StateError {
        return new core.StateError("No element");
    }
    static tooMany() : core.StateError {
        return new core.StateError("Too many elements");
    }
    static tooFew() : core.StateError {
        return new core.StateError("Too few elements");
    }
    constructor() {
    }
    @defaultConstructor
    IterableElementError() {
    }
}

export namespace FixedLengthListMixin {
    export type Constructors = 'FixedLengthListMixin';
    export type Interface<E> = Omit<FixedLengthListMixin<E>, Constructors>;
}
@DartClass
export class FixedLengthListMixin<E> {
    set length(newLength : number) {
        throw new core.UnsupportedError("Cannot change the length of a fixed-length list");
    }
    add(value : E) : void {
        throw new core.UnsupportedError("Cannot add to a fixed-length list");
    }
    insert(index : number,value : E) : void {
        throw new core.UnsupportedError("Cannot add to a fixed-length list");
    }
    insertAll(at : number,iterable : core.DartIterable<E>) : void {
        throw new core.UnsupportedError("Cannot add to a fixed-length list");
    }
    addAll(iterable : core.DartIterable<E>) : void {
        throw new core.UnsupportedError("Cannot add to a fixed-length list");
    }
    remove(element : core.DartObject) : boolean {
        throw new core.UnsupportedError("Cannot remove from a fixed-length list");
    }
    removeWhere(test : <E>(element : E) => boolean) : void {
        throw new core.UnsupportedError("Cannot remove from a fixed-length list");
    }
    retainWhere(test : <E>(element : E) => boolean) : void {
        throw new core.UnsupportedError("Cannot remove from a fixed-length list");
    }
    clear() : void {
        throw new core.UnsupportedError("Cannot clear a fixed-length list");
    }
    removeAt(index : number) : E {
        throw new core.UnsupportedError("Cannot remove from a fixed-length list");
    }
    removeLast() : E {
        throw new core.UnsupportedError("Cannot remove from a fixed-length list");
    }
    removeRange(start : number,end : number) : void {
        throw new core.UnsupportedError("Cannot remove from a fixed-length list");
    }
    replaceRange(start : number,end : number,iterable : core.DartIterable<E>) : void {
        throw new core.UnsupportedError("Cannot remove from a fixed-length list");
    }
    constructor() {
    }
    @defaultConstructor
    FixedLengthListMixin() {
    }
}

export namespace UnmodifiableListMixin {
    export type Constructors = 'UnmodifiableListMixin';
    export type Interface<E> = Omit<UnmodifiableListMixin<E>, Constructors>;
}
@DartClass
@Implements(core.DartList)
export class UnmodifiableListMixin<E> implements core.DartList.Interface<E> {
    [OperatorMethods.INDEX_EQ](index : number,value : E) : void {
        throw new core.UnsupportedError("Cannot modify an unmodifiable list");
    }
    set length(newLength : number) {
        throw new core.UnsupportedError("Cannot change the length of an unmodifiable list");
    }
    setAll(at : number,iterable : core.DartIterable<E>) : void {
        throw new core.UnsupportedError("Cannot modify an unmodifiable list");
    }
    add(value : E) : void {
        throw new core.UnsupportedError("Cannot add to an unmodifiable list");
    }
    insert(index : number,element : E) : void {
        throw new core.UnsupportedError("Cannot add to an unmodifiable list");
    }
    insertAll(at : number,iterable : core.DartIterable<E>) : void {
        throw new core.UnsupportedError("Cannot add to an unmodifiable list");
    }
    addAll(iterable : core.DartIterable<E>) : void {
        throw new core.UnsupportedError("Cannot add to an unmodifiable list");
    }
    remove(element : core.DartObject) : boolean {
        throw new core.UnsupportedError("Cannot remove from an unmodifiable list");
    }
    removeWhere(test : <E>(element : E) => boolean) : void {
        throw new core.UnsupportedError("Cannot remove from an unmodifiable list");
    }
    retainWhere(test : <E>(element : E) => boolean) : void {
        throw new core.UnsupportedError("Cannot remove from an unmodifiable list");
    }
    sort(compare? : <T>(a : E,b : E) => number) : void {
        throw new core.UnsupportedError("Cannot modify an unmodifiable list");
    }
    shuffle(random? : math.Random) : void {
        throw new core.UnsupportedError("Cannot modify an unmodifiable list");
    }
    clear() : void {
        throw new core.UnsupportedError("Cannot clear an unmodifiable list");
    }
    removeAt(index : number) : E {
        throw new core.UnsupportedError("Cannot remove from an unmodifiable list");
    }
    removeLast() : E {
        throw new core.UnsupportedError("Cannot remove from an unmodifiable list");
    }
    setRange(start : number,end : number,iterable : core.DartIterable<E>,skipCount? : number) : void {
        skipCount = skipCount || 0;
        throw new core.UnsupportedError("Cannot modify an unmodifiable list");
    }
    removeRange(start : number,end : number) : void {
        throw new core.UnsupportedError("Cannot remove from an unmodifiable list");
    }
    replaceRange(start : number,end : number,iterable : core.DartIterable<E>) : void {
        throw new core.UnsupportedError("Cannot remove from an unmodifiable list");
    }
    fillRange(start : number,end : number,fillValue? : E) : void {
        throw new core.UnsupportedError("Cannot modify an unmodifiable list");
    }
    constructor() {
    }
    @defaultConstructor
    UnmodifiableListMixin() {
    }
}

export namespace EfficientLengthIterable {
    export type Constructors = core.DartIterable.Constructors | 'EfficientLengthIterable';
    export type Interface<T> = Omit<EfficientLengthIterable<T>, Constructors>;
}
@DartClass
export class EfficientLengthIterable<T> extends core.DartIterable<T> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EfficientLengthIterable() {
    }
    @AbstractProperty
    get length() : number{ throw 'abstract'}
}

export namespace ListMapView {
    export type Constructors = 'ListMapView';
    export type Interface<E> = Omit<ListMapView<E>, Constructors>;
}
@DartClass
@Implements(core.DartMap)
export class ListMapView<E> implements core.DartMap.Interface<number,E> {
    _values : core.DartList<E>;

    constructor(_values : core.DartList<E>) {
    }
    @defaultConstructor
    ListMapView(_values : core.DartList<E>) {
        this._values = _values;
    }
    [OperatorMethods.INDEX](key : core.DartObject) : E {
        return this.containsKey(key) ? this._values[key] : null;
    }
    get length() : number {
        return this._values.length;
    }
    get values() : core.DartIterable<E> {
        return new SubListIterable<E>(this._values,0,null);
    }
    get keys() : core.DartIterable<number> {
        return new _ListIndicesIterable(this._values);
    }
    get isEmpty() : boolean {
        return this._values.isEmpty;
    }
    get isNotEmpty() : boolean {
        return this._values.isNotEmpty;
    }
    containsValue(value : core.DartObject) : boolean {
        return this._values.contains(value);
    }
    containsKey(key : core.DartObject) : boolean {
        return is(key, "number") && key >= 0 && key < this.length;
    }
    forEach(f : <E>(key : number,value : E) => void) : void {
        let length : number = this._values.length;
        for(let i : number = 0; i < length; i++){
            f(i,this._values[i]);
            if (length != this._values.length) {
                throw new core.ConcurrentModificationError(this._values);
            }
        }
    }
    [OperatorMethods.INDEX_EQ](key : number,value : E) : void {
        throw new core.UnsupportedError("Cannot modify an unmodifiable map");
    }
    putIfAbsent(key : number,ifAbsent : <E>() => E) : E {
        throw new core.UnsupportedError("Cannot modify an unmodifiable map");
    }
    remove(key : core.DartObject) : E {
        throw new core.UnsupportedError("Cannot modify an unmodifiable map");
    }
    clear() : void {
        throw new core.UnsupportedError("Cannot modify an unmodifiable map");
    }
    addAll(other : core.DartMap<number,E>) : void {
        throw new core.UnsupportedError("Cannot modify an unmodifiable map");
    }
    toString() : string {
        return collection.Maps.mapToString(this);
    }
}

export namespace WhereIterator {
    export type Constructors = core.DartIterator.Constructors | 'WhereIterator';
    export type Interface<E> = Omit<WhereIterator<E>, Constructors>;
}
@DartClass
export class WhereIterator<E> extends core.DartIterator<E> {
    _iterator : core.DartIterator<E>;

    _f : <E>(element : E) => boolean;

    constructor(_iterator : core.DartIterator<E>,_f : <E>(element : E) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WhereIterator(_iterator : core.DartIterator<E>,_f : <E>(element : E) => boolean) {
        this._iterator = _iterator;
        this._f = _f;
    }
    moveNext() : boolean {
        while (this._iterator.moveNext()){
            if (this._f(this._iterator.current)) {
                return true;
            }
        }
        return false;
    }
    get current() : E {
        return this._iterator.current;
    }
}

export namespace NonGrowableListError {
    export type Constructors = 'NonGrowableListError';
    export type Interface = Omit<NonGrowableListError, Constructors>;
}
@DartClass
export class NonGrowableListError {
    static add() : core.UnsupportedError {
        return new core.UnsupportedError("Cannot add to non-growable List");
    }
    static length() : core.UnsupportedError {
        return new core.UnsupportedError("Cannot change length of non-growable List");
    }
    static remove() : core.UnsupportedError {
        return new core.UnsupportedError("Cannot remove from non-growable List");
    }
    constructor() {
    }
    @defaultConstructor
    NonGrowableListError() {
    }
}

export namespace ListIterator {
    export type Constructors = 'ListIterator';
    export type Interface<E> = Omit<ListIterator<E>, Constructors>;
}
@DartClass
@Implements(core.DartIterator)
export class ListIterator<E> implements core.DartIterator.Interface<E> {
    _iterable : core.DartIterable<E>;

    _length : number;

    _index : number;

    _current : E;

    constructor(iterable : core.DartIterable<E>) {
    }
    @defaultConstructor
    ListIterator(iterable : core.DartIterable<E>) {
        this._iterable = iterable;
        this._length = iterable.length;
        this._index = 0;
    }
    get current() : E {
        return this._current;
    }
    moveNext() : boolean {
        let length : number = this._iterable.length;
        if (this._length != length) {
            throw new core.ConcurrentModificationError(this._iterable);
        }
        if (this._index >= length) {
            this._current = null;
            return false;
        }
        this._current = this._iterable.elementAt(this._index);
        this._index++;
        return true;
    }
}

export namespace EfficientLengthMappedIterable {
    export type Constructors = MappedIterable.Constructors | 'EfficientLengthMappedIterable';
    export type Interface<S,T> = Omit<EfficientLengthMappedIterable<S,T>, Constructors>;
}
@DartClass
@Implements(EfficientLengthIterable)
export class EfficientLengthMappedIterable<S,T> extends MappedIterable<S,T> implements EfficientLengthIterable.Interface<T> {
    constructor(iterable : core.DartIterable<S>,function : <S,T>(value : S) => T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EfficientLengthMappedIterable(iterable : core.DartIterable<S>,function : <S,T>(value : S) => T) {
        super._(iterable,function);
    }
}

export namespace CodeUnits {
    export type Constructors = UnmodifiableListBase.Constructors | 'CodeUnits';
    export type Interface = Omit<CodeUnits, Constructors>;
}
@DartClass
export class CodeUnits extends UnmodifiableListBase<number> {
    _string : string;

    constructor(_string : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CodeUnits(_string : string) {
        this._string = _string;
    }
    get length() : number {
        return new core.DartString(this._string).length;
    }
    [OperatorMethods.INDEX](i : number) : number {
        return new core.DartString(this._string).codeUnitAt(i);
    }
    static stringOf(u : CodeUnits) : string {
        return u._string;
    }
}

export namespace EfficientLengthTakeIterable {
    export type Constructors = TakeIterable.Constructors | 'EfficientLengthTakeIterable';
    export type Interface<E> = Omit<EfficientLengthTakeIterable<E>, Constructors>;
}
@DartClass
@Implements(EfficientLengthIterable)
export class EfficientLengthTakeIterable<E> extends TakeIterable<E> implements EfficientLengthIterable.Interface<E> {
    constructor(iterable : core.DartIterable<E>,takeCount : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EfficientLengthTakeIterable(iterable : core.DartIterable<E>,takeCount : number) {
        super._(iterable,takeCount);
    }
    get length() : number {
        let iterableLength : number = this._iterable.length;
        if (iterableLength > this._takeCount) return this._takeCount;
        return iterableLength;
    }
}

export namespace EfficientLengthSkipIterable {
    export type Constructors = SkipIterable.Constructors | '_';
    export type Interface<E> = Omit<EfficientLengthSkipIterable<E>, Constructors>;
}
@DartClass
@Implements(EfficientLengthIterable)
export class EfficientLengthSkipIterable<E> extends SkipIterable<E> implements EfficientLengthIterable.Interface<E> {
    constructor(iterable : core.DartIterable<E>,count : number) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $EfficientLengthSkipIterable<E>(iterable : core.DartIterable<E>,count : number) : EfficientLengthSkipIterable<E> {
        return new EfficientLengthSkipIterable._(iterable,_checkCount(count));
    }
    @namedConstructor
    _(iterable : core.DartIterable<E>,count : number) {
        super._(iterable,count);
    }
    static _ : new<E>(iterable : core.DartIterable<E>,count : number) => EfficientLengthSkipIterable<E>;

    get length() : number {
        let length : number = this._iterable.length - this._skipCount;
        if (length >= 0) return length;
        return 0;
    }
    skip(count : number) : core.DartIterable<E> {
        return new EfficientLengthSkipIterable._(this._iterable,this._skipCount + _checkCount(count));
    }
}

export namespace ListIterable {
    export type Constructors = EfficientLengthIterable.Constructors | 'ListIterable';
    export type Interface<E> = Omit<ListIterable<E>, Constructors>;
}
@DartClass
export class ListIterable<E> extends EfficientLengthIterable<E> {
    @AbstractProperty
    get length() : number{ throw 'abstract'}
    @Abstract
    elementAt(i : number) : E{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListIterable() {
    }
    get iterator() : core.DartIterator<E> {
        return new ListIterator<E>(this);
    }
    forEach(action : <E>(element : E) => void) : void {
        let length : number = this.length;
        for(let i : number = 0; i < length; i++){
            action(this.elementAt(i));
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
    }
    get isEmpty() : boolean {
        return this.length == 0;
    }
    get first() : E {
        if (this.length == 0) throw IterableElementError.noElement();
        return this.elementAt(0);
    }
    get last() : E {
        if (this.length == 0) throw IterableElementError.noElement();
        return this.elementAt(this.length - 1);
    }
    get single() : E {
        if (this.length == 0) throw IterableElementError.noElement();
        if (this.length > 1) throw IterableElementError.tooMany();
        return this.elementAt(0);
    }
    contains(element : core.DartObject) : boolean {
        let length : number = this.length;
        for(let i : number = 0; i < length; i++){
            if (op(Op.EQUALS,this.elementAt(i),element)) return true;
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        return false;
    }
    every(test : <E>(element : E) => boolean) : boolean {
        let length : number = this.length;
        for(let i : number = 0; i < length; i++){
            if (!test(this.elementAt(i))) return false;
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        return true;
    }
    any(test : <E>(element : E) => boolean) : boolean {
        let length : number = this.length;
        for(let i : number = 0; i < length; i++){
            if (test(this.elementAt(i))) return true;
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
            let element : E = this.elementAt(i);
            if (test(element)) return element;
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        if (orElse != null) return orElse();
        throw IterableElementError.noElement();
    }
    lastWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        let length : number = this.length;
        for(let i : number = length - 1; i >= 0; i--){
            let element : E = this.elementAt(i);
            if (test(element)) return element;
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        if (orElse != null) return orElse();
        throw IterableElementError.noElement();
    }
    singleWhere(test : <E>(element : E) => boolean) : E {
        let length : number = this.length;
        let match : E = null;
        let matchFound : boolean = false;
        for(let i : number = 0; i < length; i++){
            let element : E = this.elementAt(i);
            if (test(element)) {
                if (matchFound) {
                    throw IterableElementError.tooMany();
                }
                matchFound = true;
                match = element;
            }
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        if (matchFound) return match;
        throw IterableElementError.noElement();
    }
    join(separator? : string) : string {
        separator = separator || "";
        let length : number = this.length;
        if (!new core.DartString(separator).isEmpty) {
            if (length == 0) return "";
            let first : string = `${this.elementAt(0)}`;
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
            let buffer : core.DartStringBuffer = new core.DartStringBuffer(first);
            for(let i : number = 1; i < length; i++){
                buffer.write(separator);
                buffer.write(this.elementAt(i));
                if (length != this.length) {
                    throw new core.ConcurrentModificationError(this);
                }
            }
            return buffer.toString();
        }else {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            for(let i : number = 0; i < length; i++){
                buffer.write(this.elementAt(i));
                if (length != this.length) {
                    throw new core.ConcurrentModificationError(this);
                }
            }
            return buffer.toString();
        }
    }
    where(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        return super.where(test);
    }
    map<T>(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        return new MappedListIterable<E,T>(this,f);
    }
    reduce(combine : <E>(value : any,element : E) => E) : E {
        let length : number = this.length;
        if (length == 0) throw IterableElementError.noElement();
        let value : E = this.elementAt(0);
        for(let i : number = 1; i < length; i++){
            value = combine(value,this.elementAt(i));
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
            value = combine(value,this.elementAt(i));
            if (length != this.length) {
                throw new core.ConcurrentModificationError(this);
            }
        }
        return value;
    }
    skip(count : number) : core.DartIterable<E> {
        return new SubListIterable<E>(this,count,null);
    }
    skipWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        return super.skipWhile(test);
    }
    take(count : number) : core.DartIterable<E> {
        return new SubListIterable<E>(this,0,count);
    }
    takeWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        return super.takeWhile(test);
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
            result[i] = this.elementAt(i);
        }
        return result;
    }
    toSet() : core.DartSet<E> {
        let result : core.DartSet<E> = new core.DartSet<E>();
        for(let i : number = 0; i < this.length; i++){
            result.add(this.elementAt(i));
        }
        return result;
    }
}

export namespace EmptyIterable {
    export type Constructors = EfficientLengthIterable.Constructors | 'EmptyIterable';
    export type Interface<E> = Omit<EmptyIterable<E>, Constructors>;
}
@DartClass
export class EmptyIterable<E> extends EfficientLengthIterable<E> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EmptyIterable() {
    }
    get iterator() : core.DartIterator<E> {
        return new EmptyIterator<any>();
    }
    forEach(action : <E>(element : E) => void) : void {
    }
    get isEmpty() : boolean {
        return true;
    }
    get length() : number {
        return 0;
    }
    get first() : E {
        throw IterableElementError.noElement();
    }
    get last() : E {
        throw IterableElementError.noElement();
    }
    get single() : E {
        throw IterableElementError.noElement();
    }
    elementAt(index : number) : E {
        throw new core.RangeError.range(index,0,0,"index");
    }
    contains(element : core.DartObject) : boolean {
        return false;
    }
    every(test : <E>(element : E) => boolean) : boolean {
        return true;
    }
    any(test : <E>(element : E) => boolean) : boolean {
        return false;
    }
    firstWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        if (orElse != null) return orElse();
        throw IterableElementError.noElement();
    }
    lastWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        if (orElse != null) return orElse();
        throw IterableElementError.noElement();
    }
    singleWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        if (orElse != null) return orElse();
        throw IterableElementError.noElement();
    }
    join(separator? : string) : string {
        separator = separator || "";
        return "";
    }
    where(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        return this;
    }
    map<T>(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        return new EmptyIterable<any>();
    }
    reduce(combine : <E>(value : E,element : E) => E) : E {
        throw IterableElementError.noElement();
    }
    fold<T>(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        return initialValue;
    }
    skip(count : number) : core.DartIterable<E> {
        core.RangeError.checkNotNegative(count,"count");
        return this;
    }
    skipWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        return this;
    }
    take(count : number) : core.DartIterable<E> {
        core.RangeError.checkNotNegative(count,"count");
        return this;
    }
    takeWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        return this;
    }
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        return growable ? new core.DartList.literal<E>() : new core.DartList<E>(0);
    }
    toSet() : core.DartSet<E> {
        return new core.DartSet<E>();
    }
}

export namespace ReversedListIterable {
    export type Constructors = ListIterable.Constructors | 'ReversedListIterable';
    export type Interface<E> = Omit<ReversedListIterable<E>, Constructors>;
}
@DartClass
export class ReversedListIterable<E> extends ListIterable<E> {
    _source : core.DartIterable<E>;

    constructor(_source : core.DartIterable<E>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReversedListIterable(_source : core.DartIterable<E>) {
        this._source = _source;
    }
    get length() : number {
        return this._source.length;
    }
    elementAt(index : number) : E {
        return this._source.elementAt(this._source.length - 1 - index);
    }
}

export namespace _ListIndicesIterable {
    export type Constructors = ListIterable.Constructors | '_ListIndicesIterable';
    export type Interface = Omit<_ListIndicesIterable, Constructors>;
}
@DartClass
export class _ListIndicesIterable extends ListIterable<number> {
    _backedList : core.DartList<any>;

    constructor(_backedList : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ListIndicesIterable(_backedList : core.DartList<any>) {
        this._backedList = _backedList;
    }
    get length() : number {
        return this._backedList.length;
    }
    elementAt(index : number) : number {
        core.RangeError.checkValidIndex(index,this);
        return index;
    }
}

export namespace MappedListIterable {
    export type Constructors = ListIterable.Constructors | 'MappedListIterable';
    export type Interface<S,T> = Omit<MappedListIterable<S,T>, Constructors>;
}
@DartClass
export class MappedListIterable<S,T> extends ListIterable<T> {
    _source : core.DartIterable<S>;

    _f : <S,T>(value : S) => T;

    constructor(_source : core.DartIterable<S>,_f : <S,T>(value : S) => T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MappedListIterable(_source : core.DartIterable<S>,_f : <S,T>(value : S) => T) {
        this._source = _source;
        this._f = _f;
    }
    get length() : number {
        return this._source.length;
    }
    elementAt(index : number) : T {
        return this._f(this._source.elementAt(index));
    }
}

export namespace SubListIterable {
    export type Constructors = ListIterable.Constructors | 'SubListIterable';
    export type Interface<E> = Omit<SubListIterable<E>, Constructors>;
}
@DartClass
export class SubListIterable<E> extends ListIterable<E> {
    _iterable : core.DartIterable<E>;

    _start : number;

    _endOrLength : number;

    constructor(_iterable : core.DartIterable<E>,_start : number,_endOrLength : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SubListIterable(_iterable : core.DartIterable<E>,_start : number,_endOrLength : number) {
        this._iterable = _iterable;
        this._start = _start;
        this._endOrLength = _endOrLength;
        core.RangeError.checkNotNegative(this._start,"start");
        if (this._endOrLength != null) {
            core.RangeError.checkNotNegative(this._endOrLength,"end");
            if (this._start > this._endOrLength) {
                throw new core.RangeError.range(this._start,0,this._endOrLength,"start");
            }
        }
    }
    get _endIndex() : number {
        let length : number = this._iterable.length;
        if (this._endOrLength == null || this._endOrLength > length) return length;
        return this._endOrLength;
    }
    get _startIndex() : number {
        let length : number = this._iterable.length;
        if (this._start > length) return length;
        return this._start;
    }
    get length() : number {
        let length : number = this._iterable.length;
        if (this._start >= length) return 0;
        if (this._endOrLength == null || this._endOrLength >= length) {
            return length - this._start;
        }
        return this._endOrLength - this._start;
    }
    elementAt(index : number) : E {
        let realIndex : number = this._startIndex + index;
        if (index < 0 || realIndex >= this._endIndex) {
            throw new core.RangeError.index(index,this,"index");
        }
        return this._iterable.elementAt(realIndex);
    }
    skip(count : number) : core.DartIterable<E> {
        core.RangeError.checkNotNegative(count,"count");
        let newStart : number = this._start + count;
        if (this._endOrLength != null && newStart >= this._endOrLength) {
            return new EmptyIterable<E>();
        }
        return new SubListIterable<E>(this._iterable,newStart,this._endOrLength);
    }
    take(count : number) : core.DartIterable<E> {
        core.RangeError.checkNotNegative(count,"count");
        if (this._endOrLength == null) {
            return new SubListIterable<E>(this._iterable,this._start,this._start + count);
        }else {
            let newEnd : number = this._start + count;
            if (this._endOrLength < newEnd) return this;
            return new SubListIterable<E>(this._iterable,this._start,newEnd);
        }
    }
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        let start : number = this._start;
        let end : number = this._iterable.length;
        if (this._endOrLength != null && this._endOrLength < end) end = this._endOrLength;
        let length : number = end - start;
        if (length < 0) length = 0;
        let result : core.DartList<E> = growable ? (((_) : core.DartList<E> =>  {
            {
                _.length = length;
                return _;
            }
        })(new core.DartList<E>())) : new core.DartList<E>(length);
        for(let i : number = 0; i < length; i++){
            result[i] = this._iterable.elementAt(start + i);
            if (this._iterable.length < end) throw new core.ConcurrentModificationError(this);
        }
        return result;
    }
}

export class properties {
    private static __$POWERS_OF_TEN;
    static get POWERS_OF_TEN() { 
        if (this.__$POWERS_OF_TEN===undefined) {
            this.__$POWERS_OF_TEN = new core.DartList.literal(1.0,10.0,100.0,1000.0,10000.0,100000.0,1000000.0,10000000.0,100000000.0,1000000000.0,10000000000.0,100000000000.0,1000000000000.0,10000000000000.0,100000000000000.0,1000000000000000.0,10000000000000000.0,100000000000000000.0,1000000000000000000.0,10000000000000000000.0,100000000000000000000.0,1e+21,1e+22);
        }
        return this.__$POWERS_OF_TEN;
    }
    static set POWERS_OF_TEN(__$value : any)  { 
        this.__$POWERS_OF_TEN = __$value;
    }

    private static __$printToZone : Function;
    static get printToZone() : Function { 
        if (this.__$printToZone===undefined) {
            this.__$printToZone = null;
        }
        return this.__$printToZone;
    }
    static set printToZone(__$value : Function)  { 
        this.__$printToZone = __$value;
    }

}
