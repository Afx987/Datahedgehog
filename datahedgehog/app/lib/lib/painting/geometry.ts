/** Library asset:datahedgehog_monitor/lib/lib/painting/geometry.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var positionDependentBox : (_namedArguments? : {size? : any,childSize? : any,target? : any,preferBelow? : boolean,verticalOffset? : double,margin? : double}) => any = (_namedArguments? : {size? : any,childSize? : any,target? : any,preferBelow? : boolean,verticalOffset? : double,margin? : double}) : any =>  {
    let {size,childSize,target,preferBelow,verticalOffset,margin} = Object.assign({
        "verticalOffset" : 0.0,
        "margin" : 10.0}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (size != null); */;
    /* TODO (AssertStatementImpl) : assert (childSize != null); */;
    /* TODO (AssertStatementImpl) : assert (target != null); */;
    /* TODO (AssertStatementImpl) : assert (verticalOffset != null); */;
    /* TODO (AssertStatementImpl) : assert (preferBelow != null); */;
    /* TODO (AssertStatementImpl) : assert (margin != null); */;
    let fitsBelow : boolean = op(Op.LEQ,op(Op.PLUS,op(Op.PLUS,target.dy,verticalOffset),childSize.height),op(Op.MINUS,size.height,margin));
    let fitsAbove : boolean = op(Op.GEQ,op(Op.MINUS,op(Op.MINUS,target.dy,verticalOffset),childSize.height),margin);
    let tooltipBelow : boolean = preferBelow ? fitsBelow || !fitsAbove : !(fitsAbove || !fitsBelow);
    let y : double;
    if (tooltipBelow) y = math.min(op(Op.PLUS,target.dy,verticalOffset),op(Op.MINUS,size.height,margin));else y = math.max(op(Op.MINUS,op(Op.MINUS,target.dy,verticalOffset),childSize.height),margin);
    let x : double;
    if (op(Op.LT,op(Op.MINUS,size.width,margin * 2.0),childSize.width)) {
        x = op(Op.DIVIDE,(op(Op.MINUS,size.width,childSize.width)),2.0);
    }else {
        let normalizedTargetX : double = target.dx.clamp(margin,op(Op.MINUS,size.width,margin));
        let edge : double = margin + op(Op.DIVIDE,childSize.width,2.0);
        if (normalizedTargetX < edge) {
            x = margin;
        }else if (normalizedTargetX > op(Op.MINUS,size.width,edge)) {
            x = op(Op.MINUS,op(Op.MINUS,size.width,margin),childSize.width);
        }else {
            x = normalizedTargetX - op(Op.DIVIDE,childSize.width,2.0);
        }
    }
    return Offset(x,y);
};
export class properties {
}
