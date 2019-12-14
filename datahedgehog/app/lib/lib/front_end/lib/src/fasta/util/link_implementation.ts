/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/util/link_implementation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./link";
import * as collection from "@dart2ts/dart/core";

export namespace LinkIterator {
    export type Constructors = 'LinkIterator';
    export type Interface<T> = Omit<LinkIterator<T>, Constructors>;
}
@DartClass
@Implements(core.DartIterator)
export class LinkIterator<T> implements core.DartIterator.Interface<T> {
    _current : T;

    _link : lib3.Link<T>;

    constructor(_link : lib3.Link<T>) {
    }
    @defaultConstructor
    LinkIterator(_link : lib3.Link<T>) {
        this._link = _link;
    }
    get current() : T {
        return this._current;
    }
    moveNext() : boolean {
        if (this._link.isEmpty) {
            this._current = null;
            return false;
        }
        this._current = this._link.head;
        this._link = this._link.tail;
        return true;
    }
}

export namespace MappedLinkIterator {
    export type Constructors = core.DartIterator.Constructors | 'MappedLinkIterator';
    export type Interface<S,T> = Omit<MappedLinkIterator<S,T>, Constructors>;
}
@DartClass
export class MappedLinkIterator<S,T> extends core.DartIterator<T> {
    _transformation : <S,T>(input : S) => T;

    _link : lib3.Link<S>;

    _current : T;

    constructor(_link : lib3.Link<S>,_transformation : <S,T>(input : S) => T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MappedLinkIterator(_link : lib3.Link<S>,_transformation : <S,T>(input : S) => T) {
        this._link = _link;
        this._transformation = _transformation;
    }
    get current() : T {
        return this._current;
    }
    moveNext() : boolean {
        if (this._link.isEmpty) {
            this._current = null;
            return false;
        }
        this._current = this._transformation(this._link.head);
        this._link = this._link.tail;
        return true;
    }
}

export namespace MappedLinkIterable {
    export type Constructors = core.DartIterableBase.Constructors | 'MappedLinkIterable';
    export type Interface<S,T> = Omit<MappedLinkIterable<S,T>, Constructors>;
}
@DartClass
export class MappedLinkIterable<S,T> extends core.DartIterableBase<T> {
    _transformation : <S,T>(input : S) => T;

    _link : lib3.Link<S>;

    constructor(_link : lib3.Link<S>,_transformation : <S,T>(input : S) => T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MappedLinkIterable(_link : lib3.Link<S>,_transformation : <S,T>(input : S) => T) {
        this._link = _link;
        this._transformation = _transformation;
    }
    get iterator() : core.DartIterator<T> {
        return new MappedLinkIterator<S,T>(this._link,this._transformation);
    }
}

export namespace LinkEntry {
    export type Constructors = lib3.Link.Constructors | 'LinkEntry';
    export type Interface<T> = Omit<LinkEntry<T>, Constructors>;
}
@DartClass
export class LinkEntry<T> extends lib3.Link<T> {
    head : T;

    tail : lib3.Link<T>;

