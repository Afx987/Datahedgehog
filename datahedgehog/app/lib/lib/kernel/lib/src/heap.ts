/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/src/heap.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Heap {
    export type Constructors = 'Heap';
    export type Interface<T> = Omit<Heap<T>, Constructors>;
}
@DartClass
export class Heap<T> {
    _items;

    get isEmpty() : boolean {
        return this._items.isEmpty;
    }
    get isNotEmpty() : boolean {
        return this._items.isNotEmpty;
    }
    add(item : T) : void {
        let index : number = this._items.length;
        this._items.length += 1;
        while (index > 0){
            let parent : T = op(Op.INDEX,this._items,this._parentIndex(index));
            if (this.sortsBefore(parent,item)) break;
            op(Op.INDEX_ASSIGN,this._items,index,parent);
            index = this._parentIndex(index);
        }
        op(Op.INDEX_ASSIGN,this._items,index,item);
    }
    remove() : T {
        let removed : T = op(Op.INDEX,this._items,0);
        let orphan : T = this._items.removeLast();
        if (this._items.isNotEmpty) this._reInsert(orphan);
        return removed;
    }
    @Abstract
    sortsBefore(a : T,b : T) : boolean{ throw 'abstract'}
    _firstChildIndex(index : number) : number {
        return (index << 1) + 1;
    }
    _parentIndex(index : number) : number {
        return (index - 1) >> 1;
    }
    _reInsert(item : T) : void {
        let index : number = 0;
        while (true){
            let childIndex : number = this._firstChildIndex(index);
            if (childIndex >= this._items.length) break;
            let child : T = op(Op.INDEX,this._items,childIndex);
            if (childIndex + 1 < this._items.length) {
                let nextChild : T = op(Op.INDEX,this._items,childIndex + 1);
                if (this.sortsBefore(nextChild,child)) {
                    child = nextChild;
                    childIndex++;
                }
            }
            if (this.sortsBefore(item,child)) break;
            op(Op.INDEX_ASSIGN,this._items,index,op(Op.INDEX,this._items,childIndex));
            index = childIndex;
        }
        op(Op.INDEX_ASSIGN,this._items,index,item);
    }
    constructor() {
    }
    @defaultConstructor
    Heap() {
        this._items = new core.DartList.literal<T>();
    }
}

export class properties {
}
