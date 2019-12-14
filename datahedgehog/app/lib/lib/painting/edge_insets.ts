/** Library asset:datahedgehog_monitor/lib/lib/painting/edge_insets.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./basic_types";

export namespace EdgeInsetsGeometry {
    export type Constructors = 'EdgeInsetsGeometry';
    export type Interface = Omit<EdgeInsetsGeometry, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class EdgeInsetsGeometry {
    constructor() {
    }
    @defaultConstructor
    EdgeInsetsGeometry() {
    }
    @AbstractProperty
    get _bottom() : double{ throw 'abstract'}
    @AbstractProperty
    get _end() : double{ throw 'abstract'}
    @AbstractProperty
    get _left() : double{ throw 'abstract'}
    @AbstractProperty
    get _right() : double{ throw 'abstract'}
    @AbstractProperty
    get _start() : double{ throw 'abstract'}
    @AbstractProperty
    get _top() : double{ throw 'abstract'}
    get isNonNegative() : boolean {
        return this._left >= 0.0 && this._right >= 0.0 && this._start >= 0.0 && this._end >= 0.0 && this._top >= 0.0 && this._bottom >= 0.0;
    }
    get horizontal() : double {
        return this._left + this._right + this._start + this._end;
    }
    get vertical() : double {
        return this._top + this._bottom;
    }
    along(axis : lib3.Axis) : double {
        /* TODO (AssertStatementImpl) : assert (axis != null); */;
        switch (axis) {
            case lib3.Axis.horizontal:
                return this.horizontal;
            case lib3.Axis.vertical:
                return this.vertical;
        }
        return null;
    }
    get collapsedSize() : any {
        return Size(this.horizontal,this.vertical);
    }
    get flipped() : EdgeInsetsGeometry {
        return _MixedEdgeInsets.fromLRSETB(this._right,this._left,this._end,this._start,this._bottom,this._top);
    }
    inflateSize(size : any) : any {
        return Size(op(Op.PLUS,size.width,this.horizontal),op(Op.PLUS,size.height,this.vertical));
    }
    deflateSize(size : any) : any {
        return Size(op(Op.MINUS,size.width,this.horizontal),op(Op.MINUS,size.height,this.vertical));
    }
    subtract(other : EdgeInsetsGeometry) : EdgeInsetsGeometry {
        return _MixedEdgeInsets.fromLRSETB(this._left - other._left,this._right - other._right,this._start - other._start,this._end - other._end,this._top - other._top,this._bottom - other._bottom);
    }
    add(other : EdgeInsetsGeometry) : EdgeInsetsGeometry {
        return _MixedEdgeInsets.fromLRSETB(this._left + other._left,this._right + other._right,this._start + other._start,this._end + other._end,this._top + other._top,this._bottom + other._bottom);
    }
    @Abstract
    [OperatorMethods.NEGATE]() : EdgeInsetsGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MULTIPLY](other : double) : EdgeInsetsGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.DIVIDE](other : double) : EdgeInsetsGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.QUOTIENT](other : double) : EdgeInsetsGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MODULE](other : double) : EdgeInsetsGeometry{ throw 'abstract'}
    static lerp(a : EdgeInsetsGeometry,b : EdgeInsetsGeometry,t : double) : EdgeInsetsGeometry {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return op(Op.TIMES,b,t);
        if (op(Op.EQUALS,b,null)) return op(Op.TIMES,a,(1.0 - t));
        if (is(a, EdgeInsets) && is(b, EdgeInsets)) return EdgeInsets.lerp(a,b,t);
        if (is(a, EdgeInsetsDirectional) && is(b, EdgeInsetsDirectional)) return EdgeInsetsDirectional.lerp(a,b,t);
        return _MixedEdgeInsets.fromLRSETB(ui.lerpDouble(a._left,b._left,t),ui.lerpDouble(a._right,b._right,t),ui.lerpDouble(a._start,b._start,t),ui.lerpDouble(a._end,b._end,t),ui.lerpDouble(a._top,b._top,t),ui.lerpDouble(a._bottom,b._bottom,t));
    }
    @Abstract
    resolve(direction : any) : EdgeInsets{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (this._start == 0.0 && this._end == 0.0) {
            if (this._left == 0.0 && this._right == 0.0 && this._top == 0.0 && this._bottom == 0.0) return 'EdgeInsets.zero';
            if (this._left == this._right && this._right == this._top && this._top == this._bottom) return `EdgeInsets.all(${new core.DartDouble(this._left).toStringAsFixed(1)})`;
            return `EdgeInsets(${new core.DartDouble(this._left).toStringAsFixed(1)}, ` + `${new core.DartDouble(this._top).toStringAsFixed(1)}, ` + `${new core.DartDouble(this._right).toStringAsFixed(1)}, ` + `${new core.DartDouble(this._bottom).toStringAsFixed(1)})`;
        }
        if (this._left == 0.0 && this._right == 0.0) {
            return `EdgeInsetsDirectional(${new core.DartDouble(this._start).toStringAsFixed(1)}, ` + `${new core.DartDouble(this._top).toStringAsFixed(1)}, ` + `${new core.DartDouble(this._end).toStringAsFixed(1)}, ` + `${new core.DartDouble(this._bottom).toStringAsFixed(1)})`;
        }
        return `EdgeInsets(${new core.DartDouble(this._left).toStringAsFixed(1)}, ` + `${new core.DartDouble(this._top).toStringAsFixed(1)}, ` + `${new core.DartDouble(this._right).toStringAsFixed(1)}, ` + `${new core.DartDouble(this._bottom).toStringAsFixed(1)})` + ' + ' + `EdgeInsetsDirectional(${new core.DartDouble(this._start).toStringAsFixed(1)}, ` + '0.0, ' + `${new core.DartDouble(this._end).toStringAsFixed(1)}, ` + '0.0)';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, EdgeInsetsGeometry)) return false;
        let typedOther : EdgeInsetsGeometry = other;
        return this._left == typedOther._left && this._right == typedOther._right && this._start == typedOther._start && this._end == typedOther._end && this._top == typedOther._top && this._bottom == typedOther._bottom;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this._left,this._right,this._start,this._end,this._top,this._bottom);
    }
}