    constructor(head : T,tail? : lib3.Link<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LinkEntry(head : T,tail? : lib3.Link<T>) {
        this.tail = ((op(Op.EQUALS,tail,null)) ? new lib3.Link<any>() : tail);
        this.head = head;
    }
    prepend(element : T) : lib3.Link<T> {
        return new LinkEntry<T>(element,this);
    }
    printOn(buffer : core.DartStringBuffer,separatedBy? : any) : void {
        buffer.write(this.head);
        if (op(Op.EQUALS,separatedBy,null)) separatedBy = '';
        for(let link : lib3.Link<any> = this.tail; link.isNotEmpty; link = link.tail){
            buffer.write(separatedBy);
            buffer.write(link.head);
        }
    }
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write('[ ');
        this.printOn(buffer,', ');
        buffer.write(' ]');
        return buffer.toString();
    }
    reverse() : lib3.Link<T> {
        let result : lib3.Link<T> = new lib3.Link<any>();
        for(let link : lib3.Link<T> = this; link.isNotEmpty; link = link.tail){
            result = result.prepend(link.head);
        }
        return result;
    }
    reversePrependAll(from : lib3.Link<T>) : lib3.Link<T> {
        let result : lib3.Link<T>;
        for(result = this; from.isNotEmpty; from = from.tail){
            result = result.prepend(from.head);
        }
        return result;
    }
    skip(n : number) : lib3.Link<T> {
        let link : lib3.Link<T> = this;
        for(let i : number = 0; i < n; i++){
            if (link.isEmpty) {
                throw new core.RangeError(`Index ${n} out of range`);
            }
            link = link.tail;
        }
        return link;
    }
    get isEmpty() : boolean {
        return false;
    }
    get isNotEmpty() : boolean {
        return true;
    }
    forEach(f : <T>(element : T) => void) : void {
        for(let link : lib3.Link<T> = this; link.isNotEmpty; link = link.tail){
            f(link.head);
        }
    }
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, lib3.Link<T>)) return false;
        let myElements : lib3.Link<T> = this;
        while (myElements.isNotEmpty && other.isNotEmpty){
            if (myElements.head != other.head) {
                return false;
            }
            myElements = myElements.tail;
            other = other.tail;
        }
        return myElements.isEmpty && other.isEmpty;
    }
    get hashCode() : number {
        return throw new core.UnsupportedError('LinkEntry.hashCode');
    }
    slowLength() : number {
        let length : number = 0;
        for(let current : lib3.Link<any> = this; current.isNotEmpty; current = current.tail){
            ++length;
        }
        return length;
    }
    copyWithout(e : any) : lib3.Link<any> {
        let copy : lib3.LinkBuilder<any> = new lib3.LinkBuilder<any>();
        let link : lib3.Link<any> = this;
        for(; link.isNotEmpty; link = link.tail){
            if (link.head != e) {
                copy.addLast(link.head);
            }
        }
        return copy.toLink(link);
    }
}

export namespace LinkBuilderImplementation {
    export type Constructors = 'LinkBuilderImplementation';
    export type Interface<T> = Omit<LinkBuilderImplementation<T>, Constructors>;
}
@DartClass
@Implements(lib3.LinkBuilder)
export class LinkBuilderImplementation<T> implements lib3.LinkBuilder.Interface<T> {
    head : LinkEntry<T>;

    lastLink : LinkEntry<T>;

    length : number;

    constructor() {
    }
    @defaultConstructor
    LinkBuilderImplementation() {
        this.head = null;
        this.lastLink = null;
        this.length = 0;
    }
    toLink(tail? : lib3.Link<T>) : lib3.Link<T> {
        tail = tail || new lib3.Link<any>();
        if (op(Op.EQUALS,this.head,null)) return tail;
        this.lastLink.tail = tail;
        let link : lib3.Link<T> = this.head;
        this.lastLink = null;
        this.head = null;
        this.length = 0;
        return link;
    }
    toList() : core.DartList<T> {
        if (this.length == 0) return new core.DartList<T>(0);
        let list : core.DartList<T> = new core.DartList<T>(this.length);
        let index : number = 0;
        let link : lib3.Link<T> = this.head;
        while (link.isNotEmpty){
            list[index] = link.head;
            link = link.tail;
            index++;
        }
        this.lastLink = null;
        this.head = null;
        this.length = 0;
        return list;
    }
    addLast(t : T) : lib3.Link<T> {
        this.length++;
        let entry : LinkEntry<T> = new LinkEntry<T>(t,null);
        if (op(Op.EQUALS,this.head,null)) {
            this.head = entry;
        }else {
            this.lastLink.tail = entry;
        }
        this.lastLink = entry;
        return entry;
    }
    get isEmpty() : boolean {
        return this.length == 0;
    }
    get first() : T {
        if (this.head != null) {
            return this.head.head;
        }
        throw new core.StateError("no elements");
    }
    clear() : void {
        this.head = null;
        this.lastLink = null;
        this.length = 0;
    }
}

export class properties {
}
