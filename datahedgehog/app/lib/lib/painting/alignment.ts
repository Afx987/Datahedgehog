/** Library asset:datahedgehog_monitor/lib/lib/painting/alignment.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AlignmentGeometry {
    export type Constructors = 'AlignmentGeometry';
    export type Interface = Omit<AlignmentGeometry, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class AlignmentGeometry {
    constructor() {
    }
    @defaultConstructor
    AlignmentGeometry() {
    }
    @AbstractProperty
    get _x() : double{ throw 'abstract'}
    @AbstractProperty
    get _start() : double{ throw 'abstract'}
    @AbstractProperty
    get _y() : double{ throw 'abstract'}
    add(other : AlignmentGeometry) : AlignmentGeometry {
        return _MixedAlignment(this._x + other._x,this._start + other._start,this._y + other._y);
    }
    @Abstract
    [OperatorMethods.NEGATE]() : AlignmentGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MULTIPLY](other : double) : AlignmentGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.DIVIDE](other : double) : AlignmentGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.QUOTIENT](other : double) : AlignmentGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MODULE](other : double) : AlignmentGeometry{ throw 'abstract'}
    static lerp(a : AlignmentGeometry,b : AlignmentGeometry,t : double) : AlignmentGeometry {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return op(Op.TIMES,b,t);
        if (op(Op.EQUALS,b,null)) return op(Op.TIMES,a,(1.0 - t));
        if (is(a, Alignment) && is(b, Alignment)) return Alignment.lerp(a,b,t);
        if (is(a, AlignmentDirectional) && is(b, AlignmentDirectional)) return AlignmentDirectional.lerp(a,b,t);
        return _MixedAlignment(ui.lerpDouble(a._x,b._x,t),ui.lerpDouble(a._start,b._start,t),ui.lerpDouble(a._y,b._y,t));
    }
    @Abstract
    resolve(direction : any) : Alignment{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (this._start == 0.0) return Alignment._stringify(this._x,this._y);
        if (this._x == 0.0) return AlignmentDirectional._stringify(this._start,this._y);
        return Alignment._stringify(this._x,this._y) + ' + ' + AlignmentDirectional._stringify(this._start,0.0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, AlignmentGeometry)) return false;
        let typedOther : AlignmentGeometry = other;
        return this._x == typedOther._x && this._start == typedOther._start && this._y == typedOther._y;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this._x,this._start,this._y);
    }
}

export namespace Alignment {
    export type Constructors = AlignmentGeometry.Constructors | 'Alignment';
    export type Interface = Omit<Alignment, Constructors>;
}
@DartClass
export class Alignment extends AlignmentGeometry {
    constructor(x : double,y : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Alignment(x : double,y : double) {
        this.assert = assert;
        this.x = x;
        this.y = y;
    }
     : any;

     : any;

    x : double;

    y : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _x() : double {
        return this.x;
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
    get _y() : double {
        return this.y;
    }
    private static __$topLeft : Alignment;
    static get topLeft() : Alignment { 
        if (this.__$topLeft===undefined) {
            this.__$topLeft = Alignment(-1.0,-1.0);
        }
        return this.__$topLeft;
    }

    private static __$topCenter : Alignment;
    static get topCenter() : Alignment { 
        if (this.__$topCenter===undefined) {
            this.__$topCenter = Alignment(0.0,-1.0);
        }
        return this.__$topCenter;
    }

    private static __$topRight : Alignment;
    static get topRight() : Alignment { 
        if (this.__$topRight===undefined) {
            this.__$topRight = Alignment(1.0,-1.0);
        }
        return this.__$topRight;
    }

    private static __$centerLeft : Alignment;
    static get centerLeft() : Alignment { 
        if (this.__$centerLeft===undefined) {
            this.__$centerLeft = Alignment(-1.0,0.0);
        }
        return this.__$centerLeft;
    }

    private static __$center : Alignment;
    static get center() : Alignment { 
        if (this.__$center===undefined) {
            this.__$center = Alignment(0.0,0.0);
        }
        return this.__$center;
    }

    private static __$centerRight : Alignment;
    static get centerRight() : Alignment { 
        if (this.__$centerRight===undefined) {
            this.__$centerRight = Alignment(1.0,0.0);
        }
        return this.__$centerRight;
    }

    private static __$bottomLeft : Alignment;
    static get bottomLeft() : Alignment { 
        if (this.__$bottomLeft===undefined) {
            this.__$bottomLeft = Alignment(-1.0,1.0);
        }
        return this.__$bottomLeft;
    }

    private static __$bottomCenter : Alignment;
    static get bottomCenter() : Alignment { 
        if (this.__$bottomCenter===undefined) {
            this.__$bottomCenter = Alignment(0.0,1.0);
        }
        return this.__$bottomCenter;
    }

    private static __$bottomRight : Alignment;
    static get bottomRight() : Alignment { 
        if (this.__$bottomRight===undefined) {
            this.__$bottomRight = Alignment(1.0,1.0);
        }
        return this.__$bottomRight;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(other : AlignmentGeometry) : AlignmentGeometry {
        if (is(other, Alignment)) return op(Op.PLUS,this,other);
        return super.add(other);
    }
    [OperatorMethods.MINUS](other : Alignment) : Alignment {
        return Alignment(this.x - other.x,this.y - other.y);
    }
    [OperatorMethods.PLUS](other : Alignment) : Alignment {
        return Alignment(this.x + other.x,this.y + other.y);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.NEGATE]() : Alignment {
        return Alignment(-this.x,-this.y);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MULTIPLY](other : double) : Alignment {
        return Alignment(this.x * other,this.y * other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.DIVIDE](other : double) : Alignment {
        return Alignment(this.x / other,this.y / other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.QUOTIENT](other : double) : Alignment {
        return Alignment(new core.DartInt((op(Op.QUOTIENT,this.x,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this.y,other))).toDouble());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MODULE](other : double) : Alignment {
        return Alignment(this.x % other,this.y % other);
    }
    alongOffset(other : any) : any {
        let centerX : double = op(Op.DIVIDE,other.dx,2.0);
        let centerY : double = op(Op.DIVIDE,other.dy,2.0);
        return Offset(centerX + this.x * centerX,centerY + this.y * centerY);
    }
    alongSize(other : any) : any {
        let centerX : double = op(Op.DIVIDE,other.width,2.0);
        let centerY : double = op(Op.DIVIDE,other.height,2.0);
        return Offset(centerX + this.x * centerX,centerY + this.y * centerY);
    }
    withinRect(rect : any) : any {
        let halfWidth : double = op(Op.DIVIDE,rect.width,2.0);
        let halfHeight : double = op(Op.DIVIDE,rect.height,2.0);
        return Offset(op(Op.PLUS,op(Op.PLUS,rect.left,halfWidth),this.x * halfWidth),op(Op.PLUS,op(Op.PLUS,rect.top,halfHeight),this.y * halfHeight));
    }
    inscribe(size : any,rect : any) : any {
        let halfWidthDelta : double = op(Op.DIVIDE,(op(Op.MINUS,rect.width,size.width)),2.0);
        let halfHeightDelta : double = op(Op.DIVIDE,(op(Op.MINUS,rect.height,size.height)),2.0);
        return Rect.fromLTWH(op(Op.PLUS,op(Op.PLUS,rect.left,halfWidthDelta),this.x * halfWidthDelta),op(Op.PLUS,op(Op.PLUS,rect.top,halfHeightDelta),this.y * halfHeightDelta),size.width,size.height);
    }
    static lerp(a : Alignment,b : Alignment,t : double) : Alignment {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return Alignment(ui.lerpDouble(0.0,b.x,t),ui.lerpDouble(0.0,b.y,t));
        if (op(Op.EQUALS,b,null)) return Alignment(ui.lerpDouble(a.x,0.0,t),ui.lerpDouble(a.y,0.0,t));
        return Alignment(ui.lerpDouble(a.x,b.x,t),ui.lerpDouble(a.y,b.y,t));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(direction : any) : Alignment {
        return this;
    }
    static _stringify(x : double,y : double) : string {
        if (x == -1.0 && y == -1.0) return 'topLeft';
        if (x == 0.0 && y == -1.0) return 'topCenter';
        if (x == 1.0 && y == -1.0) return 'topRight';
        if (x == -1.0 && y == 0.0) return 'centerLeft';
        if (x == 0.0 && y == 0.0) return 'center';
        if (x == 1.0 && y == 0.0) return 'centerRight';
        if (x == -1.0 && y == 1.0) return 'bottomLeft';
        if (x == 0.0 && y == 1.0) return 'bottomCenter';
        if (x == 1.0 && y == 1.0) return 'bottomRight';
        return `Alignment(${new core.DartDouble(x).toStringAsFixed(1)}, ` + `${new core.DartDouble(y).toStringAsFixed(1)})`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return Alignment._stringify(this.x,this.y);
    }
}

export namespace AlignmentDirectional {
    export type Constructors = AlignmentGeometry.Constructors | 'AlignmentDirectional';
    export type Interface = Omit<AlignmentDirectional, Constructors>;
}
@DartClass
export class AlignmentDirectional extends AlignmentGeometry {
    constructor(start : double,y : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AlignmentDirectional(start : double,y : double) {
        this.assert = assert;
        this.start = start;
        this.y = y;
    }
     : any;

     : any;

    start : double;

    y : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _x() : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _start() : double {
        return this.start;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _y() : double {
        return this.y;
    }
    private static __$topStart : AlignmentDirectional;
    static get topStart() : AlignmentDirectional { 
        if (this.__$topStart===undefined) {
            this.__$topStart = AlignmentDirectional(-1.0,-1.0);
        }
        return this.__$topStart;
    }

    private static __$topCenter : AlignmentDirectional;
    static get topCenter() : AlignmentDirectional { 
        if (this.__$topCenter===undefined) {
            this.__$topCenter = AlignmentDirectional(0.0,-1.0);
        }
        return this.__$topCenter;
    }

    private static __$topEnd : AlignmentDirectional;
    static get topEnd() : AlignmentDirectional { 
        if (this.__$topEnd===undefined) {
            this.__$topEnd = AlignmentDirectional(1.0,-1.0);
        }
        return this.__$topEnd;
    }

    private static __$centerStart : AlignmentDirectional;
    static get centerStart() : AlignmentDirectional { 
        if (this.__$centerStart===undefined) {
            this.__$centerStart = AlignmentDirectional(-1.0,0.0);
        }
        return this.__$centerStart;
    }

    private static __$center : AlignmentDirectional;
    static get center() : AlignmentDirectional { 
        if (this.__$center===undefined) {
            this.__$center = AlignmentDirectional(0.0,0.0);
        }
        return this.__$center;
    }

    private static __$centerEnd : AlignmentDirectional;
    static get centerEnd() : AlignmentDirectional { 
        if (this.__$centerEnd===undefined) {
            this.__$centerEnd = AlignmentDirectional(1.0,0.0);
        }
        return this.__$centerEnd;
    }

    private static __$bottomStart : AlignmentDirectional;
    static get bottomStart() : AlignmentDirectional { 
        if (this.__$bottomStart===undefined) {
            this.__$bottomStart = AlignmentDirectional(-1.0,1.0);
        }
        return this.__$bottomStart;
    }

    private static __$bottomCenter : AlignmentDirectional;
    static get bottomCenter() : AlignmentDirectional { 
        if (this.__$bottomCenter===undefined) {
            this.__$bottomCenter = AlignmentDirectional(0.0,1.0);
        }
        return this.__$bottomCenter;
    }

    private static __$bottomEnd : AlignmentDirectional;
    static get bottomEnd() : AlignmentDirectional { 
        if (this.__$bottomEnd===undefined) {
            this.__$bottomEnd = AlignmentDirectional(1.0,1.0);
        }
        return this.__$bottomEnd;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(other : AlignmentGeometry) : AlignmentGeometry {
        if (is(other, AlignmentDirectional)) return op(Op.PLUS,this,other);
        return super.add(other);
    }
    [OperatorMethods.MINUS](other : AlignmentDirectional) : AlignmentDirectional {
        return AlignmentDirectional(this.start - other.start,this.y - other.y);
    }
    [OperatorMethods.PLUS](other : AlignmentDirectional) : AlignmentDirectional {
        return AlignmentDirectional(this.start + other.start,this.y + other.y);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.NEGATE]() : AlignmentDirectional {
        return AlignmentDirectional(-this.start,-this.y);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MULTIPLY](other : double) : AlignmentDirectional {
        return AlignmentDirectional(this.start * other,this.y * other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.DIVIDE](other : double) : AlignmentDirectional {
        return AlignmentDirectional(this.start / other,this.y / other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.QUOTIENT](other : double) : AlignmentDirectional {
        return AlignmentDirectional(new core.DartInt((op(Op.QUOTIENT,this.start,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this.y,other))).toDouble());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MODULE](other : double) : AlignmentDirectional {
        return AlignmentDirectional(this.start % other,this.y % other);
    }
    static lerp(a : AlignmentDirectional,b : AlignmentDirectional,t : double) : AlignmentDirectional {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return AlignmentDirectional(ui.lerpDouble(0.0,b.start,t),ui.lerpDouble(0.0,b.y,t));
        if (op(Op.EQUALS,b,null)) return AlignmentDirectional(ui.lerpDouble(a.start,0.0,t),ui.lerpDouble(a.y,0.0,t));
        return AlignmentDirectional(ui.lerpDouble(a.start,b.start,t),ui.lerpDouble(a.y,b.y,t));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(direction : any) : Alignment {
        /* TODO (AssertStatementImpl) : assert (direction != null); */;
        switch (direction) {
            case TextDirection.rtl:
                return Alignment(-this.start,this.y);
            case TextDirection.ltr:
                return Alignment(this.start,this.y);
        }
        return null;
    }
    static _stringify(start : double,y : double) : string {
        if (start == -1.0 && y == -1.0) return 'AlignmentDirectional.topStart';
        if (start == 0.0 && y == -1.0) return 'AlignmentDirectional.topCenter';
        if (start == 1.0 && y == -1.0) return 'AlignmentDirectional.topEnd';
        if (start == -1.0 && y == 0.0) return 'AlignmentDirectional.centerStart';
        if (start == 0.0 && y == 0.0) return 'AlignmentDirectional.center';
        if (start == 1.0 && y == 0.0) return 'AlignmentDirectional.centerEnd';
        if (start == -1.0 && y == 1.0) return 'AlignmentDirectional.bottomStart';
        if (start == 0.0 && y == 1.0) return 'AlignmentDirectional.bottomCenter';
        if (start == 1.0 && y == 1.0) return 'AlignmentDirectional.bottomEnd';
        return `AlignmentDirectional(${new core.DartDouble(start).toStringAsFixed(1)}, ` + `${new core.DartDouble(y).toStringAsFixed(1)})`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return AlignmentDirectional._stringify(this.start,this.y);
    }
}

