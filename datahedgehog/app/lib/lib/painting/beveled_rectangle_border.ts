/** Library asset:datahedgehog_monitor/lib/lib/painting/beveled_rectangle_border.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./borders";
import * as lib4 from "./border_radius";
import * as lib5 from "./edge_insets";
import * as math from "@dart2ts/dart/math";

export namespace BeveledRectangleBorder {
    export type Constructors = lib3.ShapeBorder.Constructors | 'BeveledRectangleBorder';
    export type Interface = Omit<BeveledRectangleBorder, Constructors>;
}
@DartClass
export class BeveledRectangleBorder extends lib3.ShapeBorder {
    constructor(_namedArguments? : {side? : lib3.BorderSide,borderRadius? : lib4.BorderRadiusGeometry}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BeveledRectangleBorder(_namedArguments? : {side? : lib3.BorderSide,borderRadius? : lib4.BorderRadiusGeometry}) {
        let {side,borderRadius} = Object.assign({
            "side" : lib3.BorderSide.none,
            "borderRadius" : lib4.BorderRadius.zero}, _namedArguments );
        this.assert = assert;
        this.side = side;
        this.borderRadius = borderRadius;
    }
     : any;

     : any;

    side : lib3.BorderSide;

    borderRadius : lib4.BorderRadiusGeometry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib5.EdgeInsetsGeometry {
        return lib5.EdgeInsets.all(this.side.width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : lib3.ShapeBorder {
        return BeveledRectangleBorder({
            side : this.side.scale(t),borderRadius : op(Op.TIMES,this.borderRadius,t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(a, BeveledRectangleBorder)) {
            return BeveledRectangleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),borderRadius : lib4.BorderRadiusGeometry.lerp(a.borderRadius,this.borderRadius,t)});
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(b, BeveledRectangleBorder)) {
            return BeveledRectangleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),borderRadius : lib4.BorderRadiusGeometry.lerp(this.borderRadius,b.borderRadius,t)});
        }
        return super.lerpTo(b,t);
    }
    _getPath(rrect : any) : any {
        let centerLeft : any = Offset(rrect.left,rrect.center.dy);
        let centerRight : any = Offset(rrect.right,rrect.center.dy);
        let centerTop : any = Offset(rrect.center.dx,rrect.top);
        let centerBottom : any = Offset(rrect.center.dx,rrect.bottom);
        let tlRadiusX : double = math.max(0.0,rrect.tlRadiusX);
        let tlRadiusY : double = math.max(0.0,rrect.tlRadiusY);
        let trRadiusX : double = math.max(0.0,rrect.trRadiusX);
        let trRadiusY : double = math.max(0.0,rrect.trRadiusY);
        let blRadiusX : double = math.max(0.0,rrect.blRadiusX);
        let blRadiusY : double = math.max(0.0,rrect.blRadiusY);
        let brRadiusX : double = math.max(0.0,rrect.brRadiusX);
        let brRadiusY : double = math.max(0.0,rrect.brRadiusY);
        let vertices : core.DartList<any> = new core.DartList.literal<any>(Offset(rrect.left,math.min(centerLeft.dy,op(Op.PLUS,rrect.top,tlRadiusY))),Offset(math.min(centerTop.dx,op(Op.PLUS,rrect.left,tlRadiusX)),rrect.top),Offset(math.max(centerTop.dx,op(Op.MINUS,rrect.right,trRadiusX)),rrect.top),Offset(rrect.right,math.min(centerRight.dy,op(Op.PLUS,rrect.top,trRadiusY))),Offset(rrect.right,math.max(centerRight.dy,op(Op.MINUS,rrect.bottom,brRadiusY))),Offset(math.max(centerBottom.dx,op(Op.MINUS,rrect.right,brRadiusX)),rrect.bottom),Offset(math.min(centerBottom.dx,op(Op.PLUS,rrect.left,blRadiusX)),rrect.bottom),Offset(rrect.left,math.max(centerLeft.dy,op(Op.MINUS,rrect.bottom,blRadiusY))));
        return ((_) : any =>  {
            {
                addPolygon(vertices,true);
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getInnerPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return this._getPath(this.borderRadius.resolve(textDirection).toRRect(rect).deflate(this.side.width));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOuterPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return this._getPath(this.borderRadius.resolve(textDirection).toRRect(rect));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any}) : void {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        if (rect.isEmpty) return;
        switch (this.side.style) {
            case lib3.BorderStyle.none:
                break;
            case lib3.BorderStyle.solid:
                let path : any = ((_) : any =>  {
                    {
                        addPath(this.getInnerPath(rect,{
                            textDirection : textDirection}),Offset.zero);
                        return _;
                    }
                })(this.getOuterPath(rect,{
                    textDirection : textDirection}));
                canvas.drawPath(path,this.side.toPaint());
                break;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : BeveledRectangleBorder = other;
        return op(Op.EQUALS,this.side,typedOther.side) && op(Op.EQUALS,this.borderRadius,typedOther.borderRadius);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.side,this.borderRadius);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.side}, ${this.borderRadius})`;
    }
}

export class properties {
}
