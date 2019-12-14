/** Library asset:datahedgehog_monitor/lib/lib/painting/stadium_border.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./borders";
import * as lib4 from "./edge_insets";
import * as lib5 from "./circle_border";
import * as lib6 from "./rounded_rectangle_border";
import * as lib7 from "./border_radius";

export namespace StadiumBorder {
    export type Constructors = lib3.ShapeBorder.Constructors | 'StadiumBorder';
    export type Interface = Omit<StadiumBorder, Constructors>;
}
@DartClass
export class StadiumBorder extends lib3.ShapeBorder {
    constructor(_namedArguments? : {side? : lib3.BorderSide}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StadiumBorder(_namedArguments? : {side? : lib3.BorderSide}) {
        let {side} = Object.assign({
            "side" : lib3.BorderSide.none}, _namedArguments );
        this.assert = assert;
        this.side = side;
    }
     : any;

    side : lib3.BorderSide;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib4.EdgeInsetsGeometry {
        return lib4.EdgeInsets.all(this.side.width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : lib3.ShapeBorder {
        return StadiumBorder({
            side : this.side.scale(t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(a, StadiumBorder)) return StadiumBorder({
            side : lib3.BorderSide.lerp(a.side,this.side,t)});
        if (is(a, lib5.CircleBorder)) {
            return _StadiumToCircleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),circleness : 1.0 - t});
        }
        if (is(a, lib6.RoundedRectangleBorder)) {
            return _StadiumToRoundedRectangleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),borderRadius : a.borderRadius,rectness : 1.0 - t});
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(b, StadiumBorder)) return StadiumBorder({
            side : lib3.BorderSide.lerp(this.side,b.side,t)});
        if (is(b, lib5.CircleBorder)) {
            return _StadiumToCircleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),circleness : t});
        }
        if (is(b, lib6.RoundedRectangleBorder)) {
            return _StadiumToRoundedRectangleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),borderRadius : b.borderRadius,rectness : t});
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
        let radius : any = Radius.circular(op(Op.DIVIDE,rect.shortestSide,2.0));
        return ((_) : any =>  {
            {
                addRRect(RRect.fromRectAndRadius(rect,radius).deflate(this.side.width));
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
        let radius : any = Radius.circular(op(Op.DIVIDE,rect.shortestSide,2.0));
        return ((_) : any =>  {
            {
                addRRect(RRect.fromRectAndRadius(rect,radius));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any}) : void {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        switch (this.side.style) {
            case lib3.BorderStyle.none:
                break;
            case lib3.BorderStyle.solid:
                let radius : any = Radius.circular(op(Op.DIVIDE,rect.shortestSide,2.0));
                canvas.drawRRect(RRect.fromRectAndRadius(rect,radius).deflate(this.side.width / 2.0),this.side.toPaint());
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : StadiumBorder = other;
        return op(Op.EQUALS,this.side,typedOther.side);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.side.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.side})`;
    }
}

export namespace _StadiumToCircleBorder {
    export type Constructors = lib3.ShapeBorder.Constructors | '_StadiumToCircleBorder';
    export type Interface = Omit<_StadiumToCircleBorder, Constructors>;
}
@DartClass
export class _StadiumToCircleBorder extends lib3.ShapeBorder {
    constructor(_namedArguments? : {side? : lib3.BorderSide,circleness? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StadiumToCircleBorder(_namedArguments? : {side? : lib3.BorderSide,circleness? : double}) {
        let {side,circleness} = Object.assign({
            "side" : lib3.BorderSide.none,
            "circleness" : 0.0}, _namedArguments );
        this.assert = assert;
        this.side = side;
        this.circleness = circleness;
    }
     : any;

     : any;

    side : lib3.BorderSide;

    circleness : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib4.EdgeInsetsGeometry {
        return lib4.EdgeInsets.all(this.side.width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : lib3.ShapeBorder {
        return _StadiumToCircleBorder({
            side : this.side.scale(t),circleness : t});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(a, StadiumBorder)) {
            return _StadiumToCircleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),circleness : this.circleness * t});
        }
        if (is(a, lib5.CircleBorder)) {
            return _StadiumToCircleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),circleness : this.circleness + (1.0 - this.circleness) * (1.0 - t)});
        }
        if (is(a, _StadiumToCircleBorder)) {
            return _StadiumToCircleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),circleness : ui.lerpDouble(a.circleness,this.circleness,t)});
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(b, StadiumBorder)) {
            return _StadiumToCircleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),circleness : this.circleness * (1.0 - t)});
        }
        if (is(b, lib5.CircleBorder)) {
            return _StadiumToCircleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),circleness : this.circleness + (1.0 - this.circleness) * t});
        }
        if (is(b, _StadiumToCircleBorder)) {
            return _StadiumToCircleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),circleness : ui.lerpDouble(this.circleness,b.circleness,t)});
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
    _adjustBorderRadius(rect : any) : lib7.BorderRadius {
        return lib7.BorderRadius.circular(op(Op.DIVIDE,rect.shortestSide,2.0));
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
                addRRect(this._adjustBorderRadius(rect).toRRect(this._adjustRect(rect)).deflate(this.side.width));
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
                addRRect(this._adjustBorderRadius(rect).toRRect(this._adjustRect(rect)));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any}) : void {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        switch (this.side.style) {
            case lib3.BorderStyle.none:
                break;
            case lib3.BorderStyle.solid:
                let width : double = this.side.width;
                if (width == 0.0) {
                    canvas.drawRRect(this._adjustBorderRadius(rect).toRRect(this._adjustRect(rect)),this.side.toPaint());
                }else {
                    let outer : any = this._adjustBorderRadius(rect).toRRect(this._adjustRect(rect));
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
        let typedOther : _StadiumToCircleBorder = other;
        return op(Op.EQUALS,this.side,typedOther.side) && this.circleness == typedOther.circleness;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.side,this.circleness);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `StadiumBorder(${this.side}, ${new core.DartDouble((this.circleness * 100)).toStringAsFixed(1)}% ` + 'of the way to being a CircleBorder)';
    }
}

export namespace _StadiumToRoundedRectangleBorder {
    export type Constructors = lib3.ShapeBorder.Constructors | '_StadiumToRoundedRectangleBorder';
    export type Interface = Omit<_StadiumToRoundedRectangleBorder, Constructors>;
}
@DartClass
export class _StadiumToRoundedRectangleBorder extends lib3.ShapeBorder {
    constructor(_namedArguments? : {side? : lib3.BorderSide,borderRadius? : lib7.BorderRadius,rectness? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StadiumToRoundedRectangleBorder(_namedArguments? : {side? : lib3.BorderSide,borderRadius? : lib7.BorderRadius,rectness? : double}) {
        let {side,borderRadius,rectness} = Object.assign({
            "side" : lib3.BorderSide.none,
            "borderRadius" : lib7.BorderRadius.zero,
            "rectness" : 0.0}, _namedArguments );
        this.assert = assert;
        this.side = side;
        this.borderRadius = borderRadius;
        this.rectness = rectness;
    }
     : any;

     : any;

     : any;

    side : lib3.BorderSide;

    borderRadius : lib7.BorderRadius;

    rectness : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib4.EdgeInsetsGeometry {
        return lib4.EdgeInsets.all(this.side.width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : lib3.ShapeBorder {
        return _StadiumToRoundedRectangleBorder({
            side : this.side.scale(t),borderRadius : op(Op.TIMES,this.borderRadius,t),rectness : t});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(a, StadiumBorder)) {
            return _StadiumToRoundedRectangleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),borderRadius : this.borderRadius,rectness : this.rectness * t});
        }
        if (is(a, lib6.RoundedRectangleBorder)) {
            return _StadiumToRoundedRectangleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),borderRadius : this.borderRadius,rectness : this.rectness + (1.0 - this.rectness) * (1.0 - t)});
        }
        if (is(a, _StadiumToRoundedRectangleBorder)) {
            return _StadiumToRoundedRectangleBorder({
                side : lib3.BorderSide.lerp(a.side,this.side,t),borderRadius : lib7.BorderRadius.lerp(a.borderRadius,this.borderRadius,t),rectness : ui.lerpDouble(a.rectness,this.rectness,t)});
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(b, StadiumBorder)) {
            return _StadiumToRoundedRectangleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),borderRadius : this.borderRadius,rectness : this.rectness * (1.0 - t)});
        }
        if (is(b, lib6.RoundedRectangleBorder)) {
            return _StadiumToRoundedRectangleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),borderRadius : this.borderRadius,rectness : this.rectness + (1.0 - this.rectness) * t});
        }
        if (is(b, _StadiumToRoundedRectangleBorder)) {
            return _StadiumToRoundedRectangleBorder({
                side : lib3.BorderSide.lerp(this.side,b.side,t),borderRadius : lib7.BorderRadius.lerp(this.borderRadius,b.borderRadius,t),rectness : ui.lerpDouble(this.rectness,b.rectness,t)});
        }
        return super.lerpTo(b,t);
    }
    _adjustBorderRadius(rect : any) : lib7.BorderRadius {
        return lib7.BorderRadius.lerp(this.borderRadius,lib7.BorderRadius.all(Radius.circular(op(Op.DIVIDE,rect.shortestSide,2.0))),1.0 - this.rectness);
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
                addRRect(this._adjustBorderRadius(rect).toRRect(rect).deflate(this.side.width));
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
                addRRect(this._adjustBorderRadius(rect).toRRect(rect));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any}) : void {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        switch (this.side.style) {
            case lib3.BorderStyle.none:
                break;
            case lib3.BorderStyle.solid:
                let width : double = this.side.width;
                if (width == 0.0) {
                    canvas.drawRRect(this._adjustBorderRadius(rect).toRRect(rect),this.side.toPaint());
                }else {
                    let outer : any = this._adjustBorderRadius(rect).toRRect(rect);
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
        let typedOther : _StadiumToRoundedRectangleBorder = other;
        return op(Op.EQUALS,this.side,typedOther.side) && op(Op.EQUALS,this.borderRadius,typedOther.borderRadius) && this.rectness == typedOther.rectness;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.side,this.borderRadius,this.rectness);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `StadiumBorder(${this.side}, ${this.borderRadius}, ` + `${new core.DartDouble((this.rectness * 100)).toStringAsFixed(1)}% of the way to being a ` + 'RoundedRectangleBorder)';
    }
}

export class properties {
}