export namespace _MixedAlignment {
    export type Constructors = AlignmentGeometry.Constructors | '_MixedAlignment';
    export type Interface = Omit<_MixedAlignment, Constructors>;
}
@DartClass
export class _MixedAlignment extends AlignmentGeometry {
    constructor(_x : double,_start : double,_y : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MixedAlignment(_x : double,_start : double,_y : double) {
        this._x = _x;
        this._start = _start;
        this._y = _y;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _x : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _start : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _y : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.NEGATE]() : _MixedAlignment {
        return _MixedAlignment(-this._x,-this._start,-this._y);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MULTIPLY](other : double) : _MixedAlignment {
        return _MixedAlignment(this._x * other,this._start * other,this._y * other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.DIVIDE](other : double) : _MixedAlignment {
        return _MixedAlignment(this._x / other,this._start / other,this._y / other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.QUOTIENT](other : double) : _MixedAlignment {
        return _MixedAlignment(new core.DartInt((op(Op.QUOTIENT,this._x,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this._start,other))).toDouble(),new core.DartInt((op(Op.QUOTIENT,this._y,other))).toDouble());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MODULE](other : double) : _MixedAlignment {
        return _MixedAlignment(this._x % other,this._start % other,this._y % other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(direction : any) : Alignment {
        /* TODO (AssertStatementImpl) : assert (direction != null); */;
        switch (direction) {
            case TextDirection.rtl:
                return Alignment(this._x - this._start,this._y);
            case TextDirection.ltr:
                return Alignment(this._x + this._start,this._y);
        }
        return null;
    }
}

export class properties {
}
