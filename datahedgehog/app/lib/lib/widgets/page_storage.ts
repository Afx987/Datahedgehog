/** Library asset:datahedgehog_monitor/lib/lib/widgets/page_storage.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib4 from "./framework";

export namespace PageStorageKey {
    export type Constructors = lib3.ValueKey.Constructors | 'PageStorageKey';
    export type Interface<T> = Omit<PageStorageKey<T>, Constructors>;
}
@DartClass
export class PageStorageKey<T> extends lib3.ValueKey<T> {
    constructor(value : T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PageStorageKey(value : T) {
        super.ValueKey(value);
    }
}

export namespace _StorageEntryIdentifier {
    export type Constructors = '_StorageEntryIdentifier';
    export type Interface = Omit<_StorageEntryIdentifier, Constructors>;
}
@DartClass
export class _StorageEntryIdentifier {
    constructor(keys : core.DartList<PageStorageKey<any>>) {
    }
    @defaultConstructor
    _StorageEntryIdentifier(keys : core.DartList<PageStorageKey<any>>) {
        this.assert = assert;
        this.keys = keys;
    }
     : any;

    keys : core.DartList<PageStorageKey<any>>;

    get isNotEmpty() : boolean {
        return this.keys.isNotEmpty;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : _StorageEntryIdentifier = other;
        for(let index : number = 0; index < this.keys.length; index += 1){
            if (this.keys[index] != typedOther.keys[index]) return false;
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashList(this.keys);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `StorageEntryIdentifier(${((_935_)=>(!!_935_)?_935_.join(":"):null)(this.keys)})`;
    }
}

export namespace PageStorageBucket {
    export type Constructors = 'PageStorageBucket';
    export type Interface = Omit<PageStorageBucket, Constructors>;
}
@DartClass
export class PageStorageBucket {
    static _maybeAddKey(context : lib4.BuildContext,keys : core.DartList<PageStorageKey<any>>) : boolean {
        let widget : lib4.Widget = context.widget;
        let key : lib3.Key = widget.key;
        if (is(key, PageStorageKey<any>)) keys.add(key);
        return isNot(widget, PageStorage);
    }
    _allKeys(context : lib4.BuildContext) : core.DartList<PageStorageKey<any>> {
        let keys : core.DartList<PageStorageKey<any>> = new core.DartList.literal<PageStorageKey<any>>();
        if (PageStorageBucket._maybeAddKey(context,keys)) {
            context.visitAncestorElements((element : lib4.Element) =>  {
                return PageStorageBucket._maybeAddKey(element,keys);
            });
        }
        return keys;
    }
    _computeIdentifier(context : lib4.BuildContext) : _StorageEntryIdentifier {
        return _StorageEntryIdentifier(this._allKeys(context));
    }
    _storage : core.DartMap<core.DartObject,any>;

    writeState(context : lib4.BuildContext,data : any,_namedArguments? : {identifier? : core.DartObject}) : void {
        let {identifier} = Object.assign({
        }, _namedArguments );
        this._storage = ( this._storage ) || ( new core.DartMap.literal([
        ]) );
        if (identifier != null) {
            this._storage.set(identifier,data);
        }else {
            let contextIdentifier : _StorageEntryIdentifier = this._computeIdentifier(context);
            if (contextIdentifier.isNotEmpty) this._storage.set(contextIdentifier,data);
        }
    }
    readState(context : lib4.BuildContext,_namedArguments? : {identifier? : core.DartObject}) : any {
        let {identifier} = Object.assign({
        }, _namedArguments );
        if (this._storage == null) return null;
        if (identifier != null) return this._storage.get(identifier);
        let contextIdentifier : _StorageEntryIdentifier = this._computeIdentifier(context);
        return contextIdentifier.isNotEmpty ? this._storage.get(contextIdentifier) : null;
    }
    constructor() {
    }
    @defaultConstructor
    PageStorageBucket() {
    }
}

export namespace PageStorage {
    export type Constructors = lib4.StatelessWidget.Constructors | 'PageStorage';
    export type Interface = Omit<PageStorage, Constructors>;
}
@DartClass
export class PageStorage extends lib4.StatelessWidget {
    constructor(_namedArguments? : {key? : lib3.Key,bucket? : PageStorageBucket,child? : lib4.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PageStorage(_namedArguments? : {key? : lib3.Key,bucket? : PageStorageBucket,child? : lib4.Widget}) {
        let {key,bucket,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.bucket = bucket;
        this.child = child;
    }
     : any;

     : any;

     : any;

    child : lib4.Widget;

    bucket : PageStorageBucket;

    static of(context : lib4.BuildContext) : PageStorageBucket {
        let widget : PageStorage = context.ancestorWidgetOfExactType(PageStorage);
        return ((t)=>(!!t)?t.bucket:null)(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        return this.child;
    }
}

export class properties {
}
