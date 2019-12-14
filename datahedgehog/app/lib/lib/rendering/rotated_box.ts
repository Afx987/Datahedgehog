/** Library asset:datahedgehog_monitor/lib/lib/rendering/rotated_box.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as lib4 from "./box";
import * as lib5 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";
import * as lib8 from "./object";

export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    if (op(Op.EQUALS,child,null)) return 0.0;
    return properties._isVertical ? child.getMinIntrinsicHeight(height) : child.getMinIntrinsicWidth(height);
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    if (op(Op.EQUALS,child,null)) return 0.0;
    return properties._isVertical ? child.getMaxIntrinsicHeight(height) : child.getMaxIntrinsicWidth(height);
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    if (op(Op.EQUALS,child,null)) return 0.0;
    return properties._isVertical ? child.getMinIntrinsicWidth(width) : child.getMinIntrinsicHeight(width);
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    if (op(Op.EQUALS,child,null)) return 0.0;
    return properties._isVertical ? child.getMaxIntrinsicWidth(width) : child.getMaxIntrinsicHeight(width);
};
export var performLayout : () => any = () : any =>  {
    properties._paintTransform = null;
    if (child != null) {
        child.layout(properties._isVertical ? constraints.flipped : constraints,{
            parentUsesSize : true});
        size = properties._isVertical ? Size(child.size.height,child.size.width) : child.size;
        properties._paintTransform = ((_) : any =>  {
            {
                translate(op(Op.DIVIDE,size.width,2.0),op(Op.DIVIDE,size.height,2.0));
                rotateZ(properties._kQuarterTurnsInRadians * (properties.quarterTurns % 4));
                translate(op(Op.DIVIDE,op(Op.NEG,child.size.width),2.0),op(Op.DIVIDE,op(Op.NEG,child.size.height),2.0));
                return _;
            }
        })(lib5.Matrix4.identity());
    }else {
        performResize();
    }
};
export var hitTestChildren : (result : lib6.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib6.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (_paintTransform != null || debugNeedsLayout || child == null); */;
    if (op(Op.EQUALS,child,null) || op(Op.EQUALS,properties._paintTransform,null)) return false;
    let inverse : lib5.Matrix4 = lib5.Matrix4.inverted(properties._paintTransform);
    return child.hitTest(result,{
        position : lib7.MatrixUtils.transformPoint(inverse,position)});
};
export var _paintChild : (context : lib8.PaintingContext,offset : any) => any = (context : lib8.PaintingContext,offset : any) : any =>  {
    context.paintChild(child,offset);
};
export var paint : (context : lib8.PaintingContext,offset : any) => any = (context : lib8.PaintingContext,offset : any) : any =>  {
    if (child != null) context.pushTransform(needsCompositing,offset,properties._paintTransform,_paintChild);
};
export var applyPaintTransform : (child : lib4.RenderBox,transform : lib5.Matrix4) => any = (child : lib4.RenderBox,transform : lib5.Matrix4) : any =>  {
    if (properties._paintTransform != null) transform.multiply(properties._paintTransform);
    super.applyPaintTransform(child,transform);
};
export namespace RenderRotatedBox {
    export type Constructors = lib4.RenderBox.Constructors | 'RenderRotatedBox';
    export type Interface = Omit<RenderRotatedBox, Constructors>;
}
@DartClass
@With(any)
export class RenderRotatedBox extends lib4.RenderBox implements any.Interface {
    constructor(_namedArguments? : {quarterTurns? : number,child? : lib4.RenderBox}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderRotatedBox(_namedArguments? : {quarterTurns? : number,child? : lib4.RenderBox}) {
        let {quarterTurns,child} = Object.assign({
        }, _namedArguments );
        this._quarterTurns = properties.quarterTurns;
        this.child = this.child;
        this.assert = assert;
    }
     : any;

    _quarterTurns;

    child;

}

export class properties {
    private static __$_kQuarterTurnsInRadians : double;
    static get _kQuarterTurnsInRadians() : double { 
        if (this.__$_kQuarterTurnsInRadians===undefined) {
            this.__$_kQuarterTurnsInRadians = op(Op.DIVIDE,math.pi,2.0);
        }
        return this.__$_kQuarterTurnsInRadians;
    }
    static set _kQuarterTurnsInRadians(__$value : double)  { 
        this.__$_kQuarterTurnsInRadians = __$value;
    }

    static get quarterTurns() : number {
        return properties._quarterTurns;
    }
    private static __$_quarterTurns : number;
    static get _quarterTurns() : number { 
        return this.__$_quarterTurns;
    }
    static set _quarterTurns(__$value : number)  { 
        this.__$_quarterTurns = __$value;
    }

    static set quarterTurns(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._quarterTurns == value) return;
        properties._quarterTurns = value;
        markNeedsLayout();
    }
    static get _isVertical() : boolean {
        return properties.quarterTurns % 2 == 1;
    }
    private static __$_paintTransform : lib5.Matrix4;
    static get _paintTransform() : lib5.Matrix4 { 
        return this.__$_paintTransform;
    }
    static set _paintTransform(__$value : lib5.Matrix4)  { 
        this.__$_paintTransform = __$value;
    }

}
