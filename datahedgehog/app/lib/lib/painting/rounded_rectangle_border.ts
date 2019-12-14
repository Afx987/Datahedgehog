/** Library asset:datahedgehog_monitor/lib/lib/painting/rounded_rectangle_border.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./borders";
import * as lib4 from "./border_radius";
import * as lib5 from "./edge_insets";
import * as lib6 from "./circle_border";

export namespace RoundedRectangleBorder {
    export type Constructors = lib3.ShapeBorder.Constructors | 'RoundedRectangleBorder';
    export type Interface = Omit<RoundedRectangleBorder, Constructors>;
}
@DartClass
export class RoundedRectangleBorder extends lib3.ShapeBorder {
    constructor(_namedArguments? : {side? : lib3.BorderSide,borderRadius? : lib4.BorderRadiusGeometry}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RoundedRectangleBorder(_namedArguments? : {side? : lib3.BorderSide,borderRadius? : lib4.BorderRadiusGeometry}) {
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
        return RoundedRectangleBorder({
            side : this.side.scale(t),borderRadius : op(Op.TIMES,this.borderRadius,t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(a, RoundedRectangleBorder)) {
            return RoundedRectangleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),borderRadius : lib4.BorderRadiusGeometry.lerp(a.borderRadius,this.borderRadius,t)});
        }
        if (is(a, lib6.CircleBorder)) {
            return _RoundedRectangleToCircleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),borderRadius : this.borderRadius,circleness : 1.0 - t});
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(b, RoundedRectangleBorder)) {
            return RoundedRectangleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),borderRadius : lib4.BorderRadiusGeometry.lerp(this.borderRadius,b.borderRadius,t)});
        }
        if (is(b, lib6.CircleBorder)) {
            return _RoundedRectangleToCircleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),borderRadius : this.borderRadius,circleness : t});
        }
        return super.lerpTo(b,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getInnerPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return ((_) : any =>  {
            {
                addRRect(this.borderRadius.resolve(textDirection).toRRect(rect).deflate(this.side.width));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOuterPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return ((_) : any =>  {
            {
                addRRect(this.borderRadius.resolve(textDirection).toRRect(rect));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        switch (this.side.style) {
            case lib3.BorderStyle.none:
                break;
            case lib3.BorderStyle.solid:
                let width : double = this.side.width;
                if (width == 0.0) {
                    canvas.drawRRect(this.borderRadius.resolve(textDirection).toRRect(rect),this.side.toPaint());
                }else {
                    let outer : any = this.borderRadius.resolve(textDirection).toRRect(rect);
                    let inner : any = outer.deflate(width);
                    let paint : any = ((_) : any =>  {
                        {
                            _.color = this.side.color;
                            return _;
                        }
                    })(Paint());
                    canvas.drawDRRect(outer,inner,paint);
                }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : RoundedRectangleBorder = other;
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

export namespace _RoundedRectangleToCircleBorder {
    export type Constructors = lib3.ShapeBorder.Constructors | '_RoundedRectangleToCircleBorder';
    export type Interface = Omit<_RoundedRectangleToCircleBorder, Constructors>;
}
@DartClass
export class _RoundedRectangleToCircleBorder extends lib3.ShapeBorder {
    constructor(_namedArguments? : {side? : lib3.BorderSide,borderRadius? : lib4.BorderRadiusGeometry,circleness? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RoundedRectangleToCircleBorder(_namedArguments? : {side? : lib3.BorderSide,borderRadius? : lib4.BorderRadiusGeometry,circleness? : double}) {
        let {side,borderRadius,circleness} = Object.assign({
            "side" : lib3.BorderSide.none,
            "borderRadius" : lib4.BorderRadius.zero}, _namedArguments );
        this.assert = assert;
        this.side = side;
        this.borderRadius = borderRadius;
        this.circleness = circleness;
    }
     : any;

     : any;

     : any;

    side : lib3.BorderSide;

    borderRadius : lib4.BorderRadiusGeometry;

    circleness : double;

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
        return _RoundedRectangleToCircleBorder({
            side : this.side.scale(t),borderRadius : op(Op.TIMES,this.borderRadius,t),circleness : t});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(a, RoundedRectangleBorder)) {
            return _RoundedRectangleToCircleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),borderRadius : lib4.BorderRadiusGeometry.lerp(a.borderRadius,this.borderRadius,t),circleness : this.circleness * t});
        }
        if (is(a, lib6.CircleBorder)) {
            return _RoundedRectangleToCircleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),borderRadius : this.borderRadius,circleness : this.circleness + (1.0 - this.circleness) * (1.0 - t)});
        }
        if (is(a, _RoundedRectangleToCircleBorder)) {
            return _RoundedRectangleToCircleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),borderRadius : lib4.BorderRadiusGeometry.lerp(a.borderRadius,this.borderRadius,t),circleness : ui.lerpDouble(a.circleness,this.circleness,t)});
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        if (is(b, RoundedRectangleBorder)) {
            return _RoundedRectangleToCircleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),borderRadius : lib4.BorderRadiusGeometry.lerp(this.borderRadius,b.borderRadius,t),circleness : this.circleness * (1.0 - t)});
        }
        if (is(b, lib6.CircleBorder)) {
            return _RoundedRectangleToCircleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),borderRadius : this.borderRadius,circleness : this.circleness + (1.0 - this.circleness) * t});
        }
        if (is(b, _RoundedRectangleToCircleBorder)) {
            return _RoundedRectangleToCircleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),borderRadius : lib4.BorderRadiusGeometry.lerp(this.borderRadius,b.borderRadius,t),circleness : ui.lerpDouble(this.circleness,b.circleness,t)});
        }
        return super.lerpTo(b,t);
    }
    _adjustRect(rect : any) : any {
        if (this.circleness == 0.0 || op(Op.EQUALS,rect.width,rect.height)) return rect;
        if (op(Op.LT,rect.width,rect.height)) {
            let delta : double = this.circleness * (op(Op.MINUS,rect.height,rect.width)) / 2.0;
            return Rect.fromLTRB(rect.left,op(Op.PLUS,rect.top,delta),rect.right,op(Op.MINUS,rect.bottom,delta));
        }else {
            let delta : double = this.circleness * (op(Op.MINUS,rect.width,rect.height)) / 2.0;
            return Rect.fromLTRB(op(Op.PLUS,rect.left,delta),rect.top,op(Op.MINUS,rect.right,delta),rect.bottom);
        }
    }
    _adjustBorderRadius(rect : any,textDirection : any) : lib4.BorderRadius {
        let resolvedRadius : lib4.BorderRadius = this.borderRadius.resolve(textDirection);
        if (this.circleness == 0.0) return resolvedRadius;
        return lib4.BorderRadius.lerp(resolvedRadius,lib4.BorderRadius.circular(op(Op.DIVIDE,rect.shortestSide,2.0)),this.circleness);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getInnerPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return ((_) : any =>  {
            {
                addRRect(this._adjustBorderRadius(rect,textDirection).toRRect(this._adjustRect(rect)).deflate(this.side.width));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOuterPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return ((_) : any =>  {
            {
                addRRect(this._adjustBorderRadius(rect,textDirection).toRRect(this._adjustRect(rect)));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        switch (this.side.style) {
            case lib3.BorderStyle.none:
                break;
            case lib3.BorderStyle.solid:
                let width : double = this.side.width;
                if (width == 0.0) {
                    canvas.drawRRect(this._adjustBorderRadius(rect,textDirection).toRRect(this._adjustRect(rect)),this.side.toPaint());
                }else {
                    let outer : any = this._adjustBorderRadius(rect,textDirection).toRRect(this._adjustRect(rect));
                    let inner : any = outer.deflate(width);
                    let paint : any = ((_) : any =>  {
                        {
                            _.color = this.side.color;
                            return _;
                        }
                    })(Paint());
                    canvas.drawDRRect(outer,inner,paint);
                }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : _RoundedRectangleToCircleBorder = other;
        return op(Op.EQUALS,this.side,typedOther.side) && op(Op.EQUALS,this.borderRadius,typedOther.borderRadius) && this.circleness == typedOther.circleness;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.side,this.borderRadius,this.circleness);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `RoundedRectangleBorder(${this.side}, ${this.borderRadius}, ${new core.DartDouble((this.circleness * 100)).toStringAsFixed(1)}% of the way to being a CircleBorder)`;
    }
}

export class properties {
}
