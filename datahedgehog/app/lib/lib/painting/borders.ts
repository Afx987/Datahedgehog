/** Library asset:datahedgehog_monitor/lib/lib/painting/borders.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as lib4 from "./edge_insets";

export var paintBorder : (canvas : any,rect : any,_namedArguments? : {top? : BorderSide,right? : BorderSide,bottom? : BorderSide,left? : BorderSide}) => any = (canvas : any,rect : any,_namedArguments? : {top? : BorderSide,right? : BorderSide,bottom? : BorderSide,left? : BorderSide}) : any =>  {
    let {top,right,bottom,left} = Object.assign({
        "top" : BorderSide.none,
        "right" : BorderSide.none,
        "bottom" : BorderSide.none,
        "left" : BorderSide.none}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (canvas != null); */;
    /* TODO (AssertStatementImpl) : assert (rect != null); */;
    /* TODO (AssertStatementImpl) : assert (top != null); */;
    /* TODO (AssertStatementImpl) : assert (right != null); */;
    /* TODO (AssertStatementImpl) : assert (bottom != null); */;
    /* TODO (AssertStatementImpl) : assert (left != null); */;
    let paint : any = ((_) : any =>  {
        {
            _.strokeWidth = 0.0;
            return _;
        }
    })(Paint());
    let path : any = Path();
    switch (top.style) {
        case BorderStyle.solid:
            paint.color = top.color;
            path.reset();
            path.moveTo(rect.left,rect.top);
            path.lineTo(rect.right,rect.top);
            if (top.width == 0.0) {
                paint.style = PaintingStyle.stroke;
            }else {
                paint.style = PaintingStyle.fill;
                path.lineTo(op(Op.MINUS,rect.right,right.width),op(Op.PLUS,rect.top,top.width));
                path.lineTo(op(Op.PLUS,rect.left,left.width),op(Op.PLUS,rect.top,top.width));
            }
            canvas.drawPath(path,paint);
            break;
        case BorderStyle.none:
            break;
    }
    switch (right.style) {
        case BorderStyle.solid:
            paint.color = right.color;
            path.reset();
            path.moveTo(rect.right,rect.top);
            path.lineTo(rect.right,rect.bottom);
            if (right.width == 0.0) {
                paint.style = PaintingStyle.stroke;
            }else {
                paint.style = PaintingStyle.fill;
                path.lineTo(op(Op.MINUS,rect.right,right.width),op(Op.MINUS,rect.bottom,bottom.width));
                path.lineTo(op(Op.MINUS,rect.right,right.width),op(Op.PLUS,rect.top,top.width));
            }
            canvas.drawPath(path,paint);
            break;
        case BorderStyle.none:
            break;
    }
    switch (bottom.style) {
        case BorderStyle.solid:
            paint.color = bottom.color;
            path.reset();
            path.moveTo(rect.right,rect.bottom);
            path.lineTo(rect.left,rect.bottom);
            if (bottom.width == 0.0) {
                paint.style = PaintingStyle.stroke;
            }else {
                paint.style = PaintingStyle.fill;
                path.lineTo(op(Op.PLUS,rect.left,left.width),op(Op.MINUS,rect.bottom,bottom.width));
                path.lineTo(op(Op.MINUS,rect.right,right.width),op(Op.MINUS,rect.bottom,bottom.width));
            }
            canvas.drawPath(path,paint);
            break;
        case BorderStyle.none:
            break;
    }
    switch (left.style) {
        case BorderStyle.solid:
            paint.color = left.color;
            path.reset();
            path.moveTo(rect.left,rect.bottom);
            path.lineTo(rect.left,rect.top);
            if (left.width == 0.0) {
                paint.style = PaintingStyle.stroke;
            }else {
                paint.style = PaintingStyle.fill;
                path.lineTo(op(Op.PLUS,rect.left,left.width),op(Op.PLUS,rect.top,top.width));
                path.lineTo(op(Op.PLUS,rect.left,left.width),op(Op.MINUS,rect.bottom,bottom.width));
            }
            canvas.drawPath(path,paint);
            break;
        case BorderStyle.none:
            break;
    }
};
export enum BorderStyle {
    none,
    solid
}

