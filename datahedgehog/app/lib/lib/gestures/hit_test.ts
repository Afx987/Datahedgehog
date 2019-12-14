/** Library asset:datahedgehog_monitor/lib/lib/gestures/hit_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./events";

export namespace HitTestable {
    export type Constructors = never;
    export type Interface = Omit<HitTestable, Constructors>;
}
@DartClass
export class HitTestable {
    @namedFactory
    static $_() : HitTestable {
        return null;
    }
    static _ : new() => HitTestable;

    @Abstract
    hitTest(result : HitTestResult,position : any) : void{ throw 'abstract'}
}

export namespace HitTestDispatcher {
    export type Constructors = never;
    export type Interface = Omit<HitTestDispatcher, Constructors>;
}
@DartClass
export class HitTestDispatcher {
    @namedFactory
    static $_() : HitTestDispatcher {
        return null;
    }
    static _ : new() => HitTestDispatcher;

    @Abstract
    dispatchEvent(event : lib3.PointerEvent,result : HitTestResult) : void{ throw 'abstract'}
}

export namespace HitTestTarget {
    export type Constructors = never;
    export type Interface = Omit<HitTestTarget, Constructors>;
}
@DartClass
export class HitTestTarget {
    @namedFactory
    static $_() : HitTestTarget {
        return null;
    }
    static _ : new() => HitTestTarget;

    @Abstract
    handleEvent(event : lib3.PointerEvent,entry : HitTestEntry) : void{ throw 'abstract'}
}

export namespace HitTestEntry {
    export type Constructors = 'HitTestEntry';
    export type Interface = Omit<HitTestEntry, Constructors>;
}
@DartClass
export class HitTestEntry {
    constructor(target : HitTestTarget) {
    }
    @defaultConstructor
    HitTestEntry(target : HitTestTarget) {
        this.target = target;
    }
    target : HitTestTarget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.target}`;
    }
}

export namespace HitTestResult {
    export type Constructors = 'HitTestResult';
    export type Interface = Omit<HitTestResult, Constructors>;
}
@DartClass
export class HitTestResult {
    constructor(_namedArguments? : {path? : core.DartList<HitTestEntry>}) {
    }
    @defaultConstructor
    HitTestResult(_namedArguments? : {path? : core.DartList<HitTestEntry>}) {
        let {path} = Object.assign({
        }, _namedArguments );
        this._path = (path || new core.DartList.literal<HitTestEntry>());
    }
    get path() : core.DartIterable<HitTestEntry> {
        return this._path;
    }
    _path : core.DartList<HitTestEntry>;

    add(entry : HitTestEntry) : void {
        this._path.add(entry);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `HitTestResult(${this._path.isEmpty ? "<empty path>" : this._path.join(", ")})`;
    }
}

export class properties {
}
