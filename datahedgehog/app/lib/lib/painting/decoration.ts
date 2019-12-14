/** Library asset:datahedgehog_monitor/lib/lib/painting/decoration.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "./edge_insets";
import * as lib5 from "./image_provider";

export namespace Decoration {
    export type Constructors = lib3.Diagnosticable.Constructors | 'Decoration';
    export type Interface = Omit<Decoration, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class Decoration extends lib3.Diagnosticable {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Decoration() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        return `${this.runtimeType}`;
    }
    debugAssertIsValid() : boolean {
        return true;
    }
    get padding() : lib4.EdgeInsetsGeometry {
        return lib4.EdgeInsets.zero;
    }
    get isComplex() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : Decoration,t : double) : Decoration {
        return null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : Decoration,t : double) : Decoration {
        return null;
    }
    static lerp(a : Decoration,b : Decoration,t : double) : Decoration {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return (b.lerpFrom(null,t) || b);
        if (op(Op.EQUALS,b,null)) return (a.lerpTo(null,t) || a);
        if (t == 0.0) return a;
        if (t == 1.0) return b;
        return ((b.lerpFrom(a,t) || a.lerpTo(b,t)) || (t < 0.5 ? ((a.lerpTo(null,t * 2.0) || a)) : ((b.lerpFrom(null,(t - 0.5) * 2.0) || b))));
    }
    hitTest(size : any,position : any,_namedArguments? : {textDirection? : any}) : boolean {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return true;
    }
    @Abstract
    createBoxPainter(onChanged? : any) : BoxPainter{ throw 'abstract'}
}

export namespace BoxPainter {
    export type Constructors = 'BoxPainter';
    export type Interface = Omit<BoxPainter, Constructors>;
}
@DartClass
export class BoxPainter {
    constructor(onChanged? : any) {
    }
    @defaultConstructor
    BoxPainter(onChanged? : any) {
        this.onChanged = onChanged;
    }
    @Abstract
    paint(canvas : any,offset : any,configuration : lib5.ImageConfiguration) : any{ throw 'abstract'}
    onChanged : any;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
    }
}

export class properties {
}
