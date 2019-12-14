/** Library asset:datahedgehog_monitor/lib/lib/painting/border_radius.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace BorderRadiusGeometry {
    export type Constructors = 'BorderRadiusGeometry';
    export type Interface = Omit<BorderRadiusGeometry, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class BorderRadiusGeometry {
    constructor() {
    }
    @defaultConstructor
    BorderRadiusGeometry() {
    }
    @AbstractProperty
    get _topLeft() : any{ throw 'abstract'}
    @AbstractProperty
    get _topRight() : any{ throw 'abstract'}
    @AbstractProperty
    get _bottomLeft() : any{ throw 'abstract'}
    @AbstractProperty
    get _bottomRight() : any{ throw 'abstract'}
    @AbstractProperty
    get _topStart() : any{ throw 'abstract'}
    @AbstractProperty
    get _topEnd() : any{ throw 'abstract'}
    @AbstractProperty
    get _bottomStart() : any{ throw 'abstract'}
    @AbstractProperty
    get _bottomEnd() : any{ throw 'abstract'}
    subtract(other : BorderRadiusGeometry) : BorderRadiusGeometry {
        return _MixedBorderRadius(op(Op.MINUS,this._topLeft,other._topLeft),op(Op.MINUS,this._topRight,other._topRight),op(Op.MINUS,this._bottomLeft,other._bottomLeft),op(Op.MINUS,this._bottomRight,other._bottomRight),op(Op.MINUS,this._topStart,other._topStart),op(Op.MINUS,this._topEnd,other._topEnd),op(Op.MINUS,this._bottomStart,other._bottomStart),op(Op.MINUS,this._bottomEnd,other._bottomEnd));
    }
    add(other : BorderRadiusGeometry) : BorderRadiusGeometry {
        return _MixedBorderRadius(op(Op.PLUS,this._topLeft,other._topLeft),op(Op.PLUS,this._topRight,other._topRight),op(Op.PLUS,this._bottomLeft,other._bottomLeft),op(Op.PLUS,this._bottomRight,other._bottomRight),op(Op.PLUS,this._topStart,other._topStart),op(Op.PLUS,this._topEnd,other._topEnd),op(Op.PLUS,this._bottomStart,other._bottomStart),op(Op.PLUS,this._bottomEnd,other._bottomEnd));
    }
    @Abstract
    [OperatorMethods.NEGATE]() : BorderRadiusGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MULTIPLY](other : double) : BorderRadiusGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.DIVIDE](other : double) : BorderRadiusGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.QUOTIENT](other : double) : BorderRadiusGeometry{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MODULE](other : double) : BorderRadiusGeometry{ throw 'abstract'}
    static lerp(a : BorderRadiusGeometry,b : BorderRadiusGeometry,t : double) : BorderRadiusGeometry {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        a = ( a ) || ( BorderRadius.zero );
        b = ( b ) || ( BorderRadius.zero );
        return a.add(op(Op.TIMES,(b.subtract(a)),t));
    }
    @Abstract
    resolve(direction : any) : BorderRadius{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let visual : string, logical : string;
        if (op(Op.EQUALS,this._topLeft,this._topRight) && op(Op.EQUALS,this._topRight,this._bottomLeft) && op(Op.EQUALS,this._bottomLeft,this._bottomRight)) {
            if (this._topLeft != Radius.zero) {
                if (op(Op.EQUALS,this._topLeft.x,this._topLeft.y)) {
                    visual = `BorderRadius.circular(${this._topLeft.x.toStringAsFixed(1)})`;
                }else {
                    visual = `BorderRadius.all(${this._topLeft})`;
                }
            }
        }else {
            let result : core.DartStringBuffer = core.DartStringBuffer();
            result.write('BorderRadius.only(');
            let comma : boolean = false;
            if (this._topLeft != Radius.zero) {
                result.write(`topLeft: ${this._topLeft}`);
                comma = true;
            }
            if (this._topRight != Radius.zero) {
                if (comma) result.write(', ');
                result.write(`topRight: ${this._topRight}`);
                comma = true;
            }
            if (this._bottomLeft != Radius.zero) {
                if (comma) result.write(', ');
                result.write(`bottomLeft: ${this._bottomLeft}`);
                comma = true;
            }
            if (this._bottomRight != Radius.zero) {
                if (comma) result.write(', ');
                result.write(`bottomRight: ${this._bottomRight}`);
            }
            result.write(')');
            visual = result.toString();
        }
        if (op(Op.EQUALS,this._topStart,this._topEnd) && op(Op.EQUALS,this._topEnd,this._bottomEnd) && op(Op.EQUALS,this._bottomEnd,this._bottomStart)) {
            if (this._topStart != Radius.zero) {
                if (op(Op.EQUALS,this._topStart.x,this._topStart.y)) {
                    logical = `BorderRadiusDirectional.circular(${this._topStart.x.toStringAsFixed(1)})`;
                }else {
                    logical = `BorderRadiusDirectional.all(${this._topStart})`;
                }
            }
        }else {
            let result : core.DartStringBuffer = core.DartStringBuffer();
            result.write('BorderRadiusDirectional.only(');
            let comma : boolean = false;
            if (this._topStart != Radius.zero) {
                result.write(`topStart: ${this._topStart}`);
                comma = true;
            }
            if (this._topEnd != Radius.zero) {
                if (comma) result.write(', ');
                result.write(`topEnd: ${this._topEnd}`);
                comma = true;
            }
            if (this._bottomStart != Radius.zero) {
                if (comma) result.write(', ');
                result.write(`bottomStart: ${this._bottomStart}`);
                comma = true;
            }
            if (this._bottomEnd != Radius.zero) {
                if (comma) result.write(', ');
                result.write(`bottomEnd: ${this._bottomEnd}`);
            }
            result.write(')');
            logical = result.toString();
        }
        if (visual != null && logical != null) return `${visual} + ${logical}`;
        if (visual != null) return visual;
        if (logical != null) return logical;
        return 'BorderRadius.zero';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : BorderRadiusGeometry = other;
        return op(Op.EQUALS,this._topLeft,typedOther._topLeft) && op(Op.EQUALS,this._topRight,typedOther._topRight) && op(Op.EQUALS,this._bottomLeft,typedOther._bottomLeft) && op(Op.EQUALS,this._bottomRight,typedOther._bottomRight) && op(Op.EQUALS,this._topStart,typedOther._topStart) && op(Op.EQUALS,this._topEnd,typedOther._topEnd) && op(Op.EQUALS,this._bottomStart,typedOther._bottomStart) && op(Op.EQUALS,this._bottomEnd,typedOther._bottomEnd);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this._topLeft,this._topRight,this._bottomLeft,this._bottomRight,this._topStart,this._topEnd,this._bottomStart,this._bottomEnd);
    }
}

export namespace BorderRadius {
    export type Constructors = BorderRadiusGeometry.Constructors | 'all' | 'circular' | 'vertical' | 'horizontal' | 'only';
    export type Interface = Omit<BorderRadius, Constructors>;
}
@DartClass
export class BorderRadius extends BorderRadiusGeometry {
    @namedConstructor
    all(radius : any) {
        this.only({
            topLeft : radius,topRight : radius,bottomLeft : radius,bottomRight : radius});
    }
    static all : new(radius : any) => BorderRadius;

    @namedConstructor
    circular(radius : double) {
        this.all(Radius.circular(radius));
    }
    static circular : new(radius : double) => BorderRadius;

    @namedConstructor
    vertical(_namedArguments? : {top? : any,bottom? : any}) {
        let {top,bottom} = Object.assign({
            "top" : Radius.zero,
            "bottom" : Radius.zero}, _namedArguments );
        this.only({
            topLeft : top,topRight : top,bottomLeft : bottom,bottomRight : bottom});
    }
    static vertical : new(_namedArguments? : {top? : any,bottom? : any}) => BorderRadius;

    @namedConstructor
    horizontal(_namedArguments? : {left? : any,right? : any}) {
        let {left,right} = Object.assign({
            "left" : Radius.zero,
            "right" : Radius.zero}, _namedArguments );
        this.only({
            topLeft : left,topRight : right,bottomLeft : left,bottomRight : right});
    }
    static horizontal : new(_namedArguments? : {left? : any,right? : any}) => BorderRadius;

    @namedConstructor
    only(_namedArguments? : {topLeft? : any,topRight? : any,bottomLeft? : any,bottomRight? : any}) {
        let {topLeft,topRight,bottomLeft,bottomRight} = Object.assign({
            "topLeft" : Radius.zero,
            "topRight" : Radius.zero,
            "bottomLeft" : Radius.zero,
            "bottomRight" : Radius.zero}, _namedArguments );
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
    static only : new(_namedArguments? : {topLeft? : any,topRight? : any,bottomLeft? : any,bottomRight? : any}) => BorderRadius;

    private static __$zero : BorderRadius;
    static get zero() : BorderRadius { 
        if (this.__$zero===undefined) {
            this.__$zero = BorderRadius.all(Radius.zero);
        }
        return this.__$zero;
    }

    topLeft : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _topLeft() : any {
        return this.topLeft;
    }
    topRight : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _topRight() : any {
        return this.topRight;
    }
    bottomLeft : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _bottomLeft() : any {
        return this.bottomLeft;
    }
    bottomRight : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _bottomRight() : any {
        return this.bottomRight;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _topStart() : any {
        return Radius.zero;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _topEnd() : any {
        return Radius.zero;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _bottomStart() : any {
        return Radius.zero;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _bottomEnd() : any {
        return Radius.zero;
    }
    toRRect(rect : any) : any {
        return RRect.fromRectAndCorners(rect,{
            topLeft : this.topLeft,topRight : this.topRight,bottomLeft : this.bottomLeft,bottomRight : this.bottomRight});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    subtract(other : BorderRadiusGeometry) : BorderRadiusGeometry {
        if (is(other, BorderRadius)) return op(Op.MINUS,this,other);
        return super.subtract(other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(other : BorderRadiusGeometry) : BorderRadiusGeometry {
        if (is(other, BorderRadius)) return op(Op.PLUS,this,other);
        return super.add(other);
    }
    [OperatorMethods.MINUS](other : BorderRadius) : BorderRadius {
        return BorderRadius.only({
            topLeft : op(Op.MINUS,this.topLeft,other.topLeft),topRight : op(Op.MINUS,this.topRight,other.topRight),bottomLeft : op(Op.MINUS,this.bottomLeft,other.bottomLeft),bottomRight : op(Op.MINUS,this.bottomRight,other.bottomRight)});
    }
    [OperatorMethods.PLUS](other : BorderRadius) : BorderRadius {
        return BorderRadius.only({
            topLeft : op(Op.PLUS,this.topLeft,other.topLeft),topRight : op(Op.PLUS,this.topRight,other.topRight),bottomLeft : op(Op.PLUS,this.bottomLeft,other.bottomLeft),bottomRight : op(Op.PLUS,this.bottomRight,other.bottomRight)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.NEGATE]() : BorderRadius {
        return BorderRadius.only({
            topLeft : op(Op.NEG,this.topLeft),topRight : op(Op.NEG,this.topRight),bottomLeft : op(Op.NEG,this.bottomLeft),bottomRight : op(Op.NEG,this.bottomRight)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MULTIPLY](other : double) : BorderRadius {
        return BorderRadius.only({
            topLeft : op(Op.TIMES,this.topLeft,other),topRight : op(Op.TIMES,this.topRight,other),bottomLeft : op(Op.TIMES,this.bottomLeft,other),bottomRight : op(Op.TIMES,this.bottomRight,other)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.DIVIDE](other : double) : BorderRadius {
        return BorderRadius.only({
            topLeft : op(Op.DIVIDE,this.topLeft,other),topRight : op(Op.DIVIDE,this.topRight,other),bottomLeft : op(Op.DIVIDE,this.bottomLeft,other),bottomRight : op(Op.DIVIDE,this.bottomRight,other)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.QUOTIENT](other : double) : BorderRadius {
        return BorderRadius.only({
            topLeft : op(Op.QUOTIENT,this.topLeft,other),topRight : op(Op.QUOTIENT,this.topRight,other),bottomLeft : op(Op.QUOTIENT,this.bottomLeft,other),bottomRight : op(Op.QUOTIENT,this.bottomRight,other)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MODULE](other : double) : BorderRadius {
        return BorderRadius.only({
            topLeft : op(Op.MODULE,this.topLeft,other),topRight : op(Op.MODULE,this.topRight,other),bottomLeft : op(Op.MODULE,this.bottomLeft,other),bottomRight : op(Op.MODULE,this.bottomRight,other)});
    }
    static lerp(a : BorderRadius,b : BorderRadius,t : double) : BorderRadius {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return op(Op.TIMES,b,t);
        if (op(Op.EQUALS,b,null)) return op(Op.TIMES,a,(1.0 - t));
        return BorderRadius.only({
            topLeft : Radius.lerp(a.topLeft,b.topLeft,t),topRight : Radius.lerp(a.topRight,b.topRight,t),bottomLeft : Radius.lerp(a.bottomLeft,b.bottomLeft,t),bottomRight : Radius.lerp(a.bottomRight,b.bottomRight,t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(direction : any) : BorderRadius {
        return this;
    }
}

export namespace BorderRadiusDirectional {
    export type Constructors = BorderRadiusGeometry.Constructors | 'all' | 'circular' | 'vertical' | 'horizontal' | 'only';
    export type Interface = Omit<BorderRadiusDirectional, Constructors>;
}
@DartClass
export class BorderRadiusDirectional extends BorderRadiusGeometry {
    @namedConstructor
    all(radius : any) {
        this.only({
            topStart : radius,topEnd : radius,bottomStart : radius,bottomEnd : radius});
    }
    static all : new(radius : any) => BorderRadiusDirectional;

    @namedConstructor
    circular(radius : double) {
        this.all(Radius.circular(radius));
    }
    static circular : new(radius : double) => BorderRadiusDirectional;

    @namedConstructor
    vertical(_namedArguments? : {top? : any,bottom? : any}) {
        let {top,bottom} = Object.assign({
            "top" : Radius.zero,
            "bottom" : Radius.zero}, _namedArguments );
        this.only({
            topStart : top,topEnd : top,bottomStart : bottom,bottomEnd : bottom});
    }
    static vertical : new(_namedArguments? : {top? : any,bottom? : any}) => BorderRadiusDirectional;

    @namedConstructor
    horizontal(_namedArguments? : {start? : any,end? : any}) {
        let {start,end} = Object.assign({
            "start" : Radius.zero,
            "end" : Radius.zero}, _namedArguments );
        this.only({
            topStart : start,topEnd : end,bottomStart : start,bottomEnd : end});
    }
    static horizontal : new(_namedArguments? : {start? : any,end? : any}) => BorderRadiusDirectional;

    @namedConstructor
    only(_namedArguments? : {topStart? : any,topEnd? : any,bottomStart? : any,bottomEnd? : any}) {
        let {topStart,topEnd,bottomStart,bottomEnd} = Object.assign({
            "topStart" : Radius.zero,
            "topEnd" : Radius.zero,
            "bottomStart" : Radius.zero,
            "bottomEnd" : Radius.zero}, _namedArguments );
        this.topStart = topStart;
        this.topEnd = topEnd;
        this.bottomStart = bottomStart;
        this.bottomEnd = bottomEnd;
    }
    static only : new(_namedArguments? : {topStart? : any,topEnd? : any,bottomStart? : any,bottomEnd? : any}) => BorderRadiusDirectional;

    private static __$zero : BorderRadiusDirectional;
    static get zero() : BorderRadiusDirectional { 
        if (this.__$zero===undefined) {
            this.__$zero = BorderRadiusDirectional.all(Radius.zero);
        }
        return this.__$zero;
    }

    topStart : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _topStart() : any {
        return this.topStart;
    }
    topEnd : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _topEnd() : any {
        return this.topEnd;
    }
    bottomStart : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _bottomStart() : any {
        return this.bottomStart;
    }
    bottomEnd : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _bottomEnd() : any {
        return this.bottomEnd;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _topLeft() : any {
        return Radius.zero;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _topRight() : any {
        return Radius.zero;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _bottomLeft() : any {
        return Radius.zero;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _bottomRight() : any {
        return Radius.zero;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    subtract(other : BorderRadiusGeometry) : BorderRadiusGeometry {
        if (is(other, BorderRadiusDirectional)) return op(Op.MINUS,this,other);
        return super.subtract(other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(other : BorderRadiusGeometry) : BorderRadiusGeometry {
        if (is(other, BorderRadiusDirectional)) return op(Op.PLUS,this,other);
        return super.add(other);
    }
    [OperatorMethods.MINUS](other : BorderRadiusDirectional) : BorderRadiusDirectional {
        return BorderRadiusDirectional.only({
            topStart : op(Op.MINUS,this.topStart,other.topStart),topEnd : op(Op.MINUS,this.topEnd,other.topEnd),bottomStart : op(Op.MINUS,this.bottomStart,other.bottomStart),bottomEnd : op(Op.MINUS,this.bottomEnd,other.bottomEnd)});
    }
    [OperatorMethods.PLUS](other : BorderRadiusDirectional) : BorderRadiusDirectional {
        return BorderRadiusDirectional.only({
            topStart : op(Op.PLUS,this.topStart,other.topStart),topEnd : op(Op.PLUS,this.topEnd,other.topEnd),bottomStart : op(Op.PLUS,this.bottomStart,other.bottomStart),bottomEnd : op(Op.PLUS,this.bottomEnd,other.bottomEnd)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.NEGATE]() : BorderRadiusDirectional {
        return BorderRadiusDirectional.only({
            topStart : op(Op.NEG,this.topStart),topEnd : op(Op.NEG,this.topEnd),bottomStart : op(Op.NEG,this.bottomStart),bottomEnd : op(Op.NEG,this.bottomEnd)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MULTIPLY](other : double) : BorderRadiusDirectional {
        return BorderRadiusDirectional.only({
            topStart : op(Op.TIMES,this.topStart,other),topEnd : op(Op.TIMES,this.topEnd,other),bottomStart : op(Op.TIMES,this.bottomStart,other),bottomEnd : op(Op.TIMES,this.bottomEnd,other)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.DIVIDE](other : double) : BorderRadiusDirectional {
        return BorderRadiusDirectional.only({
            topStart : op(Op.DIVIDE,this.topStart,other),topEnd : op(Op.DIVIDE,this.topEnd,other),bottomStart : op(Op.DIVIDE,this.bottomStart,other),bottomEnd : op(Op.DIVIDE,this.bottomEnd,other)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.QUOTIENT](other : double) : BorderRadiusDirectional {
        return BorderRadiusDirectional.only({
            topStart : op(Op.QUOTIENT,this.topStart,other),topEnd : op(Op.QUOTIENT,this.topEnd,other),bottomStart : op(Op.QUOTIENT,this.bottomStart,other),bottomEnd : op(Op.QUOTIENT,this.bottomEnd,other)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MODULE](other : double) : BorderRadiusDirectional {
        return BorderRadiusDirectional.only({
            topStart : op(Op.MODULE,this.topStart,other),topEnd : op(Op.MODULE,this.topEnd,other),bottomStart : op(Op.MODULE,this.bottomStart,other),bottomEnd : op(Op.MODULE,this.bottomEnd,other)});
    }
    static lerp(a : BorderRadiusDirectional,b : BorderRadiusDirectional,t : double) : BorderRadiusDirectional {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return op(Op.TIMES,b,t);
        if (op(Op.EQUALS,b,null)) return op(Op.TIMES,a,(1.0 - t));
        return BorderRadiusDirectional.only({
            topStart : Radius.lerp(a.topStart,b.topStart,t),topEnd : Radius.lerp(a.topEnd,b.topEnd,t),bottomStart : Radius.lerp(a.bottomStart,b.bottomStart,t),bottomEnd : Radius.lerp(a.bottomEnd,b.bottomEnd,t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(direction : any) : BorderRadius {
        /* TODO (AssertStatementImpl) : assert (direction != null); */;
        switch (direction) {
            case TextDirection.rtl:
                return BorderRadius.only({
                    topLeft : this.topEnd,topRight : this.topStart,bottomLeft : this.bottomEnd,bottomRight : this.bottomStart});
            case TextDirection.ltr:
                return BorderRadius.only({
                    topLeft : this.topStart,topRight : this.topEnd,bottomLeft : this.bottomStart,bottomRight : this.bottomEnd});
        }
        return null;
    }
}

