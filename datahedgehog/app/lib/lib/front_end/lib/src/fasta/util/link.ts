/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/util/link.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./link_implementation";

export namespace Link {
    export type Constructors = 'Link';
    export type Interface<T> = Omit<Link<T>, Constructors>;
}
@DartClass
@Implements(core.DartIterable)
export class Link<T> implements core.DartIterable.Interface<T> {
    get head() : T {
        return throw new core.StateError("no elements");
    }
    get tail() : Link<T> {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    Link() {
    }
    prepend(element : T) : Link<T> {
        return new lib3.LinkEntry<T>(element,this);
    }
    get iterator() : core.DartIterator<T> {
        return new lib3.LinkIterator<T>(this);
    }
    printOn(buffer : core.DartStringBuffer,separatedBy? : any) : void {
    }
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<T> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        let result : core.DartList<T>;
        if (!growable) {
            result = new core.DartList<T>(this.slowLength());
        }else {
            result = new core.DartList<T>();
            result.length = this.slowLength();
        }
        let i : number = 0;
        for(let link : Link<T> = this; !link.isEmpty; link = link.tail){
            result[i++] = link.head;
        }
        return result;
    }
    map<K>(fn : <K,T>(item : T) => K) : core.DartIterable<K> {
        return new lib3.MappedLinkIterable<T,K>(this,fn);
    }
    mapToList(fn : <T>(item : T) => any,_namedArguments? : {growable? : boolean}) : core.DartList<any> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        let result : core.DartList<any>;
        if (!growable) {
            result = new core.DartList<any>(this.slowLength());
        }else {
            result = new core.DartList<any>();
            result.length = this.slowLength();
        }
        let i : number = 0;
        for(let link : Link<T> = this; !link.isEmpty; link = link.tail){
            result[i++] = fn(link.head);
        }
        return result;
    }
    get isEmpty() : boolean {
        return true;
    }
    get isNotEmpty() : boolean {
        return false;
    }
    reverse() : Link<T> {
        return this;
    }
    reversePrependAll(from : Link<T>) : Link<T> {
        if (from.isEmpty) return this;
        return this.prepend(from.head).reversePrependAll(from.tail);
    }
    skip(n : number) : Link<T> {
        if (n == 0) return this;
        throw new core.RangeError(`Index ${n} out of range`);
    }
    forEach(f : <T>(element : T) => void) : void {
    }
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, Link<T>)) return false;
        return other.isEmpty;
    }
    get hashCode() : number {
        return throw new core.UnsupportedError('Link.hashCode');
    }
    toString() : string {
        return "[]";
    }
    get length() {
        throw new core.UnsupportedError('get:length');
    }
    slowLength() : number {
        return 0;
    }
    contains(element : core.DartObject) : boolean {
        for(let link : Link<T> = this; !link.isEmpty; link = link.tail){
            if (op(Op.EQUALS,link.head,element)) return true;
        }
        return false;
    }
    get single() : T {
        if (this.isEmpty) throw new core.StateError('No elements');
        if (!this.tail.isEmpty) throw new core.StateError('More than one element');
        return this.head;
    }
    get first() : T {
        if (this.isEmpty) throw new core.StateError('No elements');
        return this.head;
    }
    every(f : <T>(T : any) => boolean) : boolean {
        for(let link : Link<T> = this; !link.isEmpty; link = link.tail){
            if (!f(link.head)) return false;
        }
        return true;
    }
    copyWithout(e : any) : Link<any> {
        return this;
    }
    any(f : <T>(e : T) => boolean) : boolean {
        return this._unsupported('any');
    }
    elementAt(i : number) : T {
        return this._unsupported('elementAt');
    }
    expand<K>(f : <K,T>(e : T) => core.DartIterable<K>) : core.DartIterable<K> {
        return this._unsupported('expand');
    }
    firstWhere(f : <T>(e : T) => boolean,_namedArguments? : {orElse? : <T>() => T}) : T {
        let {orElse} = Object.assign({
        }, _namedArguments );
        return this._unsupported('firstWhere');
    }
    fold<K>(initialValue : K,combine : <K,T>(value : K,element : T) => K) : K {
        return this._unsupported('fold');
    }
    get last() : T {
        return this._unsupported('get:last');
    }
    lastWhere(f : <T>(e : T) => boolean,_namedArguments? : {orElse? : <T>() => T}) : T {
        let {orElse} = Object.assign({
        }, _namedArguments );
        return this._unsupported('lastWhere');
    }
    join(separator? : any) : string {
        separator = separator || '';
        return this._unsupported('join');
    }
    reduce(combine : <T>(a : T,b : T) => T) : T {
        return this._unsupported('reduce');
    }
    singleWhere(f : <T>(e : T) => boolean) : T {
        return this._unsupported('singleWhere');
    }
    skipWhile(f : <T>(e : T) => boolean) : core.DartIterable<T> {
        return this._unsupported('skipWhile');
    }
    take(n : number) : core.DartIterable<T> {
        return this._unsupported('take');
    }
    takeWhile(f : <T>(e : T) => boolean) : core.DartIterable<T> {
        return this._unsupported('takeWhile');
    }
    toSet() : core.DartSet<T> {
        return this._unsupported('toSet');
    }
    where(f : <T>(e : T) => boolean) : core.DartIterable<T> {
        return this._unsupported('where');
    }
    _unsupported(method : string) {
        return throw new core.UnsupportedError(method);
    }
}

export namespace LinkBuilder {
    export type Constructors = never;
    export type Interface<T> = Omit<LinkBuilder<T>, Constructors>;
}
@DartClass
export class LinkBuilder<T> {
    constructor() {
    }
    @defaultFactory
    static $LinkBuilder<T>() : LinkBuilder<T> {
        return new lib3.LinkBuilderImplementation<T>();
    }
    @Abstract
    toLink(tail? : Link<T>) : Link<T>{ throw 'abstract'}
    @Abstract
    toList() : core.DartList<T>{ throw 'abstract'}
    @Abstract
    addLast(t : T) : Link<T>{ throw 'abstract'}
    @AbstractProperty
    get first() : T{ throw 'abstract'}
    length : number;

    isEmpty : boolean;

    @Abstract
    clear() : void{ throw 'abstract'}
}

export class properties {
}
