/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/string_canonicalizer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";

export namespace Node {
    export type Constructors = 'Node';
    export type Interface = Omit<Node, Constructors>;
}
@DartClass
export class Node {
    data;

    start : number;

    end : number;

    payload : string;

    next : Node;

    constructor(data : any,start : number,end : number,payload : string,next : Node) {
    }
    @defaultConstructor
    Node(data : any,start : number,end : number,payload : string,next : Node) {
        this.data = data;
        this.start = start;
        this.end = end;
        this.payload = payload;
        this.next = next;
    }
}

export namespace StringCanonicalizer {
    export type Constructors = 'StringCanonicalizer';
    export type Interface = Omit<StringCanonicalizer, Constructors>;
}
@DartClass
export class StringCanonicalizer {
    private static __$MASK : number;
    static get MASK() : number { 
        if (this.__$MASK===undefined) {
            this.__$MASK = 16 * 1024 * 1024 - 1;
        }
        return this.__$MASK;
    }

    private static __$INITIAL_SIZE : number;
    static get INITIAL_SIZE() : number { 
        if (this.__$INITIAL_SIZE===undefined) {
            this.__$INITIAL_SIZE = 8 * 1024;
        }
        return this.__$INITIAL_SIZE;
    }

    _size : number;

    _count : number;

    _nodes : core.DartList<Node>;

    static decode(data : core.DartList<number>,start : number,end : number,asciiOnly : boolean) : string {
        let s;
        if (asciiOnly) {
            s = new core.DartString.fromCharCodes(data,start,end).valueOf();
        }else {
            s = new convert.Utf8Decoder({
                allowMalformed : true}).convert(data,start,end);
        }
        return s;
    }
    static hashBytes(data : core.DartList<number>,start : number,end : number) : number {
        let h : number = 5381;
        for(let i : number = start; i < end; i++){
            h = ((h << 5) + h + data[i]) & StringCanonicalizer.MASK;
        }
        return h;
    }
    static hashString(data : string,start : number,end : number) : number {
        let h : number = 5381;
        for(let i : number = start; i < end; i++){
            h = ((h << 5) + h + new core.DartString(data).codeUnitAt(i)) & StringCanonicalizer.MASK;
        }
        return h;
    }
    rehash() {
        let newSize = this._size * 2;
        let newNodes = new core.DartList<Node>(newSize);
        for(let i : number = 0; i < this._size; i++){
            let t : Node = this._nodes[i];
            while (t != null){
                let n : Node = t.next;
                let newIndex : number = is(t.data, "string") ? StringCanonicalizer.hashString(t.data,t.start,t.end) & (newSize - 1) : StringCanonicalizer.hashBytes(t.data,t.start,t.end) & (newSize - 1);
                let s : Node = newNodes[newIndex];
                t.next = s;
                newNodes[newIndex] = t;
                t = n;
            }
        }
        this._size = newSize;
        this._nodes = newNodes;
    }
    canonicalize(data : any,start : number,end : number,asciiOnly : boolean) : string {
        if (this._count > this._size) this.rehash();
        let index : number = is(data, "string") ? StringCanonicalizer.hashString(data,start,end) : StringCanonicalizer.hashBytes(data,start,end);
        index = index & (this._size - 1);
        let s : Node = this._nodes[index];
        let t : Node = s;
        let len : number = end - start;
        while (t != null){
            if (t.end - t.start == len) {
                let i : number = start, j : number = t.start;
                while (i < end && op(Op.EQUALS,op(Op.INDEX,data,i),op(Op.INDEX,t.data,j))){
                    i++;
                    j++;
                }
                if (i == end) {
                    return t.payload;
                }
            }
            t = t.next;
        }
        let payload : string;
        if (is(data, "string")) payload = new core.DartString(data).substring(start,end);else payload = StringCanonicalizer.decode(data,start,end,asciiOnly);
        this._nodes[index] = new Node(data,start,end,payload,s);
        this._count++;
        return payload;
    }
    clear() {
        this._nodes = new core.DartList<Node>(this._size);
    }
    constructor() {
    }
    @defaultConstructor
    StringCanonicalizer() {
        this._size = StringCanonicalizer.INITIAL_SIZE;
        this._count = 0;
        this._nodes = new core.DartList<Node>(StringCanonicalizer.INITIAL_SIZE);
    }
}

export class properties {
}