export namespace BorderSide {
    export type Constructors = 'BorderSide';
    export type Interface = Omit<BorderSide, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class BorderSide {
    constructor(_namedArguments? : {color? : any,width? : double,style? : BorderStyle}) {
    }
    @defaultConstructor
    BorderSide(_namedArguments? : {color? : any,width? : double,style? : BorderStyle}) {
        let {color,width,style} = Object.assign({
            "color" : new bare.createInstance(any,null,4278190080),
            "width" : 1.0,
            "style" : BorderStyle.solid}, _namedArguments );
        this.assert = assert;
        this.color = color;
        this.width = width;
        this.style = style;
    }
     : any;

     : any;

     : any;

     : any;

    static merge(a : BorderSide,b : BorderSide) : BorderSide {
        /* TODO (AssertStatementImpl) : assert (a != null); */;
        /* TODO (AssertStatementImpl) : assert (b != null); */;
        /* TODO (AssertStatementImpl) : assert (canMerge(a, b)); */;
        let aIsNone : boolean = op(Op.EQUALS,a.style,BorderStyle.none) && a.width == 0.0;
        let bIsNone : boolean = op(Op.EQUALS,b.style,BorderStyle.none) && b.width == 0.0;
        if (aIsNone && bIsNone) return BorderSide.none;
        if (aIsNone) return b;
        if (bIsNone) return a;
        /* TODO (AssertStatementImpl) : assert (a.color == b.color); */;
        /* TODO (AssertStatementImpl) : assert (a.style == b.style); */;
        return BorderSide({
            color : a.color,width : a.width + b.width,style : a.style});
    }
    color : any;

    width : double;

    style : BorderStyle;

    private static __$none : BorderSide;
    static get none() : BorderSide { 
        if (this.__$none===undefined) {
            this.__$none = BorderSide({
                width : 0.0,style : BorderStyle.none});
        }
        return this.__$none;
    }

    copyWith(_namedArguments? : {color? : any,width? : double,style? : BorderStyle}) : BorderSide {
        let {color,width,style} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (width == null || width >= 0.0); */;
        return BorderSide({
            color : (color || this.color),width : (width || this.width),style : (style || this.style)});
    }
    scale(t : double) : BorderSide {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        return BorderSide({
            color : this.color,width : math.max(0.0,this.width * t),style : t <= 0.0 ? BorderStyle.none : this.style});
    }
    toPaint() : any {
        switch (this.style) {
            case BorderStyle.solid:
                return ((_) : any =>  {
                    {
                        _.color = this.color;
                        _.strokeWidth = this.width;
                        _.style = PaintingStyle.stroke;
                        return _;
                    }
                })(Paint());
            case BorderStyle.none:
                return ((_) : any =>  {
                    {
                        _.color = new bare.createInstance(any,null,0);
                        _.strokeWidth = 0.0;
                        _.style = PaintingStyle.stroke;
                        return _;
                    }
                })(Paint());
        }
        return null;
    }
    static canMerge(a : BorderSide,b : BorderSide) : boolean {
        /* TODO (AssertStatementImpl) : assert (a != null); */;
        /* TODO (AssertStatementImpl) : assert (b != null); */;
        if ((op(Op.EQUALS,a.style,BorderStyle.none) && a.width == 0.0) || (op(Op.EQUALS,b.style,BorderStyle.none) && b.width == 0.0)) return true;
        return op(Op.EQUALS,a.style,b.style) && op(Op.EQUALS,a.color,b.color);
    }
    static lerp(a : BorderSide,b : BorderSide,t : double) : BorderSide {
        /* TODO (AssertStatementImpl) : assert (a != null); */;
        /* TODO (AssertStatementImpl) : assert (b != null); */;
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (t == 0.0) return a;
        if (t == 1.0) return b;
        let width : double = ui.lerpDouble(a.width,b.width,t);
        if (width < 0.0) return BorderSide.none;
        if (op(Op.EQUALS,a.style,b.style)) {
            return BorderSide({
                color : Color.lerp(a.color,b.color,t),width : width,style : a.style});
        }
        let colorA : any, colorB : any;
        switch (a.style) {
            case BorderStyle.solid:
                colorA = a.color;
                break;
            case BorderStyle.none:
                colorA = a.color.withAlpha(0);
                break;
        }
        switch (b.style) {
            case BorderStyle.solid:
                colorB = b.color;
                break;
            case BorderStyle.none:
                colorB = b.color.withAlpha(0);
                break;
        }
        return BorderSide({
            color : Color.lerp(colorA,colorB,t),width : width,style : BorderStyle.solid});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : BorderSide = other;
        return op(Op.EQUALS,this.color,typedOther.color) && this.width == typedOther.width && op(Op.EQUALS,this.style,typedOther.style);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.color,this.width,this.style);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.color}, ${new core.DartDouble(this.width).toStringAsFixed(1)}, ${this.style})`;
    }
}

export namespace ShapeBorder {
    export type Constructors = 'ShapeBorder';
    export type Interface = Omit<ShapeBorder, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class ShapeBorder {
    constructor() {
    }
    @defaultConstructor
    ShapeBorder() {
    }
    @AbstractProperty
    get dimensions() : lib4.EdgeInsetsGeometry{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    add(other : ShapeBorder,_namedArguments? : {reversed? : boolean}) : ShapeBorder {
        let {reversed} = Object.assign({
            "reversed" : false}, _namedArguments );
        return null;
    }
    [OperatorMethods.PLUS](other : ShapeBorder) : ShapeBorder {
        return ((this.add(other) || other.add(this,{
            reversed : true})) || _CompoundBorder(new core.DartList.literal<ShapeBorder>(other,this)));
    }
    @Abstract
    scale(t : double) : ShapeBorder{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : ShapeBorder,t : double) : ShapeBorder {
        if (op(Op.EQUALS,a,null)) return this.scale(t);
        return null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : ShapeBorder,t : double) : ShapeBorder {
        if (op(Op.EQUALS,b,null)) return this.scale(1.0 - t);
        return null;
    }
    static lerp(a : ShapeBorder,b : ShapeBorder,t : double) : ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        let result : ShapeBorder;
        if (b != null) result = b.lerpFrom(a,t);
        if (op(Op.EQUALS,result,null) && a != null) result = a.lerpTo(b,t);
        return (result || (t < 0.5 ? a : b));
    }
    @Abstract
    getOuterPath(rect : any,_namedArguments? : {textDirection? : any}) : any{ throw 'abstract'}
    @Abstract
    getInnerPath(rect : any,_namedArguments? : {textDirection? : any}) : any{ throw 'abstract'}
    @Abstract
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any}) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}()`;
    }
}