export namespace EdgeInsets {
    export type Constructors = EdgeInsetsGeometry.Constructors | 'fromLTRB' | 'all' | 'only' | 'symmetric' | 'fromWindowPadding';
    export type Interface = Omit<EdgeInsets, Constructors>;
}
@DartClass
export class EdgeInsets extends EdgeInsetsGeometry {
    @namedConstructor
    fromLTRB(left : double,top : double,right : double,bottom : double) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    static fromLTRB : new(left : double,top : double,right : double,bottom : double) => EdgeInsets;

    @namedConstructor
    all(value : double) {
        this.left = value;
        this.top = value;
        this.right = value;
        this.bottom = value;
    }
    static all : new(value : double) => EdgeInsets;

    @namedConstructor
    only(_namedArguments? : {left? : double,top? : double,right? : double,bottom? : double}) {
        let {left,top,right,bottom} = Object.assign({
            "left" : 0.0,
            "top" : 0.0,
            "right" : 0.0,
            "bottom" : 0.0}, _namedArguments );
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    static only : new(_namedArguments? : {left? : double,top? : double,right? : double,bottom? : double}) => EdgeInsets;

    @namedConstructor
    symmetric(_namedArguments? : {vertical? : double,horizontal? : double}) {
        let {vertical,horizontal} = Object.assign({
            "vertical" : 0.0,
            "horizontal" : 0.0}, _namedArguments );
        this.left = horizontal;
        this.top = vertical;
        this.right = horizontal;
        this.bottom = vertical;
    }
    static symmetric : new(_namedArguments? : {vertical? : double,horizontal? : double}) => EdgeInsets;

    @namedConstructor
    fromWindowPadding(padding : any,devicePixelRatio : double) {
        this.left = op(Op.DIVIDE,padding.left,devicePixelRatio);
        this.top = op(Op.DIVIDE,padding.top,devicePixelRatio);
        this.right = op(Op.DIVIDE,padding.right,devicePixelRatio);
        this.bottom = op(Op.DIVIDE,padding.bottom,devicePixelRatio);
    }
    static fromWindowPadding : new(padding : any,devicePixelRatio : double) => EdgeInsets;

    private static __$zero : EdgeInsets;
    static get zero() : EdgeInsets { 
        if (this.__$zero===undefined) {
            this.__$zero = EdgeInsets.only();
        }
        return this.__$zero;
    }

    left : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _left() : double {
        return this.left;
    }
    top : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _top() : double {
        return this.top;
    }
    right : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _right() : double {
        return this.right;
    }
    bottom : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _bottom() : double {
        return this.bottom;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _start() : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _end() : double {
        return 0.0;
    }
    get topLeft() : any {
        return Offset(this.left,this.top);
    }
    get topRight() : any {
        return Offset(-this.right,this.top);
    }
    get bottomLeft() : any {
        return Offset(this.left,-this.bottom);
    }
    get bottomRight() : any {
        return Offset(-this.right,-this.bottom);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get flipped() : EdgeInsets {
        return EdgeInsets.fromLTRB(this.right,this.bottom,this.left,this.top);
    }
    inflateRect(rect : any) : any {
        return Rect.fromLTRB(op(Op.MINUS,rect.left,this.left),op(Op.MINUS,rect.top,this.top),op(Op.PLUS,rect.right,this.right),op(Op.PLUS,rect.bottom,this.bottom));
    }
    deflateRect(rect : any) : any {
        return Rect.fromLTRB(op(Op.PLUS,rect.left,this.left),op(Op.PLUS,rect.top,this.top),op(Op.MINUS,rect.right,this.right),op(Op.MINUS,rect.bottom,this.bottom));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    subtract(other : EdgeInsetsGeometry) : EdgeInsetsGeometry {
        if (is(other, EdgeInsets)) return op(Op.MINUS,this,other);
        return super.subtract(other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(other : EdgeInsetsGeometry) : EdgeInsetsGeometry {
        if (is(other, EdgeInsets)) return op(Op.PLUS,this,other);
        return super.add(other);
    }
    [OperatorMethods.MINUS](other : EdgeInsets) : EdgeInsets {
        return EdgeInsets.fromLTRB(this.left - other.left,this.top - other.top,this.right - other.right,this.bottom - other.bottom);
    }
    [OperatorMethods.PLUS](other : EdgeInsets) : EdgeInsets {
        return EdgeInsets.fromLTRB(this.left + other.left,this.top + other.top,this.right + other.right,this.bottom + other.bottom);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.NEGATE]() : EdgeInsets {
        return EdgeInsets.fromLTRB(-this.left,-this.top,-this.right,-this.bottom);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MULTIPLY](other : double) : EdgeInsets {
        return EdgeInsets.fromLTRB(this.left * other,this.top * other,this.right * other,this.bottom * other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.DIVIDE](other : double) : EdgeInsets {
        return EdgeInsets.fromLTRB(this.left / other,this.top / other,this.right / other,this.bottom / other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.QUOTIENT](other : double) : EdgeInsets {
        return EdgeInsets.fromLTRB(new core.DartInt((op(Op.QUOTIENT,this.left,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this.top,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this.right,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this.bottom,other))).toDouble());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MODULE](other : double) : EdgeInsets {
        return EdgeInsets.fromLTRB(this.left % other,this.top % other,this.right % other,this.bottom % other);
    }
    static lerp(a : EdgeInsets,b : EdgeInsets,t : double) : EdgeInsets {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return op(Op.TIMES,b,t);
        if (op(Op.EQUALS,b,null)) return op(Op.TIMES,a,(1.0 - t));
        return EdgeInsets.fromLTRB(ui.lerpDouble(a.left,b.left,t),ui.lerpDouble(a.top,b.top,t),ui.lerpDouble(a.right,b.right,t),ui.lerpDouble(a.bottom,b.bottom,t));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(direction : any) : EdgeInsets {
        return this;
    }
    copyWith(_namedArguments? : {left? : double,top? : double,right? : double,bottom? : double}) : EdgeInsets {
        let {left,top,right,bottom} = Object.assign({
        }, _namedArguments );
        return EdgeInsets.only({
            left : (left || this.left),top : (top || this.top),right : (right || this.right),bottom : (bottom || this.bottom)});
    }
}

export namespace EdgeInsetsDirectional {
    export type Constructors = EdgeInsetsGeometry.Constructors | 'fromSTEB' | 'only';
    export type Interface = Omit<EdgeInsetsDirectional, Constructors>;
}
@DartClass
export class EdgeInsetsDirectional extends EdgeInsetsGeometry {
    @namedConstructor
    fromSTEB(start : double,top : double,end : double,bottom : double) {
        this.start = start;
        this.top = top;
        this.end = end;
        this.bottom = bottom;
    }
    static fromSTEB : new(start : double,top : double,end : double,bottom : double) => EdgeInsetsDirectional;

    @namedConstructor
    only(_namedArguments? : {start? : double,top? : double,end? : double,bottom? : double}) {
        let {start,top,end,bottom} = Object.assign({
            "start" : 0.0,
            "top" : 0.0,
            "end" : 0.0,
            "bottom" : 0.0}, _namedArguments );
        this.start = start;
        this.top = top;
        this.end = end;
        this.bottom = bottom;
    }
    static only : new(_namedArguments? : {start? : double,top? : double,end? : double,bottom? : double}) => EdgeInsetsDirectional;

    private static __$zero : EdgeInsetsDirectional;
    static get zero() : EdgeInsetsDirectional { 
        if (this.__$zero===undefined) {
            this.__$zero = EdgeInsetsDirectional.only();
        }
        return this.__$zero;
    }

    start : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _start() : double {
        return this.start;
    }
    top : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _top() : double {
        return this.top;
    }
    end : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _end() : double {
        return this.end;
    }
    bottom : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _bottom() : double {
        return this.bottom;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _left() : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _right() : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isNonNegative() : boolean {
        return this.start >= 0.0 && this.top >= 0.0 && this.end >= 0.0 && this.bottom >= 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get flipped() : EdgeInsetsDirectional {
        return EdgeInsetsDirectional.fromSTEB(this.end,this.bottom,this.start,this.top);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    subtract(other : EdgeInsetsGeometry) : EdgeInsetsGeometry {
        if (is(other, EdgeInsetsDirectional)) return op(Op.MINUS,this,other);
        return super.subtract(other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(other : EdgeInsetsGeometry) : EdgeInsetsGeometry {
        if (is(other, EdgeInsetsDirectional)) return op(Op.PLUS,this,other);
        return super.add(other);
    }
    [OperatorMethods.MINUS](other : EdgeInsetsDirectional) : EdgeInsetsDirectional {
        return EdgeInsetsDirectional.fromSTEB(this.start - other.start,this.top - other.top,this.end - other.end,this.bottom - other.bottom);
    }
    [OperatorMethods.PLUS](other : EdgeInsetsDirectional) : EdgeInsetsDirectional {
        return EdgeInsetsDirectional.fromSTEB(this.start + other.start,this.top + other.top,this.end + other.end,this.bottom + other.bottom);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.NEGATE]() : EdgeInsetsDirectional {
        return EdgeInsetsDirectional.fromSTEB(-this.start,-this.top,-this.end,-this.bottom);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MULTIPLY](other : double) : EdgeInsetsDirectional {
        return EdgeInsetsDirectional.fromSTEB(this.start * other,this.top * other,this.end * other,this.bottom * other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.DIVIDE](other : double) : EdgeInsetsDirectional {
        return EdgeInsetsDirectional.fromSTEB(this.start / other,this.top / other,this.end / other,this.bottom / other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.QUOTIENT](other : double) : EdgeInsetsDirectional {
        return EdgeInsetsDirectional.fromSTEB(new core.DartInt((op(Op.QUOTIENT,this.start,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this.top,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this.end,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this.bottom,other))).toDouble());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MODULE](other : double) : EdgeInsetsDirectional {
        return EdgeInsetsDirectional.fromSTEB(this.start % other,this.top % other,this.end % other,this.bottom % other);
    }
    static lerp(a : EdgeInsetsDirectional,b : EdgeInsetsDirectional,t : double) : EdgeInsetsDirectional {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return op(Op.TIMES,b,t);
        if (op(Op.EQUALS,b,null)) return op(Op.TIMES,a,(1.0 - t));
        return EdgeInsetsDirectional.fromSTEB(ui.lerpDouble(a.start,b.start,t),ui.lerpDouble(a.top,b.top,t),ui.lerpDouble(a.end,b.end,t),ui.lerpDouble(a.bottom,b.bottom,t));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(direction : any) : EdgeInsets {
        /* TODO (AssertStatementImpl) : assert (direction != null); */;
        switch (direction) {
            case TextDirection.rtl:
                return EdgeInsets.fromLTRB(this.end,this.top,this.start,this.bottom);
            case TextDirection.ltr:
                return EdgeInsets.fromLTRB(this.start,this.top,this.end,this.bottom);
        }
        return null;
    }
}

export namespace _MixedEdgeInsets {
    export type Constructors = EdgeInsetsGeometry.Constructors | 'fromLRSETB';
    export type Interface = Omit<_MixedEdgeInsets, Constructors>;
}
@DartClass
export class _MixedEdgeInsets extends EdgeInsetsGeometry {
    @namedConstructor
    fromLRSETB(_left : double,_right : double,_start : double,_end : double,_top : double,_bottom : double) {
        this._left = _left;
        this._right = _right;
        this._start = _start;
        this._end = _end;
        this._top = _top;
        this._bottom = _bottom;
    }
    static fromLRSETB : new(_left : double,_right : double,_start : double,_end : double,_top : double,_bottom : double) => _MixedEdgeInsets;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _left : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _right : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _start : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _end : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _top : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _bottom : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isNonNegative() : boolean {
        return this._left >= 0.0 && this._right >= 0.0 && this._start >= 0.0 && this._end >= 0.0 && this._top >= 0.0 && this._bottom >= 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.NEGATE]() : _MixedEdgeInsets {
        return _MixedEdgeInsets.fromLRSETB(-this._left,-this._right,-this._start,-this._end,-this._top,-this._bottom);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MULTIPLY](other : double) : _MixedEdgeInsets {
        return _MixedEdgeInsets.fromLRSETB(this._left * other,this._right * other,this._start * other,this._end * other,this._top * other,this._bottom * other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.DIVIDE](other : double) : _MixedEdgeInsets {
        return _MixedEdgeInsets.fromLRSETB(this._left / other,this._right / other,this._start / other,this._end / other,this._top / other,this._bottom / other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.QUOTIENT](other : double) : _MixedEdgeInsets {
        return _MixedEdgeInsets.fromLRSETB(new core.DartInt((op(Op.QUOTIENT,this._left,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this._right,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this._start,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this._end,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this._top,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this._bottom,other))).toDouble());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MODULE](other : double) : _MixedEdgeInsets {
        return _MixedEdgeInsets.fromLRSETB(this._left % other,this._right % other,this._start % other,this._end % other,this._top % other,this._bottom % other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(direction : any) : EdgeInsets {
        /* TODO (AssertStatementImpl) : assert (direction != null); */;
        switch (direction) {
            case TextDirection.rtl:
                return EdgeInsets.fromLTRB(this._end + this._left,this._top,this._start + this._right,this._bottom);
            case TextDirection.ltr:
                return EdgeInsets.fromLTRB(this._start + this._left,this._top,this._end + this._right,this._bottom);
        }
        return null;
    }
}

export class properties {
}
