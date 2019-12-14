/** Library asset:datahedgehog_monitor/lib/lib/foundation/observer_list.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ObserverList {
    export type Constructors = core.DartIterable.Constructors | 'ObserverList';
    export type Interface<T> = Omit<ObserverList<T>, Constructors>;
}
@DartClass
export class ObserverList<T> extends core.DartIterable<T> {
    _list : core.DartList<T>;

    _isDirty : boolean;

    _set : core.DartHashSet<T>;

    add(item : T) : void {
        this._isDirty = true;
        this._list.add(item);
    }
    remove(item : T) : boolean {
        this._isDirty = true;
        return this._list.remove(item);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    contains(element : core.DartObject) : boolean {
        if (this._list.length < 3) return this._list.contains(element);
        if (this._isDirty) {
            if (op(Op.EQUALS,this._set,null)) {
                this._set = op(Op.LT,core.DartHashSet<E>,T);
                op(Op.GT,,.from(this._list));
            }else {
                this._set.clear();
                this._set.addAll(this._list);
            }
            this._isDirty = false;
        }
        return this._set.contains(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterator() : core.DartIterator<T> {
        return this._list.iterator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isEmpty() : boolean {
        return this._list.isEmpty;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isNotEmpty() : boolean {
        return this._list.isNotEmpty;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ObserverList() {
        this._list = new core.DartList.literal<T>();
        this._isDirty = false;
    }
}

export class properties {
}
