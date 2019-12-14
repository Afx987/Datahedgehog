/** Library asset:datahedgehog_monitor/lib/lib/rendering/viewport_offset.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var flipScrollDirection : (direction : ScrollDirection) => ScrollDirection = (direction : ScrollDirection) : ScrollDirection =>  {
    switch (direction) {
        case ScrollDirection.idle:
            return ScrollDirection.idle;
        case ScrollDirection.forward:
            return ScrollDirection.reverse;
        case ScrollDirection.reverse:
            return ScrollDirection.forward;
    }
    return null;
};
export enum ScrollDirection {
    idle,
    forward,
    reverse
}

export namespace ViewportOffset {
    export type Constructors = lib3.ChangeNotifier.Constructors | 'ViewportOffset';
    export type Interface = Omit<ViewportOffset, Constructors>;
}
@DartClass
export class ViewportOffset extends lib3.ChangeNotifier {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ViewportOffset() {
    }
    @namedFactory
    static $fixed(value : double) : ViewportOffset {
        return new _FixedViewportOffset(value);
    }
    static fixed : new(value : double) => ViewportOffset;

    @namedFactory
    static $zero() : ViewportOffset {
        return new _FixedViewportOffset.zero();
    }
    static zero : new() => ViewportOffset;

    @AbstractProperty
    get pixels() : double{ throw 'abstract'}
    @Abstract
    applyViewportDimension(viewportDimension : double) : boolean{ throw 'abstract'}
    @Abstract
    applyContentDimensions(minScrollExtent : double,maxScrollExtent : double) : boolean{ throw 'abstract'}
    @Abstract
    correctBy(correction : double) : any{ throw 'abstract'}
    @Abstract
    jumpTo(pixels : double) : any{ throw 'abstract'}
    void : async.Future<any>;

    @Abstract
    animateTo(to : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib4.Curve}){ throw 'abstract'}
    void : async.Future<any>;

    moveTo(to : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib4.Curve,clamp? : boolean}) {
        let {duration,curve,clamp} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (to != null); */;
        if (op(Op.EQUALS,duration,null) || op(Op.EQUALS,duration,core.DartDuration.zero)) {
            this.jumpTo(to);
            return op(Op.LT,async.Future<T>,);
            op(Op.GT,,.value());
        }else {
            return this.animateTo(to,{
                duration : duration,curve : (curve || lib4.Curves.ease)});
        }
    }
    @AbstractProperty
    get userScrollDirection() : ScrollDirection{ throw 'abstract'}
    @AbstractProperty
    get allowImplicitScrolling() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let description : core.DartList<string> = new core.DartList.literal<string>();
        this.debugFillDescription(description);
        return `${lib5.describeIdentity(this)}(${description.join(", ")})`;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillDescription(description : core.DartList<string>) : any {
        description.add(`offset: ${((_868_)=>(!!_868_)?new core.DartDouble(_868_).toStringAsFixed(1):null)(this.pixels)}`);
    }
}

export namespace _FixedViewportOffset {
    export type Constructors = ViewportOffset.Constructors | '_FixedViewportOffset' | 'zero';
    export type Interface = Omit<_FixedViewportOffset, Constructors>;
}
@DartClass
export class _FixedViewportOffset extends ViewportOffset {
    constructor(_pixels : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FixedViewportOffset(_pixels : double) {
        this._pixels = _pixels;
    }
    @namedConstructor
    zero() {
        this._pixels = 0.0;
    }
    static zero : new() => _FixedViewportOffset;

    _pixels : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get pixels() : double {
        return this._pixels;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyViewportDimension(viewportDimension : double) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyContentDimensions(minScrollExtent : double,maxScrollExtent : double) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    correctBy(correction : double) : any {
        this._pixels += correction;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    jumpTo(pixels : double) : any {
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    void : async.Future<any>;

    animateTo(to : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib4.Curve}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {duration,curve} = Object.assign({
            }, _namedArguments );
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get userScrollDirection() : ScrollDirection {
        return ScrollDirection.idle;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get allowImplicitScrolling() : boolean {
        return false;
    }
}

export class properties {
}
