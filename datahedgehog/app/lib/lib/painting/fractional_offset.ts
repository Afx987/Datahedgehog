/** Library asset:datahedgehog_monitor/lib/lib/painting/fractional_offset.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./alignment";

export namespace FractionalOffset {
    export type Constructors = lib3.Alignment.Constructors | 'FractionalOffset';
    export type Interface = Omit<FractionalOffset, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class FractionalOffset extends lib3.Alignment {
    constructor(dx : double,dy : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FractionalOffset(dx : double,dy : double) {
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

    @namedFactory
    static $fromOffsetAndSize(offset : any,size : any) : FractionalOffset {
        /* TODO (AssertStatementImpl) : assert (size != null); */;
        /* TODO (AssertStatementImpl) : assert (offset != null); */;
        return FractionalOffset(op(Op.DIVIDE,offset.dx,size.width),op(Op.DIVIDE,offset.dy,size.height));
    }
    static fromOffsetAndSize : new(offset : any,size : any) => FractionalOffset;

    @namedFactory
    static $fromOffsetAndRect(offset : any,rect : any) : FractionalOffset {
        return FractionalOffset.fromOffsetAndSize(op(Op.MINUS,offset,rect.topLeft),rect.size);
    }
    static fromOffsetAndRect : new(offset : any,rect : any) => FractionalOffset;

    get dx() : double {
        return (this.x + 1.0) / 2.0;
    }
    get dy() : double {
        return (this.y + 1.0) / 2.0;
    }
    private static __$topLeft : FractionalOffset;
    static get topLeft() : FractionalOffset { 
        if (this.__$topLeft===undefined) {
            this.__$topLeft = FractionalOffset(0.0,0.0);
        }
        return this.__$topLeft;
    }

    private static __$topCenter : FractionalOffset;
    static get topCenter() : FractionalOffset { 
        if (this.__$topCenter===undefined) {
            this.__$topCenter = FractionalOffset(0.5,0.0);
        }
        return this.__$topCenter;
    }

    private static __$topRight : FractionalOffset;
    static get topRight() : FractionalOffset { 
        if (this.__$topRight===undefined) {
            this.__$topRight = FractionalOffset(1.0,0.0);
        }
        return this.__$topRight;
    }

    private static __$centerLeft : FractionalOffset;
    static get centerLeft() : FractionalOffset { 
        if (this.__$centerLeft===undefined) {
            this.__$centerLeft = FractionalOffset(0.0,0.5);
        }
        return this.__$centerLeft;
    }

    private static __$center : FractionalOffset;
    static get center() : FractionalOffset { 
        if (this.__$center===undefined) {
            this.__$center = FractionalOffset(0.5,0.5);
        }
        return this.__$center;
    }

    private static __$centerRight : FractionalOffset;
    static get centerRight() : FractionalOffset { 
        if (this.__$centerRight===undefined) {
            this.__$centerRight = FractionalOffset(1.0,0.5);
        }
        return this.__$centerRight;
    }

    private static __$bottomLeft : FractionalOffset;
    static get bottomLeft() : FractionalOffset { 
        if (this.__$bottomLeft===undefined) {
            this.__$bottomLeft = FractionalOffset(0.0,1.0);
        }
        return this.__$bottomLeft;
    }

    private static __$bottomCenter : FractionalOffset;
    static get bottomCenter() : FractionalOffset { 
        if (this.__$bottomCenter===undefined) {
            this.__$bottomCenter = FractionalOffset(0.5,1.0);
        }
        return this.__$bottomCenter;
    }

    private static __$bottomRight : FractionalOffset;
    static get bottomRight() : FractionalOffset { 
        if (this.__$bottomRight===undefined) {
            this.__$bottomRight = FractionalOffset(1.0,1.0);
        }
        return this.__$bottomRight;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MINUS](other : lib3.Alignment) : lib3.Alignment {
        if (isNot(other, FractionalOffset)) return op(Op.MINUS,super,other);
        let typedOther : FractionalOffset = other;
        return FractionalOffset(this.dx - typedOther.dx,this.dy - typedOther.dy);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.PLUS](other : lib3.Alignment) : lib3.Alignment {
        if (isNot(other, FractionalOffset)) return op(Op.PLUS,super,other);
        let typedOther : FractionalOffset = other;
        return FractionalOffset(this.dx + typedOther.dx,this.dy + typedOther.dy);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.NEGATE]() : FractionalOffset {
        return FractionalOffset(-this.dx,-this.dy);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MULTIPLY](other : double) : FractionalOffset {
        return FractionalOffset(this.dx * other,this.dy * other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.DIVIDE](other : double) : FractionalOffset {
        return FractionalOffset(this.dx / other,this.dy / other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.QUOTIENT](other : double) : FractionalOffset {
        return FractionalOffset(new core.DartInt((op(Op.QUOTIENT,this.dx,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this.dy,other))).toDouble());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MODULE](other : double) : FractionalOffset {
        return FractionalOffset(this.dx % other,this.dy % other);
    }
    static lerp(a : FractionalOffset,b : FractionalOffset,t : double) : FractionalOffset {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return FractionalOffset(ui.lerpDouble(0.5,b.dx,t),ui.lerpDouble(0.5,b.dy,t));
        if (op(Op.EQUALS,b,null)) return FractionalOffset(ui.lerpDouble(a.dx,0.5,t),ui.lerpDouble(a.dy,0.5,t));
        return FractionalOffset(ui.lerpDouble(a.dx,b.dx,t),ui.lerpDouble(a.dy,b.dy,t));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `FractionalOffset(${new core.DartDouble(this.dx).toStringAsFixed(1)}, ` + `${new core.DartDouble(this.dy).toStringAsFixed(1)})`;
    }
}

export class properties {
}