export namespace _CompoundBorder {
    export type Constructors = ShapeBorder.Constructors | '_CompoundBorder' | 'any';
    export type Interface = Omit<_CompoundBorder, Constructors>;
}
@DartClass
export class _CompoundBorder extends ShapeBorder {
    constructor(borders : core.DartList<ShapeBorder>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CompoundBorder(borders : core.DartList<ShapeBorder>) {
        this.assert = assert;
        this.borders = borders;
    }
     : any;

     : any;

    @namedConstructor
    any( : (border : ShapeBorder) => any, : any) {
        is(border, _CompoundBorder);
    }
    static any : new( : any) => _CompoundBorder;

    borders : core.DartList<ShapeBorder>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib4.EdgeInsetsGeometry {
        return this.borders.fold(lib4.EdgeInsets.zero,(previousValue : lib4.EdgeInsetsGeometry,border : ShapeBorder) =>  {
            return previousValue.add(border.dimensions);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(other : ShapeBorder,_namedArguments? : {reversed? : boolean}) : ShapeBorder {
        let {reversed} = Object.assign({
            "reversed" : false}, _namedArguments );
        if (isNot(other, _CompoundBorder)) {
            let ours : ShapeBorder = reversed ? this.borders.last : this.borders.first;
            let merged : ShapeBorder = (ours.add(other,{
                reversed : reversed}) || other.add(ours,{
                reversed : !reversed}));
            if (merged != null) {
                let result : core.DartList<ShapeBorder> = new core.DartList.literal<ShapeBorder>();
                result.addAll(this.borders);
                result[reversed ? result.length - 1 : 0] = merged;
                return _CompoundBorder(result);
            }
        }
        let mergedBorders : core.DartList<ShapeBorder> = new core.DartList.literal<ShapeBorder>();
        if (reversed) mergedBorders.addAll(this.borders);
        if (is(other, _CompoundBorder)) mergedBorders.addAll(other.borders);else mergedBorders.add(other);
        if (!reversed) mergedBorders.addAll(this.borders);
        return _CompoundBorder(mergedBorders);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : ShapeBorder {
        return _CompoundBorder(this.borders.map((border : ShapeBorder) =>  {
            return border.scale(t);
        }).toList());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : ShapeBorder,t : double) : ShapeBorder {
        return _CompoundBorder.lerp(a,this,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : ShapeBorder,t : double) : ShapeBorder {
        return _CompoundBorder.lerp(this,b,t);
    }
    static lerp(a : ShapeBorder,b : ShapeBorder,t : double) : _CompoundBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        /* TODO (AssertStatementImpl) : assert (a is _CompoundBorder || b is _CompoundBorder); */;
        let aList : core.DartList<ShapeBorder> = is(a, _CompoundBorder) ? a.borders : new core.DartList.literal<ShapeBorder>(a);
        let bList : core.DartList<ShapeBorder> = is(b, _CompoundBorder) ? b.borders : new core.DartList.literal<ShapeBorder>(b);
        let results : core.DartList<ShapeBorder> = new core.DartList.literal<ShapeBorder>();
        let length : number = math.max(aList.length,bList.length);
        for(let index : number = 0; index < length; index += 1){
            let localA : ShapeBorder = index < aList.length ? aList[index] : null;
            let localB : ShapeBorder = index < bList.length ? bList[index] : null;
            if (localA != null && localB != null) {
                let localResult : ShapeBorder = (localA.lerpTo(localB,t) || localB.lerpFrom(localA,t));
                if (localResult != null) {
                    results.add(localResult);
                    continue;
                }
            }
            if (localB != null) results.add(localB.scale(t));
            if (localA != null) results.add(localA.scale(1.0 - t));
        }
        return _CompoundBorder(results);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getInnerPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        for(let index : number = 0; index < this.borders.length - 1; index += 1)rect = this.borders[index].dimensions.resolve(textDirection).deflateRect(rect);
        return this.borders.last.getInnerPath(rect,{
            textDirection : textDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOuterPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return this.borders.first.getOuterPath(rect,{
            textDirection : textDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        for(let border of this.borders) {
            border.paint(canvas,rect,{
                textDirection : textDirection});
            rect = border.dimensions.resolve(textDirection).deflateRect(rect);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : _CompoundBorder = other;
        if (this.borders == typedOther.borders) return true;
        if (this.borders.length != typedOther.borders.length) return false;
        for(let index : number = 0; index < this.borders.length; index += 1){
            if (this.borders[index] != typedOther.borders[index]) return false;
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashList(this.borders);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.borders.reversed.map((border : ShapeBorder) =>  {
            return border.toString();
        }).join(' + ');
    }
}

export class properties {
}