export namespace _MixedBorderRadius {
    export type Constructors = BorderRadiusGeometry.Constructors | '_MixedBorderRadius';
    export type Interface = Omit<_MixedBorderRadius, Constructors>;
}
@DartClass
export class _MixedBorderRadius extends BorderRadiusGeometry {
    constructor(_topLeft : any,_topRight : any,_bottomLeft : any,_bottomRight : any,_topStart : any,_topEnd : any,_bottomStart : any,_bottomEnd : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MixedBorderRadius(_topLeft : any,_topRight : any,_bottomLeft : any,_bottomRight : any,_topStart : any,_topEnd : any,_bottomStart : any,_bottomEnd : any) {
        this._topLeft = _topLeft;
        this._topRight = _topRight;
        this._bottomLeft = _bottomLeft;
        this._bottomRight = _bottomRight;
        this._topStart = _topStart;
        this._topEnd = _topEnd;
        this._bottomStart = _bottomStart;
        this._bottomEnd = _bottomEnd;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _topLeft : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _topRight : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _bottomLeft : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _bottomRight : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _topStart : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _topEnd : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _bottomStart : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _bottomEnd : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.NEGATE]() : _MixedBorderRadius {
        return _MixedBorderRadius(op(Op.NEG,this._topLeft),op(Op.NEG,this._topRight),op(Op.NEG,this._bottomLeft),op(Op.NEG,this._bottomRight),op(Op.NEG,this._topStart),op(Op.NEG,this._topEnd),op(Op.NEG,this._bottomStart),op(Op.NEG,this._bottomEnd));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MULTIPLY](other : double) : _MixedBorderRadius {
        return _MixedBorderRadius(op(Op.TIMES,this._topLeft,other),op(Op.TIMES,this._topRight,other),op(Op.TIMES,this._bottomLeft,other),op(Op.TIMES,this._bottomRight,other),op(Op.TIMES,this._topStart,other),op(Op.TIMES,this._topEnd,other),op(Op.TIMES,this._bottomStart,other),op(Op.TIMES,this._bottomEnd,other));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.DIVIDE](other : double) : _MixedBorderRadius {
        return _MixedBorderRadius(op(Op.DIVIDE,this._topLeft,other),op(Op.DIVIDE,this._topRight,other),op(Op.DIVIDE,this._bottomLeft,other),op(Op.DIVIDE,this._bottomRight,other),op(Op.DIVIDE,this._topStart,other),op(Op.DIVIDE,this._topEnd,other),op(Op.DIVIDE,this._bottomStart,other),op(Op.DIVIDE,this._bottomEnd,other));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.QUOTIENT](other : double) : _MixedBorderRadius {
        return _MixedBorderRadius(op(Op.QUOTIENT,this._topLeft,other),op(Op.QUOTIENT,this._topRight,other),op(Op.QUOTIENT,this._bottomLeft,other),op(Op.QUOTIENT,this._bottomRight,other),op(Op.QUOTIENT,this._topStart,other),op(Op.QUOTIENT,this._topEnd,other),op(Op.QUOTIENT,this._bottomStart,other),op(Op.QUOTIENT,this._bottomEnd,other));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.MODULE](other : double) : _MixedBorderRadius {
        return _MixedBorderRadius(op(Op.MODULE,this._topLeft,other),op(Op.MODULE,this._topRight,other),op(Op.MODULE,this._bottomLeft,other),op(Op.MODULE,this._bottomRight,other),op(Op.MODULE,this._topStart,other),op(Op.MODULE,this._topEnd,other),op(Op.MODULE,this._bottomStart,other),op(Op.MODULE,this._bottomEnd,other));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(direction : any) : BorderRadius {
        /* TODO (AssertStatementImpl) : assert (direction != null); */;
        switch (direction) {
            case TextDirection.rtl:
                return BorderRadius.only({
                    topLeft : op(Op.PLUS,this._topLeft,this._topEnd),topRight : op(Op.PLUS,this._topRight,this._topStart),bottomLeft : op(Op.PLUS,this._bottomLeft,this._bottomEnd),bottomRight : op(Op.PLUS,this._bottomRight,this._bottomStart)});
            case TextDirection.ltr:
                return BorderRadius.only({
                    topLeft : op(Op.PLUS,this._topLeft,this._topStart),topRight : op(Op.PLUS,this._topRight,this._topEnd),bottomLeft : op(Op.PLUS,this._bottomLeft,this._bottomStart),bottomRight : op(Op.PLUS,this._bottomRight,this._bottomEnd)});
        }
        return null;
    }
}

export class properties {
}
